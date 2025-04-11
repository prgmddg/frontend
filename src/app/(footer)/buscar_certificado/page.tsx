
import { Metadata } from 'next'
import ClientContent from './component/ClientContent'

export const metadata:Metadata =
{
  robots:
  {
    nocache: true
  }
}

export default async function page ({ searchParams }: any) {
  const { search, c } = await searchParams
  return (
    <ClientContent searchParams={{ search, c }} />
  )
}
