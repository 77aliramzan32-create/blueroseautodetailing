'use client'

import { useTransition } from 'react'
import { updateBookingStatus } from '@/app/actions/booking'
import type { BookingStatus } from '@/lib/supabase/types'

export default function StatusSelect({ id, status }: { id: string; status: BookingStatus }) {
  const [, startTransition] = useTransition()

  return (
    <select
      defaultValue={status}
      onChange={(e) => {
        const newStatus = e.currentTarget.value as BookingStatus
        startTransition(async () => { await updateBookingStatus(id, newStatus) })
      }}
      className="bg-card border border-edge rounded-lg text-xs text-ink-muted px-2 py-1.5 focus:border-edge-accent focus:outline-none cursor-pointer"
    >
      <option value="pending">Pending</option>
      <option value="confirmed">Confirmed</option>
      <option value="completed">Completed</option>
      <option value="cancelled">Cancelled</option>
    </select>
  )
}