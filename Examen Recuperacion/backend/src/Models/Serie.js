import mongoose from "mongoose";

const serieSchema = mongoose.Schema({
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    clasificacion:{
      type: String,
      required: true,
      trim: true,
    },
   
  });
  
  const Serie = mongoose.model("Serie", serieSchema);
  
  export default Serie;