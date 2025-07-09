import HRLogo from "../assets/HRLogo.svg";

const menuItems = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About Me' },
  { href: '#portfolio', text: 'Portfolio' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#blog', text: 'Blog' }
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col items-center fixed top-6 left-6 h-[90vh] w-56 z-40 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl transition-all duration-300">
      {/* Logo */}
      <div className="mt-8 mb-12">
        <img src={HRLogo} alt="HR Logo" className="h-16 w-16 object-contain" />
      </div>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-8 w-full items-center">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-primary font-bold text-lg px-6 py-2 rounded-xl hover:bg-primary/10 hover:text-secondary transition-colors w-40 text-center"
            onClick={e => {
              e.preventDefault();
              document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  );
} 