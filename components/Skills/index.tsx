import React from "react";

const SkillList = ({ skills }: any) => {
  return (
    <>
      <div className="collapse">
        {skills.map((skill: any) => (
          <div key={skill.name}>
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              {skill.name}
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillList;
