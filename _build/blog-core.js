/* Tideon blog derleyicisi — ortak mantık.
   Netlify'da _build/blog.js (Node) tarafından, bu projede de tarayıcıdan çağrılır.
   Dışa bağımlılık yok. */
(function (root) {
  const SITE = 'https://tideon.com.tr';
  const AYLAR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  /* tema → blog kapak çizimi (components.js BlogArt varyantları) */
  const TEMA = { tahmin: 'forecast', nakit: 'forecast', cek: 'cheque', 'cek-senet': 'cheque', risk: 'covenant', covenant: 'covenant' };

  let INLINE_NETLIFY = false;
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  function slugify(s) {
    const m = { ç: 'c', ğ: 'g', ı: 'i', i: 'i', ö: 'o', ş: 's', ü: 'u', â: 'a', î: 'i', û: 'u' };
    return String(s).toLocaleLowerCase('tr').replace(/[çğıiöşüâîû]/g, (c) => m[c] || c)
      .normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function parseFrontmatter(src) {
    src = src.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
    const m = src.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!m) throw new Error('Dosya başında --- ile açılıp kapanan bilgi bloğu yok.');
    const meta = {};
    for (const line of m[1].split('\n')) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      const i = line.indexOf(':');
      if (i < 0) throw new Error('Bilgi satırı anlaşılamadı: "' + line + '"');
      let v = line.slice(i + 1).trim();
      if (/^".*"$|^'.*'$/.test(v)) v = v.slice(1, -1);
      if (v === 'true' || v === 'evet') v = true; else if (v === 'false' || v === 'hayir' || v === 'hayır') v = false;
      meta[line.slice(0, i).trim().toLocaleLowerCase('tr')] = v;
    }
    return { meta, body: m[2] };
  }

  function inline(s) {
    const codes = [];
    s = s.replace(/`([^`]+)`/g, (_, c) => { codes.push('<code>' + esc(c) + '</code>'); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = esc(s);
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, a, u) => '<img src="' + (INLINE_NETLIFY && u.charAt(0) === '/' ? '/.netlify/images?url=' + encodeURIComponent(u) + '&amp;w=1440' : u) + '" alt="' + a + '" loading="lazy" decoding="async">');
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
      const ext = /^https?:\/\//.test(u) && u.indexOf(SITE) !== 0;
      return '<a href="' + u + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>';
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    return s.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[+i]);
  }

  /* Desteklenen Markdown: ## ve ### başlık, paragraf, **kalın**, *italik*, [bağlantı](adres),
     ![görsel](adres), `kod`, - liste, 1. liste, > alıntı, --- çizgi, | tablo |. */
  function markdown(src) {
    const lines = src.replace(/\r\n?/g, '\n').replace(/<!--[\s\S]*?-->/g, '').split('\n');
    const out = []; let i = 0;
    const isBlockStart = (l) => /^(#{1,4}\s|[-*]\s|\d+[.)]\s|>|\|)/.test(l) || /^(-{3,}|\*{3,})\s*$/.test(l);
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) { i++; continue; }
      let m;
      if ((m = l.match(/^(#{1,4})\s+(.*)$/))) {
        const lv = Math.min(4, Math.max(2, m[1].length === 1 ? 2 : m[1].length));
        out.push('<h' + lv + ' id="' + slugify(m[2]) + '">' + inline(m[2]) + '</h' + lv + '>'); i++; continue;
      }
      if (/^(-{3,}|\*{3,})\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
      if (/^>/.test(l)) {
        const q = []; while (i < lines.length && /^>/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ''));
        out.push('<blockquote>' + markdown(q.join('\n')) + '</blockquote>'); continue;
      }
      if (/^[-*]\s/.test(l) || /^\d+[.)]\s/.test(l)) {
        const ol = /^\d/.test(l); const items = [];
        while (i < lines.length && (ol ? /^\d+[.)]\s/ : /^[-*]\s/).test(lines[i])) items.push(lines[i++].replace(/^([-*]|\d+[.)])\s+/, ''));
        out.push('<' + (ol ? 'ol' : 'ul') + '>' + items.map((t) => '<li>' + inline(t) + '</li>').join('') + '</' + (ol ? 'ol' : 'ul') + '>'); continue;
      }
      if (/^\|/.test(l)) {
        const rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
        const cells = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
        const hasHead = rows[1] && /^\|?\s*:?-{2,}/.test(rows[1]);
        const head = hasHead ? '<thead><tr>' + cells(rows[0]).map((c) => '<th>' + inline(c) + '</th>').join('') + '</tr></thead>' : '';
        const bodyRows = (hasHead ? rows.slice(2) : rows).map((r) => '<tr>' + cells(r).map((c) => '<td>' + inline(c) + '</td>').join('') + '</tr>').join('');
        out.push('<div class="prose-table"><table>' + head + '<tbody>' + bodyRows + '</tbody></table></div>'); continue;
      }
      const p = []; while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) p.push(lines[i++].trim());
      const one = p.join(' ');
      const fig = one.match(/^!\[([^\]]*)\]\([^)]+\)$/);
      out.push(fig ? '<figure>' + inline(one) + (fig[1].trim() ? '<figcaption>' + esc(fig[1]) + '</figcaption>' : '') + '</figure>' : '<p>' + inline(one) + '</p>');
    }
    return out.join('\n');
  }

  function fmtDate(iso) {
    const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) throw new Error('tarih YYYY-AA-GG biçiminde olmalı (ör. 2026-10-05), gelen: "' + iso + '"');
    return +m[3] + ' ' + AYLAR[+m[2] - 1] + ' ' + m[1];
  }

  function parsePost(src, filename) {
    const { meta, body } = parseFrontmatter(src);
    for (const k of ['baslik', 'tarih', 'kategori', 'ozet']) if (!meta[k]) throw new Error('"' + k + ':" satırı eksik.');
    const slug = slugify(meta.adres || filename.replace(/\.md$/, ''));
    const words = body.replace(/[#>*`|\-\[\]()!]/g, ' ').split(/\s+/).filter(Boolean).length;
    return {
      slug, file: 'blog-' + slug + '.html',
      baslik: meta.baslik, tarih: meta.tarih, tarihYazi: fmtDate(meta.tarih), kategori: meta.kategori,
      ozet: meta.ozet, aciklama: meta.aciklama || meta.ozet,
      sure: (meta.sure ? String(meta.sure).replace(/\s*dk$/, '') : Math.max(1, Math.round(words / 200))) + ' dk',
      kapak: meta.kapak || '', kapakAlt: meta.kapak_aciklama || meta.baslik,
      tema: TEMA[slugify(meta.tema || meta.kategori).split('-')[0]] || TEMA[slugify(meta.tema || '')] || 'forecast',
      oneCikan: meta.one_cikan === true, taslak: meta.taslak === true,
      yazar: meta.yazar || 'Tideon', unvan: meta.unvan || '',
      html: markdown(body),
    };
  }

  const sortPosts = (posts) => posts.sort((a, b) => (a.tarih < b.tarih ? 1 : a.tarih > b.tarih ? -1 : 0));

  /* Netlify görsel servisi: ekrana uygun boyut + modern biçim. Yerelde önizlemede ham dosya kullanılır. */
  const img = (src, w, netlify) => (!src ? '' : netlify && src.charAt(0) === '/' ? '/.netlify/images?url=' + encodeURIComponent(src) + '&w=' + w : src.replace(/^\//, ''));

  function listData(posts, netlify) {
    const lead = posts.find((p) => p.oneCikan) || posts[0] || null;
    const card = (p) => ({ file: p.file, baslik: p.baslik, kategori: p.kategori, tarihYazi: p.tarihYazi, sure: p.sure, ozet: p.ozet, tema: p.tema, kapak: img(p.kapak, 720, netlify), kapakAlt: p.kapakAlt });
    return { lead: lead ? card(lead) : null, posts: posts.filter((p) => p !== lead).map(card) };
  }

  function postData(p, posts, netlify) {
    const others = posts.filter((x) => x !== p).slice(0, 3).map((x) => ({ file: x.file, baslik: x.baslik, kategori: x.kategori, tarihYazi: x.tarihYazi, sure: x.sure, ozet: x.ozet, tema: x.tema, kapak: img(x.kapak, 720, netlify), kapakAlt: x.kapakAlt }));
    return { post: { file: p.file, baslik: p.baslik, kategori: p.kategori, tarihYazi: p.tarihYazi, sure: p.sure, ozet: p.ozet, tema: p.tema, kapak: img(p.kapak, 960, netlify), kapakAlt: p.kapakAlt, yazar: p.yazar, unvan: p.unvan, html: p.html }, others };
  }

  function postHead(p) {
    const url = SITE + '/' + p.file;
    const title = p.baslik + ' | Tideon Blog';
    const image = p.kapak ? SITE + p.kapak : SITE + '/assets/og-image.png';
    const ld = [
      { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.baslik, description: p.aciklama, datePublished: p.tarih, dateModified: p.tarih, inLanguage: 'tr-TR', mainEntityOfPage: url, image, author: { '@type': 'Organization', name: p.yazar, url: SITE + '/' }, publisher: { '@type': 'Organization', name: 'Tideon', logo: { '@type': 'ImageObject', url: SITE + '/icon-512.png' } } },
      { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog.html' }, { '@type': 'ListItem', position: 3, name: p.baslik, item: url }] },
    ];
    return '\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
      '<title>' + esc(title) + '</title>\n<meta name="description" content="' + esc(p.aciklama) + '">\n' +
      '<link rel="canonical" href="' + url + '">\n<link rel="alternate" hreflang="tr" href="' + url + '">\n<link rel="alternate" hreflang="x-default" href="' + url + '">\n' +
      '<meta property="og:type" content="article">\n<meta property="og:locale" content="tr_TR">\n<meta property="og:site_name" content="Tideon">\n' +
      '<meta property="og:title" content="' + esc(title) + '">\n<meta property="og:description" content="' + esc(p.aciklama) + '">\n<meta property="og:url" content="' + url + '">\n<meta property="og:image" content="' + image + '">\n' +
      '<meta property="article:published_time" content="' + p.tarih + '">\n<meta property="article:section" content="' + esc(p.kategori) + '">\n' +
      '<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="' + esc(title) + '">\n<meta name="twitter:description" content="' + esc(p.aciklama) + '">\n<meta name="twitter:image" content="' + image + '">\n' +
      ld.map((o) => '<script type="application/ld+json">' + JSON.stringify(o).replace(/</g, '\\u003c') + '</script>').join('\n') + '\n' +
      '<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">\n<link rel="apple-touch-icon" href="apple-touch-icon.png">\n<link rel="stylesheet" href="styles.css">\n<link rel="stylesheet" href="site.css">\n';
  }

  const dataTag = (d) => '<script type="application/json" id="blog-data">' + JSON.stringify(d).replace(/</g, '\\u003c') + '</script>\n';

  function shell(tpl) {
    tpl = tpl.replace(/<script type="application\/json" id="blog-data">[\s\S]*?<\/script>\n?/, '');
    const a = tpl.indexOf('<div id="root">');
    const z = tpl.indexOf('<script src="js/react.js">');
    const rootEnd = tpl.lastIndexOf('</div>', z);
    if (a < 0 || z < 0 || rootEnd < a) throw new Error('blog.html şablonu beklenen yapıda değil.');
    return { pre: tpl.slice(0, a), post: tpl.slice(rootEnd + 6) };
  }

  function sitemap(xml, posts, today) {
    xml = xml.replace(/\n?\s*<url><loc>https:\/\/tideon\.com\.tr\/blog-[^<]+<\/loc>[\s\S]*?<\/url>/g, '');
    const last = posts.length ? posts.reduce((m, p) => (p.tarih > m ? p.tarih : m), '0000') : today;
    xml = xml.replace(/(<loc>https:\/\/tideon\.com\.tr\/blog\.html<\/loc><lastmod>)[^<]+/, '$1' + last);
    const entries = posts.map((p) => '  <url><loc>' + SITE + '/' + p.file + '</loc><lastmod>' + p.tarih + '</lastmod><priority>0.5</priority></url>').join('\n');
    return entries ? xml.replace('</urlset>', entries + '\n</urlset>') : xml;
  }

  /* opts: { posts, template (blog.html metni), sitemapXml, render(file, pageJs, data) → html, write(file, text), netlify, today } */
  function build(o) {
    INLINE_NETLIFY = !!o.netlify;
    const { pre, post } = shell(o.template);
    const listing = listData(o.posts, o.netlify);
    o.write('blog.html', pre + '<div id="root">' + o.render('blog.html', 'js/page-blog.js', listing) + '</div>\n' + dataTag(listing) + post.replace(/^\n/, ''));
    for (const p of o.posts) {
      const d = postData(p, o.posts, o.netlify);
      const head = pre.replace(/<head>[\s\S]*<\/head>/, '<head>' + postHead(p) + '</head>');
      const tail = post.replace(/^\n/, '').replace('window.__PAGE_FILE="blog.html"', 'window.__PAGE_FILE="' + p.file + '"').replace('js/page-blog.js', 'js/page-blog-post.js');
      o.write(p.file, head + '<div id="root">' + o.render(p.file, 'js/page-blog-post.js', d) + '</div>\n' + dataTag(d) + tail);
    }
    o.write('sitemap.xml', sitemap(o.sitemapXml, o.posts, o.today));
    return o.posts.map((p) => p.file);
  }

  const api = { slugify, parseFrontmatter, markdown, parsePost, sortPosts, build, fmtDate };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.TideonBlog = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
