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
    }), /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "\u015Eirket",
      title: "Hakk\u0131m\u0131zda",
      lead: "Tideon, T\xFCrkiye\u2019deki \xE7ok t\xFCzel ki\u015Filikli gruplar\u0131n hazine i\u015Fini y\xFCr\xFCtmek i\xE7in kurulmu\u015F bir platform. Elektronik tabloyla y\xFCr\xFCt\xFClen nakit y\xF6netiminin nerede hata verdi\u011Fini bilerek yaz\u0131ld\u0131: eksik veri, ge\xE7 bilgi ve kayna\u011F\u0131 belirsiz rakam."
    }), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Neden"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Neden CFO\u2019nun Tideon\u2019a ihtiyac\u0131 var?"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bir grubun nakit tablosu genelde birden \xE7ok dosyada, birden \xE7ok ki\u015Fide duruyor. Sabah bak\u0131lan rakam\u0131n hangi hesaplar\u0131 i\xE7erdi\u011Fi, hangi varsay\u0131mla hesapland\u0131\u011F\u0131 belirsiz kal\u0131yor. Hata b\xFCy\xFCk tutarlarda ortaya \xE7\u0131k\u0131yor ve ge\xE7 ortaya \xE7\u0131k\u0131yor."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tideon bu belirsizli\u011Fi kapatmak i\xE7in yaz\u0131ld\u0131. Her tutar nereden geldi\u011Fini, hangi hesaplar\u0131 i\xE7erdi\u011Fini ve hangi verinin eksik oldu\u011Funu yan\u0131nda ta\u015F\u0131yor. Okunamayan veri s\u0131f\u0131r say\u0131lm\u0131yor; hesap toplamdan \xE7\u0131kar\u0131l\u0131yor ve gerek\xE7esi yaz\u0131l\u0131yor.")), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Nas\u0131l \xE7al\u0131\u015F\u0131yoruz"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\xC7al\u0131\u015Fma bi\xE7imimiz"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Hazine tarafını bilen ekip', 'Ürünü, bu işi yıllarca yapmış kişilerle birlikte tasarlıyoruz.'], ['Sahada doğrulama', 'Her ekran gerçek bir grup yapısıyla test edilmeden yayına girmiyor.'], ['Vaat etmeden önce yapmak', 'Yol haritasında olan bir yetenek satış konuşmasında “var” diye anlatılmıyor.'], ['Türkiye’ye özel', 'TDHP, çek-senet, teminat mektubu ve BSMV gibi kalemler sonradan eklenmiş değil.']]
    })))), /*#__PURE__*/React.createElement("div", {
      className: "media-band"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hakkimizda-band.png",
      alt: "\u0130stanbul Finans Merkezi"
    })), /*#__PURE__*/React.createElement(PageCta, {
      title: "\xDCr\xFCn\xFC kendi yap\u0131n\u0131zla g\xF6r\xFCn",
      lead: "45 dakikal\u0131k g\xF6r\xFC\u015Fmede haz\u0131r sunum yerine \xFCr\xFCn\xFCn kendisini g\xF6steriyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
