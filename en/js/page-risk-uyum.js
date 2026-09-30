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
    }, "Platform"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Measure your risk today, don\u2019t learn it tomorrow"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "FX, interest rate, counterparty and covenant risk on one screen. When a threshold is breached you do not wait for the morning report \u2014 the screen tells you.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Covenants",
      note: "4 agreements \xB7 9 covenants",
      flush: true
    }, /*#__PURE__*/React.createElement(CovenantTable, null)))), /*#__PURE__*/React.createElement("section", {
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
    }, "FX risk"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "How large is your open position, and how much of it is hedged"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Your assets and liabilities by currency, the hedged portion and the remaining net open position, all on one screen."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Your derivative contracts \u2014 forwards, swaps, options \u2014 are listed with maturity and counterparty. The maturity ladder shows in advance that a position hedged today will be open in three months.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Open position by currency",
      note: "assets \xB7 liabilities \xB7 net \xB7 TRY million"
    }, /*#__PURE__*/React.createElement(FxDiverging, null)), /*#__PURE__*/React.createElement("div", {
      className: "claims-num"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Live net position"), /*#__PURE__*/React.createElement("p", null, "By currency, at a glance.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "Hedge coverage"), /*#__PURE__*/React.createElement("p", null, "How much is hedged, and with which instrument.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "When the hedge expires"), /*#__PURE__*/React.createElement("p", null, "What the open position becomes once the hedge ends."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limits"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Let the system watch your own rules"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bank concentration, counterparty risk, open position, minimum cash buffer \u2014 define the thresholds in your treasury policy and Tideon does the measuring."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A threshold breached today never looks like one due to breach next week. You act on the first today and plan for the second.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Bank concentration",
      note: "threshold 40% \xB7 single bank"
    }, /*#__PURE__*/React.createElement(Concentration, null))), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Policy thresholds"), "Your organisation\u2019s own limits, per legal entity"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Early warning"), "Thresholds due to breach in the projection are flagged in advance"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Approved exception"), "Deliberate overruns are recorded without cluttering the breach list")))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Covenants"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Are you keeping the promise you made to the bank"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The financial covenants in your loan agreements \u2014 net debt/EBITDA, interest coverage, current ratio \u2014 are measured period by period, with the distance to each threshold visible."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A covenant approaching its threshold is noticed before one that has been breached. You talk to the bank when you choose to, not when you have to.")), /*#__PURE__*/React.createElement(CovenantDetail, {
      parts: ['hd', 'hist', 'foot']
    })), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Distance to threshold"), "How much headroom is left on each covenant"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Measurement calendar"), "Which covenant is tested when"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "View by agreement"), "Which loan brings which covenants")))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Financial ratios"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "The same ratios, the same definitions, every month"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Liquidity, leverage, profitability and cash conversion cycle ratios are derived from your chart of accounts. The argument about whose formula to use is over."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The three components of the cash conversion cycle \u2014 receivables, inventory and payables turnover \u2014 are tracked separately. If the cycle lengthens, you see which one caused it.")), /*#__PURE__*/React.createElement(RatioBand, null))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-4",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Why it matters"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "A risk you do not measure is not a risk you do not have"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "If a covenant cannot be tested, Tideon does not say \u201Ccompliant\u201D \u2014 it says \u201Ccould not be tested\u201D. An untested covenant is riskier than a breached one, because it means nobody is watching."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The same principle holds for every figure: a value that cannot be calculated stays empty and says why.")))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let\u2019s define your policy thresholds together",
      lead: "In the meeting we set up your covenants and limits and look at the distance to each threshold."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
