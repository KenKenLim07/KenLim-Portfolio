// motionVariants.js - Optimized with consistent timing and easing

// Unified easing curve for smooth, premium feel
const EASE_CURVE = [0.6, -0.05, 0.01, 0.99];

// Base transition configuration
const BASE_TRANSITION = {
  duration: 0.6,
  ease: EASE_CURVE
};

export const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 32,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: BASE_TRANSITION
  },
  };
  
  export const zoomIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: BASE_TRANSITION
  },
  };
  
  export const slideFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -50,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: BASE_TRANSITION
  },
  };
  
  export const slideFromRight = {
  hidden: { 
    opacity: 0, 
    x: 50,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: BASE_TRANSITION
  },
  };
  
  export const slideFromBottom = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: BASE_TRANSITION
  },
  };
  
  export const popIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: BASE_TRANSITION
  },
  };
  
  export const rotateFade = {
  hidden: { 
    opacity: 0, 
    rotate: -15,
    transition: BASE_TRANSITION
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    transition: BASE_TRANSITION
  },
  };
  
// Optimized card flip with better performance
  export const cardFlip = {
    hidden: {
      rotateY: 180,
      opacity: 0,
    transition: { ...BASE_TRANSITION, duration: 0.8 }
    },
    visible: {
      rotateY: 0,
      opacity: 1,
    transition: { ...BASE_TRANSITION, duration: 0.8 }
    },
  };
  
// Optimized stagger container with consistent timing
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
      }
    }
  };
  
// Unified fadeIn variant
  export const fadeIn = {
    hidden: { 
      opacity: 0,
    y: 20,
    transition: BASE_TRANSITION
    },
    show: { 
      opacity: 1,
      y: 0,
    transition: BASE_TRANSITION
  }
};

// Hero-specific variants
export const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_CURVE
    }
  }
};

export const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
      opacity: 1,
      y: 0,
      transition: {
      duration: 0.6,
        ease: "easeOut"
      }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95
  }
};

// Performance-optimized variants for mobile
export const mobileOptimized = {
  hidden: { 
    opacity: 0, 
    y: 16, // Smaller offset for mobile
    transition: { ...BASE_TRANSITION, duration: 0.4 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { ...BASE_TRANSITION, duration: 0.4 }
    }
  };
  