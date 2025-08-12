import type React from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket } from "react-icons/fa"

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="mb-32 relative">
      <div className="border border-gray-700 bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm rounded-2xl p-16 hover:border-gray-600 transition-all duration-500">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <FaRocket className="text-gray-400 text-xl" />
            <h2 className="text-5xl font-bold text-white font-light tracking-wide">
              Let&apos;s Connect
            </h2>
            <FaRocket className="text-gray-400 text-xl" />
          </div>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to bring your next project to life? I&apos;m always excited to collaborate on innovative projects 
            and discuss new opportunities. Let&apos;s create something amazing together!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <SocialLink 
            href="https://github.com/rimoza" 
            icon={FaGithub} 
            label="GitHub"
            description="View my repositories"
          />
          <SocialLink 
            href="https://www.linkedin.com/in/rimoza" 
            icon={FaLinkedin} 
            label="LinkedIn"
            description="Let's connect professionally"
          />
          <SocialLink 
            href="mailto:ridwan.maxamed1@gmail.com" 
            icon={FaEnvelope} 
            label="Email"
            description="Send me a message"
          />
        </div>

        {/* Status */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for freelance work and collaboration</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialLink: React.FC<{ 
  href: string; 
  icon: React.ElementType; 
  label: string;
  description: string;
}> = ({ href, icon: Icon, label, description }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-gray-700 rounded-xl hover:border-gray-500 hover:bg-gradient-to-br hover:from-gray-700/50 hover:to-gray-800/70 transition-all duration-500 transform hover:-translate-y-2"
  >
    <div className="text-center">
      <div className="w-16 h-16 bg-gray-800 border border-gray-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-gray-700 transition-all duration-300">
        <Icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
        {label}
      </h3>
      
      <p className="text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  </a>
)

export default ContactSection

