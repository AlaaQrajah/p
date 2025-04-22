import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:alaaqaraja2004@gmail.com">alaaqaraja2004@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/alaa-qarajah-7a4882352/" target="_blank" rel="noopener noreferrer">
www.linkedin.com/in/alaa-qarajah-7a4882352
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/AlaaQrajah" target="_blank" rel="noopener noreferrer">
github.com/AlaaQrajah
          </a>
        </li>
      </ul>
    </footer>
  );
};