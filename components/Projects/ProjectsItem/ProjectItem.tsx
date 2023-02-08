import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IProjects } from "../../../types";
import Button from "../../UI/Button/Button";
import classes from "./ProjectItem.module.css";

const ProjectItem = ({ project }: { project: IProjects }) => {
  const router = useRouter();

  if (!project) {
    return null;
  };

  return (
    <Link href={`/projects/${project._id}`} className={classes.projectItem}>
      <div className={classes.projectTitle}>
        <span className="dark:text-bg"> {project.title} </span>
        <Button
          className={classes.btn_item}
          onClick={() => router.push(`/projects/${project._id}`)}
        >
          See More
        </Button>
      </div>
    </Link>
  );
};

export default ProjectItem;
