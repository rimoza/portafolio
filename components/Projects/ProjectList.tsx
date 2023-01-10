import React from 'react'

import Project from './ProjectItem';
import { IProjects } from '../../types';

const ProjectList = ({ projects }: { projects: IProjects[]}) => {
  return (
    <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-2 md:mx-0"
          id="projects"
        >
          {projects.length > 0 ? projects.map((project: IProjects) => (
            <Project key={project.id} project={project} />
          )): <p>No projects to display</p>}
        </div>
  )
}

export default ProjectList;