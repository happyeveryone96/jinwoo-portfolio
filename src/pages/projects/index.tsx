import React from "react";
import Dream from "@/components/Dream/Dream";
import Rush from "@/components/Rush/Rush";
import Discatch from "@/components/Discatch/Discatch";
import Uzik from "@/components/Uzik/Uzik";
import LeanonCompany from "@/components/LeanonCompany/LeanonCompany";
import EOStudio from "@/components/EOStudio/EOStudio";
import Dataus from "@/components/Dataus/Dataus";

const Projects = () => {
  return (
    <>
      <Dataus />
      <EOStudio />
      <LeanonCompany />
      <Dream />
      <Rush />
      <Discatch />
      <Uzik />
    </>
  );
};

export default Projects;
