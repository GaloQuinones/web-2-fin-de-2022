import mongoose from "mongoose";

const asignacionSchema = mongoose.Schema({
  id_serie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Serie",
  },
  id_personaje: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Personaje",
  },
  papel: {
    type: String,
    required: true,
    trim: true,
  },
  papel_tipo: {
    type: String,
    required: true,
    trim: true,
  },
  fecha_inicio: {
    type: Date,
    required: true,
    trim: true,
  },
  fecha_fin:{
    type: Date,
    required: true,
    trim: true,
  },
  temporadas: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Asignacion = mongoose.model("Asignacion", asignacionSchema);

export default Asignacion;
