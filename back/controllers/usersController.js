import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { Users } from "../model/index.js";
import Scrypt from "../utils/scrypt.js";

config(); // Charge les variables d'environnement

// Schéma de validation des identifiants
const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Mot de passe trop court"),
});

const usersController = {
  // Endpoint pour vérifier si l'API fonctionne
  login(req, res) {
    res.json({ message: "Endpoint de connexion disponible" });
  },

  // Action de connexion
  async loginAction(req, res) {
    const resultValidation = loginSchema.safeParse(req.body);

    if (!resultValidation.success) {
      return res.status(400).json({ error: "Identifiants incorrects" });
    }

    const dataValidated = resultValidation.data;
    const adminEmail = process.env.ADMIN_EMAIL; // Email admin sécurisé via .env

    try {
      // Vérifie si l'email correspond à l'admin
      if (dataValidated.email !== adminEmail) {
        return res.status(403).json({ error: "Accès refusé" });
      }

      // Récupère l'utilisateur en base
      const user = await Users.findOne({ where: { email: adminEmail } });

      if (!user) {
        return res.status(401).json({ error: "Identifiants incorrects" });
      }

      // Vérifie le mot de passe avec Scrypt
      const isValidPassword = await Scrypt.verify(
        Buffer.from(user.password, "base64"), // Convertir le hash en buffer
        dataValidated.password
      );

      if (!isValidPassword) {
        return res.status(401).json({ error: "Identifiants incorrects" });
      }

      // Génération du token JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET, // Clé secrète stockée en .env
        { expiresIn: "1h" } // Expiration du token
      );

      return res.json({ message: "Connexion réussie", token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Une erreur est survenue" });
    }
  },

  // Afficher le profil de l'admin
  async profile(req, res) {
    if (!req.session.user) {
      return res
        .status(401)
        .json({ message: "Non autorisé, veuillez vous connecter." });
    }

    const user = req.session.user;

    // Afficher les informations de l'admin, y compris son nom
    res.json({
      message: "Profil de l'admin",
      user: {
        id: user.id,
        email: user.email,
        name: user.name, // Afficher le nom de l'utilisateur ici
      },
    });
  },
};

export default usersController;
