// Modelo de datos de Mongo
const mongoose = require("mongoose");

// Definicion del esquema a utilizar 
const LoginSchema = new mongoose.Schema({
  apellido: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  edad: {
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
  contrasena: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: String,
    required: true,
  },
  sexo:{
    type:String,
    required: true,
  },
});

module.exports = mongoose.model("Login", LoginSchema);
