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
}) => {
  const { ref, isInView, config } = useScrollAnimation();

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
      style={{
        willChange: config.willChange,
        transform: config.transform,
        backfaceVisibility: config.backfaceVisibility
      }}
    >
      {children}
    </motion.div>
  );
};
