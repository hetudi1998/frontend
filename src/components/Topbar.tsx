import HRLogo from "../assets/HRLogo.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const menuItems = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About Me' },
  { href: '#portfolio', text: 'Portfolio' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#blog', text: 'Blog' }
];

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="lg:hidden fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-xl border-b border-white/60 shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
          <img src={HRLogo} alt="HR Logo" className="h-10 w-10 object-contain" />
        </a>
        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-primary font-bold text-base px-3 py-1 rounded-lg hover:bg-primary/10 hover:text-secondary transition-colors"
              onClick={e => {
                e.preventDefault();
                document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.text}
            </a>
          ))}
        </nav>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-white/70 shadow border border-white/60"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="text-2xl text-primary">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onToggle={() => setMenuOpen(v => !v)} />
    </header>
  );
} 