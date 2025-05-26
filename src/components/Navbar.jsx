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
      const offset = 80; // Navbar height + some padding
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
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
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
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 w-64 h-full z-40 md:hidden ${
                isDarkMode ? 'bg-black' : 'bg-white'
              } shadow-xl`}
            >
              <div className="p-6 h-full flex flex-col">
                <button
                  onClick={toggleMenu}
                  className={`absolute top-4 right-4 p-2 rounded-lg z-[70] ${
                    isDarkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.4 + (index * 0.1),
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                      >
                        {section.label}
                      </motion.a>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
