import { MyBlock } from '@/components/MyBlock/MyBlock'
import React from 'react'
import { BeneficiosDeLaBox } from './components/BeneficiosDeLaBox'

export const BeneficiosDeLa = () => {
  return (
    <MyBlock header={{ h: 'Trayectoria y experiencia comprobada' }} styles={{ container: 'bg-[#FAFAFA]', h: 'text-[#0E2FAA]' }}>

      <BeneficiosDeLaBox />

    </MyBlock>
  )
}
