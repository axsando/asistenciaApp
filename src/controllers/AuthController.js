import AuthService from "../services/AuthService.js";

class AuthController {
    static async postLogin(req, res) {
        try {
            const { email, password } = req.body;
            const token = await AuthService.postLogin(email, password);
            res.cookie("token", token, { httpOnly: true});
            res.status(200).json({ success: true, message: "Login exitoso"})
        } catch (error){
            res.status(500).json({ error: 'Error de autentificacion: ' + error.message });
        };
    };
};

export default AuthController;