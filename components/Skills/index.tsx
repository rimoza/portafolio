import React from "react";

const SkillList = ({ skills }: any) => {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 leading-7 text-md text-gray-500 font-semibold">
        {skills.map((skill: any) => (
          <div key={skill.name}>
            <li className='flex flex-row'>
              <span className="bg-gray-300 py-2 px-5 m-2 rounded-md drop-shadow-sm">
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
