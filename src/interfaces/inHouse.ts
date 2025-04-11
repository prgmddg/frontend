export default interface inHouse 
{
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  color: string;
  icono: string;
  etiqueta: string;
  asesores: Array<asesor>;
}

interface asesor
{
  nombre: string ;
  descripcion:string;
  profesion:string;
  telefono:string;
  telefono_2:string;
  avatar: string;
}