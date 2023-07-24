import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import translate from "translate";
import languageContext from "../Context/Context";
import NavBar from "../NavBar/NavBar";
import InitialContent from "./InitialContent";
import "./ContactUs.css";

const ContactUs = () => {
  const { para, heading } = InitialContent;
  const { selectedLanguage, isLoading, handleIsLoading } =
    useContext(languageContext);
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
    handleIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default ContactUs;
