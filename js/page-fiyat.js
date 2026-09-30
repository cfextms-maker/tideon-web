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
    }), /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Fiyat",
      title: "Fiyat listesi yay\u0131nlam\u0131yoruz",
      lead: "Kurumsal hazine kurulumlar\u0131 birbirine benzemiyor: t\xFCzel ki\u015Filik say\u0131s\u0131, banka ve ERP ba\u011Flant\u0131lar\u0131, mod\xFCller ve kullan\u0131c\u0131 yetkileri fiyat\u0131 belirliyor. Uydurma bir ba\u015Flang\u0131\xE7 fiyat\u0131 yerine kapsam\u0131 g\xF6r\xFC\u015Fmede birlikte \xE7\u0131kar\u0131yoruz.",
      meta: [['Sözleşme', 'yıllık'], ['Kurulum', 'tek seferlik'], ['Kullanıcı', 'yetkiye göre'], ['Teklif süresi', '5 iş günü']]
    }), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Fiyat\u0131 belirleyen kalemler"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Neye g\xF6re fiyatl\u0131yoruz")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Kalem', 'Nasıl ölçülür', 'Fiyata etkisi'],
      rows: [['Tüzel kişilik sayısı', 'Konsolide görünüme giren şirket sayısı', 'Ana kalem'], ['Banka bağlantısı', 'Bağlanan banka ve hesap sayısı', 'Bağlantı başına'], ['ERP bağlantısı', 'Sistem sayısı ve aktarım biçimi', 'Sistem başına'], ['Modüller', 'Tahmin, risk, çek-senet, ödeme, mutabakat', 'Seçime göre'], ['Kullanıcı', 'Görüntüleyen, hazırlayan, onaylayan', 'Rol bazında'], ['Kurulum', 'Hesap planı eşleme ve veri devri', 'Tek seferlik']]
    }), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Görüşme', '45 dakika; kendi hesap yapınızla ürünü görüyorsunuz.'], ['2', 'Kapsam', 'Tüzel kişilik, bağlantı ve modül listesi çıkarılır.'], ['3', 'Teklif', '5 iş günü içinde yazılı, kalem kalem teklif.'], ['4', 'Kurulum', 'Takvim ve sorumluluklar sözleşmede yazılı.']]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Dahil olanlar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Y\u0131ll\u0131k bedele dahil"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Sürüm güncellemeleri', 'Yeni sürümler ek bedel istemez.'], ['Bağlantı bakımı', 'Banka ve ERP tarafındaki format değişiklikleri.'], ['Destek', 'İş günü içinde e-posta ve telefon desteği.'], ['Eğitim', 'Kurulum sonrası kullanıcı eğitimi.']]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Ayr\u0131 fiyatlanan"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Dahil olmayan"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Özel geliştirme', 'Yalnızca sizin için yazılan rapor veya akış.'], ['Yeni bağlantı', 'Listede olmayan banka veya ERP için devreye alma.'], ['Veri devri', 'Geçmiş yılların taşınması.'], ['Yerinde çalışma', 'Ofisinizde yürütülen proje günleri.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kapsam\u0131 \xE7\u0131kar\u0131p yaz\u0131l\u0131 teklif verelim",
      lead: "G\xF6r\xFC\u015Fme sonunda hangi kalemlerin fiyat\u0131 etkiledi\u011Fini kalem kalem g\xF6r\xFCyorsunuz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
