import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { caseStudies } from "../caseStudiesData";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    id: study.id,
  }));
}

const CaseStudyPage = ({ params }: { params: { id: string } }) => {
  const study = caseStudies.find((s) => s.id === params.id);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/case-studies"
          className="text-primary hover:text-primary-dark font-semibold flex items-center mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Case Studies
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{study.title}</h1>
        <p className="text-xl text-gray-600 mb-8">Client: {study.client}</p>

        <Image
          src={study.image}
          alt={study.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg mb-8"
        />

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600">{study.brief}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
          <p className="text-gray-600">{study.challenges}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-600">{study.solution}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
          <p className="text-gray-600">{study.results}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
        >
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyPage;
