import React from "react";

import { ISkills } from "../../types";
import Spinner from "../Spinner/Spinner";
import classes from "./Skills.module.css";
import SkillsItem from "./SkillsItem/SkillsItem";

const SkillList = ({ skills }: { skills: ISkills[] }) => {
  return (
    <>
      <ul className={classes.list}>
        {skills.map((skill: ISkills) => (
          <div key={skill.name}>
            <SkillsItem skill={skill} />
          </div>
        ))}
      </ul>
      {skills.length <= 0 && <Spinner />}
    </>
  );
};

export default SkillList;
