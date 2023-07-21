import translate from "translate";
import languageContext from "../Context/Context";
import InitialContent from "./InitialContent";
import NavBar from "../NavBar/NavBar";
import "./NotFound.css";
import { useContext, useEffect, useState } from "react";

const NotFound = () => {
  const { para, heading } = InitialContent;
  const { selectedLanguage } = useContext(languageContext);
  const [content, setContent] = useState(InitialContent);

  useEffect(() => {
    Translate();
  }, [selectedLanguage]);

  const Translate = async () => {
    const translatedPara = await translate(para, selectedLanguage);
    const translatedHeading = await translate(heading, selectedLanguage);
    setContent({
      heading: translatedHeading,
      para: translatedPara,
    });
  };
  return (
    <>
      <NavBar />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
          className="not-found-img"
        />
        <h1>{content.heading}</h1>
        <p>{content.para}</p>
      </div>
    </>
  );
};

export default NotFound;
