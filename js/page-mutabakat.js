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
      className: "wrap stack-5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Mutabakat ve muhasebe"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "D\xF6nem sonu \xFC\xE7 g\xFCne de\u011Fil, bir sabaha s\u0131\u011Fs\u0131n"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Banka ile ERP aras\u0131ndaki fark\u0131 ay\u0131n son g\xFCn\xFC de\u011Fil, her sabah g\xF6r\xFCrs\xFCn\xFCz. Fark hangi kalemden geliyor, kim bakacak, ne kadar\u0131 ger\xE7ekten sorun \u2014 hepsi tek ekranda."))), /*#__PURE__*/React.createElement("section", {
      className: "section",
      style: {
        paddingTop: 'var(--sp-10)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-4"
    }, /*#__PURE__*/React.createElement(BalanceBridge, null), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "K\xF6pr\xFC her sabah kendini kapat\u0131r: fark, mutab\u0131k olmayan kalemlerin toplam\u0131na e\u015Fit olmak zorundad\u0131r. E\u015Fit de\u011Filse eksik veri vard\u0131r ve bunu size s\xF6yler."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claims-num"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Kolay olan\u0131 sistem kapat\u0131r, size karar kal\u0131r"), /*#__PURE__*/React.createElement("p", null, "Tutar\u0131 ve tarihi tutan kay\u0131tlar kendili\u011Finden e\u015Fle\u015Fir. G\xFCvensiz bir e\u015Fle\u015Fme \xF6neri olarak kal\u0131r \u2014 bu sayede zaman\u0131n\u0131z\u0131 ger\xE7ekten bak\u0131lmas\u0131 gereken kalemlere ay\u0131r\u0131rs\u0131n\u0131z.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "Kur fark\u0131 sizi yan\u0131ltmaz"), /*#__PURE__*/React.createElement("p", null, "Yabanc\u0131 para hesapta fark\u0131n \xE7o\u011Fu kur kaynakl\u0131d\u0131r. Kur fark\u0131 ayr\u0131 hesaplan\u0131r; ger\xE7ek sorun ka\xE7 lira, onu net g\xF6r\xFCrs\xFCn\xFCz.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Rakam\u0131n arkas\u0131nda kim var, belli"), /*#__PURE__*/React.createElement("p", null, "Her e\u015Fle\u015Fmenin y\xF6ntemi, g\xFCveni ve kim onaylad\u0131\u011F\u0131 kay\u0131tta durur. Denetim geldi\u011Finde geriye d\xF6n\xFCp arama yapmazs\u0131n\u0131z."))))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "strip-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '52ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "E\u015Fle\u015Fme kuyru\u011Fu"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\xD6nce \xF6neriler, sonra karar")), /*#__PURE__*/React.createElement("p", {
      className: "sm muted",
      style: {
        maxWidth: '38ch',
        margin: 0
      }
    }, "Y\xFCksek g\xFCvenli \xF6neriler \xF6n se\xE7ili gelir. Toplu onaylay\u0131n, \u015F\xFCphelendi\u011Finiz sat\u0131r\u0131 ay\u0131r\u0131n, tekrarlayan bir durum varsa kural haline getirin.")), /*#__PURE__*/React.createElement(MatchTable, null))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "strip-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '52ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Fark listesi"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Fark iki y\xF6nl\xFCd\xFCr, ikisi de g\xF6r\xFCn\xFCr")), /*#__PURE__*/React.createElement("p", {
      className: "sm muted",
      style: {
        maxWidth: '38ch',
        margin: 0
      }
    }, "Bankada olup kayda ge\xE7memi\u015F masrafla, kay\u0131tta olup bankaya inmemi\u015F tahsilat ayn\u0131 \u015Fey de\u011Fildir. \u0130kisi ayr\u0131 listede, ya\u015Fland\u0131rmas\u0131yla durur.")), /*#__PURE__*/React.createElement(UnmatchedPair, null), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "E\u015Fle\u015Fmeyen ham kar\u015F\u0131 taraf ad\u0131 benzeyen bir firmaya ba\u011Flanmaz \u2014 yanl\u0131\u015F firmaya yaz\u0131lm\u0131\u015F bir alacak sessizce yanl\u0131\u015F kal\u0131r, biz onu kuyrukta tutar\u0131z."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '62ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Muhasebe taraf\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Mali m\xFC\u015Favirinizle ayn\u0131 bilan\xE7oyu g\xF6r\xFCn"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "TDHP hesaplar\u0131 mali tablo kalemlerine e\u015Flenir ve e\u015Fleme ger\xE7ek bir mizan dosyas\u0131yla test edilir. \xDCretti\u011Fimiz bilan\xE7o ile mali m\xFC\u015Favirin \xE7\u0131kard\u0131\u011F\u0131 bilan\xE7o aras\u0131ndaki fark s\u0131f\u0131r olmal\u0131d\u0131r \u2014 olmad\u0131\u011F\u0131 s\xFCrece oran hesaplamaya ba\u015Flamay\u0131z.")), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "7/A ve 7/B"), "Maliyet sisteminiz korunur; 62 ve 63 bo\u015Fsa yans\u0131tma yap\u0131lmadan doldurulmaz"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "D\xF6nem i\xE7i mizan"), "Aktif ve pasif e\u015Fit de\u011Filse bu hata de\u011Fil, net k\xE2r fark\u0131d\u0131r"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Net KDV"), "\u0130ndirilecek ve hesaplanan netle\u015Fir; devreden mi \xF6denecek mi net g\xF6r\xFCn\xFCr")))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Ekstre b\xFCt\xFCnl\xFC\u011F\xFC"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Eksik ekstreyi ay sonunda de\u011Fil, o g\xFCn \xF6\u011Frenin"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A\xE7\u0131l\u0131\u015F bakiyesi, g\xFCn i\xE7i hareket ve kapan\u0131\u015F birbirini do\u011Frulam\u0131yorsa veri eksiktir. Hangi hesapta, hangi g\xFCn, ne t\xFCr bir eksik oldu\u011Fu ayr\u0131 ayr\u0131 raporlan\u0131r.")), /*#__PURE__*/React.createElement(BalanceContinuity, null)), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Mutabakat oranı şişirilmez', 'Eşleşmemiş kayıt toplama girmez; “%98 mutabık” dediğimizde gerçekten öyledir.'], ['Eşleme teyit edilmeden oran açılmaz', 'Cari oran, DSO ve Net Borç/FAVÖK, eşleme doğrulanana kadar kapalı kalır.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Karşı taraf tahmin edilmez', 'Eşleşmeyen ad boş kalır; benzeyen bir firmaya bağlanmaz.'], ['ERP kaydınıza dokunulmaz', 'Mutabakat sonucu dosya olarak verilir; kayıt üzerine yazılmaz.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Bir d\xF6nemi bizimle kapat\u0131n",
      lead: "Ger\xE7ek bir mizan ve ekstre dosyan\u0131zla e\u015Flemeyi kurup fark\u0131 birlikte s\u0131f\u0131ra indiriyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
