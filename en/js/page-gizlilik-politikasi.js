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
      title: "Privacy Policy",
      toc: [['toplanan', 'What data we collect'], ['neden', 'Why we collect it'], ['paylasim', 'Who we share it with'], ['guvenlik', 'Security'], ['saklama', 'How long we keep it'], ['haklar', 'Your rights'], ['degisiklik', 'Changes']]
    }, /*#__PURE__*/React.createElement(LegalSection, {
      id: "toplanan",
      title: "What data we collect"
    }, /*#__PURE__*/React.createElement("p", null, "We collect the information you share when you fill in the contact form, and the technical data generated automatically when you visit the site. You never need to share anything the form does not ask for.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "neden",
      title: "Why we collect it"
    }, /*#__PURE__*/React.createElement("p", null, "To respond to your enquiry, to run the demo process, and to improve the site by understanding which parts are used.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "paylasim",
      title: "Who we share it with"
    }, /*#__PURE__*/React.createElement("p", null, "We do not sell your personal data or pass it to third parties for marketing. Only the infrastructure providers we use (hosting, form handling, analytics) have technical access to it, and they are bound by contract as data processors.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "guvenlik",
      title: "Security"
    }, /*#__PURE__*/React.createElement("p", null, "Site traffic runs over an encrypted connection (HTTPS). Access to your data is limited to authorised staff.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "saklama",
      title: "How long we keep it"
    }, /*#__PURE__*/React.createElement("p", null, "Contact requests are retained for 1 year. At the end of that period they are deleted or anonymised.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "haklar",
      title: "Your rights"
    }, /*#__PURE__*/React.createElement("p", null, "You have the right to access your data and to request its correction or deletion. You can send your requests to info@tideon.com.tr.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "degisiklik",
      title: "Changes"
    }, /*#__PURE__*/React.createElement("p", null, "If we change this policy, the current text is published on this page."))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
