# tideon-web

Tideon web sitesi (tideon.com.tr). Netlify bu depodan otomatik yayınlar.

## Yeni blog yazısı eklemek

1. GitHub'da `content/blog/` klasörünü aç → **Add file → Create new file**.
2. Dosya adını yaz, örneğin `nakit-tamponu.md`. Adres `tideon.com.tr/blog-nakit-tamponu.html` olur.
3. `_ORNEK-YAZI.md` dosyasındaki kalıbı kopyala, başlık, tarih, kategori ve özeti doldur, altına metni yaz.
4. **Commit changes** de. Netlify 1–2 dakika içinde siteyi günceller.

Kapak görseli: `assets/blog/` klasörüne **Add file → Upload files** ile yükle, yazıda `kapak: /assets/blog/dosya-adi.jpg` yaz.
Görsel 500 KB altında olsun (en fazla 2 MB; üstü derlemeyi durdurur). Sitede ekrana uygun boyuta küçültülerek gösterilir.

Yazıyı yayından kaldırmak: dosyaya `taslak: evet` satırı ekle ya da dosyayı sil.

Bir yazıda hata varsa (eksik satır, yanlış tarih, bulunamayan görsel) Netlify derlemeyi durdurur ve canlı site bir önceki hâlinde kalır. Hatanın nedeni Netlify → Deploys → son deploy kaydında yazar.

## Yapı

- `content/blog/*.md`: yazılar (adı `_` ile başlayanlar yayınlanmaz)
- `_build/`: derleme betiği; yazıları HTML'e çevirir, blog listesini ve `sitemap.xml`'i günceller
- Diğer tüm dosyalar olduğu gibi yayınlanır. Derleme çıktısı `dist/` klasörüdür.
