import express from 'express';
import { consultarPersonaje, insertarPersonaje} from '../Controllers/personajeController.js'



const router = express.Router();

router.get('/personajes-serie-tv', consultarPersonaje);
router.post('/personajes-serie-tv', insertarPersonaje);




export default router;