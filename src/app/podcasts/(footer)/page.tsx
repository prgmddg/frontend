
import { Metadata } from 'next'
import podcasts from '../_data/podcasts.json'
import { Banner } from '../components/Banner'
import { MostrarCardsSemina } from '../components/MostrarCardsSemina'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Podcasts',
    alternates: {
      canonical: 'https://desarrolloglobal.pe/podcasts'
    }
  }
}

export default async function Seminarios () {
  const format = podcasts.sort((a, b) => b.id - a.id)

  return (
    <>
      <Banner idVideo={format[0].video} />
      <MostrarCardsSemina cards={format} />
    </>
  )
}
