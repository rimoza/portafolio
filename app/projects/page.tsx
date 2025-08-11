'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// This would typically come from a database or API
const projects = [
  {
    slug: 'afmaal-app',
    title: 'Afmaal App',
    description: 'A vocabulary builder designed to enhance language learning in English.',
    image: '/images/afmaal.PNG',
    tags: ['React Native', 'Firebase', 'i18n'],
    year: '2023',
  },
  {
    slug: 'opex-dashboard',
    title: 'OPEX Dashboard',
    description: 'Financial management dashboard for increased work efficiency.',
    image: '/images/opex.PNG',
    tags: ['React', 'D3.js', 'Node.js'],
    year: '2023',
  },
  {
    slug: 'matco-web-app',
    title: 'MATCO Web Application',
    description: 'Modern workshop and car sales center web application.',
    image: '/images/matco.PNG',
    tags: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    year: '2024',
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with user authentication and payment integration.',
    image: '/images/e-commerce.PNG',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    year: '2022',
  },
  {
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/images/task-management.PNG',
    tags: ['Vue.js', 'Firebase', 'Vuex'],
    year: '2022',
  },
  {
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    description: 'A responsive weather application with location-based forecasts and interactive maps.',
    image: '/images/weather-app.PNG',
    tags: ['React', 'OpenWeatherMap API', 'Leaflet'],
    year: '2023',
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
                  {project.year}
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
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className='text-xs border border-white border-opacity-30 text-gray-300 px-3 py-1 font-medium'
                    >
                      {tag}
                    </span>
                  ))}
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
