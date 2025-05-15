import Carousel from '@/components/Carousel'
import entidades from '@/old-components/EntidadesQueConfiarion/helpers/entidades'

export default function CompaniesTrusted() {
  return (
    <div className='w-full px-4 py-20'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <h2 className='text-[45px] block text-center mb-[3.2rem] 1406px:text-[1.8rem] 1406px:mb-[2rem]'>
            Entidades que confiaron en nosotros
        </h2>
        <p className='text-neutral-700 mb-[2rem] text-lg text-center'>
            Únete a las de las 120 entidades que confiaron en nosotros
        </p>
        <Carousel>
          {
            entidades.map((ent, index) => (
              <div className='flex-shrink-0 w-full md:w-[50%] xl:w-[33.333%] px-2' key={index}>
                <picture>
                  <img src={ent.img} width={0} height={0} className='w-full p-4 border rounded-lg aspect-auto' alt={ent.alt} loading='eager' />
                </picture>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  )
}