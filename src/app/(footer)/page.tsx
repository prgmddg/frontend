'use client'

import {MostrarCards, Stripe} from '@/components/Servicios'
import {Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion, CertificiacionIso} from '..'
import BannerStripe from '../components/BannerStripe/BannerStripe'
import WhatsAppIcon from '@/app/components/WhatsAppIcon'

export default function Home() {
  return (
    <>
      <WhatsAppIcon/>
      <BannerStripe/>
      <Carosuel/>
      <Stripe/>
      <MostrarCards program='proximos inicios' programSelector/>
      <BeneficiosDeNuestrosProgramas/>
      <CentroDeCapacitacion/>
      <CertificiacionIso/>
    </>
  )
}
