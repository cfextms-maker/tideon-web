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
    }), /*#__PURE__*/React.createElement("section", {
      className: "hero hero-sub",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "facets",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "f1x"
    }), /*#__PURE__*/React.createElement("i", {
      className: "f3x"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap hero-split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "\xC7\xF6z\xFCmler"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "ERP ve muhasebe entegrasyonlar\u0131"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Cari hareket, faturalar, \xF6deme plan\u0131, yevmiye fi\u015Fleri ve mizan ERP\u2019den okunur. Nakit tahmini bu kay\u0131tlarla beslenir, mali tablolar mizandan t\xFCretilir, mutabakat TDHP hesap plan\u0131na g\xF6re yap\u0131l\u0131r. E\u015Flenmemi\u015F kay\u0131t hi\xE7bir toplama girmez.")), /*#__PURE__*/React.createElement(ErpFlow, null))), /*#__PURE__*/React.createElement(ErpStrip, {
      showCta: false
    }), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head",
      style: {
        maxWidth: '58ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "ERP ve muhasebe"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Ba\u011Flant\u0131s\u0131 haz\u0131r ERP sistemleri"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Her sistemden ayn\u0131 k\xFCme okunur: cari hareket, fatura, yevmiye fi\u015Fi ve mizan. Okuma tek y\xF6nl\xFCd\xFCr; Tideon ERP kay\u0131tlar\u0131n\u0131 de\u011Fi\u015Ftirmez. Mali tablolar mizandan t\xFCretilir, e\u015Flenmemi\u015F kay\u0131t toplamlara girmez. Aktar\u0131m kanal\u0131 (REST servisi, dosya ya da salt okunur veritaban\u0131) kurulumda belirlenir.")), /*#__PURE__*/React.createElement(ErpCards, null), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "REST servisi"), "Cari, fatura, yevmiye ve mizan okumas\u0131"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Salt okunur veritaban\u0131"), "REST servisi olmayan kurulumlar i\xE7in"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Dosya aktar\u0131m\u0131"), "Zamanlanm\u0131\u015F g\xF6rev ya da SFTP")))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Devreye alma"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "D\xF6rt ad\u0131mda ba\u011Flant\u0131")), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Bağlantı', 'API, dosya klasörü ya da salt okunur veritabanı erişimi kurulur.'], ['2', 'Hesap planı eşleme', 'TDHP kodları banka hesaplarıyla eşlenir.'], ['3', 'Doğrulama', 'Eşlenmemiş kayıtlar ayrı listede tutulur, toplamlara girmez.'], ['4', 'İzleme', 'Aktarım gecikirse etkilenen tahmin ve mutabakat alanları işaretlenir.']]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Mutabakat"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Banka ekstresi ile muhasebe kayd\u0131"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Hesap bazında eşleştirme', 'Her banka hesabı bir TDHP alt hesabıyla eşlenir.'], ['Fark listesi', 'Eşleşmeyen kayıtlar tutar ve tarih farkıyla listelenir.'], ['Kur farkı ayrımı', 'Kur kaynaklı farklar ayrı gösterilir, gerçek farkla karıştırılmaz.'], ['Kapatma kaydı', 'Onaylanan mutabakat için muhasebe fişi dosyası üretimi planlanan kapsamdadır.']]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "S\u0131n\u0131rlar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Yapmad\u0131\u011F\u0131m\u0131z \u015Feyler"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['ERP kaydı değiştirilmez', 'Tideon ERP üzerinde yazma işlemi yapmaz; çıktı dosyayla verilir.'], ['Eksik veri tamamlanmaz', 'Okunamayan kayıt tahmin edilmez, eksik olarak işaretlenir.'], ['Hesap planı varsayılmaz', 'Eşleme kurulmadan hiçbir hesap mutabakata dahil edilmez.'], ['Tek yönlü aktarım', 'Çift yönlü senkronizasyon kapsam dışıdır.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi ERP\u2019nizle kurulumu birlikte planlayal\u0131m",
      lead: "G\xF6r\xFC\u015Fmede hangi mod\xFCllerin haz\u0131r, hangilerinin devreye alma gerektirdi\u011Fini a\xE7\u0131k\xE7a s\xF6yl\xFCyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
