import { motion } from "framer-motion";
import { Linkedin, Instagram, Youtube, Mail, ArrowUp } from "lucide-react";
import HRLogo from "../assets/footer/RLogoDark.svg";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/hetansa/",
    color: "text-blue-400 hover:text-blue-300"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/hetansa_raj?igsh=dmpzMXI0MDg4eWE3",
    color: "text-pink-400 hover:text-pink-300"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@hetansarajkotia?si=N3nhr4g7MaxyqQaS",
    color: "text-red-400 hover:text-red-300"
  }
];

const quickLinks = [
  { name: "About", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const services = [
  "Film Direction",
  "Visual Effects",
  "Post-Production",
  "Creative Direction",
  "Cinematography"
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[700px] h-[700px] bg-gradient-to-r from-zinc-600/20 to-neutral-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-stone-600/15 to-gray-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-gray-500/10 to-slate-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-r from-zinc-500/10 to-neutral-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-slate-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-gray-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-zinc-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-neutral-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '3s' }}></div>
        
        {/* Dynamic light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-zinc-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <img 
                src={HRLogo} 
                alt="HR Logo" 
                className="h-12 w-12 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Hetansa Rajkotia</h3>
                <p className="text-gray-400 text-sm">Director • VFX Artist • Editor</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Award-winning filmmaker and visual effects artist creating immersive 
              cinematic experiences that captivate audiences worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <a 
                  href="mailto:hetansa.rajkotia@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  hetansa.rajkotia@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-400">Available for projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Hetansa Rajkotia. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hetansa.rajkotia@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Get in touch
            </a>
            <motion.button
              onClick={scrollToTop}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}