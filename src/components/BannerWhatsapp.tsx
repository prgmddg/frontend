export default function BannerWhatsapp () {
  return (
    <a href='https://whatsapp.com/channel/0029VbAv0QeGOj9rVz73Ci2g' target='_blank' className='w-full'>
      <div className='bg-green-500'>
        <div className='flex flex-col flex-wrap items-center justify-between max-w-5xl gap-0 p-4 mx-auto text-white md:gap-4 font-inter sm:flex-row'>
          <div className='max-w-full text-lg leading-relaxed text-center sm:text-xl md:text-2xl sm:text-left sm:max-w-3/4'>
            <p className='mb-1 font-bold'>
              <span className=''>👋</span> ¡Únete a nuestro canal de WhatsApp!
            </p>
            <p className='hidden text-sm opacity-90 md:block'>
            Recibe <strong>noticias</strong>, <strong>cursos</strong> y <strong>ofertas exclusivas</strong> directamente en tu teléfono.
            ¡Es fácil y rápido!
            </p>
          </div>
          <div className='flex items-center justify-center px-6 py-3 mt-4 text-base font-bold text-green-600 transition duration-300 ease-in-out transform bg-white rounded-full shadow-md hover:bg-gray-100 sm:text-lg hover:scale-105 sm:mt-0' rel='noopener'>
            <picture>
              <img decoding='async' src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' alt='WhatsApp' className='w-full mr-2 max-w-6 aspect-auto' width={0} height={0} title='Blog de Gestión Pública' />
            </picture>
          Unirme ahora
          </div>
        </div>
      </div>
    </a>
  )
}