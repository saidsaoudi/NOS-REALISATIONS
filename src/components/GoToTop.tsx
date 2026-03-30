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
          whileHover={{ y: -5, x: -5, boxShadow: "8px 8px 0px #000" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[10000] p-4 rounded-xl bg-yellow-400 border-4 border-black text-black shadow-[4px_4px_0_#000] transition-all group"
          aria-label="Go to top"
        >
          <div className="relative z-10">
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={3} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
