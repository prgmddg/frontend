'use client'
import { CardsSeminar } from './CardsSeminar'

export const MostrarCardsSemina = ({ cards }: { cards: { id: number, video: string, titulo: string, fecha: string, hora: string, etiqueta: string }[] }) => {
  return (
    <section className=''>
      <article className='container mx-auto'>
        <div className='p-10 px-[1rem]'>
          <p className='text-[#1c2e6c] text-center text-4xl font-bold'>Lista de Podcasts</p>
          <div className='grid grid-cols-[repeat(auto-fill,minmax(17.3rem,1fr))] mt-20 gap-5'>
            {
              cards.map((card) =>
                (
                  <CardsSeminar key={card.id} {...card} />
                ))
            }
          </div>
        </div>
      </article>
    </section>
  )
}
