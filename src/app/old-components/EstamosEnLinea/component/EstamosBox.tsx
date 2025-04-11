import React from 'react'
import Image from 'next/image'
import estamosBox from '../interfaces/estamosBox'
import Link from 'next/link'

export const EstamosBox = (props:estamosBox) => {
  const { img, title, decription } = props
  const { path, color, label } = props.link()

  return (
    <div
      className='bg-[#fff] p-[48px] flex-1 rounded-[.5rem] flex flex-col justify-between'
    >
      <div className='text-left'>
        <Image
          src={img.src}
          height={img.h}
          width={img.w}
          alt='DG-box'
          className='mb-[.8rem] block'
        />
        <h3 className='font-medium text-[1.5rem]'>{title}</h3>
        <p className='leading-[1.2rem]'>{decription}</p>
      </div>
      <Link
        href={path}
        className={`estamosEnLinea3:text-[15px] mt-[1rem] w-[100%] p-[8px] text-[24px] font-bold text-center block border-[2px] rounded-[.5rem] estamosEnLinea:text-[18px] ${
          color || 'border-black'
        }`}
        target='_blank' rel='noreferrer'
      >
        {label}
      </Link>
    </div>
  )
}
