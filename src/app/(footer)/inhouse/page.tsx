import ViewInHouses from '@/components/ViewInHouses'
import { Metadata } from 'next'

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: 'Desarrollo Global | In Houses',
    alternates: {
      canonical: 'https://desarrolloglobal.pe/inhouse'
    }
  }
}

export default async function page () {
  return (
    <ViewInHouses />
  )
}
