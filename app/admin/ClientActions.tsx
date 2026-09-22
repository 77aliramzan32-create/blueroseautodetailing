'use client'

import { useState, useTransition } from 'react'
import { deleteBooking } from '@/app/actions/booking'

interface ClientActionsProps {
  type: 'copy' | 'delete'
  text?: string
  id?: string
  name?: string
}

export default function ClientActions({ type, text, id, name }: ClientActionsProps) {
  if (type === 'copy') return <CopyBtn text={text!} />
  return <DeleteBtn id={id!} name={name!} />
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback: select text
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all ${
        copied
          ? 'bg-green-900/40 border-green-700/40 text-green-300'
          : 'border-edge text-ink-muted hover:border-edge-bright hover:text-ink'
      }`}
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Details
        </>
      )}
    </button>
  )
}

function DeleteBtn({ id, name }: { id: string; name: string }) {
  const [isPending, startTransition] = useTransition()
  const [confirm, setConfirm] = useState(false)

  function handleDelete() {
    if (!confirm) { setConfirm(true); return }
    startTransition(async () => {
      await deleteBooking(id)
      setConfirm(false)
    })
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all disabled:opacity-50 ${
        confirm
          ? 'bg-red-900/50 border-red-700/50 text-red-300'
          : 'border-edge text-ink-subtle hover:border-red-700/50 hover:text-red-400'
      }`}
    >
      {isPending ? (
        'Deleting...'
      ) : confirm ? (
        `Confirm delete "${name}"?`
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </>
      )}
    </button>
  )
}