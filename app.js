function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["label"],
  _excluded2 = ["label", "children"],
  _excluded3 = ["label"],
  _excluded4 = ["children", "variant", "className"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef,
  useCallback = _React.useCallback;
var STORAGE_KEY = 'stockpilot.v1';
var SB_CONFIG_KEY = 'stockpilot.supabase.v1';

// ===== EMBEDDED CONFIG — edit these if you change projects =====
var SUPABASE_URL = 'https://ybfvkxbavmfndktpwrxz.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliZnZreGJhdm1mbmRrdHB3cnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNjU3ODgsImV4cCI6MjEwNzY0MTc4OH0.7qZ3utdkR54xGvi8qDWF6PB4j2yo850kbkha5TbN1Rc';
var RAZORPAY_KEY_ID = 'YOUR_RAZORPAY_KEY_ID'; // e.g. rzp_test_1DP5mmOlF5G5ag
// ===== DIRECT UPI (no KYC / no PAN needed to accept payments) =====
// Put YOUR UPI ID here to enable instant UPI payments (QR + app deep-link).
var UPI_ID = 'yourname@okhdfcbank'; // e.g. 9876543210@ybl  or  name@okhdfcbank
var UPI_NAME = 'StockPilot'; // shown in the payer's UPI app
// OAuth redirect: automatically uses whatever domain the app is running on
var REDIRECT_URL = window.location.origin + window.location.pathname;
// =================================================================

function getSbConfig() {
  try {
    var r = localStorage.getItem(SB_CONFIG_KEY);
    return r ? JSON.parse(r) : null;
  } catch (e) {
    return null;
  }
}
function saveSbConfig(cfg) {
  try {
    if (cfg) localStorage.setItem(SB_CONFIG_KEY, JSON.stringify(cfg));else localStorage.removeItem(SB_CONFIG_KEY);
  } catch (e) {}
}
function makeSbClient(cfg) {
  if (!cfg || !cfg.url || !cfg.key || !window.supabase) return null;
  try {
    return window.supabase.createClient(cfg.url.trim(), cfg.key.trim());
  } catch (e) {
    return null;
  }
}
function uid() {
  return Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
}
var seedData = {
  suppliers: [{
    id: 's1',
    name: 'FreshMart Distributors',
    contact: 'Ravi Kumar',
    phone: '+91 98765 43210',
    email: 'ravi@freshmart.in',
    city: 'Chennai',
    notes: 'Grocery & dairy'
  }, {
    id: 's2',
    name: 'ElectroHub Traders',
    contact: 'Priya Nair',
    phone: '+91 91234 56789',
    email: 'priya@electrohub.in',
    city: 'Bangalore',
    notes: 'Electronics accessories'
  }, {
    id: 's3',
    name: 'Stitch & Style Textiles',
    contact: 'Anand Rao',
    phone: '+91 99887 76655',
    email: 'anand@stitchstyle.in',
    city: 'Coimbatore',
    notes: 'Apparel'
  }, {
    id: 's4',
    name: 'GreenLeaf Agro',
    contact: 'Sita Devi',
    phone: '+91 90000 11122',
    email: 'sita@greenleaf.in',
    city: 'Madurai',
    notes: 'Fresh produce'
  }],
  products: [{
    id: 'p1',
    name: 'Basmati Rice 5kg',
    sku: 'GR-001',
    category: 'Groceries',
    supplier: 's1',
    qty: 42,
    unit: 'bags',
    minStock: 15,
    price: 480,
    cost: 390
  }, {
    id: 'p2',
    name: 'Sunflower Oil 1L',
    sku: 'GR-002',
    category: 'Groceries',
    supplier: 's1',
    qty: 6,
    unit: 'bottles',
    minStock: 12,
    price: 165,
    cost: 130
  }, {
    id: 'p3',
    name: 'Amul Milk 1L',
    sku: 'DA-001',
    category: 'Dairy',
    supplier: 's1',
    qty: 3,
    unit: 'packs',
    minStock: 20,
    price: 68,
    cost: 58
  }, {
    id: 'p4',
    name: 'Bluetooth Earbuds',
    sku: 'EL-101',
    category: 'Electronics',
    supplier: 's2',
    qty: 14,
    unit: 'pcs',
    minStock: 5,
    price: 1299,
    cost: 850
  }, {
    id: 'p5',
    name: 'USB-C Cable 1m',
    sku: 'EL-102',
    category: 'Electronics',
    supplier: 's2',
    qty: 0,
    unit: 'pcs',
    minStock: 10,
    price: 199,
    cost: 120
  }, {
    id: 'p6',
    name: 'Cotton T-Shirt M',
    sku: 'AP-201',
    category: 'Apparel',
    supplier: 's3',
    qty: 28,
    unit: 'pcs',
    minStock: 10,
    price: 349,
    cost: 210
  }, {
    id: 'p7',
    name: 'Denim Jeans 32',
    sku: 'AP-202',
    category: 'Apparel',
    supplier: 's3',
    qty: 4,
    unit: 'pcs',
    minStock: 6,
    price: 1499,
    cost: 950
  }, {
    id: 'p8',
    name: 'Apple (Kg)',
    sku: 'PR-301',
    category: 'Produce',
    supplier: 's4',
    qty: 18,
    unit: 'kg',
    minStock: 8,
    price: 180,
    cost: 130
  }, {
    id: 'p9',
    name: 'Tomato (Kg)',
    sku: 'PR-302',
    category: 'Produce',
    supplier: 's4',
    qty: 2,
    unit: 'kg',
    minStock: 5,
    price: 60,
    cost: 35
  }, {
    id: 'p10',
    name: 'Instant Noodles Pack',
    sku: 'GR-003',
    category: 'Groceries',
    supplier: 's1',
    qty: 55,
    unit: 'packs',
    minStock: 20,
    price: 40,
    cost: 28
  }],
  sales: function () {
    var out = [];
    var now = Date.now();
    var rows = [['p1', 2, 480], ['p3', 5, 68], ['p2', 3, 165], ['p4', 1, 1299], ['p10', 8, 40], ['p6', 2, 349], ['p1', 1, 480], ['p9', 3, 60], ['p7', 1, 1499], ['p5', 2, 199], ['p2', 4, 165], ['p8', 2, 180], ['p3', 6, 68], ['p10', 10, 40], ['p4', 2, 1299]];
    rows.forEach(function (r, i) {
      out.push({
        id: uid2(i),
        productId: r[0],
        qty: r[1],
        price: r[2],
        date: new Date(now - (i * 0.8 + 0.2) * 86400000).toISOString()
      });
    });
    return out;
  }()
};
function uid2(n) {
  return 'sale_' + n + '_' + Math.random().toString(36).slice(2, 6);
}
function storageKey(scope) {
  return STORAGE_KEY + '.' + (scope || 'anon');
}
function loadData() {
  try {
    var raw = localStorage.getItem(storageKey('anon'));
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return JSON.parse(JSON.stringify(seedData));
}
function saveData(d, scope) {
  try {
    localStorage.setItem(storageKey(scope), JSON.stringify(d));
  } catch (e) {}
}
function loadCache(scope) {
  try {
    var raw = localStorage.getItem(storageKey(scope));
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

// Per-account Pro flag (local prototype entitlement).
function proKey(scope) {
  return 'stockpilot.pro.' + (scope || 'anon');
}
function loadPro(scope) {
  try {
    return localStorage.getItem(proKey(scope)) === '1';
  } catch (e) {
    return false;
  }
}
function savePro(scope, on) {
  try {
    if (on) localStorage.setItem(proKey(scope), '1');else localStorage.removeItem(proKey(scope));
  } catch (e) {}
}
function fmtMoney(n) {
  return '₹' + Number(n || 0).toLocaleString('en-IN');
}
function fmtNum(n) {
  return Number(n || 0).toLocaleString('en-IN');
}
function fmtDate(s) {
  var d = new Date(s);
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short'
  });
}
function daysAgo(n) {
  var d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

// ---------- UI primitives ----------
function Badge(_ref) {
  var children = _ref.children,
    _ref$tone = _ref.tone,
    tone = _ref$tone === void 0 ? 'slate' : _ref$tone;
  var tones = {
    slate: 'bg-slate-100 text-slate-700',
    green: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-rose-100 text-rose-700',
    blue: 'bg-indigo-100 text-indigo-700',
    violet: 'bg-violet-100 text-violet-700'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ".concat(tones[tone])
  }, children);
}
function Modal(_ref2) {
  var open = _ref2.open,
    onClose = _ref2.onClose,
    title = _ref2.title,
    children = _ref2.children,
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? 'max-w-lg' : _ref2$width;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 fade-in",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-slate-900/40 modal-backdrop"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-2xl shadow-soft w-full ".concat(width, " max-h-[90vh] overflow-auto"),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 py-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-slate-800"
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, children)));
}
function Input(_ref3) {
  var label = _ref3.label,
    props = _objectWithoutProperties(_ref3, _excluded);
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-slate-700 mb-1.5"
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, props, {
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition ".concat(props.className || '')
  })));
}
function Select(_ref4) {
  var label = _ref4.label,
    children = _ref4.children,
    props = _objectWithoutProperties(_ref4, _excluded2);
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-slate-700 mb-1.5"
  }, label), /*#__PURE__*/React.createElement("select", _extends({}, props, {
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition ".concat(props.className || '')
  }), children));
}
function Textarea(_ref5) {
  var label = _ref5.label,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/React.createElement("div", {
    className: "mb-4"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "block text-sm font-medium text-slate-700 mb-1.5"
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({}, props, {
    className: "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm transition resize-none ".concat(props.className || '')
  })));
}
function Button(_ref6) {
  var children = _ref6.children,
    _ref6$variant = _ref6.variant,
    variant = _ref6$variant === void 0 ? 'primary' : _ref6$variant,
    _ref6$className = _ref6.className,
    className = _ref6$className === void 0 ? '' : _ref6$className,
    props = _objectWithoutProperties(_ref6, _excluded4);
  var v = {
    primary: 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm',
    secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200',
    danger: 'bg-rose-500 hover:bg-rose-600 text-white',
    ghost: 'hover:bg-slate-100 text-slate-600',
    success: 'bg-emerald-500 hover:bg-emerald-600 text-white'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition active:scale-[.98] disabled:opacity-50 ".concat(v, " ").concat(className)
  }), children);
}
function Empty(_ref7) {
  var icon = _ref7.icon,
    title = _ref7.title,
    sub = _ref7.sub;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center py-16 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center text-2xl mb-4"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-700"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-400 mt-1 max-w-xs"
  }, sub));
}

// ---------- Supabase helpers ----------
function productToDb(p, userId) {
  return {
    id: p.id,
    user_id: userId,
    name: p.name,
    sku: p.sku,
    category: p.category,
    supplier: p.supplier || null,
    qty: p.qty,
    unit: p.unit,
    min_stock: p.minStock,
    price: p.price,
    cost: p.cost
  };
}
function dbToProduct(r) {
  return {
    id: r.id,
    name: r.name,
    sku: r.sku,
    category: r.category,
    supplier: r.supplier,
    qty: r.qty,
    unit: r.unit,
    minStock: r.min_stock,
    price: r.price,
    cost: r.cost
  };
}
function supplierToDb(s, userId) {
  return {
    id: s.id,
    user_id: userId,
    name: s.name,
    contact: s.contact || null,
    phone: s.phone || null,
    email: s.email || null,
    city: s.city || null,
    notes: s.notes || null
  };
}
function dbToSupplier(r) {
  return {
    id: r.id,
    name: r.name,
    contact: r.contact,
    email: r.email,
    phone: r.phone,
    city: r.city,
    notes: r.notes
  };
}
function saleToDb(s, userId) {
  return {
    id: s.id,
    user_id: userId,
    product_id: s.productId,
    qty: s.qty,
    price: s.price,
    date: s.date
  };
}
function dbToSale(r) {
  return {
    id: r.id,
    productId: r.product_id,
    qty: r.qty,
    price: r.price,
    date: r.date
  };
}

// Build a fresh sample dataset with unique ids, owned by one user
function buildSeed(userId) {
  var supMap = {},
    prodMap = {};
  var suppliers = seedData.suppliers.map(function (s) {
    var nid = uid();
    supMap[s.id] = nid;
    return _objectSpread(_objectSpread({}, s), {}, {
      id: nid
    });
  });
  var products = seedData.products.map(function (p) {
    var nid = uid();
    prodMap[p.id] = nid;
    return _objectSpread(_objectSpread({}, p), {}, {
      id: nid,
      supplier: p.supplier ? supMap[p.supplier] : null
    });
  });
  var sales = seedData.sales.map(function (s) {
    return _objectSpread(_objectSpread({}, s), {}, {
      id: uid(),
      productId: prodMap[s.productId] || null
    });
  });
  return {
    suppliers: suppliers,
    products: products,
    sales: sales,
    userId: userId
  };
}
function fetchAllFromSb(_x, _x2) {
  return _fetchAllFromSb.apply(this, arguments);
}
function _fetchAllFromSb() {
  _fetchAllFromSb = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(sb, userId) {
    var run, _run, r, _t8, _t9;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _run = function _run3() {
            _run = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(uid) {
              var sc, _yield$Promise$all, _yield$Promise$all2, prods, sups, sales, err;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    sc = function sc(q) {
                      return uid ? q.eq('user_id', uid) : q;
                    };
                    _context9.n = 1;
                    return Promise.all([sc(sb.from('products').select('*')), sc(sb.from('suppliers').select('*')), sc(sb.from('sales').select('*'))]);
                  case 1:
                    _yield$Promise$all = _context9.v;
                    _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                    prods = _yield$Promise$all2[0];
                    sups = _yield$Promise$all2[1];
                    sales = _yield$Promise$all2[2];
                    err = prods.error || sups.error || sales.error;
                    if (!err) {
                      _context9.n = 2;
                      break;
                    }
                    return _context9.a(2, {
                      error: err
                    });
                  case 2:
                    return _context9.a(2, {
                      scoped: !!uid,
                      products: (prods.data || []).map(dbToProduct),
                      suppliers: (sups.data || []).map(dbToSupplier),
                      sales: (sales.data || []).map(dbToSale)
                    });
                }
              }, _callee9);
            }));
            return _run.apply(this, arguments);
          };
          run = function _run2(_x12) {
            return _run.apply(this, arguments);
          }; // Per-user scope first (requires the multi-user migration). Falls back gracefully
          // if the user_id column / policies aren't in place yet, so the app never hangs.
          _context0.p = 1;
          _context0.n = 2;
          return run(userId);
        case 2:
          r = _context0.v;
          _context0.n = 4;
          break;
        case 3:
          _context0.p = 3;
          _t8 = _context0.v;
          r = {
            error: _t8
          };
        case 4:
          if (!r.error) {
            _context0.n = 9;
            break;
          }
          console.warn('per-user fetch unavailable, retrying unfiltered:', r.error.message || r.error);
          _context0.p = 5;
          _context0.n = 6;
          return run(null);
        case 6:
          r = _context0.v;
          _context0.n = 8;
          break;
        case 7:
          _context0.p = 7;
          _t9 = _context0.v;
          r = {
            error: _t9
          };
        case 8:
          if (!r.error) {
            _context0.n = 9;
            break;
          }
          console.error('Supabase fetch error', r.error);
          return _context0.a(2, null);
        case 9:
          if (!r.scoped) console.warn('Running unfiltered — run supabase-migration-multiuser.sql to isolate each account.');
          return _context0.a(2, {
            scoped: r.scoped,
            products: r.products,
            suppliers: r.suppliers,
            sales: r.sales
          });
      }
    }, _callee0, null, [[5, 7], [1, 3]]);
  }));
  return _fetchAllFromSb.apply(this, arguments);
}
function upsertRow(_x3, _x4, _x5) {
  return _upsertRow.apply(this, arguments);
}
function _upsertRow() {
  _upsertRow = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(sb, table, payload) {
    var _yield$sb$from$upsert2, error;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          _context1.n = 1;
          return sb.from(table).upsert(payload);
        case 1:
          _yield$sb$from$upsert2 = _context1.v;
          error = _yield$sb$from$upsert2.error;
          if (error) console.error('upsert error', table, error);
        case 2:
          return _context1.a(2);
      }
    }, _callee1);
  }));
  return _upsertRow.apply(this, arguments);
}
function deleteRow(_x6, _x7, _x8) {
  return _deleteRow.apply(this, arguments);
} // ---------- Login Screen (Google OAuth) ----------
function _deleteRow() {
  _deleteRow = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(sb, table, id) {
    var _yield$sb$from$delete, error;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          _context10.n = 1;
          return sb.from(table)["delete"]().eq('id', id);
        case 1:
          _yield$sb$from$delete = _context10.v;
          error = _yield$sb$from$delete.error;
          if (error) console.error('delete error', table, error);
        case 2:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return _deleteRow.apply(this, arguments);
}
function LoginScreen(_ref8) {
  var sb = _ref8.sb;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  function loginWithGoogle() {
    return _loginWithGoogle.apply(this, arguments);
  }
  function _loginWithGoogle() {
    _loginWithGoogle = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$sb$auth$signIn, e, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            setError('');
            _context.p = 1;
            _context.n = 2;
            return sb.auth.signInWithOAuth({
              provider: 'google',
              options: {
                redirectTo: REDIRECT_URL
              }
            });
          case 2:
            _yield$sb$auth$signIn = _context.v;
            e = _yield$sb$auth$signIn.error;
            if (e) {
              setError(e.message);
              setLoading(false);
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setError(_t.message);
            setLoading(false);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return _loginWithGoogle.apply(this, arguments);
  }
  var features = [{
    icon: 'fa-solid fa-boxes-stacked',
    title: 'Real-time inventory',
    sub: 'Live stock levels across every product'
  }, {
    icon: 'fa-solid fa-chart-line',
    title: 'Sales analytics',
    sub: '7-day trends and top sellers at a glance'
  }, {
    icon: 'fa-solid fa-triangle-exclamation',
    title: 'Smart reorders',
    sub: 'Alerted before you ever run out'
  }, {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud synced',
    sub: 'Your own private workspace on any device'
  }];
  var chips = ['Google sign-in', 'Zero setup', 'Supabase-backed', 'Razorpay ready'];
  var marquee = ['Inventory', 'Sales', 'Suppliers', 'Low-stock alerts', 'Reorder points', 'Revenue trends', 'Top sellers', 'Multi-account'];
  var GoogleG = /*#__PURE__*/React.createElement("svg", {
    className: "w-[18px] h-[18px]",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen relative overflow-hidden bg-slate-950 text-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 grid-bg opacity-60"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-32 -left-24 w-[38rem] h-[38rem] rounded-full bg-indigo-600/30 blur-3xl blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute -bottom-40 -right-24 w-[36rem] h-[36rem] rounded-full bg-fuchsia-600/20 blur-3xl blob-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/4 left-1/2 w-80 h-80 rounded-full bg-sky-500/20 blur-3xl blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/60 pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 min-h-screen flex items-center justify-center p-5 sm:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden lg:flex flex-col gap-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4 fade-up",
    style: {
      animationDelay: '.05s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-20 h-20 rounded-full border border-dashed border-indigo-400/40 ring-spin"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 flex items-center justify-center text-white logo-pulse"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-warehouse text-xl"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold tracking-tight"
  }, "Stock", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Pilot")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 tracking-widest uppercase"
  }, "Inventory & Supply"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "text-5xl xl:text-6xl font-extrabold leading-[1.05] tracking-tight fade-up",
    style: {
      animationDelay: '.15s'
    }
  }, "Run your inventory", /*#__PURE__*/React.createElement("br", null), "on ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "autopilot")), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-slate-300 text-lg max-w-md fade-up",
    style: {
      animationDelay: '.25s'
    }
  }, "Track stock, record sales, and never miss a reorder \u2014 all in one clean, real-time dashboard.")), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4"
  }, features.map(function (f, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: f.title,
      className: "flex items-center gap-4 fade-up",
      style: {
        animationDelay: 0.35 + i * 0.12 + 's'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-11 h-11 shrink-0 rounded-2xl glass-dark border border-white/10 flex items-center justify-center text-brand-300"
    }, /*#__PURE__*/React.createElement("i", {
      className: f.icon
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold text-slate-100"
    }, f.title), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-slate-400"
    }, f.sub)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 fade-up",
    style: {
      animationDelay: '.9s'
    }
  }, chips.map(function (c) {
    return /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "text-xs px-3 py-1.5 rounded-full glass-dark border border-white/10 text-slate-300"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check text-emerald-400 mr-1.5"
    }), c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-md mx-auto fade-up",
    style: {
      animationDelay: '.2s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -inset-1 bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/30 to-sky-500/40 rounded-[2rem] blur-2xl opacity-70"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative glass rounded-[1.75rem] p-7 sm:p-9 shadow-2xl border border-white/50 fade-in2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:hidden flex flex-col items-center mb-7 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 flex items-center justify-center text-white logo-pulse mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-warehouse text-2xl"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-extrabold tracking-tight text-slate-900"
  }, "Stock", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, "Pilot")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 mt-0.5"
  }, "Inventory & Supply Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "relative flex h-2.5 w-2.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
    style: {
      animation: 'dotPulse 1.6s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-medium text-emerald-600"
  }, "Live data sync")), /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold text-slate-900 mt-2"
  }, "Welcome to StockPilot"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mt-1 mb-6"
  }, "Sign in to sync your inventory across every device."), error && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2 mb-4"
  }, error), /*#__PURE__*/React.createElement("button", {
    onClick: loginWithGoogle,
    disabled: loading,
    className: "btn-shine group w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all duration-200 shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm"
  }, loading ? /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-spinner fa-spin text-slate-700 text-xs"
  }) : GoogleG), loading ? 'Redirecting to Google…' : 'Continue with Google', !loading && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right text-xs opacity-60 group-hover:translate-x-0.5 transition-transform"
  })), /*#__PURE__*/React.createElement("div", {
    className: "mt-6 pt-5 border-t border-slate-200/70 flex items-center justify-center gap-4 text-[11px] text-slate-400"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-shield-halved mr-1 text-slate-400"
  }), "Secure OAuth"), /*#__PURE__*/React.createElement("span", {
    className: "w-1 h-1 rounded-full bg-slate-300"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lock mr-1 text-slate-400"
  }), "Private per account")))), /*#__PURE__*/React.createElement("p", {
    className: "text-center text-xs text-slate-500 mt-6 fade-in2",
    style: {
      animationDelay: '.6s'
    }
  }, "New here? Signing in creates your own private workspace automatically.")))), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:block absolute bottom-0 left-0 right-0 border-t border-white/5 py-3 overflow-hidden pointer-events-none"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee flex items-center gap-10 whitespace-nowrap text-slate-500 text-sm"
  }, [].concat(marquee, marquee).map(function (m, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle text-[5px] text-brand-500"
    }), m);
  }))));
}

// ================= AI Assistant =================
var AI_KEY_STORAGE = 'stockpilot.ai.key';
var AI_MODEL_STORAGE = 'stockpilot.ai.model';
var AI_MODEL_DEFAULT = 'gemini-2.0-flash';

// Safe arithmetic: supports + - * / ^ ( ) %, "X% of Y", sqrt/log/pow, word operators.
function safeMath(input) {
  var s = ' ' + String(input || '').toLowerCase().trim() + ' ';
  s = s.replace(/(\d+(?:\.\d+)?)\s*(?:%|percent)\s*of/g, '($1/100)*');
  s = s.replace(/\bplus\b/g, ' + ').replace(/\bminus\b/g, ' - ').replace(/\b(?:times|multiplied by|multiply by)\b/g, ' * ').replace(/\b(?:divided by|over)\b/g, ' / ').replace(/\binto\b/g, ' * ').replace(/\bsquared\b/g, ' ** 2 ').replace(/\bcubed\b/g, ' ** 3 ');
  s = s.replace(/^\s*(?:what\s+is|whats|what's|calculate|compute|solve|evaluate|how\s+much\s+is|result\s+of|value\s+of)\s*/, ' ');
  s = s.replace(/(\d+(?:\.\d+)?)\s*(?:%|percent)\b/g, '($1/100)');
  s = s.replace(/[?=,]/g, ' ');
  s = s.replace(/\bx\b/g, ' * ');
  s = s.replace(/\bsqrt\b/g, 'Math.sqrt').replace(/\babs\b/g, 'Math.abs').replace(/\bround\b/g, 'Math.round').replace(/\bfloor\b/g, 'Math.floor').replace(/\bceil\b/g, 'Math.ceil').replace(/\blog\b/g, 'Math.log').replace(/\bpow\b/g, 'Math.pow').replace(/\bpi\b/g, 'Math.PI');
  s = s.trim();
  if (!s || !/\d/.test(s)) return null;
  var allowed = /^(?:Math\.(?:sqrt|abs|round|floor|ceil|log|pow|PI)|[0-9+\-*/().^ \t,])+$/;
  if (!allowed.test(s)) return null;
  try {
    var val = Function('"use strict";return (' + s.replace(/\^/g, '**') + ');')();
    if (typeof val === 'number' && isFinite(val)) return val;
  } catch (e) {}
  return null;
}
function findProduct(query, products) {
  var stop = new Set(['how', 'many', 'of', 'the', 'is', 'are', 'do', 'i', 'have', 'stock', 'price', 'cost', 'quantity', 'qty', 'units', 'unit', 'for', 'a', 'an', 'what', 'whats', "what's", 'show', 'me', 'my', 'current', 'left', 'in', 'value', 'total', 'and', 'about', 'tell', 'info', 'details', 'much', 'is', 'it']);
  var tokens = String(query).toLowerCase().split(/[^a-z0-9]+/).filter(function (t) {
    return t && !stop.has(t);
  });
  if (!tokens.length) return null;
  var best = null,
    bestScore = 0;
  var _iterator = _createForOfIteratorHelper(products),
    _step;
  try {
    var _loop = function _loop() {
      var p = _step.value;
      var hay = (p.name + ' ' + (p.sku || '')).toLowerCase();
      var score = 0;
      tokens.forEach(function (t) {
        if (hay.includes(t)) score++;
      });
      if (score > bestScore) {
        bestScore = score;
        best = p;
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return bestScore > 0 ? best : null;
}

// The offline brain: calculations, live inventory answers, and navigation.
function assistantLocal(text, ctx) {
  var q = String(text || '').trim();
  var n = ' ' + q.toLowerCase() + ' ';
  var products = ctx.products || [],
    suppliers = ctx.suppliers || [],
    sales = ctx.sales || [];
  var prodById = ctx.prodById || {},
    supById = ctx.supById || {};
  var stats = ctx.stats || {};
  var bullet = function bullet(arr) {
    return arr.map(function (x) {
      return '• ' + x;
    }).join('\n');
  };

  // 1) Math
  var m = safeMath(q);
  if (m !== null) {
    var out = Number.isInteger(m) ? m : Math.round(m * 1e6) / 1e6;
    return {
      handled: true,
      reply: '`' + q + '` = **' + out.toLocaleString('en-IN') + '**'
    };
  }

  // 2) Navigation
  if (/\b(open|go to|goto|navigate|switch to|take me to|view|show me)\b/.test(n)) {
    var map = [['dashboard', 'dashboard'], ['inventory', 'inventory'], ['sales', 'sales'], ['supplier', 'suppliers'], ['low stock', 'alerts'], ['alert', 'alerts'], ['reorder', 'alerts'], ['out of stock', 'alerts'], ['restock', 'alerts']];
    for (var _i = 0, _map = map; _i < _map.length; _i++) {
      var _map$_i = _slicedToArray(_map[_i], 2),
        k = _map$_i[0],
        v = _map$_i[1];
      if (n.includes(k)) return {
        handled: true,
        navigate: v,
        reply: 'Opening **' + v.charAt(0).toUpperCase() + v.slice(1) + '**…'
      };
    }
  }

  // 3) Greetings / thanks
  if (/^\s*(hi|hello|hey|yo|hola|namaste|good (morning|afternoon|evening))\b/.test(n)) {
    return {
      handled: true,
      reply: 'Hi! 👋 I\'m your StockPilot assistant. Ask me about **low stock**, **inventory value**, **top sellers**, or a **calculation** like "18% of 3500".'
    };
  }
  if (/\b(thank|thanks|thank you|thx)\b/.test(n)) return {
    handled: true,
    reply: 'You\'re welcome! Anything else I can check?'
  };

  // 4) Help
  if (/\b(help|what can you do|commands|features|capabilities|what do you do)\b/.test(n)) {
    return {
      handled: true,
      reply: 'I can:\n• Do math — "18% of 3500", "sqrt(144)", "1250*4"\n• Report stock — "low stock", "out of stock", "how many units"\n• Value & sales — "inventory value", "revenue today", "top sellers", "sales today"\n• Look up items — "stock of Basmati Rice", "price of USB-C Cable"\n• Suppliers — "list suppliers", "who supplies earbuds"\n• Navigate — "open sales"'
    };
  }

  // 5) Inventory queries
  var isLow = /\b(low stock|running low|running out|reorder|restock|need to order|stock alert)\b/.test(n);
  var isOut = /\b(out of stock|out of store|zero stock|sold out|finished)\b/.test(n);
  if (isOut) {
    var _out = products.filter(function (p) {
      return p.qty <= 0;
    });
    if (!_out.length) return {
      handled: true,
      reply: 'Good news — nothing is out of stock right now. ✅'
    };
    return {
      handled: true,
      reply: '**Out of stock (' + _out.length + '):**\n' + bullet(_out.map(function (p) {
        return "".concat(p.name, " (").concat(p.sku, ") \u2014 0 ").concat(p.unit || 'units');
      }))
    };
  }
  if (isLow) {
    var low = products.filter(function (p) {
      return p.qty <= p.minStock;
    });
    if (!low.length) return {
      handled: true,
      reply: 'Everything is above its reorder level. 👍'
    };
    return {
      handled: true,
      reply: '**Need attention (' + low.length + '):**\n' + bullet(low.map(function (p) {
        return "".concat(p.name, " \u2014 ").concat(p.qty, " ").concat(p.unit || 'units', " left (min ").concat(p.minStock, ")").concat(p.qty <= 0 ? ' · OUT' : '');
      }))
    };
  }

  // total inventory value
  if (/\b(inventory value|stock value|total value|worth|net worth)\b/.test(n) || /\bvalue\b/.test(n) && /\b(inventory|stock|goods)\b/.test(n)) {
    var cost = products.reduce(function (a, p) {
      return a + p.qty * (p.cost || p.price || 0);
    }, 0);
    var retail = products.reduce(function (a, p) {
      return a + p.qty * (p.price || 0);
    }, 0);
    return {
      handled: true,
      reply: 'Inventory value is **' + fmtMoney(cost) + '** at cost (**' + fmtMoney(retail) + '** at selling price).'
    };
  }

  // counts
  if (/\bhow many products\b|\btotal products\b|\bnumber of products\b|\bproduct count\b/.test(n)) return {
    handled: true,
    reply: 'You have **' + products.length + '** products across **' + suppliers.length + '** suppliers.'
  };
  if (/\bhow many suppliers\b|\btotal suppliers\b|\bnumber of suppliers\b/.test(n)) return {
    handled: true,
    reply: 'You have **' + suppliers.length + '** suppliers.'
  };
  if (/\b(how many units|total units|total stock|units in stock|total quantity)\b/.test(n)) {
    var units = products.reduce(function (a, p) {
      return a + (p.qty || 0);
    }, 0);
    return {
      handled: true,
      reply: 'You currently hold **' + fmtNum(units) + '** units in total.'
    };
  }

  // top sellers
  if (/\b(top[- ]sell\w*|best[- ]sell\w*|most sold|top product\w*|hot selling|popular)\b/.test(n)) {
    var counts = {};
    sales.forEach(function (s) {
      counts[s.productId] = (counts[s.productId] || 0) + s.qty;
    });
    var top = Object.entries(counts).sort(function (a, b) {
      return b[1] - a[1];
    }).slice(0, 5).map(function (_ref9) {
      var _ref0 = _slicedToArray(_ref9, 2),
        id = _ref0[0],
        qty = _ref0[1];
      var p = prodById[id];
      return p ? "".concat(p.name, " \u2014 ").concat(qty, " sold") : null;
    }).filter(Boolean);
    return {
      handled: true,
      reply: top.length ? '**Top sellers:**\n' + bullet(top) : 'No sales recorded yet.'
    };
  }

  // revenue / sales
  if (/\b(revenue|earn|earning|income|total sales|sales value)\b/.test(n) || /\b(sales today|sold today|today'?s sales)\b/.test(n)) {
    var revenueAll = sales.reduce(function (a, s) {
      return a + s.qty * s.price;
    }, 0);
    var today = new Date().toDateString();
    var revenueToday = sales.filter(function (s) {
      return new Date(s.date).toDateString() === today;
    }).reduce(function (a, s) {
      return a + s.qty * s.price;
    }, 0);
    var soldToday = sales.filter(function (s) {
      return new Date(s.date).toDateString() === today;
    }).reduce(function (a, s) {
      return a + s.qty;
    }, 0);
    return {
      handled: true,
      reply: 'Today: **' + fmtMoney(revenueToday) + '** across **' + fmtNum(soldToday) + '** units.\nAll-time revenue: **' + fmtMoney(revenueAll) + '** (' + sales.length + ' transactions).'
    };
  }

  // who supplies X (must come before generic supplier listing)
  var whoSupplies = n.match(/(?:who supplies|supplier of|who is the supplier (?:of|for))\s+(.+)/);
  if (whoSupplies) {
    var p = findProduct(whoSupplies[1], products);
    if (p) {
      var s = supById[p.supplier];
      return {
        handled: true,
        reply: p.name + ' is supplied by **' + (s ? s.name : 'an unassigned supplier') + '**' + (s && s.phone ? ' (' + s.phone + ')' : '') + '.'
      };
    }
  }

  // suppliers list
  if (/\b(suppliers?|supplier list)\b/.test(n)) {
    return {
      handled: true,
      reply: suppliers.length ? '**Suppliers (' + suppliers.length + '):**\n' + bullet(suppliers.map(function (s) {
        return "".concat(s.name).concat(s.city ? ' · ' + s.city : '').concat(s.phone ? ' · ' + s.phone : '');
      })) : 'No suppliers yet.'
    };
  }

  // product lookup
  var asksProduct = /\b(stock|qty|quantity|how many|on hand|left|available|price|cost|reorder|min)\b/.test(n);
  var pq = q.replace(/^\s*(stock of|price of|cost of|how many|what is|whats|what's|show me|tell me about|about)\s*/i, '');
  var matched = asksProduct ? findProduct(pq, products) : null;
  if (matched) {
    var _s = supById[matched.supplier];
    if (/\bprice\b/.test(n)) return {
      handled: true,
      reply: matched.name + ' sells for **' + fmtMoney(matched.price) + '** (cost ' + fmtMoney(matched.cost) + ').'
    };
    if (/\bcost\b/.test(n)) return {
      handled: true,
      reply: matched.name + ' costs **' + fmtMoney(matched.cost) + '** to buy.'
    };
    if (/\b(reorder|min)\b/.test(n)) return {
      handled: true,
      reply: matched.name + ' has a reorder level of **' + matched.minStock + ' ' + (matched.unit || 'units') + '**; currently ' + matched.qty + '.'
    };
    return {
      handled: true,
      reply: '**' + matched.name + '** (' + matched.sku + ')\n' + matched.qty + ' ' + (matched.unit || 'units') + ' in stock · min ' + matched.minStock + ' · ' + fmtMoney(matched.price) + ' each' + (_s ? '\nSupplier: ' + _s.name : '')
    };
  }
  return {
    handled: false
  };
}
function askGemini(_x9, _x0, _x1, _x10) {
  return _askGemini.apply(this, arguments);
}
function _askGemini() {
  _askGemini = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(apiKey, model, systemPrompt, history) {
    var _j$candidates;
    var url, contents, res, detail, _j$error, _j, j, parts, text, _t0;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          url = 'https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent?key=' + encodeURIComponent(apiKey);
          contents = history.filter(function (m) {
            return m.role !== 'system';
          }).map(function (m) {
            return {
              role: m.role === 'assistant' ? 'model' : 'user',
              parts: [{
                text: m.text
              }]
            };
          });
          _context11.n = 1;
          return fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{
                  text: systemPrompt
                }]
              },
              contents: contents,
              generationConfig: {
                temperature: 0.6,
                maxOutputTokens: 512
              }
            })
          });
        case 1:
          res = _context11.v;
          if (res.ok) {
            _context11.n = 6;
            break;
          }
          detail = '';
          _context11.p = 2;
          _context11.n = 3;
          return res.json();
        case 3:
          _j = _context11.v;
          detail = ((_j$error = _j.error) === null || _j$error === void 0 ? void 0 : _j$error.message) || '';
          _context11.n = 5;
          break;
        case 4:
          _context11.p = 4;
          _t0 = _context11.v;
        case 5:
          throw new Error('AI request failed (' + res.status + ')' + (detail ? ': ' + detail : ''));
        case 6:
          _context11.n = 7;
          return res.json();
        case 7:
          j = _context11.v;
          parts = ((_j$candidates = j.candidates) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates[0]) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates.content) === null || _j$candidates === void 0 ? void 0 : _j$candidates.parts) || [];
          text = parts.map(function (p) {
            return p.text || '';
          }).join('').trim();
          return _context11.a(2, text || '(the model returned no text)');
      }
    }, _callee11, null, [[2, 4]]);
  }));
  return _askGemini.apply(this, arguments);
}
function renderRich(text) {
  return String(text).split('\n').map(function (ln, i) {
    var parts = ln.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: ln.trim() === '' ? 'h-2' : ''
    }, parts.map(function (p, j) {
      return p.startsWith('**') && p.endsWith('**') ? /*#__PURE__*/React.createElement("strong", {
        key: j,
        className: "font-semibold"
      }, p.slice(2, -2)) : /*#__PURE__*/React.createElement("span", {
        key: j
      }, p.replace(/`/g, ''));
    }));
  });
}
function Assistant(_ref1) {
  var products = _ref1.products,
    suppliers = _ref1.suppliers,
    sales = _ref1.sales,
    stats = _ref1.stats,
    prodById = _ref1.prodById,
    supById = _ref1.supById,
    setView = _ref1.setView,
    user = _ref1.user;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    settingsOpen = _useState8[0],
    setSettingsOpen = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    input = _useState0[0],
    setInput = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    typing = _useState10[0],
    setTyping = _useState10[1];
  var _useState11 = useState(function () {
      try {
        return localStorage.getItem(AI_KEY_STORAGE) || '';
      } catch (e) {
        return '';
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    apiKey = _useState12[0],
    setApiKey = _useState12[1];
  var _useState13 = useState(function () {
      try {
        return localStorage.getItem(AI_MODEL_STORAGE) || AI_MODEL_DEFAULT;
      } catch (e) {
        return AI_MODEL_DEFAULT;
      }
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    model = _useState14[0],
    setModel = _useState14[1];
  var _useState15 = useState(apiKey),
    _useState16 = _slicedToArray(_useState15, 2),
    keyDraft = _useState16[0],
    setKeyDraft = _useState16[1];
  var _useState17 = useState(model),
    _useState18 = _slicedToArray(_useState17, 2),
    modelDraft = _useState18[0],
    setModelDraft = _useState18[1];
  var chatKey = 'stockpilot.chat.' + ((user === null || user === void 0 ? void 0 : user.id) || 'anon');
  var _useState19 = useState(function () {
      try {
        var r = localStorage.getItem(chatKey);
        if (r) return JSON.parse(r);
      } catch (e) {}
      return [];
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    messages = _useState20[0],
    setMessages = _useState20[1];
  var scrollRef = useRef(null);
  var ctx = {
    products: products,
    suppliers: suppliers,
    sales: sales,
    stats: stats,
    prodById: prodById,
    supById: supById
  };
  var systemPrompt = useMemo(function () {
    var low = products.filter(function (p) {
      return p.qty <= p.minStock;
    });
    var value = products.reduce(function (a, p) {
      return a + p.qty * (p.cost || p.price || 0);
    }, 0);
    var revenue = sales.reduce(function (a, s) {
      return a + s.qty * s.price;
    }, 0);
    var counts = {};
    sales.forEach(function (s) {
      counts[s.productId] = (counts[s.productId] || 0) + s.qty;
    });
    var top = Object.entries(counts).sort(function (a, b) {
      return b[1] - a[1];
    }).slice(0, 3).map(function (_ref10) {
      var _prodById$id;
      var _ref11 = _slicedToArray(_ref10, 2),
        id = _ref11[0],
        q = _ref11[1];
      return (((_prodById$id = prodById[id]) === null || _prodById$id === void 0 ? void 0 : _prodById$id.name) || '?') + ' (' + q + ')';
    }).join(', ');
    return ['You are StockPilot Assistant, a concise and friendly helper inside a small-business inventory dashboard.', 'Reply in short, clear sentences. Use the ₹ symbol for money. If asked to calculate, give the exact result.', 'Prefer the live data below when the question is about the user\'s stock.', 'Live data — products: ' + products.length + ', suppliers: ' + suppliers.length + ', low-stock items: ' + low.length + ', inventory value: ' + fmtMoney(value) + ', all-time revenue: ' + fmtMoney(revenue) + ', top sellers: ' + (top || 'none') + '.', 'Low-stock items: ' + (low.map(function (p) {
      return p.name + ' (' + p.qty + '/' + p.minStock + ')';
    }).join(', ') || 'none') + '.'].join(' ');
  }, [products, suppliers, sales, prodById]);
  useEffect(function () {
    if (messages.length === 0) {
      var _user$user_metadata;
      setMessages([{
        role: 'assistant',
        text: 'Hi ' + (((user === null || user === void 0 || (_user$user_metadata = user.user_metadata) === null || _user$user_metadata === void 0 ? void 0 : _user$user_metadata.full_name) || '').split(' ')[0] || 'there') + '! 👋 I\'m your StockPilot assistant — try "low stock", "inventory value", "top sellers", or a calculation like "18% of 3500".'
      }]);
    }
  }, []);
  useEffect(function () {
    try {
      localStorage.setItem(chatKey, JSON.stringify(messages));
    } catch (e) {}
  }, [messages]);
  useEffect(function () {
    var el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open, settingsOpen]);
  var chips = ['Low stock items', 'Inventory value', 'Top sellers', 'Revenue today', 'What is 15% of 2000', 'Open sales'];
  function send(_x11) {
    return _send.apply(this, arguments);
  }
  function _send() {
    _send = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(override) {
      var text, history, local, reply, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            text = (override !== undefined ? override : input).trim();
            if (text) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            setInput('');
            history = [].concat(_toConsumableArray(messages), [{
              role: 'user',
              text: text
            }]);
            setMessages(history);
            local = assistantLocal(text, ctx);
            if (!local.handled) {
              _context2.n = 2;
              break;
            }
            if (local.navigate) {
              try {
                setView(local.navigate);
              } catch (e) {}
            }
            setMessages(function (m) {
              return [].concat(_toConsumableArray(m), [{
                role: 'assistant',
                text: local.reply
              }]);
            });
            return _context2.a(2);
          case 2:
            if (!apiKey) {
              _context2.n = 8;
              break;
            }
            setTyping(true);
            _context2.p = 3;
            _context2.n = 4;
            return askGemini(apiKey, model, systemPrompt, history.slice(-10));
          case 4:
            reply = _context2.v;
            setMessages(function (m) {
              return [].concat(_toConsumableArray(m), [{
                role: 'assistant',
                text: reply
              }]);
            });
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
            setMessages(function (m) {
              return [].concat(_toConsumableArray(m), [{
                role: 'assistant',
                text: '⚠️ ' + _t2.message + '\n\nI can still help with stock, sales, suppliers, and calculations.'
              }]);
            });
          case 6:
            _context2.p = 6;
            setTyping(false);
            return _context2.f(6);
          case 7:
            return _context2.a(2);
          case 8:
            setMessages(function (m) {
              return [].concat(_toConsumableArray(m), [{
                role: 'assistant',
                text: 'I\'m not sure about that yet. I can do **calculations** and answer **stock, sales, supplier** questions.\nTip: tap the ⚙️ gear to connect a free AI model for open-ended chat.'
              }]);
            });
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[3, 5, 6, 7]]);
    }));
    return _send.apply(this, arguments);
  }
  function saveSettings() {
    setApiKey(keyDraft.trim());
    setModel(modelDraft.trim() || AI_MODEL_DEFAULT);
    try {
      if (keyDraft.trim()) localStorage.setItem(AI_KEY_STORAGE, keyDraft.trim());else localStorage.removeItem(AI_KEY_STORAGE);
      localStorage.setItem(AI_MODEL_STORAGE, modelDraft.trim() || AI_MODEL_DEFAULT);
    } catch (e) {}
    setSettingsOpen(false);
  }
  function removeKey() {
    setApiKey('');
    setKeyDraft('');
    try {
      localStorage.removeItem(AI_KEY_STORAGE);
    } catch (e) {}
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    title: "Ask StockPilot",
    className: "fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
  }, !open && /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-0 rounded-full bg-brand-500/50 animate-ping"
  }), /*#__PURE__*/React.createElement("i", {
    className: "relative fa-solid ".concat(open ? 'fa-xmark' : 'fa-robot', " text-xl")
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-24 right-5 z-40 w-[92vw] max-w-[400px] h-[540px] max-h-[74vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3 flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-robot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-sm leading-tight"
  }, "StockPilot Assistant"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-slate-300 flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full ".concat(apiKey ? 'bg-emerald-400' : 'bg-amber-400')
  }), apiKey ? 'AI model connected' : 'Built-in (offline)')), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSettingsOpen(function (s) {
        return !s;
      });
    },
    title: "AI settings",
    className: "w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-gear text-sm"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(false);
    },
    className: "w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), settingsOpen ? /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto scrollbar p-4 space-y-3 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800"
  }, "Connect an AI model (optional)"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500"
  }, "Calculations, stock, sales and supplier questions work offline. Add a free Google Gemini API key to also chat about anything else."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-medium text-slate-600 mb-1"
  }, "Gemini API key"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: keyDraft,
    onChange: function onChange(e) {
      return setKeyDraft(e.target.value);
    },
    placeholder: "AIza...",
    className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-brand-200"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-xs font-medium text-slate-600 mb-1"
  }, "Model"), /*#__PURE__*/React.createElement("input", {
    value: modelDraft,
    onChange: function onChange(e) {
      return setModelDraft(e.target.value);
    },
    placeholder: AI_MODEL_DEFAULT,
    className: "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-brand-200"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: saveSettings,
    className: "flex-1 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800"
  }, "Save"), /*#__PURE__*/React.createElement("button", {
    onClick: removeKey,
    className: "px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50"
  }, "Remove key")), /*#__PURE__*/React.createElement("a", {
    href: "https://aistudio.google.com/app/apikey",
    target: "_blank",
    rel: "noreferrer",
    className: "block text-xs text-brand-600 hover:underline"
  }, "Get a free Gemini API key \u2192"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-amber-700 bg-amber-50 border border-amber-100 rounded-lg p-2"
  }, "Your key is stored only in this browser. For a public site, route requests through your own server so the key stays private.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    className: "flex-1 overflow-y-auto scrollbar p-4 space-y-3 bg-slate-50/60"
  }, messages.map(function (msg, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex ".concat(msg.role === 'user' ? 'justify-end' : 'justify-start')
    }, msg.role !== 'user' && /*#__PURE__*/React.createElement("div", {
      className: "w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-white flex items-center justify-center mr-2 shrink-0"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-robot text-xs"
    })), /*#__PURE__*/React.createElement("div", {
      className: "max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ".concat(msg.role === 'user' ? 'bg-slate-900 text-white rounded-br-sm' : 'bg-white text-slate-700 border border-slate-200 rounded-bl-sm')
    }, renderRich(msg.text)));
  }), typing && /*#__PURE__*/React.createElement("div", {
    className: "flex justify-start"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-7 h-7 rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 text-white flex items-center justify-center mr-2 shrink-0"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-robot text-xs"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1"
  }, [0, 1, 2].map(function (d) {
    return /*#__PURE__*/React.createElement("span", {
      key: d,
      className: "w-1.5 h-1.5 rounded-full bg-slate-400",
      style: {
        animation: 'dotPulse 1s ease-in-out infinite',
        animationDelay: d * 0.15 + 's'
      }
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "px-3 pt-2 pb-1 flex gap-1.5 overflow-x-auto scrollbar border-t border-slate-100 bg-white"
  }, chips.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return send(c);
      },
      className: "shrink-0 text-xs px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-brand-50 hover:text-brand-700 text-slate-600 transition whitespace-nowrap"
    }, c);
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 bg-white"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-end gap-2"
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: 1,
    value: input,
    onChange: function onChange(e) {
      return setInput(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    placeholder: "Ask about stock, sales, or a calculation\u2026",
    className: "flex-1 resize-none px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-brand-200 max-h-24"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return send();
    },
    disabled: typing || !input.trim(),
    className: "w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-paper-plane text-sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] text-slate-400 text-center mt-1.5"
  }, "StockPilot Assistant \xB7 answers from your live data")))));
}

// ---------- Payment Modal (Direct UPI + Razorpay card) ----------
function upiLink(upiId, amount, note) {
  var q = function q(s) {
    return encodeURIComponent(s);
  };
  return 'upi://pay?pa=' + q(upiId) + '&pn=' + q(UPI_NAME) + '&am=' + amount + '&cu=INR&tn=' + q(note) + '&tr=SP' + Date.now();
}
var UPI_ID_RE = /^[a-zA-Z0-9._-]{2,}@[a-zA-Z]{2,}$/;
function PaymentModal(_ref12) {
  var open = _ref12.open,
    onClose = _ref12.onClose,
    sb = _ref12.sb,
    user = _ref12.user,
    isPro = _ref12.isPro,
    onActivate = _ref12.onActivate,
    onDeactivate = _ref12.onDeactivate;
  var _useState21 = useState('monthly'),
    _useState22 = _slicedToArray(_useState21, 2),
    plan = _useState22[0],
    setPlan = _useState22[1];
  var _useState23 = useState('upi'),
    _useState24 = _slicedToArray(_useState23, 2),
    method = _useState24[0],
    setMethod = _useState24[1];
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    loading = _useState26[0],
    setLoading = _useState26[1];
  var _useState27 = useState(''),
    _useState28 = _slicedToArray(_useState27, 2),
    error = _useState28[0],
    setError = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    paid = _useState30[0],
    setPaid = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    copied = _useState32[0],
    setCopied = _useState32[1];
  var _useState33 = useState(function () {
      try {
        var saved = (localStorage.getItem('stockpilot.upi.id') || '').trim();
        if (saved) return saved;
      } catch (e) {}
      return UPI_ID && !/^your/i.test(UPI_ID) ? UPI_ID : '';
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    upiId = _useState34[0],
    setUpiId = _useState34[1];
  var _useState35 = useState(''),
    _useState36 = _slicedToArray(_useState35, 2),
    upiDraft = _useState36[0],
    setUpiDraft = _useState36[1];
  var qrRef = useRef(null);
  var plans = {
    monthly: {
      name: 'Monthly',
      price: 499,
      period: '/mo'
    },
    yearly: {
      name: 'Yearly',
      price: 4999,
      period: '/yr'
    }
  };
  var amount = plans[plan].price;
  var upiReady = UPI_ID_RE.test(upiId);

  // Reset transient state each time the modal opens.
  useEffect(function () {
    if (open) {
      setPaid(false);
      setError('');
    }
  }, [open]);

  // Render the UPI QR for the currently selected plan.
  useEffect(function () {
    if (!open || method !== 'upi') return;
    var el = qrRef.current;
    if (!el) return;
    el.innerHTML = '';
    if (!upiReady) return;
    var link = upiLink(upiId, amount, 'StockPilot Pro ' + plan);
    if (window.QRCode) {
      try {
        new window.QRCode(el, {
          text: link,
          width: 168,
          height: 168,
          colorDark: '#0f172a',
          colorLight: '#ffffff',
          correctLevel: window.QRCode.CorrectLevel.M
        });
      } catch (e) {
        el.innerHTML = '<div style="font-size:11px;color:#94a3b8;padding:16px">QR unavailable — use the button below</div>';
      }
    } else {
      el.innerHTML = '<div style="font-size:11px;color:#94a3b8;padding:16px">QR library not loaded — use the button below</div>';
    }
  }, [open, method, plan, amount, upiId, upiReady]);
  function pay() {
    return _pay.apply(this, arguments);
  }
  function _pay() {
    _pay = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var amt, options, rzp;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (!(!RAZORPAY_KEY_ID || RAZORPAY_KEY_ID === 'YOUR_RAZORPAY_KEY_ID')) {
              _context3.n = 1;
              break;
            }
            setError('Please set your Razorpay Key ID in index.html (RAZORPAY_KEY_ID)');
            return _context3.a(2);
          case 1:
            setLoading(true);
            setError('');
            try {
              amt = amount * 100;
              options = {
                key: RAZORPAY_KEY_ID,
                amount: amt,
                currency: 'INR',
                name: 'StockPilot',
                description: 'Pro subscription',
                handler: function handler(response) {
                  alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                  try {
                    onActivate && onActivate();
                  } catch (e) {}
                  setLoading(false);
                  onClose();
                },
                prefill: {
                  email: (user === null || user === void 0 ? void 0 : user.email) || '',
                  contact: (user === null || user === void 0 ? void 0 : user.phone) || ''
                },
                theme: {
                  color: '#6366f1'
                }
              };
              rzp = new window.Razorpay(options);
              rzp.on('payment.failed', function (response) {
                setError('Payment failed: ' + response.error.description);
                setLoading(false);
              });
              rzp.open();
            } catch (e) {
              setError(e.message);
              setLoading(false);
            }
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return _pay.apply(this, arguments);
  }
  function openUpi() {
    try {
      window.location.href = upiLink(upiId, amount, 'StockPilot Pro ' + plan);
    } catch (e) {
      setError('Could not open a UPI app on this device.');
    }
  }
  function copyLink() {
    try {
      navigator.clipboard.writeText(upiLink(upiId, amount, 'StockPilot Pro ' + plan));
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 1500);
    } catch (e) {}
  }
  function saveUpiId() {
    var v = (upiDraft || '').trim();
    if (!UPI_ID_RE.test(v)) {
      setError('Enter a valid UPI ID, e.g. 9876543210@ybl');
      return;
    }
    setError('');
    setUpiId(v);
    try {
      localStorage.setItem('stockpilot.upi.id', v);
    } catch (e) {}
  }
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 fade-in",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-slate-900/40 modal-backdrop"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-2xl shadow-soft w-full max-w-md max-h-[92vh] overflow-auto",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between px-6 py-4 border-b border-slate-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-slate-800"
  }, isPro ? 'Your Pro plan' : 'Upgrade to Pro'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }))), isPro ? /*#__PURE__*/React.createElement("div", {
    className: "p-6 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 text-slate-900 flex items-center justify-center text-2xl mx-auto mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-crown"
  })), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800"
  }, "You're on Pro \uD83C\uDF89"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mt-1"
  }, "All Pro features are unlocked for this account."), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-xl p-4 mt-4 text-left text-sm text-slate-600"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Unlimited products & suppliers"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Demand forecasting & reports"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Multi-shop & staff roles"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Priority support"))), /*#__PURE__*/React.createElement(Button, {
    className: "w-full mt-5 justify-center",
    onClick: onClose
  }, "Done"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      try {
        onDeactivate && onDeactivate();
      } catch (e) {}
    },
    className: "text-xs text-slate-400 hover:text-rose-500 mt-3"
  }, "Cancel Pro (demo)")) : paid ? /*#__PURE__*/React.createElement("div", {
    className: "p-6 text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto mb-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  })), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800"
  }, "Payment received \u2014 Pro activated!"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-500 mt-1"
  }, "Thanks! Your Pro plan is now active on this account."), /*#__PURE__*/React.createElement(Button, {
    className: "w-full mt-5 justify-center",
    onClick: onClose
  }, "Awesome")) : /*#__PURE__*/React.createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 mb-5"
  }, Object.entries(plans).map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      k = _ref14[0],
      p = _ref14[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setPlan(k);
      },
      className: "p-4 rounded-xl border-2 text-center transition ".concat(plan === k ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300')
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-medium text-slate-700"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xl font-bold text-slate-800 mt-1"
    }, "\u20B9", p.price, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400 font-normal"
    }, p.period)));
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-xl p-4 mb-4 text-sm text-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium text-slate-700 mb-2"
  }, "Pro features"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-1.5"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Unlimited products & suppliers"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Demand forecasting & reports"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Multi-shop & staff roles"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check text-emerald-500 mr-2"
  }), "Priority support"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMethod('upi');
    },
    className: "py-2 rounded-lg text-sm font-medium transition ".concat(method === 'upi' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-indian-rupee-sign mr-1.5"
  }), "UPI"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setMethod('card');
    },
    className: "py-2 rounded-lg text-sm font-medium transition ".concat(method === 'card' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-regular fa-credit-card mr-1.5"
  }), "Card")), error && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-rose-600 bg-rose-50 rounded-lg px-3 py-2 mb-3"
  }, error), method === 'upi' ? upiReady ? /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    ref: qrRef,
    className: "mx-auto w-[168px] h-[168px] flex items-center justify-center bg-white rounded-xl border border-slate-200 overflow-hidden"
  }), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-500 mt-3"
  }, "Scan with any UPI app \u2014 GPay, PhonePe, Paytm"), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-600 mt-1"
  }, "Paying ", /*#__PURE__*/React.createElement("span", {
    className: "font-semibold text-slate-800"
  }, "\u20B9", amount), " to ", /*#__PURE__*/React.createElement("span", {
    className: "font-medium"
  }, UPI_NAME)), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 mt-0.5"
  }, "UPI ID: ", upiId, " ", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setUpiDraft(upiId);
      setUpiId('');
    },
    className: "text-brand-500 hover:text-brand-600 ml-1"
  }, "change")), /*#__PURE__*/React.createElement(Button, {
    className: "w-full mt-4 justify-center",
    onClick: openUpi
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-mobile-screen-button"
  }), "Pay \u20B9", amount, " via UPI app"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-4 mt-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copyLink,
    className: "text-xs text-slate-500 hover:text-slate-700"
  }, copied ? 'Link copied!' : 'Copy payment link'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      try {
        onActivate && onActivate();
      } catch (e) {}
      setPaid(true);
    },
    className: "text-xs text-brand-600 hover:text-brand-700 font-medium"
  }, "I've paid")), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-400 mt-3"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-shield-halved mr-1"
  }), "Direct UPI \u2014 no card, no KYC needed")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    label: "Your UPI ID (to receive payments)",
    placeholder: "e.g. 9876543210@ybl",
    value: upiDraft,
    onChange: function onChange(e) {
      return setUpiDraft(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Button, {
    className: "w-full justify-center",
    onClick: saveUpiId
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }), "Save & show QR"), /*#__PURE__*/React.createElement("p", {
    className: "text-[11px] text-slate-400 mt-3 text-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-shield-halved mr-1"
  }), "Stored only in your browser. No PAN / KYC needed.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: pay,
    disabled: loading,
    className: "w-full justify-center"
  }, loading ? 'Opening checkout...' : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-lock"
  }), "Pay \u20B9", amount)), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400 text-center mt-3"
  }, "Test mode \u2014 use Razorpay test cards")))));
}

// ---------- Profile Modal ----------
function fmtFullDate(v) {
  if (!v) return '—';
  try {
    return new Date(v).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (_unused) {
    return '—';
  }
}
function ProviderBadge(_ref15) {
  var provider = _ref15.provider;
  var p = (provider || '').toLowerCase();
  var map = {
    google: {
      icon: 'fa-brands fa-google',
      label: 'Google'
    },
    github: {
      icon: 'fa-brands fa-github',
      label: 'GitHub'
    },
    email: {
      icon: 'fa-solid fa-envelope',
      label: 'Email'
    }
  };
  var it = map[p] || {
    icon: 'fa-solid fa-user',
    label: provider ? provider[0].toUpperCase() + provider.slice(1) : 'Account'
  };
  return /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement("i", {
    className: it.icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-1.5"
  }, it.label));
}
function ProfileModal(_ref16) {
  var open = _ref16.open,
    onClose = _ref16.onClose,
    profile = _ref16.profile,
    user = _ref16.user,
    isPro = _ref16.isPro,
    onSignOut = _ref16.onSignOut;
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    copied = _useState38[0],
    setCopied = _useState38[1];
  var p = profile || {};
  var name = p.full_name || user && user.user_metadata && (user.user_metadata.full_name || user.user_metadata.name) || 'User';
  var email = p.email || user && user.email || '—';
  var avatar = p.avatar_url || user && user.user_metadata && (user.user_metadata.avatar_url || user.user_metadata.picture) || null;
  var provider = p.provider || user && user.app_metadata && user.app_metadata.provider || null;
  var created = p.created_at || user && user.created_at || null;
  var lastSeen = p.last_seen || null;
  if (!open) return null;
  function copyId() {
    try {
      navigator.clipboard.writeText(p.id || user && user.id || '');
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 1500);
    } catch (e) {}
  }
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    title: "Your profile",
    width: "max-w-md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative -m-6 mb-5 px-6 pt-6 pb-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-brand-500/20 blur-2xl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "relative flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-2xl font-bold overflow-hidden ring-4 ring-white/10 shrink-0"
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    referrerPolicy: "no-referrer",
    className: "w-full h-full object-cover"
  }) : (name || email || 'U').charAt(0).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-lg font-bold truncate flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, name), isPro && /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 text-[10px] font-bold tracking-wide bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 px-1.5 py-0.5 rounded"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-crown mr-1"
  }), "PRO")), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-300 truncate"
  }, email)))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-crown w-4 mr-2 text-slate-400"
  }), "Plan"), isPro ? /*#__PURE__*/React.createElement(Badge, {
    tone: "amber"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-crown mr-1"
  }), "Pro") : /*#__PURE__*/React.createElement(Badge, {
    tone: "slate"
  }, "Free")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-at w-4 mr-2 text-slate-400"
  }), "Email"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-slate-800 truncate max-w-[60%]"
  }, email)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-right-to-bracket w-4 mr-2 text-slate-400"
  }), "Signed in with"), /*#__PURE__*/React.createElement(ProviderBadge, {
    provider: provider
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-calendar w-4 mr-2 text-slate-400"
  }), "Member since"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-slate-800"
  }, fmtFullDate(created))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-clock w-4 mr-2 text-slate-400"
  }), "Last seen"), /*#__PURE__*/React.createElement("span", {
    className: "text-sm font-medium text-slate-800"
  }, lastSeen ? new Date(lastSeen).toLocaleString() : 'Just now')), /*#__PURE__*/React.createElement("button", {
    onClick: copyId,
    className: "w-full flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-fingerprint w-4 mr-2 text-slate-400"
  }), "Account ID"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono text-slate-600 truncate max-w-[55%]"
  }, copied ? 'Copied!' : (p.id || user && user.id || '').slice(0, 18) + '…')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-2.5 py-3 px-3.5 rounded-xl bg-emerald-50 border border-emerald-100"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-shield-halved text-emerald-500 mt-0.5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-emerald-800"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-semibold"
  }, "Private to this account."), " Your inventory, sales and suppliers are isolated \u2014 no other login can see them."))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mt-6"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    className: "flex-1 justify-center",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  }), "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    className: "flex-1 justify-center",
    onClick: function onClick() {
      try {
        onSignOut && onSignOut();
      } catch (e) {}
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-right-from-bracket"
  }), "Sign out")));
}

// ---------- App ----------
function App() {
  var _useState39 = useState(function () {
      return {
        products: [],
        suppliers: [],
        sales: []
      };
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    data = _useState40[0],
    setData = _useState40[1];
  var _useState41 = useState('dashboard'),
    _useState42 = _slicedToArray(_useState41, 2),
    view = _useState42[0],
    setView = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    mobileOpen = _useState44[0],
    setMobileOpen = _useState44[1];
  var _useState45 = useState(function () {
      return window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
    }),
    _useState46 = _slicedToArray(_useState45, 2),
    sbClient = _useState46[0],
    setSbClient = _useState46[1];
  var sbRef = useRef(sbClient);
  var _useState47 = useState('connecting'),
    _useState48 = _slicedToArray(_useState47, 2),
    sbStatus = _useState48[0],
    setSbStatus = _useState48[1];
  var _useState49 = useState(null),
    _useState50 = _slicedToArray(_useState49, 2),
    user = _useState50[0],
    setUser = _useState50[1];
  var _useState51 = useState(true),
    _useState52 = _slicedToArray(_useState51, 2),
    authLoading = _useState52[0],
    setAuthLoading = _useState52[1];
  var _useState53 = useState(false),
    _useState54 = _slicedToArray(_useState53, 2),
    paymentModal = _useState54[0],
    setPaymentModal = _useState54[1];
  var _useState55 = useState(null),
    _useState56 = _slicedToArray(_useState55, 2),
    profile = _useState56[0],
    setProfile = _useState56[1]; // row from the `profiles` table
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    profileOpen = _useState58[0],
    setProfileOpen = _useState58[1];
  var _useState59 = useState(false),
    _useState60 = _slicedToArray(_useState59, 2),
    isPro = _useState60[0],
    setIsPro = _useState60[1]; // local Pro entitlement, per account

  useEffect(function () {
    sbRef.current = sbClient;
  }, [sbClient]);
  useEffect(function () {
    saveData(data, (user === null || user === void 0 ? void 0 : user.id) || 'anon');
  }, [data, user === null || user === void 0 ? void 0 : user.id]);

  // Auth state
  useEffect(function () {
    if (!sbClient) {
      setAuthLoading(false);
      return;
    }
    var cancelled = false;
    // Wait a tick for Supabase to process the #access_token in the URL
    var timer = setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _yield$sbClient$auth$, _data, _data$session, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return sbClient.auth.getSession();
          case 1:
            _yield$sbClient$auth$ = _context4.v;
            _data = _yield$sbClient$auth$.data;
            if (!cancelled) {
              setUser(((_data$session = _data.session) === null || _data$session === void 0 ? void 0 : _data$session.user) || null);
              setAuthLoading(false);
            }
            _context4.n = 3;
            break;
          case 2:
            _context4.p = 2;
            _t3 = _context4.v;
            if (!cancelled) setAuthLoading(false);
          case 3:
            return _context4.a(2);
        }
      }, _callee4, null, [[0, 2]]);
    })), 500);
    var _sbClient$auth$onAuth = sbClient.auth.onAuthStateChange(function (_e, session) {
        if (!cancelled) setUser((session === null || session === void 0 ? void 0 : session.user) || null);
      }),
      subscription = _sbClient$auth$onAuth.data.subscription;
    return function () {
      cancelled = true;
      clearTimeout(timer);
      subscription === null || subscription === void 0 || subscription.unsubscribe();
    };
  }, [sbClient]);

  // Fetch this user's data from Supabase (auto-seeds a fresh account)
  useEffect(function () {
    var sb = sbClient;
    var uidUser = user === null || user === void 0 ? void 0 : user.id;
    if (!sb) {
      setData(loadData());
      setSbStatus('local');
      return;
    }
    if (!uidUser) {
      setData({
        products: [],
        suppliers: [],
        sales: []
      });
      setSbStatus('connecting');
      return;
    }
    var cancelled = false;
    // Instant paint from this user's own cache, then refresh from the DB.
    var cached = loadCache(uidUser);
    if (cached) setData(cached);
    setSbStatus('connecting');
    // Safety net: never leave the indicator stuck on "Connecting…".
    var guard = setTimeout(function () {
      if (!cancelled) setSbStatus(function (s) {
        return s === 'connecting' ? 'error' : s;
      });
    }, 8000);
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var loaded, seed, payload, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return fetchAllFromSb(sb, uidUser);
          case 1:
            loaded = _context5.v;
            if (!cancelled) {
              _context5.n = 2;
              break;
            }
            return _context5.a(2);
          case 2:
            if (loaded) {
              _context5.n = 3;
              break;
            }
            setSbStatus('error');
            return _context5.a(2);
          case 3:
            // Connected as soon as we can read this user's rows.
            setSbStatus(loaded.scoped === false ? 'setup' : 'connected');
            // New account → seed sample data in batched writes when the user has no stock/sales yet.
            if (!(loaded.products.length === 0 && loaded.sales.length === 0)) {
              _context5.n = 7;
              break;
            }
            seed = buildSeed(uidUser); // If user_id isn't available yet (pre-migration), omit it so seeding can't fail.
            payload = function payload(row) {
              if (loaded.scoped !== false) return row;
              var c = _objectSpread({}, row);
              delete c.user_id;
              return c;
            };
            _context5.n = 4;
            return upsertRow(sb, 'suppliers', seed.suppliers.map(function (s) {
              return payload(supplierToDb(s, uidUser));
            }));
          case 4:
            _context5.n = 5;
            return upsertRow(sb, 'products', seed.products.map(function (p) {
              return payload(productToDb(p, uidUser));
            }));
          case 5:
            _context5.n = 6;
            return upsertRow(sb, 'sales', seed.sales.map(function (s) {
              return payload(saleToDb(s, uidUser));
            }));
          case 6:
            loaded = {
              scoped: loaded.scoped,
              products: seed.products,
              suppliers: [].concat(_toConsumableArray(loaded.suppliers), _toConsumableArray(seed.suppliers)),
              sales: seed.sales
            };
          case 7:
            if (!cancelled) {
              _context5.n = 8;
              break;
            }
            return _context5.a(2);
          case 8:
            setData(loaded);
            _context5.n = 10;
            break;
          case 9:
            _context5.p = 9;
            _t4 = _context5.v;
            if (!cancelled) setSbStatus('error');
          case 10:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 9]]);
    }))();
    return function () {
      cancelled = true;
      clearTimeout(guard);
    };
  }, [sbClient, user === null || user === void 0 ? void 0 : user.id]);

  // Sync the signed-in user's details into the `profiles` table and show them in the UI.
  // Fully guarded: if the table or policies aren't set up yet, the app keeps working.
  useEffect(function () {
    var sb = sbClient,
      u = user;
    if (!sb || !u || !u.id) {
      setProfile(null);
      return;
    }
    var cancelled = false;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var md, am, row, _yield$sb$from$upsert, saved, error, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            md = u.user_metadata || {};
            am = u.app_metadata || {};
            row = {
              id: u.id,
              email: u.email || null,
              full_name: md.full_name || md.name || null,
              avatar_url: md.avatar_url || md.picture || null,
              provider: am.provider || md.provider || null,
              last_seen: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }; // Ask for the stored row back so we can show created_at etc.
            _context6.n = 1;
            return sb.from('profiles').upsert(row, {
              onConflict: 'id'
            }).select().maybeSingle();
          case 1:
            _yield$sb$from$upsert = _context6.v;
            saved = _yield$sb$from$upsert.data;
            error = _yield$sb$from$upsert.error;
            if (!cancelled) {
              _context6.n = 2;
              break;
            }
            return _context6.a(2);
          case 2:
            if (error) {
              console.warn('profiles sync skipped:', error.message);
              setProfile(row); // fall back to what we know from the session
            } else {
              setProfile(saved || row);
            }
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t5 = _context6.v;
            // Never let profile syncing break the app.
            console.warn('profiles sync skipped:', _t5 && _t5.message || _t5);
            if (!cancelled) setProfile({
              id: u.id,
              email: u.email || null,
              full_name: (u.user_metadata || {}).full_name || null,
              avatar_url: (u.user_metadata || {}).avatar_url || null,
              provider: (u.app_metadata || {}).provider || null
            });
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 3]]);
    }))();
    return function () {
      cancelled = true;
    };
  }, [sbClient, user]);

  // Profile shown in the UI: preferred = the stored row, fallback = session metadata.
  var prof = profile || (user ? {
    id: user.id,
    email: user.email || null,
    full_name: (user.user_metadata || {}).full_name || (user.user_metadata || {}).name || null,
    avatar_url: (user.user_metadata || {}).avatar_url || (user.user_metadata || {}).picture || null,
    provider: (user.app_metadata || {}).provider || null,
    created_at: user.created_at || null,
    last_seen: null
  } : null);

  // Local Pro entitlement, scoped per account (so each login has its own).
  var proScope = (user === null || user === void 0 ? void 0 : user.id) || 'anon';
  useEffect(function () {
    setIsPro(loadPro(proScope));
  }, [proScope]);
  var activatePro = useCallback(function () {
    savePro(proScope, true);
    setIsPro(true);
  }, [proScope]);
  var deactivatePro = useCallback(function () {
    savePro(proScope, false);
    setIsPro(false);
  }, [proScope]);
  var products = data.products;
  var suppliers = data.suppliers;
  var sales = data.sales;
  var supById = useMemo(function () {
    return Object.fromEntries(suppliers.map(function (s) {
      return [s.id, s];
    }));
  }, [suppliers]);
  var prodById = useMemo(function () {
    return Object.fromEntries(products.map(function (p) {
      return [p.id, p];
    }));
  }, [products]);

  // computed analytics
  var stats = useMemo(function () {
    var low = products.filter(function (p) {
      return p.qty <= p.minStock && p.qty > 0;
    });
    var out = products.filter(function (p) {
      return p.qty <= 0;
    });
    var value = products.reduce(function (a, p) {
      return a + p.qty * (p.cost || p.price || 0);
    }, 0);
    var soldToday = sales.filter(function (s) {
      return new Date(s.date).toDateString() === new Date().toDateString();
    }).reduce(function (a, s) {
      return a + s.qty;
    }, 0);
    var revenueToday = sales.filter(function (s) {
      return new Date(s.date).toDateString() === new Date().toDateString();
    }).reduce(function (a, s) {
      return a + s.qty * s.price;
    }, 0);
    var revenueAll = sales.reduce(function (a, s) {
      return a + s.qty * s.price;
    }, 0);
    return {
      low: low,
      out: out,
      value: value,
      soldToday: soldToday,
      revenueToday: revenueToday,
      revenueAll: revenueAll,
      totalProducts: products.length
    };
  }, [products, sales]);
  var avgDailySales = useCallback(function (productId) {
    var days = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    var cutoff = Date.now() - days * 86400000;
    var sold = sales.filter(function (s) {
      return s.productId === productId && new Date(s.date).getTime() >= cutoff;
    }).reduce(function (a, s) {
      return a + s.qty;
    }, 0);
    return sold / days;
  }, [sales]);
  var nav = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge-high'
  }, {
    id: 'inventory',
    label: 'Inventory',
    icon: 'fa-solid fa-boxes-stacked'
  }, {
    id: 'sales',
    label: 'Sales',
    icon: 'fa-solid fa-cart-shopping'
  }, {
    id: 'suppliers',
    label: 'Suppliers',
    icon: 'fa-solid fa-truck'
  }, {
    id: 'alerts',
    label: 'Low Stock & Reorder',
    icon: 'fa-solid fa-triangle-exclamation'
  }];
  function crumb() {
    var _nav$find;
    return ((_nav$find = nav.find(function (n) {
      return n.id === view;
    })) === null || _nav$find === void 0 ? void 0 : _nav$find.label) || 'Dashboard';
  }

  // Minimal, accurate connection indicator
  var sbInfo = sbStatus === 'connected' ? {
    dot: 'bg-emerald-500',
    text: 'Synced',
    cls: 'text-emerald-400',
    tip: 'Synced with your Supabase account'
  } : sbStatus === 'setup' ? {
    dot: 'bg-amber-500',
    text: 'Setup needed',
    cls: 'text-amber-300',
    tip: 'Run supabase-migration-multiuser.sql so each account is isolated'
  } : sbStatus === 'error' ? {
    dot: 'bg-rose-500',
    text: 'Sync failed',
    cls: 'text-rose-300',
    tip: 'Could not reach Supabase'
  } : sbStatus === 'local' ? {
    dot: 'bg-slate-400',
    text: 'Local only',
    cls: 'text-slate-400',
    tip: 'Supabase not loaded — using local storage'
  } : {
    dot: 'bg-amber-500',
    text: 'Connecting…',
    cls: 'text-amber-300',
    tip: 'Connecting to Supabase'
  };

  // data mutators
  var api = {
    addProduct: function addProduct(p) {
      var newP = _objectSpread(_objectSpread({}, p), {}, {
        id: uid()
      });
      setData(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          products: [].concat(_toConsumableArray(d.products), [newP])
        });
      });
      var sb = sbRef.current,
        u = user === null || user === void 0 ? void 0 : user.id;
      if (sb && u) upsertRow(sb, 'products', productToDb(newP, u))["catch"](function (e) {
        return console.error(e);
      });
      return newP;
    },
    updateProduct: function updateProduct(id, patch) {
      setData(function (d) {
        var products = d.products.map(function (p) {
          return p.id === id ? _objectSpread(_objectSpread({}, p), patch) : p;
        });
        var updated = products.find(function (p) {
          return p.id === id;
        });
        var sb = sbRef.current,
          u = user === null || user === void 0 ? void 0 : user.id;
        if (sb && u && updated) upsertRow(sb, 'products', productToDb(updated, u))["catch"](function (e) {
          return console.error(e);
        });
        return _objectSpread(_objectSpread({}, d), {}, {
          products: products
        });
      });
    },
    deleteProduct: function deleteProduct(id) {
      setData(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          products: d.products.filter(function (p) {
            return p.id !== id;
          })
        });
      });
      var sb = sbRef.current;
      if (sb) deleteRow(sb, 'products', id)["catch"](function (e) {
        return console.error(e);
      });
    },
    adjustQty: function adjustQty(id, delta) {
      setData(function (d) {
        var products = d.products.map(function (p) {
          return p.id === id ? _objectSpread(_objectSpread({}, p), {}, {
            qty: Math.max(0, p.qty + delta)
          }) : p;
        });
        var updated = products.find(function (p) {
          return p.id === id;
        });
        var sb = sbRef.current,
          u = user === null || user === void 0 ? void 0 : user.id;
        if (sb && u && updated) upsertRow(sb, 'products', productToDb(updated, u))["catch"](function (e) {
          return console.error(e);
        });
        return _objectSpread(_objectSpread({}, d), {}, {
          products: products
        });
      });
    },
    addSupplier: function addSupplier(s) {
      var newS = _objectSpread(_objectSpread({}, s), {}, {
        id: uid()
      });
      setData(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          suppliers: [].concat(_toConsumableArray(d.suppliers), [newS])
        });
      });
      var sb = sbRef.current,
        u = user === null || user === void 0 ? void 0 : user.id;
      if (sb && u) upsertRow(sb, 'suppliers', supplierToDb(newS, u))["catch"](function (e) {
        return console.error(e);
      });
      return newS;
    },
    updateSupplier: function updateSupplier(id, patch) {
      setData(function (d) {
        var suppliers = d.suppliers.map(function (s) {
          return s.id === id ? _objectSpread(_objectSpread({}, s), patch) : s;
        });
        var updated = suppliers.find(function (s) {
          return s.id === id;
        });
        var sb = sbRef.current,
          u = user === null || user === void 0 ? void 0 : user.id;
        if (sb && u && updated) upsertRow(sb, 'suppliers', supplierToDb(updated, u))["catch"](function (e) {
          return console.error(e);
        });
        return _objectSpread(_objectSpread({}, d), {}, {
          suppliers: suppliers
        });
      });
    },
    deleteSupplier: function deleteSupplier(id) {
      setData(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          suppliers: d.suppliers.filter(function (s) {
            return s.id !== id;
          }),
          products: d.products.map(function (p) {
            return p.supplier === id ? _objectSpread(_objectSpread({}, p), {}, {
              supplier: null
            }) : p;
          })
        });
      });
      var sb = sbRef.current;
      if (sb) deleteRow(sb, 'suppliers', id)["catch"](function (e) {
        return console.error(e);
      });
    },
    recordSale: function recordSale(sale) {
      var p = products.find(function (x) {
        return x.id === sale.productId;
      });
      if (!p) return;
      var qty = Number(sale.qty);
      if (qty > p.qty) {
        alert('Not enough stock. Available: ' + p.qty);
        return false;
      }
      var newSale = {
        id: uid(),
        productId: sale.productId,
        qty: qty,
        price: Number(sale.price),
        date: sale.date || new Date().toISOString()
      };
      setData(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          products: d.products.map(function (x) {
            return x.id === sale.productId ? _objectSpread(_objectSpread({}, x), {}, {
              qty: x.qty - qty
            }) : x;
          }),
          sales: [newSale].concat(_toConsumableArray(d.sales))
        });
      });
      var sb = sbRef.current,
        u = user === null || user === void 0 ? void 0 : user.id;
      if (sb && u) {
        upsertRow(sb, 'products', productToDb(_objectSpread(_objectSpread({}, p), {}, {
          qty: p.qty - qty
        }), u))["catch"](function (e) {
          return console.error(e);
        });
        upsertRow(sb, 'sales', saleToDb(newSale, u))["catch"](function (e) {
          return console.error(e);
        });
      }
      return true;
    },
    deleteSale: function deleteSale(id) {
      var s = sales.find(function (x) {
        return x.id === id;
      });
      if (!s) return;
      var p = products.find(function (x) {
        return x.id === s.productId;
      });
      setData(function (d) {
        return _objectSpread(_objectSpread({}, d), {}, {
          products: d.products.map(function (pr) {
            return pr.id === s.productId ? _objectSpread(_objectSpread({}, pr), {}, {
              qty: pr.qty + s.qty
            }) : pr;
          }),
          sales: d.sales.filter(function (x) {
            return x.id !== id;
          })
        });
      });
      var sb = sbRef.current,
        u = user === null || user === void 0 ? void 0 : user.id;
      if (sb && u) {
        deleteRow(sb, 'sales', id)["catch"](function (e) {
          return console.error(e);
        });
        if (p) upsertRow(sb, 'products', productToDb(_objectSpread(_objectSpread({}, p), {}, {
          qty: p.qty + s.qty
        }), u))["catch"](function (e) {
          return console.error(e);
        });
      }
    },
    reset: function () {
      var _reset = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var sb, u, seed, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (confirm('Reset all data to sample? This clears your changes.')) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              sb = sbRef.current, u = user === null || user === void 0 ? void 0 : user.id;
              if (!(sb && u)) {
                _context7.n = 11;
                break;
              }
              _context7.p = 2;
              _context7.n = 3;
              return sb.from('sales')["delete"]().eq('user_id', u);
            case 3:
              _context7.n = 4;
              return sb.from('products')["delete"]().eq('user_id', u);
            case 4:
              _context7.n = 5;
              return sb.from('suppliers')["delete"]().eq('user_id', u);
            case 5:
              seed = buildSeed(u);
              _context7.n = 6;
              return upsertRow(sb, 'suppliers', seed.suppliers.map(function (s) {
                return supplierToDb(s, u);
              }));
            case 6:
              _context7.n = 7;
              return upsertRow(sb, 'products', seed.products.map(function (p) {
                return productToDb(p, u);
              }));
            case 7:
              _context7.n = 8;
              return upsertRow(sb, 'sales', seed.sales.map(function (s) {
                return saleToDb(s, u);
              }));
            case 8:
              setData({
                products: seed.products,
                suppliers: seed.suppliers,
                sales: seed.sales
              });
              _context7.n = 10;
              break;
            case 9:
              _context7.p = 9;
              _t6 = _context7.v;
              alert('Reset failed: ' + _t6.message);
            case 10:
              _context7.n = 12;
              break;
            case 11:
              setData(JSON.parse(JSON.stringify(seedData)));
            case 12:
              return _context7.a(2);
          }
        }, _callee7, null, [[2, 9]]);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }(),
    pushToSupabase: function () {
      var _pushToSupabase = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var sb, u, _t7;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              sb = sbRef.current, u = user === null || user === void 0 ? void 0 : user.id;
              if (!(!sb || !u)) {
                _context8.n = 1;
                break;
              }
              alert('Sign in first.');
              return _context8.a(2);
            case 1:
              if (confirm('Push current local data to Supabase (upsert)?')) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2);
            case 2:
              _context8.p = 2;
              _context8.n = 3;
              return upsertRow(sb, 'suppliers', data.suppliers.map(function (s) {
                return supplierToDb(s, u);
              }));
            case 3:
              _context8.n = 4;
              return upsertRow(sb, 'products', data.products.map(function (p) {
                return productToDb(p, u);
              }));
            case 4:
              _context8.n = 5;
              return upsertRow(sb, 'sales', data.sales.map(function (s) {
                return saleToDb(s, u);
              }));
            case 5:
              alert('Pushed to Supabase successfully.');
              _context8.n = 7;
              break;
            case 6:
              _context8.p = 6;
              _t7 = _context8.v;
              alert('Push failed: ' + _t7.message);
            case 7:
              return _context8.a(2);
          }
        }, _callee8, null, [[2, 6]]);
      }));
      function pushToSupabase() {
        return _pushToSupabase.apply(this, arguments);
      }
      return pushToSupabase;
    }(),
    exportData: function exportData() {
      var blob = new Blob([JSON.stringify(data, null, 2)], {
        type: 'application/json'
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'stockpilot-data.json';
      a.click();
      URL.revokeObjectURL(url);
    },
    importData: function importData(file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        try {
          var d = JSON.parse(e.target.result);
          setData(d);
        } catch (_unused2) {
          alert('Invalid JSON');
        }
      };
      reader.readAsText(file);
    }
  };

  // Show login screen if not authenticated
  if (authLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-soft animate-pulse"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-warehouse text-xl"
    })));
  }
  if (!user) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      sb: sbClient
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "flex h-screen overflow-hidden"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "fixed md:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200 flex flex-col transform ".concat(mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0', " transition-transform slide-in")
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-5 flex items-center gap-3 border-b border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white shadow-lg"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-warehouse text-lg"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-white text-lg leading-tight"
  }, "StockPilot"), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Inventory & Supply"))), /*#__PURE__*/React.createElement("nav", {
    className: "flex-1 px-3 py-4 space-y-1"
  }, nav.map(function (n) {
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: function onClick() {
        setView(n.id);
        setMobileOpen(false);
      },
      className: "w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ".concat(view === n.id ? 'bg-white/10 text-white shadow-inner' : 'hover:bg-white/5 text-slate-300')
    }, /*#__PURE__*/React.createElement("i", {
      className: "".concat(n.icon, " w-5 text-center")
    }), n.label, n.id === 'alerts' && stats.low.length + stats.out.length > 0 && /*#__PURE__*/React.createElement("span", {
      className: "ml-auto bg-rose-500 text-white text-xs font-bold px-2 py-0.5 rounded-full"
    }, stats.low.length + stats.out.length));
  })), /*#__PURE__*/React.createElement("div", {
    className: "px-4 py-4 border-t border-white/5 space-y-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setProfileOpen(true);
    },
    className: "w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl hover:bg-white/5 transition text-left",
    title: "View profile"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-sm font-bold overflow-hidden shrink-0 ring-2 ring-white/10"
  }, prof !== null && prof !== void 0 && prof.avatar_url ? /*#__PURE__*/React.createElement("img", {
    src: prof.avatar_url,
    alt: "",
    referrerPolicy: "no-referrer",
    className: "w-full h-full object-cover"
  }) : ((prof === null || prof === void 0 ? void 0 : prof.full_name) || (prof === null || prof === void 0 ? void 0 : prof.email) || 'U').charAt(0).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm font-medium text-white truncate flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "truncate"
  }, (prof === null || prof === void 0 ? void 0 : prof.full_name) || 'User'), isPro && /*#__PURE__*/React.createElement("span", {
    className: "shrink-0 text-[9px] font-bold tracking-wide bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 px-1.5 py-0.5 rounded"
  }, "PRO")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 truncate"
  }, (prof === null || prof === void 0 ? void 0 : prof.email) || 'Signed in')), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right text-[10px] text-slate-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 px-3 py-2 rounded-xl text-xs",
    title: sbInfo.tip
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-2 h-2 rounded-full ".concat(sbInfo.dot)
  }), /*#__PURE__*/React.createElement("span", {
    className: sbInfo.cls
  }, sbInfo.text)), /*#__PURE__*/React.createElement("button", {
    onClick: api.pushToSupabase,
    className: "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 transition"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-cloud-arrow-up"
  }), "Push local data to DB"), /*#__PURE__*/React.createElement("button", {
    onClick: api.exportData,
    className: "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 transition"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-download"
  }), "Export data (JSON)"), /*#__PURE__*/React.createElement("label", {
    className: "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-300 hover:bg-white/5 transition cursor-pointer"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-upload"
  }), "Import data", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "application/json",
    className: "hidden",
    onChange: function onChange(e) {
      if (e.target.files[0]) api.importData(e.target.files[0]);
      e.target.value = '';
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: api.reset,
    className: "w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-400 hover:bg-white/5 transition"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-rotate-left"
  }), "Reset sample data"))), mobileOpen && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-30 bg-black/40 md:hidden",
    onClick: function onClick() {
      return setMobileOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col min-w-0"
  }, /*#__PURE__*/React.createElement("header", {
    className: "bg-white border-b border-slate-200 px-4 md:px-8 py-3 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    className: "md:hidden w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center",
    onClick: function onClick() {
      return setMobileOpen(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bars"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400 font-medium"
  }, "StockPilot"), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-bold text-slate-800 leading-tight"
  }, crumb())), /*#__PURE__*/React.createElement("div", {
    className: "ml-auto flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-xl text-sm text-slate-500 w-64"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search products...",
    className: "bg-transparent outline-none flex-1 text-slate-700",
    onChange: function onChange(e) {
      if (view !== 'inventory') setView('inventory');
      window.dispatchEvent(new CustomEvent('stockpilot:search', {
        detail: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('alerts');
    },
    className: "relative w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-500"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bell"
  }), stats.low.length + stats.out.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPaymentModal(true);
    },
    title: isPro ? 'Pro active — manage plan' : 'Upgrade to Pro',
    className: "h-9 px-3 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 ".concat(isPro ? 'bg-gradient-to-r from-amber-300 to-amber-500 text-slate-900 shadow-sm' : 'bg-gradient-to-r from-brand-500 to-brand-700 text-white hover:opacity-90')
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-crown text-xs"
  }), /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, isPro ? 'PRO' : 'Pro')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 pl-2 border-l border-slate-200"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setProfileOpen(true);
    },
    className: "w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-white text-xs font-bold overflow-hidden hover:ring-2 hover:ring-brand-300 transition",
    title: "View profile"
  }, prof !== null && prof !== void 0 && prof.avatar_url ? /*#__PURE__*/React.createElement("img", {
    src: prof.avatar_url,
    alt: "",
    referrerPolicy: "no-referrer",
    className: "w-full h-full object-cover"
  }) : ((prof === null || prof === void 0 ? void 0 : prof.full_name) || (prof === null || prof === void 0 ? void 0 : prof.email) || 'U').charAt(0).toUpperCase()), /*#__PURE__*/React.createElement("span", {
    className: "text-sm text-slate-600 hidden sm:inline"
  }, (prof === null || prof === void 0 ? void 0 : prof.full_name) || (prof === null || prof === void 0 ? void 0 : prof.email) || 'User'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return sbClient.auth.signOut();
    },
    className: "w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400",
    title: "Logout"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-right-from-bracket text-sm"
  }))))), /*#__PURE__*/React.createElement("main", {
    className: "flex-1 overflow-y-auto scrollbar p-4 md:p-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto fade-in",
    key: view
  }, view === 'dashboard' && /*#__PURE__*/React.createElement(Dashboard, {
    stats: stats,
    products: products,
    sales: sales,
    suppliers: suppliers,
    setView: setView,
    prodById: prodById,
    supById: supById,
    avgDailySales: avgDailySales,
    api: api
  }), view === 'inventory' && /*#__PURE__*/React.createElement(Inventory, {
    products: products,
    suppliers: suppliers,
    supById: supById,
    api: api
  }), view === 'sales' && /*#__PURE__*/React.createElement(Sales, {
    products: products,
    sales: sales,
    prodById: prodById,
    api: api
  }), view === 'suppliers' && /*#__PURE__*/React.createElement(Suppliers, {
    suppliers: suppliers,
    products: products,
    api: api
  }), view === 'alerts' && /*#__PURE__*/React.createElement(Alerts, {
    products: products,
    suppliers: suppliers,
    supById: supById,
    avgDailySales: avgDailySales,
    api: api
  })))), /*#__PURE__*/React.createElement(Assistant, {
    products: products,
    suppliers: suppliers,
    sales: sales,
    stats: stats,
    prodById: prodById,
    supById: supById,
    setView: setView,
    user: user
  }), /*#__PURE__*/React.createElement(PaymentModal, {
    open: paymentModal,
    onClose: function onClose() {
      return setPaymentModal(false);
    },
    sb: sbClient,
    user: user,
    isPro: isPro,
    onActivate: activatePro,
    onDeactivate: deactivatePro
  }), /*#__PURE__*/React.createElement(ProfileModal, {
    open: profileOpen,
    onClose: function onClose() {
      return setProfileOpen(false);
    },
    profile: prof,
    user: user,
    isPro: isPro,
    onSignOut: function onSignOut() {
      return sbClient.auth.signOut();
    }
  }));
}

// ---------- Dashboard ----------
function Dashboard(_ref20) {
  var stats = _ref20.stats,
    products = _ref20.products,
    sales = _ref20.sales,
    suppliers = _ref20.suppliers,
    setView = _ref20.setView,
    prodById = _ref20.prodById,
    supById = _ref20.supById,
    avgDailySales = _ref20.avgDailySales,
    api = _ref20.api;
  var chartRef = useRef(null);
  var chartInstance = useRef(null);
  useEffect(function () {
    if (!chartRef.current) return;
    if (chartInstance.current) chartInstance.current.destroy();
    var labels = [],
      data = [];
    var _loop2 = function _loop2() {
      var d = daysAgo(i);
      var key = d.toDateString();
      labels.push(d.toLocaleDateString('en-IN', {
        weekday: 'short'
      }));
      data.push(sales.filter(function (s) {
        return new Date(s.date).toDateString() === key;
      }).reduce(function (a, s) {
        return a + s.qty * s.price;
      }, 0));
    };
    for (var i = 6; i >= 0; i--) {
      _loop2();
    }
    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Revenue',
          data: data,
          backgroundColor: '#6366f1',
          borderRadius: 8,
          hoverBackgroundColor: '#4338ca'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function label(c) {
                return '₹' + c.parsed.y.toLocaleString('en-IN');
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function callback(v) {
                return '₹' + v;
              }
            },
            grid: {
              color: '#f1f5f9'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
    return function () {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, [sales]);
  var recent = sales.slice(0, 6);
  var topProducts = useMemo(function () {
    var map = {};
    sales.forEach(function (s) {
      map[s.productId] = (map[s.productId] || 0) + s.qty;
    });
    return Object.entries(map).sort(function (a, b) {
      return b[1] - a[1];
    }).slice(0, 5).map(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 2),
        id = _ref22[0],
        q = _ref22[1];
      return {
        p: prodById[id],
        q: q
      };
    }).filter(function (x) {
      return x.p;
    });
  }, [sales, prodById]);
  var kpis = [{
    label: 'Total Products',
    value: fmtNum(stats.totalProducts),
    icon: 'fa-solid fa-box',
    tone: 'from-brand-500 to-brand-700',
    sub: stats.low.length + stats.out.length + ' need attention'
  }, {
    label: 'Low / Out of Stock',
    value: fmtNum(stats.low.length + stats.out.length),
    icon: 'fa-solid fa-triangle-exclamation',
    tone: 'from-amber-400 to-rose-500',
    sub: stats.out.length + ' out of stock',
    click: function click() {
      return setView('alerts');
    }
  }, {
    label: 'Sold Today',
    value: fmtNum(stats.soldToday),
    icon: 'fa-solid fa-cart-shopping',
    tone: 'from-emerald-400 to-teal-500',
    sub: fmtMoney(stats.revenueToday) + ' revenue'
  }, {
    label: 'Inventory Value',
    value: fmtMoney(stats.value),
    icon: 'fa-solid fa-indian-rupee-sign',
    tone: 'from-violet-500 to-purple-700',
    sub: 'at cost price'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
  }, kpis.map(function (k, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: k.click,
      className: "kpi bg-white rounded-2xl p-5 shadow-sm border border-slate-100 ".concat(k.click ? 'cursor-pointer' : '')
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-medium text-slate-500 uppercase tracking-wide"
    }, k.label), /*#__PURE__*/React.createElement("div", {
      className: "text-2xl font-bold text-slate-800 mt-2"
    }, k.value), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400 mt-1"
    }, k.sub)), /*#__PURE__*/React.createElement("div", {
      className: "w-11 h-11 rounded-xl bg-gradient-to-br ".concat(k.tone, " text-white flex items-center justify-center shadow-soft")
    }, /*#__PURE__*/React.createElement("i", {
      className: k.icon
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:col-span-2 bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-slate-800"
  }, "Revenue \u2014 Last 7 days"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs text-slate-400"
  }, "Daily sales revenue from recorded transactions")), /*#__PURE__*/React.createElement(Badge, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chart-column mr-1"
  }), "Trend")), /*#__PURE__*/React.createElement("div", {
    className: "h-64"
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: chartRef
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-slate-800 mb-3"
  }, "Low stock alerts"), stats.low.length + stats.out.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-circle-check",
    title: "All stocked up",
    sub: "No items below minimum level."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-64 overflow-y-auto scrollbar"
  }, [].concat(_toConsumableArray(stats.out), _toConsumableArray(stats.low)).map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition"
    }, /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-medium text-slate-700 truncate"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, p.qty, " ", p.unit, " left \xB7 min ", p.minStock)), /*#__PURE__*/React.createElement(Badge, {
      tone: p.qty <= 0 ? 'red' : 'amber'
    }, p.qty <= 0 ? 'Out' : 'Low'));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('alerts');
    },
    className: "mt-3 w-full text-sm text-brand-600 font-medium hover:underline"
  }, "View reorder suggestions \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-slate-800 mb-3"
  }, "Recent sales"), recent.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-receipt",
    title: "No sales yet",
    sub: "Record a sale to see activity here."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "divide-y divide-slate-100"
  }, recent.map(function (s) {
    var p = prodById[s.productId];
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "flex items-center justify-between py-2.5"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center text-sm"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-bag-shopping"
    })), /*#__PURE__*/React.createElement("div", {
      className: "min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-medium text-slate-700 truncate"
    }, (p === null || p === void 0 ? void 0 : p.name) || 'Unknown'), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, s.qty, " \xD7 ", fmtMoney(s.price), " \xB7 ", fmtDate(s.date)))), /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-semibold text-slate-800"
    }, fmtMoney(s.qty * s.price)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-slate-800 mb-3"
  }, "Top selling products"), topProducts.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-trophy",
    title: "No data yet",
    sub: "Sales will build this list."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, topProducts.map(function (t, i) {
    var max = topProducts[0].q;
    return /*#__PURE__*/React.createElement("div", {
      key: t.p.id
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-sm mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-medium text-slate-700 truncate"
    }, i + 1, ". ", t.p.name), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500"
    }, fmtNum(t.q), " sold")), /*#__PURE__*/React.createElement("div", {
      className: "h-2 rounded-full bg-slate-100 overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full",
      style: {
        width: "".concat(t.q / max * 100, "%")
      }
    })));
  })))));
}

// ---------- Inventory ----------
function Inventory(_ref23) {
  var products = _ref23.products,
    suppliers = _ref23.suppliers,
    supById = _ref23.supById,
    api = _ref23.api;
  var _useState61 = useState(''),
    _useState62 = _slicedToArray(_useState61, 2),
    q = _useState62[0],
    setQ = _useState62[1];
  var _useState63 = useState('all'),
    _useState64 = _slicedToArray(_useState63, 2),
    cat = _useState64[0],
    setCat = _useState64[1];
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    editing = _useState66[0],
    setEditing = _useState66[1]; // product or 'new'
  var _useState67 = useState(false),
    _useState68 = _slicedToArray(_useState67, 2),
    open = _useState68[0],
    setOpen = _useState68[1];

  // listen to global search
  useEffect(function () {
    function h(e) {
      setQ(e.detail || '');
    }
    window.addEventListener('stockpilot:search', h);
    return function () {
      return window.removeEventListener('stockpilot:search', h);
    };
  }, []);
  var cats = useMemo(function () {
    return ['all'].concat(_toConsumableArray(Array.from(new Set(products.map(function (p) {
      return p.category;
    })))));
  }, [products]);
  var filtered = useMemo(function () {
    return products.filter(function (p) {
      var matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.sku.toLowerCase().includes(q.toLowerCase());
      var matchC = cat === 'all' || p.category === cat;
      return matchQ && matchC;
    });
  }, [products, q, cat]);
  function openNew() {
    setEditing({});
    setOpen(true);
  }
  function openEdit(p) {
    setEditing(_objectSpread({}, p));
    setOpen(true);
  }
  function close() {
    setOpen(false);
    setEditing(null);
  }
  function save(form) {
    if (!form.name || !form.sku) {
      alert('Name and SKU are required');
      return;
    }
    var payload = {
      name: form.name,
      sku: form.sku,
      category: form.category || 'General',
      supplier: form.supplier || null,
      qty: Number(form.qty || 0),
      unit: form.unit || 'pcs',
      minStock: Number(form.minStock || 0),
      price: Number(form.price || 0),
      cost: Number(form.cost || 0)
    };
    if (editing && editing.id) api.updateProduct(editing.id, payload);else api.addProduct(payload);
    close();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1 max-w-md"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
  }), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: "Search by name or SKU...",
    className: "w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-brand-400 focus:ring-2 focus:ring-brand-100 outline-none text-sm"
  })), /*#__PURE__*/React.createElement("select", {
    value: cat,
    onChange: function onChange(e) {
      return setCat(e.target.value);
    },
    className: "px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:border-brand-400 outline-none"
  }, cats.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c === 'all' ? 'All categories' : c);
  }))), /*#__PURE__*/React.createElement(Button, {
    onClick: openNew
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus"
  }), "Add product")), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-box-open",
    title: "No products found",
    sub: "Try a different search or add a product."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-50 text-slate-500 text-xs uppercase tracking-wide"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Product"), /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Category"), /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Supplier"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Qty"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Min"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Price"), /*#__PURE__*/React.createElement("th", {
    className: "text-center px-5 py-3 font-semibold"
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(function (p) {
    var _supById$p$supplier;
    var status = p.qty <= 0 ? ['red', 'Out of stock'] : p.qty <= p.minStock ? ['amber', 'Low stock'] : ['green', 'In stock'];
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      className: "table-row border-t border-slate-100"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-medium text-slate-800"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, p.sku, " \xB7 ", p.unit)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "blue"
    }, p.category)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-slate-500 text-xs"
    }, ((_supById$p$supplier = supById[p.supplier]) === null || _supById$p$supplier === void 0 ? void 0 : _supById$p$supplier.name) || '—'), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right font-semibold text-slate-800"
    }, fmtNum(p.qty)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right text-slate-500"
    }, fmtNum(p.minStock)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right text-slate-700"
    }, fmtMoney(p.price)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-center"
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: status[0]
    }, status[1])), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("button", {
      title: "Decrease",
      onClick: function onClick() {
        return api.adjustQty(p.id, -1);
      },
      className: "w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-minus text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      title: "Increase",
      onClick: function onClick() {
        return api.adjustQty(p.id, 1);
      },
      className: "w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-plus text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      title: "Edit",
      onClick: function onClick() {
        return openEdit(p);
      },
      className: "w-7 h-7 rounded-lg hover:bg-brand-50 text-brand-600"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-pen text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      title: "Delete",
      onClick: function onClick() {
        if (confirm('Delete ' + p.name + '?')) api.deleteProduct(p.id);
      },
      className: "w-7 h-7 rounded-lg hover:bg-rose-50 text-rose-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-trash text-xs"
    })))));
  }))))), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: close,
    title: editing && editing.id ? 'Edit product' : 'Add product'
  }, /*#__PURE__*/React.createElement(ProductForm, {
    initial: editing,
    suppliers: suppliers,
    onSave: save,
    onCancel: close
  })));
}
function ProductForm(_ref24) {
  var _suppliers$;
  var initial = _ref24.initial,
    suppliers = _ref24.suppliers,
    onSave = _ref24.onSave,
    onCancel = _ref24.onCancel;
  var _useState69 = useState(initial && initial.id ? {
      name: initial.name,
      sku: initial.sku,
      category: initial.category,
      supplier: initial.supplier,
      qty: initial.qty,
      unit: initial.unit,
      minStock: initial.minStock,
      price: initial.price,
      cost: initial.cost
    } : {
      name: '',
      sku: '',
      category: 'Groceries',
      supplier: (_suppliers$ = suppliers[0]) === null || _suppliers$ === void 0 ? void 0 : _suppliers$.id,
      qty: 0,
      unit: 'pcs',
      minStock: 5,
      price: 0,
      cost: 0
    }),
    _useState70 = _slicedToArray(_useState69, 2),
    form = _useState70[0],
    setForm = _useState70[1];
  var set = function set(k, v) {
    return setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, v));
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Product name",
    value: form.name,
    onChange: function onChange(e) {
      return set('name', e.target.value);
    },
    placeholder: "e.g. Basmati Rice 5kg"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "SKU",
    value: form.sku,
    onChange: function onChange(e) {
      return set('sku', e.target.value);
    },
    placeholder: "GR-001"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Category",
    value: form.category,
    onChange: function onChange(e) {
      return set('category', e.target.value);
    },
    placeholder: "Groceries"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Supplier",
    value: form.supplier || '',
    onChange: function onChange(e) {
      return set('supplier', e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "None"), suppliers.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Quantity",
    type: "number",
    value: form.qty,
    onChange: function onChange(e) {
      return set('qty', e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Unit",
    value: form.unit,
    onChange: function onChange(e) {
      return set('unit', e.target.value);
    },
    placeholder: "pcs"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Min stock",
    type: "number",
    value: form.minStock,
    onChange: function onChange(e) {
      return set('minStock', e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Selling price (\u20B9)",
    type: "number",
    value: form.price,
    onChange: function onChange(e) {
      return set('price', e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Cost price (\u20B9)",
    type: "number",
    value: form.cost,
    onChange: function onChange(e) {
      return set('cost', e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-2 mt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onSave(form);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }), "Save")));
}

// ---------- Sales ----------
function Sales(_ref25) {
  var products = _ref25.products,
    sales = _ref25.sales,
    prodById = _ref25.prodById,
    api = _ref25.api;
  var _useState71 = useState(false),
    _useState72 = _slicedToArray(_useState71, 2),
    open = _useState72[0],
    setOpen = _useState72[1];
  var _useState73 = useState('all'),
    _useState74 = _slicedToArray(_useState73, 2),
    filter = _useState74[0],
    setFilter = _useState74[1];
  var filtered = useMemo(function () {
    if (filter === 'all') return sales;
    var days = Number(filter);
    var cutoff = Date.now() - days * 86400000;
    return sales.filter(function (s) {
      return new Date(s.date).getTime() >= cutoff;
    });
  }, [sales, filter]);
  var totalRevenue = filtered.reduce(function (a, s) {
    return a + s.qty * s.price;
  }, 0);
  var totalQty = filtered.reduce(function (a, s) {
    return a + s.qty;
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 text-sm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-slate-500"
  }, "Showing:"), [['all', 'All time'], ['7', 'Last 7 days'], ['30', 'Last 30 days']].map(function (_ref26) {
    var _ref27 = _slicedToArray(_ref26, 2),
      v = _ref27[0],
      l = _ref27[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setFilter(v);
      },
      className: "px-3 py-1.5 rounded-lg text-xs font-medium transition ".concat(filter === v ? 'bg-brand-600 text-white' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50')
    }, l);
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus"
  }), "Record sale")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 font-medium uppercase"
  }, "Transactions"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-bold mt-1"
  }, fmtNum(filtered.length))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 font-medium uppercase"
  }, "Units sold"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-bold mt-1"
  }, fmtNum(totalQty))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 font-medium uppercase"
  }, "Revenue"), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-bold mt-1"
  }, fmtMoney(totalRevenue)))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-receipt",
    title: "No sales recorded",
    sub: "Click 'Record sale' to log a transaction."
  }) : /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-50 text-slate-500 text-xs uppercase tracking-wide"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Product"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Qty"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Unit price"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Total"), /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Date"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(function (s) {
    var p = prodById[s.productId];
    return /*#__PURE__*/React.createElement("tr", {
      key: s.id,
      className: "table-row border-t border-slate-100"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-medium text-slate-800"
    }, (p === null || p === void 0 ? void 0 : p.name) || 'Unknown'), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, p === null || p === void 0 ? void 0 : p.sku)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right"
    }, fmtNum(s.qty)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right"
    }, fmtMoney(s.price)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right font-semibold"
    }, fmtMoney(s.qty * s.price)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-slate-500"
    }, fmtDate(s.date), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400"
    }, new Date(s.date).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit'
    }))), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        if (confirm('Delete this sale and restore stock?')) api.deleteSale(s.id);
      },
      className: "w-8 h-8 rounded-lg hover:bg-rose-50 text-rose-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-trash text-xs"
    }))));
  }))))), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    title: "Record sale"
  }, /*#__PURE__*/React.createElement(SaleForm, {
    products: products,
    onSave: function onSave(form) {
      var ok = api.recordSale(form);
      if (ok) setOpen(false);
    },
    onCancel: function onCancel() {
      return setOpen(false);
    }
  })));
}
function SaleForm(_ref28) {
  var _products$, _products$2;
  var products = _ref28.products,
    onSave = _ref28.onSave,
    onCancel = _ref28.onCancel;
  var _useState75 = useState(((_products$ = products[0]) === null || _products$ === void 0 ? void 0 : _products$.id) || ''),
    _useState76 = _slicedToArray(_useState75, 2),
    productId = _useState76[0],
    setProductId = _useState76[1];
  var _useState77 = useState(1),
    _useState78 = _slicedToArray(_useState77, 2),
    qty = _useState78[0],
    setQty = _useState78[1];
  var _useState79 = useState(((_products$2 = products[0]) === null || _products$2 === void 0 ? void 0 : _products$2.price) || 0),
    _useState80 = _slicedToArray(_useState79, 2),
    price = _useState80[0],
    setPrice = _useState80[1];
  var _useState81 = useState(new Date().toISOString().slice(0, 16)),
    _useState82 = _slicedToArray(_useState81, 2),
    date = _useState82[0],
    setDate = _useState82[1];
  var sel = products.find(function (p) {
    return p.id === productId;
  });
  useEffect(function () {
    if (sel) setPrice(sel.price);
  }, [productId]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Select, {
    label: "Product",
    value: productId,
    onChange: function onChange(e) {
      return setProductId(e.target.value);
    }
  }, products.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id,
      disabled: p.qty <= 0
    }, p.name, " \u2014 ", p.qty, " ", p.unit, " in stock", p.qty <= 0 ? ' (out)' : '');
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Quantity",
    type: "number",
    min: "1",
    max: sel === null || sel === void 0 ? void 0 : sel.qty,
    value: qty,
    onChange: function onChange(e) {
      return setQty(e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Unit price (\u20B9)",
    type: "number",
    value: price,
    onChange: function onChange(e) {
      return setPrice(e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Date & time",
    type: "datetime-local",
    value: date,
    onChange: function onChange(e) {
      return setDate(e.target.value);
    }
  }), sel && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 mb-3"
  }, "Available: ", /*#__PURE__*/React.createElement("b", null, sel.qty, " ", sel.unit), " \xB7 Min stock ", sel.minStock), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-2 mt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onSave({
        productId: productId,
        qty: Number(qty),
        price: Number(price),
        date: new Date(date).toISOString()
      });
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }), "Record")));
}

// ---------- Suppliers ----------
function Suppliers(_ref29) {
  var _suppliers$find;
  var suppliers = _ref29.suppliers,
    products = _ref29.products,
    api = _ref29.api;
  var _useState83 = useState(false),
    _useState84 = _slicedToArray(_useState83, 2),
    open = _useState84[0],
    setOpen = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    editing = _useState86[0],
    setEditing = _useState86[1];
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    selected = _useState88[0],
    setSelected = _useState88[1];
  function openNew() {
    setEditing({});
    setOpen(true);
  }
  function openEdit(s) {
    setEditing(_objectSpread({}, s));
    setOpen(true);
  }
  function close() {
    setOpen(false);
    setEditing(null);
  }
  function save(form) {
    if (!form.name) {
      alert('Supplier name required');
      return;
    }
    var payload = {
      name: form.name,
      contact: form.contact,
      phone: form.phone,
      email: form.email,
      city: form.city,
      notes: form.notes
    };
    if (editing && editing.id) api.updateSupplier(editing.id, payload);else api.addSupplier(payload);
    close();
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-500"
  }, suppliers.length, " suppliers registered"), /*#__PURE__*/React.createElement(Button, {
    onClick: openNew
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus"
  }), "Add supplier")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
  }, suppliers.map(function (s) {
    var prods = products.filter(function (p) {
      return p.supplier === s.id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-soft transition"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-start justify-between"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-11 h-11 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center font-bold"
    }, s.name.charAt(0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-semibold text-slate-800"
    }, s.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, s.city))), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-1"
    }, /*#__PURE__*/React.createElement("button", {
      title: "Edit",
      onClick: function onClick() {
        return openEdit(s);
      },
      className: "w-7 h-7 rounded-lg hover:bg-slate-100 text-slate-400"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-pen text-xs"
    })), /*#__PURE__*/React.createElement("button", {
      title: "Delete",
      onClick: function onClick() {
        if (confirm('Delete supplier "' + s.name + '"? Products linked to it will be unassigned.')) api.deleteSupplier(s.id);
      },
      className: "w-7 h-7 rounded-lg hover:bg-rose-50 text-rose-500"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-trash text-xs"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 space-y-1.5 text-sm text-slate-600"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-user text-slate-400 w-4"
    }), s.contact || '—'), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone text-slate-400 w-4"
    }), s.phone || '—'), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-envelope text-slate-400 w-4"
    }), s.email || '—')), s.notes && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-xs text-slate-500 bg-slate-50 rounded-lg px-3 py-2"
    }, s.notes), /*#__PURE__*/React.createElement("div", {
      className: "mt-4 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xs text-slate-400"
    }, prods.length, " products supplied"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSelected(s.id);
      },
      className: "text-xs text-brand-600 font-medium hover:underline"
    }, "View products \u2192")));
  })), selected && /*#__PURE__*/React.createElement(Modal, {
    open: !!selected,
    onClose: function onClose() {
      return setSelected(null);
    },
    title: "Products from ".concat((_suppliers$find = suppliers.find(function (s) {
      return s.id === selected;
    })) === null || _suppliers$find === void 0 ? void 0 : _suppliers$find.name)
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, products.filter(function (p) {
    return p.supplier === selected;
  }).length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-box-open",
    title: "No products linked",
    sub: "Assign products to this supplier from Inventory."
  }) : products.filter(function (p) {
    return p.supplier === selected;
  }).map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "flex items-center justify-between p-3 rounded-xl bg-slate-50"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "text-sm font-medium text-slate-700"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, p.sku, " \xB7 ", p.qty, " ", p.unit)), /*#__PURE__*/React.createElement(Badge, {
      tone: p.qty <= 0 ? 'red' : p.qty <= p.minStock ? 'amber' : 'green'
    }, p.qty <= 0 ? 'Out' : p.qty <= p.minStock ? 'Low' : 'OK'));
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: close,
    title: editing && editing.id ? 'Edit supplier' : 'Add supplier'
  }, /*#__PURE__*/React.createElement(SupplierForm, {
    initial: editing,
    onSave: save,
    onCancel: close
  })));
}
function SupplierForm(_ref30) {
  var initial = _ref30.initial,
    onSave = _ref30.onSave,
    onCancel = _ref30.onCancel;
  var _useState89 = useState(initial && initial.id ? {
      name: initial.name,
      contact: initial.contact,
      phone: initial.phone,
      email: initial.email,
      city: initial.city,
      notes: initial.notes
    } : {
      name: '',
      contact: '',
      phone: '',
      email: '',
      city: '',
      notes: ''
    }),
    _useState90 = _slicedToArray(_useState89, 2),
    form = _useState90[0],
    setForm = _useState90[1];
  var set = function set(k, v) {
    return setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, v));
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    label: "Supplier name",
    value: form.name,
    onChange: function onChange(e) {
      return set('name', e.target.value);
    },
    placeholder: "FreshMart Distributors"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Contact person",
    value: form.contact,
    onChange: function onChange(e) {
      return set('contact', e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "City",
    value: form.city,
    onChange: function onChange(e) {
      return set('city', e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    value: form.phone,
    onChange: function onChange(e) {
      return set('phone', e.target.value);
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: function onChange(e) {
      return set('email', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Notes",
    rows: 2,
    value: form.notes,
    onChange: function onChange(e) {
      return set('notes', e.target.value);
    },
    placeholder: "Categories supplied, lead time..."
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-2 mt-2"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return onSave(form);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-check"
  }), "Save")));
}

// ---------- Alerts & Reorder ----------
function Alerts(_ref31) {
  var _po$supplier, _po$supplier2, _po$supplier3, _po$supplier4;
  var products = _ref31.products,
    suppliers = _ref31.suppliers,
    supById = _ref31.supById,
    avgDailySales = _ref31.avgDailySales,
    api = _ref31.api;
  var lowItems = products.filter(function (p) {
    return p.qty <= p.minStock;
  });
  var reorderList = lowItems.map(function (p) {
    var avg = avgDailySales(p.id, 30);
    var shortfall = p.minStock - p.qty;
    var leadDemand = Math.ceil(avg * 7);
    var suggested = Math.max(0, shortfall + leadDemand);
    return {
      p: p,
      avg: avg,
      suggested: suggested,
      supplier: supById[p.supplier]
    };
  }).sort(function (a, b) {
    return a.p.qty - a.p.minStock - (b.p.qty - b.p.minStock);
  });
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    po = _useState92[0],
    setPo = _useState92[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-gradient-to-r from-amber-50 to-rose-50 border border-amber-200 rounded-2xl p-5 flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-triangle-exclamation"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "font-semibold text-slate-800"
  }, lowItems.length, " item", lowItems.length !== 1 ? 's' : '', " need attention"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-slate-600"
  }, "Products below their minimum stock level. Reorder quantities are suggested from average sales (last 30 days) plus a 7-day lead-time buffer."))), reorderList.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement(Empty, {
    icon: "fa-solid fa-circle-check",
    title: "Everything is well stocked",
    sub: "No reorder suggestions right now."
  })) : /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    className: "w-full text-sm"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-slate-50 text-slate-500 text-xs uppercase tracking-wide"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Product"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "On hand"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Min stock"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Avg / day"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Suggested reorder"), /*#__PURE__*/React.createElement("th", {
    className: "text-left px-5 py-3 font-semibold"
  }, "Supplier"), /*#__PURE__*/React.createElement("th", {
    className: "text-right px-5 py-3 font-semibold"
  }, "Action"))), /*#__PURE__*/React.createElement("tbody", null, reorderList.map(function (_ref32) {
    var p = _ref32.p,
      avg = _ref32.avg,
      suggested = _ref32.suggested,
      supplier = _ref32.supplier;
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      className: "table-row border-t border-slate-100"
    }, /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-medium text-slate-800"
    }, p.name), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-slate-400"
    }, p.sku)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right font-semibold text-rose-600"
    }, fmtNum(p.qty)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right text-slate-500"
    }, fmtNum(p.minStock)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right text-slate-500"
    }, avg.toFixed(2)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-flex items-center px-2.5 py-1 rounded-lg bg-brand-100 text-brand-700 font-bold text-sm"
    }, fmtNum(suggested), " ", p.unit)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-xs text-slate-600"
    }, (supplier === null || supplier === void 0 ? void 0 : supplier.name) || '—', /*#__PURE__*/React.createElement("div", {
      className: "text-slate-400"
    }, supplier === null || supplier === void 0 ? void 0 : supplier.phone)), /*#__PURE__*/React.createElement("td", {
      className: "px-5 py-3 text-right"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "success",
      className: "text-xs px-3 py-1.5",
      onClick: function onClick() {
        return setPo({
          p: p,
          supplier: supplier,
          suggested: suggested
        });
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-file-invoice"
    }), "Reorder")));
  }))))), /*#__PURE__*/React.createElement(Modal, {
    open: !!po,
    onClose: function onClose() {
      return setPo(null);
    },
    title: "Reorder suggestion",
    width: "max-w-md"
  }, po && /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-50 rounded-xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-slate-800"
  }, po.p.name), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500 mt-1"
  }, po.p.sku, " \xB7 ", po.p.category)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 text-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "On hand"), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold"
  }, po.p.qty, " ", po.p.unit)), /*#__PURE__*/React.createElement("div", {
    className: "bg-slate-50 rounded-xl p-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-400"
  }, "Suggested qty"), /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-brand-700"
  }, po.suggested, " ", po.p.unit))), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-slate-600"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-medium text-slate-700 mb-1"
  }, "Supplier contact"), /*#__PURE__*/React.createElement("div", null, ((_po$supplier = po.supplier) === null || _po$supplier === void 0 ? void 0 : _po$supplier.name) || 'Unassigned'), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500"
  }, (_po$supplier2 = po.supplier) === null || _po$supplier2 === void 0 ? void 0 : _po$supplier2.contact, " \xB7 ", (_po$supplier3 = po.supplier) === null || _po$supplier3 === void 0 ? void 0 : _po$supplier3.phone), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-slate-500"
  }, (_po$supplier4 = po.supplier) === null || _po$supplier4 === void 0 ? void 0 : _po$supplier4.email)), /*#__PURE__*/React.createElement("div", {
    className: "bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-700"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-circle-info mr-1"
  }), " This is a suggestion. Update stock in Inventory once the delivery arrives."), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end gap-2"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: function onClick() {
      return setPo(null);
    }
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    variant: "success",
    onClick: function onClick() {
      api.adjustQty(po.p.id, po.suggested);
      setPo(null);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-plus"
  }), "Add delivered stock")))));
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
