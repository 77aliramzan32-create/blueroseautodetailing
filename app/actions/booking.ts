'use server'

import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createAnonClient, createAdminClient } from '@/lib/supabase/server'
import type { BookingStatus } from '@/lib/supabase/types'

// ── Submit booking (public) ─────────────────────────────────────────────────

export async function submitBooking(formData: FormData) {
  const supabase = createAnonClient()

  const services = formData.getAll('services') as string[]

  const { error } = await supabase.from('bookings').insert({
    name:           formData.get('name') as string,
    phone:          formData.get('phone') as string,
    email:          (formData.get('email') as string) || null,
    vehicle_type:   formData.get('vehicle_type') as string,
    vehicle_year:   (formData.get('vehicle_year') as string) || null,
    vehicle_make:   (formData.get('vehicle_make') as string) || null,
    vehicle_model:  (formData.get('vehicle_model') as string) || null,
    services,
    preferred_date: formData.get('preferred_date') as string,
    preferred_time: formData.get('preferred_time') as string,
    notes:          (formData.get('notes') as string) || null,
    how_heard:      (formData.get('how_heard') as string) || null,
    status:         'pending',
  })

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true }
}

// ── Admin auth ──────────────────────────────────────────────────────────────

export async function adminLogin(formData: FormData) {
  const pin = formData.get('pin') as string
  const correctPin = process.env.ADMIN_PIN ?? 'blue2024'

  if (pin !== correctPin) {
    redirect('/admin?error=bad-pin')
  }

  const cookieStore = await cookies()
  cookieStore.set('admin_auth', correctPin, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 8,
    path: '/',
    sameSite: 'strict',
  })

  redirect('/admin')
}

export async function adminLogout() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_auth')
  redirect('/admin')
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_auth')?.value
  const correctPin = process.env.ADMIN_PIN ?? 'blue2024'
  return token === correctPin
}

// ── Admin booking ops ───────────────────────────────────────────────────────

export async function deleteBooking(id: string) {
  const authed = await isAdminAuthenticated()
  if (!authed) return { success: false, error: 'Unauthorized' }

  const supabase = createAdminClient()
  const { error } = await supabase.from('bookings').delete().eq('id', id)

  if (error) return { success: false, error: error.message }

  revalidatePath('/admin')
  return { success: true }
}

export async function updateBookingStatus(id: string, status: BookingStatus) {
  const authed = await isAdminAuthenticated()
  if (!authed) return { success: false, error: 'Unauthorized' }

  const supabase = createAdminClient()
  const { error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id)

  if (error) return { success: false, error: error.message }

  revalidatePath('/admin')
  return { success: true }
}

// ── Contact form lead (public) ───────────────────────────────────────────────

export async function submitContactForm(formData: FormData) {
  const supabase = createAnonClient()

  const name    = (formData.get('name')    as string).trim()
  const phone   = (formData.get('phone')   as string).trim() || 'See email'
  const email   = (formData.get('email')   as string).trim() || null
  const vehicle = (formData.get('vehicle') as string).trim() || null
  const message = (formData.get('message') as string).trim() || null

  const notes = [
    vehicle ? `Vehicle: ${vehicle}` : null,
    message ? `Message: ${message}` : null,
  ].filter(Boolean).join('\n') || null

  const today = new Date().toISOString().split('T')[0]

  const { error } = await supabase.from('bookings').insert({
    name,
    phone,
    email,
    vehicle_type: 'other',
    preferred_date: today,
    preferred_time: 'TBD',
    services:       ['General Inquiry'],
    notes,
    how_heard:      'Contact Form',
    status:         'pending',
  })

  if (error) return { success: false, error: error.message }
  return { success: true }
}

// ── Admin booking ops ───────────────────────────────────────────────────────

export async function updateAdminNotes(id: string, admin_notes: string) {
  const authed = await isAdminAuthenticated()
  if (!authed) return { success: false, error: 'Unauthorized' }

  const supabase = createAdminClient()
  const { error } = await supabase
    .from('bookings')
    .update({ admin_notes })
    .eq('id', id)

  if (error) return { success: false, error: error.message }

  revalidatePath('/admin')
  return { success: true }
}