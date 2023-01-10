import React from "react";
import Link from "next/link";
import { IProjects } from "../../types";
import { useRouter } from "next/router";
import classes from "./Projects.module.css";

const ProjectItem = ({ project }: { project: IProjects }) => {
  const router = useRouter();

  return (
    <Link
      href={`/projects/${project.id}`}
      className={classes.projectItem}
    >
      <div className={classes.projectTitle}>
        <span className="text-gray-500"> {project.title} </span>
        <button
          className="btn btn-primary"
          onClick={() => router.push(`/projects/${project.id}`)}
        >
          See More
        </button>
      </div>
    </Link>
  );
};

export default ProjectItem;
