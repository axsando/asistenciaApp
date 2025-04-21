import express from 'express';
import cookieParser from 'cookie-parser';
import UsuariosRouter from './routes/UsuariosRouter.js';
import AsistenciaRouter from './routes/AsistenciaRouter.js';
import LoginRouter from './routes/LoginRouter.js';
import AuthRouter from './routes/AuthRouter.js';
import HomeRouter from './routes/HomeRouter.js';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src/views'));
app.use(express.static(path.join(path.resolve(), "public")));


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use('/usuarios', UsuariosRouter);
app.use('/asistencia', AsistenciaRouter);
app.use("/", LoginRouter);
app.use("/login", AuthRouter)
app.use("/home", HomeRouter)

export default app;