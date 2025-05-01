import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../src/components/context/ThemeContext"; // Fixed import path
import "../../styles/Navbar/Navbar.css"; // Fixed CSS import path
import { getImageUrl } from "../../utils";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export const Navbar = () => {
  // Rest of the component remains the same
  // ...

  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="navbarNavbar">
      <Link className="titleNavbar" to="/">
        {t("navbar.logo")}
      </Link>
      <div className="menuNavbar">
        <img
          className="menuBtnNavbar"
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`menuItemsNavbar ${menuOpen ? "menuOpenNavbar" : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <div className="controlsNavbar">
              <button
                className="animatedBtnNavbar"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark" ? t("theme.light") : t("theme.dark")
                }
              >
                {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
              </button>
              <button
                className="animatedBtnNavbar"
                onClick={changeLanguage}
                aria-label={
                  i18n.language === "ar" ? t("language.en") : t("language.ar")
                }
              >
                {i18n.language === "ar" ? "EN" : "عربي"}
              </button>
            </div>
          </li>
          <li>
            <Link to="/about">{t("navbar.about")}</Link>
          </li>
          <li>
            <Link to="/experience">{t("navbar.experience")}</Link>
          </li>
          <li>
            <Link to="/projects">{t("navbar.projects")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("navbar.contact")}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
