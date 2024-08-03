import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/images/avatar.jpg",
    content:
      "Working with this developer was an absolute pleasure. Their expertise and dedication resulted in an outstanding product that exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, InnovateCo",
    image: "/images/avatar.jpg",
    content:
      "The creativity and attention to detail brought to our project was impressive. Our website now truly reflects our brand identity.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Founder, StartUp X",
    image: "/images/avatar.jpg",
    content:
      "As a startup, we needed a developer who could understand our vision and bring it to life quickly. This developer did just that, and more!",
    rating: 5,
  },
  // Add more testimonials as needed
];

const TestimonialsPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What People Say
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4 text-yellow-400 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-4xl text-primary opacity-20 absolute top-0 left-0 -mt-2 -ml-2" />
                  <p className="text-gray-600 italic pl-8">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
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

export default TestimonialsPage;
