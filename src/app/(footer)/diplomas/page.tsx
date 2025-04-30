import { Banner, Stripe } from '@/old-components/Servicios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Metadata } from 'next'
import ViewDiplomas from '@/components/ViewDiplomas'

export async function generateMetadata (): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://desarrolloglobal.pe/diplomas'
    }
  }
}

export default function Driplomas () {
  return (
    <>
      <Banner tipo='Diplomas' />
      <Stripe />
      <ViewDiplomas />
    </>
  )
}
