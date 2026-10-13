-- Astha Shakti website — form submission tables.
--
-- How to apply: open your Supabase project → SQL Editor → paste this file
-- → Run. Safe to re-run (uses IF NOT EXISTS / CREATE OR REPLACE).
--
-- Security model: the browser only ever has the public anon key. Row Level
-- Security is enabled on both tables with an INSERT-only policy for the
-- `anon` role — visitors can submit a form, but cannot read, update or
-- delete any row, including their own or anyone else's. Reading submissions
-- is done from the Supabase dashboard's Table Editor, which authenticates
-- as service_role and bypasses RLS entirely — no extra policy needed for
-- that today.

create extension if not exists pgcrypto;

-- Contact form -----------------------------------------------------------

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (
    char_length(email) between 3 and 320
    and email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  ),
  message text not null check (char_length(message) between 1 and 5000)
);

alter table public.contact_submissions enable row level security;

drop policy if exists "anon can insert contact submissions" on public.contact_submissions;
create policy "anon can insert contact submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- Volunteer / internship interest form ------------------------------------

create table if not exists public.volunteer_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (
    char_length(email) between 3 and 320
    and email ~* '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  ),
  phone text check (phone is null or char_length(phone) <= 30),
  interests text[] not null check (array_length(interests, 1) between 1 and 10),
  message text check (message is null or char_length(message) <= 5000)
);

alter table public.volunteer_submissions enable row level security;

drop policy if exists "anon can insert volunteer submissions" on public.volunteer_submissions;
create policy "anon can insert volunteer submissions"
  on public.volunteer_submissions
  for insert
  to anon
  with check (true);
