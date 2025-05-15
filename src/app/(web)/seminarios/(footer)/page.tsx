
import getRequest from '@/helpers/getRequest'
import { Metadata } from 'next'
import { Banner } from '../components/Banner'
import { MostrarCardsSemina } from '../components/MostrarCardsSemina'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | Seminarios',
    alternates: {
      canonical: 'https://desarrolloglobal.pe/seminarios'
    }
  }
}

export default async function Seminarios () {
  const { res: seminarios, err } = await getRequest('seminarios')

  if (err) return null

  return (
    <>
      <Banner />
      {
        !err && <MostrarCardsSemina terminados={seminarios.terminados} proximos={seminarios.proximos} />
      }
    </>
  )
}
