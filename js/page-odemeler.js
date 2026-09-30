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
    }, "\xD6demeler"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "\xD6deme paketini kurun, tutar band\u0131na g\xF6re onaya g\xF6nderin, onaydan ge\xE7en talimat\u0131 bankaya iletin. Onaylanmam\u0131\u015F bir talimat pakete giremez; ayn\u0131 kalem iki pakete hi\xE7 giremez.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "\xD6deme paketleri",
      note: "g\xF6revler ayr\u0131l\u0131\u011F\u0131 \xB7 tutar band\u0131na g\xF6re \xE7ok imzal\u0131 onay"
    }, /*#__PURE__*/React.createElement(PaymentPackages, {
      count: 2
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Talimat kaynaklar\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "D\xF6rt kaynaktan talimat"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Talimat d\xF6rt kaynaktan gelir; hepsi ayn\u0131 pakette birle\u015Fir ve kayna\u011F\u0131yla birlikte kay\u0131tta durur.")), /*#__PURE__*/React.createElement(PaySources, null)), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Kaynak', 'Ne gelir', 'Girilen alanlar'],
      rows: [['Elle giriş', 'Tekil talimat', 'Alacaklı, IBAN, tutar, para birimi, valör tarihi'], ['Planlı nakit akışı', 'Tahmine girilmiş kalemlerden seçim', 'Kalem seçimi ve valör'], ['Kredi taksitleri', 'Vadesi yaklaşan taksitler, ödeme planından', 'Otomatik; yalnızca valör teyidi'], ['Vadesi gelen borç faturaları', 'ERP’den gelen faturalar', 'Karşı tarafın IBAN’ı otomatik gelir']]
    }), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Bir kalem pakete al\u0131nd\u0131\u011F\u0131nda kayna\u011F\u0131na ba\u011Flan\u0131r; ayn\u0131 taksit ya da fatura ikinci bir pakete giremez."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Onay"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Tutar band\u0131na g\xF6re \xE7ok imza"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "E\u015Fiklere g\xF6re bir, iki ya da \xFC\xE7 imza istenir. Gereken imza say\u0131s\u0131 talep an\u0131nda sabitlenir \u2014 sonradan e\u015Fik de\u011Fi\u015Ftirilerek d\xFC\u015F\xFCr\xFClemez."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Talep eden kendi paketini imzalayamaz; bu kural veritaban\u0131 seviyesinde uygulan\u0131r. Bant tablosunun kendisini de\u011Fi\u015Ftirmek de onaya tabidir.")), /*#__PURE__*/React.createElement(PayApproval, null)), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "G\xF6revler ayr\u0131l\u0131\u011F\u0131"), /*#__PURE__*/React.createElement("h4", null, "Haz\u0131rlayan onaylayamaz"), /*#__PURE__*/React.createElement("p", null, "Paketi kuran kullan\u0131c\u0131 imza listesinde olsa bile kendi paketini onaylayamaz. Kural uygulama katman\u0131ndan a\u015F\u0131lamaz.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Dondurulmu\u015F imza"), /*#__PURE__*/React.createElement("h4", null, "Say\u0131 talep an\u0131nda sabitlenir"), /*#__PURE__*/React.createElement("p", null, "Paket a\xE7\u0131ld\u0131\u011F\u0131 andaki bant tablosu ge\xE7erlidir. E\u015Fik sonradan y\xFCkseltilse de d\xFC\u015F\xFCr\xFClse de o paketin imza say\u0131s\u0131 de\u011Fi\u015Fmez.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Yap\u0131land\u0131rma hatas\u0131"), /*#__PURE__*/React.createElement("h4", null, "Yetkili say\u0131s\u0131 yetersizse"), /*#__PURE__*/React.createElement("p", null, "Paket a\xE7\u0131l\u0131r ama onaylanamaz. Durum sessizce beklemede kalmaz; yap\u0131land\u0131rma hatas\u0131 olarak bildirilir."))))), /*#__PURE__*/React.createElement("section", {
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
    }, "\u0130letim"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\u0130ki yol: dosya ya da do\u011Frudan iletim")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "conn-box stack-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h3"
    }, "Dosya"), /*#__PURE__*/React.createElement("p", {
      className: "sm muted"
    }, "ISO 20022 pain.001 ve banka format\u0131nda dosya \xFCretilir; bankan\u0131za siz y\xFCklersiniz. \u0130ndirme kaydedilir \u2014 onayland\u0131\u011F\u0131 h\xE2lde indirilmemi\u015F bir paket dikkat listesine d\xFC\u015Fer."), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, ['pain.001', 'Banka özel dosya', 'İndirme kaydı'].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "chip"
    }, c)))), /*#__PURE__*/React.createElement("div", {
      className: "conn-box stack-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h3"
    }, "Do\u011Frudan iletim"), /*#__PURE__*/React.createElement("p", {
      className: "sm muted"
    }, "Onaydan ge\xE7en talimat, lisansl\u0131 a\xE7\u0131k bankac\u0131l\u0131k sa\u011Flay\u0131c\u0131s\u0131 \xFCzerinden bankaya iletilir. Tideon \xF6deme ba\u015Flatma lisans\u0131 ta\u015F\u0131maz; talimat\u0131 \xFCretir ve sa\u011Flay\u0131c\u0131ya devreder."), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, ['Lisanslı sağlayıcı', 'Ödeme başlatma', 'Banka bazında'].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "chip"
    }, c))))), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Hangi yolun kullan\u0131laca\u011F\u0131 banka ve kurum baz\u0131nda belirlenir."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Cevap takibi"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Talimat baz\u0131nda durum"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bankan\u0131n cevab\u0131 talimat baz\u0131nda i\u015Flenir. Bir pakette bir IBAN hatal\u0131ysa yaln\u0131zca o talimat reddedilir, di\u011Ferleri ge\xE7er."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Kabul edildi ile al\u0131nd\u0131 ayn\u0131 \u015Fey de\u011Fildir \u2014 banka talimat\u0131 alm\u0131\u015F olabilir ama hen\xFCz karar vermemi\u015Ftir. \u0130kisi ayr\u0131 g\xF6sterilir.")), /*#__PURE__*/React.createElement(PayReplies, null)), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Durum', 'Ne anlama gelir', 'Sonraki adım'],
      rows: [['İletildi', 'Talimat bankaya ulaştı', 'Cevap bekleniyor'], ['Alındı', 'Banka talimatı kaydetti, karar vermedi', 'İzlemede kalır'], ['Kabul edildi', 'Banka işlemi gerçekleştirecek', 'Hesap hareketiyle eşleşir'], ['Reddedildi', 'Tekil talimat geçmedi', 'Gerekçe kaydedilir, kalem yeni pakete alınabilir']]
    }))), /*#__PURE__*/React.createElement("section", {
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
    }, "S\u0131n\u0131rlar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Yapmad\u0131\u011F\u0131m\u0131z \u015Feyler")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Ödeme başlatma lisansı bizde değil', 'Talimat lisanslı sağlayıcı üzerinden iletilir.'], ['Onaylanmış paket değiştirilemez', 'Değişiklik yeni bir paket üretir; iptal edilebilir ama silinemez.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Karma para biriminde toplam verilmez', 'Çevrilemeyen bir satır varsa toplam gösterilmez ve onay en yüksek banda düşer.'], ['Sistem onayı banka onayı değildir', 'Sistemde onaylayan kişi bankanın imza sirkülerinde olmayabilir; iki yetki ayrı tutulur.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "\xD6deme ak\u0131\u015F\u0131n\u0131 kendi onay yap\u0131n\u0131zla kural\u0131m",
      lead: "G\xF6r\xFC\u015Fmede tutar bantlar\u0131n\u0131z\u0131 ve imza listenizi birlikte tan\u0131ml\u0131yoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
