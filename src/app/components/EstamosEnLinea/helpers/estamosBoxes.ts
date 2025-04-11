import estamosBox from '../interfaces/estamosBox'

const estamosBoxes: Array<estamosBox> =
[
  {
    img: { src: '/img/IconHombreLapto.webp', h: 63.81, w: 98, alt: 'persona usando laptop' },
    title: '¿Ya eres alumno?',
    decription:
      'Consulta con atención al alumno el estado de tus notas y certificaciones.',
    num: '990945941',
    link () {
      return {
        path: `https://api.whatsapp.com/send?phone=51${this.num}&text=Hola,%20solicito%20informaci%C3%B3n%20mi%20correo%20es:`,
        label: this.num,
        color: 'border-green-600 text-green-600'
      }
    }
  },
  {
    img: { src: '/img/IconCursos.webp', h: 70.52, w: 322.67, alt: 'iconos de programas' },
    title: 'Información de programas',
    decription:
      'Quieres información de algún curso, diploma o diplomado contáctanos aquí.',
    num: '933929742',
    link () {
      return {
        path: `https://api.whatsapp.com/send?phone=51${this.num}&text=Hola,%20solicito%20informaci%C3%B3n%20mi%20correo%20es:`,
        label: this.num
      }
    }
  },
  {
    img: { src: '/img/IconGrupo.webp', h: 88.7, w: 87.17, alt: 'personas reunidas en una mesa' },
    title: 'Cursos In House',
    decription:
      'Puedes solicitar cualquiera de nuestros programas para que sean dictados en su ENTIDAD / INSTITUCIÓN.',
    num: '',
    link () {
      return { path: '/inhouse', label: 'Solicitar esta Modalidad' }
    }
  }
]

export default estamosBoxes
