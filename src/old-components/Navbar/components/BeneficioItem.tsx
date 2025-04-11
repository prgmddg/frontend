import React from 'react'
import Image from 'next/image'

interface props
{
    img:string,
    color:string,
    label:string,
    alt:string
}

export const BeneficioItem = ({ img, color, label, alt }:props) => {
  return (
    <div className='flex bg-[#fff] py-[.6rem] px-[1.2rem] rounded-[.5rem] items-center w-[224px] h-[80px] gap-[1rem]'>
      <Image src={img} alt={alt} width={48} height={36} />
      <span className={`${color}`}>
        {label}
      </span>
    </div>
  )
}
