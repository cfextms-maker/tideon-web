var __Page=(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const INCLUDED = ['Cash position and consolidated view', 'Cash flow forecasting and scenarios', 'Daily positioning', 'Liquidity buffer', 'Loan and deposit portfolio', 'Repayment schedule generation', 'Credit limits', 'Bank guarantees and letters of credit', 'Intercompany loans', 'Pooling and sweep', 'Cheque and promissory note portfolio', 'Discount simulator', 'FX exposure and derivatives', 'Risk limits', 'Covenant monitoring', 'Financial ratios', 'Bank reconciliation', 'Rule engine and categorisation', 'Chart of accounts mapping', 'Cash flow reporting', 'Payment batches and multi-signature approval', 'Counterparty management'];
  const SHAPES = [['Legal entity', '1', '5', '15+'], ['Users', '5', '15', '40+'], ['Bank accounts', '15', '50', '150+']];
  const DIMS = [['sirket', 'Legal entity', 1, 1, 60], ['kullanici', 'Users', 5, 1, 400], ['hesap', 'Bank accounts', 15, 1, 900]];
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
      "aria-label": label + ' decrease',
      onClick: () => onChange(Math.max(min, value - 1))
    }, "\u2212"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: value,
      min: min,
      max: max,
      onChange: e => onChange(Math.min(max, Math.max(min, Number(e.target.value) || min)))
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": label + ' increase',
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
      })), /*#__PURE__*/React.createElement("strong", null, "Request received"), /*#__PURE__*/React.createElement("span", null, v.sirket, " \u015Firket \xB7 ", v.kullanici, " kullan\u0131c\u0131 \xB7 ", v.hesap, " hesap"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "btn btn-ghostDark btn-sm",
        onClick: () => setSent(false)
      }, "New request"));
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
          'Legal entity': v.sirket,
          'Users': v.kullanici,
          'Bank accounts': v.hesap,
          'E-posta': mail,
          'Data protection consent': 'Confirmed'
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
    }, /*#__PURE__*/React.createElement("label", null, "Do not fill in: ", /*#__PURE__*/React.createElement("input", {
      name: "bot-field"
    }))), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "Legal entity",
      value: v.sirket
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "Users",
      value: v.kullanici
    }), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "Bank accounts",
      value: v.hesap
    }), /*#__PURE__*/React.createElement("div", {
      className: "qb-presets"
    }, [['Single entity', 1, 5, 15], ['Mid-sized', 5, 15, 50], ['Large holding', 15, 40, 150]].map(([ad, a, b, c]) => /*#__PURE__*/React.createElement("button", {
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
      name: "Data protection consent",
      value: "Confirmed",
      required: true,
      checked: ok,
      onChange: e => setOk(e.target.checked)
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("a", {
      href: "kvkk-aydinlatma-metni.html",
      target: "_blank",
      rel: "noreferrer"
    }, "the data protection notice"), "  \u2014 I have read it and consent to the processing of my personal data.")), /*#__PURE__*/React.createElement("div", {
      className: "qb-mail"
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "E-posta",
      required: true,
      placeholder: "Work email",
      value: mail,
      onChange: e => setMail(e.target.value)
    }), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      type: "submit",
      disabled: !ok || gonderiliyor,
      style: {
        opacity: ok && !gonderiliyor ? 1 : .5
      }
    }, gonderiliyor ? 'Sending…' : 'Request a quote')), hata ? /*#__PURE__*/React.createElement("span", {
      className: "form-err",
      role: "alert"
    }, "Could not send. Check your connection and try again.") : null, /*#__PURE__*/React.createElement("span", {
      className: "qb-note"
    }, "The capacity you enter is used only to prepare your quote."));
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
    }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "No complicated packages"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "One platform, every capability. Price is set by three things: how many entities, how many users, how many bank accounts. You never pay for modules you don\u2019t use, because there are no modules."))), /*#__PURE__*/React.createElement("section", {
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
    }, "Three dimensions"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What sets the price")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Number of legal entities"), /*#__PURE__*/React.createElement("span", null, "Your holding company and its subsidiaries. Each entity is defined with its own chart of accounts, rate policy and permissions.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Number of users"), /*#__PURE__*/React.createElement("span", null, "All roles included \u2014 treasury, accounting, audit, management. No extra charge per role.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Number of connected bank accounts"), /*#__PURE__*/React.createElement("span", null, "The number of accounts connected. What counts is how many accounts are read, not how many banks you work with."))))), /*#__PURE__*/React.createElement("section", {
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
    }, "Example configurations"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What scale looks like")), /*#__PURE__*/React.createElement("div", {
      className: "shape-grid"
    }, [['Single entity', ['1', '5', '15']], ['Mid-sized group', ['5', '15', '50']], ['Large holding', ['15+', '40+', '150+']]].map(([ad, v]) => /*#__PURE__*/React.createElement("div", {
      key: ad,
      className: "shape"
    }, /*#__PURE__*/React.createElement("strong", null, ad), SHAPES.map((r, k) => /*#__PURE__*/React.createElement("div", {
      key: r[0],
      className: "shape-row"
    }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("b", null, v[k])))))), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "If your structure differs from these, we prepare the quote accordingly."), /*#__PURE__*/React.createElement("a", {
      className: "btn btn-primary",
      href: "#teklif",
      style: {
        alignSelf: 'center'
      }
    }, "Request a quote ", /*#__PURE__*/React.createElement(Icon, {
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
    }, "Scope"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Everything included")), /*#__PURE__*/React.createElement("ul", {
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
    }, "Nothing on this list carries an extra charge."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Services"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Onboarding is included"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Setup, chart of accounts mapping, establishing bank and ERP connections, user training and first-period support are included in the licence.")), /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Contract"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "How it works"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Period', 'A 12-month licence.'], ['If scale changes', 'Entities, users or accounts can be added mid-term; the difference is pro-rated.'], ['Quote', 'We discuss your structure and prepare the quote.']]
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
    }, "Quote"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Enter your capacity and we\u2019ll prepare the quote"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)',
        maxWidth: '44ch'
      }
    }, "Just three numbers. We\u2019ll send the quote the same day.")), /*#__PURE__*/React.createElement(QuoteBox, null))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
