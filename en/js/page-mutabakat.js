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
      className: "wrap stack-5"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow eyebrow-invert"
    }, "Reconciliation and accounting"), /*#__PURE__*/React.createElement("h1", {
      className: "sub-h1"
    }, "Period-end should take one morning, not three days"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "You see the gap between the bank and the ERP every morning, not on the last day of the month. Which item it comes from, who should look at it, how much of it is a real problem \u2014 all on one screen."))), /*#__PURE__*/React.createElement("section", {
      className: "section",
      style: {
        paddingTop: 'var(--sp-10)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-4"
    }, /*#__PURE__*/React.createElement(BalanceBridge, null), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "The bridge closes itself every morning: the gap must equal the total of unreconciled items. If it does not, data is missing, and it tells you so."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claims-num"
    }, /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("h3", null, "The system closes the easy part; the decisions are yours"), /*#__PURE__*/React.createElement("p", null, "Entries whose amount and date match are reconciled automatically. A low-confidence match stays a suggestion \u2014 so your time goes to the items that genuinely need a look.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("h3", null, "An FX difference never misleads you"), /*#__PURE__*/React.createElement("p", null, "On a foreign-currency account, most of the gap comes from the exchange rate. The FX difference is calculated separately, so you see clearly how much of the gap is a real problem.")), /*#__PURE__*/React.createElement("div", {
      className: "claim-big"
    }, /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("h3", null, "It is clear who stands behind every figure"), /*#__PURE__*/React.createElement("p", null, "The method, confidence and approver of every match stay on record. When an audit comes, you never have to search backwards."))))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "strip-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '52ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Matching queue"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Suggestions first, then a decision")), /*#__PURE__*/React.createElement("p", {
      className: "sm muted",
      style: {
        maxWidth: '38ch',
        margin: 0
      }
    }, "High-confidence suggestions arrive pre-selected. Approve them in bulk, set aside a line you are unsure of, and turn a recurring pattern into a rule.")), /*#__PURE__*/React.createElement(MatchTable, null))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "strip-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '52ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Variance listesi"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "The gap runs both ways, and both are visible")), /*#__PURE__*/React.createElement("p", {
      className: "sm muted",
      style: {
        maxWidth: '38ch',
        margin: 0
      }
    }, "A fee at the bank that never made it into the ledger is not the same as a collection in the ledger that never hit the bank. The two sit in separate lists, each with its own ageing.")), /*#__PURE__*/React.createElement(UnmatchedPair, null), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "An unmatched raw counterparty name is never linked to a similar-sounding company \u2014 a receivable posted to the wrong company would quietly stay wrong, so we keep it in the queue instead."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '62ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "On the accounting side"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "See the same balance sheet as your accountant"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Chart of accounts codes are mapped to financial statement lines, and the mapping is tested against a real trial balance file. The difference between the balance sheet we produce and the one your accountant produces must be zero \u2014 until it is, we do not start calculating ratios.")), /*#__PURE__*/React.createElement("div", {
      className: "chan-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "7/A ve 7/B"), "Your cost accounting method is respected; if accounts 62 and 63 are empty, they are never filled without a reflection entry"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Interim trial balance"), "If assets and liabilities do not balance, that is not an error \u2014 it is the net profit difference"), /*#__PURE__*/React.createElement("span", {
      className: "chan"
    }, /*#__PURE__*/React.createElement("b", null, "Net VAT"), "Deductible and calculated VAT are netted; whether it carries forward or falls due is clear")))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Statement integrity"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Learn about a missing statement the same day, not at month end"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "If the opening balance, intraday movements and closing balance do not tie out, data is missing. Which account, which day, and what kind of gap it is are each reported separately.")), /*#__PURE__*/React.createElement(BalanceContinuity, null)), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['The reconciliation rate is never inflated', 'An unmatched entry never enters the total; when we say “98% reconciled”, it really is.'], ['No ratio opens before the mapping is confirmed', 'Current ratio, DSO and net debt/EBITDA stay locked until the mapping is verified.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['A counterparty is never guessed', 'An unmatched name stays blank; it is never linked to a similar-sounding company.'], ['Your ERP record is never touched', 'The reconciliation result is delivered as a file; it is never written over the ledger entry.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Close one period with us",
      lead: "We build the mapping with your real trial balance and statement files and bring the gap to zero together."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
