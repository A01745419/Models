const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagenSchema = new Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    fecha_de_subida: {type: Date, required: true },
    link: { type: String, required: true }
});

const Venta = mongoose.model('Imagen', imagenSchema);

module.exports = Imagen;