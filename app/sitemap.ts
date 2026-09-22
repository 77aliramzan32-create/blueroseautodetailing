import type { MetadataRoute } from 'next'

const BASE_URL = 'https://blueroseauto.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static routes
  const home: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  // Service pages
  const serviceSlugs = [
    'auto-detailing',
    'paint-correction',
    'ceramic-coating',
    'paint-protection-film',
    'window-tinting',
    'vinyl-wraps',
    'rv-detailing',
    'boat-detailing',
  ]
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // Location pages
  const locationSlugs = [
    'eugene-or',
    'springfield-or',
    'coburg-or',
    'lowell-or',
    'veneta-or',
    'creswell-or',
    'harrisburg-or',
    'santa-clara-or',
    'cottage-grove-or',
    'junction-city-or',
  ]
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Core informational pages
  const infoPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Blog
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]

  return [...home, ...servicePages, ...locationPages, ...infoPages, ...blogPages]
}
