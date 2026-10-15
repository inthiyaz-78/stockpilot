-- StockPilot migration: per-account data isolation.
-- Run this ONCE in the Supabase SQL Editor on an existing project
-- that already has the tables from the original supabase-schema.sql.

-- 1) Add the owner column to each table.
alter table suppliers add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table products  add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table sales     add column if not exists user_id uuid references auth.users(id) on delete cascade;

-- 2) Drop the old wide-open dev policies.
drop policy if exists "dev_all_suppliers" on suppliers;
drop policy if exists "dev_all_products" on products;
drop policy if exists "dev_all_sales" on sales;

-- 3) Create per-user policies: you only see and modify your own rows.
drop policy if exists "own_suppliers" on suppliers;
drop policy if exists "own_products" on products;
drop policy if exists "own_sales" on sales;

create policy "own_suppliers" on suppliers
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own_products" on products
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own_sales" on sales
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4) OPTIONAL: delete rows from the old shared dataset (they have no owner).
--    Uncomment the next three lines if you want a clean slate. New accounts
--    automatically get their own fresh sample data on first login.
-- delete from sales     where user_id is null;
-- delete from products  where user_id is null;
-- delete from suppliers where user_id is null;
