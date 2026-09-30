var __Page=(function () {
  const { useState } = React;
  const DATA = window.__BLOG || JSON.parse(document.getElementById('blog-data').textContent);
  const e = React.createElement;
  const EN = typeof SITE_LANG !== 'undefined' && SITE_LANG === 'EN';
  const T = EN ? { more: 'Read more \u2192', all: 'All', latest: 'Latest posts', latestH: 'Recently published', empty: 'No posts yet. New writing will appear here.', posts: (n) => n + (n === 1 ? ' post' : ' posts'), ctaT: 'See these topics in the product', ctaL: 'In a demo we work through them with your own data.' }
    : { more: 'Devam\u0131n\u0131 oku \u2192', all: 'T\xFCm\xFC', latest: 'Son yaz\u0131lar', latestH: 'Yeni yay\u0131mlananlar', empty: 'Hen\xFCz yaz\u0131 yok. Yeni yaz\u0131lar burada g\xF6r\xFCnecek.', posts: (n) => n + ' yaz\u0131', ctaT: 'Yaz\u0131lardaki konular\u0131 \xFCr\xFCn \xFCzerinde g\xF6r\xFCn', ctaL: 'G\xF6r\xFC\u015Fmede bu konular\u0131 kendi verilerinizle birlikte ele alal\u0131m.' };
  function Thumb({ p }) {
    if (p.kapak) return e("img", { className: "post-img", src: p.kapak, alt: p.kapakAlt || p.baslik, loading: "lazy", decoding: "async" });
    return e(BlogArt, { variant: p.tema, label: p.kategori });
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
    const G = DATA.groups || [];
    return e(React.Fragment, null, e(SiteHeader, { lang, setLang }),
      e("section", { className: "hero blog-top", id: "top" },
        e("div", { className: "facets", "aria-hidden": "true" }, e("i", { className: "f1x" }), e("i", { className: "f3x" })),
        e("div", { className: "wrap blog-top-row" },
        e("h1", { className: "blog-h1" }, "Blog"),
        G.length > 1 ? e("nav", { className: "blog-cats", "aria-label": "Kategoriler" },
          G.map((g) => e("a", { key: g.id, href: "#" + g.id }, g.name, e("span", null, g.posts.length)))) : null)),
      G.length ? G.map((g, i) => e("section", { key: g.id, id: g.id, className: "section blog-cat-sec" + (i % 2 ? " section-tint" : "") },
        e("div", { className: "wrap stack-8" },
          e("div", { className: "blog-cat-head" }, e("h2", { className: "h2" }, g.name), e("span", null, T.posts(g.posts.length))),
          e("div", { className: "post-grid" }, g.posts.map((p) => e(Card, { key: p.file, p }))))))
        : e("section", { className: "section" }, e("div", { className: "wrap" }, e("p", { className: "blog-empty" }, T.empty))),
      DATA.latest && DATA.latest.length ? e("section", { className: "section blog-latest" }, e("div", { className: "wrap stack-8" },
        e("div", { className: "stack-3" }, e("span", { className: "eyebrow" }, T.latest), e("h2", { className: "h2" }, T.latestH)),
        e("div", { className: "post-grid" }, DATA.latest.map((p) => e(Card, { key: p.file, p }))))) : null,
      e(PageCta, { title: T.ctaT, lead: T.ctaL }),
      e(SiteFooter, null), e(CookieBanner, null));
  }
  return Page;
})();
if (typeof document !== 'undefined' && document.getElementById && document.getElementById("root")) { const R = document.getElementById("root"); R.firstElementChild ? ReactDOM.hydrateRoot(R, React.createElement(__Page)) : ReactDOM.createRoot(R).render(React.createElement(__Page)); }
