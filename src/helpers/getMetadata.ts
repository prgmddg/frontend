import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import getRequest from './getRequest'
import apiurl from '@/types/apiUrl'
import { Metadata } from 'next'

export default async function getMetadata (params: any, type: apiurl): Promise<Metadata> {
  const { name } = params
  const { res: data } = await getRequest(type, name)
  const { titulo, descripcion, tags } = data.nuevo_seos || { titulo: 'Centro de Capacitación y Desarrollo Global', descripcion: `${13} años mejorando las competencias y capacidades de los servidores públicos y privados. Contamos con la Certificación de calidad ISO 9001-2015.`, tags: '' }

  const seo: OpenGraph = {
    title: type === 'seminarios' ? data.titulo : titulo,
    description: descripcion
  }

  return {
    ...seo,
    keywords: type === 'seminarios' ? ['seminarios', 'cursos', 'diplomas'] : tags,
    openGraph: { ...seo, images: data.imagen || '', url: `https://desarrolloglobal.pe/${type}/${name}`, type: 'website' },
    authors: [{ name: 'Desarrollo Global', url: 'https://desarrolloglobal.pe' }],
    creator: 'Desarrollo Global',
    alternates: {
      canonical: `https://desarrolloglobal.pe/${type}/${name}`
    }
  }
}
