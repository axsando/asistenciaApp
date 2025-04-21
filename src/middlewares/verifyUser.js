import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  const id = req.params.id;

  // Validar que el token exista
  if (!token) {
    return res.status(401).send("Token no proporcionado");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.usuario = decoded;

    // Comparación segura entre ID del token y el parámetro de ruta
    if (String(req.usuario.id) === String(id)) {
      next();
    } else {
      return res.status(403).send("No autorizado");
    }
  } catch (err) {
    console.error("Error al verificar token:", err.message);
    return res.redirect("/");
  }
};

export default verifyUser;
