import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import bcrypt from "bcryptjs";



const Usuarios = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const formateado = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        this.setDataValue('nombre', formateado);
      },
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const formateado = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        this.setDataValue('apellido', formateado);
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: "usuarios",
    timestamps: true,
    hooks: {
      beforeCreate: async (usuario) => {
        usuario.password = await bcrypt.hash(usuario.password, 10);
      },
      beforeUpdate: async (usuario) => {
        if (usuario.changed('password')){
          usuario.password = await bcrypt.hash(usuario.password, 10);
        }
      },
    },
  }
);

Usuarios.prototype.checkPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password)
  return match;
}

export default Usuarios;

