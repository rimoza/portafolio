import React from "react";
import Link from "next/link";
import { IProjects } from "../../types";
import { useRouter } from "next/router";
import classes from "./Projects.module.css";

const ProjectItem = ({ project }: { project: IProjects }) => {
  const router = useRouter();
  if(!project) {
    return null;
  };
  return (
    <Link
      href={`/projects/${project._id}`}
      className={classes.projectItem}
    >
      <div className={classes.projectTitle}>
        <span className="text-gray-500"> {project.title} </span>
        <button
          className="btn btn-primary"
          onClick={() => router.push(`/projects/${project._id}`)}
        >
          See More
        </button>
      </div>
    </Link>
  );
};

export default ProjectItem;
