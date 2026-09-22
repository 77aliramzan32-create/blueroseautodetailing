import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'
import { BUSINESS } from '@/lib/data/business'

export const metadata: Metadata = {
  title: 'Contact Blue Rose Auto Detailing | Springfield, OR — (541) 337-9893',
  description:
    'Get a free auto detailing quote from Blue Rose Auto Detailing Services in Springfield, OR. Call (541) 337-9893, text, or use our contact form. Located at 3436 Olympic Street.',
  alternates: { canonical: '/contact' },
  openGraph: { url: '/contact', type: 'website' },
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-accent">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="currentColor"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-accent">
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01L6.62 10.79z"
        fill="currentColor"
      />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-accent">
      <path
        d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6v-2h12v2zm0-4H6V6h12v2z"
        fill="currentColor"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-accent">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7v5l3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"
        stroke="currentColor" strokeWidth="1.75"
      />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  )
}

export default function ContactPage() {
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
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
          <div className="mt-6">
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Contact Blue Rose Auto Detailing
            </h1>
            <p className="mt-3 font-body text-base md:text-lg text-ink-muted">
              Get a Free Quote — we respond quickly and price every job before work begins.
            </p>
          </div>
        </div>
      </section>

      {/* ── Two-Column: Info + Form ────────────────────────────────────────── */}
      <section
        aria-label="Contact information and inquiry form"
        className="w-full bg-surface py-14 md:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT — Contact Info */}
            <div className="flex flex-col gap-6">

              {/* Phone */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <PhoneIcon />
                  <h2 className="font-display font-bold text-lg text-ink">Call Us</h2>
                </div>
                <a
                  href={`tel:${BUSINESS.phonePlain}`}
                  className="inline-block font-display font-bold text-3xl md:text-4xl text-accent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface rounded"
                  aria-label={`Call Blue Rose Auto Detailing at ${BUSINESS.phone}`}
                >
                  {BUSINESS.phone}
                </a>
                <p className="mt-2 font-body text-sm text-ink-muted">
                  Best way to get a fast quote. We answer during business hours.
                </p>

                {/* Text us */}
                <div className="mt-4 pt-4 border-t border-edge flex items-center gap-2">
                  <MessageIcon />
                  <div>
                    <p className="font-body text-sm text-ink font-semibold">Prefer to text?</p>
                    <a
                      href={`sms:${BUSINESS.phonePlain}`}
                      className="font-body text-sm text-accent hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      aria-label="Text Blue Rose Auto Detailing"
                    >
                      Text us at {BUSINESS.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPinIcon />
                  <h2 className="font-display font-bold text-lg text-ink">Our Location</h2>
                </div>
                {/* NAP with schema.org microdata */}
                <address
                  itemScope
                  itemType="https://schema.org/AutoRepair"
                  className="not-italic"
                >
                  <span
                    itemProp="name"
                    className="sr-only"
                  >
                    {BUSINESS.name}
                  </span>
                  <div
                    itemProp="address"
                    itemScope
                    itemType="https://schema.org/PostalAddress"
                    className="font-body text-sm text-ink-muted leading-relaxed"
                  >
                    <span itemProp="streetAddress">{BUSINESS.address.street}</span>
                    <br />
                    <span itemProp="addressLocality">{BUSINESS.address.city}</span>
                    {', '}
                    <span itemProp="addressRegion">{BUSINESS.address.state}</span>{' '}
                    <span itemProp="postalCode">{BUSINESS.address.zip}</span>
                  </div>
                  <meta itemProp="telephone" content={BUSINESS.phone} />
                </address>
                <a
                  href={`https://maps.google.com/?q=${BUSINESS.address.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 font-body text-sm font-semibold text-accent hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  aria-label="Get directions on Google Maps (opens in new tab)"
                >
                  Get Directions on Google Maps
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 10L10 2M5 2h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Hours */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClockIcon />
                  <h2 className="font-display font-bold text-lg text-ink">Business Hours</h2>
                </div>
                <table className="w-full font-body text-sm">
                  <tbody>
                    {BUSINESS.hours.map((h) => (
                      <tr key={h.day} className="border-b border-edge last:border-b-0">
                        <td className="py-2 pr-4 font-semibold text-ink w-28">{h.day}</td>
                        <td className="py-2 text-ink-muted">
                          {h.open && h.close ? `${h.open} – ${h.close}` : 'Closed'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Social */}
              <div className="glass-card rounded-xl p-6">
                <h2 className="font-display font-bold text-lg text-ink mb-4">Follow Us</h2>
                <div className="flex flex-col gap-3">
                  <a
                    href={BUSINESS.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-body text-sm text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-label="Blue Rose Auto Detailing on Facebook (opens in new tab)"
                  >
                    <FacebookIcon />
                    Facebook — BlueRoseAuto
                  </a>
                  <a
                    href={BUSINESS.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-body text-sm text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-label="Blue Rose Auto Detailing on Instagram (opens in new tab)"
                  >
                    <InstagramIcon />
                    Instagram — @blueroseauto
                  </a>
                  <a
                    href={BUSINESS.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-body text-sm text-ink-muted hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    aria-label="Blue Rose Auto Detailing on YouTube (opens in new tab)"
                  >
                    <YouTubeIcon />
                    YouTube — @BLUEROSEAUTO
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h2 className="font-display font-bold text-2xl text-ink mb-2">
                Send Us a Message
              </h2>
              <p className="font-body text-sm text-ink-muted mb-6">
                Describe your vehicle and what you need. We will get back to you promptly with
                pricing and availability.
              </p>

              {/* Server Action: wire up email delivery */}
              <form
                action="/api/contact"
                method="POST"
                className="flex flex-col gap-5"
                aria-label="Contact inquiry form"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="font-body text-sm font-semibold text-ink"
                  >
                    Your Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Full name"
                    className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="font-body text-sm font-semibold text-ink"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(541) 000-0000"
                    className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="font-body text-sm font-semibold text-ink"
                  >
                    Email Address <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>

                {/* Vehicle / Service */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-vehicle"
                    className="font-body text-sm font-semibold text-ink"
                  >
                    Vehicle &amp; Service Interested In
                  </label>
                  <input
                    id="contact-vehicle"
                    name="vehicle"
                    type="text"
                    placeholder="e.g. 2020 Toyota Tacoma — ceramic coating"
                    className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="font-body text-sm font-semibold text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Any additional details about your vehicle or what you are looking for..."
                    className="w-full bg-surface border border-edge rounded-lg px-4 py-3 font-body text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-accent text-white hover:bg-[#a81d34] hover:shadow-[0_0_24px_4px_rgba(200,36,63,0.4)] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="font-body text-xs text-ink-muted text-center">
                  No spam — we only use this to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>

          {/* ── Google Map ──────────────────────────────────────────────────── */}
          <div className="mt-12">
            <div className="w-full rounded-xl border border-edge overflow-hidden" style={{ height: '420px' }}>
              <iframe
                src={BUSINESS.gmbEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Blue Rose Auto Detailing location on Google Maps"
                aria-label="Google Map showing Blue Rose Auto Detailing at 3436 Olympic Street, Springfield, OR"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-3 px-1">
              <p className="font-body text-sm text-ink-muted">
                📍 {BUSINESS.address.full} &middot; Plus code: {BUSINESS.plusCode}
              </p>
              <a
                href={BUSINESS.gmb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-accent hover:underline underline-offset-2 shrink-0"
                aria-label="Open Blue Rose Auto Detailing on Google Maps (opens in new tab)"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
