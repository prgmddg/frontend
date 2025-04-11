import React from 'react'
import Image from 'next/image'
import box from '../interfaces/box'

export default function Box (props:box) {
  const { title, img, overCotent, description, className } = props

  return (
    <div className='rounded-[.5rem] border-[1px] border-[#fff] overflow-hidden flex flex-col'>
      <section className={`h-[113px] flex items-center gap-[24px] text-white justify-start px-[30px] ${ className ?? 'bg-myBlue3' }`}>
        <Image {...img} alt={img.alt} />
        <div className='flex flex-col'>{overCotent}</div>
      </section>
      <section className='py-[26px] px-[33px] bg-white mob:px-[23px] mob:py-[22px] flex-1'>
        <span className='text-myBlue3 text-[22px] font-bold block mb-[21px] mob:mb-[18px]'>{title}</span>
        <p className='text-[14px] text-black'>{description}</p>
      </section>
    </div>
  )
}
