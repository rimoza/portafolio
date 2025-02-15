'use client';

import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import AnimatedSection from "../components/animation-section"
import ProjectCard from "../components/project-card"
import SkillsSection from "../components/skills-section"
import NetworkBackground from "../components/network-background"
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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      <NetworkBackground />
      <ScrollProgressBar />
      <div className="relative z-10">
        <HeroSection />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatedSection>
            <section className="mb-20 glass-effect p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl font-bold text-center text-white mb-8">About Me</h2>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    As a passionate Full Stack Developer with 3 years of experience, I specialize in crafting beautiful,
                    responsive, and user-friendly web applications. My expertise in React and Next.js allows me to build
                    robust and scalable solutions that not only look great but also solve real-world problems
                    efficiently.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/about"
                      className="inline-block bg-white text-indigo-900 font-semibold py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
                    >
                      Learn More About Me
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <Image
                    src="/images/coding-illustration.svg"
                    alt="Coding Illustration"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <SkillsSection />
          </AnimatedSection>

          <AnimatedSection>
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href="/projects" className="button-primary group">
                  View All Projects
                  <FaArrowRight className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <ContactSection />
          </AnimatedSection>
        </main>
      </div>

      <footer className="bg-indigo-900 bg-opacity-50 text-white py-8 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2024 Ridwan Mohamed. All rights reserved.</p>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-primary transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

