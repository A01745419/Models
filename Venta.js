const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PruebaDeManejo = require('PruebaDeManejo');

const opinionSchema = new Schema({
    id: { type: Number, required: true },
    puntuacion: {type: Number, required: true },
    fecha: {type: Date, required: true }
});

const ventaSchema = new Schema({
    id: { type: Number, required: true },
    vendedor_id: { type: Number, required: true },
    usuario_comprador_id: { type: Number, required: true },
    automovil_id: { type: Number, required: true },
    tipo_subasta: { type: Boolean, required: true },
    tipo_venta: { type: String, required: true}, //???
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date }, // No es requerida al momento de iniciar la venta
    completada: { type: Boolean, required: true},
    estatus: {type: String, required: true },
    costo_total: { type: Number, required: true },
    opiniones_al_vendedor: [opinionSchema],
    prueba_de_manejo: [PruebaDeManejo]
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Automovil;