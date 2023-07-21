import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import translate from "translate";
import languageContext from "../Context/Context";
import NavBar from "../NavBar/NavBar";
import InitialContent from "./InitialContent";
import "./Home.css";

const Home = () => {
  const { para, heading, shopNowBtn } = InitialContent;
  const { selectedLanguage } = useContext(languageContext);
  const [content, setContent] = useState(InitialContent);

  useEffect(() => {
    Translate();
  }, [selectedLanguage]);

  const Translate = async () => {
    const translatedPara = await translate(para, selectedLanguage);
    const translatedHeading = await translate(heading, selectedLanguage);
    const translatedShopNowBtn = await translate(shopNowBtn, selectedLanguage);
    setContent({
      heading: translatedHeading,
      para: translatedPara,
      shopNowBtn: translatedShopNowBtn,
    });
  };
  const changeDirection =
    selectedLanguage === "Hebrew" || selectedLanguage === "Arabic";
  return (
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
            <button type="button" className="shop-now-button">
              {content.shopNowBtn}
            </button>
          </Link>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className={`home-desktop-img ${changeDirection ? "me-5" : "ms-5"}`}
        />
      </div>
    </>
  );
};

export default Home;
