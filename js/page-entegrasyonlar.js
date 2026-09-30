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
    }, "Platform"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Entegrasyonlar"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Bankalar\u0131n\u0131z ve ERP\u2019niz ilk g\xFCnden ba\u011Fl\u0131 gelir. Veriyi elle ta\u015F\u0131may\u0131, dosya indirip y\xFCklemeyi ve tablolar\u0131 birle\u015Ftirmeyi b\u0131rak\u0131rs\u0131n\u0131z.")), /*#__PURE__*/React.createElement(ConnectFlow, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Haz\u0131r ba\u011Flant\u0131lar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Yirmiden fazla bankayla ba\u011Flant\u0131 haz\u0131r"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Her haz\u0131r ba\u011Flant\u0131da standart olarak gelen kalemler ile devreye alma gerektiren kalemler ayr\u0131. Hangi bankada hangi kalemin ne kadar s\xFCrede a\xE7\u0131ld\u0131\u011F\u0131n\u0131 g\xF6r\xFC\u015Fmede kalem kalem i\u015Faretliyoruz.")), /*#__PURE__*/React.createElement(BankWall, null), /*#__PURE__*/React.createElement(ScopeLists, null))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
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
    }, "Her sistemden ayn\u0131 k\xFCme okunur: cari hareket, fatura, yevmiye fi\u015Fi ve mizan. Okuma tek y\xF6nl\xFCd\xFCr; Tideon ERP kay\u0131tlar\u0131n\u0131 de\u011Fi\u015Ftirmez. Mali tablolar mizandan t\xFCretilir, e\u015Flenmemi\u015F kay\u0131t toplamlara girmez. Aktar\u0131m kanal\u0131 (REST servisi, dosya ya da salt okunur veritaban\u0131) kurulumda belirlenir.")), /*#__PURE__*/React.createElement(ErpCards, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Format referans\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Desteklenen dosya ve mesaj formatlar\u0131")), /*#__PURE__*/React.createElement(FormatTable, null), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Entegrasyon \xE7e\u015Fitleri"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "D\xF6rt farkl\u0131 entegrasyon yolu"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Açık bankacılık servisleri', 'REST · OAuth 2.0 · mTLS. Gün içi bakiye ve hareket, MT942 dahil.'], ['Dosya aktarımı', 'SFTP ya da zamanlanmış görev; gün sonu ekstresi ve toplu talimat.'], ['REST servisi (ERP)', 'Cari, fatura, yevmiye ve mizan okuması.'], ['Salt okunur veritabanı', 'REST servisi olmayan ERP kurulumları için.']]
    })), /*#__PURE__*/React.createElement(ErpFlow, null)))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi banka ve ERP listenizle kapsam\u0131 \xE7\u0131karal\u0131m",
      lead: "G\xF6r\xFC\u015Fmede hangi kalemin haz\u0131r, hangisinin devreye alma gerektirdi\u011Fini kalem kalem i\u015Faretliyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
