import { models } from '../models/index.js';

class UsuariosService {
    static async crearUsuario(usuario) {
        try {
            const nuevoUsuario = await models.Usuarios.create(usuario);
            return nuevoUsuario;
        } catch (error) {
            throw new Error('Error al crear el usuario: ' + error.message);
        }
    }
    static async obtenerUsuarios() {
        try {
            const usuarios = await models.Usuarios.findAll();
            return usuarios;
        } catch (error) {
            throw new Error('Error al obtener los usuarios: ' + error.message);
        }
    }
    static async eliminarUsuario(id) {
        try {
            const usuario = await models.Usuarios.findByPk(id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            await usuario.destroy();
        } catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error.message);
        }
    }
    static async actualizarContrasena(id, password) {
        try {
            const usuario = await models.Usuarios.findByPk(id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            await usuario.update(password)
            return usuario
        } catch (error) {
            throw new Error('Error al actualizar contraseña: ' + error.message);
        }
    }
    static async obtenerAsistenciasPorUsuarioId(id) {
        try {
          const usuarios = await models.Usuarios.findByPk(id, {
            include: [{
              model: models.Asistencia,
              attributes: ['tipo', 'fecha']
            }],
            attributes: ['id', 'nombre', 'apellido']
          });
          return usuarios;
        } catch (error) {
          throw new Error('Error al obtener asistencias: ' + error.message);
        }
    }
    static async actualizarRol(id, rol) {
        try {
            const usuario = await models.Usuarios.findByPk(id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            await usuario.update(rol)
            return usuario
        } catch (error) {
            throw new Error('Error al actualizar el rol: ' + error.message);
        }
    }

    
}

export default UsuariosService;