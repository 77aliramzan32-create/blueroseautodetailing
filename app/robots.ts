import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.blueroseautodetailing.com/sitemap.xml',
    host: 'https://www.blueroseautodetailing.com',
  }
}
