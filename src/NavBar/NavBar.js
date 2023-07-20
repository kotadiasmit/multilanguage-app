import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useContext } from "react";
import languageContext from "../Context/Context";

const NavBar = () => {
  const { selectedLanguage, handleLanguageChange } =
    useContext(languageContext);
  const onLanguageChange = (event) => {
    const { value } = event.target;
    handleLanguageChange(value);
  };
  return (
    <nav className="nav-header">
      {/* <div className="nav-content"> */}
      <div className="nav-bar-mobile-logo-container">
        <NavLink to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </NavLink>
      </div>

      <div
        className={`nav-bar-large-container ${
          selectedLanguage !== "English" ? "flex-row-reverse" : null
        }`}
      >
        <NavLink to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </NavLink>
        <ul
          className={`nav-menu ${
            selectedLanguage !== "English" ? "flex-row-reverse" : null
          }`}
        >
          <li className="nav-menu-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-menu-item">
            <NavLink to="/contact-us" className="nav-link">
              Contact us
            </NavLink>
          </li>

          <li className="nav-menu-item">
            <select
              value={selectedLanguage}
              onChange={onLanguageChange}
              className="sel-language"
            >
              <option value="English">English</option>
              <option value="Hebrew">Hebrew</option>
              <option value="Arabic">Arabic</option>
            </select>
          </li>
        </ul>
      </div>
      {/* </div> */}
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-menu-item-mobile">
            <NavLink to="/contact-us" className="nav-NavLink">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
