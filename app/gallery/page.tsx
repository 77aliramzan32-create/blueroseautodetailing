import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { GALLERY, type GalleryCategory } from '@/lib/data/gallery'

const BASE_URL = 'https://www.blueroseautodetailing.com'

export const metadata: Metadata = {
  title: 'Auto Detailing Gallery | Real Project Photos — Blue Rose Springfield OR',
  description:
    'Real auto detailing results from Blue Rose Auto Detailing — paint correction, ceramic coating, interior detail, RV detailing, vinyl wrap on Porsche 911, Audi RS7, Country Coach RV, Toyota, Jeep & more. Springfield & Eugene, OR.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Auto Detailing Gallery — Blue Rose Auto Detailing Springfield OR',
    description:
      'Real project photos: Porsche 911 Turbo, Audi RS7, Country Coach RV, Toyota, Dodge RAM, Jeep Wrangler — paint correction, interior detail, RV detailing & vinyl wrap in Springfield & Eugene, OR.',
    url: '/gallery',
    images: [{
      url: '/images/gallery/auto-detailing-porsche-911-turbo-blue-exterior-springfield-or.webp',
      width: 1200, height: 800,
      alt: 'Porsche 911 Turbo after full auto detail — Blue Rose Auto Detailing Springfield OR',
    }],
  },
  robots: { index: true, follow: true },
}

const imageGallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Blue Rose Auto Detailing — Project Gallery',
  description:
    'Real detailing results — paint correction, interior detail, RV detailing, vinyl wrap, and full exterior detail on Porsche, Audi, Toyota, Dodge RAM, Jeep, Country Coach RV and more in Springfield & Eugene, OR.',
  url: `${BASE_URL}/gallery`,
  author: {
    '@type': 'AutomotiveBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Blue Rose Auto Detailing Services',
  },
  image: GALLERY.map(item => ({
    '@type': 'ImageObject',
    contentUrl: `${BASE_URL}${item.src}`,
    name: item.title,
    description: item.alt,
    creditText: 'Blue Rose Auto Detailing Services, Springfield OR',
    acquireLicensePage: `${BASE_URL}/gallery`,
  })),
}

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  'exterior':         'Exterior Detail',
  'interior':         'Interior Detail',
  'process':          'The Process',
  'ceramic':          'Ceramic Coating',
  'paint-correction': 'Paint Correction',
}

const CATEGORY_LINKS: Record<GalleryCategory, string> = {
  'exterior':         '/services/auto-detailing',
  'interior':         '/services/auto-detailing',
  'process':          '/services/auto-detailing',
  'ceramic':          '/services/ceramic-coating',
  'paint-correction': '/services/paint-correction',
}

const CATEGORY_ORDER: GalleryCategory[] = [
  'exterior', 'paint-correction', 'ceramic', 'interior', 'process',
]

export default function GalleryPage() {
  const grouped = CATEGORY_ORDER.map(cat => ({
    cat,
    label: CATEGORY_LABELS[cat],
    link: CATEGORY_LINKS[cat],
    items: GALLERY.filter(g => g.category === cat),
  })).filter(g => g.items.length > 0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-surface border-b border-edge pt-10 pb-14 md:pt-14 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(200,36,63,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Gallery', href: '/gallery' }]} />
          <div className="mt-6">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Our Work
            </h1>
            <p className="mt-3 text-base md:text-lg text-ink-muted max-w-2xl">
              Real results on real vehicles — Maserati Levante, Land Rover Defender, BMW, Mercedes,
              Audi and more. Paint correction, ceramic coating, interior detail, and full exterior washes
              in Springfield &amp; Eugene, OR.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {grouped.map(g => (
                <a key={g.cat} href={`#${g.cat}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-edge bg-card text-sm text-ink-muted hover:border-edge-accent hover:text-ink transition-colors">
                  {g.label}
                  <span className="text-ink-subtle text-xs">({g.items.length})</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery by category ────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {grouped.map(({ cat, label, link, items }) => (
          <section key={cat} id={cat} aria-labelledby={`heading-${cat}`}>
            <div className="flex items-center gap-3 mb-6">
              <h2 id={`heading-${cat}`} className="font-display font-bold text-2xl text-ink">
                {label}
              </h2>
              <div className="flex-1 h-px bg-edge" />
              <Link href={link} className="text-xs text-accent hover:underline underline-offset-2 shrink-0">
                View Service →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {items.map((item, i) => (
                <figure
                  key={item.src}
                  className="group relative overflow-hidden rounded-xl bg-card border border-edge aspect-[3/4]"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i < 4 ? 'eager' : 'lazy'}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <figcaption className="text-white text-xs font-medium leading-snug">
                      {item.title}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="bg-card border-t border-edge py-14">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-3">
            Ready for results like these?
          </h2>
          <p className="text-ink-muted mb-6">
            Springfield &amp; Eugene&apos;s most trusted detailing shop since 1994. Call or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-bold hover:bg-accent-hover transition-colors">
              Book Now →
            </Link>
            <a href="tel:5413379893"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-edge text-ink-muted hover:border-edge-bright hover:text-ink transition-colors font-semibold">
              (541) 337-9893
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
