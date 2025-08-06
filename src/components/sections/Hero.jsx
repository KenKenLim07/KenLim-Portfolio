import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import profileImage from '../../assets/profile.jpg';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFirebase, SiSupabase, SiTailwindcss, SiVite, SiPostgresql, SiMongodb, SiRedux, SiExpress, SiNextdotjs, SiGraphql, SiJest, SiFigma, SiLinux } from 'react-icons/si';

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
    <section ref={heroRef} className="py-8">
      <div className="max-w-3xl mx-auto px-3 mt-2">
        {/* Main Content - Flexible height matching */}
        <div className="flex flex-row items-start justify-center gap-x-4 min-w-0 overflow-x-auto w-full pt-3">
          {/* Left: Bordered Box with Floating Label */}
      <motion.div
            className="relative flex items-start justify-start max-w-xs md:max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.div
              className={`relative w-full border border-gray-300 dark:border-neutral-700 md:border-2 rounded-lg p-4 shadow-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-[#0e0e0e] text-gray-200' : 'bg-white text-neutral-900'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              {/* Floating Label */}
              <div
                className={`absolute -top-3 left-4 px-2 py-0.5 text-xs font-bold uppercase tracking-wide border border-gray-300 dark:border-neutral-400 rounded ${
                  isDarkMode ? 'bg-[#0e0e0e] text-gray-200' : 'bg-white text-neutral-700'
                }`}
                style={{ 
                  letterSpacing: '0.08em',
                  backgroundColor: isDarkMode ? '#0e0e0e' : '#ffffff'
                }}
          >
                Hi, I'm Jose Marie Lim
              </div>
              <div className="space-y-2 mt-2">
                <p 
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{
                    fontSize: 'clamp(14px, 2.8vw, 18px)',
                    lineHeight: 'clamp(1.4, 2.5vw, 1.6)'
                  }}
                >
                  I specialize in identifying complex problems and crafting elegant solutions that drive real impact. I transform challenges into opportunities by combining technical expertise with strategic thinking. Currently focused on building robust, user-centric applications that solve real-world problems.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Picture and Buttons */}
          <motion.div
            className="flex flex-col items-center justify-center max-w-xs gap-3 md:gap-4 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Profile Picture */}
          <motion.div
              className="mb-2 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-40 h-40 md:w-56 md:h-56 rounded-xl overflow-hidden shadow-lg p-1 ${
                isDarkMode 
                  ? 'bg-neutral-800' 
                  : 'bg-white'
              }`}>
                <img
                  src={profileImage}
                  alt="Jose Marie Lim"
                  className="w-full h-full object-cover rounded-lg"
          />
              </div>
        </motion.div>

          <motion.button
              onClick={() => scrollToSection('projects')}
              className={`py-2 md:py-3 rounded-lg border-2 font-semibold shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-white text-black border-neutral-200 hover:border-neutral-300' 
                : 'bg-gray-900 text-white border-transparent'
              }`}
              style={{
                width: 'clamp(80px, 15vw, 224px)',
                fontSize: 'clamp(12px, 2.5vw, 16px)',
                paddingLeft: 'clamp(8px, 2vw, 16px)',
                paddingRight: 'clamp(8px, 2vw, 16px)'
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
                  style={{ width: 'clamp(12px, 2.5vw, 16px)', height: 'clamp(12px, 2.5vw, 16px)' }}
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
                <span className="hidden sm:inline">View Projects</span>
                <span className="sm:hidden">Projects</span>
            </span>
          </motion.button>
          <motion.button
              onClick={() => scrollToSection('contact')}
              className={`py-2 md:py-3 rounded-lg border-2 font-semibold shadow-md transition-all duration-300 relative overflow-hidden group hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              isDarkMode 
                  ? 'border-neutral-600 hover:border-neutral-500 bg-neutral-900 text-white'
                  : 'border-neutral-400 hover:border-neutral-500 bg-white text-gray-900'
              }`}
              style={{
                width: 'clamp(80px, 15vw, 224px)',
                fontSize: 'clamp(12px, 2.5vw, 16px)',
                paddingLeft: 'clamp(8px, 2vw, 16px)',
                paddingRight: 'clamp(8px, 2vw, 16px)'
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
                  style={{ width: 'clamp(12px, 2.5vw, 16px)', height: 'clamp(12px, 2.5vw, 16px)' }}
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
                <span className="hidden sm:inline">Contact Me</span>
                <span className="sm:hidden">Contact</span>
            </span>
          </motion.button>
        </motion.div>
        </div>

        {/* Tech Stack Section - Directly after main content */}
        <div className="w-full mt-6">
          <div className={`relative flex flex-wrap justify-center items-center gap-2 md:gap-3 px-4 py-2 rounded-lg ${
            isDarkMode 
              ? 'bg-[#0e0e0e]' 
              : 'bg-white'
          }`}>
            {techStack.map((tech, index) => (
      <motion.div 
                key={tech.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <motion.div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg border-2 ${
                    isDarkMode 
                      ? 'bg-neutral-800 border-neutral-600 hover:border-neutral-500 text-gray-300' 
                      : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  title={tech.name}
                >
                  {tech.icon}
        </motion.div>
      </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 