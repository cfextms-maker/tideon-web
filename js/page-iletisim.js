var __Page=(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  function ContactForm() {
    const [sent, setSent] = useState(false);
    const [ok, setOk] = useState(false);
    const [hata, setHata] = useState(false);
    const [gonderiliyor, setGonderiliyor] = useState(false);
    return /*#__PURE__*/React.createElement("section", {
      className: "section demo",
      id: "form"
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
    }, "Mesaj"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Bize ula\u015F\u0131n"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)',
        maxWidth: '46ch'
      }
    }, "T\xFCm talepleriniz i\xE7in bize ula\u015F\u0131n, ekiplerimiz en k\u0131sa s\xFCrede geri d\xF6n\xFC\u015F yapacaklar.")), /*#__PURE__*/React.createElement("form", {
      className: "stack-4",
      name: "iletisim",
      method: "POST",
      "data-netlify": "true",
      "netlify-honeypot": "bot-field",
      onSubmit: e => {
        e.preventDefault();
        if (gonderiliyor) return;
        setHata(false);
        setGonderiliyor(true);
        netlifySubmit('iletisim', Object.fromEntries(new FormData(e.target))).then(b => {
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
    }, "Mesaj\u0131n\u0131z al\u0131nd\u0131"), /*#__PURE__*/React.createElement("p", {
      className: "sm",
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "\u0130ki i\u015F g\xFCn\xFC i\xE7inde d\xF6n\xFC\u015F yap\u0131l\u0131r.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "iletisim"
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
    }, /*#__PURE__*/React.createElement("label", null, "Kurum"), /*#__PURE__*/React.createElement("input", {
      name: "Kurum"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "G\xF6reviniz"), /*#__PURE__*/React.createElement("select", {
      name: "G\xF6rev"
    }, /*#__PURE__*/React.createElement("option", null, "CFO"), /*#__PURE__*/React.createElement("option", null, "CEO"), /*#__PURE__*/React.createElement("option", null, "Genel m\xFCd\xFCr"), /*#__PURE__*/React.createElement("option", null, "Finans direkt\xF6r\xFC"), /*#__PURE__*/React.createElement("option", null, "Hazine m\xFCd\xFCr\xFC"), /*#__PURE__*/React.createElement("option", null, "Hazine uzman\u0131"), /*#__PURE__*/React.createElement("option", null, "Finans uzman\u0131"), /*#__PURE__*/React.createElement("option", null, "Muhasebe m\xFCd\xFCr\xFC"), /*#__PURE__*/React.createElement("option", null, "Mali m\xFC\u015Favir"), /*#__PURE__*/React.createElement("option", null, "Denetim"), /*#__PURE__*/React.createElement("option", null, "Bilgi teknolojileri"), /*#__PURE__*/React.createElement("option", null, "Di\u011Fer"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "T\xFCzel ki\u015Filik say\u0131s\u0131"), /*#__PURE__*/React.createElement("select", {
      name: "T\xFCzel ki\u015Filik say\u0131s\u0131"
    }, /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5"), /*#__PURE__*/React.createElement("option", null, "6"), /*#__PURE__*/React.createElement("option", null, "7"), /*#__PURE__*/React.createElement("option", null, "8"), /*#__PURE__*/React.createElement("option", null, "9"), /*#__PURE__*/React.createElement("option", null, "10"), /*#__PURE__*/React.createElement("option", null, "10+")))), /*#__PURE__*/React.createElement("div", {
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
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Konu"), /*#__PURE__*/React.createElement("select", {
      name: "Konu"
    }, /*#__PURE__*/React.createElement("option", null, "Demo talebi"), /*#__PURE__*/React.createElement("option", null, "Fiyat ve kapsam"), /*#__PURE__*/React.createElement("option", null, "Banka ve ERP entegrasyonu"), /*#__PURE__*/React.createElement("option", null, "Partnerlik"), /*#__PURE__*/React.createElement("option", null, "Destek"), /*#__PURE__*/React.createElement("option", null, "G\xFCvenlik ve KVKK"), /*#__PURE__*/React.createElement("option", null, "Bas\u0131n ve etkinlik"), /*#__PURE__*/React.createElement("option", null, "Di\u011Fer"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Mesaj\u0131n\u0131z"), /*#__PURE__*/React.createElement("textarea", {
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
        minWidth: 160,
        opacity: ok && !gonderiliyor ? 1 : .5
      }
    }, gonderiliyor ? 'Gönderiliyor…' : 'Gönder'), hata ? /*#__PURE__*/React.createElement("span", {
      className: "form-err",
      role: "alert"
    }, "G\xF6nderilemedi. Ba\u011Flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.") : null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'rgba(255,255,255,.45)'
      }
    }, "Form bilgileriniz yaln\u0131zca talebinizin yan\u0131tlanmas\u0131 i\xE7in kullan\u0131l\u0131r.")))));
  }
  function Page() {
    const [lang, setLang] = useState('TR');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "\u015Eirket",
      title: "\u0130leti\u015Fim",
      lead: "Sat\u0131\u015F, destek ve partnerlik taleplerine iki i\u015F g\xFCn\xFC i\xE7inde bir insan d\xF6n\xFC\u015F yapar."
    }), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap media-split"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "media-frame"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/iletisim-ifm.png",
      alt: "\u0130stanbul Finans Merkezi"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "stack-5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "\u0130leti\u015Fim"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "\u0130stanbul / T\xFCrkiye"), /*#__PURE__*/React.createElement("div", {
      className: "ct-lines"
    }, /*#__PURE__*/React.createElement("a", {
      href: "mailto:sales@tideon.com.tr"
    }, "sales@tideon.com.tr"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:info@tideon.com.tr"
    }, "info@tideon.com.tr")), /*#__PURE__*/React.createElement("div", {
      className: "social social-dark"
    }, [['youtube', 'YouTube', '#'], ['linkedin', 'LinkedIn', 'https://www.linkedin.com/company/tideon-tms/'], ['instagram', 'Instagram', '#']].map(([ic, label, href]) => /*#__PURE__*/React.createElement("a", {
      key: ic,
      href: href,
      target: href === '#' ? undefined : '_blank',
      rel: href === '#' ? undefined : 'noreferrer',
      "aria-label": label,
      title: label
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17
    }))))))), /*#__PURE__*/React.createElement(ContactForm, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
