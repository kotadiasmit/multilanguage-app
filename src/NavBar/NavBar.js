import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import translate from "translate";
import languageContext from "../Context/Context";
import InitialContent from "./InitialContent";
import "./NavBar.css";

const NavBar = () => {
  const { home, contactUs, english, hindi, gujarati, hebrew, arabic } =
    InitialContent;
  const [content, setContent] = useState(InitialContent);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const { selectedLanguage, handleLanguageChange } =
    useContext(languageContext);

  const onLanguageChange = (event) => {
    const { value } = event.target;
    handleLanguageChange(value);
  };

  const showMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    Translate();
  }, [selectedLanguage]);

  const Translate = async () => {
    const translatedHome = await translate(home, selectedLanguage);
    const translatedContactUs = await translate(contactUs, selectedLanguage);
    const translatedEnglish = await translate(english, "English");
    const translatedHindi = await translate(hindi, "Hindi");
    const translatedGujarati = await translate(gujarati, "Gujarati");
    const translatedHebrew = await translate(hebrew, "Hebrew");
    const translatedArabic = await translate(arabic, "Arabic");

    setContent({
      home: translatedHome,
      contactUs: translatedContactUs,
      english: translatedEnglish,
      hindi: translatedHindi,
      gujarati: translatedGujarati,
      hebrew: translatedHebrew,
      arabic: translatedArabic,
    });
  };
  const changeDirection =
    selectedLanguage === "Hebrew" || selectedLanguage === "Arabic";
  return (
    <>
      <nav className="nav-header">
        <div
          className={`sub-container ${changeDirection && "flex-row-reverse"}`}
        >
          <NavLink to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>
          <div className={`nav-menu ${changeDirection && "flex-row-reverse"}`}>
            <ul className="nav-bar-large-container">
              <NavLink to="/" className="nav-link">
                <li className="nav-menu-item">{content.home}</li>
              </NavLink>
              <NavLink to="/contact-us" className="nav-link">
                <li className="nav-menu-item">{content.contactUs}</li>
              </NavLink>
            </ul>
            <div className="nav-menu-mobile">
              <button onClick={showMenu} className="nav-mobile-btn">
                {isShowMenu ? (
                  <GrClose color="gray" size={20} />
                ) : (
                  <CiMenuBurger color="gray" size={20} />
                )}
              </button>
            </div>

            <select
              value={selectedLanguage}
              onChange={onLanguageChange}
              className="sel-language"
            >
              <option
                value="English"
                className="language-opt"
              >{`En ${content.english}`}</option>
              <option
                value="Hebrew"
                className="language-opt"
              >{`He ${content.hebrew}`}</option>
              <option
                value="Arabic"
                className="language-opt"
              >{`Ar ${content.arabic}`}</option>
              <option
                value="Hindi"
                className="language-opt"
              >{`Hi ${content.hindi}`}</option>
              <option
                value="Gujarati"
                className="language-opt"
              >{`Gu ${content.gujarati}`}</option>
            </select>
          </div>
        </div>
      </nav>
      {isShowMenu && (
        <ul className="nav-menu-list-mobile">
          <NavLink to="/" className="nav-link">
            <li className="nav-menu-item-mobile">{content.home}</li>
          </NavLink>
          <NavLink to="/contact-us" className="nav-link">
            <li className="nav-menu-item-mobile">{content.contactUs}</li>
          </NavLink>
        </ul>
      )}
    </>
  );
};

export default NavBar;
