import { MetadataRoute } from 'next'

export default function robots (): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://desarrolloglobal.pe/sitemap.xml',
    host: 'https://desarrolloglobal.pe'
  }
}
