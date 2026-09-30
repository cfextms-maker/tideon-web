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
    }, "Cheques and notes"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "See the maturity spread of cheques you hold and issue, where your risk sits, and the cost of discounting, on one screen. Not every cheque in the portfolio is liquid \u2014 pledged and discounted ones do not enter available cash.")), /*#__PURE__*/React.createElement(PfCard, {
      title: "Discount simulator",
      note: "3 cheques selected"
    }, /*#__PURE__*/React.createElement(DiscountSim, null)))), /*#__PURE__*/React.createElement("section", {
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
    }, "Portfolio view"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "What you received, what you issued, and when")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid tr-grid-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Receivable"), /*#__PURE__*/React.createElement("h4", null, "Cheques in portfolio"), /*#__PURE__*/React.createElement("p", null, "Cheques you hold, with count and average maturity. Collected, sent for collection and endorsed are tracked separately.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Payable"), /*#__PURE__*/React.createElement("h4", null, "Cheques issued"), /*#__PURE__*/React.createElement("p", null, "Cheques you have issued and their nearest maturity. If the due date falls on a holiday, the rolled date is shown separately.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Not liquid"), /*#__PURE__*/React.createElement("h4", null, "Pledged and discounted"), /*#__PURE__*/React.createElement("p", null, "In the portfolio but not liquid \u2014 it does not enter available cash. A discounted cheque never leaves the balance sheet; a financial liability arises against it.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Net effect"), /*#__PURE__*/React.createElement("h4", null, "Net near-term"), /*#__PURE__*/React.createElement("p", null, "The net effect of receivable and payable cheques over the selected period. If the bounce rate has not been measured, it is flagged as an assumption."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Maturity distribution"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Where your risk sits by maturity band"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, /*#__PURE__*/React.createElement("b", null, "Maturity spread (ladder):"), " Five maturity bands \u2014 0\u201315, 16\u201330, 31\u201360, 61\u201390, 90+ days. In each band, received cheques go up and issued cheques go down, with the net shown as a line. Clicking a band filters the table to that maturity."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, /*#__PURE__*/React.createElement("b", null, "Maturity takvimi:"), " The net amount due each day over the next 90 days. Busy days appear darker. Holidays are marked in a separate lane, and the rolled payment date appears in the tooltip.")), /*#__PURE__*/React.createElement(ChequeLadder, null)), /*#__PURE__*/React.createElement(PfCard, {
      title: "Cheque list",
      note: "280 records \xB7 16\u201330 day band",
      flush: true
    }, /*#__PURE__*/React.createElement(ChequeList, null)), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Maturities piling up in one week mean cash gets tight that week. The ladder shows this by band, the calendar shows it by day."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Discount simulator"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "See the cost before you discount"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Enter the bank, rate, day count and value date for the cheques you select; it calculates the net proceeds and the effective annual cost."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The breakdown is shown separately: discount amount, banking tax, commission. Nothing is folded into \u201Cinterest\u201D \u2014 the contract rate and the real cost would otherwise blur together.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "ACT/365 \xB7 ACT/360"), /*#__PURE__*/React.createElement("h4", null, "Day-count convention"), /*#__PURE__*/React.createElement("p", null, "ACT/365 is common for TRY transactions, ACT/360 for FX discounting. Which one applies is stored per contract; if unspecified, it is flagged as an assumption.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Maturity + value date"), /*#__PURE__*/React.createElement("h4", null, "Value date"), /*#__PURE__*/React.createElement("p", null, "Banks add a collection period to a cheque\u2019s maturity. The discount period is maturity plus value date, not maturity alone \u2014 this moves the effective cost noticeably on short-dated cheques.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag"
    }, "Quote comparison"), /*#__PURE__*/React.createElement("h4", null, "Multi-bank comparison"), /*#__PURE__*/React.createElement("p", null, "Quotes from several banks for the same cheque basket, side by side. Quotes whose convention comes from a contract are shown separately from those based on an assumption \u2014 an assumption-based quote never ranks as \u201Cbest\u201D."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Status ve olaylar"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "The life of a cheque"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Every instrument enters the portfolio at birth. Sending for collection, endorsing, discounting, collecting and bouncing are separate transitions; every one is recorded."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Bouncing is the bank\u2019s event, not the system\u2019s \u2014 it cannot be flagged without a bank reference.")), /*#__PURE__*/React.createElement(ChequeLifecycle, null)))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Due-date rolling"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "A maturity that falls on a holiday"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "When an instrument\u2019s maturity falls on a public holiday or a weekend, its payment day rolls to the next business day. Maturity and payment day appear in separate columns; the reason for the roll stays on record."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Holidays in between are included in the count \u2014 only the final day rolls.")), /*#__PURE__*/React.createElement(ChequeShift, null)), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "Saturday is not a public holiday, but banks are closed. The banking calendar and the legal calendar are kept separate."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-tint"
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
      items: [['Maturity data is not derived from the trial balance', 'Cheque and note maturities come from their own records; the ledger account only confirms the total.'], ['Bouncing is never predicted', 'If the historical rate has not been measured, it is flagged as an assumption, never invented.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Discounting is never initiated by the system', 'The simulator calculates the cost; the decision and the discounting itself are yours.'], ['A cheque is never removed from the balance sheet', 'A discounted cheque stays in the portfolio, and a financial liability arises against it; leverage ratios are calculated accordingly.']]
    })))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let's map your own cheque portfolio's maturity spread",
      lead: "In the meeting we work out your maturity bands and discounting cost together."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
