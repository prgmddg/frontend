import { Banner, MostrarCards, Stripe } from '@/old-components/Servicios'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Metadata } from 'next'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Diplomados',
    alternates: {
      canonical: 'https://desarrolloglobal.pe/diplomados'
    }
  }
}

export default function Diplomados () {
  return (
    <>
      <Banner tipo='Diplomados' />
      <Stripe />
      <MostrarCards program='diplomados' />
    </>
  )
}
