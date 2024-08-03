import React from "react";
import { FaUsers, FaChartLine, FaPalette, FaLightbulb } from "react-icons/fa";

const BusinessAudiencePage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Business & Audience Focus
      </h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 mb-4">
          At the intersection of business goals and audience needs, we create
          designs that not only look great but also drive results. Our approach
          emphasizes the business aspect of design, ensuring that every visual
          element and interaction contributes to your overall business
          objectives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <FaUsers className="text-4xl text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Audience-Centric Design
          </h2>
          <p className="text-gray-600">
            We prioritize understanding your target audience, their needs, and
            preferences to create designs that resonate and engage effectively.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <FaChartLine className="text-4xl text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            Business-Driven Approach
          </h2>
          <p className="text-gray-600">
            Our designs are crafted with your business goals in mind, focusing
            on conversions, brand awareness, and overall business growth.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <FaPalette className="text-4xl text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Strategic Aesthetics</h2>
          <p className="text-gray-600">
            We combine appealing visuals with strategic thinking to create
            designs that are not just beautiful, but purposeful and effective.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <FaLightbulb className="text-4xl text-primary mb-4" />
          <h2 className="text-xl font-semibold mb-2">Innovative Solutions</h2>
          <p className="text-gray-600">
            We leverage the latest design trends and technologies to provide
            innovative solutions that set your business apart from competitors.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700">
          <li>Thorough business and audience analysis</li>
          <li>Strategic planning aligned with business goals</li>
          <li>Creative design focused on audience engagement</li>
          <li>Implementation with a focus on user experience</li>
          <li>Performance tracking and iterative improvements</li>
        </ol>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to elevate your business through strategic design?
        </h2>

        <a
          href="/contact"
          className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Let&apos;s Discuss Your Project
        </a>
      </div>
    </div>
  );
};

export default BusinessAudiencePage;
