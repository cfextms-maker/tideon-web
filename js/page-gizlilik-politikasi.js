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
      title: "Gizlilik Politikas\u0131",
      toc: [['toplanan', 'Hangi verileri topluyoruz'], ['neden', 'Neden topluyoruz'], ['paylasim', 'Kimlerle paylaşıyoruz'], ['guvenlik', 'Güvenlik'], ['saklama', 'Ne kadar saklıyoruz'], ['haklar', 'Haklarınız'], ['degisiklik', 'Değişiklikler']]
    }, /*#__PURE__*/React.createElement(LegalSection, {
      id: "toplanan",
      title: "Hangi verileri topluyoruz"
    }, /*#__PURE__*/React.createElement("p", null, "\u0130leti\u015Fim formunu doldurdu\u011Funuzda payla\u015Ft\u0131\u011F\u0131n\u0131z bilgileri ve siteyi ziyaretinizde otomatik olu\u015Fan teknik verileri topluyoruz. Formda talep edilmeyen hi\xE7bir bilgiyi payla\u015Fman\u0131z gerekmez.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "neden",
      title: "Neden topluyoruz"
    }, /*#__PURE__*/React.createElement("p", null, "Talebinize d\xF6n\xFC\u015F yapabilmek, demo s\xFCrecini y\xFCr\xFCtebilmek ve sitenin hangi b\xF6l\xFCmlerinin kullan\u0131ld\u0131\u011F\u0131n\u0131 anlayarak iyile\u015Ftirme yapabilmek i\xE7in.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "paylasim",
      title: "Kimlerle payla\u015F\u0131yoruz"
    }, /*#__PURE__*/React.createElement("p", null, "Ki\u015Fisel verilerinizi satm\u0131yor, pazarlama amac\u0131yla \xFC\xE7\xFCnc\xFC taraflara devretmiyoruz. Yaln\u0131zca hizmet ald\u0131\u011F\u0131m\u0131z altyap\u0131 sa\u011Flay\u0131c\u0131lar\u0131 (site bar\u0131nd\u0131rma, form y\xF6netimi, analitik) verilerinize teknik olarak eri\u015Febilir ve bunlar s\xF6zle\u015Fmeyle veri i\u015Fleyen s\u0131fat\u0131yla ba\u011Fl\u0131d\u0131r.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "guvenlik",
      title: "G\xFCvenlik"
    }, /*#__PURE__*/React.createElement("p", null, "Site trafi\u011Fi \u015Fifreli ba\u011Flant\u0131 (HTTPS) \xFCzerinden y\xFCr\xFCt\xFCl\xFCr. Verilerinize eri\u015Fim, yetkilendirilmi\u015F \xE7al\u0131\u015Fanlarla s\u0131n\u0131rl\u0131d\u0131r.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "saklama",
      title: "Ne kadar sakl\u0131yoruz"
    }, /*#__PURE__*/React.createElement("p", null, "\u0130leti\u015Fim talepleri 1 y\u0131l saklan\u0131r. Bu s\xFCrenin sonunda silinir veya anonimle\u015Ftirilir.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "haklar",
      title: "Haklar\u0131n\u0131z"
    }, /*#__PURE__*/React.createElement("p", null, "Verilerinize eri\u015Fme, d\xFCzeltilmesini veya silinmesini talep etme hakk\u0131n\u0131z vard\u0131r. Talepleriniz i\xE7in info@tideon.com.tr adresine yazabilirsiniz.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "degisiklik",
      title: "De\u011Fi\u015Fiklikler"
    }, /*#__PURE__*/React.createElement("p", null, "Bu politikada de\u011Fi\u015Fiklik yapmam\u0131z h\xE2linde g\xFCncel metin bu sayfada yay\u0131mlan\u0131r."))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
