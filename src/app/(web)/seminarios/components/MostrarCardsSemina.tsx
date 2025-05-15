'use client'
import seminarios from '@/interfaces/seminarios'
import { CardsSeminar } from './CardsSeminar'

export const MostrarCardsSemina = ({ terminados, proximos }:{terminados:Array<seminarios>, proximos: Array<seminarios>}) => {
  return (
    <section className='bg-[#1c2e6c]'>
      <article className='container mx-auto'>
        <div className='p-10 px-[1rem]'>
          {proximos.length > 0 && (
            <>
              <p className='text-white text-center text-4xl font-bold'>Próximos Seminarios</p>
              <div className='grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] mt-20 gap-5'>
                {
                  proximos.map((card, pos) =>
                    (
                      <CardsSeminar key={pos} {...card} />
                    ))
                }
              </div>
            </>
          )}
          <p className='text-white text-center text-4xl font-bold'>Lista de Seminarios</p>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] mt-20 gap-5'>
            {
              terminados.map((card, pos) =>
                (
                  <CardsSeminar key={pos} {...card} />
                ))
            }
          </div>
        </div>
      </article>
    </section>
  )
}
