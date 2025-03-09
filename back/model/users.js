import { DataTypes, Model } from "sequelize";
import sequelize from "../database/database-client.js";

// 1. Je crée ma classe qui étend Model
class Users extends Model {}

// 2. Je dois initialiser mon modèle
Users.init(
  // 2.1 Je définis les attributs de mon modèle
  {
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
    },
  },
  // 2.2 Informations supplémentaires sur mon entité
  {
    sequelize,
    tableName: "users", // Utilisation du nom en minuscules pour la table
  }
);

export default Users;
