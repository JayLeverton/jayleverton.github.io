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
            <ProjectTemplate
              projectName={"Mnemosyne"}
              projectSummary={
                "A web app for D&D players to efficiently and quickly manage and play their characters. It includes stat editing and management such as HP, hit dice, and a proficiency bonus. The user can roll saves, skills, and ability checks, as well as custom roll inputs defined by formula. Local saving and loading occurs after each change and file saving is also possible, to allow users to have multiple characters and easily transfer them across devices."
              }
              projectImageLocalLink="../assets/MnemosyneScreenshot.jpg"
              dateFinished={"2024"}
              codeLink={"https://github.com/JayLeverton/Mnemosyne/"}
              demoLink={"https://jayleverton.github.io/Mnemosyne/"}
            ></ProjectTemplate>
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
