"use client"

import type React from "react"
import { useState, useEffect } from "react"

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      
      setScrollProgress(progress)
      setIsVisible(scrollTop > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Main progress bar */}
      <div className="h-0.5 bg-white bg-opacity-20">
        <div 
          className="h-full bg-white transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Sophisticated gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-0.5">
        <div 
          className="h-full bg-gradient-to-r from-white via-white to-transparent opacity-60 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-0 right-0 h-1 -mt-0.5">
        <div 
          className="h-full bg-white opacity-20 blur-sm transition-all duration-150"
          style={{ width: `${Math.min(scrollProgress * 100 + 10, 100)}%` }}
        />
      </div>
    </div>
  )
}

export default ScrollProgressBar

