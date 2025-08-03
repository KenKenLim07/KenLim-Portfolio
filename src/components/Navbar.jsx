import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Variants for Navbar container animation (slide in/out)
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      when: "afterChildren",
      duration: 0.5, // increased duration for smoother slide-out
      ease: "easeInOut",
      staggerChildren: 0.1,
      staggerDirection: -1, // reverse stagger on close for nice cascading effect
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const menuItemVariants = {
  closed: {
    opacity: 0,
    x: 50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const MobileMenu = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
        >
          <button
            onClick={onClose}
            className="self-end mb-8 text-gray-700 font-bold text-xl"
          >
            ✕
          </button>

          <nav className="flex flex-col space-y-6">
            {sections.map(({ id, label }) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                variants={menuItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-900 font-medium text-lg text-left"
              >
                {label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Navbar = () => {
  const { isDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // Navbar height (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDarkMode 
              ? 'bg-dark-card/95 backdrop-blur-md shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)]' 
              : 'bg-white/80 backdrop-blur-sm shadow-[0_1px_2px_-1px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="text-xs font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`text-sm font-medium ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                onClick={toggleMenu}
                className={`p-2 rounded-lg ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center relative"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <motion.span
                    className="w-6 h-0.5 bg-current block origin-center absolute"
                    variants={{
                      closed: { rotate: 0, y: -6 },
                      open: { 
                        rotate: 45, 
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.34, 1.56, 0.64, 1]
                        }
                      }
                    }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block absolute"
                    variants={{
                      closed: { opacity: 1, y: 0 },
                      open: { 
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeInOut"
                        }
                      }
                    }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block origin-center absolute"
                    variants={{
                      closed: { rotate: 0, y: 6 },
                      open: { 
                        rotate: -45, 
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.34, 1.56, 0.64, 1]
                        }
                      }
                    }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.3
              }}
              className={`fixed top-0 right-0 w-64 h-full z-40 md:hidden ${
                isDarkMode ? 'bg-black' : 'bg-white'
              } shadow-xl`}
            >
              <div className="p-6 h-full flex flex-col pt-20">
                <nav className="flex-1">
                  <div className="space-y-1">
                    {sections.map((section, index) => (
                      <motion.a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(section.id);
                        }}
                        className={`block py-3 px-4 rounded-lg text-sm font-medium ${
                          isDarkMode 
                            ? 'text-gray-300 hover:text-white hover:bg-neutral-900' 
                            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                        } transition-colors`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.4,
                            delay: 0.3 + (index * 0.1),
                            ease: [0.34, 1.56, 0.64, 1]
                          }
                        }}
                        exit={{ 
                          opacity: 0,
                          x: 20,
                          transition: {
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: (sections.length - 1 - index) * 0.05
                          }
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: {
                            duration: 0.2,
                            ease: [0.34, 1.56, 0.64, 1]
                          }
                        }}
                        whileTap={{ 
                          scale: 0.98,
                          transition: {
                            duration: 0.1,
                            ease: [0.34, 1.56, 0.64, 1]
                          }
                        }}
                      >
                        {section.label}
                      </motion.a>
                    ))}
                  </div>
                </nav>
                
                {/* Download CV Button */}
                <motion.a
                  href="https://drive.google.com/file/d/1Om-3H7yRrYMFV68aSDm7YGeccWEHH-Ko/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 text-xs font-medium px-4 py-2 rounded-lg border ${
                    isDarkMode 
                      ? 'border-neutral-700 text-gray-300 hover:bg-neutral-900 hover:text-white' 
                      : 'border-neutral-300 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  } transition-colors flex items-center justify-center gap-2`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: 0.6,
                      ease: [0.34, 1.56, 0.64, 1]
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    y: 20,
                    transition: {
                      duration: 0.2,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: {
                      duration: 0.2,
                      ease: [0.34, 1.56, 0.64, 1]
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: {
                      duration: 0.1,
                      ease: [0.34, 1.56, 0.64, 1]
                    }
                  }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
