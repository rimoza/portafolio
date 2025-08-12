import type React from "react"
import type { IconType } from "react-icons"
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaCode } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si"

interface Skill {
  name: string
  icon: IconType
  proficiency: number
  category: string
}

const skills: Skill[] = [
  { name: "React", icon: FaReact, proficiency: 90, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, proficiency: 85, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, proficiency: 80, category: "Language" },
  { name: "Node.js", icon: FaNodeJs, proficiency: 75, category: "Backend" },
  { name: "GraphQL", icon: SiGraphql, proficiency: 70, category: "Backend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, proficiency: 85, category: "Frontend" },
  { name: "MongoDB", icon: SiMongodb, proficiency: 75, category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, proficiency: 70, category: "Database" },
  { name: "AWS", icon: FaAws, proficiency: 65, category: "DevOps" },
  { name: "Docker", icon: FaDocker, proficiency: 60, category: "DevOps" },
  { name: "Git", icon: FaGitAlt, proficiency: 85, category: "Tools" },
]

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <div 
    className="group p-8 bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700 rounded-2xl hover:border-gray-500 hover:bg-gradient-to-br hover:from-gray-800/60 hover:to-gray-900/90 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="text-center">
      {/* Icon container */}
      <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-500">
        <skill.icon className="w-10 h-10 text-gray-300 group-hover:text-white transition-colors duration-500" />
      </div>
      
      {/* Skill name */}
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
        {skill.name}
      </h3>
      
      {/* Category */}
      <span className="inline-block px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-400 mb-4 group-hover:border-gray-600 group-hover:text-gray-300 transition-all duration-300">
        {skill.category}
      </span>
      
      {/* Proficiency bar */}
      <div className="relative">
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full transition-all duration-1000 ease-out group-hover:from-gray-400 group-hover:to-gray-300"
            style={{ width: `${skill.proficiency}%` }}
          />
        </div>
        <span className="absolute -top-8 right-0 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {skill.proficiency}%
        </span>
      </div>
    </div>
  </div>
)

const SkillsSection: React.FC = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 mb-6">
          <FaCode className="text-gray-400 text-2xl" />
          <h2 className="text-5xl font-bold text-white font-light tracking-wide">
            Skills & Technologies
          </h2>
          <FaCode className="text-gray-400 text-2xl" />
        </div>
        
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
          A comprehensive toolkit built through years of hands-on experience and continuous learning
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection

