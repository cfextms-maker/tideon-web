var __Page=(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;
  function Home() {
    const [lang, setLang] = useState('TR');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SiteHeader, {
      lang: lang,
      setLang: setLang
    }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(NoFakeNumbers, null), /*#__PURE__*/React.createElement(FlowSwitcher, null), /*#__PURE__*/React.createElement(TurkeySpecific, null), /*#__PURE__*/React.createElement(BankConnector, null), /*#__PURE__*/React.createElement(ErpStrip, null), /*#__PURE__*/React.createElement(Connections, null), /*#__PURE__*/React.createElement(Security, null), /*#__PURE__*/React.createElement(DemoForm, null), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Home;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
