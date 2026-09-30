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
    }, "\xC7ek ve senet"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Elinizdeki ve verdi\u011Finiz \xE7eklerin vade da\u011F\u0131l\u0131m\u0131n\u0131, riskinizin nerede oldu\u011Funu ve k\u0131rd\u0131rma maliyetini tek ekranda g\xF6r\xFCn. Portf\xF6ydeki her \xE7ek likit de\u011Fildir \u2014 teminatta ve iskontoda olanlar kullan\u0131labilir nakde girmez.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "\u0130skonto sim\xFClat\xF6r\xFC",
      note: "3 \xE7ek se\xE7ili"
    }, /*#__PURE__*/React.createElement(DiscountSim, null)))), /*#__PURE__*/React.createElement("section", {
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
    }, "Portf\xF6y g\xF6r\xFCn\xFCm\xFC"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Ne ald\u0131n\u0131z, ne verdiniz, ne zaman")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid tr-grid-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Alacak"), /*#__PURE__*/React.createElement("h4", null, "Portf\xF6ydeki \xE7ek"), /*#__PURE__*/React.createElement("p", null, "Elinizdeki \xE7ekler, adet ve ortalama vadeyle. Tahsil edilen, tahsile verilen, ciro edilen ayr\u0131 izlenir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Bor\xE7"), /*#__PURE__*/React.createElement("h4", null, "Ke\u015Fide edilen \xE7ek"), /*#__PURE__*/React.createElement("p", null, "Verdi\u011Finiz \xE7ekler ve en yak\u0131n vade. \xD6deme g\xFCn\xFC tatile denk geliyorsa kayd\u0131r\u0131lm\u0131\u015F tarih ayr\u0131ca g\xF6sterilir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Likit de\u011Fil"), /*#__PURE__*/React.createElement("h4", null, "Teminatta ve iskontoda"), /*#__PURE__*/React.createElement("p", null, "Portf\xF6yde ama likit de\u011Fil \u2014 kullan\u0131labilir nakde girmez. \u0130skonto ettirilen bir \xE7ek bilan\xE7odan \xE7\u0131kmaz; kar\u015F\u0131l\u0131\u011F\u0131nda finansal bor\xE7 do\u011Far.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Net etki"), /*#__PURE__*/React.createElement("h4", null, "Yak\u0131n vadede net"), /*#__PURE__*/React.createElement("p", null, "Se\xE7ilen d\xF6nemde alacak ve bor\xE7 \xE7eklerin net etkisi. Kar\u015F\u0131l\u0131ks\u0131z \xE7\u0131kma oran\u0131 \xF6l\xE7\xFClmemi\u015Fse varsay\u0131m olarak i\u015Faretlenir."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Vade da\u011F\u0131l\u0131m\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Riskiniz hangi vade diliminde"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, /*#__PURE__*/React.createElement("b", null, "Vade da\u011F\u0131l\u0131m\u0131 (merdiven):"), " Be\u015F vade dilimi \u2014 0\u201315, 16\u201330, 31\u201360, 61\u201390, 90+ g\xFCn. Her dilimde al\u0131nan \xE7ekler yukar\u0131, verilen \xE7ekler a\u015Fa\u011F\u0131, net tutar \xE7izgiyle. Bir dilime t\u0131klamak tabloyu o vadeye filtreler."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, /*#__PURE__*/React.createElement("b", null, "Vade takvimi:"), " \xD6n\xFCm\xFCzdeki 90 g\xFCn\xFCn her g\xFCn\xFC i\xE7in o g\xFCn vadesi gelen net tutar. Yo\u011Fun g\xFCnler koyu g\xF6r\xFCn\xFCr. Tatil g\xFCnleri ayr\u0131 kanalda i\u015Faretlenir ve kayd\u0131r\u0131lm\u0131\u015F \xF6deme g\xFCn\xFC ipucunda yazar.")), /*#__PURE__*/React.createElement(ChequeLadder, null)), /*#__PURE__*/React.createElement(PfCard, {
      title: "\xC7ek listesi",
      note: "280 kay\u0131t \xB7 16\u201330 g\xFCn dilimi",
      flush: true
    }, /*#__PURE__*/React.createElement(ChequeList, null)), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Tek bir haftada biriken vade, o hafta nakit s\u0131k\u0131\u015Fmas\u0131 demektir. Merdiven bunu dilim baz\u0131nda, takvim g\xFCn baz\u0131nda g\xF6sterir."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "\u0130skonto sim\xFClat\xF6r\xFC"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "K\u0131rd\u0131rmadan \xF6nce maliyeti g\xF6r\xFCn"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Se\xE7ti\u011Finiz \xE7ekler i\xE7in banka, oran, g\xFCn say\u0131m\u0131 ve val\xF6r girin; net ele ge\xE7ecek tutar\u0131 ve efektif y\u0131ll\u0131k maliyeti hesaplar."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "K\u0131r\u0131l\u0131m ayr\u0131 g\xF6sterilir: iskonto tutar\u0131, BSMV, komisyon. \u201CFaize dahil\u201D g\xF6sterilmez \u2014 s\xF6zle\u015Fme oran\u0131 ile ger\xE7ek maliyet ayr\u0131\u015F\u0131r ve fark g\xF6r\xFCnmez olurdu.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "ACT/365 \xB7 ACT/360"), /*#__PURE__*/React.createElement("h4", null, "G\xFCn say\u0131m\u0131 konvansiyonu"), /*#__PURE__*/React.createElement("p", null, "TL i\u015Flemlerde ACT/365, d\xF6viz iskontosunda ACT/360 yayg\u0131nd\u0131r. Hangisinin kullan\u0131ld\u0131\u011F\u0131 s\xF6zle\u015Fme ba\u015F\u0131na saklan\u0131r; belirtilmemi\u015Fse varsay\u0131m olarak i\u015Faretlenir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Vade + val\xF6r"), /*#__PURE__*/React.createElement("h4", null, "Val\xF6r g\xFCn\xFC"), /*#__PURE__*/React.createElement("p", null, "Bankalar \xE7ekin vadesine tahsil s\xFCresi ekler. \u0130skonto g\xFCn say\u0131s\u0131 vade de\u011Fil, vade art\u0131 val\xF6rd\xFCr \u2014 k\u0131sa vadeli \xE7eklerde efektif maliyeti hissedilir \u015Fekilde de\u011Fi\u015Ftirir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Teklif kar\u015F\u0131la\u015Ft\u0131rma"), /*#__PURE__*/React.createElement("h4", null, "\xC7oklu banka kar\u015F\u0131la\u015Ft\u0131rmas\u0131"), /*#__PURE__*/React.createElement("p", null, "Ayn\u0131 \xE7ek sepeti i\xE7in birden fazla bankan\u0131n teklifi yan yana. Konvansiyonu s\xF6zle\u015Fmeden gelen teklifler ile varsay\u0131ma dayanan teklifler ayr\u0131 g\xF6sterilir \u2014 varsay\u0131ml\u0131 bir teklif \u201Cen iyi\u201D s\u0131ralamas\u0131na girmez."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Durum ve olaylar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\xC7ekin hayat d\xF6ng\xFCs\xFC"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Her evrak portf\xF6yde do\u011Far. Tahsile verme, ciro, iskonto, tahsil ve kar\u015F\u0131l\u0131ks\u0131z \xE7\u0131kma ayr\u0131 ge\xE7i\u015Flerdir; her ge\xE7i\u015F kaydedilir."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Kar\u015F\u0131l\u0131ks\u0131z \xE7\u0131kma bankan\u0131n olay\u0131d\u0131r, sistemin de\u011Fil \u2014 banka referans\u0131 girilmeden i\u015Faretlenemez.")), /*#__PURE__*/React.createElement(ChequeLifecycle, null)))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Vade kayd\u0131rma"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Tatile denk gelen vade"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Vadesi resm\xEE tatile ya da hafta sonuna denk gelen bir evrak\u0131n \xF6deme g\xFCn\xFC, izleyen ilk i\u015F g\xFCn\xFCne kayd\u0131r\u0131l\u0131r. Vade ve \xF6deme g\xFCn\xFC ayr\u0131 kolonlarda g\xF6r\xFCn\xFCr; kayd\u0131rman\u0131n gerek\xE7esi kay\u0131tta saklan\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Aradaki tatil g\xFCnleri s\xFCreye d\xE2hildir \u2014 yaln\u0131zca son g\xFCn ta\u015Far.")), /*#__PURE__*/React.createElement(ChequeShift, null)), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Cumartesi resm\xEE tatil de\u011Fildir ama bankalar kapal\u0131d\u0131r. Bankac\u0131l\u0131k takvimi ile kanuni takvim ayr\u0131 tutulur."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "S\u0131n\u0131rlar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Yapmad\u0131\u011F\u0131m\u0131z \u015Feyler")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Vade bilgisi mizandan çıkarılmaz', 'Çek ve senetlerin vadesi kendi kayıtlarından gelir; muhasebe hesabı yalnızca toplamı doğrular.'], ['Karşılıksız çıkma tahmin edilmez', 'Geçmiş oran ölçülmediyse varsayım olarak işaretlenir, uydurulmaz.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['İskonto işlemi başlatılmaz', 'Simülatör maliyeti hesaplar; kırdırma kararı ve işlemi sizde.'], ['Çek bilançodan çıkarılmaz', 'İskonto ettirilen çek portföyde kalır, karşılığında finansal borç doğar; kaldıraç oranı buna göre hesaplanır.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi \xE7ek portf\xF6y\xFCn\xFCzle vade da\u011F\u0131l\u0131m\u0131n\u0131 \xE7\u0131karal\u0131m",
      lead: "G\xF6r\xFC\u015Fmede vade dilimi da\u011F\u0131l\u0131m\u0131n\u0131z\u0131 ve iskonto maliyetinizi birlikte hesapl\u0131yoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
