import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SERVICES, getService } from '@/lib/data/services'
import { LOCATIONS } from '@/lib/data/locations'
import { getFAQsByIds } from '@/lib/data/faqs'
import { serviceSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema/jsonld'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CallToAction from '@/components/sections/CallToAction'

const RELATED: Record<string, string[]> = {
  'auto-detailing':        ['paint-correction', 'ceramic-coating', 'rv-detailing'],
  'paint-correction':      ['ceramic-coating', 'paint-protection-film', 'auto-detailing'],
  'ceramic-coating':       ['paint-correction', 'paint-protection-film', 'auto-detailing'],
  'paint-protection-film': ['ceramic-coating', 'paint-correction', 'window-tinting'],
  'window-tinting':        ['paint-protection-film', 'vinyl-wraps', 'auto-detailing'],
  'vinyl-wraps':           ['window-tinting', 'paint-protection-film', 'ceramic-coating'],
  'rv-detailing':          ['auto-detailing', 'ceramic-coating', 'boat-detailing'],
  'boat-detailing':        ['rv-detailing', 'auto-detailing', 'ceramic-coating'],
}

// ── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

// ── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${slug}`,
      type: 'website',
    },
  }
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="10" cy="10" r="10" fill="rgba(200,36,63,0.12)" />
      <path
        d="M6 10.5l3 3 5-6"
        stroke="#C8243F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

// ── Page component ────────────────────────────────────────────────────────────

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const faqs = service.faqIds.length > 0 ? getFAQsByIds(service.faqIds) : []

  const svcSchema = serviceSchema(slug)
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${slug}` },
  ])
  const faqSchema = faqs.length > 0 ? faqPageSchema(service.faqIds) : null

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `https://www.blueroseautodetailing.com/services/${slug}#howto`,
    name: `How We Perform ${service.name} — Blue Rose Auto Detailing Springfield OR`,
    description: service.summary,
    totalTime: 'PT3H',
    step: service.process.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
    supply: [
      { '@type': 'HowToSupply', name: 'pH-neutral car shampoo' },
      { '@type': 'HowToSupply', name: 'Microfiber towels' },
      { '@type': 'HowToSupply', name: 'Clay bar' },
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Dual-action polisher' },
      { '@type': 'HowToTool', name: 'Paint thickness gauge' },
      { '@type': 'HowToTool', name: 'Steam cleaner' },
    ],
    performer: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.blueroseautodetailing.com/#business',
      name: 'Blue Rose Auto Detailing Services',
    },
  }

  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────────────── */}
      {svcSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* ══════════════════════════════════════════════════════════════════
          Section 1 — Page Hero / Header
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden bg-surface min-h-[55vh] md:min-h-[52vh]"
        aria-label={`${service.name} service overview`}
      >
        {/* Hero image */}
        {service.heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={service.heroImage}
              alt={service.heroAlt}
              fill
              priority
              className="object-cover object-[center_30%] opacity-30 md:opacity-35"
              sizes="100vw"
            />
            {/* Mobile: even vignette overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 md:hidden"
              style={{
                background:
                  'linear-gradient(160deg, rgba(10,10,11,0.78) 0%, rgba(10,10,11,0.55) 50%, rgba(10,10,11,0.80) 100%)',
              }}
            />
            {/* Desktop: top-to-bottom fade */}
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden md:block"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(10,10,11,0.60) 0%, rgba(10,10,11,0.75) 55%, rgba(10,10,11,0.98) 100%)',
              }}
            />
          </div>
        )}

        {/* Radial accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,36,63,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-20 md:pb-24">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Breadcrumb
              items={[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: service.name, href: `/services/${slug}` },
              ]}
            />
          </div>

          {/* Badge */}
          <div className="mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-body font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: '#C8243F',
                borderColor: 'rgba(200,36,63,0.35)',
                background: 'rgba(200,36,63,0.08)',
              }}
            >
              Auto Detailing Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-tight mb-4">
            {service.name}
          </h1>

          {/* Tagline */}
          <p className="font-body text-base sm:text-lg md:text-xl text-ink-muted mb-6 md:mb-8 max-w-2xl leading-relaxed">
            {service.tagline}
          </p>

          {/* AEO direct-answer summary box */}
          <div
            className="mb-10 max-w-2xl rounded-xl p-5 md:p-6"
            style={{
              background: 'rgba(19,19,21,0.85)',
              borderLeft: '3px solid #C8243F',
              border: '1px solid rgba(255,255,255,0.07)',
              borderLeftWidth: '3px',
              borderLeftColor: '#C8243F',
            }}
          >
            <p className="font-body text-sm md:text-base text-ink-muted leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* CTA buttons — stacked on mobile, inline from sm */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:5413379893"
              className="inline-flex items-center justify-center gap-2 font-body font-bold text-base px-7 py-4 rounded-xl bg-accent text-white transition-all duration-200 hover:bg-[#a81d34] hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface w-full sm:w-auto"
              aria-label="Call Blue Rose Auto Detailing at (541) 337-9893"
            >
              <PhoneIcon />
              Call (541) 337-9893
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-body font-bold text-base px-7 py-4 rounded-xl bg-transparent text-accent border border-accent transition-all duration-200 hover:bg-accent-wash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface w-full sm:w-auto"
            >
              Get a Free Quote
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          Section 2 — What This Service Includes
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-surface py-16 md:py-24"
        aria-labelledby="service-includes-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <h2
            id="service-includes-heading"
            className="font-display text-3xl md:text-4xl font-extrabold text-ink mb-10 md:mb-14"
          >
            What {service.name} Includes
          </h2>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left — description */}
            <div>
              {service.description.split('\n').filter(Boolean).map((para, i) => (
                <p
                  key={i}
                  className="font-body text-base md:text-lg text-ink-muted leading-relaxed mb-5 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Right — benefits list */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                background: '#131315',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h3 className="font-display text-xl font-bold text-ink mb-6 tracking-wide uppercase text-sm">
                Key Benefits
              </h3>
              <ul className="space-y-4" aria-label={`${service.name} benefits`}>
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-body text-base text-ink-muted leading-snug">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          Section 3 — Our Process
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-24"
        style={{ background: '#0D0D0F' }}
        aria-labelledby="process-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="mb-10 md:mb-14">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              Step by Step
            </p>
            <h2
              id="process-heading"
              className="font-display text-3xl md:text-4xl font-extrabold text-ink"
            >
              How We Do It
            </h2>
          </div>

          {/* Process steps grid */}
          <div
            className={[
              'grid gap-5',
              service.process.length <= 3
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : service.process.length === 4
                  ? 'grid-cols-1 md:grid-cols-2'
                  : service.process.length === 5
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
            ].join(' ')}
          >
            {service.process.map((step, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 md:p-7 flex flex-col gap-4 group transition-all duration-200 hover:border-[rgba(200,36,63,0.25)]"
                style={{
                  background: '#131315',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Step number */}
                <span
                  className="font-display font-extrabold leading-none select-none"
                  style={{
                    fontSize: '3rem',
                    color: 'rgba(200,36,63,0.22)',
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Step title */}
                <h3 className="font-display text-lg md:text-xl font-bold text-ink leading-snug">
                  {step.title}
                </h3>

                {/* Divider */}
                <div
                  aria-hidden="true"
                  className="w-8 h-px"
                  style={{ background: 'rgba(200,36,63,0.4)' }}
                />

                {/* Step description */}
                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          Section 4 — FAQ (conditional)
      ══════════════════════════════════════════════════════════════════ */}
      {faqs.length > 0 && (
        <section
          className="bg-surface py-16 md:py-24"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="mb-10 md:mb-12">
              <p className="font-body text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="font-display text-3xl md:text-4xl font-extrabold text-ink"
              >
                Common Questions About {service.name}
              </h2>
            </div>

            {/* Accordion */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#131315',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="px-6 md:px-8">
                <FAQAccordion faqs={faqs} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          Section 5 — Related Services
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-surface py-16 md:py-20" aria-labelledby="related-services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Also Available
          </p>
          <h2 id="related-services-heading" className="font-display text-2xl md:text-3xl font-extrabold text-ink mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(RELATED[slug] ?? []).map((relSlug) => {
              const svc = SERVICES.find((s) => s.slug === relSlug)
              if (!svc) return null
              return (
                <Link
                  key={relSlug}
                  href={`/services/${relSlug}`}
                  className="group rounded-xl p-5 border border-edge hover:border-edge-accent transition-all duration-200"
                  style={{ background: '#131315' }}
                >
                  <h3 className="font-display font-bold text-base text-ink group-hover:text-accent transition-colors mb-1">
                    {svc.name}
                  </h3>
                  <p className="text-xs text-ink-subtle leading-relaxed mb-3 line-clamp-2">{svc.tagline}</p>
                  <span className="text-xs text-accent font-semibold">Learn more →</span>
                </Link>
              )
            })}
          </div>
          <div className="mt-6">
            <Link href="/services" className="text-sm text-accent hover:underline underline-offset-2 font-medium">
              View all 8 services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          Section 6 — Service Areas
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 md:py-20 border-t border-edge"
        style={{ background: '#0D0D0F' }}
        aria-labelledby="service-areas-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-accent mb-3">
            Where We Serve
          </p>
          <h2 id="service-areas-heading" className="font-display text-2xl md:text-3xl font-extrabold text-ink mb-3">
            {service.name} in Springfield, Eugene &amp; Lane County, OR
          </h2>
          <p className="text-ink-muted text-sm mb-8 max-w-2xl">
            Our shop is located at 3436 Olympic Street in Springfield, OR — accessible from communities across
            Lane County. Drop off your vehicle or call for details.
          </p>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-edge text-sm text-ink-muted hover:border-edge-accent hover:text-ink transition-colors"
              >
                <svg className="w-3 h-3 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {loc.city}, OR
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-subtle">
            Blue Rose Auto Detailing Services &mdash; Suite 100, 3436 Olympic Street, Springfield, OR 97478 &mdash;{' '}
            <a href="tel:5413379893" className="text-accent hover:underline">(541) 337-9893</a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          Section 7 — Call to Action
      ══════════════════════════════════════════════════════════════════ */}
      <CallToAction
        headline="Ready to Get Your Vehicle Detailed?"
        subtext="Fair pricing, honest work, owner-inspected quality since 1994."
      />
    </>
  )
}
