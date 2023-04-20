const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Imagen = require('Imagen');

const pruebaDeManejoSchema = new Schema({
    id: { type: Number, required: true },
    fecha_agenda: {type: Date, required: true },
    fecha_prueba: {type: Date, required: true },
    foto: [Imagen],
    costo: { type: Number, required: true },
    duracion: {type: Number, required: true },
    estatus: {type: String, required: true }
});

const Venta = mongoose.model('PruebaDeManejo', pruebaDeManejoSchema);

module.exports = PruebaDeManejo;