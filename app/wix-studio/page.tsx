import React from "react";
import { FaPalette, FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: FaPalette,
    title: "Intuitive Design",
    description:
      "Create stunning designs with an easy-to-use interface, no coding required.",
  },
  {
    icon: FaCode,
    title: "Custom Development",
    description:
      "Extend functionality with custom code when needed for advanced features.",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Automatically create mobile-friendly versions of your website.",
  },
  {
    icon: FaRocket,
    title: "Quick Launch",
    description:
      "Publish your website faster with built-in hosting and deployment tools.",
  },
];

const WixStudioPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Wix Studio: No-Code Web Development
      </h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-4">
          Wix Studio is a powerful no-code platform that allows you to create
          professional websites without the need for extensive coding knowledge.
          As a certified Wix Studio expert, I can help you leverage this tool to
          build stunning, functional websites quickly and efficiently.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-6">
        Key Features of Wix Studio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">How I Can Help</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Custom website design using Wix Studio</li>
          <li>Optimization for search engines and performance</li>
          <li>Integration with third-party tools and services</li>
          <li>
            Training on how to maintain and update your Wix Studio website
          </li>
          <li>Ongoing support and maintenance</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Get Started with Wix Studio
        </a>
      </div>
    </div>
  );
};

export default WixStudioPage;
