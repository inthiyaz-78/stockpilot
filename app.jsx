
const { useState, useEffect, useMemo, useRef, useCallback } = React;
const STORAGE_KEY = 'stockpilot.v1';
const SB_CONFIG_KEY = 'stockpilot.supabase.v1';
const SUPABASE_URL = 'https://ybfvkxbavmfndktpwrxz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliZnZreGJhdm1mbmRrdHB3cnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNjU3ODgsImV4cCI6MjEwNzY0MTc4OH0.7qZ3utdkR54xGvi8qDWF6PB4j2yo850kbkha5TbN1Rc';
const RAZORPAY_KEY_ID = 'YOUR_RAZORPAY_KEY_ID';
const UPI_ID = 'yourname@okhdfcbank';
const UPI_NAME = 'StockPilot';
const REDIRECT_URL = window.location.origin + window.location.pathname;
function getSbConfig() { try { const r = localStorage.getItem(SB_CONFIG_KEY); return r ? JSON.parse(r) : null; } catch(e) { return null; } }
function saveSbConfig(cfg) { try { if (cfg) localStorage.setItem(SB_CONFIG_KEY, JSON.stringify(cfg)); else localStorage.removeItem(SB_CONFIG_KEY); } catch(e){} }
function makeSbClient(cfg) { if (!cfg || !cfg.url || !cfg.key || !window.supabase) return null; try { return window.supabase.createClient(cfg.url.trim(), cfg.key.trim()); } catch(e) { return null; } }
function uid() { return Math.random().toString(36).slice(2,9) + Date.now().toString(36); }
function uid2(n) { return 'sale_' + n + '_' + Math.random().toString(36).slice(2,6); }
function storageKey(scope) { return STORAGE_KEY + '.' + (scope || 'anon'); }
function loadData() { try { const raw = localStorage.getItem(storageKey('anon')); if (raw) return JSON.parse(raw); } catch(e){} return JSON.parse(JSON.stringify(seedData)); }
function saveData(d, scope) { try { localStorage.setItem(storageKey(scope), JSON.stringify(d)); } catch(e){} }
function loadCache(scope) { try { const raw = localStorage.getItem(storageKey(scope)); return raw ? JSON.parse(raw) : null; } catch(e){ return null; } }
function proKey(scope) { return 'stockpilot.pro.' + (scope || 'anon'); }
function loadPro(scope) { try { return localStorage.getItem(proKey(scope)) === '1'; } catch(e){ return false; } }
function savePro(scope, on) { try { if (on) localStorage.setItem(proKey(scope), '1'); else localStorage.removeItem(proKey(scope)); } catch(e){} }
function fmtMoney(n) { return '₹' + Number(n||0).toLocaleString('en-IN'); }
function fmtNum(n) { return Number(n||0).toLocaleString('en-IN'); }
function fmtDate(s) { const d = new Date(s); return d.toLocaleDateString('en-IN', {day:'numeric',month:'short'}); }
function daysAgo(n) { const d = new Date(); d.setDate(d.getDate()-n); return d; }
function sumRevenue(list) { return list.reduce((a,s)=>a + Number(s.qty||0)*Number(s.price||0), 0); }
function sumUnits(list) { return list.reduce((a,s)=>a + Number(s.qty||0), 0); }
const seedData = {
  suppliers: [
    { id:'s1', name:'FreshMart Distributors', contact:'Ravi Kumar', phone:'+91 98765 43210', email:'ravi@freshmart.in', city:'Chennai', notes:'Grocery & dairy' },
    { id:'s2', name:'ElectroHub Traders', contact:'Priya Nair', phone:'+91 91234 56789', email:'priya@electrohub.in', city:'Bangalore', notes:'Electronics accessories' },
    { id:'s3', name:'Stitch & Style Textiles', contact:'Anand Rao', phone:'+91 99887 76655', email:'anand@stitchstyle.in', city:'Coimbatore', notes:'Apparel' },
    { id:'s4', name:'GreenLeaf Agro', contact:'Sita Devi', phone:'+91 90000 11122', email:'sita@greenleaf.in', city:'Madurai', notes:'Fresh produce' }
  ],
  products: [
    { id:'p1', name:'Basmati Rice 5kg', sku:'GR-001', category:'Groceries', supplier:'s1', qty:42, unit:'bags', minStock:15, price:480, cost:390 },
    { id:'p2', name:'Sunflower Oil 1L', sku:'GR-002', category:'Groceries', supplier:'s1', qty:6, unit:'bottles', minStock:12, price:165, cost:130 },
    { id:'p3', name:'Amul Milk 1L', sku:'DA-001', category:'Dairy', supplier:'s1', qty:3, unit:'packs', minStock:20, price:68, cost:58 },
    { id:'p4', name:'Bluetooth Earbuds', sku:'EL-101', category:'Electronics', supplier:'s2', qty:14, unit:'pcs', minStock:5, price:1299, cost:850 },
    { id:'p5', name:'USB-C Cable 1m', sku:'EL-102', category:'Electronics', supplier:'s2', qty:0, unit:'pcs', minStock:10, price:199, cost:120 },
    { id:'p6', name:'Cotton T-Shirt M', sku:'AP-201', category:'Apparel', supplier:'s3', qty:28, unit:'pcs', minStock:10, price:349, cost:210 },
    { id:'p7', name:'Denim Jeans 32', sku:'AP-202', category:'Apparel', supplier:'s3', qty:4, unit:'pcs', minStock:6, price:1499, cost:950 },
    { id:'p8', name:'Apple (Kg)', sku:'PR-301', category:'Produce', supplier:'s4', qty:18, unit:'kg', minStock:8, price:180, cost:130 },
    { id:'p9', name:'Tomato (Kg)', sku:'PR-302', category:'Produce', supplier:'s4', qty:2, unit:'kg', minStock:5, price:60, cost:35 },
    { id:'p10', name:'Instant Noodles Pack', sku:'GR-003', category:'Groceries', supplier:'s1', qty:55, unit:'packs', minStock:20, price:40, cost:28 }
  ],
  sales: (() => { const out = []; const now = Date.now(); const rows = [['p1',2,480],['p3',5,68],['p2',3,165],['p4',1,1299],['p10',8,40],['p6',2,349],['p1',1,480],['p9',3,60],['p7',1,1499],['p5',2,199],['p2',4,165],['p8',2,180],['p3',6,68],['p10',10,40],['p4',2,1299]]; rows.forEach((r,i)=>{ out.push({ id: uid2(i), productId:r[0], qty:r[1], price:r[2], date: new Date(now - (i*0.8+0.2)*86400000).toISOString() }); }); return out; })()
};

function Badge({ children, tone='slate' }) {
  const tones = { slate:'bg-slate-100 text-slate-700', green:'bg-emerald-100 text-emerald-700', amber:'bg-amber-100 text-amber-700', red:'bg-rose-100 text-rose-700', blue:'bg-indigo-100 text-indigo-700', violet:'bg-violet-100 text-violet-700' };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
function Modal({ open, onClose, title, children, width='max-w-lg' }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/40 modal-backdrop"></div>
      <div className={`relative bg-white rounded-2xl shadow-soft w-full ${width} max-h-[90vh] overflow-auto`} onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
function Input({ label, ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
      <input {...props} className={`w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition ${props.className||''}`} />
    </div>
  );
}
function Select({ label, children, ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-slate-700 mb-1.5">{label}</label>}
      <select {...props} className={`w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition ${props.className||''}`}>{children}</select>
    </div>
  );
}
function Button({ children, variant='primary', className='', ...props }) {
  const v = { primary:'bg-brand-600 hover:bg-brand-700 text-white shadow-sm', secondary:'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200', danger:'bg-rose-500 hover:bg-rose-600 text-white', ghost:'hover:bg-slate-100 text-slate-600', success:'bg-emerald-500 hover:bg-emerald-600 text-white' }[variant];
  return <button {...props} className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition active:scale-[.98] disabled:opacity-50 ${v} ${className}`}>{children}</button>;
}
function Empty({ icon, title, sub }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center text-2xl mb-4"><i className={icon}></i></div>
      <div className="font-semibold text-slate-700">{title}</div>
      <div className="text-sm text-slate-400 mt-1 max-w-xs">{sub}</div>
    </div>
  );
}
function productToDb(p, userId) { return {id:p.id,user_id:userId,name:p.name,sku:p.sku,category:p.category,supplier:p.supplier||null,qty:p.qty,unit:p.unit,min_stock:p.minStock,price:p.price,cost:p.cost}; }
function dbToProduct(r) { return {id:r.id,name:r.name,sku:r.sku,category:r.category,supplier:r.supplier,qty:r.qty,unit:r.unit,minStock:r.min_stock,price:r.price,cost:r.cost}; }
function supplierToDb(s, userId) { return {id:s.id,user_id:userId,name:s.name,contact:s.contact||null,phone:s.phone||null,email:s.email||null,city:s.city||null,notes:s.notes||null}; }
function dbToSupplier(r) { return {id:r.id,name:r.name,contact:r.contact,email:r.email,phone:r.phone,city:r.city,notes:r.notes}; }
function saleToDb(s, userId) { return {id:s.id,user_id:userId,product_id:s.productId,qty:s.qty,price:s.price,date:s.date}; }
function dbToSale(r) { return {id:r.id,productId:r.product_id,qty:r.qty,price:r.price,date:r.date}; }
function buildSeed(userId) { const supMap = {}, prodMap = {}; const suppliers = seedData.suppliers.map(s => { const nid = uid(); supMap[s.id] = nid; return {...s, id:nid}; }); const products = seedData.products.map(p => { const nid = uid(); prodMap[p.id] = nid; return {...p, id:nid, supplier: p.supplier ? supMap[p.supplier] : null}; }); const sales = seedData.sales.map(s => ({...s, id: uid(), productId: prodMap[s.productId] || null})); return { suppliers, products, sales, userId }; }
async function fetchAllFromSb(sb, userId) {
  async function run(uid) { const sc = (q) => (uid ? q.eq('user_id', uid) : q); const [prods,sups,sales] = await Promise.all([sc(sb.from('products').select('*')), sc(sb.from('suppliers').select('*')), sc(sb.from('sales').select('*'))]); const err = prods.error || sups.error || sales.error; if (err) return { error: err }; return { scoped: !!uid, products: (prods.data||[]).map(dbToProduct), suppliers: (sups.data||[]).map(dbToSupplier), sales: (sales.data||[]).map(dbToSale) }; }
  let r; try { r = await run(userId); } catch (e) { r = { error: e }; }
  if (r.error) { console.warn('per-user fetch unavailable, retrying unfiltered:', r.error.message || r.error); try { r = await run(null); } catch (e) { r = { error: e }; } if (r.error) { console.error('Supabase fetch error', r.error); return null; } }
  if (!r.scoped) console.warn('Running unfiltered — run supabase-migration-multiuser.sql to isolate each account.');
  return { scoped: r.scoped, products: r.products, suppliers: r.suppliers, sales: r.sales };
}
async function upsertRow(sb, table, payload) { const {error} = await sb.from(table).upsert(payload); if (error) console.error('upsert error', table, error); }
async function deleteRow(sb, table, id) { const {error} = await sb.from(table).delete().eq('id', id); if (error) console.error('delete error', table, error); }
function upiLink(upiId, amount, note) {
  const id = (upiId || UPI_ID).trim();
  const pn = encodeURIComponent(UPI_NAME);
  const tn = encodeURIComponent(note || 'StockPilot');
  const tr = 'SP' + Date.now();
  return `upi://pay?pa=${id}&pn=${pn}&am=${Number(amount).toFixed(2)}&cu=INR&tn=${tn}&tr=${tr}`;
}
function LoginScreen({ sb }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function loginWithGoogle() { setLoading(true); setError(''); try { const { error: e } = await sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: REDIRECT_URL } }); if (e) { setError(e.message); setLoading(false); } } catch (err) { setError(err.message); setLoading(false); } }
  const features = [
    { icon:'fa-solid fa-boxes-stacked', title:'Real-time inventory', sub:'Live stock levels across every product' },
    { icon:'fa-solid fa-chart-line', title:'Sales analytics', sub:'7-day trends and top sellers at a glance' },
    { icon:'fa-solid fa-triangle-exclamation', title:'Smart reorders', sub:'Alerted before you ever run out' },
    { icon:'fa-solid fa-cloud', title:'Cloud synced', sub:'Your own private workspace on any device' }
  ];
  const chips = ['Google sign-in', 'Zero setup', 'Supabase-backed', 'Razorpay ready'];
  const marquee = ['Inventory', 'Sales', 'Suppliers', 'Low-stock alerts', 'Reorder points', 'Revenue trends', 'Top sellers', 'Multi-account'];
  const GoogleG = (<svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a7.16 7.16 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50"></div>
      <div className="blob absolute top-20 left-20 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl"></div>
      <div className="blob-2 absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block fade-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-lg logo-pulse">
              <i className="fa-solid fa-warehouse text-2xl"></i>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">StockPilot</div>
              <div className="text-slate-400 text-sm">Inventory &amp; Supply</div>
            </div>
          </div>
          <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">Take control of your inventory with <span className="gradient-text">intelligence</span>.</h1>
          <p className="text-lg text-slate-400 mb-8 max-w-lg">StockPilot helps small businesses track inventory, predict stockouts, and stay on top of reorders — all from one beautiful dashboard.</p>
          <div className="flex flex-wrap gap-2 mb-8">{chips.map(c => <span key={c} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">{c}</span>)}</div>
          <div className="flex gap-3 overflow-hidden max-w-lg">
            <div className="marquee flex gap-3 whitespace-nowrap">
              {[...marquee, ...marquee].map((w,i) => <span key={i} className="flex items-center gap-2 text-sm text-slate-500 px-3"><i className="fa-solid fa-circle text-[6px] text-brand-500"></i>{w}</span>)}
            </div>
          </div>
        </div>
        <div className="w-full max-w-md mx-auto">
          <div className="relative glass rounded-[1.75rem] p-7 sm:p-9 shadow-2xl border border-white/50 fade-in2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-lg logo-pulse">
                <i className="fa-solid fa-warehouse text-xl"></i>
              </div>
              <div>
                <div className="font-bold text-slate-800 text-lg leading-tight">StockPilot</div>
                <div className="text-xs text-slate-500">Inventory &amp; Supply Dashboard</div>
              </div>
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-1">Welcome back</h2>
            <p className="text-sm text-slate-500 mb-6">Sign in to sync your inventory across every device.</p>
            {error && <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-sm">{error}</div>}
            <button onClick={loginWithGoogle} disabled={loading} className="btn-shine w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition font-medium text-slate-700 shadow-sm magnetic">
              {loading ? <i className="fa-solid fa-circle-notch fa-spin text-brand-500"></i> : GoogleG}
              <span>{loading ? 'Connecting…' : 'Continue with Google'}</span>
            </button>
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-200"></div>
              <span className="text-xs text-slate-400">secure OAuth</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {features.slice(0,4).map(f => (
                <div key={f.title} className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <i className={`${f.icon} text-brand-500 mb-1.5`}></i>
                  <div className="text-xs font-medium text-slate-700">{f.title}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-slate-500 mt-6 fade-in2" style={{animationDelay:'.6s'}}>New here? Signing in creates your own private workspace automatically.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ stats, products, sales, suppliers, setView, prodById, supById, avgDailySales, api }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (!chartRef.current) return;
    if (chartInstance.current) chartInstance.current.destroy();
    const labels = [], data = [];
    for (let i=6; i>=0; i--) { const d = daysAgo(i); const key = d.toDateString(); labels.push(d.toLocaleDateString('en-IN',{weekday:'short'})); data.push(sales.filter(s=>new Date(s.date).toDateString()===key).reduce((a,s)=>a+s.qty*s.price,0)); }
    chartInstance.current = new Chart(chartRef.current, { type:'bar', data: { labels, datasets:[{ label:'Revenue', data, backgroundColor:'#6366f1', borderRadius:8, hoverBackgroundColor:'#4338ca' }] }, options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}, tooltip:{callbacks:{label:c=>'₹'+c.parsed.y.toLocaleString('en-IN')}}}, scales:{y:{beginAtZero:true, ticks:{callback:v=>'₹'+v}, grid:{color:'#f1f5f9'}}, x:{grid:{display:false}}} } });
    return ()=>{ if(chartInstance.current) chartInstance.current.destroy(); };
  }, [sales]);
  const recent = sales.slice(0,6);
  const topProducts = useMemo(() => { const map = {}; sales.forEach(s => { map[s.productId] = (map[s.productId]||0) + s.qty; }); return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([id,q])=>({p:prodById[id],q})).filter(x=>x.p); }, [sales, prodById]);
  const kpis = [
    { label:'Total Products', value:fmtNum(stats.totalProducts), icon:'fa-solid fa-box', tone:'from-brand-500 to-brand-700', sub: (stats.low.length+stats.out.length)+' need attention' },
    { label:'Low / Out of Stock', value:fmtNum(stats.low.length+stats.out.length), icon:'fa-solid fa-triangle-exclamation', tone:'from-amber-400 to-rose-500', sub: stats.out.length+' out of stock', click:()=>setView('alerts') },
    { label:'Sold Today', value:fmtNum(stats.soldToday), icon:'fa-solid fa-cart-shopping', tone:'from-emerald-400 to-teal-500', sub:fmtMoney(stats.revenueToday)+' revenue' },
    { label:'Inventory Value', value:fmtMoney(stats.value), icon:'fa-solid fa-indian-rupee-sign', tone:'from-violet-500 to-purple-700', sub:'at cost price' }
  ];
  return (
    <div className="space-y-6">
      <div className="stagger-in grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((k,i)=>(
          <div key={i} onClick={k.click} className={`kpi magnetic glass-card rounded-2xl p-5 shadow-layered border border-slate-100 ${k.click?'cursor-pointer':''}`}>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{k.label}</div>
                <div className="text-2xl font-bold text-slate-800 mt-2 counter">{k.value}</div>
                <div className="text-xs text-slate-400 mt-1">{k.sub}</div>
              </div>
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${k.tone} text-white flex items-center justify-center shadow-soft`}><i className={k.icon}></i></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card rounded-2xl p-5 shadow-layered border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <div><h3 className="font-semibold text-slate-800">Revenue — Last 7 days</h3><p className="text-xs text-slate-400">Daily sales revenue from recorded transactions</p></div>
            <Badge tone="blue"><i className="fa-solid fa-chart-column mr-1"></i>Trend</Badge>
          </div>
          <div className="h-64"><canvas ref={chartRef}></canvas></div>
        </div>
        <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-3">Low stock alerts</h3>
          {stats.low.length+stats.out.length===0 ? <Empty icon="fa-solid fa-circle-check" title="All stocked up" sub="No items below minimum level." /> : (
            <div className="space-y-2 max-h-64 overflow-y-auto scrollbar stagger-in">
              {[...stats.out, ...stats.low].map(p => (
                <div key={p.id} className="interactive-row flex items-center justify-between p-3 rounded-xl bg-slate-50/50 transition-all">
                  <div className="min-w-0"><div className="text-sm font-medium text-slate-700 truncate">{p.name}</div><div className="text-xs text-slate-400">{p.qty} {p.unit} left · min {p.minStock}</div></div>
                  <Badge tone={p.qty<=0?'red':'amber'}>{p.qty<=0?'Out':'Low'}</Badge>
                </div>
              ))}
            </div>
          )}
          <button onClick={()=>setView('alerts')} className="mt-3 w-full text-sm text-brand-600 font-medium hover:underline">View reorder suggestions →</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-3">Recent sales</h3>
          {recent.length===0 ? <Empty icon="fa-solid fa-receipt" title="No sales yet" sub="Record a sale to see activity here." /> : (
            <div className="divide-y divide-slate-100 stagger-in">
              {recent.map(s => { const p = prodById[s.productId]; return (
                <div key={s.id} className="interactive-row flex items-center justify-between py-2.5 transition-all">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-sm"><i className="fa-solid fa-bag-shopping"></i></div>
                    <div className="min-w-0"><div className="text-sm font-medium text-slate-700 truncate">{p?.name || 'Unknown'}</div><div className="text-xs text-slate-400">{s.qty} × {fmtMoney(s.price)} · {fmtDate(s.date)}</div></div>
                  </div>
                  <div className="text-sm font-semibold text-slate-800 counter">{fmtMoney(s.qty*s.price)}</div>
                </div>
              ); })}
            </div>
          )}
        </div>
        <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100">
          <h3 className="font-semibold text-slate-800 mb-3">Top selling products</h3>
          {topProducts.length===0 ? <Empty icon="fa-solid fa-trophy" title="No data yet" sub="Sales will build this list." /> : (
            <div className="space-y-3 stagger-in">
              {topProducts.map((t,i) => { const max = topProducts[0].q; return (
                <div key={t.p.id} className="interactive-row transition-all">
                  <div className="flex items-center justify-between text-sm mb-1"><span className="font-medium text-slate-700 truncate">{i+1}. {t.p.name}</span><span className="text-slate-500 counter">{fmtNum(t.q)} sold</span></div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden"><div className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" style={{width:`${(t.q/max)*100}%`}}></div></div>
                </div>
              ); })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function Inventory({ products, suppliers, supById, api }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('all');
  const [editing, setEditing] = useState(null);
  const [open, setOpen] = useState(false);
  const cats = useMemo(() => ['all', ...Array.from(new Set(products.map(p=>p.category)))], [products]);
  const filtered = useMemo(() => products.filter(p => { const mq = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase()); const mc = cat==='all' || p.category===cat; return mq && mc; }), [products,q,cat]);
  function openNew(){ setEditing({}); setOpen(true); }
  function openEdit(p){ setEditing({...p}); setOpen(true); }
  function close(){ setOpen(false); setEditing(null); }
  function save(form){ if (!form.name || !form.sku) return; const payload = { name:form.name, sku:form.sku, category:form.category||'General', supplier:form.supplier||null, qty:Number(form.qty||0), unit:form.unit||'pcs', minStock:Number(form.minStock||0), price:Number(form.price||0), cost:Number(form.cost||0) }; if (editing && editing.id) api.updateProduct(editing.id, payload); else api.addProduct(payload); close(); }
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 max-w-md">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name or SKU..." className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm" />
          </div>
          <select value={cat} onChange={e=>setCat(e.target.value)} className="px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-brand-400 outline-none">
            {cats.map(c=> <option key={c} value={c}>{c==='all'?'All categories':c}</option>)}
          </select>
        </div>
        <Button onClick={openNew} className="magnetic ripple"><i className="fa-solid fa-plus"></i>Add product</Button>
      </div>
      <div className="glass-card rounded-2xl shadow-layered border border-slate-100 overflow-hidden">
        {filtered.length===0 ? <Empty icon="fa-solid fa-box-open" title="No products found" sub="Try a different search or add a product." /> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Product</th>
                  <th className="text-left px-5 py-3 font-semibold">Category</th>
                  <th className="text-left px-5 py-3 font-semibold">Supplier</th>
                  <th className="text-right px-5 py-3 font-semibold">Qty</th>
                  <th className="text-right px-5 py-3 font-semibold">Min</th>
                  <th className="text-right px-5 py-3 font-semibold">Price</th>
                  <th className="text-center px-5 py-3 font-semibold">Status</th>
                  <th className="text-right px-5 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(p => { const st = p.qty<=0 ? ['red','Out of stock'] : p.qty<=p.minStock ? ['amber','Low stock'] : ['green','In stock']; return (
                  <tr key={p.id} className="interactive-row magnetic border-t border-slate-100">
                    <td className="px-5 py-3"><div className="font-medium text-slate-800">{p.name}</div><div className="text-xs text-slate-400">{p.sku} · {p.unit}</div></td>
                    <td className="px-5 py-3"><Badge tone="blue">{p.category}</Badge></td>
                    <td className="px-5 py-3 text-slate-500 text-xs">{supById[p.supplier]?.name || '—'}</td>
                    <td className="px-5 py-3 text-right font-semibold text-slate-800 counter">{fmtNum(p.qty)}</td>
                    <td className="px-5 py-3 text-right text-slate-500">{fmtNum(p.minStock)}</td>
                    <td className="px-5 py-3 text-right text-slate-700">{fmtMoney(p.price)}</td>
                    <td className="px-5 py-3 text-center"><Badge tone={st[0]}>{st[1]}</Badge></td>
                    <td className="px-5 py-3 text-right"><div className="inline-flex items-center gap-1">
                      <button title="Decrease" onClick={()=>api.adjustQty(p.id,-1)} className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-500 magnetic ripple"><i className="fa-solid fa-minus text-xs"></i></button>
                      <button title="Increase" onClick={()=>api.adjustQty(p.id,1)} className="w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-500 magnetic ripple"><i className="fa-solid fa-plus text-xs"></i></button>
                      <button title="Edit" onClick={()=>openEdit(p)} className="w-7 h-7 rounded-lg hover:bg-brand-50 text-brand-600 magnetic ripple"><i className="fa-solid fa-pen text-xs"></i></button>
                      <button title="Delete" onClick={()=>{ if(confirm('Delete '+p.name+'?')) api.deleteProduct(p.id); }} className="w-7 h-7 rounded-lg hover:bg-rose-50 text-rose-500 magnetic ripple"><i className="fa-solid fa-trash text-xs"></i></button>
                    </div></td>
                  </tr>
                ); })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Modal open={open} onClose={close} title={editing && editing.id ? 'Edit product' : 'Add product'}>
        <ProductForm initial={editing} suppliers={suppliers} onSave={save} onCancel={close} />
      </Modal>
    </div>
  );
}

function ProductForm({ initial, suppliers, onSave, onCancel }) {
  const [form, setForm] = useState(initial && initial.id ? { name:initial.name, sku:initial.sku, category:initial.category, supplier:initial.supplier, qty:initial.qty, unit:initial.unit, minStock:initial.minStock, price:initial.price, cost:initial.cost } : { name:'', sku:'', category:'Groceries', supplier:suppliers[0]?.id, qty:0, unit:'pcs', minStock:5, price:0, cost:0 });
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label="Product name" value={form.name} onChange={e=>set('name',e.target.value)} placeholder="e.g. Basmati Rice 5kg" />
        <Input label="SKU" value={form.sku} onChange={e=>set('sku',e.target.value)} placeholder="GR-001" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Input label="Category" value={form.category} onChange={e=>set('category',e.target.value)} placeholder="Groceries" />
        <Select label="Supplier" value={form.supplier||''} onChange={e=>set('supplier',e.target.value)}><option value="">None</option>{suppliers.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}</Select>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Input label="Quantity" type="number" value={form.qty} onChange={e=>set('qty',e.target.value)} />
        <Input label="Unit" value={form.unit} onChange={e=>set('unit',e.target.value)} placeholder="pcs" />
        <Input label="Min stock" type="number" value={form.minStock} onChange={e=>set('minStock',e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Input label="Selling price (₹)" type="number" value={form.price} onChange={e=>set('price',e.target.value)} />
        <Input label="Cost price (₹)" type="number" value={form.cost} onChange={e=>set('cost',e.target.value)} />
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button onClick={()=>onSave(form)}><i className="fa-solid fa-check"></i>Save</Button>
      </div>
    </div>
  );
}

function Sales({ products, sales, prodById, api, user }) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [billSale, setBillSale] = useState(null);
  const filtered = useMemo(() => { if (filter==='all') return sales; const days = Number(filter); const cutoff = Date.now() - days*86400000; return sales.filter(s => new Date(s.date).getTime() >= cutoff); }, [sales, filter]);
  const totalRevenue = filtered.reduce((a,s)=>a+s.qty*s.price,0);
  const totalQty = filtered.reduce((a,s)=>a+s.qty,0);
  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = search.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [search, products]);
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-slate-500">Showing:</span>
          {[['all','All time'],['7','Last 7 days'],['30','Last 30 days']].map(([v,l])=>(
            <button key={v} onClick={()=>setFilter(v)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition magnetic ${filter===v?'bg-brand-600 text-white':'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>{l}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 md:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products..." className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm" />
          </div>
          <Button onClick={()=>setOpen(true)} className="magnetic ripple"><i className="fa-solid fa-plus"></i>Record sale</Button>
        </div>
      </div>
      {searchResults && (
        <div className="glass-card rounded-2xl shadow-layered border border-slate-100 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500">{searchResults.length} result{searchResults.length!==1?'s':''} for "{search}"</span>
            <button onClick={()=>setSearch('')} className="text-xs text-slate-400 hover:text-brand-600 transition">Clear</button>
          </div>
          {searchResults.length===0 ? (
            <div className="text-sm text-slate-400 py-4 text-center">No products found matching "{search}"</div>
          ) : (
            <div className="space-y-1.5 max-h-48 overflow-y-auto scrollbar">
              {searchResults.map(p => (
                <div key={p.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-brand-50 transition">
                  <div>
                    <div className="text-sm font-medium text-slate-800">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.sku} · {p.category}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">{fmtNum(p.qty)} {p.unit} in stock</span>
                    <span className="text-sm font-semibold text-slate-700">{fmtMoney(p.price)}</span>
                    <Button variant="success" className="text-xs px-2.5 py-1" onClick={()=>setOpen(true)}><i className="fa-solid fa-plus"></i>Sell</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="stagger-in grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100"><div className="text-xs text-slate-500 font-medium uppercase">Transactions</div><div className="text-2xl font-bold mt-1 counter">{fmtNum(filtered.length)}</div></div>
        <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100"><div className="text-xs text-slate-500 font-medium uppercase">Units sold</div><div className="text-2xl font-bold mt-1 counter">{fmtNum(totalQty)}</div></div>
        <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100"><div className="text-xs text-slate-500 font-medium uppercase">Revenue</div><div className="text-2xl font-bold mt-1 counter">{fmtMoney(totalRevenue)}</div></div>
      </div>
      <div className="glass-card rounded-2xl shadow-layered border border-slate-100 overflow-hidden">
        {filtered.length===0 ? <Empty icon="fa-solid fa-receipt" title="No sales recorded" sub="Click 'Record sale' to log a transaction." /> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Product</th>
                  <th className="text-right px-5 py-3 font-semibold">Qty</th>
                  <th className="text-right px-5 py-3 font-semibold">Unit price</th>
                  <th className="text-right px-5 py-3 font-semibold">Total</th>
                  <th className="text-left px-5 py-3 font-semibold">Date</th>
                  <th className="text-right px-5 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(s => { const p = prodById[s.productId]; return (
                  <tr key={s.id} className="interactive-row magnetic border-t border-slate-100">
                    <td className="px-5 py-3"><div className="font-medium text-slate-800">{p?.name || 'Unknown'}</div><div className="text-xs text-slate-400">{p?.sku}</div></td>
                    <td className="px-5 py-3 text-right">{fmtNum(s.qty)}</td>
                    <td className="px-5 py-3 text-right">{fmtMoney(s.price)}</td>
                    <td className="px-5 py-3 text-right font-semibold counter">{fmtMoney(s.qty*s.price)}</td>
                    <td className="px-5 py-3 text-slate-500">{fmtDate(s.date)} <span className="text-xs text-slate-400">{new Date(s.date).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</span></td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={()=>setBillSale(s)} className="w-8 h-8 rounded-lg hover:bg-brand-50 text-brand-500 magnetic ripple" title="View bill"><i className="fa-solid fa-file-invoice text-xs"></i></button>
                        <button onClick={()=>{ if(confirm('Delete this sale and restore stock?')) api.deleteSale(s.id); }} className="w-8 h-8 rounded-lg hover:bg-rose-50 text-rose-500 magnetic ripple" title="Delete"><i className="fa-solid fa-trash text-xs"></i></button>
                      </div>
                    </td>
                  </tr>
                ); })}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Modal open={open} onClose={()=>setOpen(false)} title="Record sale">
        <SaleForm products={products} onSave={(form)=>{ const ok = api.recordSale(form); if(ok) setOpen(false); }} onCancel={()=>setOpen(false)} />
      </Modal>
      <BillModal open={!!billSale} onClose={()=>setBillSale(null)} sale={billSale} product={billSale ? prodById[billSale.productId] : null} user={user} />
    </div>
  );
}

function SaleForm({ products, onSave, onCancel }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0,16));
  const [rows, setRows] = useState(() => {
    // Start with first 5 products pre-loaded for quick selection
    return products.slice(0, 5).map((p, i) => ({
      productId: p.id,
      checked: false,
      qty: 1,
      price: p.price
    }));
  });

  const availableProducts = products.filter(p => p.qty > 0);
  const selectedCount = rows.filter(r => r.checked).length;

  function toggleRow(idx) {
    setRows(rs => rs.map((r, i) => i === idx ? {...r, checked: !r.checked} : r));
  }
  function toggleAll() {
    const allChecked = rows.every(r => r.checked);
    setRows(rs => rs.map(r => ({...r, checked: !allChecked})));
  }
  function updateRow(idx, field, val) {
    setRows(rs => rs.map((r, i) => i === idx ? {...r, [field]: val} : r));
  }
  function removeRow(idx) {
    setRows(rs => rs.filter((_, i) => i !== idx));
  }
  function addRow() {
    const unused = products.find(p => !rows.some(r => r.productId === p.id) && p.qty > 0);
    if (unused) setRows(rs => [...rs, { productId: unused.id, checked: true, qty: 1, price: unused.price }]);
    else if (rows.length < products.length) {
      const next = products.find(p => !rows.some(r => r.productId === p.id));
      if (next) setRows(rs => [...rs, { productId: next.id, checked: true, qty: 1, price: next.price }]);
    }
  }

  function handleSubmit() {
    const selected = rows.filter(r => r.checked && r.qty > 0);
    if (selected.length === 0) return;
    selected.forEach(r => {
      onSave({ productId: r.productId, qty: Number(r.qty), price: Number(r.price), date: new Date(date).toISOString() });
    });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button onClick={toggleAll} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-600 transition">
            <i className={`fa-solid ${rows.length>0 && rows.every(r=>r.checked) ? 'fa-square-check' : 'fa-square'} text-brand-500`}></i>
            Select all
          </button>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs font-medium text-brand-600">{selectedCount} selected</span>
        </div>
        <button onClick={addRow} className="text-xs text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1 transition">
          <i className="fa-solid fa-plus"></i> Add row
        </button>
      </div>

      <div className="border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
              <tr>
                <th className="text-left px-3 py-2.5 font-semibold w-10"></th>
                <th className="text-left px-3 py-2.5 font-semibold">Product</th>
                <th className="text-right px-3 py-2.5 font-semibold w-24">In stock</th>
                <th className="text-center px-3 py-2.5 font-semibold w-20">Qty</th>
                <th className="text-center px-3 py-2.5 font-semibold w-28">Price ₹</th>
                <th className="px-3 py-2.5 w-10"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => {
                const p = products.find(x => x.id === r.productId);
                if (!p) return null;
                return (
                  <tr key={idx} className={`border-t border-slate-100 transition ${r.checked ? 'bg-brand-50/40' : 'bg-white'}`}>
                    <td className="px-3 py-2">
                      <input type="checkbox" checked={r.checked} onChange={() => toggleRow(idx)} className="w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500 cursor-pointer" />
                    </td>
                    <td className="px-3 py-2">
                      <div className="font-medium text-slate-800 text-sm">{p.name}</div>
                      <div className="text-xs text-slate-400">{p.sku}</div>
                    </td>
                    <td className="px-3 py-2 text-right text-slate-500 text-xs">{fmtNum(p.qty)} {p.unit}</td>
                    <td className="px-3 py-2">
                      <input type="number" min="1" max={p.qty} value={r.qty} onChange={e => updateRow(idx, 'qty', e.target.value)} className="w-16 px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-center text-sm focus:border-brand-400 focus:outline-none" />
                    </td>
                    <td className="px-3 py-2">
                      <input type="number" min="0" value={r.price} onChange={e => updateRow(idx, 'price', e.target.value)} className="w-20 px-2 py-1.5 rounded-lg border border-slate-200 bg-white text-center text-sm focus:border-brand-400 focus:outline-none" />
                    </td>
                    <td className="px-3 py-2 text-center">
                      <button onClick={() => removeRow(idx)} className="w-7 h-7 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition"><i className="fa-solid fa-xmark text-xs"></i></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {rows.length === 0 && (
          <div className="py-8 text-center text-sm text-slate-400">
            <i className="fa-solid fa-inbox text-2xl mb-2 block"></i>
            No rows. Click "Add row" to start.
          </div>
        )}
      </div>

      <div className="mt-4">
        <Input label="Date & time" type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} />
      </div>

      {selectedCount > 0 && (
        <div className="mt-3 p-3 rounded-xl bg-brand-50 border border-brand-100 text-xs text-brand-700">
          <i className="fa-solid fa-circle-info mr-1"></i> {selectedCount} item{selectedCount!==1?'s':''} will be recorded with stock auto-deducted.
        </div>
      )}

      <div className="flex justify-end gap-2 mt-4">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button onClick={handleSubmit} disabled={selectedCount===0} className="magnetic ripple">
          <i className="fa-solid fa-check"></i> Record {selectedCount>0 ? `${selectedCount} item${selectedCount!==1?'s':''}` : 'sale'}
        </Button>
      </div>
    </div>
  );
}

function Suppliers({ suppliers, products, api }) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  function openNew(){ setEditing({}); setOpen(true); }
  function openEdit(s){ setEditing({...s}); setOpen(true); }
  function close(){ setOpen(false); setEditing(null); }
  function save(form){ if (!form.name) return; const payload = { name:form.name, contact:form.contact, phone:form.phone, email:form.email, city:form.city, notes:form.notes }; if (editing && editing.id) api.updateSupplier(editing.id, payload); else api.addSupplier(payload); close(); }
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-slate-500">{suppliers.length} supplier{suppliers.length!==1?'s':''}</p>
        <Button onClick={openNew} className="magnetic ripple"><i className="fa-solid fa-plus"></i>Add supplier</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 stagger-in">
        {suppliers.map(s => {
          const prodCount = products.filter(p=>p.supplier===s.id).length;
          return (
            <div key={s.id} className="glass-card magnetic rounded-2xl p-5 shadow-layered border border-slate-100 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center"><i className="fa-solid fa-truck"></i></div>
                <div className="flex gap-1">
                  <button onClick={()=>openEdit(s)} className="w-8 h-8 rounded-lg hover:bg-brand-50 text-brand-600 magnetic ripple"><i className="fa-solid fa-pen text-xs"></i></button>
                  <button onClick={()=>{ if(confirm('Delete supplier "'+s.name+'"?')) api.deleteSupplier(s.id); }} className="w-8 h-8 rounded-lg hover:bg-rose-50 text-rose-500 magnetic ripple"><i className="fa-solid fa-trash text-xs"></i></button>
                </div>
              </div>
              <div className="font-semibold text-slate-800 mb-1">{s.name}</div>
              <div className="text-xs text-slate-500 space-y-1">
                {s.contact && <div><i className="fa-solid fa-user w-4 mr-1"></i>{s.contact}</div>}
                {s.phone && <div><i className="fa-solid fa-phone w-4 mr-1"></i>{s.phone}</div>}
                {s.email && <div><i className="fa-solid fa-at w-4 mr-1"></i>{s.email}</div>}
                {s.city && <div><i className="fa-solid fa-location-dot w-4 mr-1"></i>{s.city}</div>}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{prodCount} product{prodCount!==1?'s':''}</span>
                <Badge tone="green">Active</Badge>
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={open} onClose={close} title={editing && editing.id ? 'Edit supplier' : 'Add supplier'}>
        <div className="space-y-4">
          <Input label="Supplier name" value={editing?.name||''} onChange={e=>setEditing({...editing,name:e.target.value})} placeholder="e.g. FreshMart Distributors" />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Contact person" value={editing?.contact||''} onChange={e=>setEditing({...editing,contact:e.target.value})} />
            <Input label="Phone" value={editing?.phone||''} onChange={e=>setEditing({...editing,phone:e.target.value})} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Email" value={editing?.email||''} onChange={e=>setEditing({...editing,email:e.target.value})} />
            <Input label="City" value={editing?.city||''} onChange={e=>setEditing({...editing,city:e.target.value})} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={close}>Cancel</Button>
            <Button onClick={()=>save(editing||{})}><i className="fa-solid fa-check"></i>Save</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function Alerts({ products, suppliers, supById, avgDailySales, api, setView, sales }) {
  const lowItems = products.filter(p => p.qty <= p.minStock);
  const reorderList = lowItems.map(p => {
    const avg = avgDailySales(p.id, 30);
    const shortfall = p.minStock - p.qty;
    const leadDemand = Math.ceil(avg * 7);
    const suggested = Math.max(0, shortfall + leadDemand);
    return { p, avg, suggested, supplier: supById[p.supplier] };
  }).sort((a,b) => (a.p.qty - a.p.minStock) - (b.p.qty - b.p.minStock));
  const demandPreview = (sales ? products.map(p => {
    const avg = avgDailySales(p.id, 7);
    const daysLeft = avg > 0 ? Math.floor(p.qty / avg) : 999;
    return { p, avg, daysLeft };
  }).filter(x => x.avg > 0).sort((a, b) => a.daysLeft - b.daysLeft).slice(0, 3) : []);
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 rounded-2xl p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl"><i className="fa-solid fa-triangle-exclamation"></i></div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800">{lowItems.length} item{lowItems.length!==1?'s':''} need attention</h3>
          <p className="text-sm text-slate-600">Products below their minimum stock level. Reorder quantities are suggested from average sales (last 30 days) plus a 7-day lead-time buffer.</p>
        </div>
      </div>
      {reorderList.length===0 ? (
        <div className="glass-card rounded-2xl shadow-layered border border-slate-100">
          <Empty icon="fa-solid fa-circle-check" title="Everything is well stocked" sub="No reorder suggestions right now." />
        </div>
      ) : (
        <div className="glass-card rounded-2xl shadow-layered border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                <tr>
                  <th className="text-left px-5 py-3 font-semibold">Product</th>
                  <th className="text-right px-5 py-3 font-semibold">On hand</th>
                  <th className="text-right px-5 py-3 font-semibold">Min stock</th>
                  <th className="text-right px-5 py-3 font-semibold">Avg / day</th>
                  <th className="text-right px-5 py-3 font-semibold">Suggested reorder</th>
                  <th className="text-left px-5 py-3 font-semibold">Supplier</th>
                  <th className="text-right px-5 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {reorderList.map(({p, avg, suggested, supplier}) => (
                  <tr key={p.id} className="interactive-row magnetic border-t border-slate-100">
                    <td className="px-5 py-3"><div className="font-medium text-slate-800">{p.name}</div><div className="text-xs text-slate-400">{p.sku}</div></td>
                    <td className="px-5 py-3 text-right font-semibold text-rose-600">{fmtNum(p.qty)}</td>
                    <td className="px-5 py-3 text-right text-slate-500">{fmtNum(p.minStock)}</td>
                    <td className="px-5 py-3 text-right text-slate-500">{avg.toFixed(2)}</td>
                    <td className="px-5 py-3 text-right"><span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-brand-100 text-brand-700 font-bold">{fmtNum(suggested)} {p.unit}</span></td>
                    <td className="px-5 py-3 text-xs text-slate-600">{supplier?.name || '—'}<div className="text-slate-400">{supplier?.phone}</div></td>
                    <td className="px-5 py-3 text-right"><Button variant="success" className="text-xs px-3 py-1.5 magnetic ripple" onClick={()=>api.adjustQty(p.id, suggested)}><i className="fa-solid fa-plus"></i>Restock</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {/* Demand forecast preview — below Low Stock & Reorder */}
      <div className="glass-card rounded-2xl p-5 shadow-layered border border-indigo-100 dark:border-indigo-900/50 bg-gradient-to-r from-indigo-50/60 via-white to-violet-50/60 dark:from-indigo-950/20 dark:via-slate-900 dark:to-violet-950/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center"><i className="fa-solid fa-wand-magic-sparkles text-sm"></i></div>
            <div>
              <div className="font-semibold text-slate-800 dark:text-slate-100 text-sm">Demand Forecast & Analysis</div>
              <div className="text-xs text-slate-500">Predicted stockouts from last 7-day sales velocity</div>
            </div>
          </div>
          {setView && <button onClick={() => setView('forecast')} className="text-sm text-brand-600 font-medium hover:underline shrink-0">Open full forecast →</button>}
        </div>
        {demandPreview.length === 0 ? (
          <div className="text-sm text-slate-500">Record sales to unlock demand predictions. <button onClick={() => setView && setView('forecast')} className="text-brand-600 font-medium hover:underline">View forecast</button></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {demandPreview.map(({ p, avg, daysLeft }) => (
              <div key={p.id} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2.5 flex items-center justify-between">
                <div className="min-w-0">
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{p.name}</div>
                  <div className="text-xs text-slate-400">{avg.toFixed(1)}/day · {daysLeft > 900 ? '∞' : daysLeft + ' days left'}</div>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-lg shrink-0 ml-2 ${daysLeft <= 7 ? 'bg-rose-100 text-rose-700' : daysLeft <= 14 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                  {daysLeft > 900 ? '∞' : daysLeft + 'd'}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PaymentModal({ open, onClose, sb, user, isPro, onActivate, onDeactivate }) {
  const [method, setMethod] = useState('upi');
  const [plan, setPlan] = useState('monthly');
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [upiId, setUpiId] = useState(() => { try { return localStorage.getItem('stockpilot.upi.id') || ''; } catch(e) { return ''; } });
  const plans = { monthly:{ name:'Monthly', price:199, period:'/mo' }, yearly:{ name:'Yearly', price:1788, period:'/yr', save:'Save 25%' } };
  const amount = plans[plan].price;
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/40 modal-backdrop"></div>
      <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-md max-h-[92vh] overflow-auto pop-in" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-800">{isPro ? 'Your Pro plan' : 'Upgrade to Pro'}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400"><i className="fa-solid fa-xmark"></i></button>
        </div>
        {isPro ? (
          <div className="p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-slate-900 flex items-center justify-center text-2xl mx-auto mb-3"><i className="fa-solid fa-crown"></i></div>
            <div className="font-semibold text-slate-800">You're on Pro 🎉</div>
            <p className="text-sm text-slate-500 mt-1">All Pro features are unlocked for this account.</p>
            <div className="bg-slate-50 rounded-xl p-4 mt-4 text-left text-sm text-slate-600">
              <ul className="space-y-1.5">
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Unlimited products &amp; suppliers</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Demand forecasting &amp; reports</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Multi-shop &amp; staff roles</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Priority support</li>
              </ul>
            </div>
            <Button className="w-full mt-5 justify-center" onClick={onClose}>Done</Button>
            <button onClick={()=>{ try { onDeactivate && onDeactivate(); } catch(e){} }} className="text-xs text-slate-400 hover:text-rose-500 mt-3">Cancel Pro (demo)</button>
          </div>
        ) : paid ? (
          <div className="p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto mb-3"><i className="fa-solid fa-check"></i></div>
            <div className="font-semibold text-slate-800">Payment received — Pro activated!</div>
            <p className="text-sm text-slate-500 mt-1">Thanks! Your Pro plan is now active on this account.</p>
            <Button className="w-full mt-5 justify-center" onClick={onClose}>Awesome</Button>
          </div>
        ) : (
          <div className="p-6">
            <div className="grid grid-cols-2 gap-3 mb-5">
              {Object.entries(plans).map(([k, p]) => (
                <button key={k} onClick={()=>setPlan(k)} className={`p-4 rounded-xl border-2 text-center transition ${plan===k?'border-brand-500 bg-brand-50':'border-slate-200 hover:border-slate-300'}`}>
                  <div className="text-sm font-medium text-slate-700">{p.name}</div>
                  <div className="text-xl font-bold text-slate-800 mt-1">₹{p.price}<span className="text-xs text-slate-400 font-normal">{p.period}</span></div>
                </button>
              ))}
            </div>
            <div className="bg-slate-50 rounded-xl p-4 mb-4 text-sm text-slate-600">
              <div className="font-medium text-slate-700 mb-2">Pro features</div>
              <ul className="space-y-1.5">
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Unlimited products &amp; suppliers</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Demand forecasting &amp; reports</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Multi-shop &amp; staff roles</li>
                <li><i className="fa-solid fa-check text-emerald-500 mr-2"></i>Priority support</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <button onClick={()=>setMethod('upi')} className={`p-3 rounded-xl border-2 text-center text-sm font-medium transition ${method==='upi'?'border-brand-500 bg-brand-50':'border-slate-200 hover:border-slate-300'}`}><i className="fa-solid fa-qrcode mr-1"></i>UPI</button>
              <button onClick={()=>setMethod('card')} className={`p-3 rounded-xl border-2 text-center text-sm font-medium transition ${method==='card'?'border-brand-500 bg-brand-50':'border-slate-200 hover:border-slate-300'}`}><i className="fa-solid fa-credit-card mr-1"></i>Card</button>
            </div>
            {method==='upi' ? (
              <div>
                <Input label="Your UPI ID (to receive payments)" value={upiId} onChange={e=>setUpiId(e.target.value)} placeholder="yourname@okhdfcbank" />
                {upiId && (
                  <div className="text-center mb-4">
                    <div className="inline-block p-3 bg-white rounded-xl border border-slate-200"><div id="upi-qr"></div></div>
                    <div className="text-xs text-slate-400 mt-2">Scan with any UPI app</div>
                  </div>
                )}
                <Button className="w-full justify-center magnetic ripple" onClick={()=>{ try { onActivate && onActivate(); } catch(e){} setPaid(true); }}><i className="fa-solid fa-check"></i>I've paid</Button>
              </div>
            ) : (
              <div>
                <Input label="Card number" placeholder="4111 1111 1111 1111" />
                <div className="grid grid-cols-2 gap-3">
                  <Input label="Expiry" placeholder="MM/YY" />
                  <Input label="CVV" placeholder="123" type="password" />
                </div>
                <Button className="w-full justify-center mt-4 magnetic ripple" onClick={()=>{ try { onActivate && onActivate(); } catch(e){} setPaid(true); }}><i className="fa-solid fa-lock"></i>Pay ₹{amount}</Button>
              </div>
            )}
            <p className="text-xs text-slate-400 mt-4 text-center">Demo mode — no real payment processed</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileModal({ open, onClose, profile, user, isPro, onSignOut }) {
  const [copied, setCopied] = useState(false);
  const p = profile || {};
  const name = p.full_name || (user && (user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name))) || 'User';
  const email = p.email || (user && user.email) || '—';
  const avatar = p.avatar_url || (user && user.user_metadata && (user.user_metadata.avatar_url || user.user_metadata.picture)) || null;
  const provider = p.provider || (user && user.app_metadata && user.app_metadata.provider) || null;
  const created = p.created_at || (user && user.created_at) || null;
  const lastSeen = p.last_seen || null;
  if (!open) return null;
  function copyId(){ try { navigator.clipboard.writeText(p.id || (user && user.id) || ''); setCopied(true); setTimeout(()=>setCopied(false), 1500); } catch(e){} }
  return (
    <Modal open={open} onClose={onClose} title="Your profile" width="max-w-md">
      <div className="relative -m-6 mb-5 px-6 pt-6 pb-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl"></div>
        <div className="relative flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-2xl font-bold overflow-hidden ring-2 ring-white/10">
            {avatar ? <img src={avatar} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" /> : (name || email || 'U').charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <div className="text-lg font-bold truncate flex items-center gap-2">
              <span className="truncate">{name}</span>
              {isPro && <span className="shrink-0 text-[10px] font-bold tracking-wide bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 px-1.5 py-0.5 rounded"><i className="fa-solid fa-crown mr-1"></i>PRO</span>}
            </div>
            <div className="text-sm text-slate-300 truncate">{email}</div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50">
          <span className="text-sm text-slate-500"><i className="fa-solid fa-crown w-4 mr-2 text-slate-400"></i>Plan</span>
          {isPro ? <Badge tone="amber"><i className="fa-solid fa-crown mr-1"></i>Pro</Badge> : <Badge tone="slate">Free</Badge>}
        </div>
        <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50">
          <span className="text-sm text-slate-500"><i className="fa-solid fa-at w-4 mr-2 text-slate-400"></i>Email</span>
          <span className="text-sm font-medium text-slate-800 truncate max-w-[60%]">{email}</span>
        </div>
        <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50">
          <span className="text-sm text-slate-500"><i className="fa-solid fa-right-to-bracket w-4 mr-2 text-slate-400"></i>Signed in with</span>
          <span className="text-sm font-medium text-slate-800 capitalize">{provider || 'Google'}</span>
        </div>
        {created && (
          <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50">
            <span className="text-sm text-slate-500"><i className="fa-solid fa-calendar w-4 mr-2 text-slate-400"></i>Member since</span>
            <span className="text-sm font-medium text-slate-800">{fmtDate(created)}</span>
          </div>
        )}
        <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50">
          <span className="text-sm text-slate-500"><i className="fa-solid fa-id-card w-4 mr-2 text-slate-400"></i>Account ID</span>
          <button onClick={copyId} className="text-sm font-mono text-slate-600 hover:text-brand-600 transition">{copied ? '✓ Copied!' : (p.id || (user && user.id) || '').slice(0,12) + '…'}</button>
        </div>
      </div>
      <div className="mt-5 p-4 rounded-xl bg-brand-50 border border-brand-100 text-xs text-brand-700">
        <i className="fa-solid fa-shield-halved mr-1"></i> Private to this account. Your inventory, sales and suppliers are isolated.
      </div>
      <div className="flex gap-2 mt-5">
        <Button variant="secondary" className="flex-1 justify-center" onClick={onClose}><i className="fa-solid fa-xmark"></i>Close</Button>
        <Button variant="danger" className="flex-1 justify-center" onClick={()=>{ try { onSignOut && onSignOut(); } catch(e){} }}><i className="fa-solid fa-right-from-bracket"></i>Sign out</Button>
      </div>
    </Modal>
  );
}

// ---------- Bill / Receipt Generator (Printable PDF) ----------
function BillModal({ open, onClose, sale, product, user }) {
  if (!open || !sale) return null;
  const invoiceNo = 'INV-' + sale.id.slice(-8).toUpperCase();
  const date = new Date(sale.date);
  const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const subtotal = sale.qty * sale.price;
  const gstRate = 18;
  const gstAmt = Math.round(subtotal * gstRate) / 100;
  const total = subtotal + gstAmt;
  const sellerName = (user && user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name)) || 'StockPilot Store';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/40 modal-backdrop"></div>
      <div className="relative bg-white rounded-2xl shadow-soft w-full max-w-lg max-h-[92vh] overflow-auto pop-in" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 no-print">
          <h3 className="text-lg font-semibold text-slate-800">Bill / Receipt</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400"><i className="fa-solid fa-xmark"></i></button>
        </div>

        {/* Printable bill */}
        <div className="p-6 bill-content">
          {/* Header */}
          <div className="text-center border-b-2 border-slate-800 pb-4 mb-4">
            <div className="text-2xl font-bold text-slate-900">StockPilot</div>
            <div className="text-sm text-slate-500">Inventory &amp; Supply Store</div>
            <div className="text-xs text-slate-400 mt-1">Tax Invoice / Receipt</div>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <div className="text-xs text-slate-400 uppercase">Invoice No</div>
              <div className="font-mono font-semibold text-slate-800">{invoiceNo}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 uppercase">Date</div>
              <div className="font-semibold text-slate-800">{dateStr}</div>
              <div className="text-xs text-slate-500">{timeStr}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase">Sold By</div>
              <div className="font-medium text-slate-700">{sellerName}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 uppercase">Payment</div>
              <div className="font-medium text-slate-700">UPI / Cash</div>
            </div>
          </div>

          {/* Items */}
          <div className="border border-slate-200 rounded-lg overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
                <tr>
                  <th className="text-left px-3 py-2">Item</th>
                  <th className="text-right px-3 py-2">Qty</th>
                  <th className="text-right px-3 py-2">Rate</th>
                  <th className="text-right px-3 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="px-3 py-2.5">
                    <div className="font-medium text-slate-800">{product?.name || 'Unknown'}</div>
                    <div className="text-xs text-slate-400">{product?.sku}</div>
                  </td>
                  <td className="px-3 py-2.5 text-right">{fmtNum(sale.qty)} {product?.unit}</td>
                  <td className="px-3 py-2.5 text-right">{fmtMoney(sale.price)}</td>
                  <td className="px-3 py-2.5 text-right font-semibold">{fmtMoney(subtotal)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-4">
            <div className="w-56 space-y-1.5 text-sm">
              <div className="flex justify-between text-slate-600"><span>Subtotal</span><span>{fmtMoney(subtotal)}</span></div>
              <div className="flex justify-between text-slate-600"><span>GST ({gstRate}%)</span><span>{fmtMoney(gstAmt)}</span></div>
              <div className="flex justify-between border-t border-slate-200 pt-1.5 text-base font-bold text-slate-900"><span>Total</span><span>{fmtMoney(total)}</span></div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-slate-400 border-t border-slate-100 pt-4">
            <div>Thank you for your business!</div>
            <div className="mt-1">Generated by StockPilot · {new Date().toLocaleString('en-IN')}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 px-6 py-4 border-t border-slate-100 no-print">
          <Button variant="secondary" className="flex-1 justify-center" onClick={onClose}><i className="fa-solid fa-xmark"></i>Close</Button>
          <Button className="flex-1 justify-center magnetic ripple" onClick={()=>window.print()}><i className="fa-solid fa-print"></i>Print / Save PDF</Button>
        </div>
      </div>
    </div>
  );
}

// ---------- Demand Forecasting & Analysis ----------
function ForecastView({ products, sales, supById, api }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Compute per-product forecast data
  const forecastData = useMemo(() => {
    return products.map(p => {
      // Daily sales for last 30 days
      const daily = [];
      for (let i = 29; i >= 0; i--) {
        const d = daysAgo(i).toDateString();
        const qty = sales.filter(s => s.productId === p.id && new Date(s.date).toDateString() === d)
          .reduce((a, s) => a + s.qty, 0);
        daily.push(qty);
      }
      const avg7 = daily.slice(-7).reduce((a, b) => a + b, 0) / 7;
      const avg30 = daily.reduce((a, b) => a + b, 0) / 30;
      const trend = avg7 > avg30 * 1.1 ? 'up' : avg7 < avg30 * 0.9 ? 'down' : 'stable';
      const trendPct = avg30 > 0 ? Math.round((avg7 - avg30) / avg30 * 100) : 0;

      // Projected demand next 14 days
      const projected = Math.ceil(avg7 * 14);
      const daysLeft = avg7 > 0 ? Math.floor(p.qty / avg7) : 999;
      const stockoutDate = avg7 > 0 ? new Date(Date.now() + daysLeft * 86400000) : null;
      const suggestedReorder = Math.max(0, Math.ceil(p.minStock + projected - p.qty));

      return { p, avg7, avg30, trend, trendPct, daily, projected, daysLeft, stockoutDate, suggestedReorder };
    }).filter(f => f.avg7 > 0 || f.p.qty > 0)
      .sort((a, b) => a.daysLeft - b.daysLeft);
  }, [products, sales]);

  // Chart: top 5 products — 14-day history + 7-day projection
  useEffect(() => {
    if (!chartRef.current) return;
    if (chartInstance.current) { chartInstance.current.destroy(); chartInstance.current = null; }
    if (forecastData.length === 0) return;

    const top5 = [...forecastData].sort((a, b) => (b.avg7 - a.avg7)).slice(0, 5);
    const labels = [];
    for (let i = 13; i >= 0; i--) labels.push(daysAgo(i).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }));
    for (let i = 1; i <= 7; i++) labels.push('+' + i + 'd');

    const datasets = top5.map((f, idx) => {
      const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
      const historical = f.daily.slice(-14);
      const proj = Math.round(f.avg7 * 10) / 10;
      const data = historical.concat(Array(7).fill(proj));
      return {
        label: f.p.name,
        data,
        borderColor: colors[idx % colors.length],
        backgroundColor: colors[idx % colors.length] + '20',
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 0,
      };
    });

    chartInstance.current = new Chart(chartRef.current, {
      type: 'line',
      data: { labels, datasets },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } } },
        scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } }
      }
    });
    return () => { if (chartInstance.current) chartInstance.current.destroy(); };
  }, [forecastData]);

const urgentCount = forecastData.filter(f => f.daysLeft <= 7).length;
const totalReorderValue = forecastData.reduce((a, f) => a + f.suggestedReorder * (f.p.cost || f.p.price), 0);
const hasSales = sales.length > 0;
const [showAll, setShowAll] = useState(false);
const visible = showAll ? forecastData : forecastData.slice(0, 9);

if (products.length === 0) {
  return (
    <div className="glass-card rounded-2xl shadow-layered border border-slate-100 dark:border-slate-800">
      <Empty icon="fa-solid fa-wand-magic-sparkles" title="No products yet" sub="Add products and record sales to unlock demand forecasting." />
    </div>
  );
}

return (
  <div className="space-y-4">
    {/* Header */}
    <div className="bg-gradient-to-r from-indigo-50 via-white to-violet-50 dark:from-indigo-950/30 dark:via-slate-900 dark:to-violet-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl p-5 flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center text-xl shrink-0"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">Demand Forecasting &amp; Analysis</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">AI-powered demand prediction based on your sales history. Plan reorders before stockouts happen.</p>
      </div>
      <div className="flex gap-3">
        <div className="text-center">
          <div className="text-2xl font-bold text-rose-600">{urgentCount}</div>
          <div className="text-xs text-slate-500">Urgent</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-brand-600">{fmtMoney(Math.round(totalReorderValue))}</div>
          <div className="text-xs text-slate-500">Reorder value</div>
        </div>
      </div>
    </div>

    {/* Forecast Chart */}
    <div className="glass-card rounded-2xl p-5 shadow-layered border border-slate-100 dark:border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-800 dark:text-slate-100">Demand Forecast — Top 5 Products</h3>
          <p className="text-xs text-slate-400">14-day history + 7-day projection (daily units)</p>
        </div>
        <Badge tone="violet"><i className="fa-solid fa-chart-line mr-1"></i>14-day forecast</Badge>
      </div>
      {forecastData.length === 0 || !hasSales ? (
        <div className="text-center py-8 text-sm text-slate-500">Not enough sales history yet — record a few sales and the forecast chart will appear here.</div>
      ) : (
        <div className="h-64"><canvas ref={chartRef}></canvas></div>
      )}
    </div>
    {!hasSales && (
      <div className="rounded-2xl p-4 border border-sky-200 bg-sky-50 text-sm text-sky-800">
        <i className="fa-solid fa-circle-info mr-1"></i> Forecast is stock-based right now (no sales recorded yet). Averages will become accurate once you record sales.
      </div>
    )}

    {/* Product Forecast Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 stagger-in">
      {visible.map(f => (
        <div key={f.p.id} className="glass-card magnetic rounded-2xl p-4 shadow-layered border border-slate-100 dark:border-slate-800 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className="min-w-0">
              <div className="font-medium text-slate-800 dark:text-slate-100 text-sm truncate">{f.p.name}</div>
              <div className="text-xs text-slate-400">{f.p.sku}</div>
            </div>
            <Badge tone={f.trend === 'up' ? 'green' : f.trend === 'down' ? 'red' : 'slate'}>
              <i className={`fa-solid fa-arrow-trend-${f.trend === 'up' ? 'up' : f.trend === 'down' ? 'down' : 'right'} mr-1`}></i>
              {f.trendPct > 0 ? '+' : ''}{f.trendPct}%
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="text-xs text-slate-400">In stock</div>
              <div className="font-bold text-slate-800 dark:text-slate-100">{fmtNum(f.p.qty)}</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="text-xs text-slate-400">Avg/day</div>
              <div className="font-bold text-slate-800 dark:text-slate-100">{f.avg7.toFixed(1)}</div>
            </div>
            <div className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800">
              <div className="text-xs text-slate-400">Days left</div>
              <div className={`font-bold ${f.daysLeft <= 7 ? 'text-rose-600' : f.daysLeft <= 14 ? 'text-amber-600' : 'text-emerald-600'}`}>
                {f.daysLeft > 900 ? '∞' : f.daysLeft}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
            <span>Projected: <b className="text-slate-700 dark:text-slate-300">{fmtNum(f.projected)}</b> / 14 days</span>
            {f.stockoutDate && <span>Stockout: <b className="text-rose-600">{fmtDate(f.stockoutDate)}</b></span>}
          </div>

          {f.suggestedReorder > 0 && (
            <Button variant="success" className="w-full justify-center text-xs py-2 magnetic ripple" onClick={() => api.adjustQty(f.p.id, f.suggestedReorder)}>
              <i className="fa-solid fa-plus"></i> Reorder {fmtNum(f.suggestedReorder)} {f.p.unit}
            </Button>
          )}
        </div>
      ))}
    </div>
    {forecastData.length > 9 && (
      <div className="text-center">
        <button onClick={() => setShowAll(!showAll)} className="text-sm text-brand-600 font-medium hover:underline">
          {showAll ? 'Show less ↑' : `Show all ${forecastData.length} products →`}
        </button>
      </div>
    )}
  </div>
  );
}

function App() {
  const [data, setData] = useState(() => ({ products: [], suppliers: [], sales: [] }));
  const [view, setView] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sbClient, setSbClient] = useState(() => window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null);
  const sbRef = useRef(sbClient);
  const [sbStatus, setSbStatus] = useState('connecting');
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [paymentModal, setPaymentModal] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('stockpilot.dark') === '1'; } catch(e) { return false; } });

  useEffect(() => {
    try { localStorage.setItem('stockpilot.dark', dark ? '1' : '0'); } catch(e) {}
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => { sbRef.current = sbClient; }, [sbClient]);
  useEffect(() => { saveData(data, user?.id || 'anon'); }, [data, user?.id]);
  useEffect(() => {
    if (!sbClient) { setAuthLoading(false); return; }
    let cancelled = false;
    const timer = setTimeout(async () => {
      try { const { data } = await sbClient.auth.getSession(); if (!cancelled) { setUser(data.session?.user || null); setAuthLoading(false); } } catch(e) { if (!cancelled) setAuthLoading(false); }
    }, 500);
    const { data: { subscription } } = sbClient.auth.onAuthStateChange((_e, session) => { if (!cancelled) setUser(session?.user || null); });
    return () => { cancelled = true; clearTimeout(timer); subscription?.unsubscribe(); };
  }, [sbClient]);
  useEffect(() => {
    const sb = sbClient; const uidUser = user?.id;
    if (!sb) { setData(loadData()); setSbStatus('local'); return; }
    if (!uidUser) { setData({ products: [], suppliers: [], sales: [] }); setSbStatus('connecting'); return; }
    let cancelled = false;
    const cached = loadCache(uidUser);
    if (cached) setData(cached);
    setSbStatus('connecting');
    const guard = setTimeout(() => { if (!cancelled) setSbStatus(s => (s === 'connecting' ? 'error' : s)); }, 8000);
    (async () => {
      try {
        let loaded = await fetchAllFromSb(sb, uidUser);
        if (cancelled) return;
        if (!loaded) { setSbStatus('error'); return; }
        setSbStatus(loaded.scoped === false ? 'setup' : 'connected');
        if (loaded.products.length === 0 && loaded.sales.length === 0) { const seed = buildSeed(uidUser); await upsertRow(sb, 'suppliers', seed.suppliers.map(s => supplierToDb(s, uidUser))); await upsertRow(sb, 'products', seed.products.map(p => productToDb(p, uidUser))); await upsertRow(sb, 'sales', seed.sales.map(s => saleToDb(s, uidUser))); loaded = { scoped: loaded.scoped, products: seed.products, suppliers: [...loaded.suppliers, ...seed.suppliers], sales: seed.sales }; }
        if (cancelled) return;
        setData(loaded);
      } catch(e) { if (!cancelled) setSbStatus('error'); }
    })();
    return () => { cancelled = true; clearTimeout(guard); };
  }, [sbClient, user]);
  const prof = profile || (user ? { id:user.id, email:user.email||null, full_name:(user.user_metadata||{}).full_name||(user.user_metadata||{}).name||null, avatar_url:(user.user_metadata||{}).avatar_url||(user.user_metadata||{}).picture||null, provider:(user.app_metadata||{}).provider||null, created_at:user.created_at||null, last_seen:null } : null);
  const proScope = user?.id || 'anon';
  useEffect(() => { setIsPro(loadPro(proScope)); }, [proScope]);
  const activatePro = useCallback(() => { savePro(proScope, true); setIsPro(true); }, [proScope]);
  const deactivatePro = useCallback(() => { savePro(proScope, false); setIsPro(false); }, [proScope]);
  const products = data.products;
  const suppliers = data.suppliers;
  const sales = data.sales;
  const supById = useMemo(() => Object.fromEntries(suppliers.map(s=>[s.id,s])), [suppliers]);
  const prodById = useMemo(() => Object.fromEntries(products.map(p=>[p.id,p])), [products]);
  const stats = useMemo(() => {
    const low = products.filter(p => p.qty <= p.minStock && p.qty > 0);
    const out = products.filter(p => p.qty <= 0);
    const value = products.reduce((a,p) => a + p.qty * (p.cost||p.price||0), 0);
    const soldToday = sales.filter(s => new Date(s.date).toDateString() === new Date().toDateString()).reduce((a,s)=>a+s.qty,0);
    const revenueToday = sales.filter(s => new Date(s.date).toDateString() === new Date().toDateString()).reduce((a,s)=>a+s.qty*s.price,0);
    const revenueAll = sales.reduce((a,s)=>a+s.qty*s.price,0);
    return { low, out, value, soldToday, revenueToday, revenueAll, totalProducts: products.length };
  }, [products, sales]);
  const avgDailySales = useCallback((productId, days=30) => { const cutoff = Date.now() - days*86400000; const sold = sales.filter(s=>s.productId===productId && new Date(s.date).getTime()>=cutoff).reduce((a,s)=>a+s.qty,0); return sold / days; }, [sales]);
  const nav = [
    { id:'dashboard', label:'Dashboard', icon:'fa-solid fa-gauge-high' },
    { id:'inventory', label:'Inventory', icon:'fa-solid fa-boxes-stacked' },
    { id:'sales', label:'Sales', icon:'fa-solid fa-cart-shopping' },
    { id:'suppliers', label:'Suppliers', icon:'fa-solid fa-truck' },
    { id:'alerts', label:'Low Stock & Reorder', icon:'fa-solid fa-triangle-exclamation' },
    { id:'forecast', label:'Demand Forecast', icon:'fa-solid fa-wand-magic-sparkles' }
  ];
  function crumb() { return nav.find(n=>n.id===view)?.label || 'Dashboard'; }
  const sbInfo = sbStatus === 'connected' ? { dot:'bg-emerald-500', text:'Synced', cls:'text-emerald-400' }
    : sbStatus === 'setup' ? { dot:'bg-amber-500', text:'Setup needed', cls:'text-amber-300' }
    : sbStatus === 'error' ? { dot:'bg-rose-500', text:'Sync failed', cls:'text-rose-300' }
    : sbStatus === 'local' ? { dot:'bg-slate-400', text:'Local only', cls:'text-slate-400' }
    : { dot:'bg-amber-500', text:'Connecting…', cls:'text-amber-300' };
  const api = {
    addProduct: (p) => { const newP = {...p, id:uid()}; setData(d=>({...d,products:[...d.products,newP]})); const sb=sbRef.current,u=user?.id; if(sb&&u) upsertRow(sb,'products',productToDb(newP,u)).catch(e=>console.error(e)); return newP; },
    updateProduct: (id, patch) => { setData(d=>{const products=d.products.map(p=>p.id===id?{...p,...patch}:p); const updated=products.find(p=>p.id===id); const sb=sbRef.current,u=user?.id; if(sb&&u&&updated) upsertRow(sb,'products',productToDb(updated,u)).catch(e=>console.error(e)); return {...d,products};}); },
    deleteProduct: (id) => { setData(d=>({...d,products:d.products.filter(p=>p.id!==id)})); const sb=sbRef.current; if(sb) deleteRow(sb,'products',id).catch(e=>console.error(e)); },
    adjustQty: (id, delta) => { setData(d=>{const products=d.products.map(p=>p.id===id?{...p,qty:Math.max(0,p.qty+delta)}:p); const updated=products.find(p=>p.id===id); const sb=sbRef.current,u=user?.id; if(sb&&u&&updated) upsertRow(sb,'products',productToDb(updated,u)).catch(e=>console.error(e)); return {...d,products};}); },
    addSupplier: (s) => { const newS={...s,id:uid()}; setData(d=>({...d,suppliers:[...d.suppliers,newS]})); const sb=sbRef.current,u=user?.id; if(sb&&u) upsertRow(sb,'suppliers',supplierToDb(newS,u)).catch(e=>console.error(e)); return newS; },
    updateSupplier: (id, patch) => { setData(d=>{const suppliers=d.suppliers.map(s=>s.id===id?{...s,...patch}:s); const updated=suppliers.find(s=>s.id===id); const sb=sbRef.current,u=user?.id; if(sb&&u&&updated) upsertRow(sb,'suppliers',supplierToDb(updated,u)).catch(e=>console.error(e)); return {...d,suppliers};}); },
    deleteSupplier: (id) => { setData(d=>({...d,suppliers:d.suppliers.filter(s=>s.id!==id),products:d.products.map(p=>p.supplier===id?{...p,supplier:null}:p)})); const sb=sbRef.current; if(sb) deleteRow(sb,'suppliers',id).catch(e=>console.error(e)); },
    recordSale: (sale) => { const p=products.find(x=>x.id===sale.productId); if(!p) return; const qty=Number(sale.qty); if(qty>p.qty) return false; const newSale={id:uid(),productId:sale.productId,qty,price:Number(sale.price),date:sale.date||new Date().toISOString()}; setData(d=>({...d,products:d.products.map(x=>x.id===sale.productId?{...x,qty:x.qty-qty}:x),sales:[newSale,...d.sales]})); const sb=sbRef.current,u=user?.id; if(sb&&u){ upsertRow(sb,'products',productToDb({...p,qty:p.qty-qty},u)).catch(e=>console.error(e)); upsertRow(sb,'sales',saleToDb(newSale,u)).catch(e=>console.error(e)); } return true; },
    deleteSale: (id) => { const s=sales.find(x=>x.id===id); if(!s) return; const p=products.find(x=>x.id===s.productId); setData(d=>({...d,products:d.products.map(pr=>pr.id===s.productId?{...pr,qty:pr.qty+s.qty}:pr),sales:d.sales.filter(x=>x.id!==id)})); const sb=sbRef.current,u=user?.id; if(sb&&u){ deleteRow(sb,'sales',id).catch(e=>console.error(e)); if(p) upsertRow(sb,'products',productToDb({...p,qty:p.qty+s.qty},u)).catch(e=>console.error(e)); } },
    reset: async () => { if(!confirm('Reset all data to sample?')) return; const sb=sbRef.current,u=user?.id; if(sb&&u){ try{ await sb.from('sales').delete().eq('user_id',u); await sb.from('products').delete().eq('user_id',u); await sb.from('suppliers').delete().eq('user_id',u); const seed=buildSeed(u); await upsertRow(sb,'suppliers',seed.suppliers.map(s=>supplierToDb(s,u))); await upsertRow(sb,'products',seed.products.map(p=>productToDb(p,u))); await upsertRow(sb,'sales',seed.sales.map(s=>saleToDb(s,u))); setData({products:seed.products,suppliers:seed.suppliers,sales:seed.sales}); }catch(e){} } else { setData(JSON.parse(JSON.stringify(seedData))); } },
    pushToSupabase: async () => { const sb=sbRef.current,u=user?.id; if(!sb||!u){alert('Sign in first.');return;} if(!confirm('Push current local data to Supabase?')) return; try{ await upsertRow(sb,'suppliers',data.suppliers.map(s=>supplierToDb(s,u))); await upsertRow(sb,'products',data.products.map(p=>productToDb(p,u))); await upsertRow(sb,'sales',data.sales.map(s=>saleToDb(s,u))); alert('Pushed to Supabase successfully.'); }catch(e){alert('Push failed: '+e.message);} },
    exportData: () => { const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='stockpilot-data.json'; a.click(); URL.revokeObjectURL(url); },
    importData: (file) => { const reader=new FileReader(); reader.onload=(e)=>{try{const d=JSON.parse(e.target.result); setData(d);}catch{alert('Invalid JSON');}}; reader.readAsText(file); }
  };
  if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"><div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-soft animate-pulse"><i className="fa-solid fa-warehouse text-xl"></i></div></div>;
  if (!user) return <LoginScreen sb={sbClient} />;
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200 flex flex-col transform ${mobileOpen?'translate-x-0':'-translate-x-full md:translate-x-0'} transition-transform slide-in`}>
        <div className="px-6 py-5 flex items-center gap-3 border-b border-white/5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-lg"><i className="fa-solid fa-warehouse text-lg"></i></div>
          <div><div className="font-bold text-white text-lg leading-tight">StockPilot</div><div className="text-xs text-slate-400">Inventory &amp; Supply</div></div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 stagger-in">
          {nav.map((n, idx) => (
            <button key={n.id} onClick={()=>{setView(n.id); setMobileOpen(false);}} className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer magnetic ${view===n.id?'bg-white/10 text-white shadow-inner':'hover:bg-white/5 text-slate-300'}`} style={{ transitionDelay: `${idx * 40}ms` }}>
              <i className={`${n.icon} w-5 text-center`}></i>
              <span className="flex-1 text-left truncate">{n.label}</span>
              {n.id==='alerts' && stats.low.length+stats.out.length>0 && <span className="bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{stats.low.length+stats.out.length}</span>}
            </button>
          ))}
        </nav>
        <div className="px-4 py-4 border-t border-white/5 space-y-2">
          <button onClick={()=>setProfileOpen(true)} className="w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-white/5 transition text-left">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-sm font-bold overflow-hidden shrink-0 ring-2 ring-white/10">
              {prof?.avatar_url ? <img src={prof.avatar_url} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" /> : (prof?.full_name || prof?.email || 'U').charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-white truncate flex items-center gap-1.5">
                <span className="truncate">{prof?.full_name || 'User'}</span>
                {isPro && <span className="shrink-0 text-[9px] font-bold tracking-wide bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 px-1.5 py-0.5 rounded">PRO</span>}
              </div>
              <div className="text-xs text-slate-400 truncate">{prof?.email || 'Signed in'}</div>
            </div>
            <i className="fa-solid fa-chevron-right text-[10px] text-slate-500"></i>
          </button>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs" title={sbInfo.tip}>
            <span className={`w-2 h-2 rounded-full ${sbInfo.dot}`}></span>
            <span className={sbInfo.cls}>{sbInfo.text}</span>
          </div>
          <button onClick={api.pushToSupabase} className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 transition"><i className="fa-solid fa-cloud-arrow-up"></i>Push local data to DB</button>
          <button onClick={api.exportData} className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 transition"><i className="fa-solid fa-download"></i>Export data (JSON)</button>
          <label className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 transition cursor-pointer"><i className="fa-solid fa-upload"></i>Import data<input type="file" accept="application/json" className="hidden" onChange={e=>{ if(e.target.files[0]) api.importData(e.target.files[0]); e.target.value='';}}/></label>
          <button onClick={api.reset} className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-400 hover:bg-white/5 transition"><i className="fa-solid fa-rotate-left"></i>Reset sample data</button>
        </div>
      </aside>
      {mobileOpen && <div className="fixed inset-0 z-30 bg-black/40 md:hidden" onClick={()=>setMobileOpen(false)}></div>}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center gap-4">
          <button className="md:hidden w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center" onClick={()=>setMobileOpen(true)}><i className="fa-solid fa-bars"></i></button>
          <div><div className="text-xs text-slate-400 font-medium">StockPilot</div><h1 className="text-xl font-bold text-slate-800 leading-tight">{crumb()}</h1></div>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={()=>setView('alerts')} className="relative w-9 h-9 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 magnetic">
              <i className="fa-solid fa-bell"></i>
              {(stats.low.length+stats.out.length)>0 && <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>}
            </button>
            <button onClick={()=>setDark(!dark)} className="w-9 h-9 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 magnetic" title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
              <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <button onClick={()=>setPaymentModal(true)} title={isPro ? 'Pro active — manage plan' : 'Upgrade to Pro'} className={`h-9 px-3 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 magnetic ${isPro ? 'bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 shadow-sm' : 'bg-gradient-to-r from-brand-500 to-brand-700 text-white hover:opacity-90'}`}>
              <i className="fa-solid fa-crown text-xs"></i><span className="hidden sm:inline">{isPro ? 'PRO' : 'Pro'}</span>
            </button>
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <button onClick={()=>setProfileOpen(true)} className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-xs font-bold overflow-hidden hover:ring-2 hover:ring-brand-300 transition magnetic" title="View profile">
                {prof?.avatar_url ? <img src={prof.avatar_url} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" /> : (prof?.full_name || prof?.email || 'U').charAt(0).toUpperCase()}
              </button>
              <span className="text-sm text-slate-600 hidden sm:inline">{prof?.full_name || prof?.email || 'User'}</span>
              <button onClick={()=>sbClient.auth.signOut()} className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 magnetic" title="Logout"><i className="fa-solid fa-right-from-bracket text-sm"></i></button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto scrollbar p-4 md:p-8">
          <div className="max-w-7xl mx-auto fade-in" key={view}>
            {view==='dashboard' && <Dashboard stats={stats} products={products} sales={sales} suppliers={suppliers} setView={setView} prodById={prodById} supById={supById} avgDailySales={avgDailySales} api={api} />}
            {view==='inventory' && <Inventory products={products} suppliers={suppliers} supById={supById} api={api} />}
            {view==='sales' && <Sales products={products} sales={sales} prodById={prodById} api={api} user={user} />}
            {view==='suppliers' && <Suppliers suppliers={suppliers} products={products} api={api} />}
            {view==='alerts' && <Alerts products={products} suppliers={suppliers} supById={supById} avgDailySales={avgDailySales} api={api} setView={setView} sales={sales} />}
            {view==='forecast' && <ForecastView products={products} sales={sales} supById={supById} api={api} />}
          </div>
        </main>
      </div>
      <PaymentModal open={paymentModal} onClose={()=>setPaymentModal(false)} sb={sbClient} user={user} isPro={isPro} onActivate={activatePro} onDeactivate={deactivatePro} />
      <ProfileModal open={profileOpen} onClose={()=>setProfileOpen(false)} profile={prof} user={user} isPro={isPro} onSignOut={()=>sbClient.auth.signOut()} />
      <Assistant products={products} sales={sales} stats={stats} prodById={prodById} supById={supById} setView={setView} user={user} />
    </div>
  );
}

// ---------- AI Assistant ----------
function Assistant({ products, sales, stats, prodById, supById, setView, user }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm StockPilot AI 👋 I can help with:\n• Math calculations (try '15% of 2000')\n• Product & stock info\n• Sales & revenue data\n• Navigation help\n\nWhat would you like to know?" }
  ]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, typing]);

  function getAIResponse(q) {
    const msg = q.toLowerCase().trim();

    // Math: "X% of Y"
    let m = msg.match(/(\d+(?:\.\d+)?)\s*%\s*of\s*(\d+(?:\.\d+)?)/);
    if (m) { const pct = parseFloat(m[1]), num = parseFloat(m[2]); return `✅ ${pct}% of ${fmtNum(num)} = **${fmtNum(Math.round(pct / 100 * num))}**`; }

    // Math: basic operations
    m = msg.match(/(\d+(?:\.\d+)?)\s*([+\-*/x×÷])\s*(\d+(?:\.\d+)?)/);
    if (m) {
      const a = parseFloat(m[1]), b = parseFloat(m[3]), op = m[2];
      let result = op === '+' ? a + b : op === '-' ? a - b : (op === '*' || op === 'x' || op === '×') ? a * b : b !== 0 ? a / b : 'undefined (division by zero)';
      return `✅ ${a} ${op} ${b} = **${typeof result === 'number' ? fmtNum(Math.round(result * 100) / 100) : result}**`;
    }

    // Math: "what is X" or "calculate X"
    m = msg.match(/(?:what is|calculate|calc|compute|solve)?\s*(\d+(?:\.\d+)?)\s*([+\-*/x×÷])\s*(\d+(?:\.\d+)?)/);
    if (m && !msg.includes('%')) {
      const a = parseFloat(m[1]), b = parseFloat(m[3]), op = m[2];
      let result = op === '+' ? a + b : op === '-' ? a - b : (op === '*' || op === 'x' || op === '×') ? a * b : b !== 0 ? a / b : 'undefined';
      return `✅ ${a} ${op} ${b} = **${typeof result === 'number' ? fmtNum(Math.round(result * 100) / 100) : result}**`;
    }

    // Total products
    if (msg.includes('how many products') || msg.includes('total products') || msg.includes('product count')) {
      return `📦 You have **${fmtNum(stats.totalProducts)} products** in your inventory.`;
    }

    // Low stock
    if (msg.includes('low stock') || msg.includes('which products are low') || msg.includes('out of stock')) {
      const items = [...stats.out, ...stats.low];
      if (items.length === 0) return '✅ No products are low on stock right now!';
      return `⚠️ **${items.length} product${items.length!==1?'s':''}** need attention:\n${items.map(p => `• ${p.name} — ${p.qty} ${p.unit} left`).join('\n')}\n\nGo to **Low Stock & Reorder** for suggestions.`;
    }

    // Revenue
    if (msg.includes('revenue') || msg.includes('total sales') || msg.includes('how much have i sold')) {
      return `💰 **Sales Summary:**\n• Total revenue: **${fmtMoney(Math.round(stats.revenueAll))}**\n• Today: **${fmtMoney(Math.round(stats.revenueToday))}**\n• Units sold: **${fmtNum(sales.reduce((a,s)=>a+s.qty,0))}**`;
    }

    // Top selling
    if (msg.includes('top sell') || msg.includes('best sell') || msg.includes('most sold')) {
      const map = {};
      sales.forEach(s => { map[s.productId] = (map[s.productId]||0) + s.qty; });
      const top = Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([id,q]) => ({name: prodById[id]?.name || 'Unknown', qty: q}));
      return `🏆 **Top selling products:**\n${top.map((t,i) => `${i+1}. ${t.name} — ${fmtNum(t.qty)} sold`).join('\n')}`;
    }

    // Inventory value
    if (msg.includes('inventory value') || msg.includes('stock value') || msg.includes('worth')) {
      return `💎 Your inventory is worth approximately **${fmtMoney(Math.round(stats.value))}** at cost price.`;
    }

    // Profit calculation
    if (msg.includes('profit')) {
      const revenue = stats.revenueAll;
      const cogs = sales.reduce((a,s) => a + (prodById[s.productId]?.cost||0) * s.qty, 0);
      const profit = revenue - cogs;
      const margin = revenue > 0 ? (profit / revenue * 100).toFixed(1) : 0;
      return `📈 **Profit Analysis:**\n• Revenue: ${fmtMoney(Math.round(revenue))}\n• Cost: ${fmtMoney(Math.round(cogs))}\n• **Profit: ${fmtMoney(Math.round(profit))}**\n• Margin: ${margin}%`;
    }

    // Navigation help
    if (msg.includes('how to add') || msg.includes('add product') || msg.includes('new product')) {
      return `➕ To add a product:\n1. Go to **Inventory** (left sidebar)\n2. Click **"Add product"** button\n3. Fill in name, SKU, quantity, price\n4. Click **Save**\n\nThat's it! 🎉`;
    }
    if (msg.includes('how to record') || msg.includes('add sale') || msg.includes('new sale')) {
      return `🛒 To record a sale:\n1. Go to **Sales** (left sidebar)\n2. Click **"Record sale"**\n3. Select product, enter quantity & price\n4. Click **Record**\n\nThe stock updates automatically! ✅`;
    }
    if (msg.includes('how to add supplier') || msg.includes('new supplier')) {
      return `🚛 To add a supplier:\n1. Go to **Suppliers** (left sidebar)\n2. Click **"Add supplier"**\n3. Fill in name, contact, phone\n4. Click **Save**`;
    }

    // Help
    if (msg.includes('help') || msg.includes('what can you do') || msg.includes('features')) {
      return `🤖 I can help you with:\n\n• **Math**: "15% of 2000", "100 + 50", "80/4"\n• **Inventory**: "How many products?", "Inventory value"\n• **Sales**: "Total revenue", "Top selling products"\n• **Low stock": "Which products are low?"\n• **Profit**: "Show profit"\n• **Navigation**: "How to add a product?"\n\nJust ask naturally! 😊`;
    }

    // Greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return `Hello! 👋 How can I help you today? Try asking me about your inventory, sales, or do a quick calculation!`;
    }

    // Default
    return `🤔 I'm not sure about that yet. Try asking me:\n• "15% of 2000" — for math\n• "How many products?" — for inventory\n• "Total revenue" — for sales\n• "What can you do?" — for help\n\nOr type "help" to see all my features!`;
  }

  function send() {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = getAIResponse(text);
      setMessages(m => [...m, { role: 'ai', text: reply }]);
      setTyping(false);
    }, 600);
  }

  return (
    <>
      {/* FAB */}
      <button onClick={() => setOpen(!open)} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft flex items-center justify-center text-xl magnetic" title="AI Assistant">
        <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-robot'}`}></i>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-[400px] h-[540px] max-h-[74vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden fade-in">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center"><i className="fa-solid fa-robot"></i></div>
            <div className="flex-1">
              <div className="font-semibold text-sm">StockPilot AI</div>
              <div className="text-xs text-white/70">Ask me anything about your inventory</div>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto scrollbar p-4 space-y-3 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap ${m.role === 'user' ? 'bg-brand-600 text-white rounded-br-md' : 'bg-slate-100 text-slate-700 rounded-bl-md'}`}>
                  {m.text.split('\n').map((line, j) => (
                    <span key={j}>{line.startsWith('**') ? <strong>{line.replace(/\*\*/g, '')}</strong> : line}{j < m.text.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{animationDelay:'0ms'}}></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{animationDelay:'150ms'}}></span>
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{animationDelay:'300ms'}}></span>
                </div>
              </div>
            )}
          </div>

          {/* Quick chips */}
          <div className="px-3 pt-2 pb-1 flex gap-1.5 overflow-x-auto scrollbar border-t border-slate-100">
            {['What can you do?', 'Total revenue', 'Low stock items', 'Top sellers', '15% of 2000'].map(chip => (
              <button key={chip} onClick={() => { setInput(chip); setTimeout(() => { setMessages(m => [...m, { role: 'user', text: chip }]); setTyping(true); setTimeout(() => { setMessages(m => [...m, { role: 'ai', text: getAIResponse(chip) }]); setTyping(false); }, 600); }, 50); }} className="shrink-0 text-xs px-2.5 py-1.5 rounded-full bg-brand-50 text-brand-600 hover:bg-brand-100 transition">{chip}</button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3 border-t border-slate-100">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Ask me anything..." className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-400 focus:outline-none text-sm" />
            <button onClick={send} className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition magnetic ripple"><i className="fa-solid fa-paper-plane text-sm"></i></button>
          </div>
        </div>
      )}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
