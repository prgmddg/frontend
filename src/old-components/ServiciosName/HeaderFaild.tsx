import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Calificaciones } from './components/Calificaciones'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ProgramData from '@/types/programData'

export const HeaderFound = ({ curso }: { curso: ProgramData }) => {
  const { asesores, titulo } = curso
  return (
    <section className='bg-myBlue2'>
      <article className='container grid grid-cols-1 md:grid-cols-2 mx-auto p-10 900px:px-[20px] 900px:pt-[27px] relative flex-wrap pb-[5rem] 900px:pb-[8rem]'>
        <div className='flex flex-col justify-between'>
          <div>
            <span className='bg-myYellow mb-[23px] inline-block 900px:justify-start 900px:px-[22px] 900px:mb-[26px] 900px:w-[100%] 900px:text-[18px] 900px:max-w-[375px] text-white px-[22px] pt-[9px] pb-[5px] rounded-[.4rem] text-[22px] font-bold mob:text-[18px] mob:px-[10px]'>
              <span className='capitalize'>{curso.tipo}</span>&nbsp;
              {curso.tipo === 'curso' ? 'Especializado' : 'De Alta Especialización'}
            </span>
            <h1 className='text-white font-bold text-5xl leading-[55px] 900px:text-[32px] 900px:leading-[32px] 900px:mb-[22px] mb-[29px]'>
              {curso.tipo === 'diplomado' ? curso.titulo.replace('Diploma', 'Diplomado') : curso.titulo}
            </h1>
          </div>
          <p className='text-white text-[18px] leading-[30px] 900px:hidden mb-[34px] block'>
            {curso.descripcion}
          </p>
          <Calificaciones tipo='header' />
        </div>
        <div className='mt-10 md:mt-0'>
          <div className='bg-white rounded-md w-full lg:w-[65%] mx-auto'>
            <div className='bg-[#f2f4ff] px-5 py-10 rounded-t-lg shadow-lg'>
              <p className='text-6xl text-center'>☹️</p>
              <p className='mt-5 text-2xl font-bold text-center text-blue-500'>¡El Curso ya ha comenzado!</p>
              <p className='mt-3 font-semibold text-center '>Si estas interesado en formar parte de el, dejanos tus datos para unirte en el proximo inicio.</p>
            </div>
            <div className='px-5 py-10 space-y-5'>
              <p className='font-bold text-center'>Para incorporarte o registrarte en el proximo inicio, comunicate con uno de nuestros asesores via WhatsApp</p>
              <a href={`https://wa.me/51${asesores[0].telefono ?? asesores[0].telefono_2}?text=Hola%2C%20deseo%20incorporarme%20o%20registrarme%20en%20el%20curso. ${titulo.toUpperCase()}%20Mi%20correo%20es%3A`} className='bg-[#00bc39] w-full p-2 text-white flex items-center justify-center rounded-md font-bold gap-5'>
                <FontAwesomeIcon icon={faWhatsapp} className='text-3xl' />
                <p>Incorporarme al curso</p>
              </a>
            </div>

          </div>
        </div>
      </article>
    </section>
  )
}
