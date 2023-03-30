const mongoose = require("mongoose");

const FavoritoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("/favoritos", FavoritoSchema)