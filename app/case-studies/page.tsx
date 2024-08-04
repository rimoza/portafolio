import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const caseStudies = [
  {
    id: "afmaal",
    title: "Afmaal App",
    client: "Mazeed Technology",
    brief:
      "Afmaal APP is a vocabulary builder designed to enhance language learning in English. This project was both an exciting and challenging endeavor, reflecting my commitment to creating tools that facilitate learning and bridge language gaps.",
    image: "/images/afmaal.PNG",
    tags: ["Education", "PWA", "React"],
    challenges:
      "The main challenge was creating an intuitive interface that could effectively present vocabulary in a way that promotes retention and regular usage.",
    solution:
      "We implemented a spaced repetition system and gamification elements to make learning engaging and effective.",
    results:
      "The app has seen a 40% increase in user engagement and a 25% improvement in vocabulary retention rates among its users.",
  },
  {
    id: "opex-dashboard",
    title: "OPEX Dashboard",
    client: "Neogrant Oy",
    brief:
      "Accounting and financial management genuinely from one place. Increase work enjoyment and stay up to date with tasks All under one application",
    image: "/images/opex.PNG",
    tags: ["SaaS", "Dashboard", "React", "TypeScript"],
    challenges:
      "The main challenge was integrating multiple financial data sources and presenting them in a clear, actionable format.",
    solution:
      "We developed a modular dashboard system with customizable widgets and real-time data visualization.",
    results:
      "The dashboard has reduced the time spent on financial reporting by 60% and improved decision-making processes for our client.",
  },
  {
    id: "web-app",
    title: "MATCO Web Application",
    client: "Matco",
    brief:
      "Modern Automotive Technology (MATCO) is a modern workshop and car sales center based in Somaliland. They needed a web application to showcase their services and inventory.",
    image: "/images/matco.PNG",
    tags: ["Web App", "React", "Next.js", "TypeScript"],
    challenges:
      "The main challenge was creating a fast, responsive web application that could handle a large inventory of vehicles and services.",
    solution:
      "We utilized Next.js for server-side rendering and implemented a robust search and filter system for the inventory.",
    results:
      "The web application has increased online inquiries by 75% and improved the overall user experience, leading to a 30% increase in lead generation.",
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
          Explore some of our best work and the results we&apos;ve achieved for
          our clients. These case studies showcase our expertise in solving
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
