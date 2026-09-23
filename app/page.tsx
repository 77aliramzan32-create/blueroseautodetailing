import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import ServiceGrid from '@/components/sections/ServiceGrid'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CallToAction from '@/components/sections/CallToAction'
import { BUSINESS } from '@/lib/data/business'
import { FEATURED_GALLERY } from '@/lib/data/gallery'

// ── Page Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Blue Rose Auto Detailing Services | Springfield & Eugene, OR',
  description:
    'Professional auto detailing, paint correction, ceramic coating, PPF & window tinting in Springfield, OR. Owner-operated since 1994. 5.0★ Google rating. Call (541) 337-9893.',
  keywords: [
    'auto detailing Springfield OR',
    'ceramic coating Eugene OR',
    'paint correction Springfield Oregon',
    'paint protection film Eugene',
    'window tinting Springfield',
    'vinyl wraps Springfield OR',
    'RV detailing Oregon',
    'boat detailing Eugene Springfield',
    'Blue Rose Auto Detailing Services',
    'detailing shop Springfield Oregon',
  ],
  openGraph: {
    title: 'Blue Rose Auto Detailing Services | Springfield & Eugene, OR',
    description:
      'Professional auto detailing, paint correction, ceramic coating, PPF & window tinting in Springfield, OR. Owner-operated since 1994. 5.0★ Google rating.',
    url: 'https://blueroseauto.com',
    images: [
      {
        url: '/images/og-home.jpg',
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
      'Professional auto detailing, paint correction, ceramic coating & more in Springfield, OR. Owner-operated since 1994.',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://blueroseauto.com',
  },
}

// ── Trust Badge data ─────────────────────────────────────────────────────────

const TRUST_BADGES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 1.5L12.472 7.22L18.5 7.91L14.25 11.9L15.528 18.5L10 15.27L4.472 18.5L5.75 11.9L1.5 7.91L7.528 7.22L10 1.5Z"
          fill="var(--color-accent)"
        />
      </svg>
    ),
    label: '5.0 Google Rating',
    sublabel: '5 verified reviews',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
          fill="currentColor"
          fillOpacity="0.8"
        />
      </svg>
    ),
    label: 'Springfield, OR',
    sublabel: 'Suite 100, 3436 Olympic St',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
          fill="currentColor"
          fillOpacity="0.8"
        />
      </svg>
    ),
    label: 'Since 1994',
    sublabel: 'Owner-operated 30+ years',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V18h-2v-1.07A8.001 8.001 0 014.07 13H6v-2H4.07A8.001 8.001 0 0111 4.07V6h2V4.07A8.001 8.001 0 0119.93 11H18v2h1.93A8.001 8.001 0 0113 16.93zM13 12a1 1 0 11-2 0 1 1 0 012 0z"
          fill="currentColor"
          fillOpacity="0.8"
        />
      </svg>
    ),
    label: 'Transparent Pricing',
    sublabel: 'Quoted before work starts',
  },
]

// ── Why Blue Rose pillars ────────────────────────────────────────────────────

const WHY_PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" />
        <path
          d="M10 16l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    headline: '30+ Years of Experience',
    body: 'Founded in 1994 and still owner-operated, Blue Rose has refined every service through decades of hands-on work. Tristan personally inspects every vehicle before it leaves the shop.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 3L5 8v9c0 6.63 4.62 12.84 11 14.4C23.38 29.84 27 23.63 27 17V8L16 3z"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11 16.5l3.5 3.5 7-7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    headline: 'Owner-Inspected Quality',
    body: 'Every detail, coating, and tint job receives a final inspection from Tristan under LED lighting before release. No shortcuts, no exceptions — your vehicle meets our standard before it leaves.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="8" width="22" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 14h12M10 18h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="10" r="4" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22.5 10l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: 'Fair, Transparent Pricing',
    body: "Every job is quoted before work begins. We explain exactly what we're doing and why. You'll never see a surprise charge — what we quote is what you pay.",
  },
]

// ── Home Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        headline="Springfield's Premier Auto Detailing Shop"
        subheadline="Professional paint correction, ceramic coating, PPF, and full detailing — with honest pricing and owner-operated quality control since 1994."
        ctaPrimary={{ label: 'Book a Detail', href: '/contact' }}
        ctaSecondary={{ label: 'View Services', href: '/services/auto-detailing' }}
        badge="Owner-Operated Since 1994"
        imageAlt="Porsche 911 Turbo exterior detail — Blue Rose Auto Detailing Springfield OR"
        imageSrc="/images/gallery/auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp"
      />

      {/* 2. Trust Bar */}
      <section aria-label="Trust signals" className="bg-card border-y border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <ul
            className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-4 gap-3 md:gap-4 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0"
            role="list"
          >
            {TRUST_BADGES.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-3 min-w-[200px] md:min-w-0 bg-surface border border-edge rounded-xl px-4 py-3 shrink-0 md:shrink"
              >
                <span className="text-accent shrink-0">{badge.icon}</span>
                <div>
                  <p className="font-display font-bold text-sm text-ink leading-tight">
                    {badge.label}
                  </p>
                  <p className="font-body text-xs text-ink-muted leading-tight mt-0.5">
                    {badge.sublabel}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Service Grid */}
      <ServiceGrid
        title="Our Services"
        subtitle="From a complete interior &amp; exterior detail to multi-stage paint correction, ceramic coating, and PPF — professional-grade results for every need and budget."
      />

      {/* 4. Why Blue Rose */}
      <section
        aria-label="Why choose Blue Rose Auto Detailing"
        className="relative w-full bg-surface-alt"
      >
        {/* Top divider */}
        <div className="divider-chrome mx-8 md:mx-16 lg:mx-32" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Why Blue Rose
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-ink mb-4">
              What Sets Us Apart
            </h2>
            <p className="font-body text-lg text-ink-muted max-w-2xl mx-auto">
              We&apos;re not a franchise, not a chain, and not a mobile setup. We&apos;re a
              real shop with real accountability — and we&apos;ve been here since 1994.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {WHY_PILLARS.map((pillar) => (
              <div
                key={pillar.headline}
                className="glass-card rounded-xl p-6 md:p-8 flex flex-col gap-4"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent-wash border border-accent-wash-md flex items-center justify-center text-accent shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-ink mb-2">
                    {pillar.headline}
                  </h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <TestimonialSection />

      {/* 6. Our Work — Gallery Preview */}
      <section aria-label="Our work — project photo gallery" className="w-full bg-surface py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-2">
                Our Work
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
                Real Results, Real Vehicles
              </h2>
              <p className="text-ink-muted mt-2 text-sm md:text-base max-w-xl">
                Porsche 911, Audi RS7, Country Coach RV, Toyota, Dodge RAM, Jeep Wrangler — every vehicle
                gets the same obsessive attention to detail.
              </p>
            </div>
            <Link
              href="/gallery"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-2"
              aria-label="View full project gallery"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
            {FEATURED_GALLERY.map((item, i) => (
              <Link
                key={item.src}
                href="/gallery"
                className="group relative overflow-hidden rounded-xl bg-card border border-edge aspect-[3/4] block"
                aria-label={item.title}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 4 ? 'eager' : 'lazy'}
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium leading-snug">{item.title}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-edge bg-card text-ink-muted hover:border-edge-accent hover:text-ink font-semibold text-sm transition-colors"
            >
              See All {19} Photos →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Service Area */}
      <section
        aria-label="Service area — cities we serve"
        className="relative w-full bg-card border-y border-edge"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header */}
            <p className="font-body text-sm font-semibold text-accent tracking-widest uppercase mb-3">
              Service Area
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-4">
              Serving Eugene, Springfield &amp; Surrounding Areas
            </h2>
            <p className="font-body text-base text-ink-muted mb-10 leading-relaxed">
              Located at{' '}
              <a
                href={`https://maps.google.com/?q=${BUSINESS.address.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-2"
                aria-label="Get directions to Blue Rose Auto Detailing on Google Maps"
              >
                {BUSINESS.address.full}
              </a>
              , we primarily serve the greater Eugene-Springfield metro and the following Lane County
              communities:
            </p>

            {/* City chips */}
            <ul
              className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
              role="list"
              aria-label="Cities served"
            >
              {BUSINESS.serviceArea.map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, '-') + '-or'
                return (
                  <li key={city}>
                    <Link
                      href={`/locations/${slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface border border-edge hover:border-accent/40 hover:bg-[rgba(200,36,63,0.06)] text-ink-muted hover:text-ink font-body text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                      aria-label={`Auto detailing services in ${city}, Oregon`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                        className="text-accent shrink-0"
                      >
                        <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                      </svg>
                      {city}, OR
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Map CTA */}
            <a
              href={`https://maps.google.com/?q=${BUSINESS.address.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm text-ink-muted hover:text-ink border border-edge hover:border-edge-bright rounded-lg px-5 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              aria-label="Get directions to Blue Rose Auto Detailing on Google Maps (opens in new tab)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="currentColor"
                />
              </svg>
              Get Directions on Google Maps
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 10L10 2M5 2h5v5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <CallToAction
        headline="Ready for a Professional Detail?"
        subtext="Call us or request a free quote online. Every job is priced transparently before work begins — no surprise charges, ever."
        variant="accent-bg"
      />
    </>
  )
}
