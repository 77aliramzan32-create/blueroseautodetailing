import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CallToAction from '@/components/sections/CallToAction'
import { FAQS, getFAQsByCategory } from '@/lib/data/faqs'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema/jsonld'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title:
    'Auto Detailing FAQ — Pricing, Ceramic Coating, PPF & More | Blue Rose Springfield OR',
  description:
    'Answers to common questions about auto detailing costs, ceramic coating, PPF, window tinting, and more. Blue Rose Auto Detailing Services, Springfield, OR — (541) 337-9893.',
}

const CATEGORIES = [
  { key: 'general' as const,   label: 'General Questions' },
  { key: 'pricing' as const,   label: 'Pricing' },
  { key: 'services' as const,  label: 'Services' },
  { key: 'ceramic' as const,   label: 'Ceramic Coating' },
  { key: 'ppf' as const,       label: 'Paint Protection Film' },
  { key: 'tinting' as const,   label: 'Window Tinting' },
  { key: 'vinyl' as const,     label: 'Vinyl Wraps' },
  { key: 'rv-boat' as const,   label: 'RV & Boat Detailing' },
]

export default function FAQPage() {
  const faqSchema = faqPageSchema()
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ',  url: '/faq' },
  ])

  return (
    <>
      {/* JSON-LD: FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* JSON-LD: Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }}
      />

      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section className="relative w-full bg-surface border-b border-edge pt-10 pb-14 md:pt-14 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,36,63,0.06) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'FAQ', href: '/faq' }]} />
          <h1 className="mt-6 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 font-body text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            Answers to common questions about auto detailing, pricing, ceramic coating, PPF, and
            more. Can&apos;t find what you need?{' '}
            <a
              href={`tel:${BUSINESS.phonePlain}`}
              className="text-accent hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              Call us at {BUSINESS.phone}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── FAQ Categories ────────────────────────────────────────────────── */}
      <section
        aria-label="Frequently asked questions by category"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {CATEGORIES.map(({ key, label }) => {
              const categoryFaqs = getFAQsByCategory(key)
              if (categoryFaqs.length === 0) return null
              return (
                <div key={key} id={`faq-${key}`}>
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">
                      {label}
                    </h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold font-body bg-[rgba(200,36,63,0.10)] text-accent border border-[rgba(200,36,63,0.20)] leading-none whitespace-nowrap">
                      {categoryFaqs.length} Q{categoryFaqs.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Accordion */}
                  <div className="glass-card rounded-xl px-4 md:px-6">
                    <FAQAccordion faqs={categoryFaqs} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA note */}
          <div className="mt-16 text-center glass-card rounded-xl px-6 py-10">
            <p className="font-body text-sm text-ink-muted mb-1">
              Have a question not listed here?
            </p>
            <p className="font-body text-base text-ink mb-4">
              Give us a call and we will be happy to answer it.
            </p>
            <a
              href={`tel:${BUSINESS.phonePlain}`}
              className="inline-flex items-center gap-2 font-display font-bold text-2xl md:text-3xl text-accent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
              aria-label={`Call Blue Rose Auto Detailing at ${BUSINESS.phone}`}
            >
              <svg
                width="22"
                height="22"
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
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <CallToAction
        headline="Ready to Book Your Detail?"
        subtext="Questions answered. Now let us put that expertise to work on your vehicle."
      />
    </>
  )
}
