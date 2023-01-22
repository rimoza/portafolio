import React from "react";
import { ISkills } from "../../types";

const SkillList = ({ skills }: {skills: ISkills[]}) => {
  return (
    <>
      <ul className="grid grid-cols-2 leading-7 text-md text-gray-500 font-semibold">
        {skills.map((skill: any) => (
          <div key={skill.name}>
            <li className='flex flex-row'>
              <span className="bg-gray-300 w-full max-w-md py-2 px-5 m-2 rounded-md drop-shadow-sm">
              {skill.name}
              </span>
            </li>
          </div>
        ))}
      </ul>
      {skills.length <= 0 && <p>No skills to show</p>}
    </>
  );
};

export default SkillList;
