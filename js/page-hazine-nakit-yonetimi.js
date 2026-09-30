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
      eyebrow: "Platform",
      title: "Hazine ve nakit y\xF6netimi",
      lead: "Grup nakdini tek ekranda g\xF6r\xFCn, nakit s\u0131k\u0131\u015Fmas\u0131n\u0131 haftalar \xF6ncesinden fark edin. Elinizde ne kadar para oldu\u011Funu de\u011Fil, ne kadar\u0131n\u0131 ger\xE7ekten kullanabilece\u011Finizi g\xF6sterir.",
      center: true
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
    }, "Nakit g\xF6r\xFCn\xFCrl\xFC\u011F\xFC"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Toplam bakiye de\u011Fil, kullanabilece\u011Finiz nakit"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bakiyeler g\xFCn i\xE7inde birden \xE7ok kez okunur. Bloke tutar, teminata verilmi\u015F bakiye ve gayrinakdi limit toplamdan d\xFC\u015F\xFCl\xFCr \u2014 kullan\u0131labilir nakit bunlar\u0131n sonras\u0131nda kalan tutard\u0131r."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Okunamayan bir de\u011Fer s\u0131f\u0131r say\u0131lmaz: o hesap toplam\u0131n d\u0131\u015F\u0131nda b\u0131rak\u0131l\u0131r ve hangi hesab\u0131n neden \xE7\u0131kar\u0131ld\u0131\u011F\u0131 tutar\u0131n alt\u0131nda yazar.")), /*#__PURE__*/React.createElement("div", {
      className: "frag-grid"
    }, /*#__PURE__*/React.createElement(PfCard, {
      title: "Hesap baz\u0131nda bakiyeler",
      note: "9 hesap \xB7 t\xFCzel ki\u015Fili\u011Fe g\xF6re gruplu",
      flush: true
    }, /*#__PURE__*/React.createElement(AccountsTable, null)), /*#__PURE__*/React.createElement(PfCard, {
      title: "Banka konsantrasyonu",
      note: "e\u015Fik %40 \xB7 tek banka"
    }, /*#__PURE__*/React.createElement(Concentration, null))), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Tüzel kişilik ve banka kırılımı', 'Konsolide görünümden tek hesaba kadar aynı tanımla inilir; yetki tüzel kişilik bazında verilir.'], ['Bloke, teminat ve kullanılabilir ayrımı', 'Kullanılabilir nakit; bloke ve teminat düşülerek hesaplanır, düşülen kalemler ayrı gösterilir.'], ['Para birimi ve FX açık pozisyon', 'Para birimi kırılımı ve açık pozisyon aynı ekranda. Her işlem tipi için ayrı kur politikası; kur bilgisi gelmeden tutar çevrilmez.'], ['Eşik ve konsantrasyon takibi', 'Tek banka payı, karşı taraf ve açık pozisyon eşikleri izlenir. Bugün aşılmış bir eşik kırmızı, projeksiyonda aşılacak bir eşik turuncu işaretlenir — gerçekleşmiş bir ihlal ile beklenen bir ihlal aynı görünmez.']]
    }))), /*#__PURE__*/React.createElement("section", {
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
    }, "Tahmin"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Nakit ak\u0131\u015F tahmini"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tahmin ufkunu siz se\xE7ersiniz \u2014 haftal\u0131k, ayl\u0131k ya da \xE7eyreklik. Tahmin \xFC\xE7 kaynaktan beslenir: bilinen y\xFCk\xFCml\xFCl\xFCkler (kredi taksitleri, vadesi gelen \xE7ek ve senetler, planl\u0131 \xF6demeler), ge\xE7mi\u015F hareket kal\u0131plar\u0131 ve elle girilen kalemler."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Ger\xE7ekle\u015Fen ve tahmin ayr\u0131 \xE7izilir; tahmin \xE7ubuklar\u0131 tarama desenle i\u015Faretlenir. Varsay\u0131m de\u011Fi\u015Fti\u011Finde hangi d\xF6nemin neden de\u011Fi\u015Fti\u011Fi g\xF6r\xFCn\xFCr.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Haftal\u0131k nakit hareketi ve kapan\u0131\u015F bakiyesi",
      note: "haftal\u0131k k\u0131r\u0131l\u0131m \xB7 milyon \u20BA"
    }, /*#__PURE__*/React.createElement(ForecastWeeks, null)), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Senaryo ve varsayım kaydı', 'Tahsilat gecikmesi, kur ve faiz varsayımı senaryo olarak saklanır.'], ['Tampon eşiği uyarısı', 'Kapanış bakiyesi tampon eşiğin altına inen dönem önceden işaretlenir.'], ['Tahmin doğruluğu', 'Geçmiş tahminlerin sapması ölçülür ve raporlanır. Modelin kendine ne kadar güvenilebileceği rakamla söylenir.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Revizyon karşılaştırması', 'Önceki tahminle fark, kalem bazında raporlanır.'], ['Negatif kapanış', 'Negatife düşen dönem ayrıca gösterilir; en düşük nokta ve tarihi belirtilir, tutar gizlenmez.'], ['Bilinen yükümlülükler otomatik girer', 'Kredi taksitleri, vadesi gelen çek ve senetler, teminat mektubu komisyonları ve planlı ödemeler tahmine kendiliğinden düşer — elle girilmesi gerekmez.']]
    })))), /*#__PURE__*/React.createElement("section", {
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
    }, "Havuzlama ve grup i\xE7i finansman"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Sweep kurulumu, grup i\xE7i kredi ve s\xF6zle\u015Fmesel kur")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Yapı', 'Kapsam', 'Takip'],
      rows: [['Fiziksel havuzlama', 'Ana hesap ve alt hesaplar arası aktarım planı', 'Aktarım kaydı ve gerekçesi'], ['Nominal havuzlama', 'Bakiye birleştirmeden faiz optimizasyonu', 'Faiz dağıtım tablosu'], ['Grup içi kredi', 'Şirketler arası borç–alacak, sözleşmesel kur', 'Vade, faiz tahakkuku ve netleştirme'], ['Sweep eşiği', 'Hesap başına hedef bakiye', 'Eşik aşımı ve boşta nakit']]
    }), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "S\xF6zle\u015Fmesel kur beyan edilmemi\u015Fse tutar piyasa kuruna d\xFC\u015F\xFCr\xFClmez \u2014 iki \u015Firketin mutabakat\u0131 her g\xFCn farkl\u0131 \xE7\u0131kmas\u0131n diye."), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Bağlantı', 'Banka hesapları eşlenir, tazelik izlenir.'], ['2', 'Kural', 'Hedef bakiye ve sweep eşiği tanımlanır.'], ['3', 'Sapma', 'Boşta nakit ve hedeften sapma gösterilir.'], ['4', 'Onay', 'Tutar bandına göre çok imzalı onaydan sonra talimat paketine düşer.']]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '62ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Banka kapsam\u0131"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Bakiye ve hareket verisi haz\u0131r ba\u011Flant\u0131larla gelir")), /*#__PURE__*/React.createElement(BankLogoRow, {
      ids: ['ziraat', 'is', 'garanti', 'yapikredi', 'akbank', 'vakif', 'halk', 'qnb', 'deniz', 'teb'],
      pattern: [4, 3, 3],
      cap: false
    }))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Grup nakdinizi tek ekranda g\xF6rmek ister misiniz?",
      lead: "45 dakikal\u0131k g\xF6r\xFC\u015Fmede kendi hesap yap\u0131n\u0131zla kurulum ak\u0131\u015F\u0131n\u0131 g\xF6steriyoruz."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
