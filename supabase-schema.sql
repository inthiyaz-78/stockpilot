-- StockPilot Supabase schema (multi-user). Run in Supabase SQL Editor.
-- Each row is owned by the signed-in user (user_id) and protected by RLS.

create table if not exists suppliers (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  contact text,
  phone text,
  email text,
  city text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists products (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text not null,
  sku text not null,
  category text,
  supplier text references suppliers(id) on delete set null,
  qty integer default 0,
  unit text,
  min_stock integer default 0,
  price numeric default 0,
  cost numeric default 0,
  created_at timestamptz default now()
);

create table if not exists sales (
  id text primary key,
  user_id uuid references auth.users(id) on delete cascade,
  product_id text references products(id) on delete cascade,
  qty integer not null,
  price numeric not null,
  date timestamptz default now(),
  created_at timestamptz default now()
);

-- Row Level Security: a user can only see and change their own rows.
alter table suppliers enable row level security;
alter table products enable row level security;
alter table sales enable row level security;

-- Remove any old open/dev policies.
drop policy if exists "dev_all_suppliers" on suppliers;
drop policy if exists "dev_all_products" on products;
drop policy if exists "dev_all_sales" on sales;
drop policy if exists "own_suppliers" on suppliers;
drop policy if exists "own_products" on products;
drop policy if exists "own_sales" on sales;

create policy "own_suppliers" on suppliers
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own_products" on products
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own_sales" on sales
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
