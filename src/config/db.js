import { Sequelize } from "sequelize";
import config from "./config.js";

const dbConfig = config.db;

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: false,
  }
);

export default sequelize;
