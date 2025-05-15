import { faBookOpen, faClock, faFileInvoice, faGear, faLaptopCode, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import accordeonPrograma from '../interfaces/accordeonPrograma'

export const accordeonList:Array<accordeonPrograma> = [
  {
    icon: faBookOpen,
    text: '¡Amplia variedad de programas disponibles! Descubre más de 100 opciones de capacitación para potenciar tus habilidades.'
  },
  {
    icon: faGear,
    text: '¡Personalización total de tus capacitaciones! Elige los temas y objetivos específicos para adaptar la formación a tu entidad.'
  },
  {
    icon: faClock,
    text: '¡Flexibilidad horaria a tu disposición! Personaliza tus capacitaciones según tus requerimientos.'
  },
  {
    icon: faFileInvoice,
    text: '¡Mayor control y seguimiento de tus alumnos! Evalúa el progreso y obtén informes detallados de notas y asistencia.'
  },
  {
    icon: faPiggyBank,
    text: '¡Ahorra más con nuestras capacitaciones grupales! Obtén beneficios económicos al capacitarte en grupo.'
  },
  {
    icon: faLaptopCode,
    text: '¡Experiencia de aprendizaje inmersiva con nuestra moderna aula interactiva! Disfruta de clases virtuales dinámicas y participativas'
  }
]
