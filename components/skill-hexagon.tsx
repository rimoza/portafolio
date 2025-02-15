import type React from "react"
import { motion } from "framer-motion"
import type { IconType } from "react-icons"

interface SkillHexagonProps {
  skill: {
    name: string
    icon: IconType
    color: string
    proficiency: number
  }
  index: number
}

const SkillHexagon: React.FC<SkillHexagonProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="skill-hexagon"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="hexagon-inner" style={{ backgroundColor: skill.color }}>
        <skill.icon className="skill-icon" />
        <div className="skill-info">
          <h3 className="skill-name">{skill.name}</h3>
          <div className="skill-proficiency">
            <div className="proficiency-bar" style={{ width: `${skill.proficiency}%` }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SkillHexagon

