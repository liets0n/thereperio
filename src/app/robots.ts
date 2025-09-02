import type { MetadataRoute } from 'next'

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://thereperio.com/sitemap.xml'
  }
}

export default robots
