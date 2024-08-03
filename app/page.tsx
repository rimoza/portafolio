import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaStar,
  FaClipboardList,
  FaTools,
  FaFileAlt,
  FaEnvelope,
  FaLaptopCode,
  FaCube,
  FaBookOpen,
  FaBuilding,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    Icon: FaUser,
    title: "About Me",
    description: "Learn about my journey and values",
    href: "/about",
  },
  {
    Icon: FaStar,
    title: "Testimonials",
    description: "What others say about my work",
    href: "/testimonials",
  },
  {
    Icon: FaClipboardList,
    title: "Process",
    description: "How I approach projects",
    href: "/process",
  },
  {
    Icon: FaTools,
    title: "Tools Stack",
    description: "Technologies I use daily",
    href: "/tools",
  },
  {
    Icon: FaFileAlt,
    title: "CV/Resume",
    description: "My professional background",
    href: "/resume",
  },
  {
    Icon: FaEnvelope,
    title: "Contact",
    description: "Get in touch with me",
    href: "/contact",
  },
  {
    Icon: FaLaptopCode,
    title: "Services",
    description: "What I can do for you",
    href: "/services",
  },
  // {
  //   Icon: FaCube,
  //   title: "Wix Studio",
  //   description: "No-code solutions",
  //   href: "/wix-studio",
  // },
  {
    Icon: FaBookOpen,
    title: "Case Studies",
    description: "Deep dives into my best work",
    href: "/case-studies",
  },
  {
    Icon: FaBuilding,
    title: "Business & Audience",
    description: "My business-focused approach",
    href: "/business-audience",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 background-animate">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative z-10">
        <header className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/avatar.jpg"
            alt="Ridwan Mohamed"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Ridwan Mohamed
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Full Stack Developer
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark transition duration-300 ease-in-out"
            >
              Let&apos;s Work Together
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link href={feature.href} key={index} className="group">
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 h-full flex flex-col">
                  <feature.Icon className="text-4xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {feature.description}
                  </p>
                  <div className="mt-4 text-primary font-medium flex items-center">
                    Learn more
                    <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2024 Ridwan Mohamed. All rights reserved.</p>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
