import express from "express";
import dotenv from "dotenv"
import cors from 'cors';
import serieRoutes from "./Routes/serieRoutes.js";
import personajeRoutes from "./Routes/personajeRoutes.js";
import asignacionRoutes from "./Routes/asignacionRoutes.js";
import conectarDB from "./config/db.js";
import { engine } from "express-handlebars";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//config servidor express
const app =  express();

//configurando vistas
app.set('views', path.join(__dirname, "views"));
app.engine(".hbs", engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
}));

app.set("view engine", ".hbs");

//Middleware

//habilita req.body para leer formularios
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//config variables de entorno
dotenv.config();

//conecta a la bd mongoDB
conectarDB();

//habilitar cors
app.use(cors());


//enrutamiento
app.use('/api/v1', serieRoutes)
app.use('/api/v1', personajeRoutes)
app.use('/api/v1', asignacionRoutes)

// archivos estaticos
app.use(express.static(path.join(__dirname, "public")));
//puerto para servidor
const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log(`Servidor listo en el puerto: ${PORT}`);
})