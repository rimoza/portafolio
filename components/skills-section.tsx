import type React from "react"
import { motion } from "framer-motion"
import SkillHexagon from "./skill-hexagon"
import type { IconType } from "react-icons"
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si"
// import { GiAgility } from "react-icons/gi"

interface Skill {
  name: string
  icon: IconType
  color: string
  proficiency: number
}

const skills: Skill[] = [
  { name: "React", icon: FaReact, color: "#61DAFB", proficiency: 90 },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", proficiency: 85 },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", proficiency: 80 },
  { name: "Node.js", icon: FaNodeJs, color: "#339933", proficiency: 75 },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098", proficiency: 70 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", proficiency: 85 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", proficiency: 75 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", proficiency: 70 },
  { name: "AWS", icon: FaAws, color: "#FF9900", proficiency: 65 },
  { name: "Docker", icon: FaDocker, color: "#2496ED", proficiency: 60 },
  { name: "Git", icon: FaGitAlt, color: "#F05032", proficiency: 85 },
//   { name: "Agile", icon: GiAgility, color: "#0052CC", proficiency: 80 },
]

const SkillsSection: React.FC = () => {
  return (
    <section className="mb-20">
      <motion.h2
        className="text-3xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Technologies
      </motion.h2>
      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {skills.map((skill, index) => (
          <SkillHexagon key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </section>
  )
}

export default SkillsSection

