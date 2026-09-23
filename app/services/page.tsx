import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/data/services'
import { LOCATIONS } from '@/lib/data/locations'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Auto Detailing Services in Springfield & Eugene, OR | Blue Rose',
  description: 'Professional auto detailing, paint correction, ceramic coating, PPF, window tinting, vinyl wraps, RV detailing & boat detailing in Springfield, OR. Blue Rose Auto Detailing — (541) 337-9893.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main className="bg-surface min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb items={[{ name: 'Services', href: '/services' }]} />
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink mt-6 mb-4">
          Our <span className="text-gradient-accent">Auto Detailing</span> Services
        </h1>
        <p className="text-ink-muted text-lg max-w-2xl mb-12">
          Professional detailing services for cars, trucks, RVs, and boats — serving Springfield, Eugene, and surrounding Lane County communities since 1994.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-card border border-edge rounded-xl p-6 hover:bg-card-hover hover:border-edge-accent transition-all duration-200"
            >
              <h2 className="font-display font-bold text-xl text-ink group-hover:text-accent transition-colors mb-2">
                {service.name}
              </h2>
              <p className="text-ink-subtle text-sm leading-relaxed mb-4 line-clamp-3">
                {service.tagline}
              </p>
              <span className="text-accent text-sm font-semibold group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
      {/* Service areas strip */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-edge">
        <p className="text-xs font-semibold uppercase tracking-widest text-chrome mb-4">Serving All of Lane County</p>
        <div className="flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-edge text-sm text-ink-muted hover:border-edge-accent hover:text-ink transition-colors"
            >
              <svg className="w-3 h-3 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {loc.city}
            </Link>
          ))}
        </div>
      </section>

      <CallToAction headline="Ready to Get Started?" subtext="Call or text us at (541) 337-9893 — we quote every job before work begins." />
    </main>
  )
}