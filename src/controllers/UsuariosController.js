import UsuariosService from "../services/UsuariosService.js";
import AsistenciaService from "../services/AsistenciaService.js";

class UsuariosController {
    static async crearUsuario(req, res) {
        try {
            const usuario = req.body;
            await UsuariosService.crearUsuario(usuario);
            res.redirect('/usuarios/crearUsuario')
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el usuario: ' + error.message });
        }
    }
    static async obtenerUsuarios(req, res) {
        try {
            const usuarios = await UsuariosService.obtenerUsuarios();
            res.render('./gestion/listarUsuarios', { title: 'Listar Usuarios',role: req.usuario.rol ,usuarios})
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los usuarios: ' + error.message });
        }
    }
    static async eliminarUsuario(req, res) {
        try {
            const id = req.params.id;
            await UsuariosService.eliminarUsuario(id);
            res.status(200).json({ success: true, message: 'Usuario eliminado correctamente.' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario: ' + error.message });
        }

    }
    static async actualizarContrasena(req, res) {
        try {
            const id = req.params.id;
            const password = req.body
            await UsuariosService.actualizarContrasena(id, password);
            res
                .status(200).json({ success: true, message: 'Contraseña actualizada exitosamente'})
        } catch (error) {
            res
            .status(500).json({ error: 'Error al actualizar la contraseña: ' + error.message });
        }
    }
    static async obtenerAsistenciasPorUsuario(req, res) {
        try {
          const id = req.params.id;
          const usuarios = await UsuariosService.obtenerAsistenciasPorUsuarioId(id);
          const conteo = await AsistenciaService.conteoAsistencias(id);
          res.render('./gestion/listarAsistenciaUsuario', { title: 'Listar Usuarios', usuarios, conteo, role: req.usuario.rol})
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
    }
    static async actualizarRol(req, res) {
        try {
            const id = req.params.id;
            const rol = req.body
            await UsuariosService.actualizarRol(id, rol);
            res.status(200).json({ success: true, message: 'Rol actualizado exitosamente'});
        } catch (error) {
            res.status(500).json({ error: 'Error al actualizar el rol: ' + error.message });
        }
    }
}

export default UsuariosController;