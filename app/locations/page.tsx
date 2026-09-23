import type { Metadata } from 'next'
import Link from 'next/link'
import { LOCATIONS } from '@/lib/data/locations'
import { SERVICES } from '@/lib/data/services'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Auto Detailing Service Areas in Lane County, OR | Blue Rose',
  description: 'Blue Rose Auto Detailing Services in Springfield, OR serves Eugene, Springfield, Coburg, Lowell, Veneta, Creswell, Harrisburg, Santa Clara, Cottage Grove & Junction City. Call (541) 337-9893.',
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <main className="bg-surface min-h-screen">
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Breadcrumb items={[{ name: 'Locations', href: '/locations' }]} />
        <h1 className="font-display font-extrabold text-4xl md:text-6xl text-ink mt-6 mb-4">
          Serving <span className="text-gradient-accent">Eugene, Springfield</span> & Surrounding Areas
        </h1>
        <p className="text-ink-muted text-lg max-w-2xl mb-4">
          Our shop is located at 3436 Olympic Street in Springfield, OR — conveniently accessible from communities throughout Lane County.
        </p>
        <p className="text-ink-muted text-sm mb-12">
          <strong className="text-ink">Address:</strong> Suite 100, 3436 Olympic Street, Springfield, OR 97478 &nbsp;·&nbsp;
          <a href="tel:5413379893" className="text-accent hover:text-accent-hover font-medium">(541) 337-9893</a>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group bg-card border border-edge rounded-xl p-6 hover:bg-card-hover hover:border-edge-accent transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-display font-bold text-xl text-ink group-hover:text-accent transition-colors">
                  {location.city}
                </h2>
                {location.distance !== '0 miles' && (
                  <span className="text-xs text-ink-subtle bg-elevated px-2 py-0.5 rounded-full">
                    ~{location.distance}
                  </span>
                )}
                {location.distance === '0 miles' && (
                  <span className="text-xs text-accent bg-accent-subtle px-2 py-0.5 rounded-full">
                    Our Shop
                  </span>
                )}
              </div>
              <p className="text-ink-subtle text-sm mb-1">{location.county}</p>
              <span className="text-accent text-sm font-semibold group-hover:underline">
                View services →
              </span>
            </Link>
          ))}
        </div>
      </section>
      {/* Services strip */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10 border-t border-edge">
        <p className="text-xs font-semibold uppercase tracking-widest text-chrome mb-4">Services Available at Every Location</p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-edge text-sm text-ink-muted hover:border-edge-accent hover:text-ink transition-colors"
            >
              {svc.shortName}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <Link href="/gallery" className="text-sm text-accent hover:underline underline-offset-2 font-medium">View Our Work →</Link>
          <Link href="/reviews" className="text-sm text-accent hover:underline underline-offset-2 font-medium">Read Reviews →</Link>
          <Link href="/book"    className="text-sm text-accent hover:underline underline-offset-2 font-medium">Book Now →</Link>
        </div>
      </section>

      <CallToAction headline="Auto Detailing Near You" subtext="Bring your vehicle to our Springfield shop — serving all of Lane County and beyond." />
    </main>
  )
}