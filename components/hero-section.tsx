"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaChevronDown } from "react-icons/fa"

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Decorative geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-px h-32 bg-white opacity-20"></div>
        <div className="absolute top-20 left-20 w-32 h-px bg-white opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-px h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-32 h-px bg-white opacity-20"></div>
        
        {/* Large typography background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white opacity-[0.02] text-[20vw] font-bold leading-none select-none">
            R M
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Main content */}
          <div className="space-y-12">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tight leading-none">
                <span className="block text-white font-light">RIDWAN</span>
                <span className="block text-white font-thin tracking-widest">MOHAMED</span>
              </h1>
              
              {/* Decorative lines */}
              <div className="absolute -left-16 top-1/2 w-12 h-px bg-white opacity-30 hidden lg:block"></div>
              <div className="absolute -right-16 top-1/2 w-12 h-px bg-white opacity-30 hidden lg:block"></div>
            </div>
            
            <div className="relative py-8">
              <div className="text-xl sm:text-2xl text-gray-300 mb-6 font-light tracking-[0.2em] uppercase">
                Full Stack Developer
              </div>
              <div className="w-24 h-px bg-white opacity-30 mx-auto mb-6"></div>
              <div className="text-base sm:text-lg text-gray-400 font-light">
                React Specialist • Problem Solver • Creative Technologist
              </div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting digital experiences that bridge creativity and functionality. 
              Transforming complex ideas into elegant, scalable, and user-centric solutions 
              that make a meaningful impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a 
                href="#projects" 
                className="group px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">VIEW MY WORK</span>
                <div className="absolute inset-0 bg-gray-900 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="#contact" 
                className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
              >
                GET IN TOUCH
              </a>
            </div>
            
            <div className="flex justify-center space-x-6 pt-8">
              <SocialLink href="https://github.com/rimoza" icon={FaGithub} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/ridwan-mohamed-363477161/" icon={FaLinkedin} label="LinkedIn" />
              <SocialLink href="https://twitter.com/rimoza_10" icon={FaTwitter} label="Twitter" />
              <SocialLink href="mailto:ridwan.maxamed1@gmail.com" icon={FaEnvelope} label="Email" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-40 animate-bounce">
        <FaChevronDown className="w-5 h-5" />
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
    className="group relative p-4 border border-white border-opacity-20 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
    aria-label={label}
  >
    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      {label}
    </div>
  </a>
)

export default HeroSection

