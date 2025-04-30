import { models } from '../models/index.js';

const createDefaultAdmin = async () => {
  const adminEmail = 'admin@ejemplo.com';

  const existingAdmin = await models.Usuarios.findOne({ where: { email: adminEmail } });

  if (!existingAdmin) {

    await models.Usuarios.create({
      nombre: 'Administrador',
      apellido: '',
      email: adminEmail,
      password: "admin123",
      rol: 'admin',
    });

    console.log('✅ Usuario administrador creado por defecto');
  } else {
    console.log('ℹ️ Usuario administrador ya existe');
  }
};

export default createDefaultAdmin;
