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
const MENUS = [['Platform', [['Hazine ve nakit yönetimi', 'Grup konsolide bakiye ve haftalık tahmin', 'hazine-nakit-yonetimi.html'], ['Finansman', 'Kredi, mevduat, teminat mektubu ve limitler', 'finansman.html'], ['Risk ve uyum', 'Sözleşme şartları (covenant), limit, kur ve faiz duyarlılığı', 'risk-uyum.html'], ['Çek ve senet', 'Vade merdiveni, iskonto simülatörü, karşılıksız takibi', 'cek-senet.html'], ['Mutabakat ve muhasebe', 'Banka–muhasebe eşleşmesi, TDHP eşlemesi', 'mutabakat.html'], ['Ödemeler', 'Paket, tutar bandına göre çok imzalı onay, banka formatında dosya', 'odemeler.html'], ['Güvenlik ve veri', 'İzolasyon, yetki, denetim izi, KVKK', 'guvenlik-veri.html']]], ['Çözümler', [['Açık bankacılık ve banka entegrasyonu', '20+ banka ile hazır bağlantı, entegrasyon teknolojisi', 'acik-bankacilik.html'], ['ERP ve muhasebe entegrasyonları', 'Cari, fatura ve fiş verisi; TDHP mutabakatı', 'erp-entegrasyonlari.html'], ['Çok şirketli gruplar', 'Konsolide görünüm, grup içi finansman, havuzlama', 'cok-sirketli-gruplar.html'], ['Teminat ve akreditif', 'Bloke limit, komisyon, tazmin ve akreditif', 'teminat-akreditif.html']]], ['Şirket', [['Hakkımızda', 'Kimiz, neden bu ürünü kuruyoruz', 'hakkimizda.html'], ['Blog', 'Hazine pratiği üzerine yazılar', 'blog.html'], ['Partnerimiz olun', 'Danışmanlık, bayilik ve teknoloji ortaklığı', 'partner-olun.html'], ['İletişim', 'Ofis, e-posta ve talep kanalları', 'iletisim.html']]], ['Fiyat', 'fiyatlandirma.html']];

/* Sayfanın dili ve karşılık gelen diğer dildeki adresi.
   EN sayfaları /en/ altında, aynı dosya adıyla durur. */
const SITE_LANG = 'TR';
Object.assign(window, {
  SITE_LANG
});
/* İngilizceye çevrilmiş sayfalar. EN sayfasındayken listede olmayan bir hedef
   Türkçesine düşer (../dosya) — /en/ altında 404 olmaz. Sayfa çevrildikçe listeye eklenir. */
const EN_PAGES = ['index.html', 'hazine-nakit-yonetimi.html', 'fiyatlandirma.html', 'odemeler.html', 'risk-uyum.html', 'cek-senet.html', 'finansman.html', 'teminat-akreditif.html', 'cok-sirketli-gruplar.html', 'mutabakat.html', 'hakkimizda.html', 'gizlilik-politikasi.html', 'kvkk-aydinlatma-metni.html', 'cerez-politikasi.html', 'iletisim.html', 'partner-olun.html', 'guvenlik-veri.html', 'erp-entegrasyonlari.html', 'acik-bankacilik.html', 'login.html'];

/* Bağlantı hedefini dile göre çözümler. */
function L(href) {
  if (SITE_LANG !== 'EN' || !href || href.indexOf('.html') === -1) return href;
  const dosya = href.split('#')[0];
  return EN_PAGES.indexOf(dosya) > -1 ? href : '../' + href;
}

/* Dosya adı derleme sırasında ve tarayıcıda aynı olsun diye global'den okunur. */
function LANG_URL(hedef) {
  const dosya = typeof window !== 'undefined' && window.__PAGE_FILE || 'index.html';
  return hedef === SITE_LANG ? dosya : SITE_LANG === 'TR' ? 'en/' + (EN_PAGES.indexOf(dosya) > -1 ? dosya : 'index.html') : '../' + dosya;
}
function SiteHeader({
  lang,
  setLang
}) {
  const [open, setOpen] = useState(null);
  const [solid, setSolid] = useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
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
    src: solid ? window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_DARK : '../../assets/tideon-wordmark.png' : window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../../assets/tideon-wordmark-light.png',
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
  }, "Demo talep et"), /*#__PURE__*/React.createElement("a", {
    className: "hdr-login",
    href: L("login.html")
  }, "Giri\u015F")), /*#__PURE__*/React.createElement("button", {
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
  }, "Giri\u015F")), MENUS.map(([label, items]) => typeof items === 'string' ? /*#__PURE__*/React.createElement("div", {
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
     Düz bağlantı olan başlıklar (Fiyat) kendi kolonunda tek satır olarak durur. */
  /* Düz bağlantı olan başlıklar (Fiyat) kendi kolonu olmaz — Şirket kolonuna satır olarak girer. */
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
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../../assets/tideon-wordmark-light.png',
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
  }, "AI destekli Hazine ve Nakit ak\u0131\u015F y\xF6netimi platformu"), /*#__PURE__*/React.createElement("div", {
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
  }, "Gizlilik Politikas\u0131"), /*#__PURE__*/React.createElement("a", {
    href: L("kvkk-aydinlatma-metni.html")
  }, "KVKK Ayd\u0131nlatma Metni"), /*#__PURE__*/React.createElement("a", {
    href: L("cerez-politikasi.html")
  }, "\xC7erez Politikas\u0131"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => window.dispatchEvent(new Event('tideon:cookie-settings'))
  }, "\xC7erez tercihi")), /*#__PURE__*/React.createElement("div", {
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
  }, "Hukuki bilgilendirme"), /*#__PURE__*/React.createElement("h1", null, title), /*#__PURE__*/React.createElement("p", {
    className: "legal-date"
  }, "Son g\xFCncelleme: 29.09.2026"))), /*#__PURE__*/React.createElement("section", {
    className: "legal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, toc ? /*#__PURE__*/React.createElement("nav", {
    className: "legal-toc",
    "aria-label": "\u0130\xE7indekiler"
  }, /*#__PURE__*/React.createElement("span", null, "\u0130\xE7indekiler"), /*#__PURE__*/React.createElement("ol", null, toc.map(([id, label]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + id
  }, label))))) : null, children, /*#__PURE__*/React.createElement("div", {
    className: "legal-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "gizlilik-politikasi.html"
  }, "Gizlilik Politikas\u0131"), /*#__PURE__*/React.createElement("a", {
    href: "kvkk-aydinlatma-metni.html"
  }, "KVKK Ayd\u0131nlatma Metni"), /*#__PURE__*/React.createElement("a", {
    href: "cerez-politikasi.html"
  }, "\xC7erez Politikas\u0131")))));
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
    "aria-label": "\xC7erez tercihi",
    "aria-modal": "false"
  }, /*#__PURE__*/React.createElement("button", {
    className: "ck-x",
    type: "button",
    "aria-label": "Kapat",
    onClick: () => setState('hidden')
  }, "\xD7"), /*#__PURE__*/React.createElement("strong", null, "\xC7erez tercihiniz"), /*#__PURE__*/React.createElement("p", null, "Zorunlu \xE7erezler sitenin \xE7al\u0131\u015Fmas\u0131 i\xE7in gereklidir. Analitik \xE7erezler yaln\u0131zca onay\u0131n\u0131zla \xE7al\u0131\u015F\u0131r."), /*#__PURE__*/React.createElement("div", {
    className: "ck-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => decide('all')
  }, "Hepsini kabul et"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => decide('essential')
  }, "Hepsini reddet")), /*#__PURE__*/React.createElement("a", {
    className: "ck-more",
    href: "cerez-politikasi.html"
  }, "Daha fazla bilgi"));
}
Object.assign(window, {
  Fill,
  LegalPage,
  LegalSection,
  CookieBanner
});

/* Platform ekranlarından alınan parçalar — anonimleştirilmiş.
   Kaynak: Nakit Pozisyonu · 13 Haftalık Nakit Akış Tahmini · Çek ve Senet Portföyü ·
   Covenant Takibi · Mutabakat · Ödeme Merkezi (docs/design/rendered).
   Banka, şirket ve karşı taraf adları ile hesap numaraları değiştirildi;
   yapı, ölçü ve renk anlamı platformun kendi token'larından geliyor. */

/* Elimizdeki gerçek logo dosyaları — mono görünüm CSS filtresiyle veriliyor.
   Listede olmayan bankalar boş yuva olarak durur. */
/* Yayında veri URI, geliştirmede dosya yolu. */
const A = p => window.TIDEON_ASSETS && window.TIDEON_ASSETS[p] || '../../assets/' + p;
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
/* ERP ve muhasebe sistemleri — logo dosyaları geldikçe ERP_LOGOS'a eklenir. */
const ERPS = [['logo', 'Logo'], ['mikro', 'Mikro Yazılım'], ['netsis', 'Netsis'], ['sap', 'SAP'], ['dynamics', 'Dynamics 365'], ['oracle', 'Oracle'], ['canias', 'Canias']];
/* Kaynak dosyaların iç boşluğu programatik olarak kırpıldı; şeritte eşit optik ağırlık için. */
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

/* Banka amblemleri (favicon ölçüsü) — kurumların kendi ikon dosyalarından. */
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

/* Banka satırı — amblem + ad; amblemi olmayanda monogram karo. */
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

/* Nakit pozisyonu — KPI şeridi */
function KpiStrip({
  cols = 3
}) {
  const items = [{
    k: 'Toplam nakit',
    v: '184.200.000 ₺',
    meta: '▲ %1,9 · 7 gün',
    fresh: ['ok', '12 dk']
  }, {
    k: 'Kullanılabilir nakit',
    v: '171.400.000 ₺',
    meta: 'Bloke 9.100.000 ₺ · teminat 3.700.000 ₺ düşüldü · 1 hesabın bloke tutarı okunamadı',
    fresh: ['warn', '3 sa']
  }, {
    k: 'Net borç',
    v: '96.800.000 ₺',
    pill: ['pill-warn', 'Varsayım altında'],
    meta: 'Finansal borç bir hesapta okunamadı; borcu olduğundan KÜÇÜK gösteriyor.'
  }, {
    k: 'Days cash on hand',
    v: 'Hesaplanamadı',
    unknown: true,
    meta: 'Nakit dışı gider ayrımı için 4 hesap kodu eşlenmemiş.'
  }].slice(0, cols === 4 ? 4 : 3);
  return /*#__PURE__*/React.createElement("div", {
    className: "kpis"
  }, items.map((p, i) => /*#__PURE__*/React.createElement(Kpi, _extends({
    key: p.k
  }, p, {
    settle: i < 3 ? i * 1100 : null
  }))));
}

/* Nakit pozisyonu — bugün dikkat gerektirenler */
function AttentionList() {
  const rows = [['crit', 'Karşılıksız çek — Müşteri C', '1.240.000 ₺', ''], ['warn', 'Garanti BBVA bağlantısı koptu — 2 hesap', '09:41', 'Bu ekranda 3 yerde işaretli: konsantrasyon payı, kullanılabilir tutar, toplam'], ['crit', 'Ziraat Bankası konsantrasyonu %41,3 — eşik %40', 'bugün', ''], ['crit', 'USD kısa pozisyon limiti aşıldı', '(22,8) mn ₺', ''], ['neutral', 'Onay bekleyen tedarikçi transferi', '8.450.000 ₺', ''], ['neutral', 'SGK ve vergi ödemesi — 26 Ağustos', '14.900.000 ₺', '']];
  // keçeli kalem: renkler sabit, çizim sırası her yüklemede rastgele
  const marker = {
    '1.240.000 ₺': 0,
    '(22.800.000) ₺': 1,
    '8.450.000 ₺': 2,
    '14.900.000 ₺': 3
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
  }, "T\xFCm dikkat kalemleri \u2192"));
}

/* Nakit pozisyonu — para birimi kırılımı ve FX açık pozisyon */
function FxDiverging() {
  const rows = [['TRY', 0, 62, '32,2', false], ['USD', 46, 30, '(22,8)', true], ['EUR', 8, 12, '4,3', false], ['GBP', 1, 4, '2,9', false]];
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fx-head"
  }, /*#__PURE__*/React.createElement("span", null, "\u25C0 Y\xFCk\xFCml\xFCl\xFCk"), /*#__PURE__*/React.createElement("span", null, "Varl\u0131k \u25B6"), /*#__PURE__*/React.createElement("span", {
    className: "fx-net"
  }, "Net (milyon \u20BA)")), rows.map(([cur, li, as, net, over]) => /*#__PURE__*/React.createElement("div", {
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
  }), "Varl\u0131k"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--g-400)'
    }
  }), "Y\xFCk\xFCml\xFCl\xFCk"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--risk-600)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      background: 'var(--risk-600)'
    }
  }), "A\u015F\u0131lm\u0131\u015F limit")), /*#__PURE__*/React.createElement("div", {
    className: "note note-crit"
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", null, "USD k\u0131sa pozisyon limiti 15 milyon \u20BA bug\xFCn a\u015F\u0131ld\u0131 \u2014 ger\xE7ekle\u015Fmi\u015F ihlal. T\xFCrev korumalar\u0131 dahil.")));
}

/* Nakit pozisyonu — hesap bazında bakiyeler */
function AccountsTable() {
  const cols = '1.25fr .9fr 1fr .5fr 1.15fr 1fr';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat tbl-scan"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "T\xFCzel ki\u015Filik"), /*#__PURE__*/React.createElement("div", null, "Banka"), /*#__PURE__*/React.createElement("div", null, "Hesap"), /*#__PURE__*/React.createElement("div", null, "PB"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Bakiye (\u20BA)"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Kullan\u0131labilir")), [['Holding A.Ş.', 'ziraat', 'TR** **** 8842', 'TRY', '41.280.640,15', '40.040.640,15', ''], ['Holding A.Ş.', 'is', 'TR** **** 4412', 'TRY', '22.104.880,43', '22.104.880,43', ''], ['Üretim A.Ş.', 'yapikredi', 'TR** **** 3308', 'TRY', '22.144.100,90', '20.044.100,90', ''], ['Üretim A.Ş.', 'garanti', 'TR** **** 7720', 'EUR', '28.793.259,00', 'hatch', 'bağlantı'], ['Lojistik A.Ş.', 'vakif', 'TR** **** 1180', 'TRY', '18.204.115,64', '18.204.115,64', ''], ['Lojistik A.Ş.', 'qnb', 'TR** **** 6653', 'TRY', '14.118.900,28', '14.118.900,28', '']].map((r, i) => /*#__PURE__*/React.createElement("div", {
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
  }, "ba\u011Flant\u0131 \u2197") : r[5]))), /*#__PURE__*/React.createElement("div", {
    className: "td td-total",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Toplam"), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "9 hesap"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "karma"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "184.220.418,32"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "171.354.618,32"))), /*#__PURE__*/React.createElement("div", {
    className: "note",
    style: {
      marginTop: 8
    },
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Haftalık nakit hareketi ve kapanış bakiyesi */
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
    "aria-label": "Haftal\u0131k nakit hareketi ve kapan\u0131\u015F bakiyesi"
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
  }, "bug\xFCn"), /*#__PURE__*/React.createElement("polyline", {
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
  }), "Giri\u015F"), /*#__PURE__*/React.createElement("span", {
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
  }), "\xC7\u0131k\u0131\u015F"), /*#__PURE__*/React.createElement("span", {
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
  }), "Tahmin"), /*#__PURE__*/React.createElement("span", {
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
  }), "Kapan\u0131\u015F bakiyesi"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "eksen milyon \u20BA")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", null, "H43 kapan\u0131\u015F\u0131 negatif \xB7 (4.180.000) \u20BA")), /*#__PURE__*/React.createElement("div", {
    className: "note note-warn",
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("b", null, "\u25B2"), /*#__PURE__*/React.createElement("span", null, "H42 tampon e\u015Fi\u011Fin alt\u0131nda \xB7 18.700.000 \u20BA"))));
}

/* Tahmin — sağ kolon kartları */
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
  }, "A\xE7\u0131\u011Fa d\xFC\u015Fen hafta"), /*#__PURE__*/React.createElement(Fresh, null, "12 dk")), /*#__PURE__*/React.createElement("div", {
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
  }, "2 \u2013 8 Kas\u0131m 2026 \xB7 bug\xFCnden 12 hafta sonra. Kapan\u0131\u015F ", /*#__PURE__*/React.createElement("b", null, "(4.180.000) \u20BA"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "pf pf-bd"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Aktif varsay\u0131mlar"), /*#__PURE__*/React.createElement("div", {
    className: "stack-2",
    style: {
      marginTop: 8,
      fontSize: 12,
      color: 'var(--g-600)',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u25BE Vadesi ge\xE7mi\u015F alacaklar 18 g\xFCn gecikmeyle tahsil edilir. A\xE7\u0131\u011F\u0131 oldu\u011Fundan ", /*#__PURE__*/React.createElement("b", null, "K\xDC\xC7\xDCK"), " g\xF6sterir."), /*#__PURE__*/React.createElement("div", null, "\u25BE Rotatif kredi H41'de yenilenir. Yenilenmezse H41 de negatife d\xFC\u015Fer."))), /*#__PURE__*/React.createElement("div", {
    className: "pf pf-bd",
    style: {
      background: 'var(--hatch-unknown)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Hesaplanamayan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--g-600)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "4 h\xFCcre \xB7 bir t\xFCzel ki\u015Filik i\xE7in kur verisi ve H33 kredi kullan\u0131m\u0131 yok.")));
}

/* Çek ve senet portföyü — çek listesi */
function ChequeList() {
  const cols = '28px .9fr 1.5fr 1.1fr .9fr 1fr .9fr';
  const rows = [[true, '4471203', 'Müşteri A', '12.847.396,51', '21.08.2026', '21.08.2026', ['pill-ok', 'Portföyde']], [true, '4471198', 'Müşteri B', '3.914.352,00', '29.10.2026', '30.10.2026 ⇥', ['pill-warn', 'Kaydırıldı']], [false, '4470884', 'Müşteri C', '1.240.000,00', '04.08.2026', '04.08.2026', ['pill-risk', 'Karşılıksız']], [false, '4471077', 'Müşteri D', '2.512.044,51', '12.09.2026', 'hatch', ['pill-unk', 'Takvim yok']], [false, '4470991', 'Müşteri E', '1.902.400,00', '19.09.2026', '21.09.2026 ⇥', ['pill-ok', 'Portföyde']], [true, '4470963', 'Müşteri F', '4.208.100,00', '02.10.2026', '02.10.2026', ['pill-ok', 'Portföyde']]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-flat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "\xC7ek no"), /*#__PURE__*/React.createElement("div", null, "Kar\u015F\u0131 taraf"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Tutar \u2193"), /*#__PURE__*/React.createElement("div", null, "Vade"), /*#__PURE__*/React.createElement("div", null, "\xD6deme g\xFCn\xFC"), /*#__PURE__*/React.createElement("div", null, "Durum")), rows.map((r, i) => {
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
  }, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null, "Toplam"), /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "280 kay\u0131t \xB7 sunucudan"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "418.640.220,75"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null))), /*#__PURE__*/React.createElement("div", {
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
  }, "3 \xE7ek se\xE7ili \xB7 20.969.848,51 \u20BA"), /*#__PURE__*/React.createElement("span", {
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

/* Çek ve senet portföyü — iskonto simülatörü çıktısı */
function DiscountSim() {
  const rows = [['Nominal', '20.969.848,51'], ['İskonto tutarı', '(1.448.930,35)'], ['BSMV · %5', '(72.446,52)'], ['Komisyon · %0,15', '(31.454,77)']];
  return /*#__PURE__*/React.createElement("div", {
    className: "stack-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sim-grid"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Banka"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Bank, {
    id: "yapikredi"
  })), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Y\u0131ll\u0131k oran"), /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, "%48,50"), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "G\xFCn say\u0131m\u0131"), /*#__PURE__*/React.createElement("span", null, "ACT/365"), /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Val\xF6r"), /*#__PURE__*/React.createElement("span", null, "T+1 \xB7 07.08.2026")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, "Net ele ge\xE7en"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "19.417.016,86")), /*#__PURE__*/React.createElement("div", {
    className: "td",
    style: {
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "muted"
  }, "Efektif y\u0131ll\u0131k maliyet"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "assumed"
  }, "%54,82")))));
}

/* Sözleşme şartı detay paneli — platformun kendi detay kartından uyarlandı
   (docs/design/Covenant Takibi). Test edilemeyen şart durumu gösterilir. */
const CD_HIST = [['Ç4 2025', '%34,2', 100, 'denetim raporu', false], ['Ç3 2025', '%33,1', 97, 'denetim raporu', false], ['Ç2 2025', '%31,4', 92, 'denetim raporu', false], ['Ç1 2025', '%29,6', 87, 'eşik altı', true]];
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
  }, "S\xF6zle\u015Fme \u015Fart\u0131 detay\u0131"), /*#__PURE__*/React.createElement("strong", null, "\xD6zkaynak / aktif"), /*#__PURE__*/React.createElement("span", {
    className: "cd-sub"
  }, "Banka D \xB7 teminat mektubu limiti \xB7 ", /*#__PURE__*/React.createElement("span", {
    className: "redact-chip redact-chip-sm"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-unk"
  }, "Test edilemedi")) : null, has('banner') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-banner"
  }, /*#__PURE__*/React.createElement("b", null, "!"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))) : null, has('def') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-sec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-eyebrow"
  }, "Tan\u0131m ve form\xFCl"), /*#__PURE__*/React.createElement("p", null, "S\xF6zle\u015Fmede tan\u0131ml\u0131 finansal \u015Fart. E\u015Fik \u2265 %30 \xB7 \xF6l\xE7\xFCm d\xF6nemi \xE7eyreklik."), /*#__PURE__*/React.createElement("code", null, "\xD6zkaynaklar \xF7 Aktif toplam\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Ba\u011Fl\u0131 metrik"), /*#__PURE__*/React.createElement("b", null, "\xD6zkaynak / aktif \u2192"))) : null, has('hist') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-sec"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cd-eyebrow"
  }, "Ge\xE7mi\u015F \xF6l\xE7\xFCmler"), CD_HIST.map(([p, v, w, note, warn]) => /*#__PURE__*/React.createElement("div", {
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
  }, "Neden test edilemiyor \xB7 d\xFCzeltme yolu"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi",
    style: {
      margin: '6px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", {
    className: "cd-cta"
  }, "E\u015Flemeyi teyit et")) : null, has('foot') ? /*#__PURE__*/React.createElement("div", {
    className: "cd-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Son \xF6l\xE7\xFCm"), /*#__PURE__*/React.createElement("span", {
    className: "redact-chip"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Sonraki \xF6l\xE7\xFCm"), /*#__PURE__*/React.createElement("span", {
    className: "redact-chip redact-chip-warn"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cd-row"
  }, /*#__PURE__*/React.createElement("span", null, "Bildirim y\xFCk\xFCml\xFCl\xFC\u011F\xFC"), /*#__PURE__*/React.createElement("b", null, "\xC7eyrek kapan\u0131\u015F\u0131ndan 45 g\xFCn"))) : null);
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
  }, /*#__PURE__*/React.createElement("div", null, "S\xF6zle\u015Fme \u015Fart\u0131"), /*#__PURE__*/React.createElement("div", null, "E\u015Fik"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "De\u011Fer"), /*#__PURE__*/React.createElement("div", null, "D\xF6nem"), /*#__PURE__*/React.createElement("div", null, "Sonu\xE7")), [['Net borç / FAVÖK', '≤ 3,50x', '3,82x', 'Ç2 2026', ['pill-risk', 'İhlal']], ['Cari oran', '≥ 1,20x', '1,44x', 'Ç2 2026', ['pill-ok', 'Uygun']], ['Faiz karşılama', '≥ 2,00x', '2,08x', 'Ç4 2026', ['pill-warn', 'Tahmini ihlal']], ['Özkaynak / aktif', '≥ %30', '—', 'Ç2 2026', ['pill-unk', 'Test edilemedi']]].map((r, i) => /*#__PURE__*/React.createElement("div", {
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

/* Mutabakat — banka / muhasebe eşleşmesi */
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
  }, /*#__PURE__*/React.createElement("div", null, "Tarih"), /*#__PURE__*/React.createElement("div", null, "Banka a\xE7\u0131klamas\u0131"), /*#__PURE__*/React.createElement("div", null, "TDHP hesab\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Tutar"), /*#__PURE__*/React.createElement("div", null, "E\u015Fle\u015Fme")), [['04.08.2026', 'EFT — Müşteri A tahsilat', '120 01 001', '1.240.000', ['pill-ok', 'Otomatik']], ['07.08.2026', 'Hesap işletim komisyonu', '780 01 004', '4.200', ['pill-ok', 'Otomatik']], ['11.08.2026', 'Virman — grup içi', '131 02 003', '15.000.000', ['pill-warn', 'Elle onay']], ['18.08.2026', 'BSMV tahakkuku', '—', '86.420', ['pill-unk', 'Hesap eşlenmedi']]].map((r, i) => /*#__PURE__*/React.createElement("div", {
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

/* Nakit pozisyonu — banka konsantrasyonu */
function Concentration() {
  const rows = [['ziraat', 41.3, '41,3', '76.100.000 ₺', 'over'], ['is', 22.3, '22,3', '41.000.000 ₺', ''], ['garanti', 16.3, '16,3', '30.000.000 ₺', 'hatch'], ['yapikredi', 12.0, '12,0', '22.100.000 ₺', ''], ['akbank', 8.2, '8,2', '15.000.000 ₺', '']];
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
  }, "%", pctLabel), /*#__PURE__*/React.createElement("span", {
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
const RATIOS = [['Asit-test oranı', '0,92', 'politika ≥ 0,80', 'ok'], ['Brüt kâr marjı', '%24,6', 'geçen yıl %23,1', 'ok'], ['Kısa vadeli borç payı', '%61,4', 'politika ≤ %55', 'risk'], ['Nakit / kısa vadeli borç', '%18,2', 'politika ≥ %15', 'ok']];
const CCC = [['Alacak devir hızı', '58 gün', '+4'], ['Stok devir hızı', '41 gün', '+9'], ['Borç devir hızı', '(37) gün', '−2']];
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
  }, "Nakit d\xF6n\xFC\u015F\xFCm s\xFCresi ", /*#__PURE__*/React.createElement("b", null, "62 g\xFCn")), /*#__PURE__*/React.createElement("div", {
    className: "rb-parts"
  }, CCC.map(([k, v, d]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "rb-part"
  }, /*#__PURE__*/React.createElement("i", null, k), /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("em", null, d))))));
}

/* Mutabakat — gerçek ekrandan kesitler (anonimleştirilmiş) */
function BalanceBridge() {
  return /*#__PURE__*/React.createElement("div", {
    className: "brg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brg-hd"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Bakiye k\xF6pr\xFCs\xFC"), " banka defteri \u2192 ERP defteri"), /*#__PURE__*/React.createElement("i", null, "Fark, mutab\u0131k olmayan kalemlerin toplam\u0131na e\u015Fit olmal\u0131")), /*#__PURE__*/React.createElement("div", {
    className: "brg-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brg-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Banka defteri"), /*#__PURE__*/React.createElement("b", null, "184.220.418,32"), /*#__PURE__*/React.createElement("i", null, "1.284 hareket \xB7 10 hesap")), /*#__PURE__*/React.createElement("div", {
    className: "brg-op"
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    className: "brg-cell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "ERP defteri"), /*#__PURE__*/React.createElement("b", null, "183.099.655,18"), /*#__PURE__*/React.createElement("i", null, "1.261 kay\u0131t \xB7 TDHP e\u015Flemeli")), /*#__PURE__*/React.createElement("div", {
    className: "brg-op"
  }, "="), /*#__PURE__*/React.createElement("div", {
    className: "brg-cell is-warn"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "A\xE7\u0131klanmam\u0131\u015F fark"), /*#__PURE__*/React.createElement("b", null, "1.120.763,14"), /*#__PURE__*/React.createElement("i", null, "86 kalem \xB7 e\u015Fik a\u015F\u0131ld\u0131")), /*#__PURE__*/React.createElement("div", {
    className: "brg-split"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "Fark\u0131n k\u0131r\u0131l\u0131m\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "brg-row"
  }, /*#__PURE__*/React.createElement("span", null, "Bankada var, ERP\u2019de yok"), /*#__PURE__*/React.createElement("b", null, "886.400,00")), /*#__PURE__*/React.createElement("div", {
    className: "brg-row"
  }, /*#__PURE__*/React.createElement("span", null, "ERP\u2019de var, bankada yok"), /*#__PURE__*/React.createElement("b", null, "(268.900,00)")), /*#__PURE__*/React.createElement("div", {
    className: "brg-row"
  }, /*#__PURE__*/React.createElement("span", null, "Kur de\u011Ferleme fark\u0131"), /*#__PURE__*/React.createElement("b", null, "503.263,14")))));
}
const MATCH_TABS = [['Önerilen eşleşmeler', '24'], ['Eşleşmeyenler', '73'], ['Mutabık', '1.164'], ['Elle bağlananlar', '7']];
const MATCH_ROWS = [['06.08', 'Gelen EFT · karşı taraf A', '9.412.880,00', 'Fatura 2026/1180', '9.412.880,00', '—', 96], ['05.08', 'Toplu EFT · 118 talimat', '(3.402.880,14)', 'Toplu fiş 2026/8804', '(3.402.880,14)', '—', 94], ['04.08', 'EUR gelen · karşı taraf B', '28.793.259,00', 'Fatura 2026/882', '28.787.137,00', '6.122,00', 71], ['03.08', 'Çek iskontosu net ödeme', '3.948.825,37', 'İskonto 4470963', '3.948.825,37', '—', 88], ['02.08', 'Gelen havale · gönderen adı boş', '410.288,00', '—', '—', '—', 42]];
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
  }, /*#__PURE__*/React.createElement("div", null, "Tarih"), /*#__PURE__*/React.createElement("div", null, "Banka hareketi"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Banka tutar\u0131"), /*#__PURE__*/React.createElement("div", null, "ERP kayd\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "ERP tutar\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "Fark"), /*#__PURE__*/React.createElement("div", null, "E\u015Fle\u015Fme g\xFCveni")), MATCH_ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
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
  }, "%", r[6]))))), /*#__PURE__*/React.createElement("div", {
    className: "mbar"
  }, /*#__PURE__*/React.createElement("b", null, "3 \xF6neri se\xE7ili"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-amt"
  }, "9.958.825,23 \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-btn"
  }, "E\u015Fle\u015Fmeyi onayla"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-gh"
  }, "Reddet ve ay\u0131r"), /*#__PURE__*/React.createElement("span", {
    className: "mbar-gh"
  }, "Kural olu\u015Ftur"), /*#__PURE__*/React.createElement("i", null, "Yaln\u0131zca y\xFCksek g\xFCvenliler \xF6n se\xE7ili")));
}
const UNMATCHED = [['Bankada var, ERP’de yok', '42 kalem · 886.400,00 ₺', [['08.08', 'Masraf kesintisi · havale komisyonu', '(204.100,55)', '1 gün'], ['07.08', 'Gelen havale · gönderen adı boş', '410.288,00', '2 gün'], ['05.08', 'BSMV tahakkuku', '(72.446,52)', '4 gün']]], ['ERP’de var, bankada yok', '31 kalem · (268.900,00) ₺', [['06.08', 'Tahsilat fişi · karşı taraf C', '96.400,00', '3 gün'], ['31.07', 'Personel avansı mahsubu', '(312.500,00)', '6 gün'], ['24.07', 'Tedarikçi iade kaydı', '(52.800,00)', '13 gün']]]];
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

/* Mutabakat — küçük parça kartlar (anonimleştirilmiş) */
function ReconMatch() {
  const rows = [['Otomatik · birebir', 'ok', '184 kayıt', '%96'], ['Tolerans içinde', 'ok', '31 kayıt', '%88'], ['Düşük güven · öneri', 'warn', '12 kayıt', '%54'], ['Elle bağlandı', 'ok', '7 kayıt', 'elle'], ['Eşleşmedi', 'risk', '9 kayıt', '—']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "E\u015Fle\u015Ftirme sonucu"), /*#__PURE__*/React.createElement("b", null, "243 kay\u0131t")), rows.map(([k, s, n, c]) => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("span", null, "Fark ayr\u0131\u015Ft\u0131rmas\u0131"), /*#__PURE__*/React.createElement("b", null, "EUR hesab\u0131")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Banka bakiyesi"), /*#__PURE__*/React.createElement("b", null, "\u20AC 946.210,00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Muhasebe bakiyesi"), /*#__PURE__*/React.createElement("b", null, "\u20AC 944.880,00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sep"
  }, "Fark nereden geliyor"), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-ok"
  }), /*#__PURE__*/React.createElement("span", null, "Kur kaynakl\u0131"), /*#__PURE__*/React.createElement("b", null, "\u20AC 1.180,00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-risk"
  }), /*#__PURE__*/React.createElement("span", null, "Ger\xE7ek fark"), /*#__PURE__*/React.createElement("b", null, "\u20AC 150,00")), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Kur kayna\u011F\u0131 ve tarihi her sat\u0131rda g\xF6r\xFCn\xFCr."));
}
function CategorySource() {
  const rows = [['Kural motoru', 'ok', '208 işlem'], ['Elle atama', 'ok', '24 işlem'], ['İçe aktarma', 'ok', '11 işlem'], ['Atanmamış', 'warn', '17 işlem']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Kategori kayna\u011F\u0131"), /*#__PURE__*/React.createElement("b", null, "260 i\u015Flem")), rows.map(([k, s, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Elle d\xFCzeltme korunur; motor \xFCzerine yazmaz."));
}
function BalanceContinuity() {
  const rows = [['Açılış + hareket = kapanış', 'ok', '7 hesap'], ['Ekstre yok', 'warn', '1 hesap'], ['Toplam tutmuyor', 'risk', '1 hesap'], ['Bakiye alanı boş', 'warn', '1 hesap']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "G\xFCn baz\u0131nda kontrol"), /*#__PURE__*/React.createElement("b", null, "10 hesap")), rows.map(([k, s, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "\xDC\xE7 sorun ayr\u0131 raporlan\u0131r; tek ba\u015Fl\u0131k alt\u0131nda toplanmaz."));
}

/* Çek ve senet — küçük parça kartlar (anonimleştirilmiş) */
const LADDER = [['0–15 gün', 62, 34, '18.400.000 ₺'], ['16–30 gün', 100, 41, '31.100.000 ₺'], ['31–60 gün', 78, 58, '12.700.000 ₺'], ['61–90 gün', 44, 66, '(6.900.000) ₺'], ['90+ gün', 26, 18, '3.200.000 ₺']];
function ChequeLadder() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Vade merdiveni"), /*#__PURE__*/React.createElement("b", null, "5 dilim")), /*#__PURE__*/React.createElement("div", {
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
  }), "al\u0131nan"), /*#__PURE__*/React.createElement("span", {
    className: "lad-key"
  }, /*#__PURE__*/React.createElement("i", {
    className: "lad-dn"
  }), "verilen"), " \xB7 bir dilime t\u0131klamak tabloyu o vadeye filtreler"));
}
function ChequeLifecycle() {
  const steps = [['Portföyde', 'ok', '186 evrak'], ['Tahsile verildi', 'ok', '42 evrak'], ['Ciro edildi', 'ok', '17 evrak'], ['İskontoda', 'warn', '23 evrak'], ['Tahsil edildi', 'ok', '9 evrak'], ['Karşılıksız', 'risk', '3 evrak']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Durum ge\xE7i\u015Fleri"), /*#__PURE__*/React.createElement("b", null, "280 evrak")), steps.map(([k, s, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'mini-dot is-' + s
  }), /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Kar\u015F\u0131l\u0131ks\u0131z \xE7\u0131kma banka referans\u0131 girilmeden i\u015Faretlenemez."));
}
function ChequeShift() {
  const rows = [['4471310', '29.10.2026', '30.10.2026', 'Resmî tatil'], ['4471288', '01.11.2026', '02.11.2026', 'Pazar'], ['4471254', '12.09.2026', '14.09.2026', 'Cumartesi · banka kapalı']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Vade \u2192 \xF6deme g\xFCn\xFC"), /*#__PURE__*/React.createElement("b", null, "3 kay\u0131t")), /*#__PURE__*/React.createElement("div", {
    className: "shift-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Evrak"), /*#__PURE__*/React.createElement("span", null, "Vade"), /*#__PURE__*/React.createElement("span", null, "\xD6deme")), rows.map(([id, v, o, why]) => /*#__PURE__*/React.createElement("div", {
    key: id,
    className: "shift-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono"
  }, id), /*#__PURE__*/React.createElement("span", null, v), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, o), " \u21E5"), /*#__PURE__*/React.createElement("i", null, why))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Kayd\u0131rma gerek\xE7esi kay\u0131tta saklan\u0131r."));
}

/* Ödeme merkezi — küçük parça kartlar (anonimleştirilmiş) */
function PaySources() {
  const rows = [['Elle giriş', '6 talimat', '2.140.000 ₺'], ['Planlı nakit akışı', '11 talimat', '4.860.000 ₺'], ['Kredi taksitleri', '4 talimat', '3.720.000 ₺'], ['Borç faturaları', '27 talimat', '7.520.000 ₺']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Paketteki kaynak da\u011F\u0131l\u0131m\u0131"), /*#__PURE__*/React.createElement("b", null, "48 talimat")), rows.map(([k, n, amt]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("i", null, n), /*#__PURE__*/React.createElement("b", null, amt))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Her kalem kayna\u011F\u0131na ba\u011Fl\u0131d\u0131r; ikinci bir pakete al\u0131namaz."));
}
function PayApproval() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Ka\xE7 imza \xB7 neden"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-risk"
  }, "Onaylanamaz")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Paket tutar\u0131"), /*#__PURE__*/React.createElement("b", null, "8.412.000 \u20BA")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Tutar band\u0131"), /*#__PURE__*/React.createElement("b", null, "5.000.000 \u20BA \xFCzeri \xB7 3 imza")), /*#__PURE__*/React.createElement("div", {
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, "Tan\u0131ml\u0131 yetkili"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--risk-600)'
    }
  }, "2 ki\u015Fi \xB7 1 eksik")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sep"
  }, "\u0130mza durumu"), /*#__PURE__*/React.createElement("div", {
    className: "mini-sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-block"
  }), /*#__PURE__*/React.createElement("span", null, "Haz\u0131rlayan \xB7 kendi paketini imzalayamaz")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-ok"
  }), /*#__PURE__*/React.createElement("span", null, "CFO \xB7 imzalad\u0131")), /*#__PURE__*/React.createElement("div", {
    className: "mini-sig"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mini-dot is-miss"
  }), /*#__PURE__*/React.createElement("span", null, "\xDC\xE7\xFCnc\xFC yetkili tan\u0131ml\u0131 de\u011Fil")), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Bu bir \u201Cbekliyor\u201D de\u011Fil: yap\u0131land\u0131rma d\xFCzeltilmeli."));
}
function PayReplies() {
  const rows = [['Kabul', 'pill-ok', '4 talimat', '6.980.000 ₺'], ['Reddedildi', 'pill-risk', '1 talimat', '540.000 ₺'], ['Alındı · karar yok', 'pill-unk', '2 talimat', '1.310.000 ₺']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Banka cevab\u0131 \xB7 talimat baz\u0131nda"), /*#__PURE__*/React.createElement("b", null, "7 talimat")), rows.map(([k, p, n, amt]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + p
  }, k), /*#__PURE__*/React.createElement("i", null, n), /*#__PURE__*/React.createElement("b", null, amt))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Reddedilen talimat pakette kal\u0131r; gerek\xE7esi kay\u0131tta durur."));
}
function PayAttention() {
  const rows = [['Onaylı · hiç indirilmemiş', '2'], ['İndirilmiş · cevap yok', '1'], ['Kısmen kabul', '1'], ['Onaylanamaz', '1']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Dikkat gerektirenler"), /*#__PURE__*/React.createElement("b", null, "5 paket")), rows.map(([k, n]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row mini-warn"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, n))), /*#__PURE__*/React.createElement("div", {
    className: "mini-foot"
  }, "Onayland\u0131\u011F\u0131 h\xE2lde indirilmemi\u015F paket sessizce beklemez."));
}

/* Ödeme merkezi — paketler */
/* dört ayrı tip: 1) el yazısı isim + alt çizgi  2) tek darbe paraf  3) ilmekli imza + alt çizgi  4) monogram paraf */
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
  // ilmekli imza, altı çizili
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
  }, [['PKT-2026-0841', '48 talimat', '18.240.000 ₺', ['pill-ok', 'Dosya hazır']], ['PKT-2026-0842', '31 talimat', '9.410.000 ₺', ['pill-warn', '2. onay bekliyor']], ['PKT-2026-0843', '27 talimat', '6.120.400 ₺', ['pill-warn', '1. onay bekliyor']], ['PKT-2026-0844', '36 talimat', '14.440.000 ₺', ['pill-unk', 'Hazırlanıyor']]].slice(0, count).map(([id, n, amt, pill], i) => /*#__PURE__*/React.createElement("div", {
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

/* Finansman — kredi ve mevduat portföyü (anonimleştirilmiş) */
function LoanPortfolio() {
  const cols = '1.5fr .85fr .8fr 1fr .9fr';
  const rows = [['ziraat', 'İşletme · TRY', 'Annüite', '48.200.000', '%52,40'], ['is', 'Yatırım · EUR', 'Eşit anapara', '31.640.000', '%6,85'], ['garanti', 'Rotatif · TRY', 'Bullet', '22.500.000', '%54,10'], ['akbank', 'Spot · USD', 'Bullet', '18.320.000', '%7,20'], ['vakif', 'İşletme · TRY', 'Ödemesiz 6 ay', '12.900.000', '%51,75']];
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Banka \xB7 \xFCr\xFCn"), /*#__PURE__*/React.createElement("div", null, "Geri \xF6deme"), /*#__PURE__*/React.createElement("div", null, "Kalan g\xFCn"), /*#__PURE__*/React.createElement("div", null, "Anapara (\u20BA)"), /*#__PURE__*/React.createElement("div", null, "Faiz")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, "5 kredi"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "133.560.000"), /*#__PURE__*/React.createElement("div", null)));
}

/* Finansman — ödeme planı kırılımı */
function LoanSchedule() {
  const rows = [['Anapara', '4.016.666,67'], ['Faiz', '2.104.883,20'], ['BSMV', '105.244,16'], ['Komisyon', '18.500,00']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Taksit k\u0131r\u0131l\u0131m\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-ok"
  }, "Ann\xFCite")), rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Taksit toplam\u0131"), /*#__PURE__*/React.createElement("b", null, "6.245.294,03 \u20BA")));
}

/* Finansman — limit kullanımı */
function LimitUsage() {
  const rows = [['Nakdi kredi', 74, '133.560.000', '180.000.000'], ['Gayrinakdi (TM)', 58, '52.400.000', '90.000.000'], ['Akreditif', 31, '9.300.000', '30.000.000'], ['Rotatif', 89, '22.500.000', '25.300.000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Limit kullan\u0131m\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "1 limit e\u015Fikte")), rows.map(([k, pct, used, tot]) => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("b", null, "%", pct), /*#__PURE__*/React.createElement("span", {
    className: "lim-v"
  }, used, " / ", tot, " \u20BA"))));
}

/* Finansman — teminat mektubu portföyü */
function GuaranteeLetters() {
  const rows = [['Yürürlükte', 'pill-ok', '18 mektup', '38.100.000 ₺'], ['Vadesi doldu · iade edilmedi', 'pill-warn', '5 mektup', '11.400.000 ₺'], ['Tazmin talebi', 'pill-risk', '1 mektup', '2.900.000 ₺']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Teminat mektuplar\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "11,4 mn \u20BA bloke")), rows.map(([k, p, n, v]) => /*#__PURE__*/React.createElement("div", {
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
  nakit: ['Hazine ve nakit yönetimi', 'wallet', 'Tüm bankalardaki nakdinizi ve grup şirketlerinizi tek ekranda görün. Gerçekten kullanabileceğiniz tutarı bilin, sıkışmayı haftalar önce fark edin.', 'hazine-nakit-yonetimi.html'],
  finansman: ['Finansman', 'landmark', 'Kredi ve mevduat portföyünüzü tek yerden yönetin. Ödeme planlarınızı saniyeler içinde oluşturun, kredi limitlerinizi, teminat mektuplarınızı ve grup içi kredilerinizi takip edin.', 'finansman.html'],
  risk: ['Risk ve uyum', 'shield-check', 'Kur riskinizi, limitlerinizi ve bankalara verdiğiniz taahhütleri anlık izleyin. Bir eşik aşılmadan önce haberiniz olsun.', 'risk-uyum.html'],
  islemlerB: ['İşlemler ve mutabakat', 'arrow-left-right', 'Banka hareketleriniz kendiliğinden sınıflanır ve muhasebe kayıtlarınızla eşleşir. Ay sonu mutabakatı günler değil, dakikalar sürer.', 'mutabakat.html'],
  cek: ['Çek ve senet', 'receipt', 'Çek ve senetlerinizin vadelerini tek takvimde görün. İskonto etmeden önce gerçek maliyeti bilin, likit olmayan çekler nakdinizi şişirmesin.', 'cek-senet.html'],
  odemeler: ['Ödemeler', 'send', 'Ödeme merkezinde ödemelerinizi kolay ve hızlıca hazırlayın. Yetkili onayına sunun, onaylanan paketi bankanıza gönderin.', 'odemeler.html']
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
  }, "Hazine i\u015Finin tamam\u0131, tek platformda")), /*#__PURE__*/React.createElement("div", {
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
  }, "Detay ", /*#__PURE__*/React.createElement(Icon, {
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
    points: "0,34 26,30 52,32 78,24 104,27 130,20 156,22 182,14 208,17 234,9 260,6",
    fill: "none",
    stroke: "rgba(255,255,255,.5)",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,34 26,30 52,32 78,24 104,27 130,20 156,22 182,14 208,17 234,9 260,6 260,46 0,46",
    fill: "rgba(255,255,255,.10)"
  }));
}
const LEFT = [{
  t: 'Nakit bakiyeleri',
  ic: '⚖',
  rows: [['*5681', '₺ 3.565.828', '▲ %0,5'], ['*1882', '₺ 2.595.974', '▼ %1,0'], ['*9420', '₺ 1.771.632', '▲ %0,7'], ['*6852', '₺ 924.357', '▲ %1,5']]
}, {
  t: 'Eşikler',
  ic: '⇅',
  rows: [['Hesap başına hedef bakiye', '₺ 1 mn', '']]
}, {
  t: 'Masraf geçmişi',
  ic: '◷',
  spark: true,
  axis: ['Eyl', 'Eki', 'Kas', 'Ara', 'Oca', 'Şub', 'Mar']
}, {
  t: 'Fiyatlandırma anlaşmaları',
  ic: '◎',
  rows: [['Banka komisyon oranları', '4 sözleşme', '']]
}, {
  t: 'Vade merdiveni',
  ic: '≡',
  rows: [['0–30 gün', '₺ 112,4 mn', ''], ['31–60 gün', '₺ 84,0 mn', '']]
}];
const RIGHT = [{
  note: 'Boşta nakit hedefi aşıyor.'
}, {
  t: 'Nakit optimizasyon uyarısı',
  ic: '⚠',
  rows: [['Boşta nakit', '₺ 4,4 mn'], ['Aşılan üst eşik', '3 hesap']]
}, {
  t: 'Önerilen sweep',
  rows: [['Para piyasasına aktar', ''], ['Tahmini getiri', '%4,25']],
  cta: 'Para piyasasına aktar ›'
}, {
  note: 'Banka masrafları %28 arttı.'
}, {
  t: 'Banka masraf uyarısı',
  ic: '⚠',
  rows: [['Beklenen masraf', '₺ 1,2 mn'], ['Fark', '+%28']]
}];
const STATUS = ['Bakiyeleri gözden geçiriyorum…', 'Eşik aşımlarını kontrol ediyorum…', 'Sweep önerisi hazırlıyorum…', 'Banka masraflarını karşılaştırıyorum…'];
const FLOW = [['₺ 41.280.640', 'hf-lu', 0], ['▲ %0,7', 'hf-rd', 0.85], ['₺ 4,4 mn', 'hf-ld', 1.7], ['camt.053', 'hf-ru', 2.55], ['₺ 924.357', 'hf-rd', 4.15], ['%4,25', 'hf-lu', 3.3], ['₺ 2.595.974', 'hf-ld', 5.0], ['+%28', 'hf-ru', 5.85]];
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
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../../assets/tideon-wordmark-light.png',
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
const HERO_WORDS = ['Hazineyi', 'Nakit akışını', 'Ödemeleri', 'Riski'];
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
  }, /*#__PURE__*/React.createElement("h1", null, window.SITE_LANG === 'EN' ? /*#__PURE__*/React.createElement(React.Fragment, null, "AI-native ", /*#__PURE__*/React.createElement(HeroWord, null), /*#__PURE__*/React.createElement("br", null), "Manage it end to end") : /*#__PURE__*/React.createElement(React.Fragment, null, "AI deste\u011Fi ile t\xFCm", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(HeroWord, null), " y\xF6netin")), /*#__PURE__*/React.createElement("p", null, "Nakit, \xF6demeler, tahminleme ve daha fazlas\u0131 i\xE7in tek bir platform. H\u0131zl\u0131 ve b\xFCy\xFCk \xF6l\xE7ekte \xE7al\u0131\u015Fan modern finans ekipleri i\xE7in tasarland\u0131."), /*#__PURE__*/React.createElement("p", {
    className: "hero-tag"
  }, "CFO i\xE7in sabah rutini: kahve ve ", /*#__PURE__*/React.createElement("img", {
    className: "inline-logo",
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../../assets/tideon-wordmark-light.png',
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
  }, "Demo talep et ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })))), /*#__PURE__*/React.createElement(HeroFlow, null)));
}
function Capabilities() {
  return /*#__PURE__*/React.createElement(CapabilityGrid, {
    caps: CAPS_B,
    eyebrow: "\xD6ne \xE7\u0131kanlar"
  });
}

/* Üç farklı durum: veri eksikliği · belirsizlik altında hesaplama · sessiz boşluk */
const CLAIMS = [["minus-circle","Eksik veri gizlenmez","Okunamayan bir hesap toplamı şişirmez. Neyin eksik olduğunu tek bakışta görürsünüz."],["triangle-alert","Tahmin, tahmin olarak görünür","Varsayımla hesaplanan rakam işaretli gelir. Kararınızın neye dayandığını bilirsiniz."],["circle-slash","Kör nokta kalmaz","Test edilemeyen bir şart “uygun” görünmez. Kimsenin bakmadığı riski ilk siz fark edersiniz."]];
const CLAIM_FRAGMENTS = [/*#__PURE__*/React.createElement(PfCard, {
  title: "Hesap baz\u0131nda bakiyeler",
  note: "9 hesap \xB7 kapsam d\u0131\u015F\u0131 b\u0131rak\u0131lan hesap notuyla",
  flush: true,
  key: "c0"
}, /*#__PURE__*/React.createElement(AccountsTable, null)), /*#__PURE__*/React.createElement(PfCard, {
  title: "Bor\xE7 ve tahmin varsay\u0131mlar\u0131",
  note: "net bor\xE7 \xB7 aktif varsay\u0131mlar",
  key: "c1"
}, /*#__PURE__*/React.createElement(ForecastRail, null)), /*#__PURE__*/React.createElement("div", {
  className: "frag-grid",
  key: "c2"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "S\xF6zle\u015Fme \u015Fartlar\u0131 (covenant) ve limit takibi",
  note: "4 s\xF6zle\u015Fme \xB7 9 \u015Fart",
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
  }, "G\xFCvenilir rakamlar"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Her rakam\u0131n bir kayna\u011F\u0131 var"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Ekrandaki her rakam\u0131n nereden geldi\u011Fini bilirsiniz. Eksik veri gizlenmez, tahmin ger\xE7ek gibi sunulmaz.")), /*#__PURE__*/React.createElement("div", {
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
const FLOWS = [['Sabah nakit kontrolü', 'Hazine müdürü · günlük', 'Bugün nerede ne kadar param var?', /*#__PURE__*/React.createElement("div", {
  className: "stack-4",
  key: "f0"
}, /*#__PURE__*/React.createElement(KpiStrip, {
  cols: 4
}), /*#__PURE__*/React.createElement("div", {
  className: "frag-grid"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Bug\xFCn dikkat gerektirenler",
  note: "6 kalem"
}, /*#__PURE__*/React.createElement(AttentionList, null)), /*#__PURE__*/React.createElement(PfCard, {
  title: "Banka konsantrasyonu",
  note: "e\u015Fik %40 \xB7 tek banka"
}, /*#__PURE__*/React.createElement(Concentration, null))))], ['Çek portföyü ve iskonto kararı', 'Hazine uzmanı · günlük', 'Bu çeki bugün iskonto etmek neye mal olur?', /*#__PURE__*/React.createElement("div", {
  className: "frag-stack",
  key: "f1"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "\xC7ek listesi",
  note: "280 kay\u0131t \xB7 16\u201330 g\xFCn dilimi",
  flush: true
}, /*#__PURE__*/React.createElement(ChequeList, null)), /*#__PURE__*/React.createElement("div", {
  className: "frag-inset"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "\u0130skonto sim\xFClat\xF6r\xFC",
  note: "3 \xE7ek se\xE7ili"
}, /*#__PURE__*/React.createElement(DiscountSim, null))))], ['Ödeme paketi onayı', 'Yetkili imza · günlük', 'Bu paketi imzalarsam ne ödenmiş olacak?', /*#__PURE__*/React.createElement(PfCard, {
  title: "\xD6deme paketleri",
  note: "g\xF6revler ayr\u0131l\u0131\u011F\u0131 \xB7 tutar band\u0131na g\xF6re \xE7ok imzal\u0131 onay",
  key: "f2"
}, /*#__PURE__*/React.createElement(PaymentPackages, null))], ['Nakit akış tahmini', 'Hazine analisti · haftalık', 'Önümüzdeki haftalarda nakit sıkışır mı?', /*#__PURE__*/React.createElement("div", {
  className: "frag-grid",
  key: "f3"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "Haftal\u0131k nakit hareketi ve kapan\u0131\u015F bakiyesi",
  note: "haftal\u0131k k\u0131r\u0131l\u0131m \xB7 milyon \u20BA"
}, /*#__PURE__*/React.createElement(ForecastWeeks, null)), /*#__PURE__*/React.createElement(ForecastRail, null))], ['Sözleşme şartları (covenant) ve limit takibi', 'CFO · aylık', 'Bu dönem hangi şartı tutamayacağız?', /*#__PURE__*/React.createElement("div", {
  className: "stack-4",
  key: "f4"
}, /*#__PURE__*/React.createElement(PfCard, {
  title: "S\xF6zle\u015Fme \u015Fartlar\u0131 (covenant) ve limit takibi",
  note: "4 s\xF6zle\u015Fme \xB7 9 \u015Fart",
  flush: true
}, /*#__PURE__*/React.createElement(CovenantTable, null)), /*#__PURE__*/React.createElement("div", {
  className: "frag-grid"
}, /*#__PURE__*/React.createElement(CovenantDetail, {
  parts: ['hd', 'banner', 'block']
}), /*#__PURE__*/React.createElement(CovenantDetail, {
  parts: ['hist', 'foot']
})))], ['Dönem sonu mutabakat', 'Muhasebe müdürü · aylık', 'Banka ile muhasebe neden tutmuyor?', /*#__PURE__*/React.createElement(PfCard, {
  title: "Banka \u2013 muhasebe mutabakat\u0131",
  note: "TDHP e\u015Flemesi \xB7 A\u011Fustos 2026",
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
  }, "\u0130\u015F ak\u0131\u015Flar\u0131"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "CFO\u2019nun bir g\xFCn\xFC")), /*#__PURE__*/React.createElement("div", {
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
const TR_ITEMS = [['Çek ve senet portföyü', 'Vade merdiveni, iskonto simülatörü (BSMV, komisyon, ACT/365 – ACT/360, valör), karşılıksız takibi, ciro. Teminatta ve iskontoda olan çekler portföyde ama likit değildir.', 'BSMV · ACT/365'], ['TDHP eşlemesi', 'Tek düzen hesap planından mali tablo türetme; 7/A ve 7/B ayrımı korunur.', '7/A · 7/B'], ['Teminat mektubu ve akreditif', 'Vadesi dolan bir mektup limiti bırakmaz — asıl nüsha bankaya iade edilene kadar yürürlükte kalır. Yıllarca bloke duran limit burada görünür; tazmin akışı da takip edilir.', 'Limit · tazmin'], ['Vade kaydırma', 'Çek ve senette TTK kuralları, kredi taksitlerinde sözleşmenin kendi konvansiyonu uygulanır. İkisi aynı değildir. Kaydırma gerekçesi kayıtta saklanır.', 'TTK · konvansiyon'], ['BSMV, stopaj, KKDF', 'Kredi ve mevduat hesaplarında vergi ve kesintiler hesaplamaya dahil edilir. Ticari kredilerde KKDF sıfırdır.', 'Vergi · kesinti'], ['Kur politikası', 'Her işlem tipi için ayrı kur politikası: raporlama, tahmin, grup içi, muhasebe. Grup içi işlemlerde piyasa kuru kullanılmaz — sözleşmesel kur beyan edilmezse tutar çevrilmez, uydurulmaz. İki şirketin mutabakatı her gün farklı çıkmasın diye.', 'Sözleşmesel kur']];
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
  }, "T\xFCrkiye\u2019ye \xF6zg\xFC"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "T\xFCrkiye\u2019ye \xF6zg\xFC alt\u0131 alan")), /*#__PURE__*/React.createElement("div", {
    className: "crop",
    style: {
      height: 230
    }
  }, /*#__PURE__*/React.createElement(PfCard, {
    title: "\xC7ek listesi \xB7 \xF6deme g\xFCn\xFC ve vade kayd\u0131rma",
    note: "TTK i\u015F g\xFCn\xFC kural\u0131 \xB7 BSMV \xB7 ACT/365",
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
const CONN_ITEMS = [['Gün içi bakiye ve hareket', 'Açık bankacılık servisleri ve MT942 üzerinden, gün içinde birden çok kez.'], ['Gün sonu ekstresi', 'MT940 · camt.053 — mutabakat için.'], ['Ödeme talimatı', 'ISO 20022 pain.001 ve banka formatında dosya.'], ['Kredi, teminat ve akreditif', 'Limit, bloke ve tazmin bilgisi hesaba bağlı okunur.'], ['Kur politikası ve besleme altyapısı', 'Kaynak ve okuma saati kayıtlı; kur bilgisi gelmeden tutar çevrilmez.'], ['Bağlantı sağlığı', 'Kopan bağlantı gizlenmez: tarama desenle işaretlenir ve etkilediği toplam belirtilir.']];
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
  }, "Banka API entegrasyonlar\u0131"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, "20+ banka ile birebir haz\u0131r entegrasyon"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)',
      maxWidth: '52ch'
    }
  }, "T\xFCrkiye\u2019deki yirmiden fazla bankayla ba\u011Flant\u0131 haz\u0131r. A\xE7\u0131k bankac\u0131l\u0131k servislerinden g\xFCn i\xE7i bakiye ve hareket, ekstre dosyalar\u0131ndan mutabakat, \xF6deme talimat\u0131 i\xE7in banka format\u0131nda dosya. Ba\u011Flant\u0131 kurulduktan sonra bile hesap e\u015Flemesi do\u011Frulanmadan hi\xE7bir hesap toplamlara girmez."), /*#__PURE__*/React.createElement("div", {
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
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../../assets/tideon-wordmark-light.png',
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
  }, "Ba\u011Flant\u0131lar"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Veri giri\u015Fi: banka, ERP ve muhasebe"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Banka taraf\u0131 haz\u0131r ba\u011Flant\u0131larla \xE7al\u0131\u015F\u0131r. ERP ve muhasebe taraf\u0131nda aktar\u0131m katman\u0131 kurulu: standart dosya aktar\u0131m\u0131, zamanlanm\u0131\u015F g\xF6rev ve REST servisi. Kurumunuzun kanallar\u0131 devreye alma s\u0131ras\u0131nda birlikte belirlenir.")), /*#__PURE__*/React.createElement("div", {
    className: "conn"
  }, /*#__PURE__*/React.createElement("div", {
    className: "conn-box stack-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h3"
  }, "Banka veri formatlar\u0131"), /*#__PURE__*/React.createElement("p", {
    className: "sm muted"
  }, "Ekstre ve bakiye aktar\u0131m\u0131 i\xE7in desteklenen formatlar; hesap e\u015Flemesi do\u011Frulanmadan hi\xE7bir hesap toplamlara girmez."), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, ['MT940', 'MT942', 'camt.053', 'camt.052', 'CSV / XLS', 'ISO 20022 pain.001'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: "chip"
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "conn-box stack-4"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "h3"
  }, "ERP ve muhasebe"), /*#__PURE__*/React.createElement("p", {
    className: "sm muted"
  }, "Cari hareket, fatura, muhasebe fi\u015Fi ve mizan aktar\u0131m\u0131; TDHP hesap plan\u0131 e\u015Flemesi \xFCzerinden \xE7al\u0131\u015F\u0131r."), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, ['Dosya aktarımı', 'Zamanlanmış görev', 'REST servisi', 'TDHP hesap eşleme', 'Güncel olmayan veri işaretlenir'].map(c => /*#__PURE__*/React.createElement("span", {
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
  const items = [['Çok kiracılı izolasyon', 'Her kayıt kurum kimliğiyle işaretlenir; erişim kontrolü veritabanı katmanında, uygulama katmanında değil. Bir sorgu yanlış yazılsa bile başka bir kurumun verisini döndüremez.'], ['Rol bazlı yetki', 'Tüzel kişilik ve modül düzeyinde yetkilendirme.'], ['Görevler ayrılığı', 'Hazırlayan kullanıcı onaylayamaz. Bu kural veritabanı seviyesinde uygulanır; uygulama katmanından aşılamaz.'], ['Tutar bandına göre çok imza', 'Belirlenen eşiklerin üstündeki işlemler birden fazla imza ister. Gereken imza sayısı talep anında sabitlenir — sonradan eşik değiştirilerek düşürülemez.'], ['Denetim izi', 'Her değişiklik kullanıcı ve zaman damgasıyla kaydedilir.'], ['KVKK', 'Veri saklama süreleri ve erişim kayıtları tanımlı. Kişisel veri işleme envanteri devreye alma sırasında birlikte hazırlanır.']];
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
  }, "G\xFCvenlik ve veri"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, "Grup yap\u0131s\u0131na uygun yetki ve iz"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)'
    }
  }, "\xC7ok t\xFCzel ki\u015Filikli bir hazinede kimin neyi g\xF6rebildi\u011Fi ve kimin neyi onaylayabildi\u011Fi, \xFCr\xFCn\xFCn ilk katman\u0131nda tan\u0131mlan\u0131r.")), /*#__PURE__*/React.createElement("div", {
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
  }, "Demo talebi"), /*#__PURE__*/React.createElement("h2", {
    className: "h2",
    style: {
      color: '#fff'
    }
  }, "\xDCr\xFCn\xFC kendi hesap yap\u0131n\u0131zla g\xF6r\xFCn"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-invert-muted)',
      maxWidth: '46ch'
    }
  }, "Tideon Platformunu t\xFCm detaylar\u0131 ile sizlere anlatal\u0131m. Altyap\u0131n\u0131z haz\u0131r olmas\u0131 h\xE2linde kendi verilerinizle Platformu test edebilirsiniz. Formu doldurun, uygun zaman\u0131n\u0131z i\xE7in sizleri arayal\u0131m.")), /*#__PURE__*/React.createElement("form", {
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
  }, "Talebiniz al\u0131nd\u0131"), /*#__PURE__*/React.createElement("p", {
    className: "sm",
    style: {
      color: 'var(--text-invert-muted)'
    }
  }, "\u0130ki i\u015F g\xFCn\xFC i\xE7inde d\xF6n\xFC\u015F yap\u0131l\u0131r.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "demo"
  }), /*#__PURE__*/React.createElement("p", {
    hidden: true
  }, /*#__PURE__*/React.createElement("label", null, "Doldurmay\u0131n: ", /*#__PURE__*/React.createElement("input", {
    name: "bot-field"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Ad soyad"), /*#__PURE__*/React.createElement("input", {
    name: "Ad soyad",
    required: true,
    placeholder: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Kurum"), /*#__PURE__*/React.createElement("input", {
    name: "Kurum",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Kurumsal e-posta"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "E-posta",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Telefon"), /*#__PURE__*/React.createElement("div", {
    className: "tel"
  }, /*#__PURE__*/React.createElement("span", null, "+90"), /*#__PURE__*/React.createElement("input", {
    name: "Telefon",
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
  }, /*#__PURE__*/React.createElement("label", null, "G\xF6rev"), /*#__PURE__*/React.createElement("select", {
    name: "G\xF6rev"
  }, /*#__PURE__*/React.createElement("option", null, "CFO"), /*#__PURE__*/React.createElement("option", null, "CEO"), /*#__PURE__*/React.createElement("option", null, "Genel m\xFCd\xFCr"), /*#__PURE__*/React.createElement("option", null, "Finans direkt\xF6r\xFC"), /*#__PURE__*/React.createElement("option", null, "Hazine m\xFCd\xFCr\xFC"), /*#__PURE__*/React.createElement("option", null, "Hazine uzman\u0131"), /*#__PURE__*/React.createElement("option", null, "Finans uzman\u0131"), /*#__PURE__*/React.createElement("option", null, "Muhasebe m\xFCd\xFCr\xFC"), /*#__PURE__*/React.createElement("option", null, "Mali m\xFC\u015Favir"), /*#__PURE__*/React.createElement("option", null, "Denetim"), /*#__PURE__*/React.createElement("option", null, "Bilgi teknolojileri"), /*#__PURE__*/React.createElement("option", null, "Di\u011Fer"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "T\xFCzel ki\u015Filik say\u0131s\u0131"), /*#__PURE__*/React.createElement("select", {
    name: "T\xFCzel ki\u015Filik say\u0131s\u0131"
  }, /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5"), /*#__PURE__*/React.createElement("option", null, "6"), /*#__PURE__*/React.createElement("option", null, "7"), /*#__PURE__*/React.createElement("option", null, "8"), /*#__PURE__*/React.createElement("option", null, "9"), /*#__PURE__*/React.createElement("option", null, "10"), /*#__PURE__*/React.createElement("option", null, "10+")))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Not (opsiyonel)"), /*#__PURE__*/React.createElement("textarea", {
    name: "Not"
  })), /*#__PURE__*/React.createElement("label", {
    className: "consent"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "KVKK onay\u0131",
    value: "Onayland\u0131",
    required: true,
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
    href: "kvkk-aydinlatma-metni.html",
    target: "_blank",
    rel: "noreferrer"
  }, "Ayd\u0131nlatma metnini"), " okudum, ki\u015Fisel verilerimin i\u015Flenmesine onay veriyorum.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    type: "submit",
    disabled: !ok || gonderiliyor,
    style: {
      alignSelf: 'center',
      minWidth: 180,
      justifyContent: 'center',
      opacity: ok && !gonderiliyor ? 1 : .5
    }
  }, gonderiliyor ? 'Gönderiliyor…' : 'Demo talep et'), hata ? /*#__PURE__*/React.createElement("span", {
    className: "form-err",
    role: "alert"
  }, "G\xF6nderilemedi. Ba\u011Flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.") : null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'rgba(255,255,255,.45)'
    }
  }, "Form bilgileriniz yaln\u0131zca demo talebi i\xE7in kullan\u0131l\u0131r.")))));
}

/* Hazır ERP entegrasyonları — merkezde Tideon, çevresinde kendi renkleriyle ERP logoları. */
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
  }, "ERP ve muhasebe"), /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Haz\u0131r ERP entegrasyonlar\u0131"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Cari hareket, faturalar, yevmiye fi\u015Fleri ve mizan ERP\u2019den okunur; nakit tahmini bu kay\u0131tlarla beslenir, mali tablolar mizandan t\xFCretilir. Mutabakat TDHP hesap plan\u0131na g\xF6re yap\u0131l\u0131r, e\u015Flenmemi\u015F kay\u0131t toplamlara girmez.")), showCta ? /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghost",
    href: "erp-entegrasyonlari.html"
  }, "Entegrasyon detay\u0131 ", /*#__PURE__*/React.createElement(Icon, {
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
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_LIGHT : '../../assets/tideon-wordmark-light.png',
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
  }, "Demo talep et ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-ghostDark",
    href: "index.html"
  }, "Ana sayfa")))));
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
   yazıldı. Logolar yalnızca hazır bağlantı listesini gösterir. */
const WALL_OVERRIDE = {
  teb: A('banks/teb-dark.png')
};
const READY_BANKS = ['ziraat', 'is', 'garanti', 'yapikredi', 'akbank', 'vakif', 'halk', 'qnb', 'deniz', 'teb'];
const STANDARD_ITEMS = [['Gün içi bakiye ve hareket', 'Açık bankacılık servisleri ve MT942 üzerinden, gün içinde birden çok kez.'], ['Gün sonu ekstresi', 'MT940 · camt.053 — mutabakat için.'], ['Hesap ve tüzel kişilik eşlemesi', 'Her hesap tüzel kişilik ve TDHP koduyla eşlenir; eşleme doğrulanmadan toplamlara girmez.'], ['Bağlantı sağlığı', 'Kopan bağlantı gizlenmez: işaretlenir ve etkilediği toplam belirtilir.']];
const ONBOARD_ITEMS = [['Ödeme talimatı dosyası', 'pain.001 ya da bankanın kendi formatı; format teyidi devreye alma sırasında yapılır.'], ['Kredi, teminat ve akreditif okuması', 'Limit, bloke ve tazmin bilgisinin hangi kanaldan geldiği bankaya göre değişir.'], ['Kurumsal dosya kanalı', 'SFTP ve zamanlanmış görev kurulumu.'], ['Listede olmayan banka', 'Devreye alma süresi görüşmede yazılı verilir.']];
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
  }, /*#__PURE__*/React.createElement("span", null, "Di\u011Fer banka entegrasyonlar\u0131 yak\u0131nda\u2026")));
}
function ScopeLists() {
  return /*#__PURE__*/React.createElement("div", {
    className: "two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Standart gelen"), /*#__PURE__*/React.createElement(FeatureRows, {
    items: STANDARD_ITEMS
  })), /*#__PURE__*/React.createElement("div", {
    className: "stack-4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Devreye alma gerektiren"), /*#__PURE__*/React.createElement(FeatureRows, {
    items: ONBOARD_ITEMS
  })));
}

/* ERP tarafında okunan küme her sistemde aynı; kanal kurulumda belirlenir. */
const ERP_READ_SET = 'Cari hareket · fatura · yevmiye fişi · mizan';
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
const FORMATS = [['camt.053', 'ISO 20022', 'Gün sonu ekstresi', 'Mutabakat'], ['camt.052', 'ISO 20022', 'Gün içi hareket', 'Nakit pozisyonu'], ['MT940', 'SWIFT', 'Gün sonu ekstresi', 'Mutabakat'], ['MT942', 'SWIFT', 'Gün içi hareket bildirimi', 'Nakit pozisyonu'], ['pain.001', 'ISO 20022', 'Ödeme talimatı', 'Talimat paketi'], ['CSV / XLS', 'Banka özel', 'Ekstre ve bakiye', 'Devreye alma dönemi']];
function FormatTable() {
  const cols = '1fr 1fr 1.4fr 1.2fr';
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Format"), /*#__PURE__*/React.createElement("div", null, "Standart"), /*#__PURE__*/React.createElement("div", null, "\u0130\xE7erik"), /*#__PURE__*/React.createElement("div", null, "Kullan\u0131m")), FORMATS.map(r => /*#__PURE__*/React.createElement("div", {
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

/* Banka bağlama akışı — hero yanında dönen canlandırma.
   Adımlar: boş durum → arama → bağlanıyor → kimlik → hesaplar → başarılı. */

const CAND = [['garanti', 'Garanti BBVA', 'Açık bankacılık servisi'], ['ziraat', 'Ziraat Bankası', 'Açık bankacılık servisi'], ['is', 'İş Bankası', 'Açık bankacılık servisi']];
const ACCOUNTS = {
  garanti: [['TRY', 'Vadesiz · ***4182', '₺ 18.420.556'], ['USD', 'Vadesiz · ***4183', '$ 2.104.880'], ['EUR', 'Vadesiz · ***4184', '€ 946.210'], ['GBP', 'Vadesiz · ***4185', '£ 312.470']],
  is: [['TRY', 'Vadesiz · ***7315', '₺ 24.905.130'], ['TRY', 'Vadeli · ***7318', '₺ 9.640.000'], ['USD', 'Vadesiz · ***7316', '$ 1.372.940'], ['EUR', 'Vadesiz · ***7317', '€ 1.088.475']]
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
  }, "Banka Entegrasyonu"), /*#__PURE__*/React.createElement("span", {
    className: 'cf-btn' + (step === 'idle' ? ' is-hot' : '') + (step === 'idle' && pressed ? ' is-press' : '')
  }, "+ Banka ekle")), /*#__PURE__*/React.createElement("div", {
    className: "cf-body"
  }, step === 'idle' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-empty-ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 18
  })), /*#__PURE__*/React.createElement("strong", null, "Ba\u011Fl\u0131 banka yok"), /*#__PURE__*/React.createElement("span", null, "Hesap e\u015Flemesi yap\u0131lmadan hi\xE7bir bakiye toplamlara girmez.")) : null, step === 'search' ? /*#__PURE__*/React.createElement("div", {
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
  }, "Banka ad\u0131 yaz\u0131n") : null)) : null, step === 'connect' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-center"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-logo",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", {
    className: "cf-spin"
  }), /*#__PURE__*/React.createElement("strong", null, "Bankaya ba\u011Flan\u0131l\u0131yor\u2026"), /*#__PURE__*/React.createElement("span", {
    className: "cf-sub"
  }, "mTLS \xB7 OAuth 2.0")) : null, step === 'creds' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-logo-sm",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", null, "Kurumsal eri\u015Fim bilgileri")), /*#__PURE__*/React.createElement("div", {
    className: "cf-field"
  }, /*#__PURE__*/React.createElement("label", null, "M\xFC\u015Fteri numaras\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "cf-val"
  }, "7\u2022\u2022 \u2022\u2022\u2022 \u2022\u20224")), /*#__PURE__*/React.createElement("div", {
    className: "cf-field"
  }, /*#__PURE__*/React.createElement("label", null, "Kullan\u0131c\u0131 kodu"), /*#__PURE__*/React.createElement("span", {
    className: "cf-val"
  }, "TIDEON\u2022\u2022\u2022\u2022")), /*#__PURE__*/React.createElement("div", {
    className: "cf-field"
  }, /*#__PURE__*/React.createElement("label", null, "Sertifika"), /*#__PURE__*/React.createElement("span", {
    className: "cf-val cf-ok"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " y\xFCklendi")), /*#__PURE__*/React.createElement("span", {
    className: 'cf-cta' + (pressed ? ' is-press' : '')
  }, "Ba\u011Flan")) : null, step === 'accounts' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cf-head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "cf-logo-sm",
    src: BANK_LOGOS_LIGHT[R.id] || BANK_LOGOS[R.id],
    alt: R.name
  }), /*#__PURE__*/React.createElement("span", null, "4 hesap bulundu")), (ACCOUNTS[R.id] || ACCOUNTS.garanti).map(([cur, sub, amt], i) => /*#__PURE__*/React.createElement("div", {
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
  }, "Tamam")) : null, step === 'done' ? /*#__PURE__*/React.createElement("div", {
    className: "cf-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cf-check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26
  })), /*#__PURE__*/React.createElement("strong", null, "Ba\u011Flant\u0131 ba\u015Far\u0131l\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "cf-sub"
  }, R.name, " \xB7 4 hesap \xB7 g\xFCn i\xE7i okuma a\xE7\u0131k")) : null, step === 'flow' ? /*#__PURE__*/React.createElement("div", {
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
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_DARK : '../../assets/tideon-wordmark.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("strong", null, "Veri transferi aktif"), /*#__PURE__*/React.createElement("span", {
    className: "cf-sub"
  }, "4 hesap \xB7 g\xFCn i\xE7i okuma \xB7 camt.052 \xB7 MT942")) : null), /*#__PURE__*/React.createElement("div", {
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
   akan veri. Banka bağlama akışının basitleştirilmiş karşılığı. */

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
    src: window.TIDEON_LOGOS ? window.TIDEON_LOGOS.LOGO_DARK : '../../assets/tideon-wordmark.png',
    alt: "Tideon"
  })), /*#__PURE__*/React.createElement("span", {
    className: "ef-cap"
  }, "Cari hareket \xB7 fatura \xB7 yevmiye fi\u015Fi \xB7 mizan"));
}
Object.assign(window, {
  ErpFlow
});

/* Çok şirketli gruplar sayfasının parçaları — anonimleştirilmiş, milyon ölçeğinde. */

/* Tüzel kişilik bazında nakit ve tampon */
function GroupEntities() {
  const rows = [['Holding A.Ş.', '84.120.000', 'Tampon üstü', 'pill-ok'], ['Üretim A.Ş.', '38.640.000', 'Tampon üstü', 'pill-ok'], ['Enerji A.Ş.', '9.180.000', 'Tampon sınırında', 'pill-warn'], ['Dağıtım A.Ş.', '2.410.000', 'Tampon altı', 'pill-risk'], ['Dış Ticaret A.Ş.', '14.760.000', 'Tampon üstü', 'pill-ok']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "T\xFCzel ki\u015Filik baz\u0131nda kullan\u0131labilir nakit"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "1 \u015Firket tampon alt\u0131")), rows.map(([n, v, s, p]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: 'pill ' + p
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Grup toplam\u0131"), /*#__PURE__*/React.createElement("b", null, "149.110.000 \u20BA")));
}

/* Şirketler arası borç–alacak matrisi */
const IC_NAMES = ['Holding', 'Üretim', 'Enerji', 'Dağıtım', 'Dış Tic.'];
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
  }, "Bor\xE7lu \u2193 / Alacakl\u0131 \u2192"), IC_NAMES.map(n => /*#__PURE__*/React.createElement("span", {
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
  }, /*#__PURE__*/React.createElement("span", null, "Tutarlar milyon \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi",
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Dağınık yapı ile havuzlanmış yapı karşılaştırması */
function PoolCompare() {
  const rows = [['Mevduat getirisi', '4.180.000', '7.640.000'], ['Kredi faiz gideri', '(11.920.000)', '(8.350.000)'], ['Boşta duran nakit', '18.400.000', '3.100.000'], ['Kullanılan rotatif limit', '22.500.000', '12.800.000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp-hd"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null, "Bug\xFCnk\xFC da\u011F\u0131n\u0131k yap\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "is-on"
  }, "Havuzlanm\u0131\u015F yap\u0131")), rows.map(([k, a, b]) => /*#__PURE__*/React.createElement("div", {
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
  }, "Y\u0131ll\u0131k net etki"), /*#__PURE__*/React.createElement("span", {
    className: "cmp-v"
  }, "\u2014"), /*#__PURE__*/React.createElement("span", {
    className: "cmp-v is-on"
  }, "+7.030.000 \u20BA")), /*#__PURE__*/React.createElement("div", {
    className: "cmp-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Sweep kuralları */
function SweepRules() {
  const rows = [['Üretim A.Ş. → Ana hesap', 'Bakiye > 15 mn ₺', 'Hedef 12 mn ₺'], ['Dış Ticaret A.Ş. → Ana hesap', 'Bakiye > 8 mn ₺', 'Hedef 6 mn ₺'], ['Ana hesap → Dağıtım A.Ş.', 'Bakiye < 3 mn ₺', 'Hedef 4 mn ₺']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Sweep kurallar\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-ok"
  }, "3 kural aktif")), rows.map(([k, cond, target]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "sw"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sw-k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "sw-c"
  }, cond), /*#__PURE__*/React.createElement("b", null, target))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "Havuzlamadan do\u011Fan grup i\xE7i alacak"), /*#__PURE__*/React.createElement("b", null, "19.200.000 \u20BA")));
}
Object.assign(window, {
  GroupEntities,
  IntercoMatrix,
  PoolCompare,
  SweepRules
});

/* Teminat ve akreditif sayfasının parçaları — anonimleştirilmiş, milyon ölçeğinde. */

/* Banka bazında teminat riski */
function GuaranteeExposure() {
  const rows = [['ziraat', 'Kesin · avans', 18.4, '18.400.000'], ['is', 'Kesin', 12.9, '12.900.000'], ['garanti', 'Kesin · geçici', 9.2, '9.200.000'], ['akbank', 'Avans', 7.6, '7.600.000'], ['vakif', 'Kesin', 4.3, '4.300.000']];
  const max = 18.4;
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Banka baz\u0131nda teminat riski"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-ok"
  }, "52,4 mn \u20BA")), rows.map(([id, tur, v, amt]) => /*#__PURE__*/React.createElement("div", {
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

/* Vade dağılımı */
function GuaranteeMaturity() {
  /* Toplam 52,4 mn ₺ — GuaranteeExposure ile aynı portföy. */
  const rows = [['0–30 gün', 44, '6.100.000'], ['31–90 gün', 92, '12.800.000'], ['91–180 gün', 55, '7.600.000'], ['181–365 gün', 80, '11.200.000'], ['Süresiz', 100, '14.700.000']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Vade da\u011F\u0131l\u0131m\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "14,7 mn \u20BA s\xFCresiz")), rows.map(([k, pct, v], i) => /*#__PURE__*/React.createElement("div", {
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

/* Vadesi geçmiş ama iade alınmamış — aciliyet sırasına göre */
function OverdueLetters() {
  const rows = [['Lehtar A · kamu kurumu', '5.200.000', 412, 'crit'], ['Lehtar B · özel şirket', '3.100.000', 268, 'crit'], ['Lehtar C · kamu kurumu', '1.800.000', 96, 'warn'], ['Lehtar D · özel şirket', '940.000', 34, 'warn'], ['Lehtar E · özel şirket', '360.000', 3, 'ok']];
  return /*#__PURE__*/React.createElement("div", {
    className: "ov"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ov-hd"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Vadesi ge\xE7mi\u015F, iade al\u0131nmam\u0131\u015F"), /*#__PURE__*/React.createElement("span", null, "5 mektup \xB7 aciliyet s\u0131ras\u0131na g\xF6re")), /*#__PURE__*/React.createElement("span", {
    className: "ov-sum"
  }, "11.400.000 \u20BA bloke")), rows.map(([lehtar, amt, days, sev]) => /*#__PURE__*/React.createElement("div", {
    key: lehtar,
    className: 'ov-row is-' + sev
  }, /*#__PURE__*/React.createElement("span", {
    className: "ov-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ov-k"
  }, lehtar), /*#__PURE__*/React.createElement("b", null, amt, " \u20BA"), /*#__PURE__*/React.createElement("span", {
    className: "ov-d"
  }, days, " g\xFCnd\xFCr bloke"))), /*#__PURE__*/React.createElement("div", {
    className: "ov-note"
  }, /*#__PURE__*/React.createElement("span", {
    className: "redact-lines",
    "aria-label": "Metin anonimle\u015Ftirildi"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))));
}

/* Komisyon takvimi */
function CommissionSchedule() {
  const rows = [['Ç4 2026', '318.400', '18 mektup'], ['Ç1 2027', '318.400', '18 mektup'], ['Ç2 2027', '291.600', '16 mektup'], ['Ç3 2027', '264.900', '14 mektup']];
  return /*#__PURE__*/React.createElement("div", {
    className: "mini"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mini-hd"
  }, /*#__PURE__*/React.createElement("span", null, "Gelecek komisyon \xF6demeleri"), /*#__PURE__*/React.createElement("span", {
    className: "pill pill-warn"
  }, "tahmine dahil")), rows.map(([p, v, n]) => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "mini-row"
  }, /*#__PURE__*/React.createElement("span", null, p), /*#__PURE__*/React.createElement("span", {
    className: "mini-mid"
  }, n), /*#__PURE__*/React.createElement("b", null, v, " \u20BA"))), /*#__PURE__*/React.createElement("div", {
    className: "mini-row mini-tot"
  }, /*#__PURE__*/React.createElement("span", null, "S\xFCresiz mektuplardan gelen k\u0131s\u0131m"), /*#__PURE__*/React.createElement("b", null, "84.200 \u20BA / \xE7eyrek")));
}

/* Tazminin limit ve borç üzerindeki etkisi */
function IndemnityFlow() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ind"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ind-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ind-lbl"
  }, "Tazminden \xF6nce"), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Gayrinakdi limit kullan\u0131m\u0131"), /*#__PURE__*/React.createElement("b", null, "2.900.000 \u20BA")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Nakdi bor\xE7"), /*#__PURE__*/React.createElement("b", null, "\u2014")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Nakit ak\u0131\u015F tahmininde"), /*#__PURE__*/React.createElement("b", null, "Yok"))), /*#__PURE__*/React.createElement("span", {
    className: "ind-arrow",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "ind-col is-on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ind-lbl"
  }, "Tazminden sonra"), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Gayrinakdi limit kullan\u0131m\u0131"), /*#__PURE__*/React.createElement("b", null, "\u2014")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Nakdi bor\xE7"), /*#__PURE__*/React.createElement("b", null, "2.900.000 \u20BA")), /*#__PURE__*/React.createElement("div", {
    className: "ind-row"
  }, /*#__PURE__*/React.createElement("span", null, "Nakit ak\u0131\u015F tahmininde"), /*#__PURE__*/React.createElement("b", null, "Anapara + faiz"))));
}

/* Akreditif — iki ayrı vade */
function LcTimeline() {
  const rows = [['LC-0418', 'Vesaik ibraz', '14.11.2026', 'Ödeme', '12.02.2027', '4.180.000'], ['LC-0423', 'Vesaik ibraz', '02.12.2026', 'Ödeme', '02.06.2027', '2.640.000'], ['LC-0431', 'Vesaik ibraz', '19.12.2026', 'Ödeme', '19.03.2027', '1.520.000']];
  const cols = '.9fr 1.2fr 1.2fr .9fr';
  return /*#__PURE__*/React.createElement("div", {
    className: "tbl tbl-doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "th",
    style: {
      gridTemplateColumns: cols
    }
  }, /*#__PURE__*/React.createElement("div", null, "Akreditif"), /*#__PURE__*/React.createElement("div", null, "Vesaik ibraz vadesi"), /*#__PURE__*/React.createElement("div", null, "\xD6deme vadesi"), /*#__PURE__*/React.createElement("div", null, "Tutar (\u20BA)")), rows.map(r => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", null, "3 akreditif"), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, "8.340.000")));
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
  }, "Uygun"), /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-warn"
  }, "E\u015Fi\u011Fe yak\u0131n"), /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-crit"
  }, "\u0130hlal"), /*#__PURE__*/React.createElement("span", {
    className: "ba-pill is-unk"
  }, "Test edilemedi"))) : null, variant === 'lead' ? /*#__PURE__*/React.createElement("div", {
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