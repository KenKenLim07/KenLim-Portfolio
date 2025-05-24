import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

export const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center py-20 relative bg-white">
      
      {/* Optional subtle animated background blob */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-full opacity-10 filter blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />

      <motion.div
        className="text-center space-y-8 max-w-3xl mx-auto px-4 z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-extrabold mb-3 text-gray-900 leading-tight text-3xl md:text-5xl tracking-tight"
        >
          <span className="text-xl opacity-60 tracking-wide">Hi, I'm </span>
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-md"
          >
            Jose Marie Lim
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto"
          variants={fadeInUp}
        >
          I like building things that matter. Not just code, but systems that push boundaries and challenge the status quo. 
          Currently diving deep into AI, web development, and cybersecurity.
        </motion.p>

        <motion.div 
          className="flex gap-6 justify-center"
          variants={fadeInUp}
        >
          <motion.a
            href="#projects"
            className="relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white font-semibold shadow-lg shadow-pink-400/30 transition-all duration-300 overflow-hidden group flex items-center gap-2"
            whileHover={{ scale: 1.07, boxShadow: "0 8px 15px rgba(237, 70, 140, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" 
              className="w-5 h-5 stroke-white"
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium transition-all duration-300 relative overflow-hidden group hover:bg-gray-900 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 select-none"
          variants={fadeInUp}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
            <motion.div
              className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="mt-2 text-sm font-light tracking-wide">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};
