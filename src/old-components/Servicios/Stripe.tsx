
export const Stripe = () => {
  return (
    <div className='w-full p-4 bg-primary'>
      <section className='grid w-full max-w-screen-xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 xl:grid-cols-4'>
        <div className='flex items-stretch justify-center w-full bg-[#f2b200] rounded-xl'>
          <picture>
            <img className='w-full aspect-auto rounded-xl' src='/13anios.webp' width={0} height={0} alt='icono de escudo' />
          </picture>
        </div>
        <div className='flex items-stretch justify-center w-full'>
          <div className='flex items-center justify-center w-full gap-4 p-2 text-white border-2 rounded-xl'>
            <picture>
              <img className='w-full max-w-[50px] aspect-auto rounded-xl' src='/img/stripe2.webp' width={0} height={0} alt='icono de escudo' />
            </picture>
            <div>
              <p className='text-[1.2rem] leading-[1.4rem] font-medium'>
                Certificado de Calidad
              </p>
              <span className='font-bold text-[30px]'>ISO 9001-2015</span>
            </div>
          </div>
        </div>
        <div className='flex items-stretch justify-center w-full'>
          <div className='flex items-center justify-center w-full gap-4 p-2 text-white border-2 rounded-xl'>
            <picture>
              <img className='w-full max-w-[50px] aspect-auto rounded-xl' src='/img/stripe3.webp' width={0} height={0} alt='icono de escudo' />
            </picture>
            <div>
              <p className='font-bold text-[45px] leading-[3rem]'>+ 50 000</p>
              <span className='font-medium text-center'>
                Alumnos Capacitados
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-stretch justify-center w-full'>
          <div className='flex items-center justify-center w-full gap-4 p-2 text-white border-2 rounded-xl'>
            <picture>
              <img className='w-full max-w-[50px] aspect-auto rounded-xl' src='/img/stripe4.webp' width={0} height={0} alt='icono de profesor dictando clases' />
            </picture>
            <div>
              <p className='text-[30px] font-bold'>Plataforma</p>
              <span className='font-medium'>De Clases Premium</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}