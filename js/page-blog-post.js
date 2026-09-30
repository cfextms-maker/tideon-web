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
    const P = DATA.post;
    return e(React.Fragment, null, e(SiteHeader, { lang, setLang }),
      e("section", { className: "hero hero-sub", id: "top" },
        e("div", { className: "facets", "aria-hidden": "true" }, e("i", { className: "f1x" }), e("i", { className: "f3x" })),
        e("div", { className: "wrap stack-6" },
          e("a", { className: "eyebrow eyebrow-invert post-back", href: "blog.html" }, "\u2190 Blog \xB7 " + P.kategori),
          e("h1", { className: "sub-h1", style: { maxWidth: '24ch' } }, P.baslik),
          e("p", { className: "sub-lead" }, P.ozet),
          e("div", { className: "post-meta post-meta-invert" }, e("span", null, P.tarihYazi), e("span", null, "\xB7"), e("span", null, P.sure + " okuma")))),
      e("section", { className: "section" }, e("div", { className: "wrap stack-8" },
        P.kapak ? e("figure", { className: "post-cover" }, e("img", { src: P.kapak, alt: P.kapakAlt || P.baslik, decoding: "async" })) : null,
        e("article", { className: "prose", dangerouslySetInnerHTML: { __html: P.html } }),
        e("div", { className: "prose-end" }, e("a", { className: "btn btn-ghost", href: "blog.html" }, "\u2190 T\xFCm yaz\u0131lar")))),
      DATA.others.length ? e("section", { className: "section section-tint" }, e("div", { className: "wrap stack-8" },
        e("div", { className: "stack-3" }, e("span", { className: "eyebrow" }, "Blog"), e("h2", { className: "h2" }, "Di\u011Fer yaz\u0131lar")),
        e("div", { className: "post-grid" }, DATA.others.map((p) => e(Card, { key: p.file, p }))))) : null,
      e(PageCta, { title: "Yaz\u0131lardaki konular\u0131 \xFCr\xFCn \xFCzerinde g\xF6r\xFCn", lead: "G\xF6r\xFC\u015Fmede kendi verilerinizle bu konular\u0131 birlikte ele alal\u0131m." }),
      e(SiteFooter, null), e(CookieBanner, null));
  }
  return Page;
})();
if (typeof document !== 'undefined' && document.getElementById && document.getElementById("root")) ReactDOM.hydrateRoot(document.getElementById("root"), React.createElement(__Page));
