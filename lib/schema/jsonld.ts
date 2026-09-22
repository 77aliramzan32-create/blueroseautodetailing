import { BUSINESS } from '@/lib/data/business'
import { SERVICES } from '@/lib/data/services'
import { LOCATIONS } from '@/lib/data/locations'
import { FAQS } from '@/lib/data/faqs'

const BASE_URL = 'https://www.blueroseautodetailing.com'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['AutomotiveBusiness', 'LocalBusiness'],
    '@id': `${BASE_URL}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BASE_URL,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    foundingDate: BUSINESS.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.0509,
      longitude: -122.9963,
    },
    openingHoursSpecification: BUSINESS.hoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: BUSINESS.serviceArea.map((city) => ({
      '@type': 'City',
      name: `${city}, OR`,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.googleRating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.youtube,
      BUSINESS.social.instagram,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auto Detailing Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: `${BASE_URL}/services/${s.slug}`,
        },
      })),
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/blue-rose-auto-detailing-logo.png`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'US-OR',
      availableLanguage: 'English',
    },
    sameAs: [
      BUSINESS.social.facebook,
      BUSINESS.social.youtube,
      BUSINESS.social.instagram,
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { '@id': `${BASE_URL}/#organization` },
  }
}

export function serviceSchema(serviceSlug: string) {
  const service = SERVICES.find((s) => s.slug === serviceSlug)
  if (!service) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.schema.name,
    serviceType: service.schema.serviceType,
    description: service.schema.description,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: BUSINESS.serviceArea.map((city) => ({ '@type': 'City', name: `${city}, OR` })),
    url: `${BASE_URL}/services/${service.slug}`,
  }
}

export function locationServiceSchema(locationSlug: string) {
  const location = LOCATIONS.find((l) => l.slug === locationSlug)
  if (!location) return null
  return {
    '@context': 'https://schema.org',
    '@type': ['AutomotiveBusiness', 'LocalBusiness'],
    name: BUSINESS.name,
    description: `Professional auto detailing services serving ${location.fullName} — Blue Rose Auto Detailing Services in Springfield, OR.`,
    url: `${BASE_URL}/locations/${location.slug}`,
    telephone: BUSINESS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: location.fullName,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.googleRating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }
}

export function faqPageSchema(faqIds?: string[]) {
  const items = faqIds ? FAQS.filter((f) => faqIds.includes(f.id)) : FAQS
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
