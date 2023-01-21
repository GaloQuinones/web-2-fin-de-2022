import express from 'express';
import { consultarEntidad, insertarEntidad} from '../Controllers/serieController.js'



const router = express.Router();

router.get('/serie-tv', consultarEntidad);
router.post('/serie-tv', insertarEntidad);




export default router;