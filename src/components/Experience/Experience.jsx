import React from "react";
import { useTranslation } from "react-i18next";
import  "../../styles/Experience/Experience.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="containerExperience" id="experience">
      <h2 className="titleExperience">{t("experience.title")}</h2>
      <div className="contentExperience">
        <div className="skillsExperience">
          {skills.map((skill, id) => (
            <div key={id} className="skillExperience">
              <div className="skillImageContainerExperience">
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className="historyExperience">
          {history.map((historyItem, id) => (
            <li key={id} className="historyItemExperience">
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className="historyItemDetailsExperience">
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
