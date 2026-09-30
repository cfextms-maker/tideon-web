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
    }, "\xC7\xF6z\xFCmler"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "A\xE7\u0131k bankac\u0131l\u0131k ve banka entegrasyonu"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "T\xFCrkiye\u2019deki yirmiden fazla bankayla birebir haz\u0131r ba\u011Flant\u0131. G\xFCn i\xE7i bakiye ve hareket a\xE7\u0131k bankac\u0131l\u0131k servislerinden, mutabakat ekstre dosyalar\u0131ndan, \xF6deme talimat\u0131 banka format\u0131nda dosyayla.")), /*#__PURE__*/React.createElement(ConnectFlow, null))), /*#__PURE__*/React.createElement("section", {
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
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Teknoloji"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "D\xF6rt kanal, tek veri modeli"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Hangi kanaldan gelirse gelsin veri ayn\u0131 modele d\xFC\u015Fer: hesap, tutar, para birimi, val\xF6r, kar\u015F\u0131 taraf, kaynak ve okuma saati. Kayna\u011F\u0131 belirsiz kay\u0131t toplamlara girmez.")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Kanal', 'Teknoloji', 'Kullanım', 'Tazelik'],
      rows: [['Açık bankacılık servisleri', 'REST · OAuth 2.0 · mTLS', 'Gün içi bakiye ve hareket (MT942 dahil)', 'Gün içi, dakikalar'], ['Gün sonu ekstresi', 'MT940 · camt.053 · banka özel', 'Mutabakat', 'Gün sonu'], ['Ödeme talimatı', 'pain.001 · banka özel dosya', 'Talimat paketi üretimi', 'Talep anında'], ['Kurumsal kanal', 'SFTP · zamanlanmış görev', 'Toplu dosya aktarımı', 'Zamanlanmış']]
    }), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Yetkilendirme', 'Banka tarafında kurumsal erişim ve sertifika kurulur.'], ['2', 'Hesap eşleme', 'Her hesap tüzel kişilik ve TDHP koduyla eşlenir.'], ['3', 'Doğrulama', 'Eşleme doğrulanmadan hesap toplamlara girmez.'], ['4', 'İzleme', 'Bağlantı kesildiğinde etkilenen her alan işaretlenir.']]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "G\xFCvenlik"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Ba\u011Flant\u0131 g\xFCvenli\u011Fi ve denetim izi"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['mTLS ve imzalı istek', 'Banka servislerine karşılıklı sertifikayla bağlanılır.'], ['Anahtar yönetimi', 'Sertifika ve anahtarlar kurum bazında ayrılır; süre takibi yapılır.'], ['Rol bazlı yetki', 'Bağlantı kuran kullanıcı ödeme onaylayamaz; kural veritabanı seviyesinde uygulanır.'], ['Denetim izi', 'Her okuma ve dosya üretimi zaman damgasıyla kaydedilir.']]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Kesinti davran\u0131\u015F\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Ba\u011Flant\u0131 koptu\u011Funda ne olur"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Veri uydurulmaz', 'Son başarılı okuma kullanılır ve tarama desenle işaretlenir.'], ['Etki listesi', 'Kopan bağlantının etkilediği tüm alanlar işaretlenir.'], ['Toplamdan çıkarma', 'Okunamayan değer sıfır sayılmaz, hesap toplamdan çıkarılır.'], ['Geri dolum', 'Bağlantı döndüğünde eksik gün otomatik tamamlanır.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Entegrasyon \xE7e\u015Fitleri"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "D\xF6rt farkl\u0131 entegrasyon yolu"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Açık bankacılık servisleri', 'REST · OAuth 2.0 · mTLS. Gün içi bakiye ve hareket, MT942 dahil.'], ['Dosya aktarımı', 'SFTP ya da zamanlanmış görev; gün sonu ekstresi ve toplu talimat.'], ['REST servisi (ERP)', 'Cari, fatura, yevmiye ve mizan okuması.'], ['Salt okunur veritabanı', 'REST servisi olmayan ERP kurulumları için.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Kendi banka listenizle kapsam\u0131 birlikte kontrol edelim",
      lead: "G\xF6r\xFC\u015Fmede hangi bankalar\u0131n haz\u0131r, hangilerinin devreye alma gerektirdi\u011Fini a\xE7\u0131k\xE7a s\xF6yl\xFCyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
