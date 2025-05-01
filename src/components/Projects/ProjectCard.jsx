import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/Projects/ProjectCard.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const { t } = useTranslation();

  return (
    <div className="containerProjectCard">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="imageProjectCard"
      />
      <h3 className="titleProjectCard">{title}</h3>
      <p className="descriptionProjectCard">{description}</p>
      <ul className="skillsProjectCard">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="skillProjectCard">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="linksProjectCard">
        <a href={demo} className="animatedBtnProjectCard" target="/">
          {t("projects.demo")}
        </a>
      </div>
    </div>
  );
};
