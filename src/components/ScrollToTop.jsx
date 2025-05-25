import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollY = window.pageYOffset;
      const scrollDirection = currentScrollY < lastScrollY;
      
      // Add buffer zone for smoother transitions
      const bufferZone = 50;
      
      if (currentScrollY > 300) {
        // Show when scrolling down past 300px
        setIsVisible(true);
      } else if (currentScrollY < 100 && scrollDirection) {
        // Only hide when scrolling up and in the buffer zone
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleScroll = () => {
      // Debounce scroll handling
      requestAnimationFrame(toggleVisibility);
      
      // Update active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-gray-900 dark:bg-white scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:scale-110'
              }`}
              aria-label={`Scroll to ${section.label}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:bg-gray-800"
            aria-label="Scroll to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}; 