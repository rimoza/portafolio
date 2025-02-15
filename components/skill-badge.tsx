import type React from "react"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
  index: number
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <motion.span
      className="skill-badge"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {skill}
    </motion.span>
  )
}

export default SkillBadge

