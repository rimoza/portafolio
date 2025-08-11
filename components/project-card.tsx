import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa"

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
    <div className="group project-card border border-white border-opacity-20 hover:border-opacity-40">
      <div className="relative h-56 overflow-hidden">
        <Image 
          src={project.image || "/placeholder.svg"} 
          alt={project.title} 
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <Link
              href={`/projects/${project.slug}`}
              className="bg-white text-black font-medium py-2 px-4 hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
            >
              <FaArrowRight />
              View Details
            </Link>
            <a
              href="#"
              className="bg-black text-white font-medium py-2 px-4 hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 text-white font-light">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed font-light">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs border border-white border-opacity-30 text-gray-300 px-3 py-1 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 group border-b border-white border-opacity-0 hover:border-opacity-100 pb-1"
        >
          Learn More
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

