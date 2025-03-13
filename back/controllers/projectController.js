import { Projects } from "../model/index.js";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  description: z.string().min(1, "La description est requise"),
  link: z.string().url("Le lien doit être valide").optional(),
});

const projectsController = {
  async getAll(req, res) {
    try {
      const projects = await Projects.findAll();
      res.json(projects);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des projets" });
    }
  },

  async create(req, res) {
    const validationResult = projectSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: "Données invalides",
        details: validationResult.error.errors,
      });
    }

    const projectData = validationResult.data;

    try {
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

      const newProject = await Projects.create({
        title: projectData.title,
        description: projectData.description,
        link: projectData.link || null,
        image_url: imageUrl,
      });

      res
        .status(201)
        .json({ message: "Projet ajouté avec succès", project: newProject });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de l'ajout du projet" });
    }
  },

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

  async deleteProject(req, res) {
    try {
      const projectId = req.params.id;

      // Vérifier si le projet existe
      const project = await Projects.findByPk(projectId);
      if (!project) {
        return res.status(404).json({ error: "Projet non trouvé" });
      }

      // Supprimer le projet
      await Projects.destroy({ where: { id: projectId } });

      res.status(200).json({ message: "Projet supprimé avec succès" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Une erreur est survenue lors de la suppression du projet",
      });
    }
  },
};

export default projectsController;
