'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// This would typically come from a database or API
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
];

export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Enhanced Header */}
      <header className='relative border-b border-white border-opacity-20 bg-black'>
        {/* Background geometric elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-8 right-8 w-32 h-32 border border-white border-opacity-5 rotate-45"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 border border-white border-opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-px h-16 bg-white opacity-10 transform -rotate-12"></div>
          <div className="absolute top-1/2 right-1/4 w-px h-16 bg-white opacity-10 transform rotate-12"></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 py-16'>
          {/* Enhanced back button */}
          <div className="mb-12">
            <Link
              href='/'
              className='group inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 border border-white border-opacity-20 hover:border-opacity-40 px-6 py-3'
            >
              <FaArrowLeft className='mr-3 group-hover:-translate-x-1 transition-transform duration-300' />
              <span className="font-light tracking-wide">BACK TO HOME</span>
            </Link>
          </div>

          {/* Hero content */}
          <div className='text-center max-w-5xl mx-auto'>
            <div className="mb-8">
              <div className="text-sm text-gray-500 font-light tracking-[0.3em] uppercase mb-4">
                Portfolio • 2022 - 2024
              </div>
              <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 font-light tracking-tight leading-none'>
                <span className="block">ALL</span>
                <span className="block font-thin tracking-widest">PROJECTS</span>
              </h1>
              
              {/* Decorative line */}
              <div className="w-32 h-px bg-white opacity-30 mx-auto mb-8"></div>
            </div>
            
            <p className='text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-8'>
              A comprehensive collection of my work spanning web development, 
              mobile applications, and full-stack solutions. Each project represents 
              a unique challenge solved through innovative thinking and technical expertise.
            </p>

            {/* Project stats */}
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">{projects.length}</div>
                <div className="text-sm text-gray-400 font-light tracking-wider uppercase">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">3+</div>
                <div className="text-sm text-gray-400 font-light tracking-wider uppercase">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-white mb-2">10+</div>
                <div className="text-sm text-gray-400 font-light tracking-wider uppercase">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className='group project-card border border-white border-opacity-20 hover:border-opacity-40'
            >
              <div className='relative h-72 overflow-hidden'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className='object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300'></div>
                <div className='absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 text-sm font-light'>
                  {/* {project.year} */}
                </div>
              </div>
              
              <div className='p-8'>
                <h2 className='text-3xl font-bold mb-4 text-white font-light group-hover:text-gray-300 transition-colors duration-300'>
                  {project.title}
                </h2>
                <p className='text-gray-400 mb-6 leading-relaxed font-light text-lg'>
                  {project.description}
                </p>
                
                <div className='flex flex-wrap gap-2 mb-8'>
                  {/* {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className='text-xs border border-white border-opacity-30 text-gray-300 px-3 py-1 font-medium'
                    >
                      {tag}
                    </span>
                  ))} */}
                </div>
                
                <Link
                  href={`/projects/${project.slug}`}
                  className='inline-flex items-center text-white hover:text-gray-300 transition-colors duration-300 group border-b border-white border-opacity-0 hover:border-opacity-100 pb-1 font-medium'
                >
                  View Project Details
                  <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-24 text-center border-t border-white border-opacity-20 pt-16'>
          <h2 className='text-3xl font-bold mb-6 font-light'>Interested in Working Together?</h2>
          <p className='text-xl text-gray-400 mb-8 font-light max-w-2xl mx-auto'>
            I&apos;m always open to discussing new opportunities and innovative projects.
          </p>
          <Link 
            href="/#contact" 
            className='inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-all duration-300'
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
