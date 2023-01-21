import Serie from "../Models/Serie.js";


// Todo Consultar facultad internos de ULEAM
const consultarEntidad = async (req, res) => {
    const serie = await Serie.find();

  if (serie.length > 0) {
    res.json(serie);
  }else{
    const error = new Error("No hay serie registrada.");
    //retorna mensaje de error
    return res.status(400).json({ msg: error.message });
  }

};


// Todo Registrar facultads internos de ULEAM
const insertarEntidad = async (req, res) => {
    
    const { nombre } = req.body;
    // console.log(req.body);

  //Comprobar 
  const existeSerie = await Serie.findOne({ nombre });

  if (existeSerie) {
    const error = new Error("La serie ya se encuentra registrada.");
    //retorna mensaje de error
    return res.status(400).json({ msg: error.message });
  }

  try {
    //Guardar 
    const serie = new Serie(req.body);
    const serieGuardada = await serie.save();
    res.json(serieGuardada);
  } catch (error) {
    console.log(error);
  }

};

export {
    consultarEntidad,
    insertarEntidad
}