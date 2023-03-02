const mongoose = require("mongoose");

const RutinaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  rutina: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Rutinas", RutinaSchema);
