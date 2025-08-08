import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import profileImage from '../../assets/profile.jpg';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFirebase, SiSupabase, SiTailwindcss, SiVite, SiPostgresql, SiMongodb, SiRedux, SiExpress, SiNextdotjs, SiGraphql, SiJest, SiFigma, SiLinux } from 'react-icons/si';

export const Hero = () => {
  const heroRef = useRef(null);
  const { isDarkMode } = useTheme();
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile landscape mode
  useEffect(() => {
    const checkOrientation = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Senior dev approach: Detect mobile landscape more accurately
      const isLandscapeMode = viewportHeight < viewportWidth;
      const isMobileView = viewportWidth < 768 || (isLandscapeMode && viewportHeight < 600);
      const newIsLandscape = isMobileView && isLandscapeMode;
      
      console.log('🔄 ORIENTATION CHECK:', {
        windowWidth: viewportWidth,
        windowHeight: viewportHeight,
        isMobileView,
        isLandscapeMode,
        newIsLandscape,
        currentIsLandscape: isLandscape,
        currentIsMobile: isMobile,
        orientationChanged: newIsLandscape !== isLandscape,
        mobileDetection: {
          widthCheck: viewportWidth < 768,
          heightCheck: viewportHeight < 600,
          landscapeCheck: isLandscapeMode
    }
      });
      
      setIsMobile(isMobileView);
      setIsLandscape(newIsLandscape);
      
      if (newIsLandscape !== isLandscape) {
        console.log('🔄 ORIENTATION STATE CHANGED:', {
          from: { isLandscape, isMobile },
          to: { isLandscape: newIsLandscape, isMobile: isMobileView }
        });
      }
    };

    console.log('🚀 INITIAL ORIENTATION DETECTION');
    checkOrientation();
    
    window.addEventListener('resize', () => {
      console.log('📱 WINDOW RESIZE - CHECKING ORIENTATION');
      checkOrientation();
    });
    
    window.addEventListener('orientationchange', () => {
      console.log('📱 ORIENTATION CHANGE EVENT');
      // Add delay to ensure new dimensions are available
      setTimeout(checkOrientation, 100);
    });
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [isLandscape]);

  // Set dynamic height for hero section
  useEffect(() => {
    const updateHeroHeight = () => {
      if (heroRef.current) {
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 64;
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        
        // Debug logging
        console.log('🔍 HERO DEBUG:', {
          isLandscape,
          isMobile,
          viewportHeight,
          viewportWidth,
          navbarHeight,
          heroElement: heroRef.current,
          heroCurrentHeight: heroRef.current.style.height,
          heroCurrentMinHeight: heroRef.current.style.minHeight,
          heroCurrentMaxHeight: heroRef.current.style.maxHeight
        });
        
        // Senior dev approach: Precise height management
        if (isLandscape) {
          // Landscape mode: Natural content flow for better UX
          console.log('📱 LANDSCAPE MODE: Natural content flow');
          heroRef.current.style.height = 'auto';
          heroRef.current.style.minHeight = 'auto';
          heroRef.current.style.maxHeight = 'none';
          heroRef.current.style.overflowY = 'visible';
          heroRef.current.style.overflowX = 'hidden';
        } else if (viewportHeight < 600 && viewportWidth > viewportHeight) {
          // Short landscape viewport: Natural content flow
          console.log('📱 SHORT LANDSCAPE: Natural content flow');
          heroRef.current.style.height = 'auto';
          heroRef.current.style.minHeight = 'auto';
          heroRef.current.style.maxHeight = 'none';
          heroRef.current.style.overflowY = 'visible';
          heroRef.current.style.overflowX = 'hidden';
        } else {
          // Portrait/Desktop: Fill viewport below sticky navbar using dvh/vh hybrid
          console.log('📱 PORTRAIT/DESKTOP: calc(100dvh - navbarHeight) with fallback');
          const viewportUnit = (window.CSS && CSS.supports('height', '100dvh')) ? 'dvh' : 'vh';
          heroRef.current.style.height = 'auto';
          heroRef.current.style.minHeight = `calc(100${viewportUnit} - ${navbarHeight}px)`;
          heroRef.current.style.maxHeight = 'none';
          heroRef.current.style.overflowY = 'visible';
          heroRef.current.style.overflowX = 'hidden';
        }
        
        // Final debug log
        console.log('✅ FINAL HERO STATE:', {
          height: heroRef.current.style.height,
          minHeight: heroRef.current.style.minHeight,
          maxHeight: heroRef.current.style.maxHeight,
          overflowY: heroRef.current.style.overflowY,
          overflowX: heroRef.current.style.overflowX,
          actualHeight: heroRef.current.offsetHeight,
          scrollHeight: heroRef.current.scrollHeight
        });
      } else {
        console.warn('⚠️ Hero ref not available');
      }
    };
    
    // Initial calculation with delay to ensure component is mounted
    const initialTimeoutId = setTimeout(() => {
      console.log('🚀 INITIAL HERO HEIGHT CALCULATION');
      updateHeroHeight();
    }, 50);
    
    // Recalculate after a longer delay to ensure content is rendered
    const contentTimeoutId = setTimeout(() => {
      console.log('⏰ CONTENT RENDERED HERO HEIGHT RECALCULATION');
      updateHeroHeight();
    }, 200);
    
    window.addEventListener('resize', () => {
      console.log('🔄 WINDOW RESIZE DETECTED');
      updateHeroHeight();
    });
    
    return () => {
      window.removeEventListener('resize', updateHeroHeight);
      clearTimeout(initialTimeoutId);
      clearTimeout(contentTimeoutId);
    };
  }, [isLandscape, isMobile]); // Add isMobile as dependency

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollContainer = document.getElementById('root') || window;
      const isRootScrolling = !!document.getElementById('root');
      const currentScrollY = isRootScrolling ? scrollContainer.scrollTop : window.scrollY;
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + currentScrollY;
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 64;
      const targetScrollY = elementTop - navbarHeight - 20;
      const finalScrollY = Math.max(0, targetScrollY);
      if (isRootScrolling) {
        scrollContainer.scrollTo({ top: finalScrollY, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: finalScrollY, behavior: 'smooth' });
      }
    }
  };

  const techStack = [
    { name: 'React', icon: <FaReact className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Python', icon: <FaPython className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Supabase', icon: <SiSupabase className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Vite', icon: <SiVite className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Redux', icon: <SiRedux className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Express', icon: <SiExpress className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Git', icon: <FaGitAlt className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Docker', icon: <FaDocker className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Jest', icon: <SiJest className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Figma', icon: <SiFigma className="w-6 h-6 md:w-8 md:h-8" /> },
    { name: 'Linux', icon: <SiLinux className="w-6 h-6 md:w-8 md:h-8" /> },
  ];

  return (
    <section id="home" ref={heroRef} className="py-8 min-h-screen md:min-h-screen lg:min-h-screen">
      <div className={`max-w-3xl mx-auto px-1 ${isLandscape ? 'py-1 mt-1' : 'py-4 mt-2'}`}>
        {/* Main Content - Flexible height matching */}
        <div className={`hero-row flex flex-row items-start justify-center gap-x-2 min-w-0 overflow-x-auto w-full ${isLandscape ? 'pt-0 gap-x-1' : 'pt-3'}`}>
          {/* Left: Bordered Box with Floating Label */}
            <motion.div
            className={`hero-intro relative flex items-start justify-start ${isLandscape ? 'min-w-0 pt-2' : 'max-w-md md:max-w-lg lg:max-w-xl'}`}
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
              className={`relative w-full border border-gray-300 dark:border-neutral-700 md:border-2 rounded-lg shadow-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-[#0e0e0e] text-gray-200' : 'bg-white text-neutral-900'
              } ${isLandscape ? 'p-2 pt-1' : 'p-4'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              {/* Floating Label */}
              <div
                className={`absolute px-1 py-1 font-bold uppercase tracking-wide rounded-lg z-10 border-1 shadow-lg backdrop-blur-sm ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-neutral-900 to-neutral-800 text-gray-100 border-neutral-300 shadow-neutral-900/50' 
                    : 'bg-gradient-to-r from-white to-gray-50 text-neutral-800 border-gray-400 shadow-gray-400/30'
                } ${isLandscape ? 'text-xs -top-2.5 left-3' : 'text-xs -top-3 left-4'}`}
                style={{ 
                  letterSpacing: '0.1em',
                  textShadow: isDarkMode ? '0 1px 2px rgba(0,0,0,0.8)' : '0 1px 2px rgba(255,255,255,0.8)'
                }}
              >
                Hi, I'm Jose Marie Lim
              </div>
              <div className={`space-y-2 ${isLandscape ? 'space-y-1 mt-3.5' : 'mt-2 space-y-2'}`}>
                <p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{
                    fontSize: isLandscape ? 'clamp(11px, 2vw, 13px)' : 'clamp(14px, 2.5vw, 16px)',
                    lineHeight: isLandscape ? '1.4' : '1.8'
                  }}
                >
                  I specialize in identifying complex problems and crafting elegant solutions that drive real impact. I transform challenges into opportunities by combining technical expertise with strategic thinking. Currently focused on building robust, user-centric applications that solve real-world problems.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Picture and Buttons */}
                    <motion.div
            className={`hero-aside flex flex-col items-center justify-center h-full ${isLandscape ? 'gap-2 min-w-0' : 'gap-3 md:gap-4 max-w-xs'}`}
             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Profile Picture */}
          <motion.div
              className={`${isLandscape ? 'mb-1' : 'mb-2 md:mb-4'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`hero-image rounded-xl overflow-hidden shadow-lg p-1 ${
                isDarkMode 
                  ? 'bg-neutral-800' 
                  : 'bg-white'
              } ${isLandscape ? 'w-24 h-24' : 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'}`}>
                <img
                  src={profileImage}
                  alt="Jose Marie Lim"
                  className="w-full h-full object-cover rounded-lg"
          />
              </div>
        </motion.div>

          <motion.button
              onClick={() => scrollToSection('projects')}
              className={`rounded-lg border font-semibold shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-white text-black border-neutral-200 hover:border-neutral-300' 
                : 'bg-gray-900 text-white border-transparent'
              } ${isLandscape ? 'py-1 text-xs' : 'py-2 md:py-3'}`}
              style={{
                width: isLandscape ? 'clamp(80px, 15vw, 120px)' : 'clamp(80px, 15vw, 224px)',
                fontSize: isLandscape ? 'clamp(10px, 2vw, 12px)' : 'clamp(12px, 2.5vw, 16px)',
                paddingLeft: isLandscape ? 'clamp(6px, 1.5vw, 10px)' : 'clamp(8px, 2vw, 16px)',
                paddingRight: isLandscape ? 'clamp(6px, 1.5vw, 10px)' : 'clamp(8px, 2vw, 16px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          >
              <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                <svg 
                  className="flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ width: isLandscape ? 'clamp(10px, 2vw, 12px)' : 'clamp(12px, 2.5vw, 16px)', height: isLandscape ? 'clamp(10px, 2vw, 12px)' : 'clamp(12px, 2.5vw, 16px)' }}
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
                <span className={isLandscape ? 'hidden' : 'hidden sm:inline'}>View Projects</span>
                <span className={isLandscape ? 'text-xs' : 'sm:hidden'}>Projects</span>
            </span>
          </motion.button>
          <motion.button
              onClick={() => scrollToSection('contact')}
              className={`rounded-lg border font-semibold shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isDarkMode 
                  ? 'border-neutral-600 hover:border-neutral-500 bg-neutral-900 text-white'
                  : 'border-neutral-400 hover:border-neutral-500 bg-white text-gray-900'
              } ${isLandscape ? 'py-1 text-xs' : 'py-2 md:py-3'}`}
              style={{
                width: isLandscape ? 'clamp(80px, 15vw, 120px)' : 'clamp(80px, 15vw, 224px)',
                fontSize: isLandscape ? 'clamp(10px, 2vw, 12px)' : 'clamp(12px, 2.5vw, 16px)',
                paddingLeft: isLandscape ? 'clamp(6px, 1.5vw, 10px)' : 'clamp(8px, 2vw, 16px)',
                paddingRight: isLandscape ? 'clamp(6px, 1.5vw, 10px)' : 'clamp(8px, 2vw, 16px)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
          >
              <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                <svg 
                  className="flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ width: isLandscape ? 'clamp(10px, 2vw, 12px)' : 'clamp(12px, 2.5vw, 16px)', height: isLandscape ? 'clamp(10px, 2vw, 12px)' : 'clamp(12px, 2.5vw, 16px)' }}
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
                <span className={isLandscape ? 'hidden' : 'hidden sm:inline'}>Contact Me</span>
                <span className={isLandscape ? 'text-xs' : 'sm:hidden'}>Contact</span>
            </span>
          </motion.button>
        </motion.div>
        </div>

        {/* Tech Stack Section - Directly after main content */}
        <div className={`w-full ${isLandscape ? 'mt-1' : 'mt-6'}`}>
          <div className={`relative flex flex-wrap items-center rounded-lg ${
            isDarkMode 
              ? 'bg-[#0e0e0e]' 
              : 'bg-white'
          } ${isLandscape ? 'gap-2 px-3 py-1 justify-between' : 'gap-2 md:gap-3 px-4 py-2 justify-center'}`}>
            {techStack.map((tech, index) => (
      <motion.div 
                key={tech.name}
                className={`flex items-center justify-center ${isLandscape ? 'flex-1 min-w-0 h-full' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <motion.div
                  className={`rounded-lg flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg border ${
                    isDarkMode 
                      ? 'bg-neutral-800 border-neutral-600 hover:border-neutral-500 text-gray-300' 
                      : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                  } ${isLandscape ? 'w-8 h-8 flex-shrink-0' : 'w-8 h-8 md:w-10 md:h-10'}`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  title={tech.name}
                >
                  <div className={`flex items-center justify-center ${isLandscape ? 'w-5 h-5' : 'w-6 h-6 md:w-8 md:h-8'}`}>
                    {tech.icon}
                  </div>
        </motion.div>
      </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 