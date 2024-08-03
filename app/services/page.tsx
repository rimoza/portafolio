import React from "react";
import {
  FaLaptop,
  FaMobile,
  FaPalette,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Create beautiful, responsive websites that engage your audience and represent your brand.",
    icon: FaLaptop,
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Develop custom mobile applications for iOS and Android platforms.",
    icon: FaMobile,
  },
  {
    id: 3,
    title: "Branding",
    description:
      "Craft a unique brand identity that sets you apart from the competition.",
    icon: FaPalette,
  },
  {
    id: 4,
    title: "SEO Optimization",
    description:
      "Improve your online visibility and drive more traffic to your website.",
    icon: FaSearch,
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Develop and execute comprehensive digital marketing strategies to grow your business.",
    icon: FaRocket,
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-4xl text-primary mb-4">
              <service.icon />
            </div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
