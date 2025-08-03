import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

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
  
  // Performance
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

  // Performance optimization: Add will-change when in view
  useEffect(() => {
    if (ref.current && isInView) {
      ref.current.style.willChange = config.willChange;
      ref.current.style.transform = config.transform;
      ref.current.style.backfaceVisibility = config.backfaceVisibility;
    }
    
    return () => {
      if (ref.current) {
        ref.current.style.willChange = "auto";
      }
    };
  }, [isInView, config.willChange, config.transform, config.backfaceVisibility]);

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