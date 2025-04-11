import React from 'react'
import Image from 'next/image'

interface props
{
  img:string,
  alt:string
}

export const Entidad = ({ img, alt }:props) => {
  return (
    <div>
      <Image src={img} width={180} height={56} className='h-[56px]' alt={alt} />
    </div>
  )
}
