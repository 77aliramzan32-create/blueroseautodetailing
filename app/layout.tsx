import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import { barlow, inter } from '@/app/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StickyCtaBar from '@/components/layout/StickyCtaBar'

export const metadata: Metadata = {
  metadataBase: new URL('https://blueroseauto.com'),
  title: {
    template: '%s | Blue Rose Auto Detailing',
    default: 'Blue Rose Auto Detailing Services | Springfield & Eugene, OR',
  },
  description:
    'Professional auto detailing, paint correction, ceramic coating, PPF & window tinting in Springfield, OR. Owner-operated since 1994. 5.0★ Google rating. Call (541) 337-9893.',
  keywords: [
    'auto detailing Springfield OR',
    'car detailing Eugene OR',
    'ceramic coating Springfield Oregon',
    'paint correction Eugene',
    'paint protection film Springfield',
    'window tinting Springfield OR',
    'vinyl wraps Eugene OR',
    'RV detailing Springfield',
    'boat detailing Eugene',
    'Blue Rose Auto Detailing',
  ],
  authors: [{ name: 'Blue Rose Auto Detailing Services' }],
  creator: 'Blue Rose Auto Detailing Services',
  publisher: 'Blue Rose Auto Detailing Services',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blueroseauto.com',
    siteName: 'Blue Rose Auto Detailing Services',
    title: 'Blue Rose Auto Detailing Services | Springfield & Eugene, OR',
    description:
      'Professional auto detailing, paint correction, ceramic coating, PPF & window tinting in Springfield, OR. Owner-operated since 1994. 5.0★ Google rating.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Blue Rose Auto Detailing Services — Springfield, OR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Rose Auto Detailing Services | Springfield & Eugene, OR',
    description:
      'Professional auto detailing, paint correction, ceramic coating & more. Owner-operated since 1994 in Springfield, OR.',
    images: ['/images/og-default.jpg'],
  },
  verification: {
    // Replace with real Google Search Console verification token
    // google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://blueroseauto.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0B',
}

// ── Structured Data Schemas ──────────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  '@id': 'https://blueroseauto.com/#business',
  name: 'Blue Rose Auto Detailing Services',
  legalName: 'Blue Rose Auto Detailing Services',
  url: 'https://blueroseauto.com',
  telephone: '+15413379893',
  foundingDate: '1994',
  description:
    'Blue Rose Auto Detailing Services is a professional auto detailing shop in Springfield, OR, offering paint correction, ceramic coating, PPF, window tinting, vinyl wraps, RV detailing, and boat detailing. Owner-operated since 1994 with fair, transparent pricing.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 100, 3436 Olympic Street',
    addressLocality: 'Springfield',
    addressRegion: 'OR',
    postalCode: '97478',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.0462,
    longitude: -122.9896,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday'],
      opens: '08:30',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '17:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '5',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'Eugene', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Springfield', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Coburg', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Lowell', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Veneta', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Creswell', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Harrisburg', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Santa Clara', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Cottage Grove', containedInPlace: { '@type': 'State', name: 'Oregon' } },
    { '@type': 'City', name: 'Junction City', containedInPlace: { '@type': 'State', name: 'Oregon' } },
  ],
  sameAs: [
    'https://www.facebook.com/BlueRoseAuto',
    'https://www.youtube.com/@BLUEROSEAUTO',
    'https://www.instagram.com/blueroseauto',
  ],
  hasMap: 'https://maps.google.com/?q=3436+Olympic+Street+Springfield+OR+97478',
  image: 'https://blueroseauto.com/images/og-default.jpg',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://blueroseauto.com/#organization',
  name: 'Blue Rose Auto Detailing Services',
  url: 'https://blueroseauto.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://blueroseauto.com/images/logo.png',
    width: 200,
    height: 60,
  },
  foundingDate: '1994',
  sameAs: [
    'https://www.facebook.com/BlueRoseAuto',
    'https://www.youtube.com/@BLUEROSEAUTO',
    'https://www.instagram.com/blueroseauto',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://blueroseauto.com/#website',
  name: 'Blue Rose Auto Detailing Services',
  url: 'https://blueroseauto.com',
  publisher: {
    '@id': 'https://blueroseauto.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://blueroseauto.com/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// ── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <head>
        {/* Google Search Console — replace with real verification code */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* GTM noscript — replace GTM-XXXXXXX with real container ID */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}

        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCtaBar />

        {/* GA4 — replace G-XXXXXXXXXX with real Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { page_path: window.location.pathname });
          `}
        </Script>

        {/* GTM — uncomment and replace GTM-XXXXXXX with real container ID */}
        {/* <Script id="gtm-init" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script> */}
      </body>
    </html>
  )
}
