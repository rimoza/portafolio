import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">CV/Resume</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Download Options</h2>
        <div className="space-y-4">
          <a
            href="/path-to-your-1-page-resume.pdf"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="mr-2" />
            Download 1-Page Resume
          </a>
          <br />
          <a
            href="/path-to-your-2-page-resume.pdf"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="mr-2" />
            Download 2-Page Resume
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Resume Preview</h2>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Your Name</h3>
          <p className="text-gray-600 mb-4">
            Web Developer | Designer | Project Manager
          </p>

          <h4 className="text-lg font-semibold mb-2">Professional Summary</h4>
          <p className="text-gray-700 mb-4">
            A brief, compelling summary of your professional experience and key
            skills.
          </p>

          <h4 className="text-lg font-semibold mb-2">Key Skills</h4>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            <li>Skill 4</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2">Work Experience</h4>
          <div className="mb-4">
            <h5 className="font-semibold">Job Title, Company Name</h5>
            <p className="text-gray-600">Start Date - End Date</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Achievement or responsibility 1</li>
              <li>Achievement or responsibility 2</li>
            </ul>
          </div>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
