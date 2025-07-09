import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClapping, setIsClapping] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setIsOpen(true), 500);
    const timer2 = setTimeout(() => {
      setIsClapping(true);
      // Simulate clapping sound effect
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
      audio.volume = 0.3;
      audio.play().catch(() => {}); // Ignore audio errors
    }, 1500);
    
    const timer3 = setTimeout(() => {
      setIsClapping(false);
      setIsOpen(false);
    }, 2000);
    
    const timer4 = setTimeout(() => {
      setShowAction(true);
    }, 2500);
    
    const timer5 = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 1000);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  // Clapping animation
  useEffect(() => {
    if (isClapping) {
      const clapInterval = setInterval(() => {
        // setClapCount(prev => { // This line is removed
        //   if (prev >= 2) {
        //     clearInterval(clapInterval);
        //     return prev;
        //   }
        //   return prev + 1;
        // });
      }, 300);
      
      return () => clearInterval(clapInterval);
    }
  }, [isClapping]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          {/* Realistic Clapboard */}
          <div className="relative">
            {/* Bottom part of clapboard (fixed) */}
            <div className="w-96 h-64 md:w-[500px] md:h-80 bg-white rounded-lg shadow-2xl relative">
              {/* Clapboard stripes */}
              <div className="absolute inset-0 flex flex-col">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 md:h-10 ${i % 2 === 0 ? 'bg-black' : 'bg-white'}`}
                  />
                ))}
              </div>
              
              {/* Clapboard text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">HETANSA</h2>
                  <p className="text-lg md:text-xl text-gray-600">DIRECTOR & VFX ARTIST</p>
                </div>
              </div>
            </div>

            {/* Top part of clapboard (clapping) */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ 
                rotateX: isClapping ? [0, -90, 0, -90, 0] : (isOpen ? 90 : 0)
              }}
              transition={{ 
                duration: isClapping ? 0.6 : 0.8, 
                ease: "easeInOut",
                times: isClapping ? [0, 0.3, 0.5, 0.8, 1] : undefined
              }}
              className="absolute top-0 w-96 h-64 md:w-[500px] md:h-80 bg-gray-800 rounded-lg shadow-2xl"
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom' }}
            >
              {/* Handle */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-6 h-12 bg-gray-600 rounded-t-lg"></div>
              
              {/* Clapboard stripes on top */}
              <div className="absolute inset-0 flex flex-col">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 md:h-10 ${i % 2 === 0 ? 'bg-black' : 'bg-gray-700'}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Clapping sound effect indicator */}
            <AnimatePresence>
              {isClapping && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.3, repeat: 3, repeatDelay: 0.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔊</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ACTION! Text */}
          <AnimatePresence>
            {showAction && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center z-20"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-8xl md:text-9xl font-bold text-white tracking-wider"
                  style={{ textShadow: '0 0 50px rgba(255,255,255,0.5)' }}
                >
                  ACTION!
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Film reel effect */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Spotlight effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full filter blur-3xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 