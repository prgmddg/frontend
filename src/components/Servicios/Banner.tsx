import Image from 'next/image'

export const Banner = ({ tipo } : {tipo: string}) => {
  let myAlt = ''
  if (tipo === 'Cursos')myAlt = 'mujer de lentes sonriendo'
  if (tipo === 'Diplomas')myAlt = 'hombre sonriendo señalando el fondo'
  if (tipo === 'Diplomados')myAlt = 'hombre sonriendo señalando el fondo'

  return (
    <section /* className={`bg-gradient-to-b ${tipo === "Cursos" ? 'from-[#2600f1] via-[#6886ff] to-[#6886ff]' : tipo === "Diplomas" ? 'from-[#002877] via-[#106fff] to-[#106fff]' : 'from-[#31003f] via-[#62007e] to-[#7c3590]'}`} */
      style={{
        backgroundImage: 'url(/img/myRealBanner.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <article className='container mx-auto flex items-center justify-center !pb-0'>
        <div className='lg:w-1/2 w-full flex justify-center'>
          <div className='p-5 lg:p-10 py-10 lg:py-0'>
            <h1 className='text-white font-bold text-5xl w-1/4 1000px:w-[100%] 1028px:text-center 1028px:text-[2.2rem] block mb-[1rem]'>
              {tipo} Especializados
            </h1>
            <p className='text-curDi font-bold text-2xl 1028px:text-[1.3rem] 1028px:text-center block mb-[1.5rem]'>
              Porque aprender con nosotros
            </p>
            <div className='text-white text-xl space-y-1'>
              <p className='flex items-center gap-2 1028px:text-[1rem]'>
                <Image
                  src='/img/icons/VistoBuenoCursos.webp'
                  alt='checkmark'
                  width='23'
                  height='23'
                />
                {13} años dictando Cursos virtuales
              </p>
              <p className='flex items-center gap-2 1028px:text-[1rem]'>
                <Image
                  src='/img/icons/VistoBuenoCursos.webp'
                  alt='checkmark'
                  width='23'
                  height='23'
                />
                Certificación de calidad ISO 9001-2015
              </p>
              <p className='flex items-center gap-2 1028px:text-[1rem]'>
                <Image
                  src='/img/icons/VistoBuenoCursos.webp'
                  alt='checkmark'
                  width='23'
                  height='23'
                />
                Certificación Desarrollo Global
              </p>
              <p className='flex items-center gap-2 1028px:text-[1rem]'>
                <Image
                  src='/img/icons/VistoBuenoCursos.webp'
                  alt='checkmark'
                  width='23'
                  height='23'
                />
                Aula Virtual &#34;Plataforma Exclusiva&#34;
              </p>
              <p className='flex items-center gap-2 1028px:text-[1rem]'>
                <Image
                  src='/img/icons/VistoBuenoCursos.webp'
                  alt='checkmark'
                  width='23'
                  height='23'
                />
                El mejor soporte para alumnos
              </p>
              <p className='flex items-center gap-2 1028px:text-[1rem]'>
                <Image
                  src='/img/icons/VistoBuenoCursos.webp'
                  alt='checkmark'
                  width='23'
                  height='23'
                />
                Docentes Especializados
              </p>
            </div>
          </div>
        </div>
        <div className='1028px:hidden'>
          <Image
            src={
              tipo === 'Cursos'
                ? '/img/LCurso.webp'
                : tipo === 'Diplomas'
                  ? '/img/LogoDiploma.webp'
                  : '/img/LogoDiplomado.webp'
            }
            alt={myAlt}
            width='460'
            height='460'
            className='mt-5'
          />
        </div>
      </article>
    </section>
  )
}
