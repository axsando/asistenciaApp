import sequelize from "../config/db.js";
import Usuarios from "./Usuarios.js";
import Asistencia from "./Asistencia.js";
import createDefaultAdmin from "../utils/seedAdmin.js";

const models = { Usuarios, Asistencia };

const initModels = () => {
  sequelize
    .sync({ alter: true })
    .then(async() => {
      console.log("Modelos sincronizados con la base de datos.");
      await createDefaultAdmin();
    })
    .catch((err) => {
      console.error("Error al sincronizar los modelos:", err);
    });
};

export { models, initModels };
