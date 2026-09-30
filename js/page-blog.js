var __Page=(function () {
  const { useState } = React;
  const DATA = window.__BLOG || JSON.parse(document.getElementById('blog-data').textContent);
  const e = React.createElement;
  function Thumb({ p, lead }) {
    if (p.kapak) return e("img", { className: "post-img", src: p.kapak, alt: p.kapakAlt || p.baslik, loading: lead ? "eager" : "lazy", decoding: "async" });
    return e(BlogArt, { variant: lead ? 'lead' : p.tema, label: p.kategori });
  }
  function Card({ p }) {
    return e("a", { className: "post", href: p.file },
      e("div", { className: "post-thumb" }, e(Thumb, { p })),
      e("div", { className: "post-body" },
        e("div", { className: "post-meta" }, e("span", null, p.kategori), e("span", null, "\xB7"), e("span", null, p.tarihYazi), e("span", null, "\xB7"), e("span", null, p.sure)),
        e("h3", null, p.baslik), e("p", null, p.ozet), e("span", { className: "post-more" }, "Devam\u0131n\u0131 oku \u2192")));
  }
  function Page() {
    const [lang, setLang] = useState('TR');
    const L0 = DATA.lead;
    return e(React.Fragment, null, e(SiteHeader, { lang, setLang }),
      e("section", { className: "hero hero-sub", id: "top" },
        e("div", { className: "facets", "aria-hidden": "true" }, e("i", { className: "f1x" }), e("i", { className: "f3x" })),
        e("div", { className: "wrap stack-6" },
          e("span", { className: "eyebrow eyebrow-invert" }, "Blog"),
          e("h1", { className: "sub-h1" }, "Hazine prati\u011Fi \xFCzerine yaz\u0131lar"),
          e("p", { className: "sub-lead" }, "\xDCr\xFCn duyurusu de\u011Fil, i\u015Fin kendisi: tahmin sapmalar\u0131, \xE7ek portf\xF6y\xFC kararlar\u0131, mutabakat farklar\u0131 ve s\xF6zle\u015Fme \u015Fart\u0131 (covenant) testleri. Hepsi sahada kar\u015F\u0131la\u015Ft\u0131\u011F\u0131m\u0131z durumlardan."))),
      L0 ? e("section", { className: "section" }, e("div", { className: "wrap stack-10" }, e("div", { className: "blog-lead" },
        e("div", { className: "stack-5" },
          e("div", { className: "post-meta" }, e("span", null, "\xD6ne \xE7\u0131kan"), e("span", null, "\xB7"), e("span", null, L0.kategori), e("span", null, "\xB7"), e("span", null, L0.tarihYazi)),
          e("h2", { className: "h2", style: { maxWidth: '22ch' } }, L0.baslik),
          e("p", { className: "lead" }, L0.ozet),
          e("a", { className: "btn btn-ghost", href: L0.file, style: { alignSelf: 'flex-start' } }, "Yaz\u0131y\u0131 oku ", e(Icon, { name: "arrow-right" }))),
        e("div", null, e("div", { className: "media-frame" }, e(Thumb, { p: L0, lead: true })))))) : null,
      DATA.posts.length ? e("section", { className: "section section-tint" }, e("div", { className: "wrap stack-8" },
        e("div", { className: "strip-head" }, e("div", { className: "stack-3", style: { maxWidth: '52ch' } }, e("span", { className: "eyebrow" }, "Son yaz\u0131lar"), e("h2", { className: "h2" }, "T\xFCm yaz\u0131lar"))),
        e("div", { className: "post-grid" }, DATA.posts.map((p) => e(Card, { key: p.file, p }))))) : null,
      e(PageCta, { title: "Yaz\u0131lardaki konular\u0131 \xFCr\xFCn \xFCzerinde g\xF6r\xFCn", lead: "G\xF6r\xFC\u015Fmede kendi tahmin tablonuzla sapma analizini birlikte kuruyoruz." }),
      e(SiteFooter, null), e(CookieBanner, null));
  }
  return Page;
})();
if (typeof document !== 'undefined' && document.getElementById && document.getElementById("root")) ReactDOM.hydrateRoot(document.getElementById("root"), React.createElement(__Page));
