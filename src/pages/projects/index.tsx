import React from "react";
import Project from "@/components/Project/Project";
import { projectsData } from "@/data/projectsData";

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </>
  );
};

export default Projects;
