'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { submitBooking } from '@/app/actions/booking'

const SERVICES = [
  { id: 'auto-detailing',        label: 'Auto Detail' },
  { id: 'paint-correction',      label: 'Paint Correction' },
  { id: 'ceramic-coating',       label: 'Ceramic Coating' },
  { id: 'paint-protection-film', label: 'PPF' },
  { id: 'window-tinting',        label: 'Window Tinting' },
  { id: 'vinyl-wraps',           label: 'Vinyl Wrap' },
  { id: 'rv-detailing',          label: 'RV Detail' },
  { id: 'boat-detailing',        label: 'Boat Detail' },
]

const TIMES = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
]

const VEHICLE_TYPES = [
  { value: 'car',        label: 'Car' },
  { value: 'truck',      label: 'Truck' },
  { value: 'suv-van',   label: 'SUV / Van' },
  { value: 'motorcycle', label: 'Motorcycle' },
  { value: 'rv',         label: 'RV' },
  { value: 'boat',       label: 'Boat' },
  { value: 'other',      label: 'Other' },
]

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
    const fd = new FormData(e.currentTarget)
    services.forEach(s => fd.append('services', s))
    startTransition(async () => {
      const res = await submitBooking(fd)
      if (res.success) setDone(true)
      else setError(res.error ?? 'Something went wrong. Call us at (541) 337-9893.')
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
    <div className="bg-surface">
      {/* Header */}
      <div className="bg-card border-b border-edge pt-20 pb-8 px-4">
        <div className="max-w-xl mx-auto">
          <Link href="/" className="text-ink-subtle text-sm hover:text-ink transition-colors mb-4 inline-flex items-center gap-1">
            ← Back
          </Link>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-ink mt-2">
            Book a <span className="text-accent">Detail</span>
          </h1>
          <p className="text-ink-muted mt-2 text-sm">
            Takes 2 minutes. We confirm within a few hours.{' '}
            <a href="tel:5413379893" className="text-accent">(541) 337-9893</a>
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ── Step 1: Services ── */}
          <div className="bg-card border border-edge rounded-xl p-5">
            <h2 className="font-display font-bold text-base text-ink mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-bold shrink-0">1</span>
              What service do you need?
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map(svc => (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => toggleService(svc.id)}
                  className={`text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                    services.includes(svc.id)
                      ? 'bg-accent-wash border-edge-accent text-ink'
                      : 'bg-surface border-edge text-ink-muted hover:border-edge-bright hover:text-ink'
                  }`}
                >
                  <span className={`mr-1.5 text-xs ${services.includes(svc.id) ? 'text-accent' : 'text-ink-subtle'}`}>
                    {services.includes(svc.id) ? '✓' : '○'}
                  </span>
                  {svc.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Step 2: Vehicle + Date/Time ── */}
          <div className="bg-card border border-edge rounded-xl p-5">
            <h2 className="font-display font-bold text-base text-ink mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-bold shrink-0">2</span>
              Your vehicle &amp; preferred time
            </h2>
            <div className="space-y-3">
              {/* Vehicle type */}
              <div>
                <label className="block text-sm text-ink-muted mb-1.5">Vehicle Type <span className="text-accent">*</span></label>
                <select name="vehicle_type" required
                  className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink focus:border-edge-accent focus:outline-none">
                  <option value="">Select type…</option>
                  {VEHICLE_TYPES.map(v => (
                    <option key={v.value} value={v.value}>{v.label}</option>
                  ))}
                </select>
              </div>

              {/* Year Make Model — single field */}
              <div>
                <label className="block text-sm text-ink-muted mb-1.5">
                  Year / Make / Model <span className="text-ink-subtle text-xs">(optional)</span>
                </label>
                <input
                  name="vehicle_make"
                  type="text"
                  placeholder="e.g. 2022 Toyota Camry"
                  className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none"
                />
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-ink-muted mb-1.5">Date <span className="text-accent">*</span></label>
                  <input name="preferred_date" type="date" required min={getMinDate()}
                    className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink focus:border-edge-accent focus:outline-none" />
                  <p className="text-[11px] text-ink-subtle mt-1">Mon–Sat · Sun closed</p>
                </div>
                <div>
                  <label className="block text-sm text-ink-muted mb-1.5">Time <span className="text-accent">*</span></label>
                  <select name="preferred_time" required
                    className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink focus:border-edge-accent focus:outline-none">
                    <option value="">Pick a time</option>
                    {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* ── Step 3: Contact Info ── */}
          <div className="bg-card border border-edge rounded-xl p-5">
            <h2 className="font-display font-bold text-base text-ink mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-accent text-white text-[10px] flex items-center justify-center font-bold shrink-0">3</span>
              How do we reach you?
            </h2>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-ink-muted mb-1.5">Name <span className="text-accent">*</span></label>
                  <input name="name" type="text" required placeholder="Jane Smith"
                    className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-ink-muted mb-1.5">Phone <span className="text-accent">*</span></label>
                  <input name="phone" type="tel" required placeholder="(541) 555-0100"
                    className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-ink-muted mb-1.5">Email <span className="text-ink-subtle text-xs">(optional)</span></label>
                <input name="email" type="email" placeholder="jane@email.com"
                  className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm text-ink-muted mb-1.5">Notes <span className="text-ink-subtle text-xs">(optional)</span></label>
                <textarea name="notes" rows={2} placeholder="Any special requests or details…"
                  className="w-full bg-surface border border-edge rounded-lg px-3 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none resize-none" />
              </div>
            </div>
          </div>

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
                Sending…
              </>
            ) : 'Request Appointment →'}
          </button>

          <p className="text-xs text-ink-subtle text-center pb-4">
            We confirm within a few hours. Urgent?{' '}
            <a href="tel:5413379893" className="text-accent">(541) 337-9893</a>
          </p>
        </form>
      </div>
    </div>
  )
}
