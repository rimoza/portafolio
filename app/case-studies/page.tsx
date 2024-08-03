import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const caseStudies = [
  {
    id: "ecommerce-redesign",
    title: "E-commerce Website Redesign",
    client: "FashionHub",
    brief:
      "Revamped the online shopping experience, resulting in a 200% increase in conversion rates.",
    image: "/images/case-study-ecommerce.jpg",
    tags: ["E-commerce", "UI/UX", "React"],
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard Development",
    client: "TechAnalytics",
    brief:
      "Created an intuitive analytics dashboard, improving user engagement by 150%.",
    image: "/images/case-study-saas.jpg",
    tags: ["SaaS", "Dashboard", "Data Visualization"],
  },
  {
    id: "mobile-app",
    title: "Mobile App for Fitness Tracking",
    client: "FitLife",
    brief:
      "Developed a user-friendly mobile app that helped the startup secure its first round of funding.",
    image: "/images/case-study-mobile-app.jpg",
    tags: ["Mobile App", "React Native", "Health Tech"],
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Case Studies
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore some of our best work and the results we&apos;ve achieved for our
          clients. These case studies showcase our expertise in solving
          real-world problems through innovative web solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">Client: {study.client}</p>
                <p className="text-gray-700 mb-4">{study.brief}</p>
                <div className="mb-4">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="text-primary hover:text-primary-dark font-semibold flex items-center"
                >
                  Read Full Case Study
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">
            Why Our Case Studies Matter
          </h2>
          <p className="mb-4">
            These case studies demonstrate our ability to tackle complex
            challenges and deliver tangible results for our clients. They
            showcase our expertise in various industries and technologies, and
            highlight our commitment to creating impactful web solutions.
          </p>
          <p>
            Each project is a story of collaboration, innovation, and success.
            We&apos;re proud of the work we&apos;ve done and the positive impact
            it&apos;s had on our clients&apos; businesses.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to create your success story?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300"
          >
            Let&apos;s Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
