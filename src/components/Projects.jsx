import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const Projects = () => {
  return (
    <div className="bg-[#0F172A] w-full py-[50px]">
      <div className="container flex flex-col mx-auto w-11/12 md:flex-row md:max-w-5xl">
        <div className="flex flex-col mx-auto w-12/12 md:max-w-lg gap-5 text-center md:text-left">
          <h2 className="text-xl font-semibold text-[#93C5FD] ">PROJECTS</h2>
          <h3 className="text-2xl font-bold mb-14">
            Feel free to check out some of my work!
          </h3>
          {/*  */}
          {/* Projects go */}
          <div className="flex flex-col gap-16">
            <ProjectTemplate></ProjectTemplate>
            <ProjectTemplate></ProjectTemplate>
            <ProjectTemplate></ProjectTemplate>
            <ProjectTemplate></ProjectTemplate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
