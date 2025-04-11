'use client'

import React from 'react'
import Block from '../Components/Block'
import LeftBox from './components/LeftBox/LeftBox'
import RiteBox from './components/RiteBox/RiteBox'

export function InversionYFormasDePago () {
  return (
    <Block
      title='Inversión y Formas de Pago'
      id='Pagar en Linea'
      subtitle='Descubre cómo puedes financiar tu capacitación y hacer una inversión en tu futuro profesional.'
    >
      <div className='flex gap-[9px] 900px:flex-col'>
        <LeftBox />
        <RiteBox />
      </div>
    </Block>
  )
}
