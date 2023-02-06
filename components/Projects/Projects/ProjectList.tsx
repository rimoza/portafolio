import React from "react";

import Heading from "../../UI/Heading";
import { IProjects } from "../../../types";
import classes from "./ProjectList.module.css";
import Container from "../../Container/Container";
import Project from "../ProjectsItem/ProjectItem";
import Spinner from "../../Spinner/Spinner";

const ProjectList = ({ projects }: { projects: IProjects[] }) => {
  return (
    <div className={classes.wrapper} id="projects">
      <Container>
        <div className="my-10">
          <Heading>Projects</Heading>
        </div>
        <div className={classes.grid_projects}>
          {projects.length > 0 ? projects.map((project: IProjects) => (
            <Project key={project._id} project={project} />
          )): <Spinner />}
        </div>
      </Container>
    </div>
  );
};

export default ProjectList;
