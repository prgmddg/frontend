import {MostrarCards, Stripe} from '@/old-components/Servicios'
import {Carosuel, BeneficiosDeNuestrosProgramas, CentroDeCapacitacion, CertificiacionIso} from '..'
import BannerStripe from '../old-components/BannerStripe/BannerStripe'
import WhatsAppIcon from '@/app/old-components/WhatsAppIcon'

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
