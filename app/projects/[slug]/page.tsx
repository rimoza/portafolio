import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

// This would typically come from a database or API
const projects = [
  {
    slug: 'afmaal-app',
    title: 'Afmaal App',
    description: 'A vocabulary builder designed to enhance language learning in English.',
    fullDescription:
      'Afmaal is an innovative mobile application aimed at helping users expand their English vocabulary. It combines spaced repetition learning techniques with engaging exercises to make the process of learning new words both effective and enjoyable.',
    image: '/images/afmaal.PNG',
    technologies: ['React Native', 'Firebase', 'i18n'],
    features: [
      "Personalized word lists based on user's proficiency",
      'Daily vocabulary challenges',
      'Progress tracking and statistics',
      'Offline mode for learning on-the-go',
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
    image: '/images/opex.PNG',
    technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Real-time expense tracking and categorization',
      'Interactive charts and graphs for data visualization',
      'Budget forecasting and variance analysis',
      'Customizable reports and export options',
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
    image: '/images/matco.PNG',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'Stripe API'],
    features: [
      'Inventory management for vehicles and parts',
      'Service scheduling and tracking',
      'Customer portal for appointment booking and service history',
      'Integrated payment system for online transactions',
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
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white'>
      <div className='max-w-4xl mx-auto px-4 py-12'>
        <Link
          href='/projects'
          className='inline-flex items-center text-primary hover:text-primary-light mb-8'
        >
          <FaArrowLeft className='mr-2' />
          Back to Projects
        </Link>

        <h1 className='text-4xl font-bold mb-4'>{project.title}</h1>

        <div className='mb-8'>
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            width={800}
            height={450}
            className='rounded-lg shadow-lg'
          />
        </div>

        <p className='text-xl mb-8'>{project.fullDescription}</p>

        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Technologies Used</h2>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='bg-primary text-indigo-900 px-3 py-1 rounded-full text-sm'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className='mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Key Features</h2>
          <ul className='list-disc list-inside'>
            {project.features.map((feature, index) => (
              <li key={index} className='mb-2'>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex space-x-4'>
          <a
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-4 py-2 bg-primary text-indigo-900 rounded-full hover:bg-primary-light transition-colors duration-300'
          >
            <FaGithub className='mr-2' />
            View on GitHub
          </a>
          <a
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-4 py-2 bg-primary text-indigo-900 rounded-full hover:bg-primary-light transition-colors duration-300'
          >
            <FaExternalLinkAlt className='mr-2' />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
