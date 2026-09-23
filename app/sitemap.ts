import type { MetadataRoute } from 'next'
import { GALLERY } from '@/lib/data/gallery'

const BASE_URL = 'https://www.blueroseautodetailing.com'

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

  // Overview pages
  const overviewPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/services`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/book`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

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
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
  ]

  // Gallery with image metadata (helps Google Images index)
  const galleryPage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: GALLERY.map(item => `${BASE_URL}${item.src}`),
    },
  ]

  return [...home, ...overviewPages, ...servicePages, ...locationPages, ...infoPages, ...blogPages, ...galleryPage]
}
