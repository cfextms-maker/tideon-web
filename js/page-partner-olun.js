var __Page=(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  function PartnerForm() {
    const [sent, setSent] = useState(false);
    const [ok, setOk] = useState(false);
    const [hata, setHata] = useState(false);
    const [gonderiliyor, setGonderiliyor] = useState(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "section demo",
      id: "basvuru"
    }, /*#__PURE__*/React.createElement("div", {
      className: "facets",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "f1x"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap demo-grid",
      style: {
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-4"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Ba\u015Fvuru"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Partner olma talebi"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)',
        maxWidth: '46ch'
      }
    }, "\u0130\u015F orta\u011F\u0131 program\u0131m\u0131za kat\u0131lmak ve kazan\xE7 modellerimizi \xF6\u011Frenmek i\xE7in bize ula\u015F\u0131n.")), /*#__PURE__*/React.createElement("form", {
      className: "stack-4",
      name: "partner",
      method: "POST",
      "data-netlify": "true",
      "netlify-honeypot": "bot-field",
      onSubmit: e => {
        e.preventDefault();
        if (gonderiliyor) return;
        setHata(false);
        setGonderiliyor(true);
        netlifySubmit('partner', Object.fromEntries(new FormData(e.target))).then(b => {
          setGonderiliyor(false);
          return b ? setSent(true) : setHata(true);
        });
      },
      style: {
        border: '1px solid var(--border-invert)',
        borderRadius: 'var(--r-lg)',
        padding: 'var(--sp-8)',
        background: 'rgba(255,255,255,.03)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 22,
      style: {
        color: 'var(--accent-500)'
      }
    }), /*#__PURE__*/React.createElement("h3", {
      className: "h3",
      style: {
        color: '#fff'
      }
    }, "Ba\u015Fvurunuz al\u0131nd\u0131"), /*#__PURE__*/React.createElement("p", {
      className: "sm",
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "\u0130ki i\u015F g\xFCn\xFC i\xE7inde d\xF6n\xFC\u015F yap\u0131l\u0131r.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "partner"
    }), /*#__PURE__*/React.createElement("p", {
      hidden: true
    }, /*#__PURE__*/React.createElement("label", null, "Doldurmay\u0131n: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Ad soyad"), /*#__PURE__*/React.createElement("input", {
      name: "Ad soyad",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "\u015Eirket"), /*#__PURE__*/React.createElement("input", {
      name: "\u015Eirket",
      required: true
    }))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Kurumsal e-posta"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "E-posta",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Telefon"), /*#__PURE__*/React.createElement("div", {
      className: "tel"
    }, /*#__PURE__*/React.createElement("span", null, "+90"), /*#__PURE__*/React.createElement("input", {
      name: "Telefon",
      type: "tel",
      inputMode: "numeric",
      maxLength: 10,
      placeholder: "5xx xxx xx xx",
      onInput: e => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Partnerlik tipi"), /*#__PURE__*/React.createElement("select", {
      name: "Partnerlik tipi"
    }, /*#__PURE__*/React.createElement("option", null, "Dan\u0131\u015Fmanl\u0131k / uygulama"), /*#__PURE__*/React.createElement("option", null, "Sat\u0131\u015F ve bayilik"), /*#__PURE__*/React.createElement("option", null, "Teknoloji ve entegrasyon"), /*#__PURE__*/React.createElement("option", null, "Ba\u011F\u0131ms\u0131z denetim / mali m\xFC\u015Favirlik"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "\u015Eirket b\xFCy\xFCkl\xFC\u011F\xFC"), /*#__PURE__*/React.createElement("select", {
      name: "\u015Eirket b\xFCy\xFCkl\xFC\u011F\xFC"
    }, /*#__PURE__*/React.createElement("option", null, "1\u201310 ki\u015Fi"), /*#__PURE__*/React.createElement("option", null, "11\u201350 ki\u015Fi"), /*#__PURE__*/React.createElement("option", null, "51\u2013200 ki\u015Fi"), /*#__PURE__*/React.createElement("option", null, "200+ ki\u015Fi")))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "A\u011F\u0131rl\u0131k verdi\u011Finiz sekt\xF6r"), /*#__PURE__*/React.createElement("select", {
      name: "Sekt\xF6r"
    }, /*#__PURE__*/React.createElement("option", null, "\xDCretim ve sanayi"), /*#__PURE__*/React.createElement("option", null, "Enerji"), /*#__PURE__*/React.createElement("option", null, "Perakende ve da\u011F\u0131t\u0131m"), /*#__PURE__*/React.createElement("option", null, "\u0130n\u015Faat ve taahh\xFCt"), /*#__PURE__*/React.createElement("option", null, "Sekt\xF6r ba\u011F\u0131ms\u0131z"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Hazine / ERP deneyimi"), /*#__PURE__*/React.createElement("select", {
      name: "Deneyim"
    }, /*#__PURE__*/React.createElement("option", null, "Var, referans verebilirim"), /*#__PURE__*/React.createElement("option", null, "Var, s\u0131n\u0131rl\u0131"), /*#__PURE__*/React.createElement("option", null, "Yok")))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "K\u0131saca birlikte ne yapmak istiyorsunuz?"), /*#__PURE__*/React.createElement("textarea", {
      name: "Mesaj"
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
    }, "Ayd\u0131nlatma metnini"), " okudum, ki\u015Fisel verilerimin i\u015Flenmesine onay veriyorum.")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-sm",
      type: "submit",
      disabled: !ok || gonderiliyor,
      style: {
        alignSelf: 'center',
        minWidth: 180,
        justifyContent: 'center',
        opacity: ok && !gonderiliyor ? 1 : .5
      }
    }, gonderiliyor ? 'Gönderiliyor…' : 'Başvuruyu gönder'), hata ? /*#__PURE__*/React.createElement("span", {
      className: "form-err",
      role: "alert"
    }, "G\xF6nderilemedi. Ba\u011Flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.") : null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'rgba(255,255,255,.45)'
      }
    }, "Form bilgileriniz yaln\u0131zca partner ba\u015Fvurusunun de\u011Ferlendirilmesi i\xE7in kullan\u0131l\u0131r.")))));
  }
  function Page() {
    const [lang, setLang] = useState('TR');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Partner",
      title: "Bayimiz de\u011Fil, i\u015F orta\u011F\u0131m\u0131z olun",
      lead: "Tideon i\u015F ortaklar\u0131na sundu\u011Fu partner programlar\u0131 ile y\xFCksek kazan\xE7 getirisi sa\u011Flamaktad\u0131r."
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
    }, "Program"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\u0130\u015F ortakl\u0131\u011F\u0131 d\xF6rt ad\u0131mda")), /*#__PURE__*/React.createElement("div", {
      className: "pt-grid"
    }, [['Send', 'Başvuru', 'Formu doldurun; iki iş günü içinde dönüyoruz.'], ['Handshake', 'Tanışma', '45 dakika: hedef müşteri profili ve kapsam.'], ['GraduationCap', 'Sertifikasyon', 'Ücretsiz ürün eğitimi ve demo ortamı.'], ['TrendingUp', 'İlk proje', 'İlk kurulumu birlikte yapıyoruz.']].map(([ic, k, v]) => /*#__PURE__*/React.createElement("div", {
      className: "pt-card",
      key: k
    }, /*#__PURE__*/React.createElement("span", {
      className: "pt-ic"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22
    })), /*#__PURE__*/React.createElement("strong", null, k), /*#__PURE__*/React.createElement("span", null, v)))))), /*#__PURE__*/React.createElement(PartnerForm, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
