import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");

  const handleSwitchLanguage = () => {
    if (currentLang === "en") {
      i18n.changeLanguage("de");
      setCurrentLang("de");
    } else if (currentLang === "de") {
      i18n.changeLanguage("en");
      setCurrentLang("en");
    }
  };

  return (
    <nav className="nav-container">
      <ul className="nav-unordered-list">
        <li className="nav-list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/data">Data</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/favourites">Favourites</NavLink>
        </li>
      </ul>
      <button onClick={handleSwitchLanguage} className="switchLangBtn">
        {currentLang.toUpperCase()}
      </button>
    </nav>
  );
};

export default Navbar;
