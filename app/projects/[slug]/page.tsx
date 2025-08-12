import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaClock, FaUsers, FaCheck, FaCode, FaRocket, FaStar, FaEye } from 'react-icons/fa';

// This would typically come from a database or API
const projects = [
  {
    slug: 'afmaal-app',
    title: 'Afmaal App',
    description: 'A vocabulary builder designed to enhance language learning in English.',
    fullDescription:
      'Afmaal is an innovative mobile application aimed at helping users expand their English vocabulary. It combines spaced repetition learning techniques with engaging exercises to make the process of learning new words both effective and enjoyable.',
    problem: 'Traditional vocabulary learning methods are often boring and ineffective, leading to poor retention rates and user engagement.',
    solution: 'Created an interactive mobile app using spaced repetition algorithms and gamification techniques to make vocabulary learning engaging and effective.',
    image: '/images/afmaal.PNG',
    technologies: ['React Native', 'Firebase', 'i18n', 'Redux'],
    features: [
      "Personalized word lists based on user's proficiency",
      'Daily vocabulary challenges with streak rewards',
      'Advanced progress tracking and detailed statistics',
      'Offline mode for seamless learning experience',
      'Multiple learning modes: flashcards, quizzes, and games',
      'Social features for competing with friends',
    ],
    timeline: '3 months',
    teamSize: '2 developers',
    myRole: 'Lead Frontend Developer & UI/UX Designer',
    challenges: [
      'Implementing efficient offline data synchronization',
      'Designing adaptive learning algorithms',
      'Optimizing performance for low-end devices',
    ],
    results: [
      '500+ active users within first month',
      '85% user retention rate after 30 days',
      '4.8/5 rating on app stores',
    ],
    githubLink: 'https://github.com/yourusername/afmaal-app',
    liveLink: 'https://afmaal-app.com',
  },
  {
    slug: 'opex-dashboard',
    title: 'OPEX Dashboard',
    description: 'Financial management dashboard for increased work efficiency.',
    fullDescription:
      'The OPEX Dashboard is a comprehensive financial management tool designed to streamline operational expenses tracking and analysis. It provides real-time insights and visualizations to help businesses make informed decisions and optimize their spending.',
    problem: 'Companies struggled with manual expense tracking, leading to budget overruns and poor financial visibility.',
    solution: 'Developed an automated dashboard with real-time analytics, predictive modeling, and intuitive visualizations for better financial control.',
    image: '/images/opex.PNG',
    technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    features: [
      'Real-time expense tracking and automated categorization',
      'Interactive charts and graphs with drill-down capabilities',
      'AI-powered budget forecasting and variance analysis',
      'Customizable reports and automated email alerts',
      'Multi-currency support and exchange rate tracking',
      'Role-based access control and approval workflows',
    ],
    timeline: '4 months',
    teamSize: '3 developers',
    myRole: 'Full Stack Developer & Data Visualization Specialist',
    challenges: [
      'Processing large datasets with optimal performance',
      'Creating intuitive data visualization interfaces',
      'Implementing real-time updates without performance loss',
    ],
    results: [
      '40% reduction in budget planning time',
      '99.9% uptime achieved',
      'Adopted by 50+ mid-size companies',
    ],
    githubLink: 'https://github.com/yourusername/opex-dashboard',
    liveLink: 'https://opex-dashboard.com',
  },
  {
    slug: 'matco-web-app',
    title: 'MATCO Web Application',
    description: 'Modern workshop and car sales center web application.',
    fullDescription:
      'MATCO Web Application is a full-featured platform for managing a modern car workshop and sales center. It integrates various aspects of automotive business operations, from inventory management to customer relationship management, all in one seamless interface.',
    problem: 'Traditional automotive businesses relied on paper-based processes and disconnected systems, causing inefficiencies and poor customer experience.',
    solution: 'Built a comprehensive web platform that unifies all business operations with modern UI/UX, automated workflows, and customer self-service capabilities.',
    image: '/images/matco.PNG',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe API', 'Socket.io', 'Prisma'],
    features: [
      'Comprehensive inventory management for vehicles and parts',
      'Advanced service scheduling with automated reminders',
      'Customer portal with appointment booking and service history',
      'Integrated payment system supporting multiple payment methods',
      'Real-time notifications and communication system',
      'Mobile-responsive design for on-the-go access',
    ],
    timeline: '6 months',
    teamSize: '4 developers',
    myRole: 'Lead Full Stack Developer & System Architect',
    challenges: [
      'Designing scalable database architecture for complex relationships',
      'Implementing real-time features without compromising performance',
      'Ensuring seamless payment integration and security compliance',
    ],
    results: [
      '60% improvement in operational efficiency',
      '300% increase in online appointment bookings',
      '95% customer satisfaction rating',
    ],
    githubLink: 'https://github.com/yourusername/matco-web-app',
    liveLink: 'https://matco-web-app.com',
  },
];

export default function ProjectDetails({ params }: { params: { slug: string } }) {
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
