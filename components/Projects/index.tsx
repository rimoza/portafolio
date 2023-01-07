import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from './Projects.module.css';

const Project = ({ project }: any) => {
  console.log(project);
  return (
      <Link href={`/projects/${project.id}`} className='flex flex-wrap justify-center mb-20'>
        <p className={`px-4 py-4 ${classes.projectItem}`}>
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={500}
          className={classes.projectImage}
        />
        <div className={classes.projectName}>{project.name}</div>
        </p>
      </Link>
  );
};

export default Project;
