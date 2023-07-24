import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import translate from "translate";
import languageContext from "../Context/Context";
import NavBar from "../NavBar/NavBar";
import InitialContent from "./InitialContent";
import "./Home.css";

const Home = () => {
  const { para, heading, contactUsBtn } = InitialContent;
  const { selectedLanguage, isLoading, handleIsLoading } =
    useContext(languageContext);
  const [content, setContent] = useState(InitialContent);

  useEffect(() => {
    Translate();
  }, [selectedLanguage]);

  const Translate = async () => {
    const translatedPara = await translate(para, selectedLanguage);
    const translatedHeading = await translate(heading, selectedLanguage);
    const translatedContactUsBtn = await translate(
      contactUsBtn,
      selectedLanguage
    );
    setContent({
      heading: translatedHeading,
      para: translatedPara,
      contactUsBtn: translatedContactUsBtn,
    });
    handleIsLoading(false);
  };
  const changeDirection =
    selectedLanguage === "Hebrew" || selectedLanguage === "Arabic";
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
          <div className="home-container" dir={changeDirection ? "rtl" : "ltr"}>
            <div className="home-content">
              <h1 className="home-heading">{content.heading}</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                alt="clothes that get you noticed"
                className="home-mobile-img"
              />
              <p className="home-description">{content.para}</p>
              <Link to="/contact-us">
                <button type="button" className="contact-us-button">
                  {content.contactUsBtn}
                </button>
              </Link>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className={`home-desktop-img ${
                changeDirection ? "me-5" : "ms-5"
              }`}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
