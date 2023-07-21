import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import languageContext from "./Context/Context";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactUs from "./ContactUs/ContactUs";

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };
  return (
    <BrowserRouter>
      <languageContext.Provider
        value={{
          selectedLanguage,
          handleLanguageChange: handleLanguageChange,
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
