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
    }, "Message"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)',
        maxWidth: '46ch'
      }
    }, "Reach out for any request \u2014 our teams will get back to you as soon as possible.")), /*#__PURE__*/React.createElement("form", {
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
    }, "Your message has been received"), /*#__PURE__*/React.createElement("p", {
      className: "sm",
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "We will get back to you within two business days.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "iletisim"
    }), /*#__PURE__*/React.createElement("p", {
      hidden: true
    }, /*#__PURE__*/React.createElement("label", null, "Do not fill in: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
      name: "Full name",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Organisation"), /*#__PURE__*/React.createElement("input", {
      name: "Organisation"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Your role"), /*#__PURE__*/React.createElement("select", {
      name: "Role"
    }, /*#__PURE__*/React.createElement("option", null, "CFO"), /*#__PURE__*/React.createElement("option", null, "CEO"), /*#__PURE__*/React.createElement("option", null, "Managing director"), /*#__PURE__*/React.createElement("option", null, "Finance director"), /*#__PURE__*/React.createElement("option", null, "Treasury manager"), /*#__PURE__*/React.createElement("option", null, "Treasury specialist"), /*#__PURE__*/React.createElement("option", null, "Finance specialist"), /*#__PURE__*/React.createElement("option", null, "Accounting manager"), /*#__PURE__*/React.createElement("option", null, "Chartered accountant"), /*#__PURE__*/React.createElement("option", null, "Audit"), /*#__PURE__*/React.createElement("option", null, "Information technology"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Number of legal entities"), /*#__PURE__*/React.createElement("select", {
      name: "Number of legal entities"
    }, /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"), /*#__PURE__*/React.createElement("option", null, "5"), /*#__PURE__*/React.createElement("option", null, "6"), /*#__PURE__*/React.createElement("option", null, "7"), /*#__PURE__*/React.createElement("option", null, "8"), /*#__PURE__*/React.createElement("option", null, "9"), /*#__PURE__*/React.createElement("option", null, "10"), /*#__PURE__*/React.createElement("option", null, "10+")))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Work email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "E-posta",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("div", {
      className: "tel"
    }, /*#__PURE__*/React.createElement("span", null, "+90"), /*#__PURE__*/React.createElement("input", {
      name: "Phone",
      type: "tel",
      inputMode: "numeric",
      maxLength: 10,
      placeholder: "5xx xxx xx xx",
      onInput: e => {
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      }
    })))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Subject"), /*#__PURE__*/React.createElement("select", {
      name: "Subject"
    }, /*#__PURE__*/React.createElement("option", null, "Demo request"), /*#__PURE__*/React.createElement("option", null, "Pricing ve kapsam"), /*#__PURE__*/React.createElement("option", null, "Bank ve ERP entegrasyonu"), /*#__PURE__*/React.createElement("option", null, "Partnership"), /*#__PURE__*/React.createElement("option", null, "Support"), /*#__PURE__*/React.createElement("option", null, "Security and data protection"), /*#__PURE__*/React.createElement("option", null, "Press and events"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Your message"), /*#__PURE__*/React.createElement("textarea", {
      name: "Message"
    })), /*#__PURE__*/React.createElement("label", {
      className: "consent"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "Data protection consent",
      value: "Confirmed",
      required: true,
      checked: ok,
      onChange: e => setOk(e.target.checked)
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
      href: "kvkk-aydinlatma-metni.html",
      target: "_blank",
      rel: "noreferrer"
    }, "the data protection notice"), "  \u2014 I have read it and consent to the processing of my personal data.")), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-sm",
      type: "submit",
      disabled: !ok || gonderiliyor,
      style: {
        alignSelf: 'center',
        minWidth: 160,
        opacity: ok && !gonderiliyor ? 1 : .5
      }
    }, gonderiliyor ? 'Sending…' : 'Send'), hata ? /*#__PURE__*/React.createElement("span", {
      className: "form-err",
      role: "alert"
    }, "Could not send. Check your connection and try again.") : null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'rgba(255,255,255,.45)'
      }
    }, "Your details are used only to respond to your request.")))));
  }
  function Page() {
    const [lang, setLang] = useState('TR');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Company",
      title: "Contact",
      lead: "A person responds to sales, support and partnership enquiries within two business days."
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
    }, "Contact"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Istanbul, T\xFCrkiye"), /*#__PURE__*/React.createElement("div", {
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
