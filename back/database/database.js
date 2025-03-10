import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.PG_URL, {
  // De base sequelize utilise le camelCase pour les noms de colonnes
  // Je veux que sequelize utilise le snake_case
  define: {
    underscored: true,
  },
});

export default sequelize;
