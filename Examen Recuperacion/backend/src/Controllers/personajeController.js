import Personaje from "../Models/Personaje.js";


// Todo Consultar facultad internos de ULEAM
const consultarPersonaje = async (req, res) => {
    const personaje = await Personaje.find();

  if (personaje.length > 0) {
    res.json(personaje);
  }else{
    const error = new Error("No hay personaje registrado.");
    //retorna mensaje de error
    return res.status(400).json({ msg: error.message });
  }

};


// Todo Registrar facultads internos de ULEAM
const insertarPersonaje = async (req, res) => {
    
    const { nombre } = req.body;
    // console.log(req.body);

  //Comprobar 
  const existePersonaje = await Personaje.findOne({ nombre });

  if (existePersonaje) {
    const error = new Error("El personaje ya se encuentra registrado.");
    //retorna mensaje de error
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Guardar 
    const personaje = new Personaje(req.body);
    const personajeGuardado = await personaje.save();
    res.json(personajeGuardado);
  } catch (error) {
    console.log(error);
  }

};

export {
    consultarPersonaje,
    insertarPersonaje
}