import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { Notification } from './Notification';

export const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  useEffect(() => {
    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    // Show notification
    setShowNotification(true);
    setIsNotificationVisible(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setIsNotificationVisible(false);
      setTimeout(() => {
        setShowNotification(false);
      }, 300); // Wait for exit animation
    }, 3000);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={handleThemeToggle}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Dark mode toggle button */}
      <button
        onClick={handleThemeToggle}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>

      {showNotification && (
        <Notification
          message="Sorry, dark mode toggle is a work in progress. Stay tuned for the full experience soon."
          isVisible={isNotificationVisible}
          onClose={() => setIsNotificationVisible(false)}
        />
      )}
    </div>
  );
}; 