import Asignacion from "../Models/Asignacion.js";


// Todo Consultar facultad internos de ULEAM
const consultarAsignacion = async (req, res) => {
    const asignacion = await Asignacion.find();

  if (asignacion.length > 0) {
    res.json(asignacion);
  }else{
    const error = new Error("No hay asignacion registrada.");
    //retorna mensaje de error
    return res.status(400).json({ msg: error.message });
  }

};


// Todo Registrar facultads internos de ULEAM
const insertarAsignacion = async (req, res) => {
    
    const { id_serie, id_personaje, papel, papel_tipo, fecha_inicio, fecha_fin, temporadas } = req.body;
    const errors = [];
    if (!id_serie || !id_personaje || !papel || !papel_tipo || !fecha_inicio || !fecha_fin || !temporadas) {
      errors.push({ text: "Debe llenar todos los campos del formulario!"})
    }

    if (errors.length > 0) {
      res.render("index",{
        errors,
        id_serie, 
        id_personaje,
        papel, 
        papel_tipo, 
        fecha_inicio, 
        fecha_fin, 
        temporadas
      })
      
    }else{
      
      //Comprobar 
      const existeAsignacion = await Asignacion.findOne({  id_serie,  id_personaje });
    
      if (existeAsignacion) {
        const error = new Error("La asignacion ya se encuentra registrada.");
        //retorna mensaje de error
        return res.status(400).json({ msg: error.message });
      }
    
      try {
        
        const asignacion = new Asignacion(req.body);
        await asignacion.save();
        res.redirect("success");
      } catch (e) {
        const error = new Error("No se registró la asignación, verifique los datos.");
        //retorna mensaje de error
        return res.status(400).json({ msg: error.message });
      }
    }


};

export {
    consultarAsignacion,
    insertarAsignacion
}