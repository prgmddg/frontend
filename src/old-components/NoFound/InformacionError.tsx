import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const InformacionError = () => {
  return (
    <div className='space-y-10 px-5 lg:px-0  py-16'>
      <div className='bg-[#FFB300] text-white rounded-md p-2 font-bold inline-block text-xl'>
        <p>Curso No Disponible</p>
      </div>
      <h1 className='text-white font-bold text-[35px] lg:text-[45px] leading-10'>Lamentablemente, el curso que buscas no está disponible en este momento.</h1>
      <p className='text-white text-lg'>Puede haber varias razones para esto, como cambios en nuestro programa de cursos, actualizaciones de contenidos o fechas de inicio programadas para el futuro. No te preocupes, estamos aquí para ayudarte a mantenerte informado y asegurarnos de que no te pierdas ninguna oportunidad de aprendizaje.</p>
      <div className='bg-white rounded-md font-bold p-3 flex items-center gap-3'>
        <FontAwesomeIcon icon={faPaperPlane} />
        Regístrate y no te pierdas nuestros programas
      </div>
    </div>
  )
}
