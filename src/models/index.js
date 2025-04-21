import sequelize from "../config/db.js";
import Usuarios from "./Usuarios.js";
import Asistencia from "./Asistencia.js";

const models = { Usuarios, Asistencia };

const initModels = () => {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Modelos sincronizados con la base de datos.");
    })
    .catch((err) => {
      console.error("Error al sincronizar los modelos:", err);
    });
};

export { models, initModels };
