import React from "react";
import ProjectTemplate from "./ProjectTemplate";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-primary-bg-color w-full py-[50px] scroll-mt-[75px]"
    >
      <div className="container flex flex-col mx-auto w-11/12 md:flex-row ">
        <div className="flex flex-col mx-auto w-12/12 gap-5 text-center md:max-w-5xl md:text-left ">
          <h2 className="text-xl font-semibold text-[#93C5FD] ">PROJECTS</h2>
          <h3 className="text-2xl font-bold mb-14">
            Feel free to check out some of my work!
          </h3>
          {/*  */}
          {/* Projects go */}
          <div className="flex flex-col mx-auto justify-center gap-16 md:max-w-5xl">
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
