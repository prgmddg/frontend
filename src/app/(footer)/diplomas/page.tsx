import ViewDiplomas from '@/components/ViewDiplomas'
import { Banner, Stripe } from '@/old-components/Servicios'
import { Metadata } from 'next'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Diplomas',
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
