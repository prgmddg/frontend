import menuOption from '../interfaces/menuOption'
import { faLaptop, faUserCircle, faLayerGroup, faCalendar } from '@fortawesome/free-solid-svg-icons'

const menuOptions:Array<menuOption> =
[
  {
    icon: faLaptop,
    label: 'mi aula',
    href: 'https://aula.desarrolloglobal.pe/aula/'
  },
  {
    icon: faUserCircle,
    label: 'mi perfil',
    href: 'https://aula.desarrolloglobal.pe/aula/#tab_perfil'
  },
  {
    icon: faLayerGroup,
    label: 'mis cursos',
    href: 'https://aula.desarrolloglobal.pe/aula/#tab_cursos'
  },
  {
    icon: faLayerGroup,
    label: 'mis diplomas',
    href: 'https://aula.desarrolloglobal.pe/aula/#tab_diplomas'
  },
  {
    icon: faCalendar,
    label: 'Sesion Hoy y mañana',
    href: 'https://aula.desarrolloglobal.pe/sesiones_hoy_manana.php'
  }
]

export default menuOptions
