import ViewOneInHouse from '@/components/ViewOneInHouse'
import getMetadata from '@/helpers/getMetadata'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ etiqueta :string }> }): Promise<Metadata> {
  const { etiqueta } = await params
  
  return await getMetadata({ name: etiqueta }, 'inhouse')
}


export default async function InoHouseEtiqueta ({ params }: { params: Promise<{ etiqueta: string }> }) {
  const { etiqueta } = await params

  return (
    <ViewOneInHouse tag={etiqueta} />
  )
}
