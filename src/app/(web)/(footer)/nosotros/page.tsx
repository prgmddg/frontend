import { Metadata } from 'next'
import {
  AcercaDeNosotros,
  ContactenosBanner,
  ContactenosStripe,
  DondeEstamos,
  GarantiaDeCalidad
} from '.'
import CompaniesTrusted from '../_sections/CompaniesTrusted'
import VideoBanner from './components/VideoBanner'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Nosotros',
    alternates: {
      canonical: 'https://desarrolloglobal.pe/nosotros'
    }
  }
}

export default function page () {
  return (
    <>
      <ContactenosBanner />
      <ContactenosStripe />
      <AcercaDeNosotros />
      <GarantiaDeCalidad />
      <DondeEstamos />
      <VideoBanner />
      <CompaniesTrusted />
    </>
  )
}
