import React from "react";
import { FaLightbulb, FaPencilAlt, FaCode, FaRocket } from "react-icons/fa";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start by understanding your goals, target audience, and project requirements.",
    icon: FaLightbulb,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Our team creates wireframes and designs that align with your brand and objectives.",
    icon: FaPencilAlt,
  },
  {
    id: 3,
    title: "Development",
    description:
      "We bring the designs to life with clean, efficient, and maintainable code.",
    icon: FaCode,
  },
  {
    id: 4,
    title: "Launch",
    description:
      "After thorough testing, we deploy your project and provide ongoing support.",
    icon: FaRocket,
  },
];

const ProcessPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Our Process</h1>
      <div className="space-y-12">
        {processSteps.map((step) => (
          <div key={step.id} className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-primary text-white rounded-full p-3">
                <step.icon size={24} />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessPage;
