import box from '../interfaces/box'

const boxes: Array<box> = [
  {
    className: 'bg-[#f2b200]',
    img: {
      className: 'w-full aspect-auto',
      src: '/13anios.webp',
      width: 0,
      height: 0,
      alt: `icono de ${13} años`
    },
    title: 'Experiencia Comprobada',
    description:
      `Con ${13} años de experiencia en capacitación en la Gestión Pública y miles de alumnos satisfechos, ofrecemos una formación de calidad tanto en modalidades presenciales como virtuales`
  },
  {
    img: {
      src: '/img/nuestro2.webp',
      width: 66,
      height: 66,
      alt: 'icono de profesor dictando clases'
    },
    title: 'Docentes Especializados',
    description:
      'Nuestra plantilla docente está compuesta por profesionales con una amplia trayectoria en Gestión Gubernamental y una metodología de enseñanza efectiva.',
    overCotent: (
      <>
        <span className='font-bold text-[45px] mob:text-[29px]'>Docentes</span>
        <p className='text-[14px]'>Especializados</p>
      </>
    )
  },
  {
    img: {
      src: '/img/nuestro3.webp',
      width: 82,
      height: 61,
      alt: 'icono de laptop abierta'
    },
    title: 'Plataforma Exclusiva',
    description:
      'Hemos diseñado una plataforma exclusiva que brinda a nuestros alumnos un aula virtual de fácil acceso, permitiéndoles acceder a todos los materiales de clases de manera conveniente.',
    overCotent: (
      <>
        <span className='text-[31px] font-bold mob:text-[29px]'>Plataforma</span>
        <p className='text-[14px]'>de Clases Premium</p>
      </>
    )
  },
  {
    img: {
      src: '/img/nuestro4.webp',
      width: 67,
      height: 67,
      alt: 'icono de secretaria usando una laptop'
    },
    title: 'El Mejor Soporte para Alumnos',
    description:
      'Ofrecemos un excepcional soporte a nuestros alumnos, incluyendo asistencia remota para la instalación de DEMOS en sus computadoras y ayuda técnica en caso de problemas durante las clases.',
    overCotent: (
      <>
        <p className='text-[20px]'>Soporte</p>
        <span className='text-[31px] font-bold mob:text-[29px]'>Especializado</span>
      </>
    )
  },
  {
    img: {
      src: '/img/nuestro5.webp',
      width: 68,
      height: 68,
      alt: 'icono de qr'
    },
    title: 'Certificación Digital',
    description:
      'Nuestras certificaciones digitales son reconocidas y válidas tanto para convocatorias públicas como privadas, garantizando que nuestros alumnos puedan aprovechar oportunidades laborales.',
    overCotent: (
      <>
        <span className='text-[31px] font-bold mob:text-[29px]'>Certificación</span>
        <p className='text-[14px]'>Digital Valida</p>
      </>
    )
  },
  {
    img: {
      src: '/img/nuestro6.webp',
      width: 56,
      height: 68,
      alt: 'icono de qr'
    },
    title: 'Garantía de Calidad de Servicio',
    description:
      'Nuestra empresa educativa cuenta con la Certificación de Calidad ISO 9001-2015, lo que demuestra nuestro compromiso con la excelencia en la educación y nos permite ofrecer un servicio diferenciado a nuestros alumnos.',
    overCotent: (
      <>
        <p className='text-[20px] mob:text-[14px]'>Certificado de Calidad</p>
        <span className='text-[30px] font-bold mob:text-[27px]'>ISO 9001-2015</span>
      </>
    )
  }
]

export default boxes
