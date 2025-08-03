import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const linkVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export const MobileMenu = ({ isOpen, onClose }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the scrollable container (could be #root or window)
      const scrollContainer = document.getElementById('root') || window;
      const isRootScrolling = !!document.getElementById('root');
      
      // Get current scroll position
      const currentScrollY = isRootScrolling ? scrollContainer.scrollTop : window.scrollY;
      
      // Get element position relative to viewport
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + currentScrollY;
      
      // Get navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 64;
      
      // Calculate target scroll position
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
      
      onClose(); // Close the menu after clicking
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />

          {/* Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed right-0 top-0 h-screen w-64 bg-white shadow-xl z-[101] p-6"
            style={{ height: '100dvh' }}
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="space-y-6">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  {section.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 