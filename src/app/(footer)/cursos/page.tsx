import ViewCourses from '@/components/ViewCourses'
import { Banner, Stripe } from '@/old-components/Servicios'
import { Metadata } from 'next'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Cursos',
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
      <ViewCourses />
    </>
  )
}
