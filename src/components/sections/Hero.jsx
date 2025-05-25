import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // adjust based on navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center py-20">
      <motion.div
        className="text-center space-y-8 max-w-3xl mx-auto px-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-bold mb-3 text-gray-900 leading-tight text-2xl"
        >
          <span className="text-xl opacity-60">Hi, I'm </span>
          <span className="text-4xl">Jose Marie Lim</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed"
          variants={fadeInUp}
        >
          I like building things that matter. Not just code, but systems that push boundaries and challenge the status quo. 
          Currently diving deep into AI, web development, and cybersecurity.
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
          </motion.button>
        </motion.div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
          variants={fadeInUp}
        >
          <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-zinc-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
          <span className="text-xs text-zinc-500 mt-2">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
}; 