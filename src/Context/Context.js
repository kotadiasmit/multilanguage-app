import React from "react";

const languageContext = React.createContext({
  selectedLanguage: "English",
  isLoading: true,
  handleLanguageChange: () => {},
  handleIsLoading: () => {},
});

export default languageContext;
