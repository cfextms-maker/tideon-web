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
    }, "G\xFCvenlik ve veri"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "\xC7ok t\xFCzel ki\u015Filikli holdinglerde bir hazinede kimin neyi g\xF6rebildi\u011Fi ve kimin neyi onaylayabildi\u011Fi, \xFCr\xFCn\xFCn ilk katman\u0131nda tan\u0131mlan\u0131r."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Veri izolasyonu"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Kurumlar\u0131n verisi birbirine kar\u0131\u015Fmaz"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Her kay\u0131t kurum kimli\u011Fiyle i\u015Faretlenir ve eri\u015Fim kontrol\xFC veritaban\u0131 katman\u0131nda uygulan\u0131r. Uygulama katman\u0131nda de\u011Fil."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bir sorgu yanl\u0131\u015F yaz\u0131lsa bile ba\u015Fka bir kurumun verisini d\xF6nd\xFCremez; bu, uygulama kodunun do\u011Fru yaz\u0131lmas\u0131na ba\u011Fl\u0131 olmayan bir g\xFCvence."), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Bu kural otomatik denetimlerle s\xFCrekli \xF6l\xE7\xFCl\xFCr; her tablonun ve her politikan\u0131n ger\xE7ekten kurum ayr\u0131m\u0131 yapt\u0131\u011F\u0131 do\u011Frulan\u0131r."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Yetkilendirme"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Kim neyi g\xF6r\xFCr, kim neyi yapar"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Yetki iki eksende tan\u0131mlan\u0131r: hangi t\xFCzel ki\u015Filiklere eri\u015Fim ve hangi i\u015Flemlere izin."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Holding CFO\u2019su grubun tamam\u0131n\u0131 g\xF6r\xFCr; bir i\u015Ftirak m\xFCd\xFCr\xFC yaln\u0131zca kendi \u015Firketini. Ayn\u0131 ki\u015Fi bir mod\xFClde okuma, ba\u015Fka bir mod\xFClde yazma yetkisi ta\u015F\u0131yabilir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid tr-grid-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Rol tan\u0131mlar\u0131"), /*#__PURE__*/React.createElement("span", null, "Sahip, hazine m\xFCd\xFCr\xFC, analist, denet\xE7i.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "T\xFCzel ki\u015Filik baz\u0131nda eri\u015Fim"), /*#__PURE__*/React.createElement("span", null, "Grup, \u015Firket ya da hesap d\xFCzeyinde.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Mod\xFCl baz\u0131nda izin"), /*#__PURE__*/React.createElement("span", null, "Okuma, yazma, onaylama ayr\u0131 ayr\u0131 verilir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "\u0130mza yetkisi ayr\u0131"), /*#__PURE__*/React.createElement("span", null, "Sistemde onaylama yetkisi ile bankadaki imza yetkisi farkl\u0131 \u015Feylerdir, ayr\u0131 tutulur."))))), /*#__PURE__*/React.createElement("section", {
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
    }, "Onay ve g\xF6revler ayr\u0131l\u0131\u011F\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Tek ki\u015Fi ba\u015Ftan sona bir i\u015Flemi tamamlayamaz"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bir talebi haz\u0131rlayan ki\u015Fi onu onaylayamaz. Bu kural veritaban\u0131 seviyesinde uygulan\u0131r; uygulama katman\u0131ndan a\u015F\u0131lamaz."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tutar band\u0131na g\xF6re \xE7ok imza istenir ve gereken imza say\u0131s\u0131 talep an\u0131nda sabitlenir; sonradan e\u015Fik de\u011Fi\u015Ftirilerek d\xFC\u015F\xFCr\xFClemez. Bant tablosunun kendisini de\u011Fi\u015Ftirmek de onaya tabidir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "G\xF6revler ayr\u0131l\u0131\u011F\u0131"), /*#__PURE__*/React.createElement("span", null, "Haz\u0131rlayan onaylayamaz; kural veritaban\u0131 k\u0131s\u0131t\u0131 olarak durur.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Dondurulmu\u015F imza say\u0131s\u0131"), /*#__PURE__*/React.createElement("span", null, "Gereken imza say\u0131s\u0131 talep an\u0131nda sabitlenir.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Onaylanamayan talep sessiz kalmaz"), /*#__PURE__*/React.createElement("span", null, "Yetkili say\u0131s\u0131 e\u015Fikten azsa bu bir yap\u0131land\u0131rma hatas\u0131 olarak bildirilir; talep beklemede unutulmaz."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Denetim izi"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Her karar geriye d\xF6n\xFCk a\xE7\u0131klanabilir"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Kay\u0131tlar silinmez, durumu de\u011Fi\u015Fir. \u0130ptal edilen bir \xF6deme paketi, kapat\u0131lan bir kredi, iade al\u0131nan bir teminat mektubu; hepsi kay\u0131tta kal\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Sebebi basit: bir hesaplama o kayd\u0131 kullanm\u0131\u015Fsa, o hesab\u0131n nas\u0131l \xE7\u0131kt\u0131\u011F\u0131 sonradan a\xE7\u0131klanabilir olmal\u0131d\u0131r.")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Değişiklik kaydı', 'Kim, ne zaman, neyi değiştirdi.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Onay geçmişi', 'Hangi talebi kim onayladı, hangi bandda, hangi kurla.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Veri kayna\u011F\u0131 ve tazelik"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Verinin ne zaman al\u0131nd\u0131\u011F\u0131 her zaman g\xF6r\xFCn\xFCr"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Her veri blo\u011Funun yan\u0131nda son g\xFCncellenme zaman\u0131 durur. Bir ba\u011Flant\u0131 koptu\u011Funda bu gizlenmez. Etkilenen toplamlar i\u015Faretlenir ve hangi hesaplar\u0131n kapsam d\u0131\u015F\u0131 kald\u0131\u011F\u0131 yaz\u0131l\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "G\xFCncel olmayan bir veri, g\xFCncelmi\u015F gibi g\xF6sterilmez."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Ki\u015Fisel veri"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "KVKK uyumu"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Veri saklama s\xFCreleri ve eri\u015Fim kay\u0131tlar\u0131 tan\u0131ml\u0131d\u0131r. Ki\u015Fisel veri i\u015Fleme envanteri, devreye alma s\u0131ras\u0131nda kurumunuzun s\xFCre\xE7leriyle birlikte haz\u0131rlan\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Denetim izi gere\u011Fi kay\u0131tlar silinmez; ki\u015Fisel veriye ili\u015Fkin talepler ayr\u0131 bir s\xFCre\xE7le ele al\u0131n\u0131r.")), /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Bar\u0131nd\u0131rma"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Nerede \xE7al\u0131\u015F\u0131r"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "T\xFCm sistem kendi sunucular\u0131n\u0131zda on-prem olarak kurulur ve veriniz sizde kal\u0131r.")))), /*#__PURE__*/React.createElement(PageCta, {
      title: "G\xFCvenlik de\u011Ferlendirmenizi birlikte yapal\u0131m",
      lead: "G\xF6r\xFC\u015Fmede yetki matrisini ve denetim izini kendi kurum yap\u0131n\u0131z \xFCzerinden g\xF6steriyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
