import React from 'react'
import Image from 'next/image'
import box from '../interfaces/box'

export const Box = (props:box) => {
  const { img, title, desciption, alt } = props

  return (
    <div className='flex flex-col text-[#fff] gap-[.4rem] beneficios1:items-center beneficios1:text-center'>
      <Image src={img} width={92} height={74.58} alt={alt} className='block rounded-[.5rem]' />
      <span className='font-bold'>{title}</span>
      <p className='block pr-[12rem] leading-[1.2rem] beneficios:pr-[0] beneficios1:px-[3rem]'>
        {desciption}
      </p>
    </div>
  )
}
