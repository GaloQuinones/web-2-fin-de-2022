import express from 'express';
import Personaje from "../Models/Personaje.js";
import Serie from "../Models/Serie.js";
import { consultarAsignacion, insertarAsignacion} from '../Controllers/asignacionController.js'



const router = express.Router();

router.get('/asignacion-serie-tv', consultarAsignacion);
router.post('/asignacion-serie-tv', insertarAsignacion);

router.get('/formulario-asignacion-serie-tv', async (req, res) => {
    const personajes = await Personaje.find().lean();
    // console.log(personajes);
    const series = await Serie.find().lean();
    res.render('index',{ personajes, series });
});

router.get('/success', (req, res) => {
    res.render("success");
});

export default router;