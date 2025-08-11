import type React from "react"
import type { IconType } from "react-icons"
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si"

interface Skill {
  name: string
  icon: IconType
  proficiency: number
}

const skills: Skill[] = [
  { name: "React", icon: FaReact, proficiency: 90 },
  { name: "Next.js", icon: SiNextdotjs, proficiency: 85 },
  { name: "TypeScript", icon: SiTypescript, proficiency: 80 },
  { name: "Node.js", icon: FaNodeJs, proficiency: 75 },
  { name: "GraphQL", icon: SiGraphql, proficiency: 70 },
  { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 85 },
  { name: "MongoDB", icon: SiMongodb, proficiency: 75 },
  { name: "PostgreSQL", icon: SiPostgresql, proficiency: 70 },
  { name: "AWS", icon: FaAws, proficiency: 65 },
  { name: "Docker", icon: FaDocker, proficiency: 60 },
  { name: "Git", icon: FaGitAlt, proficiency: 85 },
]

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="skill-card group">
    <div className="skill-icon-wrapper group-hover:bg-white group-hover:text-black transition-all duration-300">
      <skill.icon className="skill-icon" />
    </div>
    <h3 className="skill-name font-light">{skill.name}</h3>
    <div className="mt-2 w-full bg-white bg-opacity-20 h-1">
      <div 
        className="h-full bg-white transition-all duration-700" 
        style={{ width: `${skill.proficiency}%` }}
      />
    </div>
    <span className="text-xs text-gray-400 mt-1">{skill.proficiency}%</span>
  </div>
)

const SkillsSection: React.FC = () => {
  return (
    <section className="mb-32">
      <h2 className="text-4xl font-bold text-center text-white mb-16 font-light tracking-wide">
        Skills & Technologies
      </h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection

