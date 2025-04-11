import { Banner, MostrarCards, Stripe } from '@/components/Servicios'
import { Metadata } from 'next'

export async function generateMetadata (): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://desarrolloglobal.pe/cursos'
    }
  }
}

export default function Cursos () {
  return (
    <>
      <Banner tipo='Cursos' />
      <Stripe />
      <MostrarCards program='cursos' />
    </>
  )
}
