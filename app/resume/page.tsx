import React from "react";
import {
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaAward,
} from "react-icons/fa";

const ResumePage = () => {
  const workExperience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2020 - Present",
      responsibilities: [
        "Lead a team of 5 developers in creating responsive web applications",
        "Implemented new React-based architecture, improving performance by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Co.",
      period: "2017 - 2020",
      responsibilities: [
        "Developed and maintained multiple client websites using React and Next.js",
        "Collaborated with UX designers to implement pixel-perfect, responsive designs",
        "Optimized web applications for maximum speed and scalability",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Tech University",
      year: "2017",
    },
    {
      degree: "Bachelor of Science in Web Development",
      school: "Digital College",
      year: "2015",
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "GraphQL",
    "Git",
    "Agile Methodologies",
  ];

  const certifications = [
    "AWS Certified Developer - Associate",
    "Google Cloud Certified - Professional Cloud Architect",
    "React Native Specialist Certification",
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          My Resume
        </h1>

        <div className="mb-8 text-center">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
          >
            <FaDownload className="mr-2" />
            Download Full Resume
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-primary text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <FaBriefcase className="mr-2" /> Work Experience
            </h2>
          </div>
          <div className="p-6">
            {workExperience.map((job, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">
                  {job.company} | {job.period}
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-primary text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <FaGraduationCap className="mr-2" /> Education
            </h2>
          </div>
          <div className="p-6">
            {education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-gray-600">
                  {edu.school} | {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-primary text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <FaCode className="mr-2" /> Skills
            </h2>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4 bg-primary text-white">
            <h2 className="text-2xl font-bold flex items-center">
              <FaAward className="mr-2" /> Certifications
            </h2>
          </div>
          <div className="p-6">
            <ul className="list-disc list-inside text-gray-700">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
