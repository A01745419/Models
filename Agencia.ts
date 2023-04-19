import { Schema, model, Types } from 'mongoose';
import IDocumento from './Documento';
import { Documento } from './Documento';
import IPlanDeFinanciamiento from './PlanDeFinanciamiento';
import { PlanDeFinanciamiento } from './PlanDeFinanciamiento';

// Document interface
interface IUbicacion {
    calle: string;
    colonia: string;
    estado: string;
    codigo_postal: number;
  }

// Document interface
interface IAgencia {
    admin_gpo_automotriz_id: Types.ObjectId;
    gerente_id: Types.ObjectId;
    ubicacion: IUbicacion[],
    nombre_sucursal: string;
    autos: Types.Array<string>; //IAuto[]
    documentos: IDocumento[];
    id_cuenta_bancaria: Types.ObjectId;
    autos_vendidos: Types.Array<string>; //IAuto[]
    autos_recomendados: Types.Array<string>; //IAuto[]
    seguros_disponibles: Types.Array<string>; //ISeguro[]
    planes_financiamiento: IPlanDeFinanciamiento[];
  }

  // Schema
const ubicacionSchema = new Schema<IUbicacion>({
    calle: {type: String, required: true},
    colonia: { type: String, required: true },
    estado: { type: String, required: true },
    codigo_postal: { type: Number, required: true }
});

// Schema
const agenciaSchema = new Schema<IAgencia>({
    admin_gpo_automotriz_id: { type: Schema.Types.ObjectId, required: true, ref: 'AdminGpoDeAgencia' },
    gerente_id: { type: Schema.Types.ObjectId, required: true, ref: 'GerenteDeAgencia' },
    ubicacion: [ubicacionSchema],
    nombre_sucursal: { type: String, required: true },
    autos: [String], //[Auto]
    documentos: [Documento],
    id_cuenta_bancaria: { type: Schema.Types.ObjectId, required: true, ref: 'CuentaBancariaDeAgencia' },
    autos_vendidos: [String], //[Auto]
    autos_recomendados: [String], //[Auto]
    seguros_disponibles: [String], //[Seguro]
    planes_financiamiento: [PlanDeFinanciamiento]
});

// export const Agencia = model<IAgencia>('Agencia', agenciaSchema);
export const Agencia = agenciaSchema