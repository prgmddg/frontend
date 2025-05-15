import React from 'react'
import { accordeonList } from './helpers/accordeonList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ListaAccordion = () => {
  return (
    <section className='mt-10 grid grid-cols-1 md:grid-cols-2 text-[#2446C4] gap-10 w-full lg:w-[1100px]'>
      {
        accordeonList.map((acor, pos) => (
          <article key={pos} className='border-2 hover:bg-[#2446C4] hover:text-white transition-all ease-linear border-[#2446C4] rounded-md p-5 font-semibold flex items-start text-left gap-5 w-full mx-auto'>
            <FontAwesomeIcon icon={acor.icon} className='text-5xl' />
            <div>
              <p className='text-lg'>{acor.text}</p>
            </div>
          </article>
        ))
      }
    </section>
  )
}
