import React from "react";
import { useTranslation } from "react-i18next";
import "../../styles/Projects/Projects.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="containerProjects" id="projects">
      <h2 className="titleProjects">{t("projects.title")}</h2>
      <div className="projectsProjects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
