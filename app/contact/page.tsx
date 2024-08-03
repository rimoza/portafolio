import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Get in Touch
        </h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-primary p-8 text-white md:w-1/3">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  youremail@example.com
                </p>
                <p className="flex items-center">
                  <FaPhone className="mr-2" />
                  +1 (123) 456-7890
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Your City, Country
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-8 md:w-2/3">
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-100 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-gray-100 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">
                  What services do you offer?
                </h3>
                <p className="text-gray-600">
                  I specialize in frontend development, creating responsive and
                  user-friendly web applications using modern technologies like
                  React and Next.js.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600">
                  Project timelines vary depending on complexity. A simple
                  website might take 2-4 weeks, while a more complex web
                  application could take 2-3 months or more.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Do you offer ongoing support after project completion?
                </h3>
                <p className="text-gray-600">
                  Yes, I offer ongoing support and maintenance packages to
                  ensure your website or application continues to perform
                  optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
