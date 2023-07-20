import React from "react";

const languageContext = React.createContext({
  selectedLanguage: "English",
  handleLanguageChange: () => {},
});

export default languageContext;
