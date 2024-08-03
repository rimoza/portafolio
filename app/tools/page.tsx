import Link from "next/link";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaAws,
  FaGitAlt,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaNpm,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

const tools = [
  {
    name: "React",
    icon: FaReact,
    color: "text-blue-500",
    description: "A JavaScript library for building user interfaces",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    description: "The React Framework for Production",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-600",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "text-yellow-400",
    description: "High-level, interpreted programming language",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "text-red-500",
    description:
      "Standard markup language for documents designed to be displayed in a web browser",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-400",
    description:
      "Style sheet language used for describing the presentation of a document",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-teal-500",
    description: "A utility-first CSS framework packed with classes",
  },
  {
    name: "MongoDB",
    icon: FaDatabase,
    color: "text-green-500",
    description:
      "Source-available cross-platform document-oriented database program",
  },
  {
    name: "Figma",
    icon: FaFigma,
    color: "text-purple-500",
    description: "A vector graphics editor and prototyping tool",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-500",
    description: "On-demand cloud computing platforms and APIs",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-red-600",
    description: "Distributed version control system",
  },
  {
    name: "NPM",
    icon: FaNpm,
    color: "text-red-500",
    description: "Package manager for the JavaScript programming language",
  },
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    color: "text-blue-500",
    description: "Source-code editor made by Microsoft",
  },
];

const ToolsPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Tools Stack
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <tool.icon className={`text-4xl ${tool.color} mr-4`} />
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                </div>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why I Choose These Tools</h2>
          <p className="text-gray-600 mb-4">
            The tools and technologies I use are carefully selected to provide
            the best possible outcomes for my projects. They offer a perfect
            balance of performance, scalability, and developer experience.
          </p>
          <p className="text-gray-600">
            By staying up-to-date with the latest industry standards and best
            practices, I ensure that the solutions I deliver are not only
            cutting-edge but also maintainable and future-proof.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Let&apos;s Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
