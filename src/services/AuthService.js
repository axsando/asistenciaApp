import { models } from "../models/index.js";
import jwt from "jsonwebtoken";

class AuthService {
    static async postLogin(email, password) {
        try {
            const usuario = await models.Usuarios.findOne({ where: { email }});
            if (!usuario || !(await usuario.checkPassword(password))) {
                throw new Error("Email o contraseña incorrectos");
            };
            const token = jwt.sign(
                {id: usuario.id, email: usuario.email, rol: usuario.rol, nombre: usuario.nombre, apellido: usuario.apellido},
                process.env.SECRET_KEY,
                { expiresIn: "1h"},
            );
            return token;
        } catch (error) {
            throw new Error ( 'Error de autenticacion: ' + error.message);
        }
    } 
};

export default AuthService;