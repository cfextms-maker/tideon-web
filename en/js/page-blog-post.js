var __Page=(function () {
  const { useState } = React;
  const DATA = window.__BLOG || JSON.parse(document.getElementById('blog-data').textContent);
  const e = React.createElement;
  const EN = typeof SITE_LANG !== 'undefined' && SITE_LANG === 'EN';
  const T = EN ? { more: 'Read more \u2192', read: ' read', all: '\u2190 All posts', others: 'More posts', ctaT: 'See these topics in the product', ctaL: 'In a demo we work through them with your own data.' } : { more: 'Devam\u0131n\u0131 oku \u2192', read: ' okuma', all: '\u2190 T\xFCm yaz\u0131lar', others: 'Di\u011Fer yaz\u0131lar', ctaT: 'Yaz\u0131lardaki konular\u0131 \xFCr\xFCn \xFCzerinde g\xF6r\xFCn', ctaL: 'G\xF6r\xFC\u015Fmede kendi verilerinizle bu konular\u0131 birlikte ele alal\u0131m.' };
  function Thumb({ p, lead }) {
    if (p.kapak) return e("img", { className: "post-img", src: p.kapak, alt: p.kapakAlt || p.baslik, loading: lead ? "eager" : "lazy", decoding: "async" });
    return e(BlogArt, { variant: lead ? 'lead' : p.tema, label: p.kategori });
  }
  function Card({ p }) {
    return e("a", { className: "post", href: p.file },
      e("div", { className: "post-thumb" }, e(Thumb, { p })),
      e("div", { className: "post-body" },
        e("div", { className: "post-meta" }, e("span", null, p.kategori), e("span", null, "\xB7"), e("span", null, p.tarihYazi), e("span", null, "\xB7"), e("span", null, p.sure)),
        e("h3", null, p.baslik), e("p", null, p.ozet), e("span", { className: "post-more" }, T.more)));
  }
  function Page() {
    const [lang, setLang] = useState(EN ? 'EN' : 'TR');
    const P = DATA.post;
    return e(React.Fragment, null, e(SiteHeader, { lang, setLang, alwaysSolid: true }),
      e("section", { className: "post-head", id: "top" },
        e("div", { className: "wrap post-head-grid" + (P.kapak ? "" : " no-cover") },
          e("div", { className: "post-head-text" },
            e("a", { className: "post-back-link", href: "blog.html" }, "\u2190 Blog", e("span", { className: "post-cat" }, P.kategori)),
            e("h1", { className: "post-title" }, P.baslik),
            e("p", { className: "post-lead" }, P.ozet),
            e("div", { className: "post-byline" },
              e("span", { className: "post-avatar" }, e(Icon, { name: "UserRound", size: 24 })),
              e("div", { className: "post-byline-txt" },
                e("b", null, P.yazar || "Tideon"),
                e("span", null, P.unvan ? P.unvan + " \xB7 " : "", e("time", null, P.tarihYazi), " \xB7 " + P.sure + T.read)))),
          P.kapak ? e("figure", { className: "post-head-img" }, e("img", { src: P.kapak, alt: P.kapakAlt || P.baslik, decoding: "async", fetchpriority: "high" })) : null)),
      e("section", { className: "section post-section" }, e("div", { className: "wrap stack-8" },
        e("article", { className: "prose", dangerouslySetInnerHTML: { __html: P.html } }),
        e("div", { className: "prose-end" }, e("a", { className: "btn btn-ghost", href: "blog.html" }, T.all)))),
      DATA.others.length ? e("section", { className: "section section-tint" }, e("div", { className: "wrap stack-8" },
        e("div", { className: "stack-3" }, e("span", { className: "eyebrow" }, "Blog"), e("h2", { className: "h2" }, T.others)),
        e("div", { className: "post-grid" }, DATA.others.map((p) => e(Card, { key: p.file, p }))))) : null,
      e(PageCta, { title: T.ctaT, lead: T.ctaL }),
      e(SiteFooter, null), e(CookieBanner, null));
  }
  return Page;
})();
if (typeof document !== 'undefined' && document.getElementById && document.getElementById("root")) { const R = document.getElementById("root"); R.firstElementChild ? ReactDOM.hydrateRoot(R, React.createElement(__Page)) : ReactDOM.createRoot(R).render(React.createElement(__Page)); }
