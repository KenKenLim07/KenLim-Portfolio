// motionVariants.js

export const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  };
  
  export const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  
  export const slideFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  
  export const slideFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  
  export const slideFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  export const popIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  
  export const rotateFade = {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0 },
  };
  
  // Great for cards
  export const cardFlip = {
    hidden: {
      rotateY: 180,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };
  
  // Great for a staggered parent
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const fadeIn = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  