import React, { useState, useEffect, useRef } from 'react';
import profile from '../assets/Profile.svg';
import Resume from '../assets/Hetansa_Resume.pdf';

export default function WhyHireMeSection() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startCounter();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startCounter = () => {
    intervalRef.current = setInterval(() => {
      setProjectsCount((prev) => (prev < 120 ? prev + 2 : 120));
      setSatisfaction((prev) => (prev < 100 ? prev + 2 : 100));
    }, 20);
  };

  useEffect(() => {
    if (projectsCount >= 120 && satisfaction >= 100) {
      clearInterval(intervalRef.current);
    }
  }, [projectsCount, satisfaction]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#F2F4F7] py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left side with image */}
        <div className="w-full lg:w-2/5 relative p-4 md:p-6 lg:p-0">
          <div className="relative w-full max-w-[400px] mx-auto transition-transform duration-300 hover:scale-105">
            <img 
              src={profile} 
              alt="Professional portrait" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full lg:w-3/5 px-4 md:px-6 lg:px-0">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-800">Why </span>
            <span className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Hire me</span>
            <span className="text-gray-800">?</span>
          </h2>

          {/* Main description */}
          <p className="text-[#98A2B3] mb-8 text-base md:text-lg">
            With a keen eye for storytelling and a deep passion for visual artistry, I bring cinematic 
            experiences to life through filmmaking, VFX, and editing. Whether it's crafting seamless 
            edits, designing stunning visuals, or enhancing narratives with immersive effects, I ensure 
            every frame speaks volumes.
          </p>

          {/* Skills list */}
          <div className="space-y-3 mb-10 text-[#98A2B3]">
            <p><span className="font-medium">Creative Vision</span> – Transforming ideas into compelling visual stories.</p>
            <p><span className="font-medium">Expertise in VFX & Editing</span> – Precision-crafted visuals for maximum impact.</p>
            <p><span className="font-medium">Results-Driven Approach</span> – Engaging content that captivates audiences.</p>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-start gap-8 md:gap-12 mb-10">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-300 ease-in-out">
                {projectsCount}+
              </p>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 transition-all duration-300 ease-in-out">
                {satisfaction}%
              </p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>

          {/* Resume button */}
          <div>
            <a
              href={Resume}
              download="Hetansa_Resume.pdf"
              className="border-2 border-gray-800 text-gray-800 font-medium rounded-full px-12 md:px-16 lg:px-20 py-6 md:py-8 lg:py-10 hover:bg-gray-800 hover:text-white transition-all duration-300 text-xl md:text-2xl lg:text-3xl inline-flex items-center hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
