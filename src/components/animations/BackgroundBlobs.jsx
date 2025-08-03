import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

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
        ease: "easeInOut",
        delay: initialDelay + 0.5
      },
      x: {
        duration: xDuration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: initialDelay + 0.5
      }
    }}
    style={{ 
      transformOrigin: "center",
      willChange: "transform, opacity, border-radius"
    }}
    {...props}
  />
);

export const BackgroundBlobs = () => {
  const { scrollY } = useScroll();
  
  // More reliable scroll-based opacity with better range
  const blobOpacity = useTransform(
    scrollY,
    [0, 150], // Fade out over first 150px of scroll
    [1, 0],
    { clamp: true }
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ 
        /* Mobile-specific fixes */
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        /* Smooth scroll-based opacity */
        opacity: blobOpacity
      }}
    >
      {/* Large blobs */}
      <Blob 
        className="absolute top-[10%] -left-[15%] md:-left-[10%] w-48 md:w-72 h-48 md:h-72 bg-purple-300/60 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.3}
        xAnimation={[0, 15, 0]}
        yAnimation={[0, -20, 0]}
        xDuration={6}
        yDuration={8}
      />
      <Blob 
        className="absolute top-[15%] -right-[15%] md:-right-[10%] w-48 md:w-72 h-48 md:h-72 bg-yellow-300/60 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.5}
        xAnimation={[0, -20, 0]}
        yAnimation={[0, 15, 0]}
        xDuration={9}
        yDuration={7}
      />
      <Blob 
        className="absolute top-[45%] -left-[5%] md:-left-[2%] w-32 md:w-48 h-32 md:h-48 bg-cyan-300/30 rounded-full mix-blend-soft-light filter blur-xl"
        initialDelay={0.9}
        xAnimation={[0, 20, 0]}
        yAnimation={[0, 10, 0]}
        xDuration={7}
        yDuration={9}
      />

      {/* Small blobs - Reduced for mobile performance */}
      <Blob 
        className="absolute top-[30%] left-[20%] w-16 h-16 bg-indigo-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.1}
        xAnimation={[0, 10, 0]}
        yAnimation={[0, -15, 0]}
        xDuration={8}
        yDuration={6}
      />
      <Blob 
        className="absolute top-[60%] right-[25%] w-20 h-20 bg-orange-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.3}
        xAnimation={[0, -12, 0]}
        yAnimation={[0, 12, 0]}
        xDuration={9}
        yDuration={7}
      />
      <Blob 
        className="absolute bottom-[20%] left-[30%] w-12 h-12 bg-teal-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.5}
        xAnimation={[0, 15, 0]}
        yAnimation={[0, -10, 0]}
        xDuration={6}
        yDuration={8}
      />
      <Blob 
        className="absolute top-[25%] right-[15%] w-14 h-14 bg-rose-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.7}
        xAnimation={[0, -8, 0]}
        yAnimation={[0, 8, 0]}
        xDuration={7}
        yDuration={9}
      />
      <Blob 
        className="absolute bottom-[35%] right-[10%] w-10 h-10 bg-violet-300/40 rounded-full mix-blend-soft-light filter blur-lg"
        initialDelay={1.9}
        xAnimation={[0, 10, 0]}
        yAnimation={[0, -12, 0]}
        xDuration={8}
        yDuration={7}
      />

      {/* Additional small blobs - Only show on larger screens for performance */}
      <div className="hidden md:block">
        <Blob 
          className="absolute top-[15%] left-[35%] w-8 h-8 bg-emerald-300/30 rounded-full mix-blend-soft-light filter blur-md"
          initialDelay={2.1}
          xAnimation={[0, 8, 0]}
          yAnimation={[0, -8, 0]}
          xDuration={7}
          yDuration={6}
        />
        <Blob 
          className="absolute top-[75%] left-[15%] w-6 h-6 bg-amber-300/30 rounded-full mix-blend-soft-light filter blur-md"
          initialDelay={2.3}
          xAnimation={[0, -6, 0]}
          yAnimation={[0, 6, 0]}
          xDuration={6}
          yDuration={8}
        />
        <Blob 
          className="absolute top-[40%] right-[35%] w-9 h-9 bg-sky-300/30 rounded-full mix-blend-soft-light filter blur-md"
          initialDelay={2.5}
          xAnimation={[0, 7, 0]}
          yAnimation={[0, -7, 0]}
          xDuration={8}
          yDuration={7}
        />
        <Blob 
          className="absolute bottom-[25%] left-[40%] w-7 h-7 bg-fuchsia-300/30 rounded-full mix-blend-soft-light filter blur-md"
          initialDelay={2.7}
          xAnimation={[0, -5, 0]}
          yAnimation={[0, 5, 0]}
          xDuration={7}
          yDuration={6}
        />
        <Blob 
          className="absolute top-[85%] right-[30%] w-5 h-5 bg-lime-300/30 rounded-full mix-blend-soft-light filter blur-md"
          initialDelay={2.9}
          xAnimation={[0, 4, 0]}
          yAnimation={[0, -4, 0]}
          xDuration={6}
          yDuration={7}
        />
      </div>
    </motion.div>
  );
}; 