import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Cloud Resume Challenge",
    description: "Project 1 description",
    image: "/images/projects/1.avif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previeUrl: "/",
  },
  {
    id: 2,
    title: "Python APP",
    description: "Project 2 description",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previeUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white m-4">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
