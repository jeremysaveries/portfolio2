import { scryptSync, timingSafeEqual, randomBytes } from "node:crypto";

class Scrypt {
  static hash(password) {
    const salt = randomBytes(16).toString("hex");
    const buf = scryptSync(password, salt, 64);
    const hashedPassword = `${buf.toString("hex")}.${salt}`;

    console.log("Mot de passe haché :", hashedPassword); // 🔹 Affiche le hash généré

    return hashedPassword;
  }

  static verify(plainTextpassword, hash) {
    const [hashedPassword, salt] = hash.split(".");
    const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
    const clearPasswordBuffer = scryptSync(plainTextpassword, salt, 64);
    return timingSafeEqual(hashedPasswordBuf, clearPasswordBuffer);
  }
}

export default Scrypt;

// Exemple d'utilisation :
const motDePasse = "monSuperMotDePasse";
Scrypt.hash(motDePasse); // 🔹 Exécute la fonction pour voir le hash dans la console
