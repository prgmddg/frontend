import apiurl from '@/types/apiUrl'
import { Metadata } from 'next'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import getRequest from './getRequest'

export default async function getMetadata (params: any, type: apiurl): Promise<Metadata> {
  const { name } = await params
  const { res: data } = await getRequest(type, name)

  const seo: OpenGraph = {
    title: data.titulo,
    description: data.descripcion,
  }

  return {
    ...seo,
    keywords: type === 'seminarios' ? ['seminarios', 'cursos', 'diplomas'] : (data.nuevo_seos && data.nuevo_seos.tags.length > 0) ?  data.nuevo_seos.tags : [],
    openGraph: { ...seo, images: data.imagen || '', url: `https://desarrolloglobal.pe/${type}/${name}`, type: 'website' },
    authors: [{ name: 'Centro de Capacitación y Desarrollo Global', url: 'https://desarrolloglobal.pe' }],
    creator: 'Centro de Capacitación y Desarrollo Global',
    alternates: {
      canonical: `https://desarrolloglobal.pe/${type}/${name}`
    }
  }
}
