import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/projects/${project.slug}`}
            className="text-white font-semibold py-2 px-4 rounded-full bg-primary hover:bg-primary-light transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-primary text-indigo-900 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-primary hover:text-primary-light font-medium transition-colors duration-300 flex items-center"
        >
          Learn More
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard

