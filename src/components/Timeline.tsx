import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Award, Zap, Calendar, MapPin, ExternalLink } from 'lucide-react';
import threeDTool1 from '../assets/exp/3d1.svg';
import threeDTool2 from '../assets/exp/3d2.svg';
import threeDTool3 from '../assets/exp/3d3.svg';
import threeDTool4 from '../assets/exp/3d4.svg';
import graphic1 from '../assets/exp/graphic1.svg';
import graphic2 from '../assets/exp/graphic2.svg';
import graphic3 from '../assets/exp/graphic3.svg';
import aiTool1 from '../assets/exp/ai1.svg';
import aiTool2 from '../assets/exp/ai2.svg';
import aiTool3 from '../assets/exp/ai3.svg';

const experiences = [
  {
    title: 'Writer & Director',
    company: 'Siya: The Magic Within',
    year: '2024',
    location: 'Mumbai, India',
    description: 'Directed award-winning documentary with critical acclaim',
    achievements: ['Jagran Film Festival Official Selection', 'Ahmedabad International Film Festival'],
    category: 'Documentary',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Art Director',
    company: 'Netflix Original (Serious Men)',
    year: '2023',
    location: 'Mumbai, India',
    description: 'Led visual direction for major streaming platform production',
    achievements: ['Global Netflix release', 'Critical acclaim for visual design'],
    category: 'Feature Film',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'VFX Compositor',
    company: 'Envision VFX',
    year: '2022',
    location: 'Mumbai, India',
    description: 'Specialized in high-end visual effects and compositing',
    achievements: ['Feature film VFX projects', 'Advanced compositing pipeline'],
    category: 'VFX',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Creative Director',
    company: 'Boat Media House',
    year: '2021',
    location: 'Mumbai, India',
    description: 'Led creative strategy and brand development initiatives',
    achievements: ['Brand identity development', 'Campaign strategy leadership'],
    category: 'Commercial',
    color: 'from-orange-500 to-red-500'
  }
];

const skills = [
  {
    title: 'VFX & Compositing',
    icons: [threeDTool1, threeDTool2, threeDTool3, threeDTool4],
    progress: 90,
    description: 'Advanced visual effects and compositing expertise'
  },
  {
    title: 'Film Direction',
    icons: [graphic1, graphic2, graphic3],
    progress: 85,
    description: 'Cinematic storytelling and directorial vision'
  },
  {
    title: 'Post-Production',
    icons: [aiTool1, aiTool2, aiTool3],
    progress: 80,
    description: 'Editing, color grading, and final delivery'
  }
];

export default function ResumeTimeline() {
  const [animatedProgress, setAnimatedProgress] = useState([0, 0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedProgress([90, 85, 80]);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[700px] h-[700px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-600/15 to-teal-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-yellow-500/10 to-orange-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '3s' }}></div>
        
        {/* Dynamic light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Professional Header Section */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">Professional </span>
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light tracking-wide">
            Industry expertise in film direction, visual effects, and creative production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Work Experience Timeline */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center tracking-wide">
              <Award className="w-10 h-10 mr-4 text-gray-300" />
              Production Credits
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {/* Experience Card */}
                  <motion.div 
                    className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`bg-gradient-to-r ${exp.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {exp.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="mb-6">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                          {exp.title}
                        </h4>
                        <p className="text-xl text-gray-300 font-semibold mb-3">{exp.company}</p>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {exp.year}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed text-base">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-3">
                        <h5 className="text-white font-semibold flex items-center">
                          <Star className="w-5 h-5 mr-2 text-yellow-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-400">
                              <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center tracking-wide">
              <Zap className="w-10 h-10 mr-4 text-gray-300" />
              Technical Expertise
            </h3>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* Skill Card */}
                  <motion.div 
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                          {skill.title}
                        </h4>
                        <span className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                          {animatedProgress[index]}%
                        </span>
                      </div>
                      
                      <p className="text-gray-400 mb-6 text-base leading-relaxed">{skill.description}</p>
                      
                      {/* Icons */}
                      <div className="flex space-x-4 mb-8 overflow-x-auto">
                        {skill.icons.map((icon, i) => (
                          <div
                            key={i}
                            className="group/icon"
                          >
                            <img 
                              src={icon} 
                              alt={`${skill.title} ${i + 1}`} 
                              className="h-14 w-14 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 bg-gray-800 p-3 rounded-xl border border-gray-700 group-hover/icon:border-gray-600 group-hover/icon:bg-gray-700"
                            />
                          </div>
                        ))}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-full relative"
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedProgress[index]}%` }}
                            transition={{ duration: 1.5, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}