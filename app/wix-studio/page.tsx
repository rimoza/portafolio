import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPalette, FaCode, FaMobileAlt, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';

const features = [
  { icon: FaPalette, title: "Intuitive Design", description: "Create stunning designs with an easy-to-use interface, no coding required." },
  { icon: FaCode, title: "Custom Development", description: "Extend functionality with custom code when needed for advanced features." },
  { icon: FaMobileAlt, title: "Responsive Design", description: "Automatically create mobile-friendly versions of your website." },
  { icon: FaRocket, title: "Quick Launch", description: "Publish your website faster with built-in hosting and deployment tools." },
  { icon: FaUsers, title: "Collaboration", description: "Work seamlessly with team members and clients on projects." },
  { icon: FaChartLine, title: "Analytics", description: "Track your website's performance with integrated analytics tools." },
];

const WixStudioPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Wix Studio: No-Code Web Development
        </h1>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a certified Wix Studio expert, I can help you leverage this powerful no-code platform to create stunning, functional websites quickly and efficiently.
          </p>
        </div>

        <div className="mb-16">
          <Image 
            src="/images/wix-studio-example.jpg" 
            alt="Wix Studio Example" 
            width={1200} 
            height={600} 
            className="rounded-lg shadow-xl"
          />
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features of Wix Studio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <feature.icon className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">How I Can Help</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Custom website design using Wix Studio</li>
            <li>Optimization for search engines and performance</li>
            <li>Integration with third-party tools and services</li>
            <li>Training on how to maintain and update your Wix Studio website</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </div>

        <div className="bg-primary text-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Why Choose Wix Studio?</h2>
          <p className="mb-4">
            Wix Studio combines the ease of no-code development with the power of professional web design tools. It&apos;s perfect for businesses that need a high-quality website quickly, without compromising on functionality or design.
          </p>
          <p>
            As a Wix Studio expert, I can help you make the most of this platform, ensuring your website stands out from the crowd and meets all your business needs.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to create your Wix Studio website?</h2>
          <Link href="/contact" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300">
            Let&apos;s Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WixStudioPage;