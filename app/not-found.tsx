import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you were looking for could not be found. Return to Blue Rose Auto Detailing Services.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        {/* Giant 404 */}
        <div className="relative select-none">
          <span
            className="font-display font-black text-[clamp(6rem,20vw,10rem)] leading-none tracking-tight text-accent"
            aria-hidden="true"
          >
            404
          </span>
          {/* Subtle glow under the number */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 blur-3xl opacity-20 bg-accent"
            aria-hidden="true"
          />
        </div>

        {/* Headline & message */}
        <div className="space-y-3">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-ink uppercase tracking-wide">
            Page Not Found
          </h1>
          <p className="text-ink-muted text-base md:text-lg leading-relaxed max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s
            get you back on the road.
          </p>
        </div>

        {/* Divider */}
        <div className="divider-chrome mx-auto max-w-xs" aria-hidden="true" />

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-display font-semibold uppercase tracking-wider text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-edge hover:border-edge-bright text-ink-muted hover:text-ink font-display font-semibold uppercase tracking-wider text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick nav */}
        <div className="space-y-2">
          <p className="text-xs text-ink-subtle uppercase tracking-widest font-display">
            Or jump to
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            {[
              { href: '/services/auto-detailing', label: 'Auto Detailing' },
              { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
              { href: '/services/paint-correction', label: 'Paint Correction' },
              { href: '/services/window-tinting', label: 'Window Tinting' },
              { href: '/about', label: 'About Us' },
              { href: '/faq', label: 'FAQ' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-ink-muted hover:text-accent transition-colors underline-offset-2 hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Phone */}
        <p className="text-sm text-ink-subtle pt-2">
          Need help?{' '}
          <a
            href="tel:5413379893"
            className="text-accent font-semibold hover:underline underline-offset-2"
          >
            (541) 337-9893
          </a>
        </p>
      </div>
    </div>
  )
}
