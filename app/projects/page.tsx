'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// This would typically come from a database or API
const projects = [
  {
    slug: 'afmaal-app',
    title: 'Afmaal App',
    description: 'A vocabulary builder designed to enhance language learning in English.',
    image: '/images/afmaal.PNG',
    tags: ['React Native', 'Firebase', 'i18n'],
  },
  {
    slug: 'opex-dashboard',
    title: 'OPEX Dashboard',
    description: 'Financial management dashboard for increased work efficiency.',
    image: '/images/opex.PNG',
    tags: ['React', 'D3.js', 'Node.js'],
  },
  {
    slug: 'matco-web-app',
    title: 'MATCO Web Application',
    description: 'Modern workshop and car sales center web application.',
    image: '/images/matco.PNG',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description:
      'A full-featured online shopping platform with user authentication and payment integration.',
    image: '/images/e-commerce.PNG',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    image: '/images/task-management.PNG',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
  },
  {
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    description:
      'A responsive weather application with location-based forecasts and interactive maps.',
    image: '/images/weather-app.PNG',
    tags: ['React', 'OpenWeatherMap API', 'Leaflet'],
  },
];

export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-4xl font-bold text-white mb-8 text-center'>My Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
            >
              <div className='relative h-48'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='p-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>{project.title}</h2>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='text-xs bg-primary text-indigo-900 px-2 py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className='inline-flex items-center text-primary hover:text-primary-light font-medium transition-colors duration-300'
                >
                  View Project
                  <FaArrowRight className='ml-2' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <hr className='text-primary w-full h-2'/>
        <Link href='/' className='flex justify-center items-center gap-2  py-2 text-primary hover:bg-primary-dark hover:text-primary-light'>
            <FaArrowLeft />
            Back to Home
        </Link>
        <hr className='text-primary w-full mt-2 h-2'/>
      </div>
    </div>
  );
}
