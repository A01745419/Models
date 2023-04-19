import { Schema, model, Types } from 'mongoose';
import IDocumento from './Documento';
import { Documento } from './Documento';

// Document interface
interface IPlanDeFinanciamiento {
  automovil_id: Types.ObjectId;
  enganche: number;
  interes_anual: number;
  comision_por_apertura: number;
  descripcion: string;
  documento: IDocumento[];
}

// Schema
const planDeFinanciamientoSchema = new Schema<IPlanDeFinanciamiento>({
    automovil_id: { type: Schema.Types.ObjectId, required: true, ref: 'AutoConPlan' },
    enganche: { type: Number, required: true },
    interes_anual: { type: Number, required: true },
    comision_por_apertura: { type: Number, required: true },
    descripcion: { type: String, required: true },
    documento: [Documento]
});

// export const PlanDeFinanciamiento = model<IPlanDeFinanciamiento>('PlanDeFinanciamiento', planDeFinanciamientoSchema);
export default IPlanDeFinanciamiento
export const PlanDeFinanciamiento = planDeFinanciamientoSchema
