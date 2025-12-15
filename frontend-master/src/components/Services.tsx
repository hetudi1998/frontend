import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Zap, Palette } from "lucide-react";
import servicebg from "../assets/service/servicebg.jpg";
import serviceimg1 from "../assets/service/serviceimg1.jpg";
import serviceimg2 from "../assets/service/serviceimg2.jpg";
import serviceimg3 from "../assets/service/serviceimg3.jpg";
import ServiceCard from "./Card";

export default function ServicesSection() {
  const [, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: "filmmaking",
      title: "Film Direction",
      subtitle: "Cinematic Storytelling",
      image: serviceimg1,
      icon: Camera,
      description: "Feature films, documentaries, and commercial productions"
    },
    {
      id: "visual-effects",
      title: "Visual Effects",
      subtitle: "VFX & Compositing",
      image: serviceimg2,
      icon: Zap,
      description: "Seamless integration and post-production effects"
    },
    {
      id: "graphic-designing",
      title: "Creative Direction",
      subtitle: "Visual Design",
      image: serviceimg3,
      icon: Palette,
      description: "Brand identity and creative visual solutions"
    },
  ];

  return (
    <div className="bg-black min-h-[100vh] w-full relative overflow-hidden flex items-center py-20 rounded-xl border border-gray-800">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-600/15 to-teal-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '3s' }}></div>
        
        {/* Dynamic light rays */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Background Image with reduced opacity */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-[90%] w-full mx-auto relative z-10">
        {/* Professional Header section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-white">Professional </span>
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mt-4 font-light tracking-wide">
              Cinematic excellence across all production phases
            </p>
          </div>

          <div className="text-right">
            <p className="text-white text-xl md:text-2xl font-light mb-2 tracking-wide">
              From concept to final cut, delivering
            </p>
            <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide">
              industry-standard visual storytelling.
            </p>
          </div>
        </motion.div>

        {/* Service cards with professional styling */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                image={service.image}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
