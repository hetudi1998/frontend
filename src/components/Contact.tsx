import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube } from "lucide-react";
import { db } from "../firebase"; // Adjust the path based on your structure
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp()
      });

      await fetch("https://portfolio-backend-leep.onrender.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email })
      });

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-black min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
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
                  <div className={`p-3 rounded-lg bg-gray-800 mr-4 group-hover:bg-gray-700`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow My Work</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gray-800 hover:bg-gray-700 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

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
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Type"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white resize-none"
                  required
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center ${
                    loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-200"
                  }`}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <span className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></span>
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
