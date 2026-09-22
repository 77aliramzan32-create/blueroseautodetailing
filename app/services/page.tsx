import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/data/services'
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
      <CallToAction headline="Ready to Get Started?" subtext="Call or text us at (541) 337-9893 — we quote every job before work begins." />
    </main>
  )
}