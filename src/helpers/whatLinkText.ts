import asesor from '@/interfaces/asesor'

interface props
{
  email:string|undefined
  asesor:asesor|{telefono:string, telefono_2?:string}
  subject:string
  program:string
  customGreeting?:string
  phone?: string
  url?: string
}

export default function whatLinkText (props:props):string {
  return `https://api.whatsapp.com/send?phone=51${props.phone}&text=${props.customGreeting || ''}Solicito información del ${props.subject}:%20${props.program}%0D%0AMi correo es:%20${props.email || ''}`
}
