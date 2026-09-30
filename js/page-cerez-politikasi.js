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
      title: "\xC7erez Politikas\u0131",
      toc: [['nedir', 'Çerez nedir'], ['kullandigimiz', 'Kullandığımız çerezler'], ['onay', 'Onayınız'], ['degistirme', 'Tercihinizi değiştirme'], ['saklama', 'Saklama süresi']]
    }, /*#__PURE__*/React.createElement(LegalSection, {
      id: "nedir",
      title: "\xC7erez nedir"
    }, /*#__PURE__*/React.createElement("p", null, "\xC7erezler, ziyaret etti\u011Finiz siteler taraf\u0131ndan taray\u0131c\u0131n\u0131za kaydedilen k\xFC\xE7\xFCk metin dosyalar\u0131d\u0131r. Sitenin \xE7al\u0131\u015Fmas\u0131n\u0131 sa\u011Flar ve kullan\u0131m\u0131n \xF6l\xE7\xFClmesine yard\u0131mc\u0131 olur.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "kullandigimiz",
      title: "Kulland\u0131\u011F\u0131m\u0131z \xE7erezler"
    }, /*#__PURE__*/React.createElement("h3", null, "Zorunlu \xE7erezler"), /*#__PURE__*/React.createElement("p", null, "Sitenin temel i\u015Flevleri ve \xE7erez tercihinizin hat\u0131rlanmas\u0131 i\xE7in gereklidir. Bu \xE7erezler devre d\u0131\u015F\u0131 b\u0131rak\u0131lamaz."), /*#__PURE__*/React.createElement("h3", null, "Analitik \xE7erezler"), /*#__PURE__*/React.createElement("p", null, "Hangi sayfalar\u0131n ne kadar g\xF6r\xFCnt\xFClendi\u011Fini, ziyaret\xE7ilerin siteyi nas\u0131l kulland\u0131\u011F\u0131n\u0131 anlamak i\xE7in Google Analytics taraf\u0131ndan yerle\u015Ftirilir. Bu \xE7erezler yaln\u0131zca onay\u0131n\u0131zla \xE7al\u0131\u015F\u0131r ve ki\u015Fisel kimli\u011Finizi tespit etmek i\xE7in kullan\u0131lmaz."), /*#__PURE__*/React.createElement("p", null, "Pazarlama veya reklam \xE7erezi kullanm\u0131yoruz.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "onay",
      title: "Onay\u0131n\u0131z"
    }, /*#__PURE__*/React.createElement("p", null, "Siteye ilk giri\u015Finizde analitik \xE7erezler i\xE7in onay\u0131n\u0131z\u0131 isteriz. Onay vermeden de siteyi kullanabilirsiniz; bu durumda yaln\u0131zca zorunlu \xE7erezler \xE7al\u0131\u015F\u0131r.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "degistirme",
      title: "Tercihinizi de\u011Fi\u015Ftirme"
    }, /*#__PURE__*/React.createElement("p", null, "\xC7erez tercihinizi sayfa alt\u0131ndaki ba\u011Flant\u0131 \xFCzerinden diledi\u011Finiz zaman de\u011Fi\u015Ftirebilirsiniz. Taray\u0131c\u0131 ayarlar\u0131n\u0131zdan da \xE7erezleri silebilir veya engelleyebilirsiniz.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "saklama",
      title: "Saklama s\xFCresi"
    }, /*#__PURE__*/React.createElement("p", null, "Zorunlu \xE7erezler oturum s\xFCresince veya tercih kayd\u0131 i\xE7in 1 y\u0131l saklan\u0131r. Analitik \xE7erezlerin s\xFCresi 1 y\u0131ld\u0131r."))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
