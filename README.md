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

1. Create a free Supabase project.
2. Open the SQL editor and run `supabase-schema.sql` (creates suppliers/products/sales tables + dev RLS).
3. In the app, click **Database → Save & connect** with your Project URL and anon key.
4. Optionally push the seeded sample data with **Push local data to DB**.

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
- **Suppliers** — cards with contacts, edit, and a product drill-down per supplier.
- **Low stock & reorder** — out/low stock list, average-daily-sales-based reorder suggestions, supplier contact and "add delivered stock".
- **Data** — export/import JSON, reset to sample data.

## Files

- `index.html` — the entire application (single file).