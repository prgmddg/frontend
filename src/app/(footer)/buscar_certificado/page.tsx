import { Metadata } from 'next'
import ClientContent from './component/ClientContent'

export const metadata:Metadata =
{
  title: 'Desarrollo Global | Buscar Certificado',
  alternates: {
    canonical: 'https://desarrolloglobal.pe/buscar_certificado'
  }
}

export default async function page ({ searchParams }: any) {
  const { search, c } = await searchParams
  return (
    <ClientContent searchParams={{ search, c }} />
  )
}
