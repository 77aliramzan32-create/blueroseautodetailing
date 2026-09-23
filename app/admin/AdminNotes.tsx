'use client'

import { useState, useTransition } from 'react'
import { updateAdminNotes } from '@/app/actions/booking'

export default function AdminNotes({ id, notes }: { id: string; notes: string | null }) {
  const [value, setValue]   = useState(notes ?? '')
  const [saved, setSaved]   = useState(false)
  const [isPending, startTransition] = useTransition()

  function handleSave() {
    startTransition(async () => {
      await updateAdminNotes(id, value)
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    })
  }

  return (
    <div className="px-4 py-3 border-t border-edge">
      <p className="text-xs text-ink-subtle uppercase tracking-widest font-display mb-1.5">
        Admin Notes
      </p>
      <div className="flex gap-2">
        <textarea
          value={value}
          onChange={(e) => { setValue(e.target.value); setSaved(false) }}
          rows={2}
          placeholder="Add internal notes (visible to admin only)..."
          className="flex-1 bg-surface border border-edge rounded-lg px-3 py-2 text-xs text-ink placeholder:text-ink-subtle focus:border-edge-accent focus:outline-none resize-none"
        />
        <button
          onClick={handleSave}
          disabled={isPending}
          className={`shrink-0 self-start mt-0.5 text-xs px-3 py-1.5 rounded-lg border transition-all disabled:opacity-50 ${
            saved
              ? 'bg-green-900/40 border-green-700/40 text-green-300'
              : 'border-edge text-ink-muted hover:border-edge-bright hover:text-ink'
          }`}
        >
          {isPending ? 'Saving…' : saved ? '✓ Saved' : 'Save'}
        </button>
      </div>
    </div>
  )
}
