import ViewOneInHouse from '@/components/ViewOneInHouse'

export default async function InoHouseEtiqueta ({ params }: { params: Promise<{ etiqueta: string }> }) {
  const { etiqueta } = await params

  return (
    <ViewOneInHouse tag={etiqueta} />
  )
}
