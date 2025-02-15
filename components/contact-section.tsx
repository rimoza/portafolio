import type React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const ContactSection: React.FC = () => {
  return (
    <section className="mb-20 glass-effect p-8 rounded-lg transform hover:scale-105 transition-transform duration-300">
      <motion.h2
        className="text-3xl font-bold text-center text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Let&apos;s Connect
      </motion.h2>
      <motion.p
        className="text-lg text-gray-200 max-w-3xl mx-auto text-center mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m always excited to collaborate on innovative projects and discuss new opportunities. Feel free to reach out
        through any of the platforms below!
      </motion.p>
      <motion.div
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SocialLink href="https://github.com/rimoza" icon={FaGithub} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/ridwan-mohamed-363477161/" icon={FaLinkedin} label="LinkedIn" />
        <SocialLink href="https://twitter.com/rimoza_10" icon={FaTwitter} label="Twitter" />
        <SocialLink href="mailto:ridwan.maxamed1@gmail.com" icon={FaEnvelope} label="Email" />
      </motion.div>
    </section>
  )
}

const SocialLink: React.FC<{ href: string; icon: React.ElementType; label: string }> = ({
  href,
  icon: Icon,
  label,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition-colors duration-300 flex flex-col items-center"
  >
    <Icon className="w-8 h-8 mb-2" />
    <span className="text-sm">{label}</span>
  </a>
)

export default ContactSection

