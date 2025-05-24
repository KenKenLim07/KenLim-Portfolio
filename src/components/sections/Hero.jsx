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
  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20">
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
    className="font-bold mb-3 text-black dark:text-white leading-tight text-2xl"
  >
    <span className="text-1xl opacity-50">Hi, I'm </span>
    <span className="text-5xl">Jose Marie Lim</span>
  </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-black dark:text-white leading-relaxed"
          variants={fadeInUp}
        >
          I like building things that matter. Not just code, but systems that push boundaries and challenge the status quo. 
          Currently diving deep into AI, web development, and cybersecurity.
        </motion.p>

        <motion.div 
          className="flex gap-4 justify-center"
          variants={fadeInUp}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:shadow-lg transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={fadeInUp}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
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
        </motion.div>
      </motion.div>
    </section>
  );
}; 