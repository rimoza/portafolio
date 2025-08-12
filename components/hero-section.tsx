"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa"

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gentle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        {/* Minimal geometric accents */}
        <div className="absolute top-20 left-20 w-px h-32 bg-white opacity-10"></div>
        <div className="absolute top-20 left-20 w-32 h-px bg-white opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-px h-32 bg-white opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-32 h-px bg-white opacity-10"></div>
        
        {/* Subtle background typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white opacity-[0.03] text-[18vw] font-bold leading-none select-none">
            RM
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Status indicator */}
          <div className="inline-flex items-center gap-3 mb-12 px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium tracking-wide">Available for Projects</span>
          </div>

          {/* Main content */}
          <div className="space-y-16">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.85]">
                <span className="block text-white font-light mb-4">RIDWAN</span>
                <span className="block bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-thin tracking-[0.15em]">
                  MOHAMED
                </span>
              </h1>
              
              {/* Clean decorative lines */}
              <div className="absolute -left-16 top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gray-400 opacity-50 hidden lg:block"></div>
              <div className="absolute -right-16 top-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gray-400 opacity-50 hidden lg:block"></div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl text-gray-300 font-light tracking-[0.2em] uppercase">
                Full Stack Developer
              </h2>
              
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
              
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="px-6 py-2 text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 hover:text-gray-300 transition-all duration-300">
                  React Specialist
                </span>
                <span className="px-6 py-2 text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 hover:text-gray-300 transition-all duration-300">
                  Problem Solver
                </span>
                <span className="px-6 py-2 text-gray-400 border border-gray-700 rounded-full hover:border-gray-500 hover:text-gray-300 transition-all duration-300">
                  Creative Technologist
                </span>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting digital experiences that bridge creativity and functionality. 
              Transforming complex ideas into elegant, scalable solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a 
                href="#projects" 
                className="px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                VIEW MY WORK
              </a>
              <a 
                href="#contact" 
                className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium transform hover:-translate-y-1"
              >
                GET IN TOUCH
              </a>
            </div>
            
            <div className="flex justify-center space-x-12 pt-8 pb-20">
              <SocialLink href="https://github.com/rimoza" icon={FaGithub} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/rimoza" icon={FaLinkedin} label="LinkedIn" />
              <SocialLink href="mailto:ridwan.maxamed1@gmail.com" icon={FaEnvelope} label="Email" />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="text-gray-500 text-xs font-light mb-3 tracking-widest uppercase">Scroll Down</div>
        <FaChevronDown className="w-5 h-5 text-gray-400 animate-bounce mx-auto" />
      </div>
    </header>
  )
}

const SocialLink = ({ href, icon: Icon, label }: {
    href: string
    icon: React.ComponentType<{ className: string }>
    label: string
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-4 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-1"
    aria-label={label}
  >
    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </div>
  </a>
)

export default HeroSection

