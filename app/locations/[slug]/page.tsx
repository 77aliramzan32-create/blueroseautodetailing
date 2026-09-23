import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LOCATIONS, getLocation } from '@/lib/data/locations'
import { BUSINESS } from '@/lib/data/business'
import { locationServiceSchema, breadcrumbSchema } from '@/lib/schema/jsonld'
import Breadcrumb from '@/components/layout/Breadcrumb'
import ServiceGrid from '@/components/sections/ServiceGrid'
import CallToAction from '@/components/sections/CallToAction'

// ── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }))
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const location = getLocation(slug)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `/locations/${slug}`,
      siteName: BUSINESS.name,
      locale: 'en_US',
      type: 'website',
    },
  }
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01L6.62 10.79z"
        fill="currentColor"
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3 8h10M8 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="2.5" fill="currentColor" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="7" fill="rgba(200,36,63,0.12)" stroke="rgba(200,36,63,0.3)" strokeWidth="1" />
      <path
        d="M5 8l2 2 4-4"
        stroke="#C8243F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DirectionsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12 2l8 8-8 8-8-8 8-8z"
        fill="rgba(200,36,63,0.15)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// ── Directions text per location ──────────────────────────────────────────────

const DIRECTIONS_TEXT: Record<string, string> = {
  'eugene-or':
    'From Eugene, take the OR-126 E / Main Street exit east into Springfield. Continue east on Main Street, then turn onto Olympic Street — our shop is at Suite 100, 3436 Olympic Street, on the south side. The drive from most Eugene neighborhoods is 10–15 minutes.',
  'springfield-or':
    'We\'re located right here in Springfield at Suite 100, 3436 Olympic Street — easy to find whether you\'re coming from Thurston, Mohawk, or downtown Springfield. Street parking is available on-site.',
  'coburg-or':
    'From Coburg, head south on I-5 toward Eugene/Springfield. Take the OR-126 E / Main Street exit and continue east on Main Street into Springfield. Turn onto Olympic Street — we\'re at Suite 100, 3436 Olympic Street. About 12–15 minutes from Coburg.',
  'lowell-or':
    'From Lowell, take OR-58 W / Jasper Road west toward Springfield. Once in Springfield, head north and connect to Main Street, then turn onto Olympic Street. We\'re at Suite 100, 3436 Olympic Street — about 20–25 minutes from Lowell.',
  'veneta-or':
    'From Veneta, take OR-126 E toward Eugene. Continue east through Eugene and cross into Springfield via the OR-126 / Main Street corridor. Head east on Main Street and turn onto Olympic Street. We\'re at Suite 100, 3436 Olympic Street — about 25–30 minutes from Veneta.',
  'creswell-or':
    'From Creswell, take I-5 N toward Springfield/Eugene. Exit onto OR-126 E / Main Street and head east into Springfield. Turn onto Olympic Street — Suite 100, 3436 Olympic Street is on the south side. The I-5 drive north is easy, about 20 minutes.',
  'harrisburg-or':
    'From Harrisburg, take I-5 S toward Eugene/Springfield. Exit onto OR-126 E / Main Street and continue east into Springfield, then turn south onto Olympic Street. We\'re at Suite 100, 3436 Olympic Street — about 25 minutes from Harrisburg via I-5.',
  'santa-clara-or':
    'From Santa Clara, take the Belt Line Highway (OR-569) east toward Springfield. Connect to Main Street and head east, then turn onto Olympic Street. Our shop is at Suite 100, 3436 Olympic Street — typically a 12–15 minute drive from Santa Clara.',
  'cottage-grove-or':
    'From Cottage Grove, take I-5 N toward Springfield. Exit onto OR-126 E / Main Street and continue east through Eugene into Springfield. Turn onto Olympic Street — Suite 100, 3436 Olympic Street is on the south side. About 30–35 minutes via I-5.',
  'junction-city-or':
    'From Junction City, take OR-99W S toward Eugene or head to I-5 S and continue to the OR-126 E / Main Street exit. Head east into Springfield and turn onto Olympic Street. We\'re at Suite 100, 3436 Olympic Street — about 20–25 minutes from Junction City.',
}

// ── Page component ────────────────────────────────────────────────────────────

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const location = getLocation(slug)

  if (!location) notFound()

  const isSpringfield = location.slug === 'springfield-or'
  const directionsText =
    DIRECTIONS_TEXT[slug] ??
    `From ${location.city}, head toward Springfield via the nearest major highway. Our shop is located at Suite 100, 3436 Olympic Street, Springfield, OR 97478 — approximately ${location.distance} from ${location.city}.`

  const nearbyLocationData = location.nearbyLocations
    .map((nearbySlug) => LOCATIONS.find((l) => l.slug === nearbySlug))
    .filter((l): l is NonNullable<typeof l> => l !== undefined)

  const locationServiceJsonLd = locationServiceSchema(slug)
  const breadcrumbJsonLd = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: `${location.city}, OR`, url: `/locations/${slug}` },
  ])

  return (
    <>
      {/* JSON-LD: Location Service */}
      {locationServiceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(locationServiceJsonLd) }}
        />
      )}

      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="bg-surface min-h-screen">

        {/* ── SECTION 1: Page Header ──────────────────────────────────────── */}
        <section
          className="relative w-full overflow-hidden min-h-[52vh] md:min-h-[48vh] bg-surface"
          aria-label={`Auto Detailing in ${location.city}, OR`}
        >
          {/* Background — shop exterior at very low opacity */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Image
              src="/images/gallery/auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp"
              alt=""
              fill
              priority
              className="object-cover object-[center_40%] opacity-20 md:opacity-25"
              sizes="100vw"
            />
            {/* Mobile overlay */}
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  'linear-gradient(160deg, rgba(10,10,11,0.82) 0%, rgba(10,10,11,0.60) 50%, rgba(10,10,11,0.85) 100%)',
              }}
            />
            {/* Desktop overlay */}
            <div
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.78) 60%, rgba(10,10,11,0.98) 100%)',
              }}
            />
          </div>

          {/* Subtle red glow top-left */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full z-0"
            style={{
              background:
                'radial-gradient(circle, rgba(200,36,63,0.08) 0%, transparent 70%)',
            }}
          />
          {/* Grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-20 md:pb-24">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'Locations', href: '/locations' },
                  { name: `${location.city}, OR`, href: `/locations/${slug}` },
                ]}
              />
            </div>

            {/* Badge */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: 'rgba(200,36,63,0.1)',
                  border: '1px solid rgba(200,36,63,0.25)',
                  color: '#C8243F',
                }}
              >
                <MapPinIcon />
                {isSpringfield ? location.county : `Serving ${location.city}, OR`}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-5"
              style={{ color: '#EAEAEC' }}
            >
              Auto Detailing in{' '}
              <span style={{ color: '#C8243F' }}>{location.city}</span>, OR
            </h1>

            {/* Sub-headline */}
            <p
              className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
              style={{ color: '#A1A1AA' }}
            >
              {isSpringfield
                ? 'Your Springfield, OR detailing shop — professional results, owner-operated since 1994.'
                : `Professional detailing services by Blue Rose — located in Springfield, OR, proudly serving ${location.city} customers.`}
            </p>

            {/* CTA Buttons — stacked on mobile, inline from sm */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
              <a
                href={`tel:${BUSINESS.phonePlain}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:shadow-[0_0_20px_4px_rgba(200,36,63,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B] w-full sm:w-auto"
                style={{
                  background: '#C8243F',
                  focusVisibleRing: '#C8243F',
                } as React.CSSProperties}
                aria-label={`Call Blue Rose Auto Detailing at ${BUSINESS.phone}`}
              >
                <PhoneIcon />
                {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full sm:w-auto"
                style={{
                  color: '#C8243F',
                  border: '1px solid rgba(200,36,63,0.35)',
                  background: 'transparent',
                }}
              >
                Get a Free Quote
                <ArrowRightIcon />
              </Link>
            </div>

            {/* Distance indicator */}
            {!isSpringfield && (
              <p
                className="inline-flex items-center gap-1.5 text-sm"
                style={{ color: '#A1A1AA' }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                ~{location.distance} from our shop in Springfield
              </p>
            )}
          </div>
        </section>

        {/* ── SECTION 2: About Serving This Area ─────────────────────────── */}
        <section
          className="py-16 md:py-24"
          aria-label={`About serving ${location.city}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

              {/* Description + highlights */}
              <div>
                <h2
                  className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6"
                  style={{ color: '#EAEAEC' }}
                >
                  Serving{' '}
                  <span style={{ color: '#C8243F' }}>{location.city}</span>{' '}
                  with Pride
                </h2>
                <p
                  className="text-base md:text-lg leading-relaxed mb-8"
                  style={{ color: '#A1A1AA' }}
                >
                  {location.description}
                </p>

                {/* Service highlights */}
                <ul className="space-y-3" role="list">
                  {location.serviceHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm md:text-base"
                      style={{ color: '#EAEAEC' }}
                    >
                      <CheckIcon />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shop info card */}
              <div
                className="rounded-2xl p-6 md:p-8"
                style={{
                  background: '#131315',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <h3
                  className="font-display font-bold text-xl mb-5"
                  style={{ color: '#EAEAEC' }}
                >
                  Visit Our Springfield Shop
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3 mb-5">
                  <div
                    className="mt-0.5 p-2 rounded-lg shrink-0"
                    style={{ background: 'rgba(200,36,63,0.1)' }}
                  >
                    <MapPinIcon />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-0.5"
                      style={{ color: '#EAEAEC' }}
                    >
                      {BUSINESS.address.street}
                    </p>
                    <p className="text-sm" style={{ color: '#A1A1AA' }}>
                      {BUSINESS.address.city}, {BUSINESS.address.state}{' '}
                      {BUSINESS.address.zip}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{ background: 'rgba(200,36,63,0.1)' }}
                  >
                    <PhoneIcon />
                  </div>
                  <a
                    href={`tel:${BUSINESS.phonePlain}`}
                    className="font-semibold text-sm transition-colors hover:opacity-80"
                    style={{ color: '#C8243F' }}
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                {/* Divider */}
                <div
                  className="mb-5"
                  style={{
                    height: '1px',
                    background: 'rgba(255,255,255,0.07)',
                  }}
                />

                {/* Hours */}
                <div className="flex items-start gap-3 mb-6">
                  <div
                    className="mt-0.5 p-2 rounded-lg shrink-0"
                    style={{ background: 'rgba(200,36,63,0.1)' }}
                  >
                    <ClockIcon />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-2"
                      style={{ color: '#EAEAEC' }}
                    >
                      Business Hours
                    </p>
                    <ul className="space-y-1 text-xs" style={{ color: '#A1A1AA' }}>
                      {BUSINESS.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-4">
                          <span
                            className="font-medium w-24 shrink-0"
                            style={{ color: '#EAEAEC' }}
                          >
                            {h.day}
                          </span>
                          <span>
                            {h.open && h.close
                              ? `${h.open} – ${h.close}`
                              : 'Closed'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`tel:${BUSINESS.phonePlain}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:shadow-[0_0_16px_2px_rgba(200,36,63,0.35)]"
                  style={{ background: '#C8243F' }}
                >
                  <PhoneIcon />
                  Call to Book Your Detail
                </a>

                {/* Quick links */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {[
                    { name: 'Book Online', href: '/book' },
                    { name: 'Gallery',     href: '/gallery' },
                    { name: 'Reviews',     href: '/reviews' },
                    { name: 'FAQ',         href: '/faq' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-center py-2 px-3 rounded-lg text-xs font-medium transition-colors"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#A1A1AA' }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ── SECTION 3: Services Available ────────────────────────────────── */}
        <section
          aria-label={`Auto detailing services for ${location.city}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-4">
            <h2
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4"
              style={{ color: '#EAEAEC' }}
            >
              Auto Detailing Services Available in{' '}
              <span style={{ color: '#C8243F' }}>{location.city}</span>
            </h2>
            <p
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: '#A1A1AA' }}
            >
              Every service we offer is available to {location.city} customers — bring your vehicle to our Springfield shop at 3436 Olympic Street for professional-grade results.
            </p>
          </div>

          <ServiceGrid compact={true} title="" subtitle="" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
            <div
              className="rounded-xl p-5 flex items-start gap-4"
              style={{
                background: '#131315',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="p-2 rounded-lg shrink-0 mt-0.5"
                style={{ background: 'rgba(200,36,63,0.1)' }}
              >
                <CheckIcon />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                <span className="font-semibold" style={{ color: '#EAEAEC' }}>
                  {location.city} customers:
                </span>{' '}
                All 8 services — from a simple full detail to multi-day paint
                correction, ceramic coating, PPF, and vinyl wraps — are available
                to you. Book by phone or contact us online to schedule. We work
                with your timeline and offer transparent, fair pricing on every
                job.
              </p>
            </div>
          </div>
        </section>

        {/* ── Gallery + Reviews band ───────────────────────────────────────── */}
        <section
          className="py-10"
          style={{ background: 'rgba(200,36,63,0.04)', borderTop: '1px solid rgba(200,36,63,0.1)', borderBottom: '1px solid rgba(200,36,63,0.1)' }}
          aria-label="Gallery and reviews"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center sm:text-left" style={{ color: '#A1A1AA' }}>
              See real results from our Springfield shop — paint correction, ceramic coating, interior detail, RV detailing &amp; more.
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                style={{ background: 'rgba(200,36,63,0.1)', border: '1px solid rgba(200,36,63,0.25)', color: '#C8243F' }}
              >
                View Gallery →
              </Link>
              <Link
                href="/reviews"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#A1A1AA' }}
              >
                Read Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Getting Here ────────────────────────────────────── */}
        <section
          className="py-16 md:py-24"
          aria-label={`Directions from ${location.city}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold text-3xl md:text-4xl leading-tight mb-6"
              style={{ color: '#EAEAEC' }}
            >
              Getting Here{!isSpringfield && ` from ${location.city}`}
            </h2>

            {/* Directions note */}
            <div
              className="rounded-2xl p-6 md:p-8 mb-8"
              style={{
                background: '#131315',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2.5 rounded-xl shrink-0 mt-0.5"
                  style={{ background: 'rgba(200,36,63,0.1)', border: '1px solid rgba(200,36,63,0.15)' }}
                >
                  <DirectionsIcon />
                </div>
                <div>
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: '#A1A1AA' }}
                  >
                    {directionsText}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.address.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                    style={{ color: '#C8243F' }}
                    aria-label="Get directions to Blue Rose Auto Detailing on Google Maps"
                  >
                    Get Directions on Google Maps
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div
              className="rounded-2xl overflow-hidden mb-8 flex items-center justify-center text-center"
              style={{
                background: '#131315',
                border: '1px solid rgba(255,255,255,0.07)',
                minHeight: '240px',
              }}
            >
              {/* Map embed: add Google Maps embed code here */}
              <div className="p-8">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'rgba(200,36,63,0.1)' }}
                >
                  <MapPinIcon />
                </div>
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: '#EAEAEC' }}
                >
                  Blue Rose Auto Detailing Services
                </p>
                <p className="text-xs mb-4" style={{ color: '#A1A1AA' }}>
                  Suite 100, 3436 Olympic Street, Springfield, OR 97478
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.address.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: '#C8243F' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Shop address + hours — for schema/crawlability */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: '#131315',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h3
                className="font-display font-bold text-lg mb-4"
                style={{ color: '#EAEAEC' }}
              >
                Shop Address &amp; Hours
              </h3>
              <address className="not-italic">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: '#EAEAEC' }}
                >
                  Suite 100, 3436 Olympic Street, Springfield, OR 97478
                </p>
                <p className="text-sm mb-4" style={{ color: '#A1A1AA' }}>
                  <a
                    href={`tel:${BUSINESS.phonePlain}`}
                    className="transition-opacity hover:opacity-80"
                    style={{ color: '#C8243F' }}
                  >
                    {BUSINESS.phone}
                  </a>
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#A1A1AA' }}>
                  Mon / Wed / Thu / Fri: 8:00 AM – 5:00 PM&nbsp;&nbsp;·&nbsp;&nbsp;
                  Tuesday: 8:30 AM – 5:00 PM&nbsp;&nbsp;·&nbsp;&nbsp;
                  Saturday: 10:00 AM – 5:00 PM&nbsp;&nbsp;·&nbsp;&nbsp;
                  Sunday: Closed
                </p>
              </address>
            </div>
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────── */}
        <div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-hidden="true"
        >
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />
        </div>

        {/* ── SECTION 5: Nearby Locations ────────────────────────────────── */}
        {nearbyLocationData.length > 0 && (
          <section
            className="py-16 md:py-24"
            aria-label="Nearby service areas"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className="font-display font-bold text-2xl md:text-3xl leading-tight mb-2"
                style={{ color: '#EAEAEC' }}
              >
                Also Serving These Nearby Areas
              </h2>
              <p
                className="text-sm mb-8"
                style={{ color: '#A1A1AA' }}
              >
                Blue Rose Auto Detailing Services proudly serves all of Lane County and beyond.
              </p>

              <div className="flex flex-wrap gap-3">
                {nearbyLocationData.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locations/${nearby.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_14px_2px_rgba(200,36,63,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0B]"
                    style={{
                      background: '#131315',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#EAEAEC',
                    }}
                  >
                    <MapPinIcon />
                    {nearby.city}, OR
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
                  style={{ color: '#A1A1AA' }}
                >
                  View all service areas
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── SECTION 6: Call to Action ─────────────────────────────────── */}
        <CallToAction
          headline={`Auto Detailing for ${location.city} Residents`}
          subtext="Book a detail at our Springfield shop — fair pricing, owner-operated since 1994."
        />
      </main>
    </>
  )
}
