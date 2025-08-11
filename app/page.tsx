'use client';

import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
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
            <section id="about" className="mb-32 border border-white border-opacity-20 p-12">
              <h2 className="text-4xl font-bold text-center text-white mb-16 font-light tracking-wide">About Me</h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                <div className="md:w-1/2">
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                    As a passionate Full Stack Developer with 3 years of experience, I specialize in crafting beautiful,
                    responsive, and user-friendly web applications. My expertise in React and Next.js allows me to build
                    robust and scalable solutions that solve real-world problems efficiently.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/about" className="px-6 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300">
                      Learn More About Me
                    </Link>
                    <a href="/Ridwan-cv.pdf" target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                      Download Resume
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className="border-2 border-white border-opacity-20 p-8">
                      <Image
                        src="/images/coding-illustration.svg"
                        alt="Coding Illustration"
                        width={300}
                        height={300}
                        className="grayscale"
                      />
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

      <footer className="border-t border-white border-opacity-20 text-white py-12 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-6 sm:mb-0">
              <p className="text-gray-400 font-light">&copy; 2024 Ridwan Mohamed. All rights reserved.</p>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 font-light">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300 font-light">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 font-light">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

