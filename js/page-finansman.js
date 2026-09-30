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
      className: "hero hero-sub hero-center",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "facets",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "f1x"
    }), /*#__PURE__*/React.createElement("i", {
      className: "f3x"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-5",
      style: {
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Platform"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Borcunuzun ger\xE7ek maliyetini g\xF6r\xFCn"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Kredi, mevduat, teminat mektubu ve akreditif tek portf\xF6yde. Faiz, BSMV ve komisyon ayr\u0131 kolonlarda \u2014 taksitin i\xE7inde sakl\u0131 kalmaz."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Kredi ve mevduat portf\xF6y\xFC"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "B\xFCt\xFCn borcunuz tek tabloda"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Her kredi kendi geri \xF6deme yap\u0131s\u0131yla durur: ann\xFCite, e\u015Fit anapara, bullet, \xF6demesiz d\xF6nem. \xD6deme plan\u0131 s\xF6zle\u015Fme ko\u015Fullar\u0131ndan \xFCretilir, elle tablo tutman\u0131za gerek kalmaz."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "De\u011Fi\u015Fken faizli kredilerde faiz yenileme tarihinden sonras\u0131 varsay\u0131mla hesaplan\u0131r \u2014 ve bu varsay\u0131m rakam\u0131n \xFCzerinde durur.")), /*#__PURE__*/React.createElement(LoanSchedule, null)), /*#__PURE__*/React.createElement(PfCard, {
      title: "Kredi portf\xF6y\xFC",
      note: "5 kredi \xB7 anapara ve faiz",
      flush: true
    }, /*#__PURE__*/React.createElement(LoanPortfolio, null)))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limitler"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Ne kadar bor\xE7lanabilece\u011Finizi tahmin etmeyin"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Nakdi ve gayrinakdi limitler ayr\u0131 izlenir. Kullan\u0131labilir limit, likidite tamponunun par\xE7as\u0131 oldu\u011Fu i\xE7in nakit pozisyonuyla ayn\u0131 ekranda anlam kazan\u0131r.")), /*#__PURE__*/React.createElement("div", {
      className: "claims-num"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Nakdi ve gayrinakdi ayr\u0131"), /*#__PURE__*/React.createElement("p", null, "Teminat mektubu limiti nakit kredi limitini yemez.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "E\u015Fi\u011Fe yak\u0131n limit \xF6nceden g\xF6r\xFCn\xFCr"), /*#__PURE__*/React.createElement("p", null, "Rotatif kredide kullan\u0131m oran\u0131 e\u015Fi\u011Fe yakla\u015F\u0131nca i\u015Faretlenir.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Likidite tamponu"), /*#__PURE__*/React.createElement("p", null, "Nakit art\u0131 kullan\u0131labilir limit; ikisi ayr\u0131 ayr\u0131 da okunur."))))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Teminat mektubu ve akreditif"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Y\u0131llarca bloke duran limiti bulun"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Vadesi dolan bir mektup limiti b\u0131rakmaz \u2014 as\u0131l n\xFCsha bankaya iade edilene kadar y\xFCr\xFCrl\xFCkte kal\u0131r. Bu fark \xE7o\u011Fu grupta milyonlarca liral\u0131k \xF6l\xFC limit demek."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tazmin talebi geldi\u011Finde ak\u0131\u015F ba\u015Ftan sona kay\u0131t alt\u0131nda y\xFCr\xFCr.")), /*#__PURE__*/React.createElement(GuaranteeLetters, null))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Grup i\xE7i finansman"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\u015Eirketler aras\u0131 borcu tek defterde tutun")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Yapı', 'Kapsam', 'Takip'],
      rows: [['Grup içi kredi', 'Şirketler arası borç–alacak, sözleşmesel kur', 'Vade, faiz tahakkuku ve netleştirme'], ['Havuzlama', 'Fiziksel ve nominal havuzlama', 'Faiz dağıtım tablosu'], ['Sweep', 'Hesap başına hedef bakiye', 'Boşta nakit ve hedeften sapma'], ['Mevduat', 'Vadeli ve vadesiz, stopaj dahil', 'Getiri ve vade takvimi']]
    }))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Portf\xF6y\xFCn\xFCz\xFC kendi kredi s\xF6zle\u015Fmelerinizle g\xF6r\xFCn",
      lead: "G\xF6r\xFC\u015Fmede bir kredinizin \xF6deme plan\u0131n\u0131 birlikte \xFCretiyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
