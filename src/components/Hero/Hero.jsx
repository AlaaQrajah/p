import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/Hero/Hero.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="containerHero">
      <div className="contentHero">
        <h1 className="titleHero">{t("hero.greeting")}</h1>
        <p className="descriptionHero">{t("hero.description")}</p>
        <a
          href="https://wa.me/31616671557"
          className="animatedBtnHero"
          target="/"
        >
          {t("hero.contactBtn")}
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className="heroImgHero"
      />
      <div className="topBlurHero" />
      <div className="bottomBlurHero" />
    </section>
  );
};
