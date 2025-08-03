import { useEffect } from 'react';

export const ViewportManager = () => {
  useEffect(() => {
    // Function to set viewport height
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      // Handle mobile browser navigation bars
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        // Add extra padding for mobile browsers with bottom navigation
        const mobilePadding = Math.max(20, window.innerHeight * 0.1); // At least 20px or 10% of viewport
        document.documentElement.style.setProperty('--mobile-padding', `${mobilePadding}px`);
      }
    };

    // Set initial viewport height
    setViewportHeight();

    // Update on resize and orientation change
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  return null; // This component doesn't render anything
}; 