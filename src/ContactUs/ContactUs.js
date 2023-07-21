import { useContext, useEffect, useState } from "react";
import translate from "translate";
import languageContext from "../Context/Context";
import NavBar from "../NavBar/NavBar";
import InitialContent from "./InitialContent";
import "./ContactUs.css";

const ContactUs = () => {
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
      <div className="Contact-us-container">
        <img
          src="https://media.istockphoto.com/id/1283050796/vector/flat-design-under-construction-concept.jpg?s=2048x2048&w=is&k=20&c=hZN3pZawWvu8-r-QCxiXPNdwBIU0ElU_HiUMago4h98="
          alt="under construction"
          className="construction-img"
        />
        <h1>{content.heading}</h1>
        <p>{content.para}</p>
      </div>
    </>
  );
};

export default ContactUs;
