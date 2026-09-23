import type { Metadata } from 'next'
import BookForm from './BookForm'

export const metadata: Metadata = {
  title: 'Book Auto Detailing in Springfield, OR | Blue Rose Auto Detailing',
  description:
    'Schedule your auto detail, ceramic coating, paint correction, PPF, or window tint in Springfield & Eugene, OR. Easy online booking — we confirm within a few hours.',
  alternates: { canonical: '/book' },
  openGraph: {
    title: 'Book a Detail — Blue Rose Auto Detailing Services',
    description:
      'Schedule your auto detail, ceramic coating, paint correction, PPF, or window tint. Fast, easy online booking. We confirm within a few hours.',
    url: '/book',
  },
  robots: { index: true, follow: true },
}

const bookingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Auto Detailing Booking — Blue Rose Auto Detailing Services',
  url: 'https://www.blueroseautodetailing.com/book',
  provider: {
    '@type': 'AutomotiveBusiness',
    '@id': 'https://www.blueroseautodetailing.com/#business',
    name: 'Blue Rose Auto Detailing Services',
    telephone: '+15413379893',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 100, 3436 Olympic Street',
      addressLocality: 'Springfield',
      addressRegion: 'OR',
      postalCode: '97478',
      addressCountry: 'US',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Springfield, OR' },
    { '@type': 'City', name: 'Eugene, OR' },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.blueroseautodetailing.com/book',
      actionPlatform: [
        'https://schema.org/DesktopWebPlatform',
        'https://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Auto Detailing Appointment Request',
    },
  },
}

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <BookForm />
    </>
  )
}
