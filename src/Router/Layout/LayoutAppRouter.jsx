import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Navbar } from "../../components/Navbar/Navbar";
import { HomePage } from "../../pages/HomePage";
import { AboutPage } from "../../pages/AboutPage";
import { ExperiencePage } from "../../pages/ExperiencePage";
import { ProjectsPage } from "../../pages/ProjectsPage";
import { ContactPage } from "../../pages/ContactPage";

export const AppRouter = () => {
  const { i18n } = useTranslation();
    useEffect(() => {
      document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    }, [i18n.language]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};