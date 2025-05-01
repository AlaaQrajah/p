import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/About/About.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="containerAbout" id="about">
      <h2 className="titleAbout">{t("about.title")}</h2>
      <div className="contentAbout">
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className="aboutImageAbout"
        />
        <ul className="aboutItemsAbout">
          <li className="aboutItemAbout">
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
              className="IconAbout"
            />
            <div className="aboutItemTextAbout">
              <h3>{t("about.frontend.title")}</h3>
              <p>{t("about.frontend.description")}</p>
            </div>
          </li>
          <li className="aboutItemAbout">
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Server icon"
              className="IconAbout"
            />
            <div className="aboutItemTextAbout">
              <h3>{t("about.backend.title")}</h3>
              <p>{t("about.backend.description")}</p>
            </div>
          </li>
          <li className="aboutItemAbout">
            <img
              width={60}
              src={getImageUrl("about/Full-stack.png")}
              alt="UI icon"
              className="IconAbout"
            />
            <div className="aboutItemTextAbout">
              <h3>{t("about.FullStack.title")}</h3>
              <p>{t("about.FullStack.description")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
