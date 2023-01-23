import React from "react";

import { ISkills } from "../../../types";
import classes from "./SkillsItem.module.css";

const SkillsItem = ({ skill }: { skill: ISkills }) => {
  return (
    <li className={classes.list_items}>
      <span className={classes.list_name}>{skill.name}</span>
    </li>
  );
};

export default SkillsItem;
