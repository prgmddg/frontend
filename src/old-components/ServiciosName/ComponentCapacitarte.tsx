import Image from 'next/image'
export const ComponentCapacitarte = () => {
  return (
    <section className='bg-[#2000d1] py-[1.7rem] px-[1rem]' id='Beneficios'>
      <article className='text-white container mx-auto'>
        <div className='w-full lg:w-[70%] xl:w-[70%] 2xl:w-[70%] '>
          <p className='text-center font-bold text-3xl'>¿Por qué Capacitarte con nosotros?</p>
          <p className='text-center font-bold'>Más de 50,000 alumnos capacitados</p>
          <div className='w-full lg:w-[65%] xl:w-[65%] 2xl:w-[65%] bg-white p-3 rounded-md mx-auto flex justify-between mt-5 flex-wrap'>
            <div className='font-bold text-black flex items-center justify-center gap-3'>
              <Image src='/img/icons/iconEstrellas.webp' alt='Desarrollo Global' width='93' height='16' />
              <p>4.6 de calificación</p>
            </div>
            <p className='text-black font-bold text-center'>1.358 alumnos capacitados en este Diploma</p>
          </div>
          <div className='mt-10 grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] gap-5'>
            <div className='bg-[#ffc107] rounded-md w-[280px] mob:w-[100%] h-[376px] mx-auto p-7 text-black'>
              <Image src='/img/icons/12anos.webp' alt='años capacitando' width='210' height='66' className='py-5' />
              <p className='font-bold text-base'>Experiencia Comprobada</p>
              <p>{13} años Capacitando en la Gestión Pública y miles de alumnos satisfechos, tanto en capacitaciones presenciales y virtuales.</p>
            </div>
            <div className='bg-[#dc3545] rounded-md w-[280px] mob:w-[100%] h-[376px] mx-auto p-7'>
              <Image src='/img/icons/IconIsoDiploma.webp' alt='certificado iso-9001' width='210' height='66' />
              <p className='font-bold text-base'>Garantia de Calidad Servicio</p>
              <p>Nuestra empresa educativa, cuenta con Certificación de Calidad ISO 9001-2015, lo cual nos permite brindar un servicio diferenciado a nuestros alumnos.</p>
            </div>
            <div className='bg-[#282828] rounded-md w-[280px] mob:w-[100%] h-[376px] mx-auto p-7'>
              <Image src='/img/icons/CertificadoDiploma.webp' alt='icono certificado' width='117' height='86' />
              <p className='font-bold text-base mt-3'>Certificación Desarrollo Global</p>
              <p>La certificación se otorga con respaldo Desarrollo Global, válido para todo tipo de convocatorias.</p>
            </div>
            <div className='bg-white text-black rounded-md w-[280px] mob:w-[100%] h-[376px] mx-auto p-7'>
              <Image src='/img/icons/IconDocentesDiploma.webp' alt='persona usando laptop' width='95' height='91' className='py-5' />
              <p className='font-bold text-base'>Docentes Especializados</p>
              <p>Plana docente con amplia trayectoria en Gestión Gubernamental y metodología de enseñanza.</p>
            </div>
            <div className='bg-white text-black rounded-md w-[280px] mob:w-[100%] h-[376px] mx-auto p-7'>
              <Image src='/img/icons/IconSoporteDiploma.webp' alt='mujer usando laptop con audifonos' width='72' height='89' className='my-5' />
              <p className='font-bold text-base'>El mejor soporte para alumnos</p>
              <p>Te ayudamos a instalar los DEMOS en tu computadora, de manera remota, también te brindamos asistencia respecto a cualquier problema técnico que puedas tener en tus clases.</p>
            </div>
            <div className='bg-white text-black rounded-md w-[280px] mob:w-[100%] h-[376px] mx-auto p-7'>
              <Image src='/img/icons/IconPcDiplomas.webp' alt='laptop abierta' width='117' height='86' className='py-5' />
              <p className='font-bold text-base'>Plataforma Exclusiva</p>
              <p>Hemos desarrollado una plataforma exclusiva pensado en que nuestros alumnos tengan un aula virtual de fácil acceso que le permita disponer de todos los materiales de clases.</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
