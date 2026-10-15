-- StockPilot Supabase schema (dev). Run in Supabase SQL Editor.

create table if not exists suppliers (
  id text primary key,
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
  product_id text references products(id) on delete cascade,
  qty integer not null,
  price numeric not null,
  date timestamptz default now(),
  created_at timestamptz default now()
);

-- DEV ONLY: open RLS so the anon key works from the browser.
-- Replace with auth-scoped policies before production.
alter table suppliers enable row level security;
alter table products enable row level security;
alter table sales enable row level security;

drop policy if exists "dev_all_suppliers" on suppliers;
drop policy if exists "dev_all_products" on products;
drop policy if exists "dev_all_sales" on sales;

create policy "dev_all_suppliers" on suppliers for all using (true) with check (true);
create policy "dev_all_products" on products for all using (true) with check (true);
create policy "dev_all_sales" on sales for all using (true) with check (true);