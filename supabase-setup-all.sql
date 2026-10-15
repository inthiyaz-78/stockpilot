-- ============================================================
-- StockPilot — ONE-TIME SETUP (safe to run; every step is idempotent)
-- Run this whole script at once in the Supabase SQL Editor.
-- It does two things:
--   1) Multi-user isolation: user_id column + own-row RLS on
--      products / suppliers / sales
--   2) profiles table (details of every logged-in user) + trigger
-- ============================================================


-- ============================================================
-- STEP 1 — PER-ACCOUNT DATA ISOLATION
-- ============================================================

-- 1a) Add the owner column to each table (no-op if it already exists).
alter table suppliers add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table products  add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table sales     add column if not exists user_id uuid references auth.users(id) on delete cascade;

-- 1b) Drop the old wide-open dev policies (so everyone could see everything).
drop policy if exists "dev_all_suppliers" on suppliers;
drop policy if exists "dev_all_products" on products;
drop policy if exists "dev_all_sales" on sales;

-- 1c) Per-user policies: you only ever see and change your own rows.
drop policy if exists "own_suppliers" on suppliers;
drop policy if exists "own_products" on products;
drop policy if exists "own_sales" on sales;

create policy "own_suppliers" on suppliers
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own_products" on products
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own_sales" on sales
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


-- ============================================================
-- STEP 2 — PROFILES (details of every logged-in user)
-- ============================================================

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  avatar_url text,
  provider text,
  last_seen timestamptz default now(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Row Level Security: only the owner can read/write their own row.
alter table public.profiles enable row level security;

drop policy if exists "own_profile_select" on public.profiles;
drop policy if exists "own_profile_insert" on public.profiles;
drop policy if exists "own_profile_update" on public.profiles;
drop policy if exists "own_profile_delete" on public.profiles;

create policy "own_profile_select" on public.profiles
  for select using (auth.uid() = id);
create policy "own_profile_insert" on public.profiles
  for insert with check (auth.uid() = id);
create policy "own_profile_update" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "own_profile_delete" on public.profiles
  for delete using (auth.uid() = id);

-- Auto-create a profile row whenever a new user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url, provider)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url',
    coalesce(new.raw_app_meta_data->>'provider', 'email')
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = coalesce(excluded.full_name, public.profiles.full_name),
    avatar_url = coalesce(excluded.avatar_url, public.profiles.avatar_url),
    provider = coalesce(excluded.provider, public.profiles.provider),
    updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ============================================================
-- STEP 3 (OPTIONAL) — clean up leftover rows from the old
-- shared dataset (they have no owner, so nobody can see them).
-- Uncomment the next 3 lines if you want a clean slate.
-- ============================================================
-- delete from sales     where user_id is null;
-- delete from products  where user_id is null;
-- delete from suppliers where user_id is null;
