import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuarios from "./Usuarios.js";

const Asistencia = sequelize.define("asistencia", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true ,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "usuarios",
      key: "id",

    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  tipo: {
    type: DataTypes.ENUM("entrada", "salida", "salida_colacion", "entrada_colacion"),
   
   


  }
}, {
  tableName: "asistencia",
  timestamps: false,
});

Usuarios.hasMany(Asistencia, { foreignKey: "userId"});
Asistencia.belongsTo(Usuarios, { foreignKey: "userId"});

export default Asistencia;

