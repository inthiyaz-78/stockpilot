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

### User details table (profiles)
Run `supabase-profiles.sql` once. It creates a `public.profiles` table (one row per
logged-in user) with Row Level Security so **each user can only read/write their own
row**, plus a trigger that auto-creates the row on sign-up. The app also upserts the
profile on every login — and if the table isn't set up yet, the app keeps working
(the sync failure is ignored).

### Google login
Enable **Google** under Supabase → Authentication → Providers, and add your site
URL under Authentication → URL Configuration → Redirect URLs.

## AI Assistant

The dashboard includes a floating assistant (bottom-right robot button) that works offline out of the box:

- **Calculations** — `18% of 3500`, `sqrt(144)`, `1250*4`, `5 squared`
- **Live data** — "low stock", "out of stock", "inventory value", "top sellers", "revenue today", "how many units"
- **Lookups** — "stock of Basmati Rice", "price of USB-C Cable", "who supplies earbuds"
- **Navigation** — "open sales", "go to inventory"

For open-ended conversation, tap the ⚙️ gear and paste a free **Google Gemini API key**
(get one at https://aistudio.google.com/app/apikey). The key is stored only in the browser's
`localStorage`. For a public deployment, route AI requests through your own server so the key
stays private.

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
- **AI Assistant** — floating chat helper that answers questions from your live data (low stock, inventory value, top sellers, revenue, product/supplier lookups), does calculations ("18% of 3500", "sqrt(144)"), and navigates you around. Optionally connect a free Google Gemini API key (stored only in the browser) for open-ended chat.
- **Data** — export/import JSON, reset to sample data.

## Files

- `index.html` — the entire application (single file).