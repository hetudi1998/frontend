import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Hetansa_Pic.svg";
import award1 from "../assets/Award1.svg";
import award2 from "../assets/Award2.svg";
import award3 from "../assets/Award3.svg";
import HRLogo from "../assets/HRLogo.svg";
import backgroundPic from "../assets/BackgroundPic.jpg";
import youtubeIcon from "../assets/youtube.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import MobileMenu from "./MobileMenu";
import { navigationItems } from '../constants/navigation';

const SOCIAL_LINKS = [
  { icon: youtubeIcon, name: "YouTube", url: "https://youtube.com/@hetansarajkotia?si=N3nhr4g7MaxyqQaS" },
  { icon: linkedinIcon, name: "LinkedIn", url: "https://www.linkedin.com/in/hetansa/" },
  { icon: instagramIcon, name: "Instagram", url: "https://www.instagram.com/hetansa_raj?igsh=dmpzMXI0MDg4eWE3" },
];

const AWARDS = [
  { src: award1, alt: "The Women's Bioscope Award", title: "Best Documentary Film" },
  { src: award2, alt: "Ahmedabad International Film Festival", title: "Official Selection" },
  { src: award3, alt: "Jagran Film Festival", title: "Best Short Film" },
];

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <section aria-label="Hero Section" className="flex flex-col lg:flex-row min-h-screen bg-white relative overflow-hidden mt-24 md:mt-0">
      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-white p-4 sm:p-6 flex flex-col items-center lg:items-center lg:py-24 relative z-50 pt-6 sm:pt-8">
        {/* Logo - visible only on desktop */}
        <div className="mb-8 lg:mb-12 hidden lg:block">
          <img 
            src={HRLogo} 
            alt="HR Logo" 
            width={96}
            height={96}
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
          />
        </div>

        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onToggle={toggleMenu}
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-col items-center space-y-8" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a 
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`${item.isActive ? 'text-pink-500' : 'text-gray-700'} hover:text-pink-500 transition-colors text-2xl font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-md px-3 py-1`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex-1 flex flex-col bg-white relative pt-24 sm:pt-28 md:pt-0">
        {/* Profile Image - Mobile */}
        <motion.div 
          className={`md:hidden absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-24 w-48 sm:w-56 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-50'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src={profilePic}
            alt="Hetansa Rajkotia" 
            width={224}
            height={224}
            className="w-full h-full object-contain"
            loading="eager"
          />
        </motion.div>

        {/* Main Content with Purple Background */}
        <div className="bg-[linear-gradient(145deg,#673AB7_10%,#252124_50%)] relative overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2rem] md:rounded-b-[3rem] mt-24 sm:mt-28 md:mt-0">
          <div 
            className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundPic})` }}
            aria-hidden="true"
          />

          <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 text-white z-10 relative min-h-[400px] sm:min-h-[450px] md:min-h-[600px] flex flex-col justify-center">
            <div className="w-full md:max-w-3xl mx-auto md:ml-16 md:mx-0 relative z-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-light mb-2 sm:mb-3">Hello!</h2>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">I am Hetansa Rajkotia</h1>
              <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed mb-6 sm:mb-8 pr-4 max-w-2xl">
                A filmmaker, visual effects artist, and editor crafting stories through the lens of 
                creativity and innovation. With a deep passion for cinematic storytelling, I bring 
                narratives to life through visuals that inspire, engage, and leave a lasting impact.
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 md:space-x-8" role="list" aria-label="Social media links">
                {SOCIAL_LINKS.map(({ icon, name, url }) => (
                  <a 
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 rounded-full p-1"
                  >
                    <img src={icon} alt="" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 sm:gap-12 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white" role="list" aria-label="Awards and Recognition">
          {AWARDS.map(({ src, alt, title }) => (
            <div 
              key={alt}
              className="group relative"
              role="listitem"
            >
              <img 
                src={src}
                alt={alt} 
                width={160}
                height={160}
                className="w-32 sm:w-40 md:w-auto md:h-32 lg:h-40 object-contain transform group-hover:scale-105 transition-all duration-300"
              />
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md transition-opacity duration-200 whitespace-nowrap">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Image - Desktop */}
      <motion.div 
        className="hidden md:block absolute right-4 lg:right-12 xl:right-24 2xl:right-36 bottom-20 sm:bottom-24 lg:bottom-32 w-56 sm:w-64 md:w-72 lg:w-76 h-auto z-50 transition-all duration-300"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img 
          src={profilePic}
          alt=""
          width={304}
          height={304}
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
        <div className="hidden lg:block absolute left-1/2 bottom-0 w-[2px] h-24 md:h-32 lg:h-36 bg-black transform translate-y-full" aria-hidden="true"></div>
      </motion.div>
    </section>
  );
}