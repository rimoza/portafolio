import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  brief: string;
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "case1",
    title: "E-commerce Redesign Boosts Sales by 200%",
    client: "Fashion Retailer X",
    brief:
      "Revamped the online shopping experience, resulting in significant increase in conversion rates and customer satisfaction.",
    imageUrl: "/images/case-study-1.jpg",
  },
  {
    id: "case2",
    title: "Mobile App Development for Fitness Tracking",
    client: "HealthTech Startup Y",
    brief:
      "Developed a user-friendly mobile app that helped the startup secure its first round of funding.",
    imageUrl: "/images/case-study-2.jpg",
  },
  {
    id: "case3",
    title: "Brand Identity Overhaul for Local Restaurant",
    client: "Gourmet Diner Z",
    brief:
      "Created a new visual identity that increased foot traffic and social media engagement.",
    imageUrl: "/images/case-study-3.jpg",
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Case Studies</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Explore some of our best work and the results we&apos;ve achieved for our
        clients.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={study.imageUrl}
              alt={study.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{study.title}</h2>
              <p className="text-gray-600 mb-4">Client: {study.client}</p>
              <p className="text-gray-700 mb-4">{study.brief}</p>
              <Link
                href={`/case-studies/${study.id}`}
                className="text-primary hover:text-primary-dark font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
