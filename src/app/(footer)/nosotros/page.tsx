import React from 'react'
import {
  ContactenosBanner,
  ContactenosStripe,
  AcercaDeNosotros,
  GarantiaDeCalidad,
  DondeEstamos,
  CentroDeCapacitacion
} from '.'
import { MyBlock } from '@/old-components/MyBlock/MyBlock'
import { EntidadesQueConfiarion } from '@/old-components/EntidadesQueConfiarion/EntidadesQueConfiarion'

export default function page () {
  return (
    <>
      <ContactenosBanner />
      <ContactenosStripe />
      <AcercaDeNosotros />
      <GarantiaDeCalidad />
      <DondeEstamos />
      <CentroDeCapacitacion />
      <MyBlock>
        <EntidadesQueConfiarion />
      </MyBlock>
    </>
  )
}
