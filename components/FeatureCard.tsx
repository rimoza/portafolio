import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  Icon: IconType;
  title: string;
  description: string;
  href: string;
}

const FeatureCard = ({
  Icon,
  title,
  description,
  href,
}: FeatureCardProps) => {
  return (
    <Link href={href}>
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 text-primary">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>
    </div>
    </Link>
  );
};

export default FeatureCard;
