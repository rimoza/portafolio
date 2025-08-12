'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group p-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 text-gray-400 rounded-full backdrop-blur-sm hover:border-gray-500 hover:text-white hover:from-gray-700/90 hover:to-gray-800/90 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-black/50"
          aria-label="Go to top"
        >
          <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          
          {/* Pulse effect */}
          <div className="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Back to Top
          </div>
        </button>
      )}
    </>
  );
};

export default GoToTop;