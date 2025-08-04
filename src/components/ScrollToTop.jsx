import { motion, AnimatePresence } from 'framer-motion';

import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export const ScrollToTop = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);

  const updateVisibility = useCallback(() => {
    // Get the scrollable container (could be #root or window)
    const scrollContainer = document.getElementById('root') || window;
    const isRootScrolling = !!document.getElementById('root');
    
    const scrollY = isRootScrolling ? scrollContainer.scrollTop : window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = isRootScrolling ? scrollContainer.scrollHeight : document.documentElement.scrollHeight;
    
    // Show button when scrolled past 20% of the page height
    const shouldBeVisible = scrollY > (documentHeight * 0.2);
    
    setIsVisible(shouldBeVisible);
  }, [isVisible]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Get the scrollable container (could be #root or window)
          const scrollContainer = document.getElementById('root') || window;
          const isRootScrolling = !!document.getElementById('root');
          
          const currentScrollY = isRootScrolling ? scrollContainer.scrollTop : window.scrollY;
          setLastScrollY(currentScrollY);
          
          updateVisibility();
          
          // Update active section
          const scrollPosition = currentScrollY + window.innerHeight / 3;
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
          
          ticking = false;
        });
        
        ticking = true;
      }
    };

    // Listen to the correct scroll container
    const scrollContainer = document.getElementById('root') || window;
    const isRootScrolling = !!document.getElementById('root');
    
    if (isRootScrolling) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    } else {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, updateVisibility]);

  const scrollToTop = () => {
    // Get the scrollable container (could be #root or window)
    const scrollContainer = document.getElementById('root') || window;
    const isRootScrolling = !!document.getElementById('root');
    
    if (isRootScrolling) {
      scrollContainer.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    }
  };

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
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 rounded-full ${
            isDarkMode 
              ? 'bg-white text-black hover:bg-gray-100' 
              : 'bg-gray-900 text-white hover:bg-gray-800'
          } shadow-lg hover:shadow-xl transition-all duration-300 z-50`}
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
        </button>
      )}
    </>
  );
}; 