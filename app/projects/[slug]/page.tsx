import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCalendar, FaClock, FaUsers, FaCheck } from 'react-icons/fa';

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
    <div className='min-h-screen bg-white text-black'>
      {/* Header */}
      <header className='border-b border-gray-200 bg-white sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <div className="mb-6">
            <Link
              href='/projects'
              className='group inline-flex items-center text-gray-600 hover:text-black transition-all duration-300 border border-gray-300 hover:border-black px-6 py-3'
            >
              <FaArrowLeft className='mr-3 group-hover:-translate-x-1 transition-transform duration-300' />
              <span className="font-medium tracking-wide">BACK TO PROJECTS</span>
            </Link>
          </div>
          <div className='flex items-center justify-between'>
            <h1 className='text-4xl font-bold'>{project.title}</h1>
            <div className='flex space-x-4'>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200'
              >
                <FaGithub className='mr-2' />
                GitHub
              </a>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-200'
              >
                <FaExternalLinkAlt className='mr-2' />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 py-12'>
        {/* Hero Image */}
        <div className='mb-16'>
          <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              width={1200}
              height={600}
              className='w-full h-96 object-cover'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
              <div className='text-center text-white'>
                <p className='text-xl mb-4'>{project.description}</p>
                <div className='flex items-center justify-center space-x-6 text-sm'>
                  <div className='flex items-center'>
                    <FaCalendar className='mr-2' />
                    {project.timeline}
                  </div>
                  <div className='flex items-center'>
                    <FaUsers className='mr-2' />
                    {project.teamSize}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-12'>
            {/* Overview */}
            <section>
              <h2 className='text-3xl font-bold mb-6 border-b border-gray-200 pb-3'>Project Overview</h2>
              <p className='text-lg leading-relaxed text-gray-700 mb-6'>{project.fullDescription}</p>
              
              <div className='bg-gray-50 p-6 rounded-xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h3 className='font-semibold text-lg mb-3'>The Problem</h3>
                    <p className='text-gray-600'>{project.problem}</p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-3'>The Solution</h3>
                    <p className='text-gray-600'>{project.solution}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className='text-3xl font-bold mb-6 border-b border-gray-200 pb-3'>Key Features</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {project.features.map((feature, index) => (
                  <div key={index} className='flex items-start space-x-3 p-4 bg-gray-50 rounded-lg'>
                    <FaCheck className='text-green-600 mt-1 flex-shrink-0' />
                    <span className='text-gray-700'>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Results */}
            <section>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h2 className='text-2xl font-bold mb-4'>Challenges</h2>
                  <ul className='space-y-3'>
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-gray-700'>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className='text-2xl font-bold mb-4'>Results</h2>
                  <ul className='space-y-3'>
                    {project.results.map((result, index) => (
                      <li key={index} className='flex items-start space-x-3'>
                        <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                        <span className='text-gray-700'>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-32 space-y-8'>
              {/* Project Info */}
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-4'>Project Info</h3>
                <div className='space-y-4'>
                  <div>
                    <div className='flex items-center text-sm text-gray-600 mb-1'>
                      <FaClock className='mr-2' />
                      Timeline
                    </div>
                    <div className='font-semibold'>{project.timeline}</div>
                  </div>
                  <div>
                    <div className='flex items-center text-sm text-gray-600 mb-1'>
                      <FaUsers className='mr-2' />
                      Team Size
                    </div>
                    <div className='font-semibold'>{project.teamSize}</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-600 mb-1'>My Role</div>
                    <div className='font-semibold'>{project.myRole}</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='text-xl font-bold mb-4'>Technologies Used</h3>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-black text-white px-3 py-1 rounded-full text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className='space-y-3'>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full flex items-center justify-center px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200'
                >
                  <FaGithub className='mr-2' />
                  View Source Code
                </a>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-200'
                >
                  <FaExternalLinkAlt className='mr-2' />
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
