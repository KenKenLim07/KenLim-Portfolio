import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useMemo, useState, useEffect } from 'react';
import React from 'react';
// import { BackgroundBlobs } from '../animations/BackgroundBlobs';
import { useTheme } from '../../context/ThemeContext';
import { staggerContainer, textVariants, buttonVariants } from '../../animations/motionVariants';

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 32,
    transition: { duration: 0.6 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // Match Hero easing
      delay: 1.8 // Coordinated with Hero sequence completion
    }
  }
};

export const Hero = React.memo(() => {
  const { isDarkMode } = useTheme();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Calculate Hero animation sequence timing
  const heroAnimationTiming = {
    greeting: 0.2,    // "Hi, I'm"
    name: 0.4,        // "Jose Marie Lim"
    divider: 0.6,     // Line divider
    description: 0.8, // Description text
    buttons: 1.0,     // Action buttons
    totalDuration: 1.8 // Total sequence duration
  };
  
  // Calculate scroll progress for scroll indicator fade out
  const scrollIndicatorOpacity = useTransform(
    scrollY,
    [0, 100],
    [1, 0],
    { clamp: true }
  );

  // Dynamic viewport height calculation for different browsers
  const [viewportHeight, setViewportHeight] = useState('100vh');
  
  useEffect(() => {
    const updateViewportHeight = () => {
      // Use actual viewport height instead of CSS vh units
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      setViewportHeight(`${window.innerHeight}px`);
    };

    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);

  // Memoize scroll function to prevent recreation on every render
  const scrollToSection = useMemo(() => (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  // Memoize button styles to prevent recalculation
  const buttonStyles = useMemo(() => ({
    primary: `px-5 md:px-10 py-2.5 md:py-3.5 rounded-lg border ${
      isDarkMode 
        ? 'bg-white text-black border-neutral-200 hover:border-neutral-300' 
        : 'bg-gray-900 text-white border-transparent'
    } font-medium transition-all duration-300 relative overflow-hidden group hover:shadow-lg text-sm md:text-base`,
    secondary: `px-5 md:px-10 py-2.5 md:py-3.5 rounded-lg border ${
      isDarkMode 
        ? 'border-neutral-600 hover:border-neutral-500' 
        : 'border-neutral-400 hover:border-neutral-500'
    } text-gray-900 font-medium transition-all duration-300 relative overflow-hidden group hover:shadow-lg text-sm md:text-base`
  }), [isDarkMode]);

  return (
    <section 
      ref={heroRef} 
      id="home" 
      className="flex flex-col justify-center relative"
      style={{ 
        minHeight: viewportHeight,
        paddingTop: 'var(--navbar-height, 4rem)',
        paddingBottom: '6rem' // Space for scroll arrow
      }}
    >
      {/* <BackgroundBlobs /> */}

      <motion.div
        className="text-center space-y-8 max-w-3xl mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center"
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
            transition={{ delay: heroAnimationTiming.greeting, duration: 0.6 }}
          >
            Hi, I'm
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: heroAnimationTiming.name, duration: 0.8 }}
          >
            Jose Marie Lim
          </motion.h1>
          <motion.div
            className={`h-1 w-40 mx-auto ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: heroAnimationTiming.divider, duration: 1 }}
          />
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: heroAnimationTiming.description, duration: 0.8 }}
        >
          I like Building secure, scalable solutions while pushing the boundaries of what's possible in tech. Currently diving deep into AI, web development, and cybersecurity.
        </motion.p>

        <motion.div 
          className="flex gap-3 md:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: heroAnimationTiming.buttons, duration: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className={buttonStyles.primary}
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
            className={buttonStyles.secondary}
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

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          opacity: scrollIndicatorOpacity,
          bottom: '1rem', // Fixed distance from bottom
          transform: 'translateX(-50%) translateY(0)' // Ensure proper centering
        }}
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
            delay: 2.6 // Start bouncing after arrow appears (1.8 + 0.8 = 2.6)
          }}
        >
          <svg 
            className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
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
});

Hero.displayName = 'Hero'; 