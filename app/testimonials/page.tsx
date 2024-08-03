import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with this team was an absolute pleasure. Their expertise and dedication resulted in an outstanding product.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Marketing Director, InnovateCo",
    content:
      "The creativity and attention to detail brought to our project exceeded our expectations. Highly recommended!",
  },
  // Add more testimonials as needed
];

const TestimonialsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Testimonials</h1>
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow rounded-lg p-6">
            <p className="text-gray-600 mb-4">{testimonial.content}</p>
            <div className="font-bold">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
