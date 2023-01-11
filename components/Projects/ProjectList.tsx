import React from "react";

import Project from "./ProjectItem";
import { IProjects } from "../../types";
import Container from "../Container/Container";

const ProjectList = ({ projects }: { projects: IProjects[] }) => {
  return (
    <div className='bg-base-100 py-16'>
    <Container>
      <div className="my-10 mx-10 md:mx-0">
        <hr />
        <h1 className="my-2 text-center text-4xl text-blue-500 font-semibold py-2 rounded-md">
          Projects
        </h1>
        <hr />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-2 md:mx-0"
        id="projects"
      >
        {projects.length > 0 ? (
          projects.map((project: IProjects) => (
            <Project key={project.id} project={project} />
          ))
        ) : (
          <p>No projects to display</p>
        )}
      </div>
    </Container>
    </div>
  );
};

export default ProjectList;
