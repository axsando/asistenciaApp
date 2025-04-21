import Sequelize, { Op } from "sequelize";
import { models } from "../models/index.js"

class AsistenciaService {
    static async crearAsistencia(userId, tipo) {
        try {
            const fecha = new Date();

            const inicioDia = new Date(fecha);
            inicioDia.setHours(0, 0, 0, 0);

            const finDia = new Date(fecha);
            finDia.setHours(23, 59, 59, 999);

            const asistenciaExistente = await models.Asistencia.findOne({
              where: {
                userId,
                tipo,
                fecha: {
                  [Op.between]: [inicioDia, finDia],
                },
              },
            });

            if (asistenciaExistente) {
              throw new Error(`, Ya existe un registro de tipo '${tipo}' para hoy`);
            }

            const nuevaAsistencia = await models.Asistencia.create({userId, tipo, fecha});
            return nuevaAsistencia;
            
        } catch (error) {
            throw new Error('Error al crear la asistencia' + error.message);
        }
    }
    static async obtenerAsistencias(userId) {
        try {
          const asistencias = await models.Asistencia.findAll({
            where: { userId}
          });

          return asistencias;
        } catch (error) {
          throw new Error('Error al obtener las asistencias ' + error.message);
        }
    }

    static async conteoAsistencias(userId) {
      try {
        const hoy = new Date();
        const anio = hoy.getFullYear();
        const mes = hoy.getMonth();

        const diasHastaHoy = [];
        
        for (let dia = 1; dia <= hoy.getDate(); dia++) {
          const fecha = new Date(Date.UTC(anio, mes, dia));
          const diaSemana = fecha.getUTCDay();
          if (diaSemana !== 0 && diaSemana !==6) {
            diasHastaHoy.push(fecha.toISOString().slice(0, 10));
          }
        }
    
        const conteo = await models.Asistencia.findAll({
          where: {
            userId,
            tipo: 'entrada',
            fecha: {
              [Sequelize.Op.between]: [
                new Date(anio, mes, 1),
              hoy
              ],
              [Sequelize.Op.and]: [
                Sequelize.where(Sequelize.fn('EXTRACT', Sequelize.literal('DOW FROM fecha')),
              '!=', 0),
              Sequelize.where(Sequelize.fn('EXTRACT', Sequelize.literal('DOW FROM fecha')),
              '!=', 6),
              ]
            }
          },
          attributes: [
            [Sequelize.fn('DATE', Sequelize.col('fecha')), 'fecha']
          ],
          group: [Sequelize.fn('DATE', Sequelize.col('fecha'))],
          raw: true
        });

        const diasAsistidos = conteo.map(a => a.fecha);

        const asistenciasSet = new Set(diasAsistidos);
        const diasAusentes = diasHastaHoy.filter(dia => !asistenciasSet.has(dia));
        
        return {
          asistencias: diasAsistidos.length,
          ausencias: diasAusentes.length,
          diasHabiles: diasHastaHoy.length
        };

    } catch (error) {
      throw new Error('Error al obtener el conteo de las asistencias ' + error.message);
    }
  }

  static async crearAsistenciaDiaAusente(userId, tipo, fecha) {
    try {
        const nuevaAsistencia = await models.Asistencia.create({userId, tipo, fecha});
        return nuevaAsistencia;
    } catch (error) {
        throw new Error('Error al crear la asistencia service: ' + error.message);
    }
}
}

export default AsistenciaService;