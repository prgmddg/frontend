import { MyBlock } from '@/components/MyBlock/MyBlock'
import { Video } from '@/components/Video/Video'
import Image from 'next/image'
import React from 'react'

export const CentroDeCapacitacion = () => {
  return (
    <MyBlock
      styles={{ container: 'bg-myPurple2 text-[#fff]', h: 'text-[#fff]' }}
      header={{ h: 'Centro de Capacitación y Desarrollo Global' }}
    >
      <Image
        src='/img/logo-nav-bar.webp'
        alt='logo de desarrollo global'
        className='mb-[1rem]'
        height={80}
        width={323}
      />
      <Video />
      <p>Más de 13 años brindando capacitaciones virtuales.</p>
    </MyBlock>
  )
}
