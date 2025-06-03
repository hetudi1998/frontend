import { motion, AnimatePresence } from "framer-motion";
import HRLogo from "../assets/HRLogo.svg";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const menuVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const menuItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

const menuItems = [
  { href: '#home', text: 'Home', isActive: true },
  { href: '#about', text: 'About Me' },
  { href: '#portfolio', text: 'Portfolio' },
  { href: '#testimonials', text: 'Testimonials' },
  { href: '#blog', text: 'Blog' }
];

export default function MobileMenu({ isOpen, onClose, onToggle }: MobileMenuProps) {
  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button 
        className="lg:hidden fixed top-6 sm:top-8 right-4 sm:right-6 z-50 bg-white rounded-full p-2 shadow-md text-gray-700"
        onClick={onToggle}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span 
          className="text-2xl block"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "✕" : "☰"}
        </motion.span>
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40"
          >
            <div className="flex flex-col items-center w-full h-full pt-24 sm:pt-28">
              {/* Logo in mobile menu */}
              <motion.div 
                variants={menuItemVariants}
                className="mb-8 sm:mb-12"
              >
                <img 
                  src={HRLogo} 
                  alt="HR Logo" 
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                />
              </motion.div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-6 sm:space-y-8">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    variants={menuItemVariants}
                    custom={index}
                    href={item.href}
                    className={`${item.isActive ? 'text-pink-500' : 'text-gray-700'} hover:text-pink-500 transition-colors text-xl sm:text-2xl font-bold`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                      onClose();
                    }}
                  >
                    {item.text}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}