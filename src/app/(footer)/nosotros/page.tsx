import {
  AcercaDeNosotros,
  ContactenosBanner,
  ContactenosStripe,
  DondeEstamos,
  GarantiaDeCalidad
} from '.'
import CompaniesTrusted from '../_sections/CompaniesTrusted'
import VideoBanner from './components/VideoBanner'

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
