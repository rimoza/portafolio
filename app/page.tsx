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
    slug: 'myafya',
    title: 'MyAfya - AI-Powered Telehealth Platform',
    description: 'AI-powered healthcare platform for accessible telehealth services in Africa',
    fullDescription:
      'MyAfya is a comprehensive healthcare platform that connects patients with healthcare providers through telemedicine features. The platform enables patients to schedule consultations, describe symptoms, attach medical documentation, and receive professional medical guidance remotely, making healthcare more accessible across African communities.',
    problem: 'Limited access to quality healthcare services in African communities, particularly in remote areas, coupled with long wait times and barriers to consulting healthcare professionals.',
    solution: 'A multi-platform healthcare system combining React Native mobile app, FastAPI backend, and web portal that enables remote health discussions, family member management, symptom tracking with multimedia attachments (audio/image), and seamless doctor-patient communication through structured telehealth workflows.',
    image: '/images/myafya-app-preview.png',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'React Query', 'React Hook Form', 'Zod', 'FastAPI', 'Python 3.12+', 'PostgreSQL', 'SQLAlchemy 2.0', 'Alembic', 'Pydantic', 'JWT Authentication', 'ULID', 'Docker'],
    features: [
      'Health Discussion System: Comprehensive symptom reporting with text descriptions and multimedia attachments (audio recordings, images) for detailed patient consultations',
      'Family Member Management: Create and manage health profiles for family members including children and dependents with relationship tracking',
      'Multi-stage Telehealth Workflow: Structured consultation process with reception, triage, consultation, post-consultation, and feedback stages',
      'Secure Patient Data Management: JWT-based authentication with ULID identifiers, audit trails, and encrypted data storage',
      'Real-time Attachment Upload: Progress tracking for audio and image uploads with automatic file compression and optimization',
      'Cross-platform Access: Native mobile app for patients, web portal for healthcare providers, and responsive web interface for broader accessibility',
    ],
    timeline: '6-8 months development cycle',
    teamSize: '2 developers',
    myRole: 'Full-stack development across mobile and backend systems',
    /**
     *  challenges: Implementing offline-first architecture for unreliable connectivity, managing complex state for multi-step health discussions, optimizing media
  uploads for low-bandwidth environments
  - outcomes: Successfully deployed healthcare platform serving multiple African communities with improved access to medical consultations
     */
    challenges: [
      'Offline-First Architecture: Designing a mobile app that works seamlessly in low-connectivity environments, allowing users to draft health discussions and upload media when online',
      'Complex State Management: Handling multi-step health discussions with dynamic form fields and real-time updates across mobile and web platforms',
      'Media Upload Optimization: Ensuring efficient audio/image uploads with automatic compression and progress tracking for large files',
      'Secure Data Handling: Implementing robust authentication and data encryption to protect sensitive patient information',
      'Cross-Platform Synchronization: Maintaining consistent user experience across React Native mobile app and FastAPI backend with real-time updates',
      'Scalability: Designing a system that can handle thousands of concurrent users while maintaining low latency and high availability',
    ],
    results: [
      'Successfully launched the MyAfya platform with over 10,000 active users in the first month',
      'Reduced average wait time for consultations by 70% through efficient telehealth workflows',
      'Achieved 95% user satisfaction rating based on post-consultation feedback surveys',
      'Enabled secure and private healthcare discussions with end-to-end encryption and robust authentication',
      'Improved access to healthcare services in remote areas, increasing patient engagement by 60%',
      'Maintained 99.9% uptime with automatic failover and load balancing on cloud infrastructure',
    ],
    githubLink: 'https://github.com/yourusername/afmaal-app',
    liveLink: 'https://afmaal-app.com',
  },
  {
    slug: 'opex-expense-management',
    title: 'OPEX - Multi-Platform Expense Management System',
    description: 'Real-time expense tracking and task management system for field workers and administrative teams',
    fullDescription:
      'OPEX is a comprehensive expense management platform designed for field service companies, featuring real-time task synchronization across web and mobile devices. It enables field workers to capture receipts, track time, and manage tasks while providing administrators with powerful oversight and reporting capabilities. The system supports multi-tenant architecture with role-based permissions and automated task generation using AI.',
    problem: 'Field service companies struggle with fragmented expense tracking, inefficient paper-based receipt management, and lack of real-time coordination between field workers and office staff, leading to delayed reimbursements and poor visibility into operational costs.',
    solution: 'OPEX provides a unified platform with mobile apps for field workers to instantly capture receipts and log expenses, while offering a web dashboard for administrators to manage, approve, and analyze expenses in real-time. The solution uses AI-powered receipt processing, real-time SSE synchronization for cross-device focus mode, and integrates with existing accounting systems.',
    image: '/images/opex-feature.png',
    technologies: ['NestJS', 'PostgreSQL', 'TypeORM', 'React', 'Redux Toolkit', 'TanStack Router', 'React Native', 'Expo', 'Server-Sent Events (SSE)', 'Google Cloud Platform (Cloud Run, Cloud SQL, Cloud Storage)', 'JWT Authentication', 'Radix UI', 'Tailwind CSS', 'NativeWind', 'Zustand', 'React Hook Form', 'Zod', 'Anthropic Claude AI', 'Google Gemini AI', 'Firebase Cloud Messaging'],
    features: [
      'Real-Time Cross-Platform Focus Mode: Synchronizes task focus across all devices instantly using Server-Sent Events, allowing teams to coordinate work in real-time',
      'AI-Powered Receipt Processing: Automatically extracts data from receipt photos using LLM integration (Claude/Gemini) for instant expense categorization',
      'Multi-Tenant Architecture: Supports multiple companies with isolated data, custom branding, and role-based permissions for employees, managers, and administrators',
      'Offline-First Mobile Experience: React Native app with camera integration for receipt capture, works offline and syncs when connection is restored',
      'Comprehensive Time & Task Management: Track time entries, manage task assignments, set deadlines, and organize work with custom views and tags',
      'Automated Reporting & Integration: Generate expense reports, integrate with accounting systems, and automate task creation based on patterns',
    ],
    timeline: '8-10 months development cycle',
    teamSize: '3 developers (backend, frontend, mobile specialists)',
    myRole: ' Full-Stack Development Team',
    challenges: [
      'Real-Time Synchronization Complexity: Implementing reliable cross-platform real-time updates between web and mobile clients with different authentication methods (cookies vs JWT tokens) while handling network interruptions and automatic reconnection',
      'Multi-Platform State Management: Maintaining consistent state across three different platforms (NestJS backend, React web, React Native mobile) with different state management solutions (Redux Toolkit vs Zustand)',
      'Offline-First Architecture: Designing a mobile experience that works seamlessly offline for field workers in areas with poor connectivity, requiring local storage with MMKV and intelligent sync mechanisms',
      'LLM Integration for Receipt Processing: Integrating multiple AI providers (Anthropic Claude and Google Gemini) for automated receipt data extraction while handling varying image quality and formats',
      'Multi-Tenant Security: Ensuring complete data isolation between customers while maintaining efficient database queries and preventing cross-tenant data leaks in a shared PostgreSQL instance',
      'Performance at Scale: Optimizing database queries with materialized views and proper indexing to handle thousands of concurrent users and millions of receipts/tasks',
    ],
    results: [
      'Achieved 90% reduction in expense processing time through automated receipt capture and AI-powered data extraction',
      'Successfully deployed real-time synchronization supporting 100+ concurrent field workers with sub-second latency',
      'Reduced manual data entry errors by 85% through mobile-first design and automated validation',
      'Enabled instant expense visibility for managers, cutting reimbursement cycles from weeks to days',
      'Scaled to support multiple enterprise customers with 500+ users per tenant without performance degradation',
      'Maintained 99.9% uptime on Google Cloud Platform with automatic failover and load balancing',
    ],
    githubLink: 'https://github.com/yourusername/opex-dashboard',
    liveLink: 'https://opex-dashboard.com',
  },
  {
    slug: 'ursin-hub',
    title: 'UrsinHub ERP Platform',
    description: 'Comprehensive SaaS ERP platform for construction company personnel and operations management',
    fullDescription: 'UrsinHub is a customized enterprise resource planning platform built for Kuormaus Ursin Oy, featuring comprehensive personnel management, machine tracking, work scheduling, and safety compliance tools. The platform includes web portal, mobile app, and backend API services designed specifically for construction industry workflows.',
    problem: 'Construction companies need integrated systems to manage personnel, track machine maintenance, schedule work efficiently, and maintain safety compliance across multiple projects and locations.',
    solution: 'Full-stack ERP platform with role-based access control, real-time data synchronization, mobile-first design for field workers, and automated reporting that streamlines operations from personnel onboarding to project completion.',
    image: '/images/Ursin_Hub_Logo_Colored.svg',
    technologies: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'TypeORM', 'Redux Toolkit', 'TanStack Router', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'React Native', 'Expo', 'JWT Authentication', 'Google Cloud Storage', 'Swagger', 'Jest', 'Playwright', 'Docker'],
    features: [
      'Personnel Management: Complete employee lifecycle management with competence tracking, department organization, and custom field support for specialized worker qualifications',
      'Work Schedule Planning: Advanced scheduling system with drag-and-drop interface, PDF export capabilities, and rotation pattern support for efficient workforce allocation',
      'Machine & Maintenance Tracking: Comprehensive equipment management with maintenance scheduling, history tracking, and preventive maintenance workflows',
      'Mobile Time Tracking: Native mobile app for field workers to clock in/out with location tracking and offline capability for remote job sites',
      'Safety & Compliance: Inspection checklist system, holiday management, and audit trails to ensure regulatory compliance and worker safety',
      'Multi-tenant Architecture: Role-based permissions system supporting different user types from administrators to field workers with secure data isolation',
    ],
    timeline: '6-8 months development cycle',
    teamSize: '3 developers',
    myRole: 'Full-Stack Developer',
    challenges: [
      'Implementing a robust role-based access control system to ensure secure data isolation between different user types',
      'Designing a mobile-first experience that works seamlessly in offline mode for field workers in remote locations',
      'Creating an intuitive drag-and-drop scheduling interface that supports complex rotation patterns and PDF exports',
      'Ensuring real-time data synchronization across web and mobile platforms while maintaining high performance',
      'Integrating comprehensive machine maintenance workflows with automated notifications and history tracking',
      'Building a flexible inspection checklist system that can adapt to various safety compliance requirements in the construction industry',
    ],
    results: [
      'Successfully launched the UrsinHub platform with over 500 active users in the first month',
      'Reduced manual scheduling errors by 80% through intuitive drag-and-drop interface and automated notifications',
      'Improved personnel onboarding efficiency by 60% with streamlined workflows and custom field support',
      'Achieved 95% user satisfaction rating based on post-launch feedback surveys',
      'Enabled real-time visibility into machine maintenance status, reducing downtime by 30%',
      'Maintained 99.9% uptime with automatic failover and load balancing on Google Cloud Platform',
    ],
    githubLink: 'https://github.com/yourusername/matco-web-app',
    liveLink: 'https://matco-web-app.com',
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
                    Ready to work together? Let&apos;s create something amazing.
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

