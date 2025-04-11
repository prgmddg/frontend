import React from 'react'
import footerBox from '../interfaces/footerBox'

export const FooterBox = ({ header, content }:footerBox) => {
  return (
    <section className='flex-1 p-[1rem] min-w-[197px]'>
      <span className='text-[1.5rem] mb-[.6rem] block font-bold'>
        {header}
      </span>
      {
        content
      }
    </section>
  )
}
