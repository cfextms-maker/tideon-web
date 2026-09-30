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
    }, "Payments"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "Build the payment batch, send it for approval by amount band, then deliver the approved instruction to the bank. An unapproved instruction cannot enter a batch; the same item can never enter two.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Payment batches",
      note: "segregation of duties \xB7 multi-signature approval by amount band"
    }, /*#__PURE__*/React.createElement(PaymentPackages, {
      count: 2
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Instruction sources"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Instructions from four sources"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Instructions come from four sources; they merge into one batch and each stays on record with its source.")), /*#__PURE__*/React.createElement(PaySources, null)), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Source', 'What it delivers', 'Fields entered'],
      rows: [['Manual entry', 'Single instruction', 'Payee, IBAN, amount, currency, value date'], ['Planned cash flow', 'Selected from items already in the forecast', 'Item selection and value date'], ['Loan instalments', 'Instalments coming due, from the repayment schedule', 'Automatic; only the value date is confirmed'], ['Payables coming due', 'Invoices from the ERP', 'The counterparty IBAN is filled in automatically']]
    }), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Once an item enters a batch it is bound to its source; the same instalment or invoice cannot enter a second batch."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Approval"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Multi-signature by amount band"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "One, two or three signatures are required depending on the thresholds. The number needed is frozen at request time and cannot be lowered later by changing the threshold."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A requester cannot sign their own batch; the rule is enforced in the database. Changing the band table itself is also subject to approval.")), /*#__PURE__*/React.createElement(PayApproval, null)), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Segregation of duties"), /*#__PURE__*/React.createElement("h4", null, "The preparer cannot approve"), /*#__PURE__*/React.createElement("p", null, "Even if the user who built the batch is on the signature list, they cannot approve their own batch. The rule cannot be bypassed from the application layer.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Frozen signature count"), /*#__PURE__*/React.createElement("h4", null, "The count is fixed at request time"), /*#__PURE__*/React.createElement("p", null, "The band table in force when the batch was opened applies. Whether the threshold is later raised or lowered, that batch keeps its signature count.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Configuration error"), /*#__PURE__*/React.createElement("h4", null, "If there are too few authorised signatories"), /*#__PURE__*/React.createElement("p", null, "The batch opens but cannot be approved. It does not sit silently in the queue; it is reported as a configuration error."))))), /*#__PURE__*/React.createElement("section", {
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
    }, "Delivery"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Two routes: file or direct delivery")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "conn-box stack-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h3"
    }, "File"), /*#__PURE__*/React.createElement("p", {
      className: "sm muted"
    }, "ISO 20022 pain.001 and bank-format files are generated; you upload them to your bank. The download is recorded \u2014 an approved batch that was never downloaded lands on the attention list."), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, ['pain.001', 'Bank-specific file', 'Download record'].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "chip"
    }, c)))), /*#__PURE__*/React.createElement("div", {
      className: "conn-box stack-4"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h3"
    }, "Direct delivery"), /*#__PURE__*/React.createElement("p", {
      className: "sm muted"
    }, "An approved instruction is delivered to the bank through a licensed open banking provider. Tideon holds no payment initiation licence; it produces the instruction and hands it to the provider."), /*#__PURE__*/React.createElement("div", {
      className: "chips"
    }, ['Licensed provider', 'Payment initiation', 'Per bank'].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      className: "chip"
    }, c))))), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Which route is used is decided per bank and per organisation."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Response tracking"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Status per instruction"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The bank response is processed per instruction. If one IBAN in a batch is wrong, only that instruction is rejected and the rest go through."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Accepted and received are not the same \u2014 the bank may have received an instruction without deciding on it yet. The two are shown separately.")), /*#__PURE__*/React.createElement(PayReplies, null)), /*#__PURE__*/React.createElement(SpecTable, {
      head: ['Status', 'What it means', 'Next step'],
      rows: [['Delivered', 'The instruction reached the bank', 'Awaiting response'], ['Received', 'The bank has logged the instruction but not decided', 'Stays under watch'], ['Accepted', 'The bank will execute the transaction', 'Matched against the account transaction'], ['Rejected', 'A single instruction did not go through', 'The reason is recorded and the item can join a new batch']]
    }))), /*#__PURE__*/React.createElement("section", {
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
    }, "Limits"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What we do not do")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['We do not hold a payment initiation licence', 'Instructions are delivered through a licensed provider.'], ['An approved batch cannot be edited', 'A change produces a new batch; it can be cancelled but never deleted.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['No total is given in mixed currencies', 'If any line cannot be converted, no total is shown and approval falls to the highest band.'], ['System approval is not bank approval', 'Whoever approves in the system may not be on the bank’s signature circular; the two authorities are kept separate.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let\u2019s build the payment flow with your own approval structure",
      lead: "In the meeting we define your amount bands and signatory list together."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
