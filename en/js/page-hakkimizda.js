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
      eyebrow: "Company",
      title: "About us",
      lead: "Tideon is a platform built to run the treasury function of multi-entity groups in T\xFCrkiye. It was written knowing exactly where spreadsheet-driven cash management fails: missing data, late information, and figures whose source is unclear."
    }), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Why"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Why a CFO needs Tideon"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "A group\u2019s cash position usually lives across several files and several people. It stays unclear which accounts the morning\u2019s figure includes, or on what assumption it was calculated. The error shows up in large amounts, and late."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Tideon was written to close that gap. Every figure carries where it came from, which accounts it includes, and what data is missing. Unreadable data is never treated as zero; the account is excluded from the total, and the reason is written down.")), /*#__PURE__*/React.createElement("div", {
      className: "stack-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "How we work"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "How we operate"), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['A team that knows the treasury side', 'We design the product together with people who have done this job for years.'], ['Verified in the field', 'No screen ships until it has been tested against a real group structure.'], ['Build it before we promise it', 'A capability that is only on the roadmap is never described as “already there” in a sales conversation.'], ['Built for Türkiye', 'Items like the chart of accounts, cheques and notes, bank guarantees and banking tax were not bolted on afterwards.']]
    })))), /*#__PURE__*/React.createElement("div", {
      className: "media-band"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/hakkimizda-band.png",
      alt: "\u0130stanbul Finans Merkezi"
    })), /*#__PURE__*/React.createElement(PageCta, {
      title: "See the product with your own structure",
      lead: "In a 45-minute call we show you the product itself, not a canned presentation."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
