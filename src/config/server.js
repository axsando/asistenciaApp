import app from "../app.js";
import sequelize from "../config/db.js";
import config from "./config.js";
import { initModels } from "../models/index.js";

const serverConfig = config.server;

const initServer = () => {
  sequelize.authenticate()
    .then(() => {
      console.log("Conexion exitosa a la base de datos.");
      initModels();
      app.listen(serverConfig.port, () => {
        console.log(`Server is running on port http://localhost:${serverConfig.port}`);
        console.log("Press Ctrl+C to stop the server");
      });
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
};

export default initServer;
