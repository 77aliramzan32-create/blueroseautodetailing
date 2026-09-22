'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log to error tracking service in production
    console.error('[App Error]', error)
  }, [error])

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-bold text-ink uppercase tracking-wide">
            Something Went Wrong
          </h1>
          <p className="text-ink-muted text-base leading-relaxed">
            We ran into an unexpected error. This has been noted. Please try again or return to
            the home page.
          </p>
        </div>

        {/* Dev-only error details */}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <div className="bg-card border border-edge rounded-lg p-4 text-left">
            <p className="text-xs font-mono text-accent mb-1 uppercase tracking-wider">
              Dev — Error Message
            </p>
            <p className="text-sm font-mono text-ink-muted break-all">{error.message}</p>
            {error.digest && (
              <p className="text-xs font-mono text-ink-subtle mt-2">Digest: {error.digest}</p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-display font-semibold uppercase tracking-wider text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-edge hover:border-edge-bright text-ink-muted hover:text-ink font-display font-semibold uppercase tracking-wider text-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>

        {/* Contact fallback */}
        <p className="text-sm text-ink-subtle">
          Still having trouble?{' '}
          <Link href="/contact" className="text-accent hover:underline underline-offset-2">
            Contact us
          </Link>{' '}
          or call{' '}
          <a href="tel:5413379893" className="text-accent hover:underline underline-offset-2">
            (541) 337-9893
          </a>
        </p>
      </div>
    </div>
  )
}
