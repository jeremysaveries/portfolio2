import express from "express";
import session from "express-session";
import "dotenv/config";
import router from "../back/router.js";
const app = express();
app.use(express.json()); // Permet de lire le JSON dans les requêtes

// Configuration des sessions (si besoin)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "monsecret", // Vérifie que cette valeur est définie
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Mettre `true` en production avec HTTPS
  })
);

app.use(router);

const port = 4001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
