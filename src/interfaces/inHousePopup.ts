import asesor from './asesor'
import { Dispatch,SetStateAction } from 'react'

export default interface inHousePopup
{
  setShow:Dispatch<SetStateAction<boolean>>
  titulo:string
  descripcion:string
  asesores:Array<asesor>
  id:string
  imagen:string
}