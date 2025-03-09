import Users from "./users";
import Projects from "./projects";

users.hasMany(projets, {
  foreignKey: "users_id",
  as: "projet",
});

projet.belongsTo(users, {
  foreignKey: "users_id", // La clé étrangère permettant de faire l'association
  as: "user", // Le nom de l'association
});

export { Users, Projects };
