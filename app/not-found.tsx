import Link from 'next/link';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import MonochromeBackground from '../components/network-background';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center relative'>
      <MonochromeBackground />
      
      {/* Geometric elements for visual interest */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white border-opacity-10 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white border-opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-px h-32 bg-white opacity-5 transform rotate-12"></div>
      </div>

      <div className='relative z-10 text-center max-w-2xl mx-auto px-4'>
        {/* Large 404 Typography */}
        <div className="relative mb-12">
          <div className="text-[20rem] sm:text-[25rem] font-bold leading-none text-white opacity-[0.03] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
            404
          </div>
          <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none relative z-10'>
            <span className="block text-white font-light">PAGE</span>
            <span className="block text-white font-thin tracking-widest">NOT FOUND</span>
          </h1>
        </div>

        {/* Description */}
        <div className="mb-12">
          <div className="w-24 h-px bg-white opacity-30 mx-auto mb-6"></div>
          <p className='text-xl sm:text-2xl text-gray-400 font-light leading-relaxed'>
            The page you&apos;re looking for seems to have wandered off into the digital void. 
            Let&apos;s get you back to familiar territory.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href='/'
            className='group inline-flex items-center px-10 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300'
          >
            <FaHome className="mr-3 group-hover:scale-110 transition-transform duration-300" />
            BACK TO HOME
          </Link>
          <Link
            href='/projects'
            className='inline-flex items-center px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium'
          >
            VIEW PROJECTS
          </Link>
        </div>

        {/* Additional help text */}
        <div className="mt-16 text-sm text-gray-500 font-light">
          <p>Error Code: 404 • Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
