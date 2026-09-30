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
    }, "Solutions"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "ERP and accounting integrations"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Ledger movements, invoices, repayment schedules, journal entries and the trial balance are read from the ERP. The cash forecast is fed by these records, financial statements are derived from the trial balance, and reconciliation follows the chart of accounts. An unmapped entry never enters any total.")), /*#__PURE__*/React.createElement(ErpFlow, null))), /*#__PURE__*/React.createElement(ErpStrip, {
      showCta: false
    }), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-head",
      style: {
        maxWidth: '58ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "ERP and accounting"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "ERP systems ready to connect"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The same set is read from every system: ledger movements, invoices, journal entries and trial balance. Reading is one-way; Tideon never changes ERP records. Financial statements are derived from the trial balance, and unmapped entries never enter the totals. The transfer channel (REST service, file, or read-only database) is decided during setup.")), /*#__PURE__*/React.createElement(ErpCards, null), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "REST service"), "Reading ledger, invoice, journal and trial balance data"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Read-only database"), "REST service olmayan kurulumlar i\xE7in"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "File transfer"), "Scheduled job or SFTP")))), /*#__PURE__*/React.createElement("section", {
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
    }, "Onboarding"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Connected in four steps")), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Connection', 'An API, file folder, or read-only database access is set up.'], ['2', 'Chart of accounts mapping', 'Chart-of-accounts codes are mapped to bank accounts.'], ['3', 'Verification', 'Unmapped entries are kept in a separate list and never enter the totals.'], ['4', 'Monitoring', 'If a transfer is delayed, the affected forecast and reconciliation areas are flagged.']]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Reconciliation"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Bank statement and ledger entry"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Matching per account', 'Every bank account is mapped to a chart-of-accounts sub-account.'], ['Variance listesi', 'Unmatched entries are listed with their amount and date difference.'], ['FX difference split', 'FX-driven differences are shown separately and never confused with a real gap.'], ['Closing entry', 'Generating a ledger entry file for an approved reconciliation is on the roadmap.']]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Limits"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What we do not do"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['The ERP record is never changed', 'Tideon never writes to the ERP; output is delivered as a file.'], ['Missing data is never filled in', 'An entry that cannot be read is never guessed at; it is flagged as missing.'], ['The chart of accounts is never assumed', 'No account enters reconciliation before its mapping is set up.'], ['One-way transfer', 'Two-way synchronisation is out of scope.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let\u2019s plan the setup together with your own ERP",
      lead: "In the meeting we say clearly which modules are ready and which require onboarding."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
