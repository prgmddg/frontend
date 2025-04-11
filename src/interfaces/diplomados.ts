import cursos from './cursos'
import { profesor,asesor } from '@/types/programData'

export default interface diplomados 
{
  id: string;
  etiqueta: string;
  banner: string;
  dirigido:string;
  titulo: string;
  icono: string;
  objectivos: string;
  objetivos_curso: string;
  descripcion: string;
  inicio: string;
  landing: string;
  imagen: string;
  certificados: string;
  asesores:Array<asesor>;
  video: string;
  source: string;
  precio: {
    normal: number;
    descuento: number;
    final: number;
    normal_convenio: number;
    final_convenio: number;
  };
  cursos:Array<cursos> 
  total_sesiones: number;
  profesores:Array<profesor> 
  testimonios:Array<{
    usuario: string;
    avatar: string;
    registro: string;
    comentario: string;
  }>
  alumnos: number;
  color: string;
  comprado: boolean;
  valoracion: {
    totales: number;
    porcentaje: number;
  };
  tipo_clase: string;
  tipo: string;
  seo: string;
  nuevo_seos: {
    titulo: string;
    descripcion: string;
    tags: string;
  };
}