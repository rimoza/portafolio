import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from './Projects.module.css';

const Project = ({ project }: any) => {
  console.log(project);
  return (
     <div className="rounded-2xl overflow-hidden w-full drop-shadow-md cursor-pointer px-5 sm:px-2 md:px-1">
       <Link href={`/projects/${project.id}`} className='flex flex-wrap justify-center items-center hover:scale-105 transform transition ease-out duration-250'>
        <p className={`px-4 py-4 ${classes.projectItem}`}>
        <Image
          src={project.image}
          alt={project.name}
          width={500}
          height={500}
          className={classes.projectImage}
        />
        <div className={classes.projectName}>
          <p className="bg-black text-center mt-48 text-white max-w-full">{project.name}</p>
        </div>
        </p>
      </Link>
     </div>
  );
};

export default Project;