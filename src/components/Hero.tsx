import { useState, useCallback } from "react";
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
    <section aria-label="Hero Section" className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Top Navbar with Glassmorphism and hover effect */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-xl transition-all duration-300 flex items-center justify-between px-4 sm:px-8 py-3 hover:bg-white/70 hover:shadow-2xl">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
          <img src={HRLogo} alt="HR Logo" className="h-16 w-16 object-contain" />
        </a>
        {/* Desktop Navigation + Contact Button (right-aligned) */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`group relative overflow-visible ${item.isActive ? 'text-primary' : 'text-secondary'} hover:text-primary transition-colors duration-200 text-lg font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full px-4 py-2`}
              aria-current={item.isActive ? 'page' : undefined}
              style={{ zIndex: 1 }}
            >
              <span
                className="absolute inset-0 rounded-full bg-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 -z-10"
                aria-hidden="true"
              ></span>
              <span className="relative z-10">{item.text}</span>
            </a>
          ))}
          <button
            className="inline-flex items-center !bg-primary !text-white font-bold px-6 py-2 rounded-full shadow hover:bg-secondary transition-colors duration-200 ml-2 border-2 border-primary"
            style={{ backgroundColor: '#287094', color: '#fff' }}
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </button>
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <MobileMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)}
            onToggle={toggleMenu}
          />
          <button 
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white/70 shadow border border-white/60"
            onClick={toggleMenu}
          >
            <span className="text-2xl text-primary">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {/* Main Content with Purple Background */}
      <div className="flex-1 flex flex-col bg-white relative pt-20 sm:pt-24 md:pt-20">
        {/* Profile Image - Mobile */}
        <div 
          className={`md:hidden absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-24 w-48 sm:w-56 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-50'}`}
        >
          <img 
            src={profilePic}
            alt="Hetansa Rajkotia" 
            width={224}
            height={224}
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        <div className="bg-[linear-gradient(145deg,#673AB7_10%,#252124_50%)] relative overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2rem] md:rounded-b-[3rem]">
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
                    className="text-white hover:text-primary transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full p-1"
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
      <div 
        className="hidden md:block absolute right-4 lg:right-12 xl:right-24 2xl:right-36 bottom-20 sm:bottom-24 lg:bottom-32 w-56 sm:w-64 md:w-72 lg:w-76 h-auto z-50 transition-all duration-300"
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
      </div>
    </section>
  );
}