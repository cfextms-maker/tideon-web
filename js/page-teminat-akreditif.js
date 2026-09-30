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
    }, "\xC7\xF6z\xFCmler"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Teminat ve akreditif"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Verdi\u011Finiz teminat mektuplar\u0131n\u0131, bloke ettikleri limiti ve ne zaman iade alaca\u011F\u0131n\u0131z\u0131 tek ekranda g\xF6r\xFCn. Vadesi dolmu\u015F ama iade al\u0131nmam\u0131\u015F her mektup, kullanamad\u0131\u011F\u0131n\u0131z kredi kapasitesidir."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Portf\xF6y"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Kime, ne kadar, ne zamana kadar"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Verdi\u011Finiz t\xFCm teminat mektuplar\u0131 lehtar, tutar, vade ve banka baz\u0131nda listelenir. Kesin teminat, avans teminat\u0131, ge\xE7ici teminat \u2014 t\xFCr ayr\u0131m\u0131 korunur."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "S\xFCresiz mektuplar ayr\u0131 izlenir: vadesi olmayan bir mektup zamanla azalmaz, iade al\u0131nana kadar limitinizi kullan\u0131r.")), /*#__PURE__*/React.createElement("div", {
      className: "frag-grid"
    }, /*#__PURE__*/React.createElement(GuaranteeExposure, null), /*#__PURE__*/React.createElement(GuaranteeMaturity, null)))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limit etkisi"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Vadesi doldu, limitiniz h\xE2l\xE2 dolu"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bir teminat mektubunun vadesi doldu\u011Funda limitiniz serbest kalmaz. As\u0131l n\xFCsha bankaya iade edilene kadar mektup y\xFCr\xFCrl\xFCkte say\u0131l\u0131r ve gayrinakdi limitinizi kullanmaya devam eder."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "T\xFCrkiye\u2019de bu yayg\u0131n bir sorundur: lehtar mektubu iade etmez, kimse takip etmez, limit y\u0131llarca bloke kal\u0131r.")), /*#__PURE__*/React.createElement(OverdueLetters, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Komisyon"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\xD6dedi\u011Finiz komisyonun kar\u015F\u0131l\u0131\u011F\u0131n\u0131 al\u0131yor musunuz"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Teminat mektubu komisyonu genellikle \xFC\xE7 ayda bir pe\u015Fin tahsil edilir ve mektup y\xFCr\xFCrl\xFCkte kald\u0131\u011F\u0131 s\xFCrece tekrarlar. \u0130ade al\u0131nmam\u0131\u015F bir mektup i\xE7in komisyon \xF6demeye devam edersiniz."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Gelecek komisyon \xF6demeleri nakit ak\u0131\u015F tahminine kendili\u011Finden girer \u2014 s\xFCresiz bir mektupta bu, ufkun sonuna kadar tekrar eden bir gider demektir.")), /*#__PURE__*/React.createElement(CommissionSchedule, null))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Tazmin"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Tazmin bir teminat de\u011Fil, bir bor\xE7tur"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bir mektup tazmin edildi\u011Finde banka lehtara \xF6der ve siz bankaya bor\xE7lan\u0131rs\u0131n\u0131z. O andan itibaren elinizde bir teminat taahh\xFCd\xFC de\u011Fil, faize tabi bir kredi vard\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tideon bunu b\xF6yle ele al\u0131r: tazmin edilen mektup gayrinakdi limitten d\xFC\u015Fer, kar\u015F\u0131l\u0131\u011F\u0131nda nakdi bir bor\xE7 do\u011Far ve nakit ak\u0131\u015F tahminine girer.")), /*#__PURE__*/React.createElement(IndemnityFlow, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Akreditif"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Akreditif, teminat mektubundan farkl\u0131d\u0131r"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Teminat mektubu normal seyrinde hi\xE7 \xF6denmez \u2014 s\xFCre sonunda iade al\u0131n\u0131r, tazmin bir istisnad\u0131r. Akreditif ise bir \xF6deme arac\u0131d\u0131r: vesaik uygun geldi\u011Finde mutlaka \xF6denir."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bu y\xFCzden akreditif nakit ak\u0131\u015F tahminine girer, teminat mektubu girmez.")), /*#__PURE__*/React.createElement(LcTimeline, null), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['İki ayrı vade', 'Vesaik ibraz vadesi ile ödeme vadesi ayrı takip edilir; vadeli akreditifte arada üç ila altı ay olabilir.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Vesaik uygunsuzluğu', 'Rezerv çıkması akreditifi bitirmez; düzeltilip yeniden ibraz edilebilir.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section section-deep"
    }, /*#__PURE__*/React.createElement("div", {
      className: "facets",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "f3x"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-4",
      style: {
        maxWidth: '62ch',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Neden fark eder"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Bilan\xE7o d\u0131\u015F\u0131, ama nakit de\u011Fil"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "Teminat mektuplar\u0131 bilan\xE7oda g\xF6r\xFCnmez ama kredi kapasitenizi t\xFCketir. Bir banka size 100 milyonluk limit verdi\u011Finde, 40 milyonu iade al\u0131nmam\u0131\u015F mektuplarda duruyorsa ger\xE7ek kapasiteniz 60 milyondur."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "Tideon bu ayr\u0131m\u0131 her ekranda korur: gayrinakdi limit likidite tamponuna girmez, \xE7\xFCnk\xFC nakit yaratmaz."))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi mektup portf\xF6y\xFCn\xFCzle bloke limiti \xE7\u0131karal\u0131m",
      lead: "G\xF6r\xFC\u015Fmede iade al\u0131nmam\u0131\u015F mektuplar\u0131n limitinizde ne kadar yer tuttu\u011Funu birlikte hesapl\u0131yoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
