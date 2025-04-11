import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export const Banner = () => {
  return (
    <section className='bg-[#000b4e] block px-[1rem]'>
      <article className='container mx-auto'>
        <div className='flex w-full items-center'>
          <div className='w-[560px] flex flex-col gap-[.8rem] py-[2rem] 1500px:w-[100%] 1500px:items-center'>
            <p className='font-bold text-4xl text-white w-1/2 1500px:w-[100%] 1500px:text-center'>
              Seminarios en Gestion Publica
            </p>
            <div className='flex items-center gap-3'>
              <p className='text-3xl'>👉</p>
              <p className='bg-[#ffc107] font-bold text-lg px-3 rounded-full'>
                Participa Gratis aqui
              </p>
            </div>
            <p className='text-white w-[70%] block mb-[.5rem] 1500px:text-center'>
              Regístrate ó únete a nuestros grupos de WhatsApp y Telegram, no
              te pierdas ningún seminarios en vivo.
            </p>
            <a target='_blank' href='https://t.me/DesarrolloGlobal' className='bg-[#0d6efd] w-[100%] max-w-[24rem] 1500px:px-[1rem] text-white font-bold py-2 px-16 rounded-md flex gap-[1rem] items-center justify-center' rel='noreferrer'>
              <FontAwesomeIcon size='xl' icon={faTelegram} /> Registrame por Telegram
            </a>
            <a target='_blank' href='https://chat.whatsapp.com/Lgx182kXXFCJEnJtwvYg4w' className='bg-white w-[100%] 1500px:px-[1rem] max-w-[24rem] text-black font-bold py-2 px-16 rounded-md gap-[1rem] flex justify-center items-center' rel='noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp} size='xl' /> Registrame por WhatsApp
            </a>
          </div>
          <div className='relative flex-[1] 1500px:hidden'>
            <Image
              src='/img/bannerSeminario.webp'
              width={746}
              height={507}
              alt='hoombre de traje sentado en frente de una laptop'
              className='relative translate-y-[3.1rem]'
            />
          </div>
        </div>
      </article>
    </section>
  )
}
