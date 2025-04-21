import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.redirect("/")
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.usuario = decoded;
        next();
    } catch (err) {
        res.redirect("/")
    }
};

export default verifyToken;