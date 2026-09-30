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
    }, "Application"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Partnership application"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)',
        maxWidth: '46ch'
      }
    }, "Get in touch to join our partner programme and learn about our earning models.")), /*#__PURE__*/React.createElement("form", {
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
    }, "Your application has been received"), /*#__PURE__*/React.createElement("p", {
      className: "sm",
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "We will get back to you within two business days.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "form-name",
      value: "partner"
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
    }, /*#__PURE__*/React.createElement("label", null, "Company"), /*#__PURE__*/React.createElement("input", {
      name: "Company",
      required: true
    }))), /*#__PURE__*/React.createElement("div", {
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
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Partnership tipi"), /*#__PURE__*/React.createElement("select", {
      name: "Partnership tipi"
    }, /*#__PURE__*/React.createElement("option", null, "Consulting / implementation"), /*#__PURE__*/React.createElement("option", null, "Sales and reseller"), /*#__PURE__*/React.createElement("option", null, "Technology and integration"), /*#__PURE__*/React.createElement("option", null, "Independent audit / chartered accountancy"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Company size"), /*#__PURE__*/React.createElement("select", {
      name: "Company size"
    }, /*#__PURE__*/React.createElement("option", null, "1\u201310 people"), /*#__PURE__*/React.createElement("option", null, "11\u201350 people"), /*#__PURE__*/React.createElement("option", null, "51\u2013200 people"), /*#__PURE__*/React.createElement("option", null, "200+ people")))), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Your focus sector"), /*#__PURE__*/React.createElement("select", {
      name: "Sekt\xF6r"
    }, /*#__PURE__*/React.createElement("option", null, "Manufacturing and industry"), /*#__PURE__*/React.createElement("option", null, "Energy"), /*#__PURE__*/React.createElement("option", null, "Retail and distribution"), /*#__PURE__*/React.createElement("option", null, "Construction and contracting"), /*#__PURE__*/React.createElement("option", null, "Sector-agnostic"))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Treasury / ERP experience"), /*#__PURE__*/React.createElement("select", {
      name: "Deneyim"
    }, /*#__PURE__*/React.createElement("option", null, "Yes, I can provide a reference"), /*#__PURE__*/React.createElement("option", null, "Yes, limited"), /*#__PURE__*/React.createElement("option", null, "None")))), /*#__PURE__*/React.createElement("div", {
      className: "field"
    }, /*#__PURE__*/React.createElement("label", null, "Briefly, what would you like to do together?"), /*#__PURE__*/React.createElement("textarea", {
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
        minWidth: 180,
        justifyContent: 'center',
        opacity: ok && !gonderiliyor ? 1 : .5
      }
    }, gonderiliyor ? 'Sending…' : 'Submit application'), hata ? /*#__PURE__*/React.createElement("span", {
      className: "form-err",
      role: "alert"
    }, "Could not send. Check your connection and try again.") : null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--fs-xs)',
        color: 'rgba(255,255,255,.45)'
      }
    }, "Your details are used only to evaluate the partnership application.")))));
  }
  function Page() {
    const [lang, setLang] = useState('TR');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement(PageHero, {
      eyebrow: "Partner",
      title: "Not a reseller. A partner.",
      lead: "Tideon\u2019s partner programmes are built to deliver strong earnings for its partners."
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
    }, "Programme"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Partnership in four steps")), /*#__PURE__*/React.createElement("div", {
      className: "pt-grid"
    }, [['Send', 'Application', 'Fill in the form; we get back to you within two business days.'], ['Handshake', 'Introduction call', '45 minutes: target customer profile and scope.'], ['GraduationCap', 'Certification', 'Free product training and a demo environment.'], ['TrendingUp', 'First project', 'We do the first setup together.']].map(([ic, k, v]) => /*#__PURE__*/React.createElement("div", {
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
