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
    }, "Open banking and bank integration"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Ready one-to-one connections with more than twenty banks in T\xFCrkiye. Intraday balances and transactions come from open banking services, reconciliation from statement files, and payment instructions as bank-format files.")), /*#__PURE__*/React.createElement(ConnectFlow, null))), /*#__PURE__*/React.createElement("section", {
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
    }, "Ready connections"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Connections ready with more than twenty banks"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "On every ready connection, what comes standard is kept separate from what requires onboarding. In the meeting we mark, item by item, which bank delivers which item and how long it takes.")), /*#__PURE__*/React.createElement(BankWall, null), /*#__PURE__*/React.createElement(ScopeLists, null))), /*#__PURE__*/React.createElement("section", {
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
    }, "Technology"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Four channels, one data model"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Whichever channel it comes from, data lands in the same model: account, amount, currency, value date, counterparty, source and read time. An entry with an unclear source never enters the totals.")), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Channel', 'Technology', 'Use', 'Freshness'],
      rows: [['Open banking services', 'REST · OAuth 2.0 · mTLS', 'Intraday balance and transactions (including MT942)', 'Intraday, minutes'], ['End-of-day statement', 'MT940 · camt.053 · bank-specific', 'Reconciliation', 'End of day'], ['Payment instruction', 'pain.001 · bank-specific file', 'Instruction batch generation', 'On request'], ['Corporate channel', 'SFTP · scheduled job', 'Bulk file transfer', 'Scheduled']]
    }), /*#__PURE__*/React.createElement(StepFlow, {
      steps: [['1', 'Authorisation', 'Corporate access and a certificate are set up on the bank side.'], ['2', 'Account mapping', 'Every account is mapped to a legal entity and a chart-of-accounts code.'], ['3', 'Verification', 'No account enters the totals before its mapping is verified.'], ['4', 'Monitoring', 'Every affected field is flagged when a connection drops.']]
    }))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Security"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Connection security and audit trail"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['mTLS and signed requests', 'Connections to bank services use mutual certificates.'], ['Key management', 'Certificates and keys are kept separate per organisation, with expiry tracked.'], ['Role-based permissions', 'The user who sets up a connection cannot approve payments; the rule is enforced at the database level.'], ['Audit trail', 'Every read and every file generated is timestamped on record.']]
    })), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Outage behaviour"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What happens when a connection drops"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Data is never invented', 'The last successful read is used and marked with a hatch pattern.'], ['Impact list', 'Every field affected by a dropped connection is flagged.'], ['Excluded from the total', 'A value that cannot be read is never treated as zero; the account is excluded from the total.'], ['Backfill', 'When the connection returns, the missing days are backfilled automatically.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Types of integration"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Four different integration routes"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Open banking services', 'REST · OAuth 2.0 · mTLS. Intraday balances and transactions, MT942 dahil.'], ['File transfer', 'SFTP or a scheduled job; end-of-day statements and bulk instructions.'], ['REST service (ERP)', 'Reading ledger, invoice, journal and trial balance data.'], ['Read-only database', 'For ERP setups without a REST service.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let\u2019s check the scope together against your own bank list",
      lead: "In the meeting we say clearly which banks are ready and which require onboarding."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
