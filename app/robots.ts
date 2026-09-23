import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard crawlers + search engines
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/'],
      },
      {
        // Allow GPTBot (ChatGPT) to crawl for AI training / citations
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      {
        // Allow ClaudeBot to crawl
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      {
        // Allow PerplexityBot
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      {
        // Allow Google-Extended (Gemini training)
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      {
        // Allow Meta AI
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: 'https://www.blueroseautodetailing.com/sitemap.xml',
    host: 'https://www.blueroseautodetailing.com',
  }
}
