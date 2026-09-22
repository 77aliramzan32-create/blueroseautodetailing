import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'
import StarRating from '@/components/ui/StarRating'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Customer Reviews — 5.0 ★ Google Rating | Blue Rose Auto Detailing Springfield OR',
  description:
    'Read verified customer reviews for Blue Rose Auto Detailing Services in Springfield, OR. 5.0-star Google rating. See what customers say about our detailing, ceramic coating, and PPF work.',
}

const REVIEWS = [
  {
    initials: 'JM',
    reviewer: 'J.M.',
    theme: 'Transparent Pricing',
    text: 'Pricing was straightforward and fair — I knew exactly what I was paying for before any work started. No surprises, no add-ons I didn\'t ask for. That kind of transparency is rare and genuinely appreciated.',
    rating: 5,
  },
  {
    initials: 'SK',
    reviewer: 'S.K.',
    theme: 'Classic Vehicle Interior Restoration',
    text: 'Brought in my 2005 Corvette with aging leather and worn carpets that had seen better days. The transformation was incredible — the interior looks and feels completely restored. I didn\'t think it could come back this well.',
    rating: 5,
  },
  {
    initials: 'RT',
    reviewer: 'R.T.',
    theme: 'Road Trip Prep Detail',
    text: 'Had the car detailed before a long road trip and it looked brand new for the entire drive. Tristan was professional, thorough, and clearly takes real pride in the work. Will absolutely be back.',
    rating: 5,
  },
  {
    initials: 'AL',
    reviewer: 'A.L.',
    theme: 'Ceramic Coating + PPF Combo',
    text: 'Got the ceramic coating and PPF combo treatment. The combination of physical paint protection and the ceramic finish is outstanding — best I\'ve seen on any vehicle. The two together make a real difference.',
    rating: 5,
  },
  {
    initials: 'MG',
    reviewer: 'M.G.',
    theme: 'Friendly Team, Great Experience',
    text: 'Kaylee and George at the front desk were incredibly helpful and friendly from the moment I called to book. The whole experience from scheduling to pickup was easy and professional. Great team all around.',
    rating: 5,
  },
]

function StarFilled() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M10 1.5L12.472 7.22L18.5 7.91L14.25 11.9L15.528 18.5L10 15.27L4.472 18.5L5.75 11.9L1.5 7.91L7.528 7.22L10 1.5Z"
        fill="var(--color-accent)"
      />
    </svg>
  )
}

function GoogleLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

// JSON-LD: AggregateRating + individual Reviews
const reviewsSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: BUSINESS.name,
  url: 'https://blueroseauto.com',
  telephone: BUSINESS.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 5,
    bestRating: 5,
  },
  review: REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.reviewer },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.text,
    name: r.theme,
  })),
}

export default function ReviewsPage() {
  return (
    <>
      {/* JSON-LD: Reviews schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
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
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Reviews', href: '/reviews' }]} />
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Customer Reviews
            </h1>
            <Badge variant="accent" className="self-start mt-1">
              5.0 ★ Google Rating
            </Badge>
          </div>
          <p className="mt-4 font-body text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
            Every review is read personally by Tristan. Here is what our customers have to say.
          </p>
        </div>
      </section>

      {/* ── Overall Rating Display ────────────────────────────────────────── */}
      <section
        aria-labelledby="overall-rating-heading"
        className="w-full bg-card border-b border-edge py-12 md:py-16"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* Big number */}
            <div className="text-center sm:text-left">
              <p
                id="overall-rating-heading"
                className="font-display font-extrabold text-7xl md:text-8xl text-gradient-accent leading-none"
                aria-label="5.0 stars out of 5"
              >
                5.0
              </p>
              <div className="inline-flex gap-0.5 mt-2" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => <StarFilled key={i} />)}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-20 bg-edge" aria-hidden="true" />

            {/* Details */}
            <div>
              <p className="font-body text-base text-ink font-semibold">
                Based on {BUSINESS.reviewCount} Google Reviews
              </p>
              <p className="font-body text-sm text-ink-muted mt-1 mb-4">
                100% 5-star ratings — owner-operated accountability since 1994.
              </p>
              <a
                href="https://g.page/r/BlueRoseAutoSpringfield/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-ink-muted hover:text-ink border border-edge hover:border-accent/40 rounded-lg px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                aria-label="View our Google Business Profile (opens in new tab)"
              >
                <GoogleLogo />
                View on Google
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Review Cards ──────────────────────────────────────────────────── */}
      <section
        aria-label="Individual customer reviews"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            role="list"
          >
            {REVIEWS.map((review) => (
              <li
                key={review.reviewer}
                className="glass-card rounded-xl p-6 flex flex-col gap-4"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Stars */}
                <div className="inline-flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => <StarFilled key={i} />)}
                  <meta itemProp="reviewRating" content="5" />
                </div>

                {/* Theme badge */}
                <Badge variant="ghost" className="self-start">
                  {review.theme}
                </Badge>

                {/* Review text */}
                <blockquote
                  className="font-body text-sm text-ink-muted leading-relaxed flex-1"
                  itemProp="reviewBody"
                >
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Reviewer */}
                <footer className="flex items-center gap-3 pt-3 border-t border-edge">
                  <div
                    className="w-9 h-9 rounded-full bg-[rgba(200,36,63,0.15)] border border-edge-accent flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="font-display font-bold text-xs text-accent leading-none">
                      {review.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body font-semibold text-ink text-sm truncate"
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Person"
                    >
                      <span itemProp="name">{review.reviewer}</span>
                    </p>
                    <p className="font-body text-ink-muted text-xs truncate">{review.theme}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-edge text-ink-muted text-xs font-body shrink-0">
                    <GoogleLogo />
                    Google
                  </span>
                </footer>
              </li>
            ))}
          </ul>

          {/* ── Owner Response Note ──────────────────────────────────────── */}
          <div className="mt-10 glass-card rounded-xl p-6 flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-full bg-[rgba(200,36,63,0.12)] border border-edge-accent flex items-center justify-center shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <span className="font-display font-bold text-sm text-accent leading-none">T</span>
            </div>
            <div>
              <p className="font-body font-semibold text-ink text-sm mb-1">
                A note from Tristan
              </p>
              <p className="font-body text-sm text-ink-muted leading-relaxed">
                Tristan personally reads and responds to every Google review. We believe in
                accountability and genuine connection with every customer — your experience matters
                to us whether it was exceptional or could have been better.
              </p>
            </div>
          </div>

          {/* ── CTAs ────────────────────────────────────────────────────── */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Add Google review link */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-bold text-base px-7 py-3.5 rounded-xl border border-edge hover:border-accent/50 text-ink-muted hover:text-ink transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              aria-label="Leave us a Google review (opens in new tab)"
            >
              <GoogleLogo />
              Leave Us a Google Review
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-body font-bold text-base px-7 py-3.5 rounded-xl bg-accent text-white hover:bg-[#a81d34] hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              Book a Detail
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
