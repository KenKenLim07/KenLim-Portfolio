import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      const offset = 80; // match the desktop offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update isScrolled when scrolling down or when we're not at the top
      if (currentScrollY > 20 || currentScrollY > lastScrollY) {
        setIsScrolled(true);
      } else if (currentScrollY === 0) {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JM
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
