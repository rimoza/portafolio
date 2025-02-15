import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const HeroSection: React.FC = () => {
  return (
    <header className="py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-900 opacity-75"></div>
        {/* <Image src="/images/me1.jpg" alt="Hero Background" layout="fill" objectFit="cover" quality={100} /> */}
      </div>
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <Image
            src="/images/me.jpg"
            alt="Ridwan Mohamed"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <motion.div
            className="absolute -bottom-2 -right-2 bg-primary text-bg-dark rounded-full p-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <FaEnvelope className="text-2xl" />
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Ridwan Mohamed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-200 max-w-2xl mx-auto"
        >
          Full Stack Developer | React Specialist | Problem Solver
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <SocialLink href="https://github.com/rimoza" icon={FaGithub} />
          <SocialLink href="https://www.linkedin.com/in/ridwan-mohamed-363477161/" icon={FaLinkedin} />
          <SocialLink href="https://twitter.com/rimoza_10" icon={FaTwitter} />
          <SocialLink href="mailto:ridwan.maxamed1@gmail.com" icon={FaEnvelope} />
        </motion.div>
      </div>
    </header>
  )
}

const SocialLink = ({ href, icon: Icon }: {
    href: string
    icon: React.ComponentType<{ className: string }>
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110"
  >
    <Icon className="w-6 h-6" />
  </a>
)

export default HeroSection

