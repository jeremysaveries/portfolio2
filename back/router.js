import express from "express";
import usersController from "./controllers/usersController.js";
import projectsController from "./controllers/projectController.js";

const router = express.Router();

// Route pour tester l'API
router.get("/login", usersController.login);
router.get("/project", projectsController.getAll);
router.get("/project/:id", projectsController.getOne);

// Route pour la connexion (POST)
router.post("/login", usersController.loginAction);
router.post("/addproject", projectsController.create);

router.delete("/project/:id", projectsController.deleteProject);

export default router;
