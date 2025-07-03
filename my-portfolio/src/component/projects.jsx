import React from "react";
import Box from "./box";
import projects from "../projects";

function createBox(project) {
  return (
    <Box
      key={project.id}
      title={project.title}
      image={project.imageURL}
      text={project.info}
      language={project.language}
      link={project.GithubLink}
    />
  );
}

function Projects(){
    return(
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 boxes">
        {projects.map(createBox)}
      </div>
    )
}

export default Projects;