import getMetadata from '@/helpers/getMetadata'
import { Metadata } from 'next'
import ViewOneDiploma from '@/components/ViewOneDiploma'

export async function generateMetadata ({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params
  return await getMetadata({ name }, 'diplomas')
}

export default async function DiplomaPage ({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params

  return (
    <ViewOneDiploma name={name} />
  )
}
