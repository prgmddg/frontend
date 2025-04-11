import { Video } from '@/components/Video/Video'
import { faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Banner = ({ idVideo }: { idVideo: string }) => {
  return (
    <section className='bg-[#000b4e] block px-[1rem]'>
      <article className='container mx-auto'>
        <div className='flex w-full items-center'>
          <div className='w-[560px] flex flex-col gap-[.8rem] py-[2rem] 1500px:w-[100%] 1500px:items-center'>
            <p className='font-bold text-4xl text-white w-1/2 1500px:w-[100%] 1500px:text-center'>
              Podcast
            </p>
            <p className='font-bold text-xl text-white w-1/2 1500px:w-[100%] 1500px:text-center'>
              Voces de la Gestión Pública
            </p>
            <div className='flex items-center gap-3'>
              <p className='text-3xl'>👉</p>
              <p className='bg-[#ffc107] font-bold text-lg px-3 rounded-full'>
                Participa Gratis aqui
              </p>
            </div>
            <p className='text-white w-[70%] block mb-[.5rem] 1500px:text-center'>
              Regístrate ó únete a nuestros grupos de WhatsApp y Telegram, no
              te pierdas ningún episodio.
            </p>
            <a target='_blank' href='https://www.youtube.com/@desarrolloglobaltv/featured' className='bg-red-500 w-[100%] max-w-[24rem] 1500px:px-[1rem] text-white font-bold py-2 px-16 rounded-md flex gap-[1rem] items-center justify-center' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='23.25' height='23.25' viewBox='0 0 48 48'>
                <path fill='white' d='M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z' /><path fill='red' d='M20 31L20 17 32 24z' />
              </svg>
              Registrame por Youtube
            </a>
            <a target='_blank' href='https://t.me/DesarrolloGlobal' className='bg-[#0d6efd] w-[100%] max-w-[24rem] 1500px:px-[1rem] text-white font-bold py-2 px-16 rounded-md flex gap-[1rem] items-center justify-center' rel='noreferrer'>
              <FontAwesomeIcon size='xl' icon={faTelegram} /> Registrame por Telegram
            </a>
            <a target='_blank' href='https://chat.whatsapp.com/Lgx182kXXFCJEnJtwvYg4w' className='bg-white w-[100%] 1500px:px-[1rem] max-w-[24rem] text-black font-bold py-2 px-16 rounded-md gap-[1rem] flex justify-center items-center' rel='noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp} size='xl' /> Registrame por WhatsApp
            </a>
          </div>
          <div className='relative flex-[1] 1500px:hidden h-[28rem] 1200px:h-[30rem] 600px:h-[18rem]'>
            <Video src={`https://youtu.be/${idVideo}`} />
          </div>
        </div>
      </article>
    </section>
  )
}
