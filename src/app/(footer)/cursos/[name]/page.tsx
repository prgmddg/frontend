import ViewProgram from '@/components/ViewProgram'
import getMetadata from '@/helpers/getMetadata'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ name :string }> }): Promise<Metadata> {
  const { name } = await params
  return await getMetadata({ name }, 'cursos')
}

export default async function CursosNombre({ params }: { params: Promise<{ name :string }> }) {
  const { name } = await params

  return (
    <ViewProgram name={name} />
  )
}
