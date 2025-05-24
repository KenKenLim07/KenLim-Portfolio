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

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            About Me
          </motion.h2>

          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none"
            variants={fadeInUp}
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As a 3rd year Computer Science student, I've found my passion at the intersection of cybersecurity, web development, and artificial intelligence. My journey began with a simple curiosity about how things work, which quickly evolved into a deep dive into the world of technology.

What drives me is the constant pursuit of growth and knowledge. Whether it's analyzing the intricacies of the Pegasus spyware or building data mining tools for Spotify, I push myself to understand the underlying principles and create meaningful solutions.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              My journey isn't just about coding — it's about pushing boundaries. While I often work independently, I believe in the power of community and knowledge sharing. I actively participate in tech discussions, contribute to open-source projects, and mentor others who are starting their journey in tech.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 font-medium">
              "I believe in building, not blending in."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                BSc in Computer Science<br />
                Focus: Cybersecurity & AI<br />
                Expected Graduation: 2025
              </p>
            </motion.div>

           
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            variants={fadeInUp}
          >
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cybersecurity</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Deep dive into security systems</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Web Dev</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Building modern web experiences</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI/ML</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Exploring intelligent systems</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Calisthenics</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">Training mind and body</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
