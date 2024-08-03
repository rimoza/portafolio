import Link from "next/link";
import React from "react";
import {
  FaLightbulb,
  FaPencilAlt,
  FaCode,
  FaRocket,
  FaComments,
  FaTools,
} from "react-icons/fa";

const processSteps = [
  {
    icon: FaLightbulb,
    title: "Discovery",
    description:
      "We start by understanding your goals, target audience, and project requirements. This phase involves in-depth discussions and research to lay a solid foundation for the project.",
    color: "bg-yellow-400",
  },
  {
    icon: FaPencilAlt,
    title: "Design",
    description:
      "Based on the insights gathered, we create wireframes and design mockups that align with your brand and objectives. This iterative process ensures the final design meets your vision.",
    color: "bg-green-400",
  },
  {
    icon: FaCode,
    title: "Development",
    description:
      "Our team brings the designs to life with clean, efficient, and maintainable code. We use the latest technologies and best practices to ensure a high-quality product.",
    color: "bg-blue-400",
  },
  {
    icon: FaTools,
    title: "Testing",
    description:
      "Rigorous testing is conducted to ensure the product functions flawlessly across different devices and browsers. We focus on performance, usability, and security.",
    color: "bg-purple-400",
  },
  {
    icon: FaRocket,
    title: "Launch",
    description:
      "Once everything is polished and approved, we deploy your project and provide you with all necessary documentation and support for a smooth launch.",
    color: "bg-red-400",
  },
  {
    icon: FaComments,
    title: "Support",
    description:
      "Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your project continues to evolve and perform optimally.",
    color: "bg-indigo-400",
  },
];

const ProcessPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Our Process
        </h1>

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-8">
              <div
                className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white`}
              >
                <step.icon size={32} />
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Our Process Works</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              Collaborative approach ensures your vision is central to the
              project
            </li>
            <li>
              Iterative design and development allow for flexibility and
              refinement
            </li>
            <li>Rigorous testing guarantees a high-quality end product</li>
            <li>
              Ongoing support helps your project evolve with your business needs
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to start your project?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Let&apos;s Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
