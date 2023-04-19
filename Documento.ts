import { Schema, model } from 'mongoose';

// Document interface
interface IDocumento {
  id: string;
  nombre: string;
  fecha_de_subida: Date;
  link: string;
}

// Schema
const documentoSchema = new Schema<IDocumento>({
  id: { type: String, required: true },
  nombre: { type: String, required: true },
  fecha_de_subida: { type: Date, required: true },
  link: { type: String, required: true }
});

// export const Documento = model<IDocumento>('Documento', documentoSchema);
export default IDocumento
export const Documento = documentoSchema