import mongoose from "mongoose";

const personajeSchema = mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    anio_expe:{
      type: Number,
      required: true,
      trim: true,
    },
   
  });
  
  const Personaje = mongoose.model("Personaje", personajeSchema);
  
  export default Personaje;