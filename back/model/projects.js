import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database.js";

class Projects extends Model {}

Projects.init(
  {
    title: {
      type: DataTypes.TEXT,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    url: {
      type: DataTypes.STRING(255), // 255 est la taille maximale, tu peux ajuster selon tes besoins
      allowNull: true, // Facultatif, si tu veux que cette colonne soit optionnelle
    },

    image: {
      type: DataTypes.STRING(255), // Taille maximale de l'URL ou chemin de l'image
      allowNull: true, // Facultatif si tu veux que l'image soit optionnelle
    },
  },

  {
    sequelize,
    tableName: "projects",
  }
);

export default Projects;
