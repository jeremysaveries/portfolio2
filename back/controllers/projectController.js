import { Projects } from "../index.js";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  description: z.string().min(1, "La description est requise"),
  link: z.string().url("Le lien doit être valide").optional(),
  image_url: z.string().url("L'URL de l'image doit être valide").optional(),
});

const projectsController = {
  // Endpoint pour afficher tous les projets
  async getAll(req, res) {
    try {
      const projects = await Projects.findAll();
      res.json(projects);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({
          error: "Une erreur est survenue lors de la récupération des projets",
        });
    }
  },

  // Endpoint pour ajouter un nouveau projet
  async create(req, res) {
    const validationResult = projectSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res
        .status(400)
        .json({
          error: "Données invalides",
          details: validationResult.error.errors,
        });
    }

    const projectData = validationResult.data;

    try {
      const newProject = await Projects.create({
        title: projectData.title,
        description: projectData.description,
        link: projectData.link || null,
        image_url: projectData.image_url || null,
      });

      res
        .status(201)
        .json({ message: "Projet ajouté avec succès", project: newProject });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Une erreur est survenue lors de l'ajout du projet" });
    }
  },

  // Endpoint pour afficher un projet spécifique
  async getOne(req, res) {
    const projectId = req.params.id;
    try {
      const project = await Projects.findByPk(projectId);

      if (!project) {
        return res.status(404).json({ error: "Projet non trouvé" });
      }

      res.json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Une erreur est survenue" });
    }
  },
};

export default projectsController;
