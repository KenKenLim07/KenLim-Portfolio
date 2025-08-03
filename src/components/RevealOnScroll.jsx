// RevealOnScroll.jsx
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const RevealOnScroll = ({
  children,
  animationClass = "",
  duration = 0.6,
  delay = 0.1,
  yOffset = 32,
  variants,
  useCriticalPerformance = false, // Only use heavy optimizations when explicitly needed
}) => {
  const { ref, isInView, config } = useScrollAnimation({ useCriticalPerformance });

  // Default fallback animation
  const defaultVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration, 
        delay, 
        ease: config.ease 
      }}
      variants={variants || defaultVariants}
      className={animationClass}
    >
      {children}
    </motion.div>
  );
};
