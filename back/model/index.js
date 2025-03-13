import Users from "./users.js";
import Projects from "./projects.js";

// Associer les utilisateurs à leurs projets
Users.hasMany(Projects, {
  foreignKey: "user_id", // Assurez-vous que la colonne existe bien
  as: "projects", // Nom de l'association
});

// Associer un projet à son utilisateur
Projects.belongsTo(Users, {
  foreignKey: "user_id",
  as: "user",
});

export { Users, Projects };
