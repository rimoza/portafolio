import React from "react";
import FeatureCard from "../components/FeatureCard";
import {
  FaUser,
  FaStar,
  FaClipboardList,
  FaTools,
  FaFileAlt,
  FaEnvelope,
  FaLaptopCode,
  FaCube,
  FaBookOpen,
  FaBuilding,
} from "react-icons/fa";

const features = [
  {
    Icon: FaUser,
    title: "About Me",
    description: "5-10 sentences about your values",
    href: "/about" 
  },
  {
    Icon: FaStar,
    title: "Testimonials",
    description: "Reviews from clients, co-workers...",
    href: "/testimonials"
  },
  {
    Icon: FaClipboardList,
    title: "Process",
    description: "Steps to achieve best results",
    href: "/process"
  },
  {
    Icon: FaTools,
    title: "Tools stack",
    description: "Present the tools you use",
    href: "/tools"
  },
  {
    Icon: FaFileAlt,
    title: "CV/Resume",
    description: "Download in pdf - 1 or 2 pages",
    href: "/resume"
  },
  {
    Icon: FaEnvelope,
    title: "Clear CTA",
    description: "Include simple contact form",
    href: "/contact"
  },
  {
    Icon: FaLaptopCode,
    title: "Services you offer",
    description: "Web design / Apps / Branding /...",
    href: "/services"
  },
  { Icon: FaCube, title: "No-Code Tool", description: "Wix Studio", href: "/wix-studio" },
  {
    Icon: FaBookOpen,
    title: "2-5 Case Studies",
    description: "Focus only on the best works",
    href: "/case-studies"
  },
  {
    Icon: FaBuilding,
    title: "Business & Audience",
    description: "Emphasize biz aspect of design",
    href: "/business-audience"
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          My Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
