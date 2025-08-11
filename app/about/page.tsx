'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaLaptopCode, FaMobile, FaServer, FaPalette } from 'react-icons/fa';
import MonochromeBackground from '../../components/network-background';
import AnimatedSection from '../../components/animation-section';

export default function AboutPage() {
  const experiences = [
    {
      period: '2021 - Present',
      role: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Developing end-to-end web applications using modern technologies like React, Next.js, Node.js, and MongoDB. Focus on creating scalable, user-centric solutions.',
      achievements: [
        'Built 15+ production applications',
        'Improved client conversion rates by 40%',
        'Mentored 5+ junior developers'
      ]
    },
    {
      period: '2020 - 2021',
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc',
      description: 'Specialized in React development and UI/UX implementation. Collaborated with design teams to create pixel-perfect, responsive interfaces.',
      achievements: [
        'Reduced load times by 60%',
        'Implemented design system used by 10+ projects',
        'Led migration from jQuery to React'
      ]
    }
  ];

  const skills = [
    { category: 'Frontend', icon: FaLaptopCode, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', icon: FaServer, items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'] },
    { category: 'Mobile', icon: FaMobile, items: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android'] },
    { category: 'Design', icon: FaPalette, items: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping', 'Design Systems'] }
  ];

  return (
    <div className='min-h-screen bg-black text-white'>
      <MonochromeBackground />
      
      {/* Header */}
      <header className='relative border-b border-white border-opacity-20 bg-black'>
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
                About Me • Full Stack Developer
              </div>
              <h1 className='text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 font-light tracking-tight leading-none'>
                <span className="block">RIDWAN</span>
                <span className="block font-thin tracking-widest">MOHAMED</span>
              </h1>
              
              {/* Decorative line */}
              <div className="w-32 h-px bg-white opacity-30 mx-auto mb-8"></div>
            </div>
            
            <p className='text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed'>
              A passionate developer dedicated to crafting exceptional digital experiences 
              through innovative technology and thoughtful design.
            </p>
          </div>
        </div>
      </header>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Profile Section */}
        <AnimatedSection>
          <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-light tracking-wide">My Story</h2>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p className="text-lg">
                  I&apos;m a Full Stack Developer with over 3 years of experience building web and mobile applications. 
                  My journey began with a curiosity about how things work on the internet, and it has evolved into 
                  a passion for creating meaningful digital solutions.
                </p>
                <p className="text-lg">
                  I specialize in React, Next.js, and Node.js, but I believe the best developers are tool-agnostic. 
                  What matters most is understanding user needs and translating them into elegant, functional code.
                </p>
                <p className="text-lg">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source projects, 
                  or mentoring fellow developers in the community.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="/Ridwan-cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300"
                >
                  <FaDownload className="mr-3" />
                  DOWNLOAD RESUME
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 border border-white border-opacity-10"></div>
                <div className="absolute -inset-8 border border-white border-opacity-5"></div>
                <Image
                  src="/images/me.jpg"
                  alt="Ridwan Mohamed"
                  width={400}
                  height={500}
                  className="relative grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[500px]"
                />
                <div className="absolute top-4 right-4 bg-white text-black p-3">
                  <FaCode className="text-2xl" />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-4xl font-bold text-center mb-16 font-light tracking-wide">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="border border-white border-opacity-20 p-8 hover:border-opacity-40 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <div className="text-sm text-gray-500 font-light mb-2">{exp.period}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="text-gray-400 font-light">{exp.company}</div>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-gray-400 font-light leading-relaxed mb-6">{exp.description}</p>
                      <div>
                        <h4 className="text-white font-medium mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-400 font-light">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <section className="mb-32">
            <h2 className="text-4xl font-bold text-center mb-16 font-light tracking-wide">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="border border-white border-opacity-20 p-8 hover:border-opacity-40 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 border-2 border-white border-opacity-30 flex items-center justify-center mx-auto mb-4">
                      <skillGroup.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-light">{skillGroup.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <li key={i} className="text-gray-400 font-light text-center">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Personal Touch */}
        <AnimatedSection>
          <section className="mb-32 text-center border border-white border-opacity-20 p-16">
            <h2 className="text-4xl font-bold mb-8 font-light tracking-wide">Beyond Code</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-8">
                I believe great software comes from understanding people, not just technology. 
                I&apos;m constantly learning, whether it&apos;s a new framework, design principle, or business insight. 
                My goal is to bridge the gap between complex technical solutions and simple, delightful user experiences.
              </p>
              <div className="w-32 h-px bg-white opacity-30 mx-auto mb-8"></div>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/rimoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white border-opacity-20 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ridwan-mohamed-363477161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white border-opacity-20 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/rimoza_10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-white border-opacity-20 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="mailto:ridwan.maxamed1@gmail.com"
                  className="p-4 border border-white border-opacity-20 text-gray-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <div className="text-center border-t border-white border-opacity-20 pt-16">
          <h2 className="text-3xl font-bold mb-6 font-light">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-400 mb-8 font-light max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can create something amazing together.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300"
          >
            START A CONVERSATION
          </Link>
        </div>
      </div>
    </div>
  );
}