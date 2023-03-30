// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const RegistroSchema = new mongoose.Schema({
  apellido: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("Registro", RegistroSchema);
