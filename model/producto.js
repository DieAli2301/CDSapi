const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
  cantidad: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Producto", ProductoSchema);