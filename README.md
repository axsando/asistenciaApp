# 📋 Sistema de Gestión de Asistencias
Sistema web para la gestión de asistencias de usuarios. Permite registrar usuarios, ver estadísticas mensuales, exportar reportes en PDF y Excel, y mucho más.

## 🚀 Funcionalidades Principales
- ✅ Login y logout de usuarios
- 👤 Crear, editar y eliminar usuarios
- 📅 Registrar asistencias
- 📈 Conteo mensual de asistencias, ausencias y días hábiles
- 📄 Exportar reportes en PDF o impresión directa
- 🔐 Control de roles

## ✅ Requisitos

- Node.js v18+
- PostgreSQL 

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/sistema-asistencias.git
cd sistema-asistencias
npm install
npm run start
```

## ⚙️ Configuracion

-Asegúrate de tener una base de datos PostgreSQL creada.

-Renombra el archivo .env.example a .env.

-Configura las variables de entorno en el archivo .env

-Ingresa por primera vez con este usuario creado por defecto:

-correo: admin@ejemplo.com
-contraseña: admin123

## 📑 Tabla de Contenido

- [📘 API de Gestion de Asistencia para Usuarios](#-api-de-gestion-de-asistencia-para-usuarios)
- [🧑‍💻 Endpoints de Login/Logout](#-endpoints-de-loginlogout)
  - [🔐 Endpoint: login](#-endpoint-login)
  - [🔐 Endpoint: logout](#-endpoint-logout)
- [🧑‍💻 Endpoints de Usuarios](#-endpoints-de-usuarios)
  - [🔐 Endpoint: Crear Usuario](#-endpoint-crear-usuario)
  - [🔐 Endpoint: Eliminar Usuario](#-endpoint-eliminar-usuario)
  - [🔐 Endpoint: Listar Usuarios](#-endpoint-listar-usuarios)
  - [🔐 Endpoint: Actualizar Contraseña Usuario](#-endpoint-actualizar-contraseña-usuario)
  - [🔐 Endpoint: Actualizar Rol](#-endpoint-actualizar-rol)
  - [🔐 Endpoint: Listar Asistencias de un Usuario](#-endpoint-listar-asistencias-de-un-usuario)
- [🧑‍💻 Endpoints de Asistencias](#-endpoints-de-asistencias)
  - [🔐 Endpoint: Crear Asistencia para el Usuario Autenticado](#-endpoint-crear-asistencia-para-el-usuario-autenticado)
  - [🔐 Endpoint: Listar Asistencia para el Usuario Autentificado](#-endpoint-listar-asistencia-para-el-usuario-autentificado)

# 🧑‍💻 Endpoints de Login/Logout

A continuación, se encuentran los endpoints correspondientes al login y logout. 

**Nota:** Todos los endpoints de login y logout deben iren la raiz `/`. Es decir, la URL base será siempre `/{accion}`, donde `{accion}` es la operación que deseas realizar (como `login`, `logout`, etc.).

## 🔐 Endpoint: login

**URL:** `/login`  
**Metodo:** `POST`

### Descripcion

Este endpoint permite a un usuario autenticarse en el sistema.

### Parametros

{
  "email": "juan.perez@example.com",
  "password": "123456"
}.

### Respuestas

- `200 OK`: Login exitoso.
- `500 Error`: Error de autenticacion: Email o contraseña incorrectos.

## 🔐 Endpoint: logout

**URL:** `/logout`  
**Metodo:** `GET`

### Descripcion

Este endpoint permite cerrar la sesión del usuario autenticado.

### Parametros

No tiene parametros.

### Respuestas

- `200 OK`.
- `500 Error`.


# 🧑‍💻 Endpoints de Usuarios

A continuación, se encuentran los endpoints correspondientes a la gestión de usuarios. Estos incluyen la creación, eliminación, actualización de contraseñas, roles, y más.

**Nota:** Todos los endpoints de gestión de usuarios deben ir precedidos por `/usuarios`. Es decir, la URL base será siempre `/usuarios/{accion}`, donde `{accion}` es la operación que deseas realizar (como `crear`, `eliminar`, etc.).

## 🔐 Endpoint: Crear Usuario

**URL:** `/crear`  
**Metodo:** `POST`

### Descripcion
Crea un usuario en el sistema.

### Parametros

{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan.perez@example.com",
  "password": "123456",
  "rol": "admin"
}

### Respuestas

- `201 Created`: Usuario creado correctamente.
- `500 Error`: Error al crear el usuario.

## 🔐 Endpoint: Eliminar Usuario

**URL:** `/eliminar/{id}`  
**Metodo:** `DELETE`

### Descripcion
Elimina un usuario del sistema segun su `id`.

### Parametros

id (en path) – obligatorio, tipo integer
ID del usuario que se desea eliminar. Debe ir en la URL, por ejemplo: /usuarios/eliminar/5.

### Respuestas

- `200 OK`: Usuario eliminado correctamente.
- `500 Error`: Error al eliminar el usuario.

## 🔐 Endpoint: Listar Usuarios

**URL:** `/listar`  
**Metodo:** `GET`

### Descripcion
Lista los usuarios del sistema.

### Parametros

No tiene parametros

### Respuestas

- `200 OK`.
- `500 Error`: Error al obtener los usuarios.

## 🔐 Endpoint: Actualizar Contraseña Usuario

**URL:** `/actualizarContra/{id}`  
**Metodo:** `POST`

### Descripcion
Actualiza la contraseña de un usuario del sistema segun su `id`.

### Parametros

id (en path) – obligatorio, tipo integer
ID del usuario que se desea actualizar la contraseña. Debe ir en la URL, por ejemplo: /usuarios/actualizarContra/5.

### Respuestas

- `200 OK`: Contraseña actualizada exitosamente.
- `500 Error`: Error al actualizar la contraseña.

## 🔐 Endpoint: Actualizar Rol

**URL:** `/actualizarRol/{id}`  
**Metodo:** `POST`

### Descripcion
Actualiza el rol de un usuario del sistema segun su `id`.

### Parametros

id (en path) – obligatorio, tipo integer
ID del usuario que se desea actualizar el rol. Debe ir en la URL, por ejemplo: /usuarios/actualizarRol/5.

### Respuestas

- `200 OK`: Rol actualizado exitosamente.
- `500 Error`: Error al actualizar el rol.

## 🔐 Endpoint: Listar Asistencias de un Usuario

**URL:** `/listarFechaUsuario/{id}`  
**Metodo:** `GET`

### Descripcion
Lista las asistencias de un usuario del sistema segun su `id`.

### Parametros

id (en path) – obligatorio, tipo integer
ID del usuario que se desea visualizar las asistencias. Debe ir en la URL, por ejemplo: /usuarios/listarFechaUsuario/5.

### Respuestas

- `200 OK`.
- `500 Error`: error.

## 🧑‍💻 Endpoints de Asistencias

A continuación, se encuentran los endpoints correspondientes a la gestión de asistencia. Estos incluyen la creación y el llamado de las asistencias.

**Nota:** Todos los endpoints de gestión de asistencia deben ir precedidos por `/asistencia`. Es decir, la URL base será siempre `/asistencia/{accion}`, donde `{accion}` es la operación que deseas realizar (como `crear`, `listar`, etc.).

## 🔐 Endpoint: Crear Asistencia para el Usuario Autenticado

**URL:** `/crear`  
**Metodo:** `POST`

### Descripcion

Este endpoint permite al usuario autenticado (es decir, el usuario que ha iniciado sesión) crear una nueva asistencia en el sistema.

### Parametros

{
  "userId":"1",
  "tipo":"entrada"
}


### Respuestas

- `200 Created`: registro creado.
- `500 Error`: Error al crear la asistencia.

## 🔐 Endpoint: Listar Asistencia para el Usuario Autentificado

**URL:** `/listar`  
**Metodo:** `GET`

### Descripcion

Este endpoint permite al usuario autenticado (es decir, el usuario que ha iniciado sesión) lsitar sus asistencias en el sistema.

### Parametros

No tiene parametros.

### Respuestas

- `200 OK`.
- `500 Error`: Error al obtener las asistencias.


Desarrollado por [Alexander](https://github.com/axsando) y [Michael](https://github.com/mrMich33)
