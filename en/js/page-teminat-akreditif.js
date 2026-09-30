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
    }, "Solutions"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Guarantees and letters of credit"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "See the bank guarantees you have issued, the limit they block, and when you get them back, on one screen. Every expired but unreturned guarantee is credit capacity you cannot use."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Portfolio"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "To whom, how much, until when"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Every guarantee you have issued is listed by beneficiary, amount, maturity and bank. Performance, advance and bid guarantees are kept distinct by type."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Open-ended guarantees are tracked separately: one with no maturity never runs down over time \u2014 it uses your limit until it is returned.")), /*#__PURE__*/React.createElement("div", {
      className: "frag-grid"
    }, /*#__PURE__*/React.createElement(GuaranteeExposure, null), /*#__PURE__*/React.createElement(GuaranteeMaturity, null)))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limit impact"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "It expired, and your limit is still full"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "When a bank guarantee expires, your limit is not released. It is treated as in force until the original is returned to the bank, and it keeps using your non-cash limit."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "This is common in T\xFCrkiye: the beneficiary never returns the guarantee, nobody tracks it, and the limit stays blocked for years.")), /*#__PURE__*/React.createElement(OverdueLetters, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Commission"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Are you getting what you pay for in commission"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Guarantee commission is usually collected in advance every three months, and repeats as long as the guarantee is in force. For one that has not been returned, you keep paying."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Upcoming commission payments flow into the cash flow forecast on their own \u2014 on an open-ended guarantee, that means a recurring cost all the way to the end of the horizon.")), /*#__PURE__*/React.createElement(CommissionSchedule, null))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Claims"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "A claim is not a guarantee \u2014 it is a debt"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "When a guarantee is claimed, the bank pays the beneficiary and you owe the bank. From that moment you no longer hold a guarantee commitment \u2014 you hold an interest-bearing loan."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tideon treats it accordingly: a claimed guarantee comes off the non-cash limit, a cash debt arises in its place, and it enters the cash flow forecast.")), /*#__PURE__*/React.createElement(IndemnityFlow, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '66ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Letters of credit"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "A letter of credit is not a bank guarantee"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A bank guarantee is never paid in its normal course \u2014 it is returned at term end, and a claim is the exception. A letter of credit is a payment instrument: once documents comply, it is paid without fail."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "That is why a letter of credit enters the cash flow forecast and a bank guarantee does not.")), /*#__PURE__*/React.createElement(LcTimeline, null), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Two separate deadlines', 'The document presentation deadline and the payment date are tracked separately; on a deferred letter of credit there can be three to six months between them.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Document discrepancy', 'A discrepancy does not end a letter of credit; documents can be corrected and re-presented.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section section-deep"
    }, /*#__PURE__*/React.createElement("div", {
      className: "facets",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "f3x"
    })), /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-4",
      style: {
        maxWidth: '62ch',
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Why it matters"), /*#__PURE__*/React.createElement("h2", {
      className: "h2",
      style: {
        color: '#fff'
      }
    }, "Off balance sheet, but not free of cash impact"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "Bank guarantees don\u2019t show up on the balance sheet, but they consume your credit capacity. If a bank gives you a TRY 100 million limit and TRY 40 million of it sits in unreturned guarantees, your real capacity is TRY 60 million."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-invert-muted)'
      }
    }, "Tideon keeps this distinction on every screen: a non-cash limit never enters the liquidity buffer, because it creates no cash."))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let\u2019s work out the blocked limit with your own guarantee portfolio",
      lead: "In the meeting we calculate together how much of your limit unreturned guarantees are holding."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
