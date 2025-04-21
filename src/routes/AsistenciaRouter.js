import { Router } from "express";
import AsistenciaController from "../controllers/AsistenciaController.js";
import verifyToken from "../middlewares/verifyToken.js";
import checkRole from "../middlewares/verifyRole.js";


const router = Router();

router.get('/crear',verifyToken, (req, res) => {
    res.render('asistencia/ingresarAsistencia', { title: 'Ingresar Asistencia', userId: req.usuario.id, role: req.usuario.rol})
})

router.post("/crear",verifyToken, AsistenciaController.crearAsistencia);
router.get("/listar",verifyToken, AsistenciaController.obtenerAsistencias);
router.post("/crearDiaAusente/:id", verifyToken, checkRole("admin"), AsistenciaController.crearAsistenciaDiaAusente);
export default router;