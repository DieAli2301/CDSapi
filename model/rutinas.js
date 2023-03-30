const mongoose = require('mongoose');

const rutinaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Rutinas", rutinaSchema);
