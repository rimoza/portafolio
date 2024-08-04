import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

interface FeatureCardProps {
  Icon: IconType;
  title: string;
  description: string;
  href: string;
}

const FeatureCard = ({ Icon, title, description, href }: FeatureCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 group-hover:bg-gray-50">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-3 bg-primary bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
            <Icon className="text-primary text-2xl group-hover:scale-110 transition-all duration-300" />
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {description}
            </p>
            <div className="mt-4 flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              Learn more
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
