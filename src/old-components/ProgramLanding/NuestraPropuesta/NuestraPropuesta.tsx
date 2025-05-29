import React from 'react'
import Block from '../Components/Block'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import boxes from './util/boxes'
import Box from './components/Box'

export function NuestraPropuesta () {
  return (
    <Block
      invert
      title='Nuestra Propuesta de Valor'
      id='Beneficios'
      subtitle='¿Que nos diferencia?'
    >
      <div className='bg-myYellow2 py-[17px] text-white text-[16px] rounded-[.5rem] px-[27px] flex justify-between gap-[15px] mb-[49px] flex-wrap mob:justify-center mob:text-[14px] mob:px-[17px]'>
        <Image src='/img/stars.webp' width={269} height={20} alt='icono de estrellas de puntuacion' />
        <p className='flex items-center font-bold gap-[15px] text-center'>
          <FontAwesomeIcon icon={faUsers} />
          1.358 alumnos capacitados en este Diploma
        </p>
      </div>
      <div className='w-[100%] grid gap-[8px] grid-cols-[repeat(auto-fill,minmax(407px,1fr))] gap-y-[18px] mob:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
        {
          boxes.map((box, pos) =>
            (
              <Box key={pos} {...box} />
            ))
        }
      </div>
    </Block>
  )
}
