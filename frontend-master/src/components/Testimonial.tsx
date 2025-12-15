import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Sarah",
      title: "Marketing Manager",
      company: "",
      rating: 5,
      text: `"She has a unique ability to transform raw footage into something extraordinary. Her understanding of color theory and cinematic aesthetics elevates every project. She's professional, patient, and truly passionate about her work."`,
      profilePic: "https://i.pravatar.cc/100?img=1",
      category: "Documentary Film"
    },
    {
      name: "Karan Malhotra",
      title: "Compositing Artist",
      company: "",
      rating: 5,
      text: `"From editing to visual effects, Hetansa is a powerhouse of creativity. She not only understands the technical aspects of post-production but also brings fresh ideas that enhance storytelling."`,
      profilePic: "https://i.pravatar.cc/100?img=2",
      category: "Visual Effects"
    },
    {
      name: "Michael",
      title: "Film Director",
      company: "",
      rating: 5,
      text: `"Working with a true visual artist has transformed our production quality. The attention to detail and creative problem-solving brought our vision to life in ways we hadn't imagined possible."`,
      profilePic: "https://i.pravatar.cc/100?img=3",
      category: "Feature Film"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
      ));
  };

  return (
    <section className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[700px] h-[700px] bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-yellow-600/15 to-orange-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '2s' }}></div>
        
        {/* Dynamic light rays */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
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
            <span className="text-white">Client </span>
            <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto font-light tracking-wide">
            Hear from industry professionals about their experience working together
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-800/50 relative overflow-hidden">
                {/* Background Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-32 h-32 text-white" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
                    {testimonials[currentIndex].category}
                  </span>
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  {/* Quote */}
                  <div className="mb-8">
                    <Quote className="w-8 h-8 text-purple-400 mb-4" />
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light italic">
                      {testimonials[currentIndex].text}
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].profilePic}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 rounded-full border-2 border-purple-500/30"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-400 font-medium">
                          {testimonials[currentIndex].title}
                        </p>
                        {testimonials[currentIndex].company && (
                          <p className="text-purple-400 text-sm">
                            {testimonials[currentIndex].company}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].rating.toFixed(1)} / 5.0
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
