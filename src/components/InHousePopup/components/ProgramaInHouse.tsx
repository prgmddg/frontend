import React from 'react'
import Image from 'next/image'

export const ProgramaInHouse = () => {
  return (
    <div className='bg-[#51fe7f] py-[8px] px-[24px] rounded-[.4rem] inline-flex gap-[.5rem]'>
      <Image
        src='/img/house.webp'
        alt='DG-house'
        width={21}
        height={23}
      />
      Programa In-House
    </div>
  )
}
