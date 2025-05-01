import React from "react";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Experience } from "../components/Experience/Experience";
import { Projects } from "../components/Projects/Projects";
import { Layout } from "../Router/Layout/Layout";
export const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </Layout>
    </>
  );
};
