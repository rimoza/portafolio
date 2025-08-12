'use client';

import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaDownload, FaUser, FaCode, FaRocket, FaHeart } from "react-icons/fa"
import AnimatedSection from "../components/animation-section"
import ProjectCard from "../components/project-card"
import SkillsSection from "../components/skills-section"
import MonochromeBackground from "../components/network-background"
import HeroSection from "../components/hero-section"
import ScrollProgressBar from "../components/scroll-progress-bar"
import ContactSection from "../components/contact-section"

const projects = [
  {
    slug: "afmaal-app",
    title: "Afmaal App",
    description: "A vocabulary builder designed to enhance language learning in English.",
    image: "/images/afmaal.PNG",
    tags: ["React Native", "Firebase", "i18n"],
  },
  {
    slug: "opex-dashboard",
    title: "OPEX Dashboard",
    description: "Financial management dashboard for increased work efficiency.",
    image: "/images/opex.PNG",
    tags: ["React", "D3.js", "Node.js"],
  },
  {
    slug: "matco-web-app",
    title: "MATCO Web Application",
    description: "Modern workshop and car sales center web application.",
    image: "/images/matco.PNG",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <MonochromeBackground />
      <ScrollProgressBar />
      <div className="relative z-10">
        <HeroSection />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatedSection>
            <section id="about" className="mb-32 relative">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700 backdrop-blur-sm rounded-3xl p-16 hover:border-gray-600 transition-all duration-500">
                
                {/* Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <FaUser className="text-gray-400 text-2xl" />
                    <h2 className="text-5xl font-bold text-white font-light tracking-wide">About Me</h2>
                    <FaUser className="text-gray-400 text-2xl" />
                  </div>
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content Side */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <p className="text-xl text-gray-300 leading-relaxed font-light">
                        As a passionate{' '}
                        <span className="text-white font-medium">Full Stack Developer</span>
                        {' '}with 3 years of experience, I specialize in crafting beautiful, responsive, and user-friendly web applications.
                      </p>
                      <p className="text-lg text-gray-400 leading-relaxed font-light">
                        My expertise in React and Next.js allows me to build robust and scalable solutions that solve real-world problems efficiently. I believe in writing clean, maintainable code and creating exceptional user experiences.
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 py-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">3+</div>
                        <div className="text-sm text-gray-400 font-light">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">15+</div>
                        <div className="text-sm text-gray-400 font-light">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">100%</div>
                        <div className="text-sm text-gray-400 font-light">Client Satisfaction</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        href="/about" 
                        className="group inline-flex items-center px-8 py-4 bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 rounded-full transform hover:-translate-y-1"
                      >
                        <FaUser className="mr-3" />
                        Learn More About Me
                      </Link>
                      <a 
                        href="/Ridwan-cv.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 hover:border-white hover:text-white font-semibold transition-all duration-300 rounded-full transform hover:-translate-y-1"
                      >
                        <FaDownload className="mr-3" />
                        Download Resume
                      </a>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                      {/* Background Elements */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
                      <div className="absolute -inset-2 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl transform -rotate-3 group-hover:-rotate-1 transition-transform duration-500"></div>
                      
                      {/* Main Image Container */}
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-8 group-hover:border-gray-600 transition-all duration-500">
                        <Image
                          src="/images/coding-illustration.svg"
                          alt="Coding Illustration"
                          width={320}
                          height={320}
                          className="grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-xl flex items-center justify-center">
                          <FaCode className="text-gray-300 text-xl" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-xl flex items-center justify-center">
                          <FaRocket className="text-gray-300 text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <SkillsSection />
          </AnimatedSection>

          <AnimatedSection>
            <section id="projects" className="mb-32">
              <h2 className="text-4xl font-bold text-center text-white mb-6 font-light tracking-wide">Featured Projects</h2>
              <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto font-light">
                Discover some of my recent work showcasing modern web development techniques and creative solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
              <div className="text-center mt-16">
                <Link href="/projects" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 group">
                  View All Projects
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </main>
      </div>

      <footer className="relative z-10 mt-16">
        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 border-t border-gray-700 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
              
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Ridwan Mohamed</h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-transparent mb-4"></div>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Full Stack Developer passionate about creating innovative digital solutions 
                    that make a meaningful impact.
                  </p>
                </div>
                
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for new projects</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <nav className="space-y-4">
                  <Link href="/about" className="block text-gray-400 hover:text-white transition-colors duration-300 font-light hover:translate-x-2 transform">
                    About Me
                  </Link>
                  <Link href="/projects" className="block text-gray-400 hover:text-white transition-colors duration-300 font-light hover:translate-x-2 transform">
                    Projects
                  </Link>
                  <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300 font-light hover:translate-x-2 transform">
                    Contact
                  </Link>
                  <a href="/Ridwan-cv.pdf" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors duration-300 font-light hover:translate-x-2 transform">
                    Resume
                  </a>
                </nav>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <p className="text-gray-400 font-light">
                    Ready to work together? Let's create something amazing.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://github.com/rimoza" target="_blank" rel="noopener noreferrer" 
                       className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1">
                      <FaCode className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/rimoza" target="_blank" rel="noopener noreferrer" 
                       className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1">
                      <FaUser className="w-5 h-5" />
                    </a>
                    <a href="mailto:ridwan.maxamed1@gmail.com" 
                       className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1">
                      <FaRocket className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-gray-400 font-light">
                  <span>&copy; 2024 Ridwan Mohamed.</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1">
                    Made with <FaHeart className="w-3 h-3 text-red-400" /> and lots of coffee
                  </span>
                </div>
                
                <div className="text-gray-500 text-sm font-light">
                  All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

