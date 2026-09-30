function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;
const useS = useState,
  useE = useEffect,
  useR = useRef,
  useEs = useState,
  useEe = useEffect;
const ALIAS = {
  'arrow-right': ['ArrowRight'],
  'check': ['Check'],
  'chevron-down': ['ChevronDown'],
  'menu': ['Menu'],
  'x': ['X'],
  'minus-circle': ['CircleMinus', 'MinusCircle'],
  'triangle-alert': ['TriangleAlert', 'AlertTriangle'],
  'circle-slash': ['CircleSlash', 'Ban'],
  'youtube': ['Youtube'],
  'linkedin': ['Linkedin'],
  'instagram': ['Instagram'],
  'wallet': ['Wallet'],
  'landmark': ['Landmark'],
  'shield-check': ['ShieldCheck'],
  'arrow-left-right': ['ArrowLeftRight'],
  'receipt': ['Receipt'],
  'send': ['Send'],
  'search': ['Search'],
  'chevron-right': ['ChevronRight']
};
function Icon({
  name,
  size = 16,
  style
}) {
  const set = window.lucide && window.lucide.icons || {};
  const key = (ALIAS[name] || [name]).find(k => set[k]);
  const node = key ? set[key] : null;
  if (!node) return null;
  const kids = Array.isArray(node) && Array.isArray(node[0]) ? node : node[2] || [];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: 'none',
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, kids.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
const MENUS = [['Platform', [['Treasury and cash management', 'Group consolidated balances and weekly forecast', 'hazine-nakit-yonetimi.html'], ['Financing', 'Loans, deposits, bank guarantees and limits', 'finansman.html'], ['Risk and compliance', 'Covenants, limits, FX and interest rate sensitivity', 'risk-uyum.html'], ['Cheques and notes', 'Maturity ladder, discount simulator, bounced cheque tracking', 'cek-senet.html'], ['Reconciliation and accounting', 'Bank-to-ledger matching, Turkish chart of accounts mapping', 'mutabakat.html'], ['Payments', 'Batches, multi-signature approval by amount band, bank-format files', 'odemeler.html'], ['Security and data', 'Isolation, permissions, audit trail, data protection', 'guvenlik-veri.html']]], ['Solutions', [['Open banking and bank integration', 'Ready connections to 20+ banks, integration technology', 'acik-bankacilik.html'], ['ERP and accounting integrations', 'Ledger, invoice and journal data; chart of accounts reconciliation', 'erp-entegrasyonlari.html'], ['Multi-entity groups', 'Consolidated view, intercompany funding, cash pooling', 'cok-sirketli-gruplar.html'], ['Guarantees and letters of credit', 'Blocked limits, commission, claims and letters of credit', 'teminat-akreditif.html']]], ['Company', [['About us', 'Who we are and why we build this', 'hakkimizda.html'], ['Blog', 'Writing on treasury practice', 'blog.html'], ['Become a partner', 'Consulting, reseller and technology partnerships', 'partner-olun.html'], ['Contact', 'Office, email and enquiry channels', 'iletisim.html']]], ['Pricing', 'fiyatlandirma.html']];

/* Sayfanın dili ve karşılık gelen diğer dildeki adresi.
   EN sayfaları /en/ altında, aynı dosya adıyla durur. */
const SITE_LANG = 'EN';
Object.assign(window, {
  SITE_LANG
});
/* İngilizceye çevrilmiş sayfalar. EN sayfasındayken listede olmayan bir hedef
   Türkçesine düşer (../dosya) — /en/ altında 404 olmaz. Sayfa çevrildikçe listeye eklenir. */
const EN_PAGES = ['index.html', 'hazine-nakit-yonetimi.html', 'fiyatlandirma.html', 'odemeler.html', 'risk-uyum.html', 'cek-senet.html', 'finansman.html', 'teminat-akreditif.html', 'cok-sirketli-gruplar.html', 'mutabakat.html', 'hakkimizda.html', 'gizlilik-politikasi.html', 'kvkk-aydinlatma-metni.html', 'cerez-politikasi.html', 'iletisim.html', 'partner-olun.html', 'guvenlik-veri.html', 'erp-entegrasyonlari.html', 'acik-bankacilik.html', 'login.html', 'blog.html'];

/* Connection hedefini dile göre çözümler. */
function L(href) {
  if (SITE_LANG !== 'EN' || !href || href.indexOf('.html') === -1) return href;
  const dosya = href.split('#')[0];
  return EN_PAGES.indexOf(dosya) > -1 ? href : '../' + href;
}

/* File adı derleme sırasında ve tarayıcıda aynı olsun diye global'den okunur. */
function LANG_URL(hedef) {
  let dosya = typeof window !== 'undefined' && window.__PAGE_FILE || 'index.html';
  /* Blog yazıları dile özel; karşı dilde yazı olmayabilir, o dilin blog listesine gidilir. */
  if (hedef !== SITE_LANG && /^blog-/.test(dosya)) dosya = 'blog.html';
  return hedef === SITE_LANG ? dosya : SITE_LANG === 'TR' ? 'en/' + dosya : '../' + dosya;
}
function SiteHeader({
  lang,
  setLang,
  alwaysSolid
}) {
  const [open, setOpen] = useState(null);
  const [solid, setSolid] = useState(!!alwaysSolid);
  React.useEffect(() => {
    const onScroll = () => setSolid(!!alwaysSolid || window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: 'hdr' + (solid ? ' hdr-solid' : ''),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f1x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f2x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f3x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap hdr-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hdr-logo",
    src: solid ? window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_DARK : '../assets/tideon-wordmark.png' : window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../assets/tideon-wordmark-light.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, MENUS.map(([label, items], i) => typeof items === 'string' ? /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "navitem",
    onMouseEnter: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("a", {
    className: "navlink",
    href: L(items)
  }, label)) : /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "navitem",
    onMouseEnter: () => setOpen(i)
  }, /*#__PURE__*/React.createElement("button", {
    "aria-expanded": open === i,
    onClick: () => setOpen(open === i ? null : i)
  }, label, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    className: 'menu' + (i >= MENUS.length - 2 ? ' menu-edge' : '') + (open === i ? ' menu-open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu-grid"
  }, items.map(([t, d, href]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: L(href),
    onClick: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, d)))))))), /*#__PURE__*/React.createElement("div", {
    className: "hdr-right-grp",
    style: { display: "flex", alignItems: "center", gap: "var(--sp-4)" }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang"
  },
  /* Dil değişimi karşılık gelen sayfaya gider: /sayfa.html ↔ /en/sayfa.html
    LANG_URL zaten dile göre çözümlüyor; L() ile ikinci kez çözümlenmemeli. */
  [['TR', LANG_URL('TR')], ['EN', LANG_URL('EN')]].map(([l, href]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: href,
    "aria-pressed": SITE_LANG === l,
    hrefLang: l === 'TR' ? 'tr' : 'en'
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-primary btn-sm hdr-cta",
    href: L("index.html#demo")
  }, "Book demo"), /*#__PURE__*/React.createElement("a", {
    className: "hdr-login",
    href: L("login.html")
  }, "Sign in")), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    "aria-expanded": open === 'm',
    onClick: () => setOpen(open === 'm' ? null : 'm')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open === 'm' ? 'x' : 'menu',
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: 'mobile-nav' + (open === 'm' ? ' mobile-open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-6",
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: L("login.html"),
    onClick: () => setOpen(null)
  }, "Sign in")), MENUS.map(([label, items]) => typeof items === 'string' ? /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "stack-2"
  }, /*#__PURE__*/React.createElement("a", {
    href: L(items),
    onClick: () => setOpen(null)
  }, label)) : /*#__PURE__*/React.createElement("div", {
    key: label,
    className: "stack-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-invert"
  }, label), items.map(([t,, href]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: L(href),
    onClick: () => setOpen(null)
  }, t)))))));
}
function SiteFooter() {
  /* Ana menü (MENUS) yapısından türetilir: aynı başlıklar, aynı sıra.
     Düz connection olan başlıklar (Pricing) kendi kolonunda tek satır olarak durur. */
  /* Düz connection olan başlıklar (Pricing) kendi kolonu olmaz — Company kolonuna satır olarak girer. */
  const plain = MENUS.filter(([, it]) => typeof it === 'string').map(([label, href]) => [label, href]);
  const cols = MENUS.filter(([, it]) => typeof it !== 'string').map(([label, items], i, arr) => [label, [...items.map(([t,, href]) => [t, href]), ...(i === arr.length - 1 ? plain : [])]]);
  return /*#__PURE__*/React.createElement("footer", {
    className: "ftr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ftr-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../assets/tideon-wordmark-light.png',
    alt: "Tideon",
    style: {
      height: 20,
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "sm",
    style: {
      maxWidth: '34ch',
      color: 'rgba(255,255,255,.6)'
    }
  }, "AI-native treasury and cash flow management platform"), /*#__PURE__*/React.createElement("div", {
    className: "social"
  }, [['youtube', 'YouTube', '#'], ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/tideon-tms/'], ['instagram', 'Instagram', '#']].map(([ic, label, href]) => /*#__PURE__*/React.createElement("a", {
    key: ic,
    href: L(href),
    target: href === '#' ? undefined : '_blank',
    rel: href === '#' ? undefined : 'noreferrer',
    "aria-label": label,
    title: label
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("h5", null, h), items.map(it => Array.isArray(it) ? /*#__PURE__*/React.createElement("a", {
    key: it[0],
    href: L(it[1])
  }, it[0]) : /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "index.html"
  }, it))))), /*#__PURE__*/React.createElement("div", {
    className: "ftr-legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: L("gizlilik-politikasi.html")
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: L("kvkk-aydinlatma-metni.html")
  }, "Data Protection Notice"), /*#__PURE__*/React.createElement("a", {
    href: L("cerez-politikasi.html")
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.dispatchEvent(new Event('tideon:cookie-settings'))
  }, "Cookie preferences")), /*#__PURE__*/React.createElement("div", {
    className: "ftr-base"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tideon"))));
}
Object.assign(window, {
  Icon,
  SiteHeader,
  SiteFooter
});

/* Hukuki sayfa şablonu — tek kolon, dar ölçü, süsleme yok. */
function Fill({
  children
}) {
  return /*#__PURE__*/React.createElement("mark", {
    className: "fill"
  }, children);
}
function LegalPage({
  title,
  updated,
  toc,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "legal-hd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Legal notice"), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", {
    className: "legal-date"
  }, "Last updated: 29.09.2026"))), /*#__PURE__*/React.createElement("section", {
    className: "legal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, toc ? /*#__PURE__*/React.createElement("nav", {
    className: "legal-toc",
    "aria-label": "Contents"
  }, /*#__PURE__*/React.createElement("span", null, "Contents"), /*#__PURE__*/React.createElement("ol", null, toc.map(([id, label]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + id
  }, label))))) : null, children, /*#__PURE__*/React.createElement("div", {
    className: "legal-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "gizlilik-politikasi.html"
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "kvkk-aydinlatma-metni.html"
  }, "Data Protection Notice"), /*#__PURE__*/React.createElement("a", {
    href: "cerez-politikasi.html"
  }, "Cookie Policy")))));
}
function LegalSection({
  id,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "legal-sec",
    id: id
  }, /*#__PURE__*/React.createElement("h2", null, title), children);
}

/* Çerez onay bandı — onay verilmeden analitik yüklenmez. */
const COOKIE_KEY = 'tideon_cookie_consent';
function CookieBanner() {
  const [state, setState] = React.useState('hidden');
  React.useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(COOKIE_KEY);
    } catch (e) {}
    if (!saved) {
      setState('ask');
      return;
    }
    if (saved === 'all') loadAnalytics();
  }, []);
  React.useEffect(() => {
    const open = () => setState('ask');
    window.addEventListener('tideon:cookie-settings', open);
    return () => window.removeEventListener('tideon:cookie-settings', open);
  }, []);
  const decide = v => {
    try {
      localStorage.setItem(COOKIE_KEY, v);
    } catch (e) {}
    if (v === 'all') loadAnalytics();
    setState('hidden');
  };
  function loadAnalytics() {
    /* Analitik yalnızca onay sonrası yüklenir; onay öncesi hiçbir çerez yazılmaz. */
    if (window.__tideonAnalytics) return;
    window.__tideonAnalytics = true;
    var GA_ID = 'G-C2CBDRWD6K';
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  if (state !== 'ask') return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ck",
    role: "dialog",
    "aria-label": "Cookie preferences",
    "aria-modal": "false"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ck-x",
    type: "button",
    "aria-label": "Close",
    onClick: () => setState('hidden')
  }, "\xD7"), /*#__PURE__*/React.createElement("strong", null, "Your cookie preference"), /*#__PURE__*/React.createElement("p", null, "Essential cookies are required for the site to work. Analytics cookies run only with your consent."), /*#__PURE__*/React.createElement("div", {
    className: "ck-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => decide('all')
  }, "Accept all"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => decide('essential')
  }, "Reject all")), /*#__PURE__*/React.createElement("a", {
    className: "ck-more",
    href: "cerez-politikasi.html"
  }, "Learn more"));
}
Object.assign(window, {
  Fill,
  LegalPage,
  LegalSection,
  CookieBanner
});

/* Platform ekranlarından received parçalar — anonimleştirilmiş.
   Source: Nakit Pozisyonu · 13 Haftalık Nakit Akış Tahmini · Çek ve Senet Portföyü ·
   Covenant Takibi · Reconciliation · Payment Merkezi (docs/design/rendered).
   Bank, şirket ve karşı taraf adları ile hesap numaraları değiştirildi;
   yapı, ölçü ve renk anlamı platformun kendi token'larından geliyor. */

/* Elimizdeki gerçek logo dosyaları — mono görünüm CSS filtresiyle veriliyor.
   Listede olmayan bankalar boş yuva olarak durur. */
/* Yayında veri URI, geliştirmede dosya yolu. */
const A = p => window.TIDEON_ASSETS && window.TIDEON_ASSETS[p] || '../assets/' + p;
const BANK_LOGOS = {
  akbank: A('banks/akbank.svg'),
  garanti: A('banks/garanti.svg'),
  is: A('banks/is.svg'),
  ziraat: A('banks/ziraat.svg'),
  vakif: A('banks/vakif.svg'),
  yapikredi: A('banks/yapikredi-trim.png'),
  deniz: A('banks/deniz.svg'),
  halk: A('banks/halk.svg'),
  qnb: A('banks/qnb.svg'),
  teb: A('banks/teb-green.png')
};
/* Optik ağırlığı diğerlerinden belirgin fazla olan logolar küçültülür. */
/* Açık zeminli şeritlerde koyu mürekkepli varyant kullanılır (beyaz mürekkep görünmez). */
const BANK_LOGOS_LIGHT = {
  teb: A('banks/teb.png')
};
/* ERP and accounting sistemleri — logo dosyaları geldikçe ERP_LOGOS'a eklenir. */
const ERPS = [['logo', 'Logo'], ['mikro', 'Mikro Yazılım'], ['netsis', 'Netsis'], ['sap', 'SAP'], ['dynamics', 'Dynamics 365'], ['oracle', 'Oracle'], ['canias', 'Canias']];
/* Source dosyaların iç boşluğu programatik olarak kırpıldı; şeritte eşit optik ağırlık için. */
const ERP_LOGOS = {
  logo: A('erp/logo-trim.png'),
  mikro: A('erp/mikro-trim.png'),
  netsis: A('erp/netsis-trim.png'),
  sap: A('erp/sap.svg'),
  dynamics: A('erp/dynamics-trim.png'),
  oracle: A('erp/oracle.svg'),
  canias: A('erp/canias-trim.png')
};
/* Dolu plakalı logo: gri tonlamada soluk kalmasın, oyma yazı okunsun. */
const ERP_PLATE = {
  netsis: true
};
/* Kapsülde optik ağırlığı fazla duran logolar. */
const ERP_SMALL = {
  logo: true,
  mikro: true
};
const BANK_HEAVY = {
  qnb: true,
  deniz: true
};
const BANK_BIG = {};
const BANK_KEY = {
  'Akbank': 'akbank',
  'Garanti BBVA': 'garanti',
  'İş Bankası': 'is',
  'Ziraat Bankası': 'ziraat',
  'VakıfBank': 'vakif',
  'Yapı Kredi': 'yapikredi',
  'DenizBank': 'deniz',
  'Halkbank': 'halk',
  'QNB': 'qnb',
  'TEB': 'teb'
};
const BANKS = {
  ziraat: ['Ziraat Bankası', 'Z'],
  is: ['İş Bankası', 'İŞ'],
  garanti: ['Garanti BBVA', 'G'],
  yapikredi: ['Yapı Kredi', 'YK'],
  teb: ['TEB', 'TEB'],
  akbank: ['Akbank', 'A'],
  vakif: ['VakıfBank', 'VB'],
  qnb: ['QNB', 'Q'],
  deniz: ['DenizBank', 'D'],
  halk: ['Halkbank', 'H']
};

/* Bank amblemleri (favicon ölçüsü) — kurumların kendi ikon dosyalarından. */
const BANK_ICONS = {
  ziraat: A('banks/icons/ziraat.svg'),
  is: A('banks/icons/is.svg'),
  garanti: A('banks/icons/garanti.svg'),
  yapikredi: A('banks/icons/yapikredi-mark.png'),
  qnb: A('banks/icons/qnb.jpeg'),
  akbank: A('banks/icons/akbank.png'),
  vakif: A('banks/icons/vakif.svg'),
  halk: A('banks/icons/halk.svg'),
  teb: A('banks/icons/teb.svg')
};

/* Bank satırı — amblem + ad; amblemi olmayanda monogram karo. */
function Bank({
  id
}) {
  const [name, mono] = BANKS[id] || [id, id.slice(0, 1).toUpperCase()];
  return /*#__PURE__*/React.createElement("span", {
    className: "bnk"
  }, BANK_ICONS[id] ? /*#__PURE__*/React.createElement("img", {
    className: "bnk-ic",
    src: BANK_ICONS[id],
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "bnk-i"
  }, mono), name);
}
function Fresh({
  tone = 'ok',
  children
}) {
  const c = tone === 'ok' ? 'var(--ok-600)' : tone === 'warn' ? 'var(--warn-600)' : 'var(--risk-600)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 11,
      fontWeight: 600,
      color: c,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: c
    }
  }), children);
}
function PfCard({
  title,
  note,
  children,
  flush,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf",
    style: style
  }, title ? /*#__PURE__*/React.createElement("div", {
    className: "pf-hd"
  }, /*#__PURE__*/React.createElement("span", null, title), note ? /*#__PURE__*/React.createElement("span", {
    className: "pf-note"
  }, note) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: flush ? '' : 'pf-bd'
  }, children));
}

/* Son 6 hane 3 saniye boyunca değişir, sonra sabitlenir. */
function SettleNum({
  text,
  delay = 0
}) {
  const [val, setVal] = React.useState(text);
  React.useEffect(() => {
    const idx = [];
    for (let i = text.length - 1; i >= 0 && idx.length < 6; i--) if (/[0-9]/.test(text[i])) idx.push(i);
    if (!idx.length) return;
    let tick, stop, spin, again;
    const start = () => {
      spin = setInterval(() => {
        const a = text.split('');
        idx.forEach(i => {
          a[i] = String(Math.floor(Math.random() * 10));
        });
        setVal(a.join(''));
      }, 190);
      stop = setTimeout(() => {
        clearInterval(spin);
        setVal(text);
        again = setTimeout(start, 2600); // sabitlendikten sonra baştan
      }, 3000);
    };
    tick = setTimeout(start, delay);
    return () => {
      [tick, stop, again].forEach(clearTimeout);
      clearInterval(spin);
    };
  }, [text, delay]);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums'
    }
  }, val);
}
function Kpi({
  k,
  v,
  meta,
  unknown,
  pill,
  fresh,
  settle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'kpi' + (unknown ? ' unknown' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, k), fresh ? /*#__PURE__*/React.createElement(Fresh, {
    tone: fresh[0]
  }, fresh[1]) : null), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, settle != null ? /*#__PURE__*/React.createElement(SettleNum, {
    text: v,
    delay: settle
  }) : v), pill ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + pill[0]
  }, pill[1])) : null, meta ? /*#__PURE__*/React.createElement("div", {
    className: "why redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)) : null);
}

/* Cash position — KPI şeridi */
function KpiStrip({
  cols = 3
}) {
  const items = [{
    k: 'Total cash',
    v: 'TRY 184,200,000',
    meta: '▲ 1.9% · 7 days',
    fresh: ['ok', '12 min']
  }, {
    k: 'Available cash',
    v: 'TRY 171,400,000',
    meta: 'Blocked TRY 9,100,000 · pledged TRY 3,700,000 deducted · blocked amount unreadable on 1 account',
    fresh: ['warn', '3 h']
  }, {
    k: 'Net debt',
    v: 'TRY 96,800,000',
    pill: ['pill-warn', 'On an assumption'],
    meta: 'Financial debt could not be read on one account, so debt is understated.'
  }, {
    k: 'Days cash on hand',
    v: 'Could not be calculated',
    unknown: true,
    meta: '4 account codes are unmapped for the non-cash expense split.'
  }].slice(0, cols === 4 ? 4 : 3);
  return /*#__PURE__*/React.createElement("div", {
    className: "kpis"
  }, items.map((p, i) => /*#__PURE__*/React.createElement(Kpi, _extends({
    key: p.k
  }, p, {
    settle: i < 3 ? i * 1100 : null
  }))));
}

/* Cash position — today dikkat gerektirenler */
function AttentionList() {
  const rows = [['crit', 'Bounced cheque — Customer C', 'TRY 1,240,000', ''], ['warn', 'Garanti BBVA connection dropped — 2 accounts', '09:41', 'Flagged in three places on this screen: concentration share, available amount, total'], ['crit', 'Ziraat Bankası concentration 41.3% — threshold 40%', 'today', ''], ['crit', 'USD short position limit exceeded', 'TRY (22.8) m', ''], ['neutral', 'Supplier transfer awaiting approval', 'TRY 8,450,000', ''], ['neutral', 'Social security and tax payment — 26 August', 'TRY 14,900,000', '']];
  // keçeli kalem: renkler sabit, çizim sırası her yüklemede rastgele
  const marker = {
    'TRY 1,240,000': 0,
    '(TRY 22,800,000)': 1,
    'TRY 8,450,000': 2,
    'TRY 14,900,000': 3
  };
  const order = React.useMemo(() => {
    const a = [0, 1, 2, 3];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "att"
  }, rows.map(([tone, text, amt, meta], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: 'att-row att-' + tone
  }, /*#__PURE__*/React.createElement("span", {
    className: "att-mark"
  }, tone === 'neutral' ? '·' : '!'), /*#__PURE__*/React.createElement("span", {
    className: "att-txt"
  }, text, meta ? /*#__PURE__*/React.createElement("span", {
    className: "att-meta"
  }, meta) : null), amt ? marker[amt] != null ? /*#__PURE__*/React.createElement("span", {
    className: 'num att-amt hl hl-' + marker[amt],
    style: {
      '--hl-delay': order.indexOf(marker[amt]) * 1.5 + 's'
    }
  }, amt) : /*#__PURE__*/React.createElement("span", {
    className: "num att-amt"
  }, amt) : null)), /*#__PURE__*/React.createElement("a", {
    className: "att-more",
    href: "#akis"
  }, "All attention items \u2192"));
}

/* Cash position — para birimi kırılımı ve FX açık pozisyon */
function FxDiverging() {
  const rows = [['TRY', 0, 62, '32.2', false], ['USD', 46, 30, '(22,8)', true], ['EUR', 8, 12, '4.3', false], ['GBP', 1, 4, '2.9', false]];
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx-head"
  }, /*#__PURE__*/React.createElement("span", null, "\u25C0 Liabilities"), /*#__PURE__*/React.createElement("span", null, "Assets \u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "fx-net"
  }, "Net (TRY million)")), rows.map(([cur, li, as, net, over]) => /*#__PURE__*/React.createElement("div", {
    key: cur,
    className: "fx-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx-cur"
  }, cur), /*#__PURE__*/React.createElement("span", {
    className: "fx-side fx-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'fx-bar' + (over ? ' over' : ''),
    style: {
      width: li * 1.6 + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "fx-axis"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fx-side"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fx-bar fx-asset",
    style: {
      width: as * 1.6 + '%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: 'num fx-netv' + (over ? ' over' : '')
  }, net, over ? ' !' : ''))), /*#__PURE__*/React.createElement("div", {
    className: "fx-legend"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--n-700)'
    }
  }), "Assets"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--g-400)'
    }
  }), "Liabilities"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--risk-600)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--risk-600)'
    }
  }), "Breached limit")), /*#__PURE__*/React.createElement("div", {
    className: "note note-crit"
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", null, "The USD short position limit of TRY 15 million was breached today \u2014 an actual breach. Derivative hedges included.")));
}

/* Cash position — hesap bazında bakiyeler */
function AccountsTable() {
  const cols = '1.25fr .9fr 1fr .5fr 1.15fr 1fr';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat tbl-scan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Legal entity"), /*#__PURE__*/React.createElement("div", null, "Bank"), /*#__PURE__*/React.createElement("div", null, "Account"), /*#__PURE__*/React.createElement("div", null, "CCY"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Balance (TRY)"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Available")), [['Holding Inc.', 'ziraat', 'TR** **** 8842', 'TRY', '41,280,640.15', '40,040,640.15', ''], ['Holding Inc.', 'is', 'TR** **** 4412', 'TRY', '22,104,880.43', '22,104,880.43', ''], ['Manufacturing Inc.', 'yapikredi', 'TR** **** 3308', 'TRY', '22,144,100.90', '20,044,100.90', ''], ['Manufacturing Inc.', 'garanti', 'TR** **** 7720', 'EUR', '28,793,259.00', 'hatch', 'connection'], ['Logistics Inc.', 'vakif', 'TR** **** 1180', 'TRY', '18,204,115.64', '18,204,115.64', ''], ['Logistics Inc.', 'qnb', 'TR** **** 6653', 'TRY', '14,118,900.28', '14,118,900.28', '']].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "td",
    style: {
      gridTemplateColumns: cols,
      '--scan-delay': i * 0.55 + 's'
    }
  }, /*#__PURE__*/React.createElement("div", null, r[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Bank, {
    id: r[1]
  })), /*#__PURE__*/React.createElement("div", {
    className: "mono muted"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[3]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[4]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[5] === 'hatch' ? /*#__PURE__*/React.createElement("span", {
    className: "cell-hatch"
  }, "connection \u2197") : r[5]))), /*#__PURE__*/React.createElement("div", {
    className: "td td-total",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "9 accounts"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "mixed"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "184,220,418.32"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "171,354,618.32"))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 8
    },
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Weekly cash movement and closing balance */
function ForecastWeeks() {
  const weeks = [['H31', 58, 42], ['H32', 64, 48], ['H33', 52, 60], ['H34', 70, 55], ['H35', 61, 58], ['H36', 74, 52], ['H37', 56, 63], ['H38', 66, 59], ['H39', 48, 68], ['H40', 57, 64], ['H41', 44, 72], ['H42', 50, 70], ['H43', 38, 78]];
  const W = 620,
    H = 210,
    ax = 118,
    cw = W / weeks.length,
    bw = 15;
  const close = [96, 101, 92, 96, 88, 94, 83, 79, 66, 60, 44, 26, -12];
  const cy = v => 190 - (v + 20) / 130 * 150;
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: '100%',
      height: 210,
      display: 'block'
    },
    role: "img",
    "aria-label": "Weekly cash movement and closing balance"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "fh",
    width: "7",
    height: "7",
    patternTransform: "rotate(135)",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "7",
    fill: "#F4F7FA"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "3.5",
    height: "7",
    fill: "#EBEFF5"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    x2: W,
    y1: ax,
    y2: ax,
    stroke: "var(--g-300)",
    strokeWidth: "1"
  }), weeks.map(([w, inn, out], i) => {
    const x = i * cw + cw / 2,
      est = i > 2;
    return /*#__PURE__*/React.createElement("g", {
      key: w
    }, /*#__PURE__*/React.createElement("rect", {
      x: x - bw - 1,
      y: ax - inn,
      width: bw,
      height: inn,
      fill: est ? 'url(#fh)' : 'var(--n-700)',
      stroke: est ? 'var(--g-300)' : 'none'
    }), /*#__PURE__*/React.createElement("rect", {
      x: x + 1,
      y: ax,
      width: bw,
      height: out,
      fill: est ? 'url(#fh)' : 'var(--g-400)',
      stroke: est ? 'var(--g-300)' : 'none'
    }), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: H - 2,
      textAnchor: "middle",
      fontSize: "8",
      fill: "var(--g-500)"
    }, w));
  }), /*#__PURE__*/React.createElement("line", {
    x1: 3 * cw,
    x2: 3 * cw,
    y1: "4",
    y2: H - 14,
    stroke: "var(--n-900)",
    strokeWidth: "1",
    strokeDasharray: "3 2"
  }), /*#__PURE__*/React.createElement("text", {
    x: 3 * cw + 4,
    y: "12",
    fontSize: "8",
    fontWeight: "600",
    fill: "var(--n-900)"
  }, "today"), /*#__PURE__*/React.createElement("polyline", {
    points: close.map((v, i) => `${i * cw + cw / 2},${cy(v)}`).join(' '),
    fill: "none",
    stroke: "var(--n-900)",
    strokeWidth: "1.5",
    pathLength: "1",
    className: "fc-line"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12 * cw + cw / 2,
    cy: cy(close[12]),
    r: "3.5",
    fill: "var(--risk-600)",
    className: "fc-dot"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 16,
      flexWrap: 'wrap',
      fontSize: 11,
      color: 'var(--g-500)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--n-700)'
    }
  }), "Sign in"), /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--g-400)'
    }
  }), "Outflow"), /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 9,
      height: 9,
      background: 'var(--hatch-unknown)',
      border: '1px solid var(--g-300)'
    }
  }), "Forecast"), /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: 14,
      height: 2,
      background: 'var(--n-900)'
    }
  }), "Closing balance"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "axis: TRY million")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      alignItems: 'stretch',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "note note-crit",
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", null, "W43 closes negative \xB7 TRY (4,180,000)")), /*#__PURE__*/React.createElement("div", {
    className: "note note-warn",
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u25B2"), /*#__PURE__*/React.createElement("span", null, "W42 is below the buffer threshold \xB7 TRY 18,700,000"))));
}

/* Forecast — sağ kolon kartları */
function ForecastRail() {
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf pf-bd"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Week that goes negative"), /*#__PURE__*/React.createElement(Fresh, null, "12 min")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 28px/1.1 var(--font-sans)',
      letterSpacing: '-.02em',
      color: 'var(--n-900)',
      marginTop: 6
    }
  }, "H43"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--g-600)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "2 \u2013 8 November 2026 \xB7 12 weeks from today. Closing ", /*#__PURE__*/React.createElement("b", null, "(TRY 4,180,000)"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "pf pf-bd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Active assumptions"), /*#__PURE__*/React.createElement("div", {
    className: "stack-2",
    style: {
      marginTop: 8,
      fontSize: 12,
      color: 'var(--g-600)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u25BE Overdue receivables are assumed collected with an 18-day delay, so the gap is shown ", /*#__PURE__*/React.createElement("b", null, "LOWER"), " than it is."), /*#__PURE__*/React.createElement("div", null, "\u25BE The revolving facility renews in W41. If it is not renewed, W41 goes negative too."))), /*#__PURE__*/React.createElement("div", {
    className: "pf pf-bd",
    style: {
      background: 'var(--hatch-unknown)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Not calculable"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--g-600)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "4 cells \xB7 no FX data for one entity and no W33 drawdown.")));
}

/* Cheque and promissory note portfolio — çek listesi */
function ChequeList() {
  const cols = '28px .9fr 1.5fr 1.1fr .9fr 1fr .9fr';
  const rows = [[true, '4471203', 'Customer A', '12,847,396.51', '21.08.2026', '21.08.2026', ['pill-ok', 'In portfolio']], [true, '4471198', 'Customer B', '3,914,352.00', '29.10.2026', '30.10.2026 ⇥', ['pill-warn', 'Rolled']], [false, '4470884', 'Customer C', '1,240,000.00', '04.08.2026', '04.08.2026', ['pill-risk', 'Bounced']], [false, '4471077', 'Customer D', '2,512,044.51', '12.09.2026', 'hatch', ['pill-unk', 'No calendar']], [false, '4470991', 'Customer E', '1,902,400.00', '19.09.2026', '21.09.2026 ⇥', ['pill-ok', 'In portfolio']], [true, '4470963', 'Customer F', '4,208,100.00', '02.10.2026', '02.10.2026', ['pill-ok', 'In portfolio']]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Cheque no"), /*#__PURE__*/React.createElement("div", null, "Counterparty"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Amount \u2193"), /*#__PURE__*/React.createElement("div", null, "Maturity"), /*#__PURE__*/React.createElement("div", null, "Payment day"), /*#__PURE__*/React.createElement("div", null, "Status")), rows.map((r, i) => {
    const seq = rows.slice(0, i).filter(x => x[0]).length; // yalnızca seçili 3 satır sırayla
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'td' + (r[0] ? ' td-sel' : ''),
      style: {
        gridTemplateColumns: cols,
        '--chk-delay': seq * 1.05 + 's'
      }
    }, /*#__PURE__*/React.createElement("div", null, r[0] ? /*#__PURE__*/React.createElement("span", {
      className: "chk chk-seq"
    }, /*#__PURE__*/React.createElement("i", null, "\u2713")) : /*#__PURE__*/React.createElement("span", {
      className: "chk"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mono"
    }, r[1]), /*#__PURE__*/React.createElement("div", null, r[2]), /*#__PURE__*/React.createElement("div", {
      className: "num"
    }, r[3]), /*#__PURE__*/React.createElement("div", null, r[4]), /*#__PURE__*/React.createElement("div", null, r[5] === 'hatch' ? /*#__PURE__*/React.createElement("span", {
      className: "cell-hatch"
    }) : r[5]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: 'pill ' + (r[0] ? 'pill-zoom ' : '') + r[6][0],
      style: {
        '--zoom-delay': seq * 1.05 + 's'
      }
    }, r[6][1])));
  }), /*#__PURE__*/React.createElement("div", {
    className: "td td-total",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "280 records \xB7 from the server"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "418,640,220.75"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--n-900)'
    }
  }, "3 cheques selected \xB7 TRY 20,969,848.51"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi",
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 8
    },
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Cheque and promissory note portfolio — iskonto simülatörü çıktısı */
function DiscountSim() {
  const rows = [['Face value', '20,969,848.51'], ['Discount amount', '(1,448,930.35)'], ['Banking tax · 5%', '(72,446.52)'], ['Commission · 0.15%', '(31,454.77)']];
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-grid"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Bank"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Bank, {
    id: "yapikredi"
  })), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Annual rate"), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "48.50%"), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Day count"), /*#__PURE__*/React.createElement("span", null, "ACT/365"), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Value date"), /*#__PURE__*/React.createElement("span", null, "T+1 \xB7 07.08.2026")), /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat"
  }, rows.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "td",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, v))), /*#__PURE__*/React.createElement("div", {
    className: "td td-total",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Net proceeds"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "19,417,016.86")), /*#__PURE__*/React.createElement("div", {
    className: "td",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "Effective annual cost"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "assumed"
  }, "54.82%")))));
}

/* Covenant detay paneli — platformun kendi detay kartından uyarlandı
   (docs/design/Covenant Takibi). Test edilemeyen şart durumu gösterilir. */
const CD_HIST = [['Q4 2025', '34.2%', 100, 'audit report', false], ['Q3 2025', '33.1%', 97, 'audit report', false], ['Q2 2025', '31.4%', 92, 'audit report', false], ['Q1 2025', '29.6%', 87, 'below threshold', true]];
function CovenantDetail({
  parts = ["hd", "banner", "def", "hist", "block", "foot"]
}) {
  const has = k => parts.indexOf(k) > -1;
  return /*#__PURE__*/React.createElement("div", {
    className: "cd"
  }, has('hd') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-hd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cd-eyebrow"
  }, "Covenant detail"), /*#__PURE__*/React.createElement("strong", null, "Equity / assets"), /*#__PURE__*/React.createElement("span", {
    className: "cd-sub"
  }, "Bank D \xB7 bank guarantee limit \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "redact-chip redact-chip-sm"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-unk"
  }, "Could not be tested")) : null, has('banner') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-banner"
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))) : null, has('def') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-sec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-eyebrow"
  }, "Definition and formula"), /*#__PURE__*/React.createElement("p", null, "A financial covenant defined in the contract. Threshold \u2265 30% \xB7 measured quarterly."), /*#__PURE__*/React.createElement("code", null, "Equity \xF7 Total assets"), /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Linked metric"), /*#__PURE__*/React.createElement("b", null, "Equity / assets \u2192"))) : null, has('hist') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-sec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-eyebrow"
  }, "Past measurements"), CD_HIST.map(([p, v, w, note, warn]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "cd-hist"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-per"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-chip redact-chip-sm"
  })), /*#__PURE__*/React.createElement("span", {
    className: "cd-bar"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: w + '%',
      background: warn ? 'var(--warn-600)' : 'var(--g-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "cd-val",
    style: warn ? {
      color: 'var(--warn-600)'
    } : null
  }, v), /*#__PURE__*/React.createElement("span", {
    className: "cd-note"
  }, note)))) : null, has('block') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-sec cd-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-eyebrow"
  }, "Why it cannot be tested \xB7 how to fix it"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi",
    style: {
      margin: '6px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", {
    className: "cd-cta"
  }, "Confirm the mapping")) : null, has('foot') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Last measurement"), /*#__PURE__*/React.createElement("span", {
    className: "redact-chip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Next measurement"), /*#__PURE__*/React.createElement("span", {
    className: "redact-chip redact-chip-warn"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Notification obligation"), /*#__PURE__*/React.createElement("b", null, "45 days from quarter close"))) : null);
}

/* Covenant takibi */
function CovenantTable() {
  const cols = '1.6fr .8fr .7fr .8fr 1.1fr';
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Covenant"), /*#__PURE__*/React.createElement("div", null, "Threshold"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Value"), /*#__PURE__*/React.createElement("div", null, "Period"), /*#__PURE__*/React.createElement("div", null, "Result")), [['Net debt / EBITDA', '≤ 3.50x', '3.82x', 'Q2 2026', ['pill-risk', 'Breach']], ['Current ratio', '≥ 1.20x', '1.44x', 'Q2 2026', ['pill-ok', 'Compliant']], ['Interest coverage', '≥ 2.00x', '2.08x', 'Q4 2026', ['pill-warn', 'Projected breach']], ['Equity / assets', '≥ 30%', '—', 'Q2 2026', ['pill-unk', 'Could not be tested']]].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, r[0]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[3]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: 'pill pill-zoom ' + r[4][0],
    style: {
      '--zoom-delay': i * 1.6 + 's'
    }
  }, r[4][1])))));
}

/* Reconciliation — banka / muhasebe eşleşmesi */
function ReconTable() {
  const cols = '.9fr 1.6fr 1fr 1fr 1.1fr';
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Date"), /*#__PURE__*/React.createElement("div", null, "Bank description"), /*#__PURE__*/React.createElement("div", null, "Ledger account"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Amount"), /*#__PURE__*/React.createElement("div", null, "Match")), [['04.08.2026', 'EFT — Customer A tahsilat', '120 01 001', '1,240,000', ['pill-ok', 'Automatic']], ['07.08.2026', 'Account maintenance fee', '780 01 004', '4,200', ['pill-ok', 'Automatic']], ['11.08.2026', 'Transfer — intercompany', '131 02 003', '15,000,000', ['pill-warn', 'Manual approval']], ['18.08.2026', 'Banking tax accrual', '—', '86,420', ['pill-unk', 'Account not mapped']]].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[0]), /*#__PURE__*/React.createElement("div", null, r[1]), /*#__PURE__*/React.createElement("div", {
    className: "mono muted"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[3]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + r[4][0]
  }, r[4][1]))))), /*#__PURE__*/React.createElement("div", {
    className: "note note-mute redacted",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}

/* Cash position — banka konsantrasyonu */
function Concentration() {
  const rows = [['ziraat', 41.3, '41.3', 'TRY 76,100,000', 'over'], ['is', 22.3, '22.3', 'TRY 41,000,000', ''], ['garanti', 16.3, '16.3', 'TRY 30,000,000', 'hatch'], ['yapikredi', 12.0, '12.0', 'TRY 22,100,000', ''], ['akbank', 8.2, '8.2', 'TRY 15,000,000', '']];
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-2"
  }, rows.map(([b, pct, pctLabel, amt, state], i) => /*#__PURE__*/React.createElement("div", {
    key: b,
    className: "conc-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'conc-b' + (state === 'over' ? ' over' : '')
  }, /*#__PURE__*/React.createElement(Bank, {
    id: b
  })), /*#__PURE__*/React.createElement("span", {
    className: "conc-track"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'conc-fill conc-sweep' + (state === 'hatch' ? ' hatched' : ''),
    style: {
      '--w': pct + '%',
      '--sweep-delay': i * 0.35 + 's',
      width: pct + '%',
      background: state === 'over' ? 'var(--risk-600)' : undefined
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "num",
    style: {
      width: 52
    }
  }, pctLabel, "%"), /*#__PURE__*/React.createElement("span", {
    className: 'num conc-amt' + (state === 'hatch' ? ' warn' : '')
  }, amt))), /*#__PURE__*/React.createElement("div", {
    className: "note note-crit redact-note",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Risk — finansal oran şeridi (anonimleştirilmiş) */
/* Covenant tablosundaki şartlarla kesişmeyen operasyonel oranlar. */
const RATIOS = [['Quick ratio', '0.92', 'policy ≥ 0.80', 'ok'], ['Gross margin', '24.6%', 'last year 23.1%', 'ok'], ['Short-term debt share', '61.4%', 'policy ≤ 55%', 'risk'], ['Cash / short-term debt', '18.2%', 'policy ≥ 15%', 'ok']];
const CCC = [['Receivables turnover', '58 days', '+4'], ['Inventory turnover', '41 days', '+9'], ['Payables turnover', '(37) days', '−2']];
function RatioBand() {
  return /*#__PURE__*/React.createElement("div", {
    className: "rband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rb-grid"
  }, RATIOS.map(([k, v, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: 'rb-cell is-' + s
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("i", null, t)))), /*#__PURE__*/React.createElement("div", {
    className: "rb-ccc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Cash conversion cycle ", /*#__PURE__*/React.createElement("b", null, "62 days")), /*#__PURE__*/React.createElement("div", {
    className: "rb-parts"
  }, CCC.map(([k, v, d]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "rb-part"
  }, /*#__PURE__*/React.createElement("i", null, k), /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("em", null, d))))));
}

/* Reconciliation — gerçek ekrandan kesitler (anonimleştirilmiş) */
function BalanceBridge() {
  return /*#__PURE__*/React.createElement("div", {
    className: "brg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brg-hd"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Balance bridge"), " bank ledger \u2192 ERP ledger"), /*#__PURE__*/React.createElement("i", null, "Variance must equal the total of unreconciled items")), /*#__PURE__*/React.createElement("div", {
    className: "brg-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brg-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Bank ledger"), /*#__PURE__*/React.createElement("b", null, "184,220,418.32"), /*#__PURE__*/React.createElement("i", null, "1,284 hareket \xB7 10 accounts")), /*#__PURE__*/React.createElement("div", {
    className: "brg-op"
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    className: "brg-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "ERP ledger"), /*#__PURE__*/React.createElement("b", null, "183,099,655.18"), /*#__PURE__*/React.createElement("i", null, "1,261 records \xB7 chart-of-accounts mapped")), /*#__PURE__*/React.createElement("div", {
    className: "brg-op"
  }, "="), /*#__PURE__*/React.createElement("div", {
    className: "brg-cell is-warn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Unexplained gap"), /*#__PURE__*/React.createElement("b", null, "1,120,763.14"), /*#__PURE__*/React.createElement("i", null, "86 items \xB7 threshold exceeded")), /*#__PURE__*/React.createElement("div", {
    className: "brg-split"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Breakdown of the gap"), /*#__PURE__*/React.createElement("div", {
    className: "brg-row"
  }, /*#__PURE__*/React.createElement("span", null, "In the bank, not in the ERP"), /*#__PURE__*/React.createElement("b", null, "886,400.00")), /*#__PURE__*/React.createElement("div", {
    className: "brg-row"
  }, /*#__PURE__*/React.createElement("span", null, "In the ERP, not at the bank"), /*#__PURE__*/React.createElement("b", null, "(268,900.00)")), /*#__PURE__*/React.createElement("div", {
    className: "brg-row"
  }, /*#__PURE__*/React.createElement("span", null, "FX revaluation difference"), /*#__PURE__*/React.createElement("b", null, "503,263.14")))));
}
const MATCH_TABS = [['Suggested matches', '24'], ['Unmatched', '73'], ['Reconciled', '1,164'], ['Manually linked', '7']];
const MATCH_ROWS = [['06.08', 'Incoming transfer · counterparty A', '9,412,880.00', 'Invoice 2026/1180', '9,412,880.00', '—', 96], ['05.08', 'Toplu EFT · 118 instructions', '(3,402,880.14)', 'Batch journal 2026/8804', '(3,402,880.14)', '—', 94], ['04.08', 'EUR receipt · counterparty B', '28,793,259.00', 'Invoice 2026/882', '28,787,137.00', '6,122.00', 71], ['03.08', 'Cheque discount net proceeds', '3,948,825.37', 'Discount 4470963', '3,948,825.37', '—', 88], ['02.08', 'Incoming wire · sender name empty', '410,288.00', '—', '—', '—', 42]];
function MatchTable() {
  const cols = '58px 1.6fr 1fr 1.2fr 1fr 78px 116px';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mtabs"
  }, MATCH_TABS.map(([t, n], i) => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: 'mtab' + (i === 0 ? ' is-on' : '')
  }, t, /*#__PURE__*/React.createElement("i", null, n)))), /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Date"), /*#__PURE__*/React.createElement("div", null, "Bank transaction"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Bank amount"), /*#__PURE__*/React.createElement("div", null, "ERP entry"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "ERP amount"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Variance"), /*#__PURE__*/React.createElement("div", null, "Match confidence")), MATCH_ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mono muted"
  }, r[0]), /*#__PURE__*/React.createElement("div", null, r[1]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[3]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[4]), /*#__PURE__*/React.createElement("div", {
    className: 'num' + (r[5] !== '—' ? ' is-warn-num' : '')
  }, r[5]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "conf",
    style: {
      '--conf-delay': i * 0.28 + 's'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: r[6] + '%',
      background: r[6] >= 80 ? 'var(--ok-600)' : r[6] >= 60 ? 'var(--warn-600)' : 'var(--risk-600)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "conf-n"
  }, r[6], "%"))))), /*#__PURE__*/React.createElement("div", {
    className: "mbar"
  }, /*#__PURE__*/React.createElement("b", null, "3 suggestions selected"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-amt"
  }, "TRY 9,958,825.23"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-btn"
  }, "Approve the match"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-gh"
  }, "Reject and set aside"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-gh"
  }, "Create rule"), /*#__PURE__*/React.createElement("i", null, "Only high-confidence matches are pre-selected")));
}
const UNMATCHED = [['In the bank, not in the ERP', '42 items · TRY 886,400.00', [['08.08', 'Fee deduction · wire commission', '(204,100.55)', '1 day'], ['07.08', 'Incoming wire · sender name empty', '410,288.00', '2 days'], ['05.08', 'Banking tax accrual', '(72,446.52)', '4 days']]], ['In the ERP, not at the bank', '31 items · TRY (268,900.00)', [['06.08', 'Collection journal · counterparty C', '96,400.00', '3 days'], ['31.07', 'Employee advance offset', '(312,500.00)', '6 days'], ['24.07', 'Supplier refund entry', '(52,800.00)', '13 days']]]];
function UnmatchedPair() {
  return /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, UNMATCHED.map(([title, note, rows]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    className: "unm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "unm-hd"
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("i", null, note)), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "unm-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono muted"
  }, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]), /*#__PURE__*/React.createElement("b", {
    className: "num"
  }, r[2]), /*#__PURE__*/React.createElement("i", null, r[3]))))));
}

/* Reconciliation — küçük parça kartlar (anonimleştirilmiş) */
function ReconMatch() {
  const rows = [['Automatic · exact', 'ok', '184 records', '96%'], ['Within tolerance', 'ok', '31 records', '88%'], ['Low confidence · suggestion', 'warn', '12 records', '54%'], ['Linked manually', 'ok', '7 records', 'elle'], ['Unmatched', 'risk', '9 records', '—']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "E\u015Fle\u015Ftirme sonucu"), /*#__PURE__*/React.createElement("b", null, "243 records")), rows.map(([k, s, n, c]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("i", null, n), /*#__PURE__*/React.createElement("b", null, c))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "D\xFC\u015F\xFCk g\xFCvenli e\u015Fle\u015Fme toplu onaya girmez."));
}
function FxSplit() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Variance ayr\u0131\u015Ft\u0131rmas\u0131"), /*#__PURE__*/React.createElement("b", null, "EUR hesab\u0131")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Bank balance"), /*#__PURE__*/React.createElement("b", null, "\u20AC 946,210.00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Ledger balance"), /*#__PURE__*/React.createElement("b", null, "\u20AC 944,880.00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sep"
  }, "Variance nereden geliyor"), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-ok"
  }), /*#__PURE__*/React.createElement("span", null, "Kur kaynakl\u0131"), /*#__PURE__*/React.createElement("b", null, "\u20AC 1,180.00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-risk"
  }), /*#__PURE__*/React.createElement("span", null, "Ger\xE7ek fark"), /*#__PURE__*/React.createElement("b", null, "\u20AC 150.00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Kur kayna\u011F\u0131 ve tarihi her sat\u0131rda g\xF6r\xFCn\xFCr."));
}
function CategorySource() {
  const rows = [['Rule engine', 'ok', '208 transactions'], ['Manual assignment', 'ok', '24 transactions'], ['Imported', 'ok', '11 transactions'], ['Unassigned', 'warn', '17 transactions']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Kategori kayna\u011F\u0131"), /*#__PURE__*/React.createElement("b", null, "260 transactions")), rows.map(([k, s, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "A manual correction is preserved; the engine never overwrites it."));
}
function BalanceContinuity() {
  const rows = [['Opening + movements = closing', 'ok', '7 accounts'], ['No statement', 'warn', '1 account'], ['Total does not tie', 'risk', '1 account'], ['Balance field empty', 'warn', '1 account']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Checked day by day"), /*#__PURE__*/React.createElement("b", null, "10 accounts")), rows.map(([k, s, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "The three problems are reported separately; they are never lumped under one heading."));
}

/* Cheques and notes — küçük parça kartlar (anonimleştirilmiş) */
const LADDER = [['0–15 days', 62, 34, 'TRY 18,400,000'], ['16–30 days', 100, 41, 'TRY 31,100,000'], ['31–60 days', 78, 58, 'TRY 12,700,000'], ['61–90 days', 44, 66, '(TRY 6,900,000)'], ['90+ days', 26, 18, 'TRY 3,200,000']];
function ChequeLadder() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Maturity ladder"), /*#__PURE__*/React.createElement("b", null, "5 bands")), /*#__PURE__*/React.createElement("div", {
    className: "lad"
  }, LADDER.map(([k, up, dn, net]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "lad-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lad-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "lad-bars"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lad-up",
    style: {
      width: up + '%'
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "lad-dn",
    style: {
      width: dn + '%'
    }
  })), /*#__PURE__*/React.createElement("b", {
    className: net.indexOf('(') === 0 ? 'is-neg' : ''
  }, net)))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lad-key"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lad-up"
  }), "received"), /*#__PURE__*/React.createElement("span", {
    className: "lad-key"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lad-dn"
  }), "issued"), " \xB7 clicking a band filters the table to that maturity"));
}
function ChequeLifecycle() {
  const steps = [['In portfolio', 'ok', '186 instruments'], ['Sent for collection', 'ok', '42 instruments'], ['Endorsed', 'ok', '17 instruments'], ['Discounted', 'warn', '23 instruments'], ['Collected', 'ok', '9 instruments'], ['Bounced', 'risk', '3 instruments']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Status transitions"), /*#__PURE__*/React.createElement("b", null, "280 instruments")), steps.map(([k, s, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "A bounce cannot be flagged without the bank reference."));
}
function ChequeShift() {
  const rows = [['4471310', '29.10.2026', '30.10.2026', 'Public holiday'], ['4471288', '01.11.2026', '02.11.2026', 'Sunday'], ['4471254', '12.09.2026', '14.09.2026', 'Saturday · banks closed']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Maturity \u2192 payment day"), /*#__PURE__*/React.createElement("b", null, "3 records")), /*#__PURE__*/React.createElement("div", {
    className: "shift-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Instrument"), /*#__PURE__*/React.createElement("span", null, "Maturity"), /*#__PURE__*/React.createElement("span", null, "Payment")), rows.map(([id, v, o, why]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "shift-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, id), /*#__PURE__*/React.createElement("span", null, v), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, o), " \u21E5"), /*#__PURE__*/React.createElement("i", null, why))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "The reason for the roll stays on record."));
}

/* Payment merkezi — küçük parça kartlar (anonimleştirilmiş) */
function PaySources() {
  const rows = [['Manual entry', '6 instructions', 'TRY 2,140,000'], ['Planned cash flow', '11 instructions', 'TRY 4,860,000'], ['Loan instalments', '4 instructions', 'TRY 3,720,000'], ['Payables', '27 instructions', 'TRY 7,520,000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Source breakdown in the batch"), /*#__PURE__*/React.createElement("b", null, "48 instructions")), rows.map(([k, n, amt]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("i", null, n), /*#__PURE__*/React.createElement("b", null, amt))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Every item is bound to its source; it cannot enter a second batch."));
}
function PayApproval() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "How many signatures \xB7 why"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-risk"
  }, "Cannot be approved")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Batch amount"), /*#__PURE__*/React.createElement("b", null, "TRY 8,412,000")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Amount band"), /*#__PURE__*/React.createElement("b", null, "Above TRY 5,000,000 \xB7 3 signatures")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Authorised signatories defined"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--risk-600)'
    }
  }, "2 people \xB7 1 missing")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sep"
  }, "Signature status"), /*#__PURE__*/React.createElement("div", {
    className: "mini-sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-block"
  }), /*#__PURE__*/React.createElement("span", null, "Preparer \xB7 cannot sign their own batch")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-ok"
  }), /*#__PURE__*/React.createElement("span", null, "CFO \xB7 signed")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-miss"
  }), /*#__PURE__*/React.createElement("span", null, "No third signatory defined")), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "This is not a \u201Cpending\u201D state: the configuration must be fixed."));
}
function PayReplies() {
  const rows = [['Accepted', 'pill-ok', '4 instructions', 'TRY 6,980,000'], ['Rejected', 'pill-risk', '1 instruction', 'TRY 540,000'], ['Received · no decision', 'pill-unk', '2 instructions', 'TRY 1,310,000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Bank response \xB7 per instruction"), /*#__PURE__*/React.createElement("b", null, "7 instructions")), rows.map(([k, p, n, amt]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + p
  }, k), /*#__PURE__*/React.createElement("i", null, n), /*#__PURE__*/React.createElement("b", null, amt))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "A rejected instruction stays in the batch; its reason stays on record."));
}
function PayAttention() {
  const rows = [['Approved · never downloaded', '2'], ['Downloaded · no response', '1'], ['Partially accepted', '1'], ['Cannot be approved', '1']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Needs attention"), /*#__PURE__*/React.createElement("b", null, "5 batches")), rows.map(([k, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row mini-warn"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "An approved batch that was never downloaded does not wait silently."));
}

/* Payment merkezi — paketler */
/* dört ayrı tip: 1) el yazısı isim + alt çizgi  2) tek darbe paraf  3) ilmekli signatures + alt çizgi  4) monogram paraf */
const SIGS = [{
  // "egemen" — el yazısı isim, altı çizili
  d: 'M6 26 C 6 20, 12 18, 14 22 C 15 25, 10 27, 8 27 C 8 30, 12 31, 16 28 C 18 26, 20 20, 23 20 C 26 20, 25 27, 23 30 C 21 34, 25 38, 19 38 C 26 37, 28 32, 30 28 C 31 22, 37 19, 38 23 C 39 26, 34 27, 32 27 C 32 30, 36 31, 40 28 C 42 24, 44 20, 45 26 C 46 21, 49 20, 50 26 C 51 21, 54 20, 55 26 C 56 28, 57 29, 59 28 C 60 22, 66 19, 67 23 C 68 26, 63 27, 61 27 C 61 30, 65 31, 69 28 C 71 24, 73 20, 74 26 C 75 21, 78 20, 79 26 C 80 29, 81 30, 84 29 C 90 28, 96 24, 100 18',
  f: 'M10 34 C 40 34, 74 32, 98 28 C 104 27, 105 24, 101 23',
  box: {
    right: 10,
    bottom: 24
  },
  rot: -30,
  w: 106,
  sw: 1.35
}, {
  // tek darbeli paraf, alt çizgi yok
  d: 'M6 30 C 10 14, 20 4, 27 9 C 33 13, 24 24, 17 28 C 24 30, 34 26, 42 20 C 50 14, 56 22, 64 20',
  box: {
    right: 16,
    top: 20
  },
  rot: -30,
  w: 70,
  sw: 1.7
}, {
  // ilmekli signatures, altı çizili
  d: 'M8 30 C 4 18, 12 6, 20 9 C 27 12, 22 23, 16 28 C 21 30, 27 25, 32 25 C 37 25, 34 30, 40 30 C 46 30, 47 22, 52 23 C 57 24, 54 30, 60 30 C 66 30, 68 23, 73 24 C 78 25, 75 30, 81 30 C 88 30, 93 26, 98 21',
  f: 'M14 34 C 42 33, 74 32, 96 29',
  box: {
    right: 26,
    bottom: 46
  },
  rot: -30,
  w: 102,
  sw: 1.5
}, {
  // monogram paraf — iki harf iç içe, alt çizgi yok
  d: 'M6 30 C 6 16, 14 6, 21 10 C 27 14, 20 24, 14 29 C 20 30, 26 27, 30 22 C 33 18, 30 30, 36 30 C 42 30, 44 18, 50 12 C 54 8, 56 16, 52 22 C 49 27, 44 30, 38 30 C 46 31, 54 28, 60 22',
  box: {
    right: 58,
    bottom: 20
  },
  rot: -30,
  w: 66,
  sw: 1.6
}];
function PaymentPackages({
  count = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pkgs"
  }, [['PKT-2026-0841', '48 instructions', 'TRY 18,240,000', ['pill-ok', 'File ready']], ['PKT-2026-0842', '31 instructions', 'TRY 9,410,000', ['pill-warn', 'Awaiting 2nd approval']], ['PKT-2026-0843', '27 instructions', 'TRY 6,120,400', ['pill-warn', 'Awaiting 1st approval']], ['PKT-2026-0844', '36 instructions', 'TRY 14,440,000', ['pill-unk', 'In preparation']]].slice(0, count).map(([id, n, amt, pill], i) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "pkg"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "sig",
    viewBox: "0 0 110 44",
    "aria-hidden": "true",
    style: {
      ...SIGS[i].box,
      width: SIGS[i].w,
      transform: 'rotate(' + SIGS[i].rot + 'deg)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: SIGS[i].d,
    pathLength: "1",
    strokeWidth: SIGS[i].sw,
    style: {
      animationDelay: 0.5 + i * 1.35 + 's'
    }
  }), SIGS[i].f ? /*#__PURE__*/React.createElement("path", {
    className: "sig-flick",
    d: SIGS[i].f,
    pathLength: "1",
    style: {
      animationDelay: 1.75 + i * 1.35 + 's'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--g-500)'
    }
  }, id), /*#__PURE__*/React.createElement("strong", {
    className: "num",
    style: {
      fontSize: 16,
      color: 'var(--n-900)',
      textAlign: 'left'
    }
  }, amt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--g-500)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + pill[0]
  }, pill[1])))), /*#__PURE__*/React.createElement("div", {
    className: "note note-mute redacted",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}
Object.assign(window, {
  LoanPortfolio,
  LoanSchedule,
  LimitUsage,
  GuaranteeLetters,
  Bank,
  BANKS,
  Fresh,
  PfCard,
  Kpi,
  KpiStrip,
  SettleNum,
  AttentionList,
  FxDiverging,
  AccountsTable,
  ForecastWeeks,
  ForecastRail,
  ChequeList,
  DiscountSim,
  CovenantTable,
  CovenantDetail,
  ReconTable,
  Concentration,
  PaymentPackages,
  PaySources,
  PayApproval,
  PayReplies,
  PayAttention,
  ChequeLadder,
  ChequeLifecycle,
  ChequeShift,
  ReconMatch,
  FxSplit,
  CategorySource,
  BalanceContinuity,
  BalanceBridge,
  MatchTable,
  UnmatchedPair,
  RatioBand,
  BANK_LOGOS,
  BANK_LOGOS_LIGHT,
  BANK_HEAVY,
  BANK_BIG,
  BANK_KEY,
  ERPS,
  ERP_LOGOS,
  ERP_PLATE,
  ERP_SMALL
});

/* Financing — kredi ve mevduat portföyü (anonimleştirilmiş) */
function LoanPortfolio() {
  const cols = '1.5fr .85fr .8fr 1fr .9fr';
  const rows = [['ziraat', 'Working capital · TRY', 'Annuity', '48,200,000', '52.40%'], ['is', 'Investment · EUR', 'Equal principal', '31,640,000', '6.85%'], ['garanti', 'Revolving · TRY', 'Bullet', '22,500,000', '54.10%'], ['akbank', 'Spot · USD', 'Bullet', '18,320,000', '7.20%'], ['vakif', 'Working capital · TRY', '6-month grace', '12,900,000', '51.75%']];
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Bank \xB7 product"), /*#__PURE__*/React.createElement("div", null, "Repayment"), /*#__PURE__*/React.createElement("div", null, "Days left"), /*#__PURE__*/React.createElement("div", null, "Principal (\u20BA)"), /*#__PURE__*/React.createElement("div", null, "Interest")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-stack"
  }, /*#__PURE__*/React.createElement(Bank, {
    id: r[0]
  }), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, r[1])), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "muted num"
  }, [412, 1180, 96, 61, 730][i]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[3]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[4]))), /*#__PURE__*/React.createElement("div", {
    className: "td td-total",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "5 loans"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "133,560,000"), /*#__PURE__*/React.createElement("div", null)));
}

/* Financing — ödeme planı kırılımı */
function LoanSchedule() {
  const rows = [['Principal', '4,016,666.67'], ['Interest', '2,104,883.20'], ['Banking tax', '105,244.16'], ['Commission', '18,500.00']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Instalment breakdown"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-ok"
  }, "Annuity")), rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Instalment total"), /*#__PURE__*/React.createElement("b", null, "TRY 6,245,294.03")));
}

/* Financing — limit kullanımı */
function LimitUsage() {
  const rows = [['Cash loans', 74, '133,560,000', '180,000,000'], ['Non-cash (guarantees)', 58, '52,400,000', '90,000,000'], ['Letters of credit', 31, '9,300,000', '30,000,000'], ['Revolving', 89, '22,500,000', '25,300,000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Limit utilisation"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "1 limit at threshold")), rows.map(([k, pct, used, tot]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "lim"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lim-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "lim-track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: pct + '%',
      background: pct > 85 ? 'var(--warn-600)' : 'var(--accent-600)'
    }
  })), /*#__PURE__*/React.createElement("b", null, pct, "%"), /*#__PURE__*/React.createElement("span", {
    className: "lim-v"
  }, used, " / ", tot, " \u20BA"))));
}

/* Financing — teminat mektubu portföyü */
function GuaranteeLetters() {
  const rows = [['In force', 'pill-ok', '18 guarantees', 'TRY 38,100,000'], ['Expired · not returned', 'pill-warn', '5 guarantees', 'TRY 11,400,000'], ['Claim received', 'pill-risk', '1 guarantee', 'TRY 2,900,000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Bank guarantees"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "TRY 11,4 m blocked")), rows.map(([k, p, n, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + p
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "mini-mid"
  }, n), /*#__PURE__*/React.createElement("b", null, v))));
}

/* Yetenek kartları — iki dizilim adayı. Metinler kullanıcının verdiği hâliyle. */
const CAPS_COMMON = {
  nakit: ['Treasury and cash management', 'wallet', 'See cash across every bank and group company on one screen. Know what you can actually use, and spot a squeeze weeks ahead.', 'hazine-nakit-yonetimi.html'],
  finansman: ['Financing', 'landmark', 'Manage your loan and deposit portfolio in one place. Build repayment schedules in seconds, and track credit limits, bank guarantees and intercompany loans.', 'finansman.html'],
  risk: ['Risk and compliance', 'shield-check', 'Watch FX exposure, limits and your commitments to banks as they move. Hear about a threshold before it is crossed.', 'risk-uyum.html'],
  islemlerB: ['Transactions and reconciliation', 'arrow-left-right', 'Bank transactions categorise themselves and match your ledger entries. Month-end reconciliation takes minutes, not days.', 'mutabakat.html'],
  cek: ['Cheques and notes', 'receipt', 'See every cheque and note maturity on one calendar. Know the real cost before you discount, and keep illiquid cheques out of your cash figure.', 'cek-senet.html'],
  odemeler: ['Payments', 'send', 'Prepare payments quickly and easily in one payment hub. Send them for approval, then pass the approved batch to your bank.', 'odemeler.html']
};
const CAPS_B = [CAPS_COMMON.nakit, CAPS_COMMON.finansman, CAPS_COMMON.risk, CAPS_COMMON.islemlerB, CAPS_COMMON.cek, CAPS_COMMON.odemeler];
function CapabilityGrid({
  caps,
  eyebrow
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-3",
    style: {
      maxWidth: '64ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "The whole treasury function, on one platform")), /*#__PURE__*/React.createElement("div", {
    className: 'cap-grid' + (caps.length === 6 ? ' cap-grid-6' : '')
  }, caps.map(([t, ic, d, h]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    className: "card cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cap-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("a", {
    className: "cap-link",
    href: h
  }, "Details ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  })))))));
}
Object.assign(window, {
  CAPS_B,
  CapabilityGrid
});

/* Hero animasyonu — merkezde Tideon, iki kolonda aşağı kayan kartlar,
   logodan kartlara akan tutarlar. */

function Spark() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 260 46",
    style: {
      width: '100%',
      height: 46,
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "0,34 26,30 52,32 78,24 104,27 130,20 156,22 182,14 208,17 234,9 260.6",
    fill: "none",
    stroke: "rgba(255,255,255,.5)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,34 26,30 52,32 78,24 104,27 130,20 156,22 182,14 208,17 234,9 260,6 260,46 0.46",
    fill: "rgba(255,255,255,.10)"
  }));
}
const LEFT = [{
  t: 'Cash balances',
  ic: '⚖',
  rows: [['*5681', '₺ 3,565,828', '▲ 0.5%'], ['*1882', '₺ 2,595,974', '▼ 1.0%'], ['*9420', '₺ 1,771,632', '▲ 0.7%'], ['*6852', '₺ 924,357', '▲ 1.5%']]
}, {
  t: 'Thresholds',
  ic: '⇅',
  rows: [['Target balance per account', '₺ 1 mn', '']]
}, {
  t: 'Fee history',
  ic: '◷',
  spark: true,
  axis: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
}, {
  t: 'Pricing agreements',
  ic: '◎',
  rows: [['Bank commission rates', '4 agreements', '']]
}, {
  t: 'Maturity ladder',
  ic: '≡',
  rows: [['0–30 days', '₺ 112,4 mn', ''], ['31–60 days', '₺ 84,0 mn', '']]
}];
const RIGHT = [{
  note: 'Idle cash exceeds the target.'
}, {
  t: 'Cash optimisation alert',
  ic: '⚠',
  rows: [['Idle cash', '₺ 4,4 mn'], ['Upper threshold breached', '3 accounts']]
}, {
  t: 'Suggested sweep',
  rows: [['Move to money market', ''], ['Estimated yield', '4.25%']],
  cta: 'Move to money market ›'
}, {
  note: 'Bank fees rose 28%.'
}, {
  t: 'Bank fee alert',
  ic: '⚠',
  rows: [['Expected fees', '₺ 1,2 mn'], ['Variance', '+28%']]
}];
const STATUS = ['Reviewing balances…', 'Checking threshold breaches…', 'Preparing a sweep suggestion…', 'Comparing bank fees…'];
const FLOW = [['₺ 41,280,640', 'hf-lu', 0], ['▲ 0.7%', 'hf-rd', 0.85], ['₺ 4,4 mn', 'hf-ld', 1.7], ['camt.053', 'hf-ru', 2.55], ['₺ 924,357', 'hf-rd', 4.15], ['4.25%', 'hf-lu', 3.3], ['₺ 2,595,974', 'hf-ld', 5.0], ['+28%', 'hf-ru', 5.85]];
function HfCard({
  c
}) {
  if (c.note) {
    return /*#__PURE__*/React.createElement("div", {
      className: "hf-card hf-note"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hf-spark"
    }, "\u2726"), /*#__PURE__*/React.createElement("span", null, c.note));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "hf-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-hd"
  }, /*#__PURE__*/React.createElement("span", null, c.t), c.ic ? /*#__PURE__*/React.createElement("span", {
    className: "hf-ic"
  }, c.ic) : null), c.spark ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Spark, null), /*#__PURE__*/React.createElement("div", {
    className: "hf-axis"
  }, c.axis.map(a => /*#__PURE__*/React.createElement("span", {
    key: a
  }, a)))) : /*#__PURE__*/React.createElement("div", {
    className: "hf-rows"
  }, c.rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hf-row"
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
    className: "hf-amt"
  }, r[1]), r[2] ? /*#__PURE__*/React.createElement("span", {
    className: "hf-delta"
  }, r[2]) : null))), c.cta ? /*#__PURE__*/React.createElement("span", {
    className: "hf-cta"
  }, c.cta) : null);
}
function HeroFlow() {
  const [s, setS] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setS(n => (n + 1) % STATUS.length), 2600);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "hf",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-col hf-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-track"
  }, [...LEFT, ...LEFT].map((c, i) => /*#__PURE__*/React.createElement(HfCard, {
    key: i,
    c: c
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hf-mid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-ring"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../assets/tideon-wordmark-light.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hf-status"
  }, STATUS[s]), /*#__PURE__*/React.createElement("div", {
    className: "hf-flow"
  }, FLOW.map(([v, path, delay], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: 'hf-chip ' + path,
    style: {
      animationDelay: delay + 's'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "hf-col hf-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hf-track hf-track-slow"
  }, [...RIGHT, ...RIGHT].map((c, i) => /*#__PURE__*/React.createElement(HfCard, {
    key: i,
    c: c
  })))));
}
Object.assign(window, {
  HeroFlow
});

/* Başlıkta dönüşümlü kelime: keçeli kalem işaretiyle vurgulanır. */
const HERO_WORDS = ['treasury', 'cash flow', 'payments', 'risk'];
function HeroWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % HERO_WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);
  /* DOM'da yalnızca aktif kelime durur: H1 metni düzgün bir cümle verir
     ve kutu kendiliğinden o kelimenin genişliğine oturur. */
  return /*#__PURE__*/React.createElement("b", {
    className: "hw",
    key: i
  }, HERO_WORDS[i]);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f1x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f2x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f3x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f4x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-6",
    style: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", null, window.SITE_LANG === 'EN' ? /*#__PURE__*/React.createElement(React.Fragment, null, "AI-native ", /*#__PURE__*/React.createElement(HeroWord, null), /*#__PURE__*/React.createElement("br", null), "Manage it end to end") : /*#__PURE__*/React.createElement(React.Fragment, null, "Manage all your", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(HeroWord, null), " with AI")), /*#__PURE__*/React.createElement("p", null, "One platform for cash, payments, forecasting and more. Built for modern finance teams that move fast and operate at scale."), /*#__PURE__*/React.createElement("p", {
    className: "hero-tag"
  }, "A CFO\u2019s morning routine: coffee and ", /*#__PURE__*/React.createElement("img", {
    className: "inline-logo",
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../assets/tideon-wordmark-light.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 'var(--sp-3)',
      marginTop: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-onDark",
    href: "#demo"
  }, "Book demo ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })))), /*#__PURE__*/React.createElement(HeroFlow, null)));
}
function Capabilities() {
  return /*#__PURE__*/React.createElement(CapabilityGrid, {
    caps: CAPS_B,
    eyebrow: "Highlights"
  });
}

/* Üç farklı durum: veri eksikliği · belirsizlik altında hesaplama · sessiz boşluk */
const CLAIMS = [["minus-circle","Missing data stays visible","An unreadable account never inflates the total. You see what is missing at a glance."],["triangle-alert","Estimates look like estimates","Figures built on an assumption are flagged. You know exactly what your decision rests on."],["circle-slash","No blind spots","A covenant that cannot be tested never shows as compliant. You spot the risk nobody is watching."]];
const CLAIM_FRAGMENTS = [/*#__PURE__*/React.createElement(PfCard, {
  title: "Balances by account",
  note: "9 accounts \xB7 with the excluded-account note",
  flush: true,
  key: "c0"
}, /*#__PURE__*/React.createElement(AccountsTable, null)), /*#__PURE__*/React.createElement(PfCard, {
  title: "Debt and forecast assumptions",
  note: "net debt \xB7 active assumptions",
  key: "c1"
}, /*#__PURE__*/React.createElement(ForecastRail, null)), /*#__PURE__*/React.createElement("div", {
  className: "frag-grid",
  key: "c2"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Covenant and limit monitoring",
  note: "4 agreements \xB7 9 covenants",
  flush: true
}, /*#__PURE__*/React.createElement(CovenantTable, null)), /*#__PURE__*/React.createElement(CovenantDetail, {
  parts: ['hd', 'banner', 'block']
}))];
function NoFakeNumbers() {
  const [active, setActive] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-soft-a",
    id: "uydurma"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-4",
    style: {
      maxWidth: '68ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Figures you can trust"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Every figure has a source"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "You always know where a number comes from. Missing data is never hidden, and an estimate is never dressed up as fact.")), /*#__PURE__*/React.createElement("div", {
    className: "claim"
  }, CLAIMS.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "claim-item" + (active === i ? " is-on" : ""),
    onClick: () => setActive(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 8,
      color: 'var(--accent-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: 0
    }
  }, t)), /*#__PURE__*/React.createElement("p", null, d)))), /*#__PURE__*/React.createElement("div", {
    className: "flow-stage",
    style: {
      padding: 'var(--sp-6)',
      background: 'var(--g-000)'
    }
  }, CLAIM_FRAGMENTS[active])));
}

/* Hazine gününün doğal akışı: günlük olanlar önce, periyodik olanlar sonra.
   Her akış bir soru cevaplıyor — soru ekranın bağlamını kuruyor. */
const FLOWS = [['Morning cash check', 'Treasury manager · daily', 'Where is my cash today, and how much?', /*#__PURE__*/React.createElement("div", {
  className: "stack-4",
  key: "f0"
}, /*#__PURE__*/React.createElement(KpiStrip, {
  cols: 4
}), /*#__PURE__*/React.createElement("div", {
  className: "frag-grid"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Needs attention today",
  note: "6 items"
}, /*#__PURE__*/React.createElement(AttentionList, null)), /*#__PURE__*/React.createElement(PfCard, {
  title: "Bank concentration",
  note: "threshold 40% \xB7 single bank"
}, /*#__PURE__*/React.createElement(Concentration, null))))], ['Cheque portfolio and discount decision', 'Treasury specialist · daily', 'What does discounting this cheque cost today?', /*#__PURE__*/React.createElement("div", {
  className: "frag-stack",
  key: "f1"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Cheque list",
  note: "280 records \xB7 16\u201330 day band",
  flush: true
}, /*#__PURE__*/React.createElement(ChequeList, null)), /*#__PURE__*/React.createElement("div", {
  className: "frag-inset"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Discount simulator",
  note: "3 cheques selected"
}, /*#__PURE__*/React.createElement(DiscountSim, null))))], ['Payment batch approval', 'Authorised signatory · daily', 'If I sign this batch, what gets paid?', /*#__PURE__*/React.createElement(PfCard, {
  title: "Payment batches",
  note: "segregation of duties \xB7 multi-signature approval by amount band",
  key: "f2"
}, /*#__PURE__*/React.createElement(PaymentPackages, null))], ['Cash flow forecast', 'Treasury analyst · weekly', 'Will cash get tight in the coming weeks?', /*#__PURE__*/React.createElement("div", {
  className: "frag-grid",
  key: "f3"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Weekly cash movement and closing balance",
  note: "weekly breakdown \xB7 TRY million"
}, /*#__PURE__*/React.createElement(ForecastWeeks, null)), /*#__PURE__*/React.createElement(ForecastRail, null))], ['Covenant and limit monitoring', 'CFO · monthly', 'Which covenant will we miss this period?', /*#__PURE__*/React.createElement("div", {
  className: "stack-4",
  key: "f4"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Covenant and limit monitoring",
  note: "4 agreements \xB7 9 covenants",
  flush: true
}, /*#__PURE__*/React.createElement(CovenantTable, null)), /*#__PURE__*/React.createElement("div", {
  className: "frag-grid"
}, /*#__PURE__*/React.createElement(CovenantDetail, {
  parts: ['hd', 'banner', 'block']
}), /*#__PURE__*/React.createElement(CovenantDetail, {
  parts: ['hist', 'foot']
})))], ['Period-end reconciliation', 'Accounting manager · monthly', 'Why don’t the bank and the ledger agree?', /*#__PURE__*/React.createElement(PfCard, {
  title: "Bank-to-ledger reconciliation",
  note: "Chart of accounts mapping \xB7 August 2026",
  key: "f5"
}, /*#__PURE__*/React.createElement(ReconTable, null))]];
function FlowSwitcher() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const sx = React.useRef(null),
    sy = React.useRef(null);
  const chipsRef = React.useRef(null);
  /* Seçili çip şeridin ortasına getirilir (kaydırma ile geçişte de). */
  React.useEffect(() => {
    const strip = chipsRef.current;
    if (!strip) return;
    const el = strip.children[i];
    if (!el) return;
    const hedef = el.offsetLeft - (strip.clientWidth - el.offsetWidth) / 2;
    /* Yumuşatma CSS'te (scroll-behavior); burada doğrudan atanır ki her ortamda çalışsın. */
    strip.scrollLeft = Math.max(0, Math.min(hedef, strip.scrollWidth - strip.clientWidth));
  }, [i]);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI(n => (n + 1) % FLOWS.length), 5000);
    return () => clearInterval(t);
  }, [auto]);
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "akis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-3",
    style: {
      maxWidth: '64ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Workflows"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "A day in the life of a CFO")), /*#__PURE__*/React.createElement("div", {
    className: "flow",
    onMouseEnter: () => setAuto(false)
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist"
  }, FLOWS.map(([t, who, q], k) => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": i === k,
    className: "flow-tab",
    onClick: () => {
      setAuto(false);
      setI(k);
    }
  }, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, who), /*#__PURE__*/React.createElement("span", {
    className: "flow-q"
  }, q)))), /*#__PURE__*/React.createElement("div", {
    className: "flow-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flow-chips",
    role: "tablist",
    "aria-label": "\u0130\u015F ak\u0131\u015F\u0131 se\xE7imi",
    ref: chipsRef
  }, FLOWS.map(([t], k) => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": i === k,
    className: "flow-chip",
    onClick: () => {
      setAuto(false);
      setI(k);
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    className: "flow-now"
  }, /*#__PURE__*/React.createElement("strong", null, FLOWS[i][0]), /*#__PURE__*/React.createElement("span", null, FLOWS[i][1]), /*#__PURE__*/React.createElement("span", {
    className: "flow-q"
  }, FLOWS[i][2])), /*#__PURE__*/React.createElement("div", {
    className: "flow-stage",
    style: {
      padding: 'var(--sp-6)',
      background: 'var(--g-000)'
    },
    onTouchStart: e => {
      setAuto(false);
      sx.current = e.touches[0].clientX;
      sy.current = e.touches[0].clientY;
    },
    onTouchEnd: e => {
      if (sx.current == null) return;
      const dx = e.changedTouches[0].clientX - sx.current;
      const dy = e.changedTouches[0].clientY - sy.current;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.6) {
        setI(n => dx < 0 ? (n + 1) % FLOWS.length : (n - 1 + FLOWS.length) % FLOWS.length);
      }
      sx.current = null;
    }
  }, FLOWS[i][3]), /*#__PURE__*/React.createElement("div", {
    className: "flow-nav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\xD6nceki ak\u0131\u015F",
    onClick: () => {
      setAuto(false);
      setI(n => (n - 1 + FLOWS.length) % FLOWS.length);
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    className: "flow-dots"
  }, FLOWS.map(([t], k) => /*#__PURE__*/React.createElement("i", {
    key: t,
    className: k === i ? 'is-on' : ''
  }))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Sonraki ak\u0131\u015F",
    onClick: () => {
      setAuto(false);
      setI(n => (n + 1) % FLOWS.length);
    }
  }, "\u203A"))))));
}
const TR_ITEMS = [['Cheque and promissory note portfolio', 'Maturity ladder, discount simulator (banking tax, commission, ACT/365 – ACT/360, value date), bounced cheque tracking, endorsement. Pledged and discounted cheques stay in the portfolio but are not liquid.', 'Banking tax · ACT/365'], ['Chart of accounts mapping', 'Financial statements derived from the Turkish uniform chart of accounts; the two cost accounting methods are kept distinct.', '7/A · 7/B'], ['Bank guarantees and letters of credit', 'An expired guarantee does not release your limit — it stays in force until the original is returned to the bank. Limits blocked for years surface here; the claim process is tracked too.', 'Limit · claims'], ['Due-date rolling', 'Cheques and notes follow commercial code rules; loan instalments follow the convention in their own contract. The two are not the same. The reason for each roll is kept on record.', 'Commercial code · convention'], ['Banking tax, withholding, credit levy', 'Taxes and levies are included in loan and deposit calculations. The credit levy is zero on commercial loans.', 'Tax · levies'], ['FX rate policy', 'A separate rate policy per transaction type: reporting, forecasting, intercompany, accounting. Intercompany transactions never use the market rate — if no contractual rate is declared, the amount is not converted and nothing is invented. So two entities do not reconcile differently every day.', 'Contractual rate']];
function TurkeySpecific() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-soft-b"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-3",
    style: {
      maxWidth: '64ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Built for T\xFCrkiye"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Six things built for T\xFCrkiye")), /*#__PURE__*/React.createElement("div", {
    className: "crop",
    style: {
      height: 230
    }
  }, /*#__PURE__*/React.createElement(PfCard, {
    title: "Cheque list \xB7 payment day and due-date rolling",
    note: "Commercial code business-day rule \xB7 banking tax \xB7 ACT/365",
    flush: true
  }, /*#__PURE__*/React.createElement(ChequeList, null))), /*#__PURE__*/React.createElement("div", {
    className: "tr-grid"
  }, TR_ITEMS.map(([t, d, tag]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "tr-item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, tag), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}

/* Halkada yalnızca gerçek logosu olan bankalar durur. */
const RING_BANKS = ['Ziraat Bankası', 'İş Bankası', 'Garanti BBVA', 'Yapı Kredi', 'Akbank', 'VakıfBank', 'Halkbank', 'QNB', 'DenizBank', 'TEB'];
const CONN_ITEMS = [['Intraday balances and transactions', 'Via open banking services and MT942, several times a day.'], ['End-of-day statement', 'MT940 · camt.053 — for reconciliation.'], ['Payment instruction', 'ISO 20022 pain.001 and bank-format files.'], ['Loans, guarantees and letters of credit', 'Limit, blocked and claim data are read per account.'], ['FX rate policy and feed layer', 'Source and read time are recorded; no amount is converted before a rate arrives.'], ['Connection health', 'A dropped connection is never hidden: it is marked with a hatch pattern and the affected total is called out.']];
function BankConnector() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-deep",
    id: "bankalar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f2x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap conn-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-invert"
  }, "Bank API integrations"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, "Ready one-to-one integration with 20+ banks"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)',
      maxWidth: '52ch'
    }
  }, "Connections are ready with more than twenty banks in T\xFCrkiye. Intraday balances and transactions from open banking services, reconciliation from statement files, bank-format files for payment instructions. Even after a connection is live, no account enters the totals until its mapping is verified."), /*#__PURE__*/React.createElement("div", {
    className: "conn-list"
  }, CONN_ITEMS.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "conn-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    style: {
      color: 'var(--accent-500)',
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, d)))))), /*#__PURE__*/React.createElement("div", {
    className: "connector"
  }, /*#__PURE__*/React.createElement("span", {
    className: "c-ring c-ring-1"
  }), /*#__PURE__*/React.createElement("span", {
    className: "c-ring c-ring-2"
  }), RING_BANKS.map((b, i) => {
    const outer = i % 2 === 0;
    const ring = RING_BANKS.filter((_, j) => j % 2 === 0 === outer);
    const k = ring.indexOf(b);
    const a = k / ring.length * Math.PI * 2 - Math.PI / 2 + (outer ? 0 : Math.PI / ring.length);
    const R = outer ? 39 : 26;
    return /*#__PURE__*/React.createElement("div", {
      key: b,
      className: "bslot",
      style: {
        left: 50 + R * Math.cos(a) + '%',
        top: 50 + R * Math.sin(a) + '%'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bslot-frame"
    }, /*#__PURE__*/React.createElement("img", {
      className: 'bslot-img' + (BANK_HEAVY[BANK_KEY[b]] ? ' is-heavy' : '') + (BANK_BIG[BANK_KEY[b]] ? ' is-big' : ''),
      src: BANK_LOGOS[BANK_KEY[b]],
      alt: b
    })));
  }), /*#__PURE__*/React.createElement("div", {
    className: "c-hub"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../assets/tideon-wordmark-light.png',
    alt: "Tideon"
  })))));
}
const BANK_MARQUEE = ['ziraat', 'is', 'garanti', 'yapikredi', 'akbank', 'vakif', 'halk', 'qnb', 'deniz', 'teb'];
function Connections() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "baglantilar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-3",
    style: {
      maxWidth: '68ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Connections"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Data in: banks, ERP and accounting"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "The bank side runs on ready connections. On the ERP and accounting side a transfer layer is in place: standard file transfer, scheduled jobs and a REST service. Your own channels are decided together during onboarding.")), /*#__PURE__*/React.createElement("div", {
    className: "conn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conn-box stack-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h3"
  }, "Bank data formats"), /*#__PURE__*/React.createElement("p", {
    className: "sm muted"
  }, "Supported formats for statement and balance transfer; no account enters the totals until its mapping is verified."), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, ['MT940', 'MT942', 'camt.053', 'camt.052', 'CSV / XLS', 'ISO 20022 pain.001'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "chip"
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "conn-box stack-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h3"
  }, "ERP and accounting"), /*#__PURE__*/React.createElement("p", {
    className: "sm muted"
  }, "Transfer of ledger movements, invoices, journal entries and the trial balance; driven by the chart of accounts mapping."), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, ['File transfer', 'Scheduled job', 'REST service', 'Chart of accounts mapping', 'Stale data is flagged'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "chip"
  }, c))))), /*#__PURE__*/React.createElement("div", {
    className: "marquee",
    "aria-label": "Ba\u011Flant\u0131s\u0131 haz\u0131r bankalar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, [...BANK_MARQUEE, ...BANK_MARQUEE].map((id, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "marquee-cell"
  }, /*#__PURE__*/React.createElement("img", {
    src: BANK_LOGOS_LIGHT[id] || BANK_LOGOS[id],
    alt: (BANKS[id] || [id])[0]
  })))))));
}
function Security() {
  const items = [['Multi-tenant isolation', 'Every record is tagged with its organisation; access control lives in the database layer, not the application layer. Even a badly written query cannot return another organisation’s data.'], ['Role-based permissions', 'Permissions at entity and module level.'], ['Segregation of duties', 'The user who prepares cannot approve. This rule is enforced in the database and cannot be bypassed from the application layer.'], ['Multi-signature by amount band', 'Transactions above the defined thresholds require more than one signature. The number of signatures is frozen at request time and cannot be lowered later by changing the threshold.'], ['Audit trail', 'Every change is recorded with the user and a timestamp.'], ['KVKK', 'Retention periods and access logs are defined. The personal data processing inventory is prepared together during onboarding.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-deep",
    id: "guvenlik"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f1x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f3x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-10",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-invert"
  }, "Security and data"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, "Permissions and audit that fit a group structure"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)'
    }
  }, "In a multi-entity treasury, who can see what and who can approve what is defined in the product\u2019s first layer.")), /*#__PURE__*/React.createElement("div", {
    className: "sec-grid"
  }, items.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "sec-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    style: {
      color: 'var(--accent-500)',
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, d)))))));
}
function DemoForm() {
  const [sent, setSent] = useState(false);
  const [ok, setOk] = useState(false);
  const [hata, setHata] = useState(false);
  const [gonderiliyor, setGonderiliyor] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "section demo",
    id: "demo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f1x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap demo-grid",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-invert"
  }, "Demo request"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, "See the product with your own account structure"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)',
      maxWidth: '46ch'
    }
  }, "Let us walk you through the Tideon platform in full. If your infrastructure is ready, you can test the platform with your own data. Fill in the form and we will call you at a time that suits you.")), /*#__PURE__*/React.createElement("form", {
    className: "stack-4",
    name: "demo",
    method: "POST",
    "data-netlify": "true",
    "netlify-honeypot": "bot-field",
    onSubmit: e => {
      e.preventDefault();
      if (gonderiliyor) return;
      setHata(false);
      if (!window.netlifySubmit) return setSent(true);
      setGonderiliyor(true);
      netlifySubmit('demo', Object.fromEntries(new FormData(e.target))).then(b => {
        setGonderiliyor(false);
        return b ? setSent(true) : setHata(true);
      });
    },
    style: {
      border: '1px solid var(--border-invert)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-8)',
      background: 'rgba(255,255,255,.03)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 22,
    style: {
      color: 'var(--accent-500)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "h3",
    style: {
      color: '#fff'
    }
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    className: "sm",
    style: {
      color: 'var(--text-invert-muted)'
    }
  }, "We will get back to you within two business days.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "demo"
  }), /*#__PURE__*/React.createElement("p", {
    hidden: true
  }, /*#__PURE__*/React.createElement("label", null, "Do not fill in: ", /*#__PURE__*/React.createElement("input", {
    name: "bot-field"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
    name: "Full name",
    required: true,
    placeholder: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Organisation"), /*#__PURE__*/React.createElement("input", {
    name: "Organisation",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Work email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "E-posta",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("div", {
    className: "tel"
  }, /*#__PURE__*/React.createElement("span", null, "+90"), /*#__PURE__*/React.createElement("input", {
    name: "Phone",
    type: "tel",
    inputMode: "numeric",
    maxLength: 10,
    placeholder: "5xx xxx xx xx",
    onInput: e => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Role"), /*#__PURE__*/React.createElement("select", {
    name: "Role"
  }, /*#__PURE__*/React.createElement("option", null, "CFO"), /*#__PURE__*/React.createElement("option", null, "CEO"), /*#__PURE__*/React.createElement("option", null, "Managing director"), /*#__PURE__*/React.createElement("option", null, "Finance director"), /*#__PURE__*/React.createElement("option", null, "Treasury manager"), /*#__PURE__*/React.createElement("option", null, "Treasury specialist"), /*#__PURE__*/React.createElement("option", null, "Finance specialist"), /*#__PURE__*/React.createElement("option", null, "Accounting manager"), /*#__PURE__*/React.createElement("option", null, "Chartered accountant"), /*#__PURE__*/React.createElement("option", null, "Audit"), /*#__PURE__*/React.createElement("option", null, "Information technology"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Number of legal entities"), /*#__PURE__*/React.createElement("select", {
    name: "Number of legal entities"
  }, /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5"), /*#__PURE__*/React.createElement("option", null, "6"), /*#__PURE__*/React.createElement("option", null, "7"), /*#__PURE__*/React.createElement("option", null, "8"), /*#__PURE__*/React.createElement("option", null, "9"), /*#__PURE__*/React.createElement("option", null, "10"), /*#__PURE__*/React.createElement("option", null, "10+")))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Note (optional)"), /*#__PURE__*/React.createElement("textarea", {
    name: "Not"
  })), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "Data protection consent",
    value: "Confirmed",
    required: true,
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "kvkk-aydinlatma-metni.html",
    target: "_blank",
    rel: "noreferrer"
  }, "the data protection notice"), "  \u2014 I have read it and consent to the processing of my personal data.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    type: "submit",
    disabled: !ok || gonderiliyor,
    style: {
      alignSelf: 'center',
      minWidth: 180,
      justifyContent: 'center',
      opacity: ok && !gonderiliyor ? 1 : .5
    }
  }, gonderiliyor ? 'Sending…' : 'Book demo'), hata ? /*#__PURE__*/React.createElement("span", {
    className: "form-err",
    role: "alert"
  }, "Could not send. Check your connection and try again.") : null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,.45)'
    }
  }, "Your details are used only for this demo request.")))));
}

/* Ready ERP integrations — merkezde Tideon, çevresinde kendi renkleriyle ERP logoları. */
const ERP_NODES = [['logo', 92, 100], ['oracle', 244, 302], ['sap', 396, 100], ['dynamics', 736, 100], ['netsis', 884, 302], ['mikro', 1032, 100], ['canias', 1152, 302]];
const ERP_TRUNK = 202,
  ERP_R = 24;
function ErpStrip({
  showCta = true
}) {
  const label = Object.fromEntries(ERPS);
  const wires = ERP_NODES.map(([id, x, y]) => {
    const dir = x < 600 ? 1 : -1;
    const above = y < ERP_TRUNK;
    const edge = above ? y + ERP_R : y - ERP_R;
    const pre = above ? ERP_TRUNK - 26 : ERP_TRUNK + 26;
    return `M ${x} ${edge} L ${x} ${pre} Q ${x} ${ERP_TRUNK} ${x + 26 * dir} ${ERP_TRUNK}`;
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-tint",
    id: "erp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "strip-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-3",
    style: {
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "ERP and accounting"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Ready ERP integrations"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Ledger movements, invoices, journal entries and the trial balance are read from the ERP; the cash forecast is fed by these records and financial statements are derived from the trial balance. Reconciliation follows the Turkish chart of accounts, and unmatched entries never enter the totals.")), showCta ? /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "erp-entegrasyonlari.html"
  }, "Integration details ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })) : null), /*#__PURE__*/React.createElement("div", {
    className: "erp-map"
  }, /*#__PURE__*/React.createElement("svg", {
    className: "erp-wires",
    viewBox: "0 0 1220 400",
    preserveAspectRatio: "xMidYMid meet",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: `M 118 ${ERP_TRUNK} H 548`
  }), /*#__PURE__*/React.createElement("path", {
    d: `M 672 ${ERP_TRUNK} H 1126`
  }), wires.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  }))), ERP_NODES.map(([id, x, y]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "erp-node",
    style: {
      left: x / 1220 * 100 + '%',
      top: y / 400 * 100 + '%'
    },
    title: label[id]
  }, /*#__PURE__*/React.createElement("img", {
    className: ERP_SMALL[id] ? 'is-small' : '',
    src: ERP_LOGOS[id],
    alt: label[id]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "erp-hub",
    style: {
      left: '50%',
      top: ERP_TRUNK / 400 * 100 + '%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../assets/tideon-wordmark-light.png',
    alt: "Tideon"
  })))));
}
Object.assign(window, {
  Hero,
  Capabilities,
  NoFakeNumbers,
  FlowSwitcher,
  TurkeySpecific,
  BankConnector,
  ErpStrip,
  Connections,
  Security,
  DemoForm
});

/* Alt sayfa bölümleri — ana sayfayla aynı token ve parça setini kullanır. */

function PageHero({
  eyebrow,
  title,
  lead,
  meta,
  center
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero hero-sub" + (center ? " hero-center" : ""),
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f1x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f2x"
  }), /*#__PURE__*/React.createElement("i", {
    className: "f3x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap stack-6"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow eyebrow-invert"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "sub-h1"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "sub-lead"
  }, lead), meta ? /*#__PURE__*/React.createElement("div", {
    className: "sub-meta"
  }, meta.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("strong", null, v), /*#__PURE__*/React.createElement("span", null, k)))) : null));
}

/* Mono banka logoları — tuğla dizilim: satır uzunlukları farklı ve her satır
   ortalandığı için ızgara yığılmış görünmüyor. pattern satır uzunluklarını verir. */
function BankLogoRow({
  ids,
  cap = true,
  pattern = [4, 3, 3]
}) {
  const rows = [];
  let k = 0;
  for (const n of pattern) {
    if (k >= ids.length) break;
    rows.push(ids.slice(k, k + n));
    k += n;
  }
  if (k < ids.length) rows.push(ids.slice(k));
  return /*#__PURE__*/React.createElement("div", {
    className: "logo-brick"
  }, rows.map((row, r) => /*#__PURE__*/React.createElement("div", {
    key: r,
    className: "logo-brick-row"
  }, row.map(id => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "logo-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "logo-frame"
  }, BANK_LOGOS[id] ? /*#__PURE__*/React.createElement("img", {
    className: 'logo-img' + (BANK_HEAVY[id] ? ' is-heavy' : '') + (BANK_BIG[id] ? ' is-big' : ''),
    src: BANK_LOGOS_LIGHT[id] || BANK_LOGOS[id],
    alt: (BANKS[id] || [id])[0]
  }) : /*#__PURE__*/React.createElement("image-slot", {
    id: 'mono-' + id,
    shape: "rect",
    placeholder: "logo",
    style: {
      width: '100%',
      height: '100%',
      fontSize: '9px'
    }
  })), cap ? /*#__PURE__*/React.createElement("span", {
    className: "logo-cap"
  }, (BANKS[id] || [id])[0]) : null)))));
}
function FeatureRows({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "feat-rows"
  }, items.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "feat-row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    style: {
      color: 'var(--accent-600)',
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, d)))));
}
function SpecTable({
  head,
  rows
}) {
  const cols = head.map(() => '1fr').join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, head.map(h => /*#__PURE__*/React.createElement("div", {
    key: h
  }, h))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, r.map((cell, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    className: j ? 'muted' : ''
  }, cell)))));
}
function StepFlow({
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(([n, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-n"
  }, n), /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, d), i < steps.length - 1 ? /*#__PURE__*/React.createElement("i", {
    className: "step-line",
    "aria-hidden": "true"
  }) : null)));
}
function PageCta({
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section-deep",
    id: "demo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "facets",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "f3x"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-5",
    style: {
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)'
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-onDark",
    href: "index.html#demo"
  }, "Book demo ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghostDark",
    href: "index.html"
  }, "Home")))));
}
Object.assign(window, {
  PageHero,
  BankLogoRow,
  FeatureRows,
  SpecTable,
  StepFlow,
  PageCta
});

/* Entegrasyonlar sayfası — banka bazında yetenek iddiası YOK: kapsam farkları
   kaynağa bağlı olmadığı için tek bir standart/devreye alma listesi olarak
   yazıldı. Logolar yalnızca hazır connection listesini than it is. */
const WALL_OVERRIDE = {
  teb: A('banks/teb-dark.png')
};
const READY_BANKS = ['ziraat', 'is', 'garanti', 'yapikredi', 'akbank', 'vakif', 'halk', 'qnb', 'deniz', 'teb'];
const STANDARD_ITEMS = [['Intraday balances and transactions', 'Via open banking services and MT942, several times a day.'], ['End-of-day statement', 'MT940 · camt.053 — for reconciliation.'], ['Account and legal entity mapping', 'Each account is mapped to a legal entity and a chart-of-accounts code; nothing enters the totals until the mapping is verified.'], ['Connection health', 'A dropped connection is never hidden: it is flagged and the affected total is called out.']];
const ONBOARD_ITEMS = [['Payment instruction file', 'pain.001 or the bank’s own format; the format is confirmed during onboarding.'], ['Reading loans, guarantees and letters of credit', 'Which channel delivers limit, blocked and claim data varies by bank.'], ['Corporate file channel', 'SFTP and scheduled job setup.'], ['A bank not on the list', 'The onboarding timeline is given in writing during the meeting.']];
function BankWall() {
  return /*#__PURE__*/React.createElement("div", {
    className: "wall"
  }, READY_BANKS.map(id => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "wall-cell"
  }, /*#__PURE__*/React.createElement("img", {
    src: WALL_OVERRIDE[id] || BANK_LOGOS_LIGHT[id] || BANK_LOGOS[id],
    alt: (BANKS[id] || [id])[0]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "wall-more"
  }, /*#__PURE__*/React.createElement("span", null, "More bank integrations coming soon\u2026")));
}
function ScopeLists() {
  return /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Delivered as standard"), /*#__PURE__*/React.createElement(FeatureRows, {
    items: STANDARD_ITEMS
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Requires onboarding"), /*#__PURE__*/React.createElement(FeatureRows, {
    items: ONBOARD_ITEMS
  })));
}

/* ERP tarafında okunan küme her sistemde aynı; kanal kurulumda belirlenir. */
const ERP_READ_SET = 'Ledger movements · invoices · journal entries · trial balance';
function ErpCards() {
  const label = Object.fromEntries(ERPS);
  return /*#__PURE__*/React.createElement("div", {
    className: "erpc-grid"
  }, ERPS.map(([id]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "erpc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "erpc-hd"
  }, /*#__PURE__*/React.createElement("img", {
    src: ERP_LOGOS[id],
    alt: label[id]
  })), /*#__PURE__*/React.createElement("span", {
    className: "erpc-reads"
  }, ERP_READ_SET))));
}
const FORMATS = [['camt.053', 'ISO 20022', 'End-of-day statement', 'Reconciliation'], ['camt.052', 'ISO 20022', 'Intraday transactions', 'Cash position'], ['MT940', 'SWIFT', 'End-of-day statement', 'Reconciliation'], ['MT942', 'SWIFT', 'Intraday transaction notice', 'Cash position'], ['pain.001', 'ISO 20022', 'Payment instruction', 'Instruction batch'], ['CSV / XLS', 'Bank-specific', 'Statement and balance', 'Onboarding period']];
function FormatTable() {
  const cols = '1fr 1fr 1.4fr 1.2fr';
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Format"), /*#__PURE__*/React.createElement("div", null, "Standard"), /*#__PURE__*/React.createElement("div", null, "Content"), /*#__PURE__*/React.createElement("div", null, "Use")), FORMATS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("code", {
    className: "fmt"
  }, r[0])), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[3]))));
}
Object.assign(window, {
  BankWall,
  ScopeLists,
  ErpCards,
  FormatTable
});

/* Bank bağlama akışı — hero yanında dönen canlandırma.
   Adımlar: boş durum → arama → bağlanıyor → kimlik → hesaplar → başarılı. */

const CAND = [['garanti', 'Garanti BBVA', 'Open banking service'], ['ziraat', 'Ziraat Bankası', 'Open banking service'], ['is', 'İş Bankası', 'Open banking service']];
const ACCOUNTS = {
  garanti: [['TRY', 'Current · ***4182', '₺ 18,420,556'], ['USD', 'Current · ***4183', '$ 2,104,880'], ['EUR', 'Current · ***4184', '€ 946,210'], ['GBP', 'Current · ***4185', '£ 312,470']],
  is: [['TRY', 'Current · ***7315', '₺ 24,905,130'], ['TRY', 'Time deposit · ***7318', '₺ 9,640,000'], ['USD', 'Current · ***7316', '$ 1,372,940'], ['EUR', 'Current · ***7317', '€ 1,088,475']]
};
/* Turlar arasında dönen banka: her döngüde bir sonraki. */
const ROUNDS = [{
  id: 'garanti',
  name: 'Garanti BBVA',
  typed: 'Garanti'
}, {
  id: 'is',
  name: 'İş Bankası',
  typed: 'İş Bank'
}];
/* [adım, süre(ms)] */
const STEPS = [['idle', 3600], ['search', 7000], ['connect', 4000], ['creds', 5600], ['accounts', 6600], ['done', 4200], ['flow', 3600]];
function ConnectFlow() {
  const [si, setSi] = useS(0);
  const [round, setRound] = useS(0);
  const R = ROUNDS[round];
  const TYPED = R.typed;
  const [typed, setTyped] = useS(0);
  const step = STEPS[si][0];
  useE(() => {
    const t = setTimeout(() => setSi(n => {
      const next = (n + 1) % STEPS.length;
      if (next === 0) setRound(r => (r + 1) % ROUNDS.length);
      return next;
    }), STEPS[si][1]);
    return () => clearTimeout(t);
  }, [si]);
  useE(() => {
    if (step !== 'search') {
      setTyped(0);
      return;
    }
    const t = setInterval(() => setTyped(n => n < TYPED.length ? n + 1 : n), 400);
    return () => clearInterval(t);
  }, [step]);

  /* Adımın son ~700 ms'inde düğme basılı görünür — tıklandığı belli olsun. */
  const [pressed, setPressed] = useS(false);
  useE(() => {
    setPressed(false);
    const d = STEPS[si][1] - 700;
    const t = setTimeout(() => setPressed(true), d > 0 ? d : 0);
    return () => clearTimeout(t);
  }, [si]);
  const q = TYPED.slice(0, typed);
  const matches = q ? CAND.filter(c => c[1].toLowerCase().indexOf(q.toLowerCase()) > -1 || q.length < 3) : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "cf",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-title"
  }, "Bank integration"), /*#__PURE__*/React.createElement("span", {
    className: 'cf-btn' + (step === 'idle' ? ' is-hot' : '') + (step === 'idle' && pressed ? ' is-press' : '')
  }, "+ Add a bank")), /*#__PURE__*/React.createElement("div", {
    className: "cf-body"
  }, step === 'idle' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-empty-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 18
  })), /*#__PURE__*/React.createElement("strong", null, "No banks connected"), /*#__PURE__*/React.createElement("span", null, "No balance enters the totals until account mapping is done.")) : null, step === 'search' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-input"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, q, /*#__PURE__*/React.createElement("i", {
    className: "cf-caret"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cf-list"
  }, matches.map(([id, name, kind]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: 'cf-opt' + (typed === TYPED.length && id === R.id ? ' is-sel' : '') + (pressed && id === R.id ? ' is-press' : '')
  }, /*#__PURE__*/React.createElement("img", {
    src: BANK_LOGOS_LIGHT[id] || BANK_LOGOS[id],
    alt: name
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-opt-t"
  }, /*#__PURE__*/React.createElement("b", null, name), /*#__PURE__*/React.createElement("i", null, kind)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 14
  }))), !matches.length ? /*#__PURE__*/React.createElement("div", {
    className: "cf-hint"
  }, "Type a bank name") : null)) : null, step === 'connect' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-center"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-logo",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-spin"
  }), /*#__PURE__*/React.createElement("strong", null, "Connecting to the bank\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "cf-sub"
  }, "mTLS \xB7 OAuth 2.0")) : null, step === 'creds' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-logo-sm",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", null, "Corporate access details")), /*#__PURE__*/React.createElement("div", {
    className: "cf-field"
  }, /*#__PURE__*/React.createElement("label", null, "Customer number"), /*#__PURE__*/React.createElement("span", {
    className: "cf-val"
  }, "7\u2022\u2022 \u2022\u2022\u2022 \u2022\u20224")), /*#__PURE__*/React.createElement("div", {
    className: "cf-field"
  }, /*#__PURE__*/React.createElement("label", null, "User code"), /*#__PURE__*/React.createElement("span", {
    className: "cf-val"
  }, "TIDEON\u2022\u2022\u2022\u2022")), /*#__PURE__*/React.createElement("div", {
    className: "cf-field"
  }, /*#__PURE__*/React.createElement("label", null, "Certificate"), /*#__PURE__*/React.createElement("span", {
    className: "cf-val cf-ok"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " uploaded")), /*#__PURE__*/React.createElement("span", {
    className: 'cf-cta' + (pressed ? ' is-press' : '')
  }, "Connect")) : null, step === 'accounts' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-logo-sm",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", null, "4 accounts found")), (ACCOUNTS[R.id] || ACCOUNTS.garanti).map(([cur, sub, amt], i) => /*#__PURE__*/React.createElement("div", {
    key: sub,
    className: "cf-acc",
    style: {
      animationDelay: i * 0.16 + 's'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-cur"
  }, cur), /*#__PURE__*/React.createElement("span", {
    className: "cf-acc-t"
  }, /*#__PURE__*/React.createElement("b", null, sub)), /*#__PURE__*/React.createElement("span", {
    className: "cf-amt"
  }, amt))), /*#__PURE__*/React.createElement("span", {
    className: 'cf-cta' + (pressed ? ' is-press' : '')
  }, "Done")) : null, step === 'done' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26
  })), /*#__PURE__*/React.createElement("strong", null, "Connection successful"), /*#__PURE__*/React.createElement("span", {
    className: "cf-sub"
  }, R.name, " \xB7 4 accounts \xB7 intraday reads enabled")) : null, step === 'flow' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-pipe"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-pipe-logo",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-pipe-line"
  }, /*#__PURE__*/React.createElement("i", {
    className: "cf-pkt",
    style: {
      animationDelay: '0s'
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "cf-pkt",
    style: {
      animationDelay: '.5s'
    }
  }), /*#__PURE__*/React.createElement("i", {
    className: "cf-pkt",
    style: {
      animationDelay: '1s'
    }
  })), /*#__PURE__*/React.createElement("img", {
    className: "cf-pipe-logo cf-pipe-tideon",
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_DARK : '../assets/tideon-wordmark.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("strong", null, "Data transfer active"), /*#__PURE__*/React.createElement("span", {
    className: "cf-sub"
  }, "4 accounts \xB7 intraday reads \xB7 camt.052 \xB7 MT942")) : null), /*#__PURE__*/React.createElement("div", {
    className: "cf-dots"
  }, STEPS.map(([s], i) => /*#__PURE__*/React.createElement("i", {
    key: s,
    className: i === si ? 'is-on' : ''
  }))));
}
Object.assign(window, {
  ConnectFlow
});

/* ERP akış görseli — üstte dönüşümlü ERP logoları, altta Tideon, arada sürekli
   akan veri. Bank bağlama akışının basitleştirilmiş karşılığı. */

function ErpFlow() {
  const [i, setI] = useEs(0);
  useEe(() => {
    const t = setInterval(() => setI(n => (n + 1) % ERPS.length), 2000);
    return () => clearInterval(t);
  }, []);
  const label = Object.fromEntries(ERPS);
  const id = ERPS[i][0];
  return /*#__PURE__*/React.createElement("div", {
    className: "ef",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ef-slot"
  }, ERPS.map(([e]) => /*#__PURE__*/React.createElement("img", {
    key: e,
    className: 'ef-logo' + (e === id ? ' is-on' : ''),
    src: ERP_LOGOS[e],
    alt: label[e]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ef-pipe"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ef-line"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      animationDelay: '0s'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      animationDelay: '.6s'
    }
  }), /*#__PURE__*/React.createElement("i", {
    style: {
      animationDelay: '1.2s'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ef-hub"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_DARK : '../assets/tideon-wordmark.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ef-cap"
  }, "Ledger movements \xB7 invoices \xB7 journal entries \xB7 trial balance"));
}
Object.assign(window, {
  ErpFlow
});

/* Multi-entity groups sayfasının parçaları — anonimleştirilmiş, milyon ölçeğinde. */

/* Legal entity bazında nakit ve tampon */
function GroupEntities() {
  const rows = [['Holding Inc.', '84,120,000', 'Above buffer', 'pill-ok'], ['Manufacturing Inc.', '38,640,000', 'Above buffer', 'pill-ok'], ['Energy Inc.', '9,180,000', 'At buffer', 'pill-warn'], ['Distribution Inc.', '2,410,000', 'Below buffer', 'pill-risk'], ['Trading Inc.', '14,760,000', 'Above buffer', 'pill-ok']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Available cash by legal entity"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "1 entity below buffer")), rows.map(([n, v, s, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + p
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Group total"), /*#__PURE__*/React.createElement("b", null, "TRY 149,110,000")));
}

/* Şirketler arası borç–alacak matrisi */
const IC_NAMES = ['Holding', 'Manufacturing', 'Energy', 'Distribution', 'Trading'];
const IC_GRID = [[null, 12.4, 8.2, null, 3.1], [null, null, null, 6.8, null], [4.5, null, null, null, 2.2], [null, 9.1, null, null, null], [1.8, null, 5.6, null, null]];
function IntercoMatrix() {
  const max = 12.4;
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx2-row mx2-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx2-corner"
  }, "Debtor \u2193 / Creditor \u2192"), IC_NAMES.map(n => /*#__PURE__*/React.createElement("span", {
    key: n
  }, n))), IC_GRID.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "mx2-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mx2-k"
  }, IC_NAMES[i]), row.map((v, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: 'mx2-c' + (i === j ? ' is-self' : '') + (v ? ' is-on' : ''),
    style: v ? {
      background: 'color-mix(in oklab, var(--accent-600) ' + Math.round(12 + v / max * 46) + '%, #fff)'
    } : null
  }, v ? v.toString().replace('.', ',') : i === j ? '—' : ''))))), /*#__PURE__*/React.createElement("div", {
    className: "mx2-legend"
  }, /*#__PURE__*/React.createElement("span", null, "Amounts in TRY million"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi",
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Dağınık yapı ile havuzlanmış yapı karşılaştırması */
function PoolCompare() {
  const rows = [['Deposit income', '4,180,000', '7,640,000'], ['Loan interest expense', '(11,920,000)', '(8,350,000)'], ['Idle cash', '18,400,000', '3,100,000'], ['Revolving limit used', '22,500,000', '12,800,000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp-hd"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, "Today\u2019s fragmented setup"), /*#__PURE__*/React.createElement("span", {
    className: "is-on"
  }, "Pooled setup")), rows.map(([k, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "cmp-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmp-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "cmp-v"
  }, a, " \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: "cmp-v is-on"
  }, b, " \u20BA"))), /*#__PURE__*/React.createElement("div", {
    className: "cmp-row cmp-tot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmp-k"
  }, "Annual net effect"), /*#__PURE__*/React.createElement("span", {
    className: "cmp-v"
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    className: "cmp-v is-on"
  }, "+TRY 7,030,000")), /*#__PURE__*/React.createElement("div", {
    className: "cmp-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Sweep rules */
function SweepRules() {
  const rows = [['Manufacturing Inc. → Master account', 'Balance > TRY 15m', 'Target TRY 12m'], ['Trading Inc. → Master account', 'Balance > TRY 8m', 'Target TRY 6m'], ['Master account → Distribution Inc.', 'Balance < TRY 3m', 'Target TRY 4m']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Sweep rules"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-ok"
  }, "3 rules active")), rows.map(([k, cond, target]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "sw"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "sw-c"
  }, cond), /*#__PURE__*/React.createElement("b", null, target))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Intercompany receivable created by pooling"), /*#__PURE__*/React.createElement("b", null, "TRY 19,200,000")));
}
Object.assign(window, {
  GroupEntities,
  IntercoMatrix,
  PoolCompare,
  SweepRules
});

/* Guarantees and letters of credit sayfasının parçaları — anonimleştirilmiş, milyon ölçeğinde. */

/* Guarantee exposure by bank */
function GuaranteeExposure() {
  const rows = [['ziraat', 'Performance · advance', 18.4, '18,400,000'], ['is', 'Performance', 12.9, '12,900,000'], ['garanti', 'Performance · bid', 9.2, '9,200,000'], ['akbank', 'Advance', 7.6, '7,600,000'], ['vakif', 'Performance', 4.3, '4,300,000']];
  const max = 18.4;
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Guarantee exposure by bank"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-ok"
  }, "TRY 52,4 m")), rows.map(([id, tur, v, amt]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "gx"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gx-k"
  }, /*#__PURE__*/React.createElement(Bank, {
    id: id
  })), /*#__PURE__*/React.createElement("span", {
    className: "gx-t"
  }, tur), /*#__PURE__*/React.createElement("span", {
    className: "gx-track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: v / max * 100 + '%'
    }
  })), /*#__PURE__*/React.createElement("b", null, amt, " \u20BA"))));
}

/* Maturity distribution */
function GuaranteeMaturity() {
  /* Total TRY 52,4 m — GuaranteeExposure ile aynı portföy. */
  const rows = [['0–30 days', 44, '6,100,000'], ['31–90 days', 92, '12,800,000'], ['91–180 days', 55, '7,600,000'], ['181–365 days', 80, '11,200,000'], ['Open-ended', 100, '14,700,000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Maturity distribution"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "TRY 14,7 m open-ended")), rows.map(([k, pct, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "gm"
  }, /*#__PURE__*/React.createElement("span", {
    className: "gm-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "gm-track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: pct + '%',
      background: i === 4 ? 'var(--warn-600)' : 'var(--accent-600)'
    }
  })), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"))), /*#__PURE__*/React.createElement("div", {
    className: "mini-note-band"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Vadesi geçmiş ama iade alınmamış — ordered by urgency */
function OverdueLetters() {
  const rows = [['Beneficiary A · public body', '5,200,000', 412, 'crit'], ['Beneficiary B · private company', '3,100,000', 268, 'crit'], ['Beneficiary C · public body', '1,800,000', 96, 'warn'], ['Beneficiary D · private company', '940,000', 34, 'warn'], ['Beneficiary E · private company', '360,000', 3, 'ok']];
  return /*#__PURE__*/React.createElement("div", {
    className: "ov"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ov-hd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Expired, not returned"), /*#__PURE__*/React.createElement("span", null, "5 guarantees \xB7 ordered by urgency")), /*#__PURE__*/React.createElement("span", {
    className: "ov-sum"
  }, "TRY 11,400,000 blocked")), rows.map(([lehtar, amt, days, sev]) => /*#__PURE__*/React.createElement("div", {
    key: lehtar,
    className: 'ov-row is-' + sev
  }, /*#__PURE__*/React.createElement("span", {
    className: "ov-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ov-k"
  }, lehtar), /*#__PURE__*/React.createElement("b", null, amt, " \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: "ov-d"
  }, days, " days blocked"))), /*#__PURE__*/React.createElement("div", {
    className: "ov-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Commission takvimi */
function CommissionSchedule() {
  const rows = [['Q4 2026', '318,400', '18 guarantees'], ['Q1 2027', '318,400', '18 guarantees'], ['Q2 2027', '291,600', '16 guarantees'], ['Q3 2027', '264,900', '14 guarantees']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Upcoming commission payments"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "included in the forecast")), rows.map(([p, v, n]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, p), /*#__PURE__*/React.createElement("span", {
    className: "mini-mid"
  }, n), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Portion from open-ended guarantees"), /*#__PURE__*/React.createElement("b", null, "TRY 84,200 / \xE7eyrek")));
}

/* Tazminin limit ve borç üzerindeki etkisi */
function IndemnityFlow() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ind"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ind-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ind-lbl"
  }, "Before the claim"), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Non-cash limit usage"), /*#__PURE__*/React.createElement("b", null, "TRY 2,900,000")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Cash debt"), /*#__PURE__*/React.createElement("b", null, "\u2014")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "In the cash flow forecast"), /*#__PURE__*/React.createElement("b", null, "None"))), /*#__PURE__*/React.createElement("span", {
    className: "ind-arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "ind-col is-on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ind-lbl"
  }, "After the claim"), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Non-cash limit usage"), /*#__PURE__*/React.createElement("b", null, "\u2014")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Cash debt"), /*#__PURE__*/React.createElement("b", null, "TRY 2,900,000")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "In the cash flow forecast"), /*#__PURE__*/React.createElement("b", null, "Principal + interest"))));
}

/* Letters of credit — iki ayrı vade */
function LcTimeline() {
  const rows = [['LC-0418', 'Document presentation', '14.11.2026', 'Payment', '12.02.2027', '4,180,000'], ['LC-0423', 'Document presentation', '02.12.2026', 'Payment', '02.06.2027', '2,640,000'], ['LC-0431', 'Document presentation', '19.12.2026', 'Payment', '19.03.2027', '1,520,000']];
  const cols = '.9fr 1.2fr 1.2fr .9fr';
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Letters of credit"), /*#__PURE__*/React.createElement("div", null, "Presentation deadline"), /*#__PURE__*/React.createElement("div", null, "Payment date"), /*#__PURE__*/React.createElement("div", null, "Amount (\u20BA)")), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    className: "td",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, r[0]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[2]), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, r[4]), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, r[5]))), /*#__PURE__*/React.createElement("div", {
    className: "td td-total",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "3 letters of credit"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "8,340,000")));
}
Object.assign(window, {
  GuaranteeExposure,
  GuaranteeMaturity,
  OverdueLetters,
  CommissionSchedule,
  IndemnityFlow,
  LcTimeline
});

/* Blog görselleri — sitenin kendi görsel dilinden türetildi: lacivert fon,
   halka motifi ve ürün kartı/tablo kesitleri. Fotoğraf yok. */

function BlogArt({
  variant,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'ba ba-' + variant,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-ring"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ba-ring ba-ring-2"
  }), variant === 'forecast' ? /*#__PURE__*/React.createElement("div", {
    className: "ba-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-bars"
  }, [38, 54, 46, 68, 58, 82, 72, 94].map((h, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: i > 4 ? 'is-fc' : '',
    style: {
      height: h + '%'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    className: "ba-line"
  })) : null, variant === 'cheque' ? /*#__PURE__*/React.createElement("div", {
    className: "ba-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-rows"
  }, [['0–15', 34], ['16–30', 72], ['31–60', 52], ['61–90', 88]].map(([k, w]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "ba-row"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    className: "ba-track"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: w + '%'
    }
  })))))) : null, variant === 'covenant' ? /*#__PURE__*/React.createElement("div", {
    className: "ba-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-pills"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-ok"
  }, "Compliant"), /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-warn"
  }, "E\u015Fi\u011Fe yak\u0131n"), /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-crit"
  }, "Breach"), /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-unk"
  }, "Could not be tested"))) : null, variant === 'lead' ? /*#__PURE__*/React.createElement("div", {
    className: "ba-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-bars ba-bars-sm"
  }, [42, 60, 50, 74, 64, 88].map((h, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: i > 3 ? 'is-fc' : '',
    style: {
      height: h + '%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ba-stack"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ba-band"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ba-band is-short"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ba-band is-mid"
  })))) : null, label ? /*#__PURE__*/React.createElement("span", {
    className: "ba-tag"
  }, label) : null);
}
Object.assign(window, {
  BlogArt
});