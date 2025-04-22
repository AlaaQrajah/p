import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{t('hero.greeting')}</h1>
        <p className={styles.description}>
          {t('hero.description')}
        </p>
        <a href="https://wa.me/31616671557" className={styles.contactBtn} target="/">
          {t('hero.contactBtn')}
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};