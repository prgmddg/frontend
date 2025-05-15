import { Banner, MostrarCards, Stripe } from '@/old-components/Servicios'
import { Metadata } from 'next'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Diplomados en Gestión Pública en Línea',
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
