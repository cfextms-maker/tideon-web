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
    }, "Riskinizi bug\xFCn \xF6l\xE7\xFCn, yar\u0131n \xF6\u011Frenmeyin"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Kur, faiz, kar\u015F\u0131 taraf ve s\xF6zle\u015Fme riski tek ekranda. Bir e\u015Fik a\u015F\u0131ld\u0131\u011F\u0131nda sabah raporunu beklemezsiniz \u2014 ekran size s\xF6yler.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "S\xF6zle\u015Fme \u015Fartlar\u0131 (covenant)",
      note: "4 s\xF6zle\u015Fme \xB7 9 \u015Fart",
      flush: true
    }, /*#__PURE__*/React.createElement(CovenantTable, null)))), /*#__PURE__*/React.createElement("section", {
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
    }, "Kur riski"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "A\xE7\u0131k pozisyonunuz ne kadar, ne kadar\u0131 korunuyor"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Para birimi baz\u0131nda varl\u0131k ve y\xFCk\xFCml\xFCl\xFC\u011F\xFCn\xFCz, hedge etti\u011Finiz k\u0131s\u0131m ve geriye kalan net a\xE7\u0131k pozisyon ayn\u0131 ekranda."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "T\xFCrev s\xF6zle\u015Fmeleriniz \u2014 forward, swap, opsiyon \u2014 vade ve kar\u015F\u0131 taraf\u0131yla listelenir. Bug\xFCn korunan bir pozisyonun \xFC\xE7 ay sonra a\xE7\u0131k kalaca\u011F\u0131n\u0131 vade merdiveninde \xF6nceden g\xF6r\xFCrs\xFCn\xFCz.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Para birimi baz\u0131nda a\xE7\u0131k pozisyon",
      note: "varl\u0131k \xB7 y\xFCk\xFCml\xFCl\xFCk \xB7 net \xB7 milyon \u20BA"
    }, /*#__PURE__*/React.createElement(FxDiverging, null)), /*#__PURE__*/React.createElement("div", {
      className: "claims-num"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Anl\u0131k net pozisyon"), /*#__PURE__*/React.createElement("p", null, "Para birimi baz\u0131nda, tek bak\u0131\u015Fta.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "Hedge kapsam\u0131"), /*#__PURE__*/React.createElement("p", null, "Ne kadar\u0131 korunuyor, hangi enstr\xFCmanla.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Koruman\u0131n vadesi"), /*#__PURE__*/React.createElement("p", null, "Hedge bitti\u011Finde a\xE7\u0131k pozisyonun ne olaca\u011F\u0131."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limitler"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Kendi kurallar\u0131n\u0131z\u0131 sistem takip etsin"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Banka yo\u011Funla\u015Fmas\u0131, kar\u015F\u0131 taraf riski, a\xE7\u0131k pozisyon, minimum nakit tamponu \u2014 hazine politikan\u0131zdaki e\u015Fikleri tan\u0131mlay\u0131n, \xF6l\xE7\xFCm\xFC Tideon yapar."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bug\xFCn a\u015F\u0131lm\u0131\u015F bir e\u015Fik ile \xF6n\xFCm\xFCzdeki hafta a\u015F\u0131lacak bir e\u015Fik ayn\u0131 g\xF6r\xFCnmez. Birine bug\xFCn m\xFCdahale edersiniz, di\u011Ferine planlama yapars\u0131n\u0131z.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Banka yo\u011Funla\u015Fmas\u0131",
      note: "e\u015Fik %40 \xB7 tek banka"
    }, /*#__PURE__*/React.createElement(Concentration, null))), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Politika e\u015Fikleri"), "Kurumunuzun kendi s\u0131n\u0131rlar\u0131, t\xFCzel ki\u015Filik baz\u0131nda"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Erken uyar\u0131"), "Projeksiyonda a\u015F\u0131lacak e\u015Fikler \xF6nceden i\u015Faretlenir"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Onayl\u0131 istisna"), "Bilin\xE7li a\u015F\u0131mlar kayda ge\xE7er, ihlal listesini kirletmez")))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "S\xF6zle\u015Fme \u015Fartlar\u0131 (covenant)"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Bankaya verdi\u011Finiz s\xF6z\xFC tutuyor musunuz"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Kredi s\xF6zle\u015Fmelerinizdeki finansal taahh\xFCtler \u2014 Net Bor\xE7/FAV\xD6K, faiz kar\u015F\u0131lama, cari oran \u2014 d\xF6nem d\xF6nem \xF6l\xE7\xFCl\xFCr ve e\u015Fi\u011Fe kalan mesafe g\xF6r\xFCn\xFCr."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "E\u015Fi\u011Fe yakla\u015Fan bir \u015Fart, ihlal edilmi\u015F bir \u015Farttan \xF6nce fark edilir. Bankayla konu\u015Faca\u011F\u0131n\u0131z zaman, konu\u015Fmak zorunda kalmadan \xF6nce.")), /*#__PURE__*/React.createElement(CovenantDetail, {
      parts: ['hd', 'hist', 'foot']
    })), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "E\u015Fi\u011Fe mesafe"), "Her \u015Fart i\xE7in ne kadar pay\u0131n\u0131z kald\u0131\u011F\u0131"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "\xD6l\xE7\xFCm takvimi"), "Hangi \u015Fart ne zaman test edilecek"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "S\xF6zle\u015Fme baz\u0131nda g\xF6r\xFCn\xFCm"), "Hangi kredi hangi taahh\xFCtleri getiriyor")))), /*#__PURE__*/React.createElement("section", {
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
    }, "Finansal oranlar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Ayn\u0131 oranlar, ayn\u0131 tan\u0131m, her ay"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Likidite, bor\xE7luluk, k\xE2rl\u0131l\u0131k ve nakit d\xF6n\xFC\u015F\xFCm s\xFCresi oranlar\u0131 hesap plan\u0131n\u0131zdan t\xFCretilir. Kimin hangi form\xFCl\xFC kulland\u0131\u011F\u0131 tart\u0131\u015Fmas\u0131 biter."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Nakit d\xF6n\xFC\u015F\xFCm s\xFCresini olu\u015Fturan \xFC\xE7 bile\u015Fen \u2014 alacak, stok ve bor\xE7 devir h\u0131z\u0131 \u2014 ayr\u0131 ayr\u0131 izlenir. S\xFCre uzuyorsa hangisinden uzad\u0131\u011F\u0131n\u0131 g\xF6r\xFCrs\xFCn\xFCz.")), /*#__PURE__*/React.createElement(RatioBand, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-4",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Neden fark eder"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\xD6l\xE7\xFClmeyen risk, olmayan risk de\u011Fildir"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bir s\xF6zle\u015Fme \u015Fart\u0131 test edilemiyorsa Tideon \u201Cuygun\u201D demez, \u201Ctest edilemedi\u201D der. Test edilmemi\u015F bir taahh\xFCt, ihlal edilmi\u015F olandan risklidir \u2014 \xE7\xFCnk\xFC kimse bakm\u0131yor demektir."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Ayn\u0131 ilke her rakam i\xE7in ge\xE7erli: hesaplanamayan bir de\u011Fer bo\u015F kal\u0131r ve nedenini s\xF6yler.")))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi politika e\u015Fiklerinizi birlikte tan\u0131mlayal\u0131m",
      lead: "G\xF6r\xFC\u015Fmede s\xF6zle\u015Fme \u015Fartlar\u0131n\u0131z\u0131 ve limitlerinizi sisteme kurup e\u015Fi\u011Fe mesafeyi g\xF6r\xFCyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
