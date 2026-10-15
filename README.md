# StockPilot — Inventory & Supply Dashboard

A lightweight, single-file web app that solves the STOCKPILOT problem statement (E6):
small businesses can track stock, record sales, spot low-stock items, get average-sales-based
reorder suggestions, and keep supplier contacts handy — all in one place. Sample data ships
with the app; everything is persisted in the browser via `localStorage`.

## Run

No build step required. Just open `index.html` in any modern browser:

- Double-click `index.html`, or
- Serve it locally: `npx serve .` then open http://localhost:3000

## Database / backend (Supabase)

The app connects automatically to the embedded Supabase project. Each signed-in
Google account gets **its own private data** (enforced by `user_id` + Row Level Security).

### First-time setup
1. Create a free Supabase project (or use the embedded one).
2. In the SQL editor, run `supabase-schema.sql` (creates suppliers/products/sales
   tables with `user_id` and per-user RLS policies).

### Upgrading an existing project (per-account isolation)
If you already created the tables with the old open/dev policies, run
`supabase-migration-multiuser.sql` once. It adds the `user_id` column to every table
and replaces the wide-open policies with `auth.uid() = user_id` policies.

> Without this migration the app will show a connection error, because inserts
> include the new `user_id` column.

### Google login
Enable **Google** under Supabase → Authentication → Providers, and add your site
URL under Authentication → URL Configuration → Redirect URLs.

## Tech stack (chosen for speed + polished UI)

- **HTML + React 18 (CDN, via Babel standalone)** — component-based stateful UI, zero setup
- **Tailwind CSS (CDN)** — utility-first, responsive, modern styling
- **Chart.js 4 (CDN)** — sales trend & revenue visualization
- **Font Awesome 6 (CDN)** — consistent iconography
- **localStorage** — instant persistence of products, suppliers and sales (no backend needed)

This keeps the app dependency-free and runnable offline after first load, while delivering a
shadcn-inspired, responsive, dashboard-grade interface in a single file.

## Features

- **Dashboard** — KPIs (products, low/out-of-stock, units sold today, inventory value), 7-day revenue chart, live alerts, recent sales, top sellers.
- **Inventory** — searchable/sortable product table with categories, supplier links, stock adjusters (+/-), add/edit/delete products.
- **Sales** — record a sale (auto price, stock deduction), filter by period, transaction history, delete-with-stock-restore.
- **Suppliers** — cards with contacts, edit, delete, and a product drill-down per supplier.
- **Low stock & reorder** — out/low stock list, average-daily-sales-based reorder suggestions, supplier contact and "add delivered stock".
- **Data** — export/import JSON, reset to sample data.

## Files

- `index.html` — the entire application (single file).