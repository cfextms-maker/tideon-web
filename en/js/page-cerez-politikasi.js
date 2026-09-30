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
    }), /*#__PURE__*/React.createElement(LegalPage, {
      title: "Cookie Policy",
      toc: [['nedir', 'What a cookie is'], ['kullandigimiz', 'Cookies we use'], ['onay', 'Your consent'], ['degistirme', 'Changing your preference'], ['saklama', 'Retention period']]
    }, /*#__PURE__*/React.createElement(LegalSection, {
      id: "nedir",
      title: "What a cookie is"
    }, /*#__PURE__*/React.createElement("p", null, "Cookies are small text files that sites you visit save in your browser. They make the site work and help measure its usage.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "kullandigimiz",
      title: "Cookies we use"
    }, /*#__PURE__*/React.createElement("h3", null, "Essential cookies"), /*#__PURE__*/React.createElement("p", null, "Required for the site\u2019s core functions and for remembering your cookie preference. These cannot be disabled."), /*#__PURE__*/React.createElement("h3", null, "Analytics cookies"), /*#__PURE__*/React.createElement("p", null, "Set by Google Analytics to understand which pages are viewed and for how long, and how visitors use the site. These cookies run only with your consent and are not used to identify you personally."), /*#__PURE__*/React.createElement("p", null, "We do not use marketing or advertising cookies.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "onay",
      title: "Your consent"
    }, /*#__PURE__*/React.createElement("p", null, "On your first visit we ask for your consent to analytics cookies. You can still use the site without giving consent; in that case only essential cookies run.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "degistirme",
      title: "Changing your preference"
    }, /*#__PURE__*/React.createElement("p", null, "You can change your cookie preference at any time via the link at the bottom of the page. You can also delete or block cookies from your browser settings.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "saklama",
      title: "Retention period"
    }, /*#__PURE__*/React.createElement("p", null, "Essential cookies are kept for the session, or for 1 year to remember your preference. Analytics cookies last for 1 year."))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
