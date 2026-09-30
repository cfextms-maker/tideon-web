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
      title: "Data Protection Notice",
      toc: [['sorumlu', 'Data controller'], ['veriler', 'Personal data processed'], ['amac', 'Purposes of processing'], ['sebep', 'Legal basis'], ['aktarim', 'Transfer'], ['saklama', 'Retention period'], ['haklar', 'Your rights']]
    }, /*#__PURE__*/React.createElement(LegalSection, {
      id: "sorumlu",
      title: "Data controller"
    }, /*#__PURE__*/React.createElement("p", null, "Tideon")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "veriler",
      title: "Personal data processed"
    }, /*#__PURE__*/React.createElement("p", null, "Via the contact form: full name, company name, email address, phone number and any information you share in the message."), /*#__PURE__*/React.createElement("p", null, "Automatically during your site visit: IP address, browser and device information, pages visited and visit duration.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "amac",
      title: "Purposes of processing"
    }, /*#__PURE__*/React.createElement("p", null, "To respond to your enquiry, to run product presentations and the demo process, to conduct commercial communication, and to measure and improve site usage.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "sebep",
      title: "Legal basis"
    }, /*#__PURE__*/React.createElement("p", null, "Contact form data is processed based on your explicit consent. Analytics data is processed under legitimate interest and is contingent on your cookie consent.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "aktarim",
      title: "Transfer"
    }, /*#__PURE__*/React.createElement("p", null, "Your data is processed through the service providers Google Analytics and Netlify, whose servers are located in the USA. Transfers abroad are carried out in accordance with the relevant provisions of the KVKK.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "saklama",
      title: "Retention period"
    }, /*#__PURE__*/React.createElement("p", null, "Contact form data is retained for 1 year from when your request is resolved. Analytics data is anonymised after 1 year.")), /*#__PURE__*/React.createElement(LegalSection, {
      id: "haklar",
      title: "Your rights"
    }, /*#__PURE__*/React.createElement("p", null, "Under Article 11 of the KVKK, you have the right to learn whether your personal data is processed; to request information if it has been processed; to learn the purpose of processing; to know the third parties to whom it is transferred; to request correction if it is incomplete or inaccurate; to request its deletion or destruction; to object to an outcome against you arising from analysis by automated systems; and to claim compensation if you suffer damage."), /*#__PURE__*/React.createElement("p", null, "You can send your requests to info@tideon.com.tr."))), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(CookieBanner, null));
  }
  return Page;
})();
ReactDOM.hydrateRoot(document.getElementById("root"),React.createElement(__Page));
