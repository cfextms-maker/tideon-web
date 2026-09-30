/* Netlify Forms gönderimi — panelde kayıt + bildirim e-postası.
   Yanıt beklenir: başarılıysa true, hata ya da bağlantı sorununda false. */
function netlifySubmit(formName, data) {
  const body = new URLSearchParams({ 'form-name': formName, ...data }).toString();
  return fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
    .then((r) => r.ok)
    .catch(() => false);
}
Object.assign(window, { netlifySubmit });
