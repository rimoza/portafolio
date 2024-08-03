import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaChartLine,
  FaPalette,
  FaLightbulb,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const businessAspects = [
  {
    icon: FaUsers,
    title: "Audience-Centric Design",
    description:
      "We prioritize understanding your target audience, their needs, and preferences to create designs that resonate and engage effectively.",
  },
  {
    icon: FaChartLine,
    title: "Business-Driven Approach",
    description:
      "Our designs are crafted with your business goals in mind, focusing on conversions, brand awareness, and overall business growth.",
  },
  {
    icon: FaPalette,
    title: "Strategic Aesthetics",
    description:
      "We combine appealing visuals with strategic thinking to create designs that are not just beautiful, but purposeful and effective.",
  },
  {
    icon: FaLightbulb,
    title: "Innovative Solutions",
    description:
      "We leverage the latest design trends and technologies to provide innovative solutions that set your business apart from competitors.",
  },
  {
    icon: FaRocket,
    title: "Performance-Oriented",
    description:
      "Our focus is on creating designs that not only look great but also drive tangible business results and improve key metrics.",
  },
  {
    icon: FaHandshake,
    title: "Collaborative Process",
    description:
      "We work closely with you to ensure that our designs align perfectly with your business vision and objectives.",
  },
];

const BusinessAudiencePage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Business & Audience Focus
        </h1>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At the intersection of business goals and audience needs, we create
            designs that not only look great but also drive results. Our
            approach emphasizes the business aspect of design, ensuring that
            every visual element and interaction contributes to your overall
            business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {businessAspects.map((aspect, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <aspect.icon className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{aspect.title}</h3>
              <p className="text-gray-600">{aspect.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/images/business-audience.jpg"
                alt="Business and Audience"
                width={400}
                height={300}
                className="h-full w-full object-cover md:w-64"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Process</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Thorough business and audience analysis</li>
                <li>Strategic planning aligned with business goals</li>
                <li>Creative design focused on audience engagement</li>
                <li>Implementation with a focus on user experience</li>
                <li>Performance tracking and iterative improvements</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Why Our Approach Works</h2>
          <p className="mb-4">
            By focusing on both business objectives and audience needs, we
            create designs that are not only visually appealing but also highly
            effective. Our approach ensures that every aspect of your digital
            presence is optimized to attract, engage, and convert your target
            audience.
          </p>
          <p>
            We believe that great design should do more than just look good – it
            should be a powerful tool for achieving your business goals and
            connecting with your audience in meaningful ways.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to elevate your business through strategic design?
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

export default BusinessAudiencePage;
