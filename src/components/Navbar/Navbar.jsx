import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../../src/components/context/ThemeContext"; // Fixed import path
import styles from "../../../public/styles/Navbar/Navbar.module.css"; // Fixed CSS import path
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
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/"
            >
        {t("navbar.logo")}
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <div className={styles.controls}>
              <button
                className={styles.animatedBtn}
                onClick={toggleTheme}
                aria-label={
                  theme === "dark" ? t("theme.light") : t("theme.dark")
                }
              >
                {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
              </button>
              <button
                className={styles.animatedBtn}
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
