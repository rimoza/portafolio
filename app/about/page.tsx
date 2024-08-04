import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Responsive Design",
  "UI/UX Design",
  "RESTful APIs",
];

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Me
        </h1>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-64 w-full object-cover md:w-64"
                src="/images/ridwan.JPG"
                alt="Ridwan Mohamed"
                width={256}
                height={256}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-primary font-semibold">
                Full Stack Developer
              </div>
              <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">
                Ridwan Mohamed
              </h2>
              <p className="mt-2 text-gray-600">
                Passionate Full Stack developer with 3 years of experience in
                creating beautiful, responsive, and user-friendly web
                applications. My mission is to build digital experiences that
                not only look great but also solve real-world problems.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://linkedin.com/in/ridwan-mohamed-363477161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/rimoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://twitter.com/rimoza_10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 mb-4">
              My passion for web development ignited when I built my first HTML
              website at 2021. Since then, I&apos;ve been on an exciting journey
              of continuous learning and growth, always staying at the forefront
              of the latest technologies and industry best practices.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, I&apos;ve had the privilege of collaborating with
              various startups and established companies, helping them transform
              their visions into reality through code. My experience spans from
              crafting responsive landing pages to developing complex web
              applications using React and Next.js.
            </p>
            <p className="text-gray-600">
              Beyond coding, I&apos;m an avid hiker, experimental chef, and
              open-source enthusiast. These diverse interests fuel my creativity
              and problem-solving skills, which I bring to every project I
              undertake.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Skills</h3>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-primary text-white px-3 py-1 rounded-full text-sm hover:bg-primary-dark transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          >
            <FaEnvelope className="mr-2" />
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
