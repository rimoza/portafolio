import type React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="mb-32 border border-white border-opacity-20 p-16">
      <h2 className="text-4xl font-bold text-center text-white mb-8 font-light tracking-wide">
        Let&apos;s Connect
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12 leading-relaxed font-light">
        I&apos;m always excited to collaborate on innovative projects and discuss new opportunities. 
        Feel free to reach out through any of the platforms below.
      </p>
      <div className="flex justify-center space-x-12">
        <SocialLink href="https://github.com/rimoza" icon={FaGithub} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/ridwan-mohamed-363477161/" icon={FaLinkedin} label="LinkedIn" />
        <SocialLink href="https://twitter.com/rimoza_10" icon={FaTwitter} label="Twitter" />
        <SocialLink href="mailto:ridwan.maxamed1@gmail.com" icon={FaEnvelope} label="Email" />
      </div>
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
    className="group flex flex-col items-center p-6 border border-white border-opacity-20 hover:border-opacity-40 hover:bg-white hover:text-black transition-all duration-300"
  >
    <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm font-light">{label}</span>
  </a>
)

export default ContactSection

