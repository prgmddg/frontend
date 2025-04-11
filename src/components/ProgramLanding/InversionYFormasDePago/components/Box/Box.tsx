import { profesor } from '@/types/programData'
import Image from 'next/image'
import React from 'react'

export default function Box (props:profesor) {
  const { avatar } = props

  return (
    <div className='py-[29px]'>
      <div>
        <Image src={avatar} height={93} width={93} alt='avatar del ' />
      </div>
      <section />
    </div>
  )
}
