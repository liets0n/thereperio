import type { MetadataRoute } from 'next'

function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://thereperio.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}

export default sitemap
