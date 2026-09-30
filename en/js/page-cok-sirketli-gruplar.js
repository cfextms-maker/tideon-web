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
    }, "The group looks liquid \u2014 but which entity is tight"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "The consolidated total does not tell a holding company\u2019s real story. Cash moves between entities, one owes another, and buffers are held per entity. Tideon shows the group in one ledger, with each entity keeping its own identity."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Consolidated view"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "From the group total down to a single account"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The same definition holds at every level: from the consolidated view down to a legal entity, then to a single bank account, using the same rule throughout. An entity running tight no longer hides behind a liquid group total \u2014 buffers are shown per entity."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Permissions are granted per legal entity. The holding company CFO sees the whole group, a subsidiary manager sees only their own entity; who sees what is an access rule, not a report setting.")), /*#__PURE__*/React.createElement(GroupEntities, null)))), /*#__PURE__*/React.createElement("section", {
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
    }, "Intercompany funding"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Who owes whom, and how much"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Intercompany payables and receivables sit in a matrix view. Netting mutual debts shows how many transactions can close and how much never needs to move at all."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The contractual rate is kept separate: intercompany transactions never use the market rate, or two entities would reconcile differently every day.")), /*#__PURE__*/React.createElement(IntercoMatrix, null))), /*#__PURE__*/React.createElement("section", {
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
    }, "Pooling and sweep"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Put your fragmented setup and a pooled one side by side"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Today\u2019s setup and a pooled setup are compared on one screen: interest to be earned, interest expense to be cut. Physical and notional pooling are treated separately.")), /*#__PURE__*/React.createElement(PoolCompare, null), /*#__PURE__*/React.createElement("div", {
      className: "side"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "h3"
    }, "Sweep rules"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "From which account to which, at what threshold, with what target balance \u2014 the rule is defined, the measurement automatic. The system never moves money; it produces the transfer plan and records the reason."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The intercompany receivable and payable that pooling creates are shown separately. These items carry tax and transfer pricing consequences; they are never netted silently.")), /*#__PURE__*/React.createElement(SweepRules, null)))), /*#__PURE__*/React.createElement(PageCta, {
      title: "See the setup with your own group structure",
      lead: "In a 45-minute call we build the consolidated view and sweep setup together with your list of entities."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
