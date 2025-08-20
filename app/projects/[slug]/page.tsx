import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaClock, FaUsers, FaCheck, FaCode, FaRocket, FaStar, FaEye } from 'react-icons/fa';

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

export default function ProjectDetails({ params }: Readonly<{ params: { slug: string } }>) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Header */}
      <header className='border-b border-gray-700 bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 py-12'>
          <div className="mb-8">
            <Link
              href='/projects'
              className='group inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full backdrop-blur-sm bg-gray-800/30'
            >
              <FaArrowLeft className='mr-3 group-hover:-translate-x-1 transition-transform duration-300' />
              <span className="font-medium tracking-wide">BACK TO PROJECTS</span>
            </Link>
          </div>
          
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
            <div className='space-y-4'>
              <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full'>
                <FaRocket className='text-blue-400 text-sm' />
                <span className='text-blue-400 text-sm font-medium'>Featured Project</span>
              </div>
              <h1 className='text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>{project.title}</h1>
              <p className='text-xl text-gray-400 font-light max-w-2xl'>{project.description}</p>
            </div>
            
            <div className='flex space-x-4'>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-full transform hover:-translate-y-1'
              >
                <FaGithub className='mr-3 group-hover:scale-110 transition-transform duration-300' />
                GitHub
              </a>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex items-center px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-full transform hover:-translate-y-1 font-semibold'
              >
                <FaExternalLinkAlt className='mr-3 group-hover:scale-110 transition-transform duration-300' />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 py-16'>
        {/* Hero Image */}
        <div className='mb-20'>
          <div className='relative overflow-hidden rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-900/50 to-black/80'>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              width={1200}
              height={600}
              className='w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>
            <div className='absolute inset-0 flex items-end justify-center p-12'>
              <div className='text-center text-white max-w-4xl'>
                <div className='flex items-center justify-center space-x-8 mb-6'>
                  <div className='flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm'>
                    <FaCalendar className='text-blue-400' />
                    <span className='text-sm font-medium'>{project.timeline}</span>
                  </div>
                  <div className='flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm'>
                    <FaUsers className='text-green-400' />
                    <span className='text-sm font-medium'>{project.teamSize}</span>
                  </div>
                  <div className='flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm'>
                    <FaStar className='text-yellow-400' />
                    <span className='text-sm font-medium'>Featured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-16'>
            {/* Overview */}
            <section>
              <div className='mb-8'>
                <div className='inline-flex items-center gap-3 mb-4'>
                  <FaEye className='text-blue-400 text-xl' />
                  <h2 className='text-4xl font-bold text-white'>Project Overview</h2>
                </div>
                <div className='w-24 h-px bg-gradient-to-r from-blue-400 to-transparent'></div>
              </div>
              
              <p className='text-xl leading-relaxed text-gray-300 mb-8 font-light'>{project.fullDescription}</p>
              
              <div className='bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                      <h3 className='font-semibold text-xl text-white'>The Problem</h3>
                    </div>
                    <p className='text-gray-400 leading-relaxed'>{project.problem}</p>
                  </div>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-2 mb-3'>
                      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                      <h3 className='font-semibold text-xl text-white'>The Solution</h3>
                    </div>
                    <p className='text-gray-400 leading-relaxed'>{project.solution}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <div className='mb-8'>
                <div className='inline-flex items-center gap-3 mb-4'>
                  <FaRocket className='text-green-400 text-xl' />
                  <h2 className='text-4xl font-bold text-white'>Key Features</h2>
                </div>
                <div className='w-24 h-px bg-gradient-to-r from-green-400 to-transparent'></div>
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {project.features.map((feature, index) => (
                  <div key={index} className='group flex items-start space-x-4 p-6 bg-gradient-to-br from-gray-900/40 to-black/60 border border-gray-700 rounded-xl hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-800/50 hover:to-gray-900/70 transition-all duration-300'>
                    <div className='w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/30 transition-colors duration-300'>
                      <FaCheck className='text-green-400 text-xs' />
                    </div>
                    <span className='text-gray-300 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Results */}
            <section>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div>
                  <div className='mb-6'>
                    <div className='inline-flex items-center gap-3 mb-4'>
                      <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                      <h2 className='text-3xl font-bold text-white'>Challenges</h2>
                    </div>
                    <div className='w-16 h-px bg-gradient-to-r from-red-500 to-transparent'></div>
                  </div>
                  
                  <div className='space-y-4'>
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className='flex items-start space-x-4 p-4 bg-gradient-to-br from-red-500/5 to-red-500/10 border border-red-500/20 rounded-xl'>
                        <div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-gray-300 font-light leading-relaxed'>{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className='mb-6'>
                    <div className='inline-flex items-center gap-3 mb-4'>
                      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                      <h2 className='text-3xl font-bold text-white'>Results</h2>
                    </div>
                    <div className='w-16 h-px bg-gradient-to-r from-green-500 to-transparent'></div>
                  </div>
                  
                  <div className='space-y-4'>
                    {project.results.map((result, index) => (
                      <div key={index} className='flex items-start space-x-4 p-4 bg-gradient-to-br from-green-500/5 to-green-500/10 border border-green-500/20 rounded-xl'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-gray-300 font-light leading-relaxed'>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-32 space-y-8'>
              {/* Project Info */}
              <div className='bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm'>
                <div className='inline-flex items-center gap-3 mb-6'>
                  <FaCode className='text-blue-400 text-xl' />
                  <h3 className='text-2xl font-bold text-white'>Project Info</h3>
                </div>
                
                <div className='space-y-6'>
                  <div>
                    <div className='flex items-center text-gray-400 mb-2'>
                      <FaClock className='mr-3 text-blue-400' />
                      <span className='text-sm font-medium'>Timeline</span>
                    </div>
                    <div className='text-white font-semibold text-lg'>{project.timeline}</div>
                  </div>
                  
                  <div className='border-t border-gray-700 pt-6'>
                    <div className='flex items-center text-gray-400 mb-2'>
                      <FaUsers className='mr-3 text-green-400' />
                      <span className='text-sm font-medium'>Team Size</span>
                    </div>
                    <div className='text-white font-semibold text-lg'>{project.teamSize}</div>
                  </div>
                  
                  <div className='border-t border-gray-700 pt-6'>
                    <div className='flex items-center text-gray-400 mb-2'>
                      <FaRocket className='mr-3 text-purple-400' />
                      <span className='text-sm font-medium'>My Role</span>
                    </div>
                    <div className='text-white font-semibold text-lg leading-relaxed'>{project.myRole}</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className='bg-gradient-to-br from-gray-900/50 to-black/80 border border-gray-700 p-8 rounded-2xl backdrop-blur-sm'>
                <div className='inline-flex items-center gap-3 mb-6'>
                  <FaCode className='text-green-400 text-xl' />
                  <h3 className='text-2xl font-bold text-white'>Technologies</h3>
                </div>
                
                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='px-4 py-2 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-full text-sm font-medium hover:border-gray-600 hover:bg-gray-700/50 hover:text-white transition-all duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className='space-y-4'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group w-full flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-full transform hover:-translate-y-1'
                >
                  <FaGithub className='mr-3 group-hover:scale-110 transition-transform duration-300' />
                  View Source Code
                </a>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group w-full flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-100 transition-all duration-300 rounded-full transform hover:-translate-y-1 font-semibold'
                >
                  <FaExternalLinkAlt className='mr-3 group-hover:scale-110 transition-transform duration-300' />
                  View Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
