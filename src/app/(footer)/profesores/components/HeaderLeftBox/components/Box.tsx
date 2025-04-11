import Image, { ImageProps } from 'next/image'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props
{
    num:ReactNode
    img:ImageProps
    label:ReactNode
    styles?:{container:string}
}

export default function Box (props:props) {
  const { num, img, label, styles } = props
  const { container } = styles || { container: '' }

  return (
    <div className={twMerge('flex flex-col flex-1', container)}>
      <section className='flex gap-[8px] items-center'>
        <span className='font-bold text-[45px] 1000px:text-[30px] mob:text-[25px] text-primary2'>
          {
            num
          }
        </span>
        <Image {...img} alt={img.alt} className='mob:w-[1.5rem]' />
      </section>
      <span className='font-bold text-[24px] 1000px:text-[16px]'>
        {label}
      </span>
    </div>
  )
}
