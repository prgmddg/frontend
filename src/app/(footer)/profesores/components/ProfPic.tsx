import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface props
{
    styles?:{container:string}
    foto:string
}

export default function ProfPic ({ foto, styles }:props) {
  const { container } = styles || { container: '' }

  return (
    <div className={twMerge('rounded-[.5rem] w-[270px] h-[252px] box-content overflow-hidden relative my-shadow 1151px:hidden', container)}>
      <Image
        src={foto}
        alt='foto de profesor'
        width={270}
        height={252}
        className='absolute top-[50%] w-[100%] translate-y-[-50%] left-[50%] translate-x-[-50%]'
      />
    </div>
  )
}
