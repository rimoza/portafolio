import React from 'react'

import Project from './index';
import { IProjects } from '../../types';

const ProjectList = ({ projects }: { projects: IProjects[]}) => {
  return (
    <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-full"
          id="projects"
        >
          {projects.length > 0 ? projects.map((project: IProjects) => (
            <Project key={project.id} project={project} />
          )): <p>No projects to display</p>}
        </div>
  )
}

export default ProjectList;