import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import languageContext from "./Context/Context";
import Home from "./Home/Home";
import ContactUs from "./ContactUs/ContactUs";
import NotFound from "./NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isLoading, setIsLoading] = useState(true);
  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };
  const handleIsLoading = (value) => {
    setIsLoading(value);
  };
  return (
    <BrowserRouter>
      <languageContext.Provider
        value={{
          selectedLanguage,
          isLoading,
          handleLanguageChange: handleLanguageChange,
          handleIsLoading: handleIsLoading,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </languageContext.Provider>
    </BrowserRouter>
  );
};
export default App;
