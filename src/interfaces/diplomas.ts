
import { profesor,asesor } from '@/types/programData'

export default interface diplomas 
{
  id: string;
  etiqueta: string;
  banner: string;
  titulo: string;
  icono: string;
  objectivos: string;
  dirigido: string;
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
  cursos:Array<
  {
    id: string;
    icono: string;
    titulo: string;
    sesiones:Array<{
        id: string;
        titulo: string;
        sub_titulo: string;
      }>;
  }> ,
  total_sesiones: number;
  profesores: Array<profesor> 
  testimonios:Array<{
    usuario:string;
    avatar:string;
    registro:string;
    comentario:string;
  }>; 
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
  tipo_diploma: string;
  nuevo_seos: {
    titulo: string;
    descripcion: string;
    tags: string;
  };
}