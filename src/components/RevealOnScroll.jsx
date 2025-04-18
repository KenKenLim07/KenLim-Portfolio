// RevealOnScroll.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const RevealOnScroll = ({
  children,
  animationClass = "",
  duration = 0.7,
  delay = 0.1,
  yOffset = 32,
  start = true, // NEW PROP
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && start) {
      controls.start("visible");
    }
  }, [isInView, start, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 },
      }}
      className={`${animationClass}`}
    >
      {children}
    </motion.div>
  );
};
