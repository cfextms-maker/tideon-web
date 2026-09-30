var __Page=(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const INCLUDED = ['Nakit pozisyonu ve konsolide görünüm', 'Nakit akış tahmini ve senaryo', 'Günlük pozisyonlama', 'Likidite tamponu', 'Kredi ve mevduat portföyü', 'Ödeme planı üretimi', 'Kredi limitleri', 'Teminat mektubu ve akreditif', 'Grup içi krediler', 'Havuzlama ve sweep', 'Çek ve senet portföyü', 'İskonto simülatörü', 'FX maruziyeti ve türev', 'Risk limitleri', 'Sözleşme şartları (covenant) takibi', 'Finansal oranlar', 'Banka mutabakatı', 'Kural motoru ve kategorizasyon', 'TDHP eşlemesi', 'Nakit akış raporlaması', 'Ödeme paketi ve çok imzalı onay', 'Karşı taraf yönetimi'];
  const SHAPES = [['Tüzel kişilik', '1', '5', '15+'], ['Kullanıcı', '5', '15', '40+'], ['Banka hesabı', '15', '50', '150+']];
  const DIMS = [['sirket', 'Tüzel kişilik', 1, 1, 60], ['kullanici', 'Kullanıcı', 5, 1, 400], ['hesap', 'Banka hesabı', 15, 1, 900]];
  function Stepper({
    label,
    value,
    min,
    max,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "qb-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "qb-lbl"
    }, label), /*#__PURE__*/React.createElement("div", {
      className: "qb-ctl"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": label + ' azalt',
      onClick: () => onChange(Math.max(min, value - 1))
    }, "\u2212"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: value,
      min: min,
      max: max,
      onChange: e => onChange(Math.min(max, Math.max(min, Number(e.target.value) || min)))
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": label + ' artır',
      onClick: () => onChange(Math.min(max, value + 1))
    }, "+")));
  }
  function QuoteBox() {
    const [v, setV] = useState({
      sirket: 1,
      kullanici: 5,
      hesap: 15
    });
    const [mail, setMail] = useState('');
    const [sent, setSent] = useState(false);
    const [ok, setOk] = useState(false);
    const [hata, setHata] = useState(false);
    const [gonderiliyor, setGonderiliyor] = useState(false);
    const preset = (a, b, c) => setV({
      sirket: a,
      kullanici: b,
      hesap: c
    });
    const aktif = (a, b, c) => v.sirket === a && v.kullanici === b && v.hesap === c;
    if (sent) {
      return /*#__PURE__*/React.createElement("div", {
        className: "qb qb-done"
      }, /*#__PURE__*/React.createElement("span", {
        className: "qb-check"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 24
      })), /*#__PURE__*/React.createElement("strong", null, "Talebiniz al\u0131nd\u0131"), /*#__PURE__*/React.createElement("span", null, v.sirket, " \u015Firket \xB7 ", v.kullanici, " kullan\u0131c\u0131 \xB7 ", v.hesap, " hesap"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-ghostDark btn-sm",
        onClick: () => setSent(false)
      }, "Yeni talep"));
    }
    return /*#__PURE__*/React.createElement("form", {
      className: "qb",
      name: "teklif",
      method: "POST",
      "data-netlify": "true",
      "netlify-honeypot": "bot-field",
      onSubmit: e => {
        e.preventDefault();
        if (gonderiliyor) return;
        setHata(false);
        setGonderiliyor(true);
        netlifySubmit('teklif', {
          'Tüzel kişilik': v.sirket,
          'Kullanıcı': v.kullanici,
          'Banka hesabı': v.hesap,
          'E-posta': mail,
          'KVKK onayı': 'Onaylandı'
        }).then(basarili => {
          setGonderiliyor(false);
          return basarili ? setSent(true) : setHata(true);
        });
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "teklif"
    }), /*#__PURE__*/React.createElement("p", {
      hidden: true
    }, /*#__PURE__*/React.createElement("label", null, "Doldurmay\u0131n: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "T\xFCzel ki\u015Filik",
      value: v.sirket
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "Kullan\u0131c\u0131",
      value: v.kullanici
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "Banka hesab\u0131",
      value: v.hesap
    }), /*#__PURE__*/React.createElement("div", {
      className: "qb-presets"
    }, [['Tek şirket', 1, 5, 15], ['Orta ölçekli', 5, 15, 50], ['Büyük holding', 15, 40, 150]].map(([ad, a, b, c]) => /*#__PURE__*/React.createElement("button", {
      key: ad,
      type: "button",
      "aria-pressed": aktif(a, b, c),
      onClick: () => preset(a, b, c)
    }, ad))), DIMS.map(([k, label,, min, max]) => /*#__PURE__*/React.createElement(Stepper, {
      key: k,
      label: label,
      value: v[k],
      min: min,
      max: max,
      onChange: n => setV({
        ...v,
        [k]: n
      })
    })), /*#__PURE__*/React.createElement("label", {
      className: "consent"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "KVKK onay\u0131",
      value: "Onayland\u0131",
      required: true,
      checked: ok,
      onChange: e => setOk(e.target.checked)
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
      href: "kvkk-aydinlatma-metni.html",
      target: "_blank",
      rel: "noreferrer"
    }, "Ayd\u0131nlatma metnini"), " okudum, ki\u015Fisel verilerimin i\u015Flenmesine onay veriyorum.")), /*#__PURE__*/React.createElement("div", {
      className: "qb-mail"
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "E-posta",
      required: true,
      placeholder: "Kurumsal e-posta",
      value: mail,
      onChange: e => setMail(e.target.value)
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      type: "submit",
      disabled: !ok || gonderiliyor,
      style: {
        opacity: ok && !gonderiliyor ? 1 : .5
      }
    }, gonderiliyor ? 'Gönderiliyor…' : 'Talep oluştur')), hata ? /*#__PURE__*/React.createElement("span", {
      className: "form-err",
      role: "alert"
    }, "G\xF6nderilemedi. Ba\u011Flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.") : null, /*#__PURE__*/React.createElement("span", {
      className: "qb-note"
    }, "Girdi\u011Finiz kapasite bilgisi yaln\u0131zca teklif haz\u0131rlamak i\xE7in kullan\u0131l\u0131r."));
  }
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
    }, "Fiyatland\u0131rma"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Karma\u015F\u0131k paket yok"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Tek bir platform, t\xFCm yetenekler. Fiyat \xFC\xE7 \u015Feye g\xF6re belirlenir: ka\xE7 \u015Firket, ka\xE7 kullan\u0131c\u0131, ka\xE7 banka hesab\u0131. Kullanmad\u0131\u011F\u0131n\u0131z mod\xFCller i\xE7in \xF6deme yapmazs\u0131n\u0131z, \xE7\xFCnk\xFC mod\xFCl yok."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '62ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "\xDC\xE7 boyut"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Fiyat\u0131 ne belirler")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "T\xFCzel ki\u015Filik say\u0131s\u0131"), /*#__PURE__*/React.createElement("span", null, "Holding ve i\u015Ftirakleriniz. Her \u015Firket kendi hesap plan\u0131, kendi kur politikas\u0131 ve kendi yetkilendirmesiyle tan\u0131mlan\u0131r.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Kullan\u0131c\u0131 say\u0131s\u0131"), /*#__PURE__*/React.createElement("span", null, "T\xFCm roller dahil \u2014 hazine, muhasebe, denetim, y\xF6netim. Rol ba\u015F\u0131na ek \xFCcret yok.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Ba\u011Fl\u0131 banka hesab\u0131 say\u0131s\u0131"), /*#__PURE__*/React.createElement("span", null, "Ba\u011Flant\u0131 kurulan hesap say\u0131s\u0131. Ka\xE7 bankayla \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131z de\u011Fil, ka\xE7 hesap okundu\u011Fu \xF6l\xE7\xFCl\xFCr."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '62ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "\xD6rnek yap\u0131land\u0131rmalar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\xD6l\xE7ek nas\u0131l g\xF6r\xFCn\xFCr")), /*#__PURE__*/React.createElement("div", {
      className: "shape-grid"
    }, [['Tek şirket', ['1', '5', '15']], ['Orta ölçekli grup', ['5', '15', '50']], ['Büyük holding', ['15+', '40+', '150+']]].map(([ad, v]) => /*#__PURE__*/React.createElement("div", {
      key: ad,
      className: "shape"
    }, /*#__PURE__*/React.createElement("strong", null, ad), SHAPES.map((r, k) => /*#__PURE__*/React.createElement("div", {
      key: r[0],
      className: "shape-row"
    }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("b", null, v[k])))))), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Kurumunuzun yap\u0131s\u0131 bunlardan farkl\u0131ysa teklifi ona g\xF6re haz\u0131rlar\u0131z."), /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary",
      href: "#teklif",
      style: {
        alignSelf: 'center'
      }
    }, "Teklif iste ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '62ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Kapsam"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Hepsi dahil")), /*#__PURE__*/React.createElement("ul", {
      className: "incl"
    }, INCLUDED.map(t => /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15,
      style: {
        color: 'var(--accent-600)',
        flex: 'none',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Bu listede olan hi\xE7bir \u015Fey ek \xFCcrete tabi de\u011Fildir."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Hizmetler"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Devreye alma dahildir"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Kurulum, hesap plan\u0131 e\u015Flemesi, banka ve ERP ba\u011Flant\u0131lar\u0131n\u0131n kurulmas\u0131, kullan\u0131c\u0131 e\u011Fitimi ve ilk d\xF6nem deste\u011Fi lisansa dahildir.")), /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "S\xF6zle\u015Fme"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Nas\u0131l \xE7al\u0131\u015F\u0131r"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Dönem', '12 aylık lisans.'], ['Ölçek değişirse', 'Dönem içinde şirket, kullanıcı ya da hesap eklenebilir; fark oranlanır.'], ['Teklif', 'Kurumunuzun yapısını konuşup teklifi hazırlarız.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section section-deep",
      id: "teklif"
    }, /*#__PURE__*/React.createElement("div", {
      className: "facets",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "f3x"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap quote-wrap",
      style: {
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Teklif"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Kapasitenizi girin, teklifi haz\u0131rlayal\u0131m"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)',
        maxWidth: '44ch'
      }
    }, "\xDC\xE7 say\u0131y\u0131 girmeniz yeterli. Teklifi ayn\u0131 g\xFCn i\xE7inde g\xF6nderece\u011Fiz.")), /*#__PURE__*/React.createElement(QuoteBox, null))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
