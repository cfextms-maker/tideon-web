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
    }, "Grup likit g\xF6r\xFCn\xFCyor, ama hangi \u015Firket s\u0131k\u0131\u015F\u0131k"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Konsolide toplam bir holdingin ger\xE7e\u011Fini anlatmaz. Nakit \u015Firketler aras\u0131nda dola\u015F\u0131r, biri di\u011Ferine bor\xE7ludur ve tampon \u015Firket baz\u0131nda tutulur. Tideon grubu tek defterde, \u015Firketleri kendi kimlikleriyle g\xF6sterir."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Konsolide g\xF6r\xFCn\xFCm"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Grup toplam\u0131ndan tek hesaba kadar"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Ayn\u0131 tan\u0131m her seviyede ge\xE7erli: konsolide g\xF6r\xFCn\xFCmden t\xFCzel ki\u015Fili\u011Fe, oradan tek bir banka hesab\u0131na ayn\u0131 kuralla inilir. Grup likit g\xF6r\xFCn\xFCrken bir \u015Firketin s\u0131k\u0131\u015F\u0131k olmas\u0131 art\u0131k g\xF6zden ka\xE7maz \u2014 tampon \u015Firket baz\u0131nda ayr\u0131 g\xF6sterilir."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Yetki t\xFCzel ki\u015Filik baz\u0131nda verilir. Holding CFO\u2019su grubun tamam\u0131n\u0131 g\xF6r\xFCr, i\u015Ftirak m\xFCd\xFCr\xFC kendi \u015Firketini; kimin neyi g\xF6rebildi\u011Fi rapor de\u011Fil, eri\u015Fim kural\u0131d\u0131r.")), /*#__PURE__*/React.createElement(GroupEntities, null)))), /*#__PURE__*/React.createElement("section", {
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
    }, "Grup i\xE7i finansman"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Kim kime ne kadar bor\xE7lu"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "\u015Eirketler aras\u0131 bor\xE7 ve alacak matris g\xF6r\xFCn\xFCmde durur. Kar\u015F\u0131l\u0131kl\u0131 bor\xE7lar\u0131n netle\u015Ftirilmesiyle ka\xE7 i\u015Flemin kapanaca\u011F\u0131 ve ne kadar tutar\u0131n hi\xE7 hareket etmesi gerekmedi\u011Fi hesaplan\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "S\xF6zle\u015Fmesel kur ayr\u0131 tutulur: grup i\xE7i i\u015Flemlerde piyasa kuru kullan\u0131lmaz, yoksa iki \u015Firketin mutabakat\u0131 her g\xFCn farkl\u0131 \xE7\u0131kar.")), /*#__PURE__*/React.createElement(IntercoMatrix, null))), /*#__PURE__*/React.createElement("section", {
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
    }, "Havuzlama ve sweep"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Da\u011F\u0131n\u0131k yap\u0131 ile havuzlanm\u0131\u015F yap\u0131y\u0131 yan yana koyun"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bug\xFCnk\xFC kurulum ile havuzlanm\u0131\u015F kurulum ayn\u0131 ekranda kar\u015F\u0131la\u015Ft\u0131r\u0131l\u0131r: kazan\u0131lacak faiz, azalacak faiz gideri. Fiziksel ve nominal havuzlama ayr\u0131 ele al\u0131n\u0131r.")), /*#__PURE__*/React.createElement(PoolCompare, null), /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h3"
    }, "Sweep kurallar\u0131"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Hangi hesaptan hangisine, hangi e\u015Fikte, hedef bakiye ne \u2014 kural tan\u0131ml\u0131, \xF6l\xE7\xFCm otomatik. Sistem para hareket ettirmez; aktar\u0131m plan\u0131n\u0131 \xFCretir ve gerek\xE7esini kaydeder."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Havuzlaman\u0131n yaratt\u0131\u011F\u0131 grup i\xE7i alacak ve bor\xE7 ayr\u0131ca g\xF6sterilir. Bu kalemlerin vergi ve transfer fiyatland\u0131rmas\u0131 sonucu vard\u0131r; sessizce netle\u015Ftirilmez.")), /*#__PURE__*/React.createElement(SweepRules, null)))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi grup yap\u0131n\u0131zla kurulumu g\xF6r\xFCn",
      lead: "45 dakikal\u0131k g\xF6r\xFC\u015Fmede \u015Firket listenizle konsolide g\xF6r\xFCn\xFCm\xFC ve sweep kurgusunu birlikte \xE7\u0131kar\u0131yoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
