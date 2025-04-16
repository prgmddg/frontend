import { BASE_URL } from '@/lib/const'
import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/buscar_certificado`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/iso-9001-2015`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/libro-de-reclamaciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/pasarela-de-pagos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/politicas-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/politicas-de-privacidad/politicas-de-calidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/politicas-de-privacidad/politicas-de-cookies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/politicas-de-privacidad/terminos-de-servicio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/profesores`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/registrar-reclamacion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]

  // CURSOS
  const cursosResponse = await fetch(`${process.env.NEXT_API_URL}/cursos`, {
    method: 'GET'
  })
  const cursos = await cursosResponse.json() as { envivo: {etiqueta: string}[], grabado_web: {etiqueta: string}[] }
  sitemapEntries.push({
    url: `${BASE_URL}/cursos`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  cursos.envivo.forEach((curso) => {
    sitemapEntries.push({
      url: `${BASE_URL}/cursos/${curso.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  cursos.grabado_web.forEach((curso) => {
    sitemapEntries.push({
      url: `${BASE_URL}/cursos/grabados/${curso.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  // DIPLOMAS
  const diplomasResponse = await fetch(`${process.env.NEXT_API_URL}/diplomas`, {
    method: 'GET'
  })
  const diplomas = await diplomasResponse.json() as { envivo: {etiqueta: string}[], grabados_web: {etiqueta: string}[] }

  sitemapEntries.push({
    url: `${BASE_URL}/diplomas`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  diplomas.envivo.forEach((diploma) => {
    sitemapEntries.push({
      url: `${BASE_URL}/diplomas/${diploma.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  diplomas.grabados_web.forEach((diploma) => {
    sitemapEntries.push({
      url: `${BASE_URL}/diplomas/grabados/${diploma.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  // DIPLOMADOS
  const diplomadosResponse = await fetch(`${process.env.NEXT_API_URL}/diplomados`, {
    method: 'GET'
  })

  const diplomados = await diplomadosResponse.json() as { envivo: {etiqueta: string}[], grabados_web: {etiqueta: string}[] }

  sitemapEntries.push({
    url: `${BASE_URL}/diplomados`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  diplomados.envivo.forEach((diplomado) => {
    sitemapEntries.push({
      url: `${BASE_URL}/diplomados/${diplomado.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  diplomados.grabados_web.forEach((diplomado) => {
    sitemapEntries.push({
      url: `${BASE_URL}/diplomados/grabados/${diplomado.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  // IN HOUSE
  const inHouseResponse = await fetch(`${process.env.NEXT_API_URL}/inhouses`, {
    method: 'GET'
  })
  const inHouse = await inHouseResponse.json() as { etiqueta: string }[]

  sitemapEntries.push({
    url: `${BASE_URL}/inhouse`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  inHouse.forEach((inhouse) => {
    sitemapEntries.push({
      url: `${BASE_URL}/inhouse/${inhouse.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  // SEMINARIOS
  const seminariosResponse = await fetch(`${process.env.NEXT_API_URL}/seminarios`, {
    method: 'GET'
  })
  const seminarios = await seminariosResponse.json() as { proximos: { etiqueta: string }[], terminados: { etiqueta: string }[] }

  sitemapEntries.push({
    url: `${BASE_URL}/seminarios`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  seminarios.terminados.forEach((seminario) => {
    sitemapEntries.push({
      url: `${BASE_URL}/seminarios/${seminario.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  sitemapEntries.push({
    url: `${BASE_URL}/seminariosInfo`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  })

  seminarios.proximos.forEach((seminario) => {
    sitemapEntries.push({
      url: `${BASE_URL}/seminariosInfo/${seminario.etiqueta}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  // TRABAJOS
  sitemapEntries.push(
    {
      url: `${BASE_URL}/trabajos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  )
  sitemapEntries.push(
    {
      url: `${BASE_URL}/trabajos/diseno-grafico-web`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  )
  sitemapEntries.push(
    {
      url: `${BASE_URL}/trabajos/asesora-comercial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  )

  return sitemapEntries
}