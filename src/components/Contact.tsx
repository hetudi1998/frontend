import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube } from "lucide-react";
import whatsappIcon from "../assets/whatsapp.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import youtubeIcon from "../assets/youtube.svg";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hetansa.rajkotia@gmail.com",
    link: "mailto:hetansa.rajkotia@gmail.com",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98250 12345",
    link: "tel:+919825012345",
    color: "text-green-400"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, India",
    link: "#",
    color: "text-red-400"
  }
];

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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-600/15 to-green-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-500/10 to-yellow-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-r from-rose-500/10 to-pink-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '3s' }}></div>
        
        {/* Dynamic light rays */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Professional Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light tracking-wide">
            Ready to bring your cinematic vision to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
                Get In Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you're looking to discuss a new film project, need VFX expertise, 
                or want to explore creative collaboration opportunities, I'm here to help 
                bring your vision to the screen.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className={`p-3 rounded-lg bg-gray-800 mr-4 group-hover:bg-gray-700 transition-colors`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow My Work</h4>
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
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors"
                    placeholder="Film, VFX, Commercial, etc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and vision..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
