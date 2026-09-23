import { cookies } from 'next/headers'
import { createAdminClient } from '@/lib/supabase/server'
import { adminLogin, adminLogout } from '@/app/actions/booking'
import type { Booking, BookingStatus } from '@/lib/supabase/types'
import type { Metadata } from 'next'
import ClientActions from './ClientActions'
import StatusSelect from './StatusSelect'
import AdminNotes from './AdminNotes'

export const metadata: Metadata = {
  title: 'Admin — Blue Rose Bookings',
  robots: { index: false, follow: false },
}

// ── helpers ─────────────────────────────────────────────────────────────────

function isAuthed(cookieStore: Awaited<ReturnType<typeof cookies>>): boolean {
  const token = cookieStore.get('admin_auth')?.value
  const pin   = process.env.ADMIN_PIN ?? 'blue2024'
  return token === pin
}

const STATUS_COLORS: Record<BookingStatus, string> = {
  pending:   'bg-yellow-900/40 text-yellow-300 border-yellow-700/40',
  confirmed: 'bg-blue-900/40 text-blue-300 border-blue-700/40',
  completed: 'bg-green-900/40 text-green-300 border-green-700/40',
  cancelled: 'bg-red-900/40 text-red-400 border-red-700/40',
}

function fmt(dateStr: string) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  })
}

function copyText(b: Booking): string {
  return [
    `=== Blue Rose Booking ===`,
    `Date:     ${fmt(b.preferred_date)} @ ${b.preferred_time}`,
    `Name:     ${b.name}`,
    `Phone:    ${b.phone}`,
    b.email ? `Email:    ${b.email}` : null,
    `Vehicle:  ${[b.vehicle_year, b.vehicle_make, b.vehicle_model, b.vehicle_type].filter(Boolean).join(' ')}`,
    `Services: ${b.services.join(', ')}`,
    b.notes ? `Notes:    ${b.notes}` : null,
    `Status:   ${b.status}`,
    `Booked:   ${new Date(b.created_at).toLocaleString('en-US')}`,
  ].filter(Boolean).join('\n')
}

// ── Login form ───────────────────────────────────────────────────────────────

function LoginForm({ error }: { error?: string }) {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-accent-wash border border-edge-accent flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="font-display font-bold text-2xl text-ink">Admin Access</h1>
          <p className="text-ink-subtle text-sm mt-1">Blue Rose Auto Detailing</p>
        </div>
        <form action={adminLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-ink-muted mb-1">PIN</label>
            <input name="pin" type="password" placeholder="Enter admin PIN" autoFocus required
              className="w-full bg-card border border-edge rounded-xl px-4 py-3 text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none text-center tracking-widest text-lg" />
          </div>
          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}
          <button type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 rounded-xl transition-colors">
            Enter Dashboard →
          </button>
        </form>
      </div>
    </main>
  )
}

// ── Admin dashboard ──────────────────────────────────────────────────────────

async function Dashboard() {
  const supabase = createAdminClient()
  const { data: bookings, error } = await supabase
    .from('bookings')
    .select('*')
    .order('preferred_date', { ascending: false })
    .order('created_at', { ascending: false })

  if (error) {
    return <p className="text-red-400 p-8">Error loading bookings: {error.message}</p>
  }

  const counts = {
    total: bookings?.length ?? 0,
    pending: bookings?.filter(b => b.status === 'pending').length ?? 0,
    confirmed: bookings?.filter(b => b.status === 'confirmed').length ?? 0,
    completed: bookings?.filter(b => b.status === 'completed').length ?? 0,
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* Top bar */}
      <div className="bg-card border-b border-edge sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <span className="font-display font-bold text-lg text-ink">Blue Rose</span>
            <span className="text-ink-subtle text-sm ml-2">Bookings Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/book" target="_blank"
              className="text-xs text-ink-subtle border border-edge rounded-lg px-3 py-1.5 hover:border-edge-bright transition-colors">
              View Booking Form ↗
            </a>
            <form action={adminLogout}>
              <button type="submit"
                className="text-xs text-ink-subtle border border-edge rounded-lg px-3 py-1.5 hover:text-ink transition-colors">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Total Bookings', value: counts.total, color: 'text-ink' },
            { label: 'Pending',        value: counts.pending,   color: 'text-yellow-300' },
            { label: 'Confirmed',      value: counts.confirmed, color: 'text-blue-300' },
            { label: 'Completed',      value: counts.completed, color: 'text-green-300' },
          ].map(s => (
            <div key={s.label} className="bg-card border border-edge rounded-xl p-4">
              <p className={`font-display font-bold text-3xl ${s.color}`}>{s.value}</p>
              <p className="text-ink-subtle text-sm mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bookings table */}
        {!bookings?.length ? (
          <div className="bg-card border border-edge rounded-xl p-12 text-center">
            <p className="text-ink-muted text-lg">No bookings yet.</p>
            <p className="text-ink-subtle text-sm mt-1">They&apos;ll appear here when customers submit the booking form.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {bookings.map(b => (
              <BookingCard key={b.id} booking={b as Booking} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

// ── Individual booking card ──────────────────────────────────────────────────

function BookingCard({ booking: b }: { booking: Booking }) {
  const services = (b.services ?? []).map((s: string) =>
    s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  )

  const copyStr = copyText(b)

  return (
    <div className="bg-card border border-edge rounded-xl overflow-hidden">
      {/* Card header */}
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 border-b border-edge">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-display font-bold text-ink text-lg">{b.name}</span>
            <a href={`tel:${b.phone.replace(/\D/g,'')}`}
              className="text-sm text-accent hover:text-accent-hover font-medium">{b.phone}</a>
            {b.email && (
              <a href={`mailto:${b.email}`}
                className="text-sm text-ink-subtle hover:text-ink">{b.email}</a>
            )}
          </div>
          <p className="text-sm text-ink-muted mt-0.5">
            📅 {fmt(b.preferred_date)} @ {b.preferred_time}
            {b.vehicle_make && <span className="ml-3">🚗 {[b.vehicle_year, b.vehicle_make, b.vehicle_model].filter(Boolean).join(' ')}</span>}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${STATUS_COLORS[b.status]}`}>
            {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
          </span>
          <span className="text-xs text-ink-subtle">
            Booked {new Date(b.created_at).toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="px-4 py-3 space-y-2">
        {/* Services */}
        <div className="flex flex-wrap gap-1.5">
          {services.map(s => (
            <span key={s} className="text-xs bg-elevated border border-edge text-ink-muted px-2 py-0.5 rounded-md">
              {s}
            </span>
          ))}
        </div>
        {b.notes && (
          <p className="text-sm text-ink-muted italic">&ldquo;{b.notes}&rdquo;</p>
        )}
        {b.how_heard && (
          <p className="text-xs text-ink-subtle">Heard via: {b.how_heard}</p>
        )}
      </div>

      {/* Actions bar */}
      <div className="px-4 py-2.5 border-t border-edge bg-elevated/40 flex flex-wrap items-center gap-2">
        <StatusSelect id={b.id} status={b.status} />
        <CopyButton text={copyStr} />
        <DeleteButton id={b.id} name={b.name} />
      </div>

      {/* Admin notes */}
      <AdminNotes id={b.id} notes={b.admin_notes} />
    </div>
  )
}

// ── Thin wrappers so BookingCard stays readable ──────────────────────────────

function CopyButton({ text }: { text: string }) {
  return <ClientActions type="copy" text={text} />
}

function DeleteButton({ id, name }: { id: string; name: string }) {
  return <ClientActions type="delete" id={id} name={name} />
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const cookieStore = await cookies()
  const { error } = await searchParams

  if (!isAuthed(cookieStore)) {
    return <LoginForm error={error === 'bad-pin' ? 'Incorrect PIN. Try again.' : undefined} />
  }

  return <Dashboard />
}