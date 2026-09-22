import type { Metadata } from 'next'
import Breadcrumb from '@/components/layout/Breadcrumb'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Before & After Gallery — Auto Detailing, Ceramic Coating, PPF | Blue Rose Springfield OR',
  description:
    'Browse before and after photos from Blue Rose Auto Detailing Services in Springfield, OR. Paint correction, ceramic coating, PPF, interior restoration, and more.',
}

/*
 * IMAGE PLACEHOLDERS: Replace each pair with real before/after photos.
 * Filenames should follow pattern:
 *   before-[service]-[vehicle]-[city].jpg
 *   after-[service]-[vehicle]-[city].jpg
 * Example: before-paint-correction-bmw-m3-springfield.jpg
 */

const GALLERY_PAIRS = [
  {
    id: 'paint-correction-bmw',
    service: 'Paint Correction',
    vehicle: '2019 BMW M3',
    location: 'Springfield, OR',
    beforeAlt: 'Before paint correction on 2019 BMW M3 — swirl marks and light scratches visible',
    afterAlt: 'After paint correction on 2019 BMW M3 — mirror-like finish, swirls eliminated',
    beforeImage: null, // replace with: '/images/gallery/before-paint-correction-bmw-m3-springfield.jpg'
    afterImage: null,  // replace with: '/images/gallery/after-paint-correction-bmw-m3-springfield.jpg'
  },
  {
    id: 'ceramic-corvette-interior',
    service: 'Interior Restoration',
    vehicle: '2005 Corvette',
    location: 'Springfield, OR',
    beforeAlt: 'Before interior restoration on 2005 Corvette — aged leather and worn carpet',
    afterAlt: 'After interior restoration on 2005 Corvette — leather restored, interior like new',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 'ceramic-coating-suv',
    service: 'Ceramic Coating',
    vehicle: '2022 Ford Explorer',
    location: 'Eugene, OR',
    beforeAlt: 'Before ceramic coating on 2022 Ford Explorer — paint oxidation and water spots',
    afterAlt: 'After ceramic coating on 2022 Ford Explorer — deep gloss and hydrophobic finish',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 'ppf-front-end',
    service: 'Paint Protection Film',
    vehicle: '2021 Subaru WRX',
    location: 'Springfield, OR',
    beforeAlt: 'Before PPF on 2021 Subaru WRX — paint vulnerable to rock chips',
    afterAlt: 'After PPF on 2021 Subaru WRX — full front-end coverage, nearly invisible film',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 'ceramic-ppf-combo',
    service: 'Ceramic + PPF Combo',
    vehicle: '2020 Toyota Tacoma',
    location: 'Springfield, OR',
    beforeAlt: 'Before ceramic and PPF combo on 2020 Toyota Tacoma',
    afterAlt: 'After ceramic and PPF combo on 2020 Toyota Tacoma — maximum paint protection',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 'interior-detail',
    service: 'Full Interior Detail',
    vehicle: '2018 Honda Pilot',
    location: 'Eugene, OR',
    beforeAlt: 'Before full interior detail on 2018 Honda Pilot — heavy soiling and stains',
    afterAlt: 'After full interior detail on 2018 Honda Pilot — completely clean interior',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 'rv-exterior-polish',
    service: 'RV Exterior Polish',
    vehicle: 'Class A Motorhome',
    location: 'Springfield, OR',
    beforeAlt: 'Before RV exterior polish — fiberglass oxidation and chalky finish',
    afterAlt: 'After RV exterior polish — oxidation removed, fiberglass restored',
    beforeImage: null,
    afterImage: null,
  },
  {
    id: 'window-tint-sedan',
    service: 'Window Tinting',
    vehicle: '2021 Honda Accord',
    location: 'Springfield, OR',
    beforeAlt: 'Before window tinting on 2021 Honda Accord — no tint',
    afterAlt: 'After window tinting on 2021 Honda Accord — clean, professional ceramic tint',
    beforeImage: null,
    afterImage: null,
  },
]

function PlaceholderHalf({
  label,
  color,
}: {
  label: 'BEFORE' | 'AFTER'
  color: string
}) {
  return (
    <div
      className={[
        'relative flex-1 min-h-[140px] flex items-center justify-center',
        color,
      ].join(' ')}
    >
      <span
        className={[
          'font-display font-extrabold text-sm tracking-widest px-2 py-1 rounded',
          label === 'BEFORE'
            ? 'text-ink-muted bg-[rgba(0,0,0,0.5)]'
            : 'text-white bg-[rgba(200,36,63,0.65)]',
        ].join(' ')}
        aria-hidden="true"
      >
        {label}
      </span>
    </div>
  )
}

export default function GalleryPage() {
  return (
    <>
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
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Gallery', href: '/gallery' }]} />
          <h1 className="mt-6 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Before &amp; After Gallery
          </h1>
          <p className="mt-4 font-body text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            A look at the work coming out of our Springfield shop — paint correction, ceramic
            coating, PPF, interior restoration, RV detailing, window tinting, and more. Every
            vehicle in the gallery was inspected and released by Tristan personally.
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ──────────────────────────────────────────────────── */}
      <section
        aria-label="Before and after photo gallery"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {GALLERY_PAIRS.map((pair) => (
              <article
                key={pair.id}
                className="glass-card rounded-xl overflow-hidden flex flex-col"
                aria-label={`${pair.service} — ${pair.vehicle}`}
              >
                {/* Before / After image area */}
                <div className="flex h-44 border-b border-edge overflow-hidden">
                  {pair.beforeImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={pair.beforeImage}
                      alt={pair.beforeAlt}
                      className="flex-1 object-cover"
                    />
                  ) : (
                    <PlaceholderHalf label="BEFORE" color="bg-[rgba(255,255,255,0.03)]" />
                  )}

                  {/* Vertical divider */}
                  <div className="w-px bg-edge shrink-0" aria-hidden="true" />

                  {pair.afterImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={pair.afterImage}
                      alt={pair.afterAlt}
                      className="flex-1 object-cover"
                    />
                  ) : (
                    <PlaceholderHalf label="AFTER" color="bg-[rgba(200,36,63,0.04)]" />
                  )}
                </div>

                {/* Caption */}
                <div className="p-4 flex flex-col gap-1">
                  <p className="font-body text-xs font-semibold text-accent tracking-wide uppercase">
                    {pair.service}
                  </p>
                  <p className="font-display font-bold text-base text-ink leading-tight">
                    {pair.vehicle}
                  </p>
                  <p className="font-body text-xs text-ink-muted">{pair.location}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Placeholder reminder for future images */}
          <p className="mt-8 text-center font-body text-xs text-ink-muted">
            Photos coming soon — check back or{' '}
            <a
              href={`https://www.instagram.com/blueroseauto`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-2"
              aria-label="Follow us on Instagram for latest work photos"
            >
              follow us on Instagram
            </a>{' '}
            for the latest work.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CallToAction
        headline="Like What You See?"
        subtext="Get a free quote for your vehicle. Every job is priced honestly before we begin."
        variant="accent-bg"
      />
    </>
  )
}
