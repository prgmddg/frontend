import Image from 'next/image'
import { MyButtons } from '../..'

export const Cotizacion = () => {
  return (
    <section className='bg-[#0E2FAA]'>
      <article className='container pt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div className='text-white p-5'>
            <p className='font-bold text-3xl lg:text-4xl text-center lg:text-start'>Solicita una cotización sin compromiso</p>
            <p className='mt-5 text-lg w-full lg:w-[75%] text-center lg:text-start'>Puedes solicitar cualquiera de nuestros programas para que sean dictados en su ENTIDAD / INSTITUCIÓN, solicítalo por WhatsApp o Correo.</p>
            <MyButtons />
          </div>
          <Image src='/img/CompositeLayer.webp' alt='Cursos InHouse - Desarrollo Global' width={479} height={590} className='hidden md:block' />
        </div>
      </article>
    </section>
  )
}
