-- Blue Rose Auto Detailing — Bookings Table
-- Run this in your Supabase project SQL editor

create table if not exists public.bookings (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  phone         text not null,
  email         text,
  vehicle_type  text not null default 'car',
  vehicle_year  text,
  vehicle_make  text,
  vehicle_model text,
  services      text[] not null default '{}',
  preferred_date date not null,
  preferred_time text not null,
  notes         text,
  status        text not null default 'pending'
                  check (status in ('pending','confirmed','completed','cancelled')),
  admin_notes   text,
  how_heard     text
);

-- Indexes for common admin queries
create index if not exists idx_bookings_date    on public.bookings(preferred_date desc);
create index if not exists idx_bookings_status  on public.bookings(status);
create index if not exists idx_bookings_created on public.bookings(created_at desc);

-- RLS: anyone can insert (booking form), only service role can read/update/delete
alter table public.bookings enable row level security;

-- Allow public INSERT (booking submissions)
create policy "Allow public booking submissions"
  on public.bookings for insert
  to anon with check (true);

-- Service role bypasses RLS automatically — admin ops use service role key
-- (No extra policy needed for service role)