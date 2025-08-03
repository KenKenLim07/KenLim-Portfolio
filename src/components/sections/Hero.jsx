import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BackgroundBlobs } from '../animations/BackgroundBlobs';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};



export const Hero = () => {
  const heroRef = useRef(null);
  const { isDarkMode } = useTheme();



  // Set dynamic height for hero section
  useEffect(() => {
    const updateHeroHeight = () => {
      if (heroRef.current) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 64;
        const viewportHeight = window.innerHeight;
        const availableHeight = viewportHeight - navbarHeight;
        
        // Set dynamic height
        heroRef.current.style.height = `${availableHeight}px`;
        heroRef.current.style.minHeight = `${availableHeight}px`;
      }
    };

    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);
    
    return () => window.removeEventListener('resize', updateHeroHeight);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the scrollable container (could be #root or window)
      const scrollContainer = document.getElementById('root') || window;
      const isRootScrolling = !!document.getElementById('root');
      
      // Get current scroll position
      const currentScrollY = isRootScrolling ? scrollContainer.scrollTop : window.scrollY;
      
      // Get element position and dimensions
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + currentScrollY;
      const elementHeight = element.offsetHeight;
      
      // Get viewport dimensions
      const viewportHeight = window.innerHeight;
      
      // Get navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 64;
      
      // Calculate target scroll position to show section title at top
      // Add some padding to ensure title is visible below navbar
      const targetScrollY = elementTop - navbarHeight - 20;
      
      // Ensure we don't scroll past the top
      const finalScrollY = Math.max(0, targetScrollY);
      
      // Smooth scroll to target
      if (isRootScrolling) {
        scrollContainer.scrollTo({
          top: finalScrollY,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({
          top: finalScrollY,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section ref={heroRef} id="home" className="hero-viewport-dynamic flex items-center justify-center relative overflow-hidden">
      {/* <BackgroundBlobs /> */}

      <motion.div
        className="text-center space-y-8 max-w-3xl mx-auto px-4 relative z-20 pb-safe"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={textVariants}
          className="space-y-4"
        >
          <motion.span
            className="text-xl text-gray-600 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Jose Marie Lim
          </motion.h1>
          <motion.div
            className={`h-1 w-40 mx-auto ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I like Building secure, scalable solutions while pushing the boundaries of what's possible in tech. Currently diving deep into AI, web development, and cybersecurity.
        </motion.p>

        <motion.div 
          className="flex gap-3 md:gap-4 justify-center mobile-safe-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className={`px-5 md:px-10 py-2.5 md:py-3.5 rounded-lg border ${
              isDarkMode 
                ? 'bg-white text-black border-neutral-200 hover:border-neutral-300' 
                : 'bg-gray-900 text-white border-transparent'
            } font-medium transition-all duration-300 relative overflow-hidden group hover:shadow-lg text-sm md:text-base`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Projects
              <motion.span
                className="ml-1"
                animate={{
                  x: [0, 4, 0],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className={`px-5 md:px-10 py-2.5 md:py-3.5 rounded-lg border ${
              isDarkMode 
                ? 'border-neutral-600 hover:border-neutral-500' 
                : 'border-neutral-400 hover:border-neutral-500'
            } text-gray-900 font-medium transition-all duration-300 relative overflow-hidden group hover:shadow-lg text-sm md:text-base`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-6 flex items-center justify-center"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.2
          }}
        >
          <svg 
            className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}; 