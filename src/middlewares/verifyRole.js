import jwt from "jsonwebtoken"

const checkRole = (requiredRole) => {
  return (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(200)
        .json({ success: false, message: "Token no proporcionado" });
    }
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (!requiredRole.includes(decoded.rol)) {
        res
          .status(403)
          .json({
            success: false,
            message: "No tienes permiso para acceder a esta ruta",
          });
      }
      req.usuario = decoded;
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "token invalido" });
    }
  };
};

export default checkRole;
