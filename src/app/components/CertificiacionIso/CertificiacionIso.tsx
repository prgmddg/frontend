'use client'

import React from 'react'
import { EntidadesQueConfiarion } from '@/components/EntidadesQueConfiarion/EntidadesQueConfiarion'
import { MyBlock } from '@/components/MyBlock/MyBlock'
import DejanosAyudarte from './components/DejanosAyudarte'

export const CertificiacionIso = () => {
  return (
    <MyBlock styles={{ container: 'py-[111px] 560px:py-[75px]', section: 'py-0' }}>
      <EntidadesQueConfiarion />
      <DejanosAyudarte />
    </MyBlock>
  )
}
