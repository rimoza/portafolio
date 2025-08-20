import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaExternalLinkAlt, FaEye, FaCode } from "react-icons/fa"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  // tags: string[]
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-gray-500 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-black/50"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden rounded-t-2xl">
        <Image 
          src={project.image || "/placeholder.svg"} 
          alt={project.title} 
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="bg-white/90 hover:bg-white text-black font-semibold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
          >
            <FaEye className="w-4 h-4" />
            View Details
          </Link>
        </div>

        {/* Project Number */}
        <div className="absolute top-4 left-4 w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <span className="text-white text-sm font-bold">{(index + 1).toString().padStart(2, '0')}</span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-100 transition-colors duration-300">
            {project.title}
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-transparent group-hover:from-gray-300 transition-colors duration-300"></div>
        </div>
        
        <p className="text-gray-400 mb-6 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {/* {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-gray-800/50 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full font-medium group-hover:border-gray-600 group-hover:bg-gray-700/50 transition-all duration-300"
            >
              {tag}
            </span>
          ))} */}
        </div>
        
        {/* Action Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="group/button inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 font-medium"
        >
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full group-hover/button:border-gray-500 group-hover/button:bg-gray-800/30 transition-all duration-300">
            <FaCode className="w-4 h-4" />
            <span>Learn More</span>
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </div>
        </Link>
      </div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      </div>
    </div>
  )
}

export default ProjectCard

