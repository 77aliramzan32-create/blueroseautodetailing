'use client'

import { useState, useTransition } from 'react'
import { submitContactForm } from '@/app/actions/booking'

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [done, setDone]   = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const fd = new FormData(e.currentTarget)
    startTransition(async () => {
      const res = await submitContactForm(fd)
      if (res.success) setDone(true)
      else setError(res.error ?? 'Something went wrong. Please call us at (541) 337-9893.')
    })
  }

  if (done) {
    return (
      <div className="glass-card rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[360px] gap-4">
        <div className="w-14 h-14 rounded-full bg-accent-wash flex items-center justify-center">
          <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-ink">Message Received!</h3>
        <p className="text-ink-muted text-sm max-w-xs">
          Thanks! We&apos;ll get back to you shortly. For faster help, call{' '}
          <a href="tel:5413379893" className="text-accent font-semibold">(541) 337-9893</a>.
        </p>
      </div>
    )
  }

  return (
    <div className="glass-card rounded-xl p-6 md:p-8">
      <h2 className="font-display font-bold text-2xl text-ink mb-2">
        Send Us a Message
      </h2>
      <p className="font-body text-sm text-ink-muted mb-6">
        Describe your vehicle and what you need. We&apos;ll get back to you promptly with
        pricing and availability.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-label="Contact inquiry form">

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="font-body text-sm font-semibold text-ink">
            Your Name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name" name="name" type="text" required autoComplete="name"
            placeholder="Full name"
            className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
          />
        </div>

        {/* Phone + Email side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-phone" className="font-body text-sm font-semibold text-ink">
              Phone
            </label>
            <input
              id="contact-phone" name="phone" type="tel" autoComplete="tel"
              placeholder="(541) 000-0000"
              className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="font-body text-sm font-semibold text-ink">
              Email <span className="text-accent" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email" name="email" type="email" required autoComplete="email"
              placeholder="you@example.com"
              className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Vehicle */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-vehicle" className="font-body text-sm font-semibold text-ink">
            Vehicle &amp; Service <span className="text-ink-subtle text-xs font-normal">(optional)</span>
          </label>
          <input
            id="contact-vehicle" name="vehicle" type="text"
            placeholder="e.g. 2020 Toyota Tacoma — ceramic coating"
            className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="font-body text-sm font-semibold text-ink">
            Message <span className="text-ink-subtle text-xs font-normal">(optional)</span>
          </label>
          <textarea
            id="contact-message" name="message" rows={4}
            placeholder="Any additional details, questions, or special requests..."
            className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-y"
          />
        </div>

        {error && (
          <p className="text-sm text-red-400 bg-red-950/40 border border-red-800/50 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-accent text-white hover:bg-[#a81d34] hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.4)] transition-all duration-200 ease-out disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {isPending ? 'Sending…' : (
            <>
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>

        <p className="font-body text-xs text-ink-muted text-center">
          No spam — we only use this to respond to your inquiry.
        </p>
      </form>
    </div>
  )
}
