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
      title: "Treasury and cash management",
      lead: "See group cash on one screen and spot a squeeze weeks ahead. It shows not how much money you hold, but how much of it you can actually use.",
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
    }, "Cash visibility"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Not your total balance \u2014 the cash you can actually use"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Balances are read several times a day. Blocked amounts, pledged balances and non-cash limits are deducted from the total \u2014 available cash is what remains after all of them."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A value that cannot be read is never treated as zero: the account is left out of the total, and which account was excluded and why is written beneath the figure.")), /*#__PURE__*/React.createElement("div", {
      className: "frag-grid"
    }, /*#__PURE__*/React.createElement(PfCard, {
      title: "Balances by account",
      note: "9 accounts \xB7 grouped by legal entity",
      flush: true
    }, /*#__PURE__*/React.createElement(AccountsTable, null)), /*#__PURE__*/React.createElement(PfCard, {
      title: "Bank concentration",
      note: "threshold 40% \xB7 single bank"
    }, /*#__PURE__*/React.createElement(Concentration, null))), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Entity and bank breakdown', 'The same definition applies from the consolidated view down to a single account; permissions are granted per legal entity.'], ['Blocked, pledged and available split', 'Available cash is net of blocked and pledged amounts, and each deduction is shown separately.'], ['Currency and FX open position', 'Currency breakdown and open position on one screen. A separate rate policy per transaction type; no amount is converted before a rate arrives.'], ['Threshold and concentration monitoring', 'Single-bank share, counterparty and open position thresholds are monitored. A threshold breached today is marked red; one projected to breach is marked amber — an actual breach never looks like an expected one.']]
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
    }, "Forecast"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Cash flow forecast"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "You choose the forecast horizon \u2014 weekly, monthly or quarterly. The forecast draws on three sources: known obligations (loan instalments, cheques and notes coming due, planned payments), historical transaction patterns and manually entered items."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Actuals and forecast are drawn separately; forecast bars carry a hatch pattern. When an assumption changes, you see which period changed and why.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Weekly cash movement and closing balance",
      note: "weekly breakdown \xB7 TRY million"
    }, /*#__PURE__*/React.createElement(ForecastWeeks, null)), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Scenario and assumption record', 'Collection delay, FX and interest rate assumptions are stored as scenarios.'], ['Buffer threshold alert', 'Any period whose closing balance falls below the buffer is flagged in advance.'], ['Forecast accuracy', 'The deviation of past forecasts is measured and reported. How far the model can be trusted is stated as a number.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Revision comparison', 'The difference from the previous forecast is reported line by line.'], ['Negative closing', 'Any period that turns negative is shown separately, with the lowest point and its date; the amount is never hidden.'], ['Known obligations enter automatically', 'Loan instalments, cheques and notes coming due, guarantee commissions and planned payments flow into the forecast on their own — no manual entry needed.']]
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
    }, "Pooling and intercompany funding"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Sweep setup, intercompany loans and contractual rates")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Structure', 'Scope', 'Tracking'],
      rows: [['Physical pooling', 'Transfer plan between the master and sub-accounts', 'Transfer record and its reason'], ['Notional pooling', 'Interest optimisation without merging balances', 'Interest allocation table'], ['Intercompany loan', 'Intercompany payables and receivables, contractual rate', 'Maturity, interest accrual and netting'], ['Sweep threshold', 'Target balance per account', 'Threshold breaches and idle cash']]
    }), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "If no contractual rate is declared, the amount is not converted at the market rate \u2014 so two entities do not reconcile differently every day."), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Connection', 'Bank accounts are mapped and their freshness monitored.'], ['2', 'Rule', 'Target balance and sweep threshold are defined.'], ['3', 'Deviation', 'Idle cash and deviation from target are shown.'], ['4', 'Approval', 'After multi-signature approval by amount band, it drops into the instruction batch.']]
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
    }, "Bank coverage"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Balance and transaction data arrive through ready connections")), /*#__PURE__*/React.createElement(BankLogoRow, {
      ids: ['ziraat', 'is', 'garanti', 'yapikredi', 'akbank', 'vakif', 'halk', 'qnb', 'deniz', 'teb'],
      pattern: [4, 3, 3],
      cap: false
    }))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Want to see your group\u2019s cash on one screen?",
      lead: "In a 45-minute call we walk through the setup with your own account structure."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
