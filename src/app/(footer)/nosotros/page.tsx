import React from 'react'
import {
  ContactenosBanner,
  ContactenosStripe,
  AcercaDeNosotros,
  GarantiaDeCalidad,
  DondeEstamos,
  CentroDeCapacitacion
} from '.'
import { MyBlock } from '@/components/MyBlock/MyBlock'
import { EntidadesQueConfiarion } from '@/components/EntidadesQueConfiarion/EntidadesQueConfiarion'

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
