import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Unified animation configuration
export const ANIMATION_CONFIG = {
  // Timing
  duration: 0.6,
  staggerDelay: 0.1,
  sectionDelay: 0.2,

  // Easing
  ease: [0.6, -0.05, 0.01, 0.99], // Custom cubic-bezier for smooth feel

  // Viewport
  viewportMargin: "-100px",
  viewportOnce: true,

  // Performance - Simplified for portfolio projects
  willChange: "auto", // Only apply when needed
  transform: "none", // Remove aggressive translateZ
  backfaceVisibility: "visible" // Remove unnecessary property
};

// Performance configuration for critical elements only
export const CRITICAL_PERFORMANCE_CONFIG = {
  willChange: "transform, opacity",
  transform: "translateZ(0)",
  backfaceVisibility: "hidden"
};

// Custom hook for consistent scroll animations
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const config = { ...ANIMATION_CONFIG, ...options };

  const isInView = useInView(ref, {
    once: config.viewportOnce,
    margin: config.viewportMargin,
    amount: options.amount || "some"
  });

  // Performance optimization: Only apply heavy optimizations when explicitly needed
  useEffect(() => {
    if (ref.current && isInView && options.useCriticalPerformance) {
      ref.current.style.willChange = CRITICAL_PERFORMANCE_CONFIG.willChange;
      ref.current.style.transform = CRITICAL_PERFORMANCE_CONFIG.transform;
      ref.current.style.backfaceVisibility = CRITICAL_PERFORMANCE_CONFIG.backfaceVisibility;
    }

    return () => {
      if (ref.current) {
        ref.current.style.willChange = "auto";
        ref.current.style.transform = "none";
        ref.current.style.backfaceVisibility = "visible";
      }
    };
  }, [isInView, options.useCriticalPerformance]);

  return { ref, isInView, config };
};

// Throttled scroll handler for performance
export const useThrottledScroll = (callback, delay = 16) => {
  useEffect(() => {
    let timeoutId;
    let lastCall = 0;

    const throttledCallback = (...args) => {
      const now = Date.now();

      if (now - lastCall >= delay) {
        callback(...args);
        lastCall = now;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          callback(...args);
          lastCall = Date.now();
        }, delay - (now - lastCall));
      }
    };

    window.addEventListener('scroll', throttledCallback, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledCallback);
      clearTimeout(timeoutId);
    };
  }, [callback, delay]);
};

// Hook to detect in-app browsers and provide responsive spacing
export const useResponsiveSpacing = () => {
  const [spacing, setSpacing] = useState({
    scrollArrowBottom: 'var(--scroll-arrow-bottom)',
    isInAppBrowser: false,
    viewportHeight: window.innerHeight,
    viewportWidth: window.innerWidth
  });

  useEffect(() => {
    const detectEnvironment = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isInAppBrowser = (
        userAgent.includes('fbav') || // Facebook in-app browser
        userAgent.includes('instagram') || // Instagram in-app browser
        userAgent.includes('line') || // LINE in-app browser
        userAgent.includes('wv') || // WebView
        userAgent.includes('mobile') && (
          userAgent.includes('safari') && !userAgent.includes('chrome')
        ) // iOS Safari in-app
      );

      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      // Dynamic spacing based on viewport constraints
      let scrollArrowBottom = 'var(--scroll-arrow-bottom)';

      if (isInAppBrowser || viewportHeight < 600) {
        scrollArrowBottom = 'var(--scroll-arrow-bottom-inapp)';
      } else if (viewportWidth <= 375 && viewportHeight <= 667) {
        scrollArrowBottom = '5rem'; // Extra small viewports
      } else if (viewportWidth <= 768) {
        scrollArrowBottom = 'var(--scroll-arrow-bottom-mobile)';
      }

      setSpacing({
        scrollArrowBottom,
        isInAppBrowser,
        viewportHeight,
        viewportWidth
      });
    };

    detectEnvironment();
    window.addEventListener('resize', detectEnvironment);
    window.addEventListener('orientationchange', detectEnvironment);

    return () => {
      window.removeEventListener('resize', detectEnvironment);
      window.removeEventListener('orientationchange', detectEnvironment);
    };
  }, []);

  return spacing;
};