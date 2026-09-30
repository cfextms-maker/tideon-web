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
    }, "Security and data"), /*#__PURE__*/React.createElement("p", {
      className: "sub-lead"
    }, "In a treasury at a multi-entity holding company, who can see what and who can approve what is defined in the product\u2019s first layer."))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Data isolation"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Organisations\u2019 data never mixes"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Every record is tagged with its organisation, and access control is enforced in the database layer. Not the application layer."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Even a badly written query cannot return another organisation\u2019s data; this guarantee does not depend on the application code being correct."), /*#__PURE__*/React.createElement("p", {
      className: "fineprint"
    }, "This rule is continuously measured by automated checks; every table and every policy is verified to actually separate organisations."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Authorisation"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Who sees what, who does what"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Permissions are defined on two axes: which legal entities you can access, and which actions you are allowed."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The holding company CFO sees the whole group; a subsidiary manager sees only their own entity. The same person can have read access in one module and write access in another.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid tr-grid-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Role definitions"), /*#__PURE__*/React.createElement("span", null, "Owner, treasury manager, analyst, auditor.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Access per legal entity"), /*#__PURE__*/React.createElement("span", null, "At group, entity or account level.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Permissions per module"), /*#__PURE__*/React.createElement("span", null, "Read, write and approve are granted separately.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Signing authority is separate"), /*#__PURE__*/React.createElement("span", null, "Approval authority in the system and signing authority at the bank are different things, kept apart."))))), /*#__PURE__*/React.createElement("section", {
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
    }, "Approval and segregation of duties"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "No single person can complete a transaction start to finish"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The person who prepares a request cannot approve it. This rule is enforced at the database level and cannot be bypassed from the application layer."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Multiple signatures are required by amount band, and the number needed is frozen at request time; it cannot be lowered later by changing the threshold. Changing the band table itself is also subject to approval.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Segregation of duties"), /*#__PURE__*/React.createElement("span", null, "The preparer cannot approve; the rule stands as a database constraint.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "Frozen signature count"), /*#__PURE__*/React.createElement("span", null, "The number of signatures needed is frozen at request time.")), /*#__PURE__*/React.createElement("div", {
      className: "tr-item"
    }, /*#__PURE__*/React.createElement("strong", null, "A request that cannot be approved never sits silently"), /*#__PURE__*/React.createElement("span", null, "If there are fewer authorised signatories than the threshold requires, it is reported as a configuration error; the request never sits forgotten in a queue."))))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-b"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Audit trail"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Every decision can be explained after the fact"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Records are never deleted, only their status changes. A cancelled payment batch, a closed loan, a returned bank guarantee \u2014 all of it stays on record."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The reason is simple: if a calculation used that record, how the result came about must be explainable afterwards.")), /*#__PURE__*/React.createElement("div", {
      className: "two-col"
    }, /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Change log', 'Who changed what, and when.']]
    }), /*#__PURE__*/React.createElement(FeatureRows, {
      items: [['Approval history', 'Who approved which request, at what band, at what rate.']]
    })))), /*#__PURE__*/React.createElement("section", {
      className: "section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap stack-6",
      style: {
        maxWidth: '68ch'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Data source and freshness"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "When the data was read is always visible"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Every block of data carries its last update time. When a connection drops, this is never hidden. Affected totals are flagged, and which accounts were left out is written down."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Stale data is never presented as if it were current."))), /*#__PURE__*/React.createElement("section", {
      className: "section section-soft-a"
    }, /*#__PURE__*/React.createElement("div", {
      className: "wrap two-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Personal data"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Data protection compliance"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "Retention periods and access logs are defined. The personal data processing inventory is prepared together with your organisation\u2019s processes during onboarding."), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "For audit-trail reasons, records are never deleted; requests concerning personal data are handled through a separate process.")), /*#__PURE__*/React.createElement("div", {
      className: "stack-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, "Hosting"), /*#__PURE__*/React.createElement("h2", {
      className: "h2"
    }, "Where it runs"), /*#__PURE__*/React.createElement("p", {
      className: "lead"
    }, "The entire system is deployed on-premises on your own servers, and your data stays with you.")))), /*#__PURE__*/React.createElement(PageCta, {
      title: "Let\u2019s do your security assessment together",
      lead: "In the meeting we walk through the permission matrix and audit trail using your own organisation structure."
    }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
