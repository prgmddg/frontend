import { BASE_URL } from '@/lib/const'
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL ?? 'https://desarrolloglobal.pe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: BASE_URL ?? 'https://desarrolloglobal.pe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: BASE_URL ?? 'https://desarrolloglobal.pe',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}