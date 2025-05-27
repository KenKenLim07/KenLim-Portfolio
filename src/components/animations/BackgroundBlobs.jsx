import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const Blob = ({ className, initialDelay, xAnimation, yAnimation, xDuration, yDuration, ...props }) => (
  <motion.div 
    className={className}
    initial={{ 
      scale: 0.8, 
      opacity: 0, 
      borderRadius: "50%",
      x: 0,
      y: 0
    }}
    animate={{ 
      scale: 1, 
      opacity: 1, 
      borderRadius: "50%",
      x: xAnimation,
      y: yAnimation
    }}
    transition={{ 
      duration: 1.2,
      delay: initialDelay,
      ease: [0.6, -0.05, 0.01, 0.99],
      y: {
        duration: yDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: initialDelay + 0.5
      },
      x: {
        duration: xDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: initialDelay + 0.5
      }
    }}
    style={{ 
      transformOrigin: "center",
      willChange: "transform, opacity, border-radius",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      perspective: 1000,
      WebkitPerspective: 1000,
      transform: "translateZ(0)",
      WebkitTransform: "translateZ(0)",
      position: "absolute",
      isolation: "isolate"
    }}
    {...props}
  />
);

export const BackgroundBlobs = () => {
  const { scrollY } = useScroll();
  
  // Calculate scroll progress for smoother transitions
  const fadeStart = 100;
  const fadeEnd = 300;
  
  const blobOpacity = useTransform(
    scrollY,
    [fadeStart, fadeEnd],
    [1, 0],
    { 
      clamp: true,
      // Add easing to make the transition smoother
      ease: (t) => t * t * (3 - 2 * t)
    }
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        type: "tween"
      }}
      style={{ 
        opacity: blobOpacity,
        transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        willChange: "opacity",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        perspective: 1000,
        WebkitPerspective: 1000,
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        isolation: "isolate",
        contain: "layout style paint"
      }}
    >
      {/* Large blobs */}
      <Blob 
        className="absolute top-[10%] -left-[15%] md:-left-[10%] w-48 md:w-72 h-48 md:h-72 bg-purple-300/60 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.3}
        xAnimation={[0, 15, 0]}
        yAnimation={[0, -20, 0]}
        xDuration={8}
        yDuration={10}
      />
      <Blob 
        className="absolute top-[15%] -right-[15%] md:-right-[10%] w-48 md:w-72 h-48 md:h-72 bg-yellow-300/60 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.5}
        xAnimation={[0, -20, 0]}
        yAnimation={[0, 15, 0]}
        xDuration={11}
        yDuration={9}
      />
      <Blob 
        className="absolute -bottom-[5%] right-[-10%] md:right-[-5%] w-40 md:w-72 h-40 md:h-72 bg-pink-300/60 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.7}
        xAnimation={[0, -15, 0]}
        yAnimation={[0, -15, 0]}
        xDuration={10}
        yDuration={12}
      />
      <Blob 
        className="absolute top-[45%] -left-[5%] md:-left-[2%] w-32 md:w-48 h-32 md:h-48 bg-cyan-300/30 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.9}
        xAnimation={[0, 20, 0]}
        yAnimation={[0, 10, 0]}
        xDuration={9}
        yDuration={11}
      />

      {/* Small blobs */}
      <Blob 
        className="absolute top-[30%] left-[20%] w-16 h-16 bg-indigo-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.1}
        xAnimation={[0, 10, 0]}
        yAnimation={[0, -15, 0]}
        xDuration={10}
        yDuration={8}
      />
      <Blob 
        className="absolute top-[60%] right-[25%] w-20 h-20 bg-orange-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.3}
        xAnimation={[0, -12, 0]}
        yAnimation={[0, 12, 0]}
        xDuration={11}
        yDuration={9}
      />
      <Blob 
        className="absolute bottom-[20%] left-[30%] w-12 h-12 bg-teal-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.5}
        xAnimation={[0, 15, 0]}
        yAnimation={[0, -10, 0]}
        xDuration={8}
        yDuration={10}
      />
      <Blob 
        className="absolute top-[25%] right-[15%] w-14 h-14 bg-rose-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.7}
        xAnimation={[0, -8, 0]}
        yAnimation={[0, 8, 0]}
        xDuration={9}
        yDuration={11}
      />
      <Blob 
        className="absolute bottom-[35%] right-[10%] w-10 h-10 bg-violet-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.9}
        xAnimation={[0, 10, 0]}
        yAnimation={[0, -12, 0]}
        xDuration={10}
        yDuration={9}
      />
    </motion.div>
  );
}; 