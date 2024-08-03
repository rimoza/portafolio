import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaRocket,
  FaCog,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description:
      "Custom-built websites and web applications using modern technologies like React and Next.js.",
    color: "bg-blue-500",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive Design",
    description:
      "Ensure your website looks great and functions perfectly on all devices and screen sizes.",
    color: "bg-green-500",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Create intuitive and visually appealing user interfaces that enhance user experience.",
    color: "bg-purple-500",
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description:
      "Improve your website's visibility in search engines to attract more organic traffic.",
    color: "bg-yellow-500",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Boost your website's speed and efficiency for better user experience and SEO ranking.",
    color: "bg-red-500",
  },
  {
    icon: FaCog,
    title: "Maintenance & Support",
    description:
      "Ongoing support and updates to keep your website secure and running smoothly.",
    color: "bg-indigo-500",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Services
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of web development and design services
          to help your business thrive in the digital world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`${service.color} h-2`}></div>
              <div className="p-6">
                <service.icon
                  className={`text-4xl ${service.color.replace(
                    "bg-",
                    "text-"
                  )} mb-4`}
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Services?</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Expertise in the latest web technologies and best practices</li>
            <li>Tailored solutions to meet your specific business needs</li>
            <li>Focus on creating intuitive and user-friendly designs</li>
            <li>Commitment to delivering projects on time and within budget</li>
            <li>Ongoing support and maintenance to ensure long-term success</li>
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
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
