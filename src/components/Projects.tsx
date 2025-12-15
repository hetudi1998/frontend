import { motion } from "framer-motion";
import { Play, ExternalLink, Award, Star } from "lucide-react";
import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";

const projects = [
  {
    id: 1,
    title: "Siya: The Magic Within",
    category: "Documentary Film",
    role: "Writer & Director",
    year: "2024",
    description: "Award-winning documentary exploring the intersection of art and technology, featuring groundbreaking visual storytelling and innovative cinematography techniques.",
    image: project1,
    achievements: [
      "Jagran Film Festival Official Selection",
      "Ahmedabad International Film Festival",
      "Critical acclaim for visual direction"
    ],
    technologies: ["Cinematography", "Documentary", "Visual Effects", "Color Grading"],
    link: "#",
    video: true
  },
  {
    id: 2,
    title: "Netflix Original - Serious Men",
    category: "Feature Film",
    role: "Art Director",
    year: "2023",
    description: "Led visual direction for major Netflix production, creating immersive cinematic experiences through innovative art direction and production design.",
    image: project2,
    achievements: [
      "Global Netflix release",
      "International acclaim",
      "Award-winning production design"
    ],
    technologies: ["Art Direction", "Production Design", "Set Design", "Visual Effects"],
    link: "#",
    video: false
  }
];

export default function ProjectsSection() {
  return (
    <section className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-600/15 to-orange-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-green-500/10 to-teal-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '3s' }}></div>
        
        {/* Dynamic light rays */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
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
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Productions
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light tracking-wide">
            Award-winning films and productions showcasing cinematic excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Card */}
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.video ? (
                      <motion.button
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-8 h-8 text-white fill-white" />
                      </motion.button>
                    ) : (
                      <motion.a
                        href={project.link}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-8 h-8 text-white" />
                      </motion.a>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium border border-gray-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-gray-700">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">{project.role}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-gray-400" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 mr-2 text-gray-600" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  );
}
