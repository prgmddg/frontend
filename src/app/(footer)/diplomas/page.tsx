import { Banner, MostrarCards, Stripe } from '@/components/Servicios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Metadata } from 'next'

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
      <MostrarCards program='diplomas' />
    </>
  )
}
