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
    }, "Platform"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "See the real cost of your debt"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Loans, deposits, bank guarantees and letters of credit in one portfolio. Interest, banking tax and commission sit in separate columns \u2014 never buried inside the instalment."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Loan and deposit portfolio"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "All your debt, one table"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Every loan carries its own repayment structure: annuity, equal principal, bullet, grace period. The schedule is generated from the contract terms \u2014 no manual spreadsheet needed."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "On floating-rate loans, the period after the next reset is calculated on an assumption \u2014 and that assumption sits on top of the figure.")), /*#__PURE__*/React.createElement(LoanSchedule, null)), /*#__PURE__*/React.createElement(PfCard, {
      title: "Loan portfolio",
      note: "5 loans \xB7 anapara ve faiz",
      flush: true
    }, /*#__PURE__*/React.createElement(LoanPortfolio, null)))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '64ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limits"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Don\u2019t guess how much more you can borrow"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Cash and non-cash limits are tracked separately. Available limit is part of the liquidity buffer, so it makes sense on the same screen as your cash position.")), /*#__PURE__*/React.createElement("div", {
      className: "claims-num"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Cash and non-cash kept apart"), /*#__PURE__*/React.createElement("p", null, "A bank guarantee limit never eats into a cash loan limit.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "A limit nearing its threshold shows up early"), /*#__PURE__*/React.createElement("p", null, "On a revolving loan, utilisation is flagged as it approaches the threshold.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Liquidity buffer"), /*#__PURE__*/React.createElement("p", null, "Cash plus available limit; each can also be read on its own."))))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Bank guarantees and letters of credit"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Find the limit that has sat blocked for years"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "An expired guarantee does not release your limit \u2014 it stays in force until the original is returned to the bank. In most groups that gap adds up to millions in dead limit."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "When a claim comes in, the whole flow runs on record from start to finish.")), /*#__PURE__*/React.createElement(GuaranteeLetters, null))), /*#__PURE__*/React.createElement("section", {
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
    }, "Intercompany funding"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Keep intercompany debt in one ledger")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Structure', 'Scope', 'Tracking'],
      rows: [['Intercompany loan', 'Intercompany payables and receivables, contractual rate', 'Maturity, interest accrual and netting'], ['Pooling', 'Physical and notional pooling', 'Interest allocation table'], ['Sweep', 'Target balance per account', 'Idle cash and deviation from target'], ['Deposits', 'Time deposit ve vadesiz, stopaj dahil', 'Yield and maturity calendar']]
    }))), /*#__PURE__*/React.createElement(PageCta, {
      title: "See the portfolio with your own loan agreements",
      lead: "In the meeting we generate one of your loan schedules together."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
