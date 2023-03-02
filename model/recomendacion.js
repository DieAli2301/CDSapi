const mongoose = require("mongoose");

const RecomendacionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Recomendaciones", RecomendacionSchema);