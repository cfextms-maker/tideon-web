var __Page=(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  function Page() {
    const [lang, setLang] = useState('TR');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement(LegalPage, {
      title: "KVKK Ayd\u0131nlatma Metni",
      toc: [['sorumlu', 'Veri sorumlusu'], ['veriler', 'İşlenen kişisel veriler'], ['amac', 'İşleme amaçları'], ['sebep', 'Hukuki sebep'], ['aktarim', 'Aktarım'], ['saklama', 'Saklama süresi'], ['haklar', 'Haklarınız']]
    }, /*#__PURE__*/React.createElement(LegalSection, {
      id: "sorumlu",
      title: "Veri sorumlusu"
    }, /*#__PURE__*/React.createElement("p", null, "Tideon")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "veriler",
      title: "\u0130\u015Flenen ki\u015Fisel veriler"
    }, /*#__PURE__*/React.createElement("p", null, "\u0130leti\u015Fim formu arac\u0131l\u0131\u011F\u0131yla: ad soyad, \u015Firket ad\u0131, e-posta adresi, telefon numaras\u0131 ve mesaj i\xE7eri\u011Finde payla\u015Ft\u0131\u011F\u0131n\u0131z bilgiler."), /*#__PURE__*/React.createElement("p", null, "Site ziyaretinizde otomatik olarak: IP adresi, taray\u0131c\u0131 ve cihaz bilgisi, ziyaret edilen sayfalar ve ziyaret s\xFCresi.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "amac",
      title: "\u0130\u015Fleme ama\xE7lar\u0131"
    }, /*#__PURE__*/React.createElement("p", null, "Talebinize yan\u0131t vermek, \xFCr\xFCn tan\u0131t\u0131m\u0131 ve demo s\xFCreci y\xFCr\xFCtmek, ticari ileti\u015Fim kurmak, site kullan\u0131m\u0131n\u0131 \xF6l\xE7mek ve iyile\u015Ftirmek.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "sebep",
      title: "Hukuki sebep"
    }, /*#__PURE__*/React.createElement("p", null, "\u0130leti\u015Fim formu verileri a\xE7\u0131k r\u0131zan\u0131za dayan\u0131larak i\u015Flenir. Analitik veriler, me\u015Fru menfaat kapsam\u0131nda ve \xE7erez onay\u0131n\u0131za ba\u011Fl\u0131 olarak i\u015Flenir.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "aktarim",
      title: "Aktar\u0131m"
    }, /*#__PURE__*/React.createElement("p", null, "Verileriniz Google Analytics ve Netlify hizmet sa\u011Flay\u0131c\u0131lar\u0131 arac\u0131l\u0131\u011F\u0131yla i\u015Flenmekte olup, bu sa\u011Flay\u0131c\u0131lar\u0131n sunucular\u0131 ABD\u2019de bulunmaktad\u0131r. Yurt d\u0131\u015F\u0131na aktar\u0131m, KVKK\u2019n\u0131n ilgili h\xFCk\xFCmleri \xE7er\xE7evesinde ger\xE7ekle\u015Ftirilir.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "saklama",
      title: "Saklama s\xFCresi"
    }, /*#__PURE__*/React.createElement("p", null, "\u0130leti\u015Fim formu verileri, talebinizin sonu\xE7lanmas\u0131ndan itibaren 1 y\u0131l saklan\u0131r. Analitik veriler 1 y\u0131l sonra anonimle\u015Ftirilir.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "haklar",
      title: "Haklar\u0131n\u0131z"
    }, /*#__PURE__*/React.createElement("p", null, "KVKK\u2019n\u0131n 11. maddesi uyar\u0131nca; ki\u015Fisel verilerinizin i\u015Flenip i\u015Flenmedi\u011Fini \xF6\u011Frenme, i\u015Flenmi\u015Fse bilgi talep etme, i\u015Flenme amac\u0131n\u0131 \xF6\u011Frenme, aktar\u0131ld\u0131\u011F\u0131 \xFC\xE7\xFCnc\xFC ki\u015Fileri bilme, eksik veya yanl\u0131\u015F i\u015Flenmi\u015Fse d\xFCzeltilmesini isteme, silinmesini veya yok edilmesini isteme, otomatik sistemlerle analiz sonucu aleyhinize bir sonu\xE7 do\u011Fmas\u0131na itiraz etme ve zarara u\u011Framan\u0131z h\xE2linde tazminat talep etme haklar\u0131na sahipsiniz."), /*#__PURE__*/React.createElement("p", null, "Taleplerinizi info@tideon.com.tr adresine iletebilirsiniz."))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
