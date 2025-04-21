import { Router } from "express";
import UsuariosController from "../controllers/UsuariosController.js";
import verifyToken from "../middlewares/verifyToken.js";
import checkRole from "../middlewares/verifyRole.js";
import verifyUser from "../middlewares/verifyUser.js";

const router = Router();

router.get('/crearUsuario', verifyToken, checkRole("admin"), (req, res) => {
    res.render('gestion/crearUsuario', {title: 'Crear Usuario', role: req.usuario.rol})
})

router.get('/actualizarContra', verifyToken, checkRole(["admin", "jefatura", "usuario"]), (req, res) => {
    res.render('gestion/cambiarContraseña', {title: 'Cambiar contraseña', role: req.usuario.rol, id: req.usuario.id})
})


router.post("/crear", verifyToken, checkRole("admin"), UsuariosController.crearUsuario);
router.get("/listar", verifyToken,checkRole(["admin", "jefatura"]), UsuariosController.obtenerUsuarios);
router.delete("/eliminar/:id", verifyToken, checkRole(["admin", "jefatura"]), UsuariosController.eliminarUsuario);
router.post("/actualizarContra/:id", verifyToken,verifyUser,checkRole(["admin", "usuario", "jefatura"]),UsuariosController.actualizarContrasena);
router.get('/listarFechaUsuario/:id',verifyToken, checkRole(["admin", "jefatura"]), UsuariosController.obtenerAsistenciasPorUsuario);
router.post("/actualizarRol/:id", verifyToken, checkRole("admin"), UsuariosController.actualizarRol);

export default router;

