import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import checkRole from "../middlewares/verifyRole.js";

const router = Router();

router.get('/', verifyToken,checkRole(["admin", "usuario", "jefatura"]), (req, res) => {
    res.render('home/home', { title: 'Home', role:req.usuario.rol})
})

export default router;