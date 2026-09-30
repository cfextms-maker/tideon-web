/* Netlify derleme adımı: content/blog/*.md → blog-*.html, blog.html, sitemap.xml.
   Site dosyaları dist/ klasörüne kopyalanır, yayınlanan klasör dist/ olur.
   Hata varsa derleme durur ve canlı site bir önceki hâlinde kalır. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..'), OUT = path.join(ROOT, 'dist');
const core = require('./blog-core.js');
const rd = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');

/* content/blog/*.md → Türkçe blog, content/blog/en/*.md → İngilizce blog. İki dil birbirinden bağımsızdır. */
function readPosts(lang) {
  const dir = path.join(ROOT, 'content', 'blog', lang === 'en' ? 'en' : '');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.md') && !f.startsWith('_')) : [];
  const posts = [], errors = [], seen = {};
  for (const f of files) {
    const rel = (lang === 'en' ? 'en/' : '') + f;
    try {
      const p = core.parsePost(fs.readFileSync(path.join(dir, f), 'utf8'), f, lang);
      if (p.taslak) { console.log('taslak, atlandı: ' + rel); continue; }
      if (seen[p.slug]) throw new Error('aynı adres iki yazıda kullanılmış: ' + seen[p.slug]);
      seen[p.slug] = rel;
      if (p.kapak) {
        const ip = path.join(ROOT, p.kapak.replace(/^\//, ''));
        if (!fs.existsSync(ip)) throw new Error('kapak görseli bulunamadı: ' + p.kapak);
        const kb = Math.round(fs.statSync(ip).size / 1024);
        if (kb > 2048) throw new Error('kapak görseli çok büyük (' + kb + ' KB). En fazla 2 MB; 500 KB altı önerilir.');
        if (kb > 500) console.warn('UYARI: ' + p.kapak + ' ' + kb + ' KB. 500 KB altına indirmen önerilir.');
      }
      posts.push(p);
    } catch (e) { errors.push(rel + ': ' + e.message); }
  }
  return { posts: core.sortPosts(posts), errors };
}
const TR = readPosts('tr'), EN = readPosts('en');
const errors = TR.errors.concat(EN.errors);
if (errors.length) { console.error('\nBLOG HATASI\n' + errors.join('\n') + '\n'); process.exit(1); }


fs.rmSync(OUT, { recursive: true, force: true });
const SKIP = new Set(['dist', 'node_modules', '_build', 'content', 'package.json', 'package-lock.json', 'netlify.toml', '.git', '.github', '.gitignore', 'README.md']);
/* Kök klasör dist'in üstü olduğu için tek seferde kopyalanamaz; öğeler tek tek kopyalanır. */
fs.mkdirSync(OUT, { recursive: true });
for (const name of fs.readdirSync(ROOT)) {
  if (SKIP.has(name) || /^blog-.+\.html$/.test(name)) continue;
  fs.cpSync(path.join(ROOT, name), path.join(OUT, name), { recursive: true, filter: (s) => !/[\\/]en[\\/]blog-.+\.html$/.test(s) });
}

const noop = () => {};
const el = () => ({ style: {}, setAttribute: noop, appendChild: noop, addEventListener: noop });
function makeCtx(lang) {
  const base = lang === 'en' ? 'https://tideon.com.tr/en/' : 'https://tideon.com.tr/';
  const ctx = {
    React: require('react'), ReactDOMServer: require('react-dom/server'), ReactDOM: { hydrateRoot: noop, createRoot: () => ({ render: noop }) },
    console, setTimeout, clearTimeout, setInterval, clearInterval, requestAnimationFrame: () => 0, cancelAnimationFrame: noop,
    document: { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], addEventListener: noop, removeEventListener: noop, cookie: '', createElement: el, head: el(), body: el(), documentElement: el() },
    localStorage: { getItem: () => null, setItem: noop, removeItem: noop }, sessionStorage: { getItem: () => null, setItem: noop, removeItem: noop },
    navigator: { userAgent: 'node', language: lang }, location: { href: base, pathname: lang === 'en' ? '/en/' : '/', hash: '', search: '' },
    matchMedia: () => ({ matches: false, addEventListener: noop, removeEventListener: noop, addListener: noop, removeListener: noop }),
    IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} }, ResizeObserver: class { observe() {} unobserve() {} disconnect() {} },
    addEventListener: noop, removeEventListener: noop, scrollY: 0, innerWidth: 1440, innerHeight: 900,
  };
  ctx.window = ctx; ctx.self = ctx;
  vm.createContext(ctx);
  const js = lang === 'en' ? ['js/lucide.js', 'en/js/paths.js', 'js/netlify-forms.js', 'en/js/components.js'] : ['js/lucide.js', 'js/paths.js', 'js/netlify-forms.js', 'js/components.js'];
  for (const f of js) vm.runInContext(rd(f), ctx, { filename: f });
  return ctx;
}

const today = new Date().toISOString().slice(0, 10);
const built = [];
for (const [lang, set] of [['tr', TR], ['en', EN]]) {
  const ctx = makeCtx(lang), dir = lang === 'en' ? 'en/' : '';
  built.push(...core.build({
    posts: set.posts, lang, template: rd(dir + 'blog.html'), netlify: true, today,
    render: (file, pageJs, data) => { ctx.__PAGE_FILE = file; ctx.__BLOG = data; vm.runInContext(rd(dir + pageJs), ctx, { filename: dir + pageJs }); return ctx.ReactDOMServer.renderToString(ctx.React.createElement(ctx.__Page)); },
    write: (f, s) => fs.writeFileSync(path.join(OUT, f), s),
  }));
}
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), core.sitemap(rd('sitemap.xml'), TR.posts, EN.posts, today));
const ga = ['js/components.js', 'en/js/components.js'].every((f) => fs.readFileSync(path.join(OUT, f), 'utf8').includes('G-C2CBDRWD6K'));
if (!ga) { console.error('GA4 kodu components.js içinde bulunamadı, derleme durduruldu.'); process.exit(1); }
console.log('Blog: TR ' + TR.posts.length + ', EN ' + EN.posts.length + ' yazı üretildi → ' + built.join(', '));
