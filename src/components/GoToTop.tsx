import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[10000] p-4 rounded-2xl bg-black/60 border border-purple-500/30 backdrop-blur-xl text-white transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] group overflow-hidden"
          aria-label="Go to top"
        >
          {/* AI Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300 text-purple-400 group-hover:text-white" />
          </div>
          
          {/* Animated pulsing border glow */}
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 border border-white/10"
          />
        </motion.button>

      )}
    </AnimatePresence>
  );
};

export default GoToTop;
