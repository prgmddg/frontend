import React from 'react'
import estamosBoxes from './helpers/estamosBoxes'
import { EstamosBox } from '.'
import { MyBlock } from '@/old-components/MyBlock/MyBlock'

export const EstamosEnLinea = () => {
  return (
    <MyBlock styles={{ container: 'bg-myLightBlue1' }}>
      <h2 className='text-[2rem] text-[#fff] text-center mb-[3rem] estamosEnLinea3:text-[1.8rem]'>
        Estamos en línea, ¿Qué deseas hacer hoy?
      </h2>
      <section className='flex gap-[1rem] items-stretch flex-wrap estamosEnLinea2:flex-col'>
        {estamosBoxes.map((box, pos) => (
          <EstamosBox key={pos} {...box} />
        ))}
      </section>
    </MyBlock>
  )
}
