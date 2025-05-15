import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavbarInHouse = () => {
  return (
    <div className='justify-between items-center flex-wrap hidden md:flex'>
      <picture>
        <img src='/img/LogoBlanco.webp' alt='Logo Blanco Desarrollo Global' className='max-w-[224px] w-full aspect-auto' width={0} height={0} loading='eager' />
      </picture>
      <div className='bg-white md:rounded-full p-2 flex-wrap justify-center md:p-4 text-base flex items-center gap-5 mx-auto lg:m-0 mt-5 lg:mt-0 rounded-md'>
        <a href='#beneficios'>Beneficio</a>
        <a href='#programas'>Lista de Programas</a>
        <a href='#elegirnos'>¿Porque Elegirnos?</a>
        <a href='https://api.whatsapp.com/send?phone=51993403219&text=Hola,%20solicito%20información%20de%20la%20modalidad%20In%20House,%20mi%20correo%20es:%20' target='_blank' className='bg-green-500 text-white rounded-full flex items-center gap-3 px-5 py-1' rel='noreferrer'>
          <FontAwesomeIcon icon={faWhatsapp} className='text-xl' />
          <p>WhatsApp</p>
        </a>
      </div>
    </div>
  )
}
