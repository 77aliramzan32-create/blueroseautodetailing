'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { submitBooking } from '@/app/actions/booking'

const SERVICES = [
  { id: 'auto-detailing',        label: 'Full Auto Detail' },
  { id: 'paint-correction',      label: 'Paint Correction' },
  { id: 'ceramic-coating',       label: 'Ceramic Coating' },
  { id: 'paint-protection-film', label: 'Paint Protection Film (PPF)' },
  { id: 'window-tinting',        label: 'Window Tinting' },
  { id: 'vinyl-wraps',           label: 'Vinyl Wrap' },
  { id: 'rv-detailing',          label: 'RV Detailing' },
  { id: 'boat-detailing',        label: 'Boat Detailing' },
]

const TIMES = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
]

const VEHICLE_TYPES = ['Car', 'Truck', 'SUV / Van', 'Motorcycle', 'RV', 'Boat', 'Other']

const HOW_HEARD = ['Google Search', 'Google Maps', 'Facebook', 'Instagram', 'Referral / Friend', 'Returning Customer', 'Other']

function getMinDate() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

export default function BookForm() {
  const [isPending, startTransition] = useTransition()
  const [done, setDone]     = useState(false)
  const [error, setError]   = useState('')
  const [services, setServices] = useState<string[]>([])

  function toggleService(id: string) {
    setServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (services.length === 0) { setError('Please select at least one service.'); return }
    setError('')
    const form = e.currentTarget
    const fd = new FormData(form)
    services.forEach(s => fd.append('services', s))
    startTransition(async () => {
      const res = await submitBooking(fd)
      if (res.success) setDone(true)
      else setError(res.error ?? 'Something went wrong. Please call us at (541) 337-9893.')
    })
  }

  if (done) {
    return (
      <div className="min-h-[80vh] bg-surface flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-accent-wash flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display font-bold text-3xl text-ink mb-3">Booking Request Sent!</h1>
          <p className="text-ink-muted mb-2">
            Thank you! We&apos;ll confirm your appointment within a few hours.
          </p>
          <p className="text-ink-muted text-sm mb-8">
            Questions? Call us at{' '}
            <a href="tel:5413379893" className="text-accent font-semibold">(541) 337-9893</a>
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-accent-hover transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-card border-b border-edge pt-20 pb-8 px-4">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="text-ink-subtle text-sm hover:text-ink transition-colors mb-4 inline-flex items-center gap-1">
            ← Back to home
          </Link>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mt-2">
            Book a <span className="text-accent">Detail</span>
          </h1>
          <p className="text-ink-muted mt-2">
            Fill out the form below and we&apos;ll confirm your appointment. Questions?{' '}
            <a href="tel:5413379893" className="text-accent font-medium">(541) 337-9893</a>
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ── Services ── */}
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center font-bold">1</span>
              Select Service(s)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICES.map(svc => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => toggleService(svc.id)}
                  className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                    services.includes(svc.id)
                      ? 'bg-accent-wash border-edge-accent text-ink'
                      : 'bg-card border-edge text-ink-muted hover:border-edge-bright hover:text-ink'
                  }`}
                >
                  <span className={`mr-2 ${services.includes(svc.id) ? 'text-accent' : 'text-ink-subtle'}`}>
                    {services.includes(svc.id) ? '✓' : '○'}
                  </span>
                  {svc.label}
                </button>
              ))}
            </div>
          </section>

          {/* ── Vehicle ── */}
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center font-bold">2</span>
              Vehicle Details
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-ink-muted mb-1">Vehicle Type <span className="text-accent">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {VEHICLE_TYPES.map(vt => (
                    <label key={vt} className="cursor-pointer">
                      <input type="radio" name="vehicle_type" value={vt.toLowerCase().replace(' / ', '-')} required className="sr-only peer" />
                      <span className="px-3 py-1.5 rounded-lg border border-edge bg-card text-sm text-ink-muted peer-checked:border-edge-accent peer-checked:text-ink peer-checked:bg-accent-wash transition-all">
                        {vt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm text-ink-muted mb-1">Year</label>
                  <input name="vehicle_year" type="text" placeholder="2022" maxLength={4}
                    className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-ink-muted mb-1">Make</label>
                  <input name="vehicle_make" type="text" placeholder="Toyota"
                    className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-ink-muted mb-1">Model</label>
                  <input name="vehicle_model" type="text" placeholder="Camry"
                    className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
              </div>
            </div>
          </section>

          {/* ── Date & Time ── */}
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center font-bold">3</span>
              Preferred Date &amp; Time
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-ink-muted mb-1">Date <span className="text-accent">*</span></label>
                <input name="preferred_date" type="date" required min={getMinDate()}
                  className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink focus:border-edge-accent focus:outline-none" />
                <p className="text-xs text-ink-subtle mt-1">Mon–Sat only · Sun closed</p>
              </div>
              <div>
                <label className="block text-sm text-ink-muted mb-1">Time <span className="text-accent">*</span></label>
                <select name="preferred_time" required
                  className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink focus:border-edge-accent focus:outline-none">
                  <option value="">Select a time</option>
                  {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* ── Contact Info ── */}
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-accent text-white text-xs flex items-center justify-center font-bold">4</span>
              Your Info
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-ink-muted mb-1">Full Name <span className="text-accent">*</span></label>
                  <input name="name" type="text" required placeholder="Jane Smith"
                    className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-ink-muted mb-1">Phone <span className="text-accent">*</span></label>
                  <input name="phone" type="tel" required placeholder="(541) 555-0100"
                    className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-ink-muted mb-1">Email <span className="text-ink-subtle text-xs">(optional)</span></label>
                <input name="email" type="email" placeholder="jane@email.com"
                  className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm text-ink-muted mb-1">Notes / Special Requests <span className="text-ink-subtle text-xs">(optional)</span></label>
                <textarea name="notes" rows={3} placeholder="E.g. dog hair removal, specific areas of concern, custom requests..."
                  className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-sm text-ink-muted mb-1">How did you hear about us? <span className="text-ink-subtle text-xs">(optional)</span></label>
                <select name="how_heard"
                  className="w-full bg-card border border-edge rounded-lg px-3 py-2 text-sm text-ink focus:border-edge-accent focus:outline-none">
                  <option value="">Select one</option>
                  {HOW_HEARD.map(h => <option key={h} value={h}>{h}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Error */}
          {error && (
            <div className="bg-red-950/40 border border-red-800/50 rounded-lg px-4 py-3 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <button type="submit" disabled={isPending}
            className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-lg py-4 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {isPending ? (
              <>
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Sending...
              </>
            ) : (
              'Send Booking Request →'
            )}
          </button>

          <p className="text-xs text-ink-subtle text-center">
            We&apos;ll confirm within a few hours. For urgent requests, call{' '}
            <a href="tel:5413379893" className="text-accent">(541) 337-9893</a>.
          </p>
        </form>
      </div>
    </div>
  )
}
