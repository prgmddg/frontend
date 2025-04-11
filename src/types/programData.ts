import cursos from '../interfaces/cursos'
import diplomados from '../interfaces/diplomados'
import diplomas from '../interfaces/diplomas'

type programData = cursos|diplomas|diplomados

export interface profesor
{
  nombre: string;
  descripcion: string;
  profesion: string;
  telefono: string;
  telefono_2: string;
  etiqueta: string;
  avatar: string;
  id:string;
}
export interface asesor
{
    nombre: string;
    descripcion: string;
    profesion: string;
    telefono: string;
    telefono_2: string;
    avatar: string;
}

export default programData
