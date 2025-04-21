import AsistenciaService from "../services/AsistenciaService.js";

class AsistenciaController {
    static async crearAsistencia(req, res) {
        try {
            const {tipo, userId} = req.body;
            await AsistenciaService.crearAsistencia(userId, tipo);
            res.status(200).json({success: true, message: 'registro creado'});
        } catch (error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
    static async obtenerAsistencias(req, res) {
        try {
            const userId = req.usuario.id;
            const asistencia = await AsistenciaService.obtenerAsistencias(userId);
            const conteo = await AsistenciaService.conteoAsistencias(userId);
            res.render('./asistencia/listarAsistencias', { title: 'Listar Asistencias', asistencia, conteo, role: req.usuario.rol})
        } catch(error) {
            res.status(500).json({ error: 'Error al obtener las asistencias ' + error.message});
        }
    }

    static async crearAsistenciaDiaAusente(req, res) {
        try {
            const userId = req.params.id;
            const { tipo, fecha } = req.body;
            const fechaFormateada = new Date(`${fecha}T13:00:00-00:00`);
            await AsistenciaService.crearAsistenciaDiaAusente(userId, tipo, fechaFormateada)
            res.status(200).json({success: true, message: 'registro creado'});
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la asistencia' + error.message});
        }
    }
}

export default AsistenciaController;