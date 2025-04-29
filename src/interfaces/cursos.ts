import { asesor, profesor } from '@/types/programData'

export default interface cursos
{
  id: string;
  etiqueta: string;
  titulo: string;
  icono: string;
  banner: string;
  objectivos: string;
  dirigido: string;
  descripcion: string;
  objetivos_curso: string;
  inicio: string;
  landing: string;
  imagen: string;
  certificados: string;
  asesores: Array<asesor>;
  video: string;
  source: string;
  precio: {
    normal: number;
    descuento: number;
    final: number;
    normal_convenio: number;
    final_convenio: number;
  };
  sesiones: Array<{
    id:string;
    titulo: string;
    sub_titulo: string
    descripcion: string;
  }>;
  total_sesiones: number;
  profesores:Array<profesor> ;
  testimonios:Array<{
    usuario: string;
    avatar: string;
    registro: string;
    comentario: string;
  }>;
  alumnos: number;
  color: string;
  comprado: boolean;
  valoracion: {
    totales: number;
    porcentaje: number;
  };
  tipo_curso: string;
  tipo_clase: string;
  tipo:string;
  seo:string;
  nuevo_seos: {
    titulo: string;
    descripcion: string;
    tags: string;
  };
}
