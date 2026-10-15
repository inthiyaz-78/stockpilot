-- StockPilot profiles: stores details of every logged-in user.
-- One row per user. Row Level Security means each user can only read/write
-- their OWN row. Safe to run at any time (idempotent).

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

-- Row Level Security: only the owner can touch their row.
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

-- Automatically create a profile row when a new user signs up.
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
