import express from "express";
import usersController from "./controllers/usersController.js";

const router = express.Router();

// Route pour tester l'API
router.get("/login", usersController.login);

// Route pour la connexion (POST)
router.post("/login", usersController.loginAction);

export default router;
