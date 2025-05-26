import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    <div className="max-w-3xl mx-auto px-4 mt-15">
      {children}
    </div>
  </section>
);

export const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <SectionWrapper>
      <motion.div
        id="about"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        {/* About Me Section */}
        <motion.div 
          variants={fadeIn}
          className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
        >
          <h2 className={`text-lg font-semibold mb-4 ${
            isDarkMode ? 'text-dark-text' : 'text-neutral-900'
          }`}>About Me</h2>
          <div className={`space-y-4 text-sm leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            <p>
              As a 3rd year Computer Science student, I've found my passion at the crossroads of cybersecurity, web development, and artificial intelligence. What started as a simple "how does this even work?" moment turned into an ongoing obsession with breaking systems down and building them back smarter.
            </p>
            
            <p>
              I adapt fast. Whether I'm switching between debugging a web app, exploring AI models, or hunting down security flaws, I thrive in fast-paced, ever-changing environments. Throw me into something unfamiliar—I'll figure it out, tweak it, and probably optimize it just for fun.
            </p>

            <p>
              Outside the keyboard? I do calisthenics. You'll find me doing pull-ups between compile times and pushing to failure like I'm training for both the Olympics and a CTF challenge. It's like DevOps, but for your body: automate progress, monitor form, eliminate bugs (aka bad reps).
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          variants={fadeIn}
          className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
        >
          <h2 className={`text-lg font-semibold mb-3 ${
            isDarkMode ? 'text-dark-text' : 'text-neutral-900'
          }`}>Education</h2>
          <div className="space-y-3">
            <div className={`p-3 rounded-lg border ${
              isDarkMode 
                ? 'border-neutral-600 bg-dark-hover text-dark-text' 
                : 'border-neutral-400 bg-neutral-50 text-neutral-900'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <h3 className={`text-sm font-medium ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>Bachelor of Science in Computer Science</h3>
                <span className={`text-xs px-2 py-0.5 rounded-md border ${
                  isDarkMode 
                    ? 'border-neutral-600 bg-neutral-800/90 text-gray-300' 
                    : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                }`}>2025</span>
              </div>
              <p className={`text-xs ${
                isDarkMode ? 'text-gray-300' : 'text-neutral-600'
              }`}>Guimaras State University</p>
            </div>

            <div className={`p-3 rounded-lg border ${
              isDarkMode 
                ? 'border-neutral-600 bg-dark-hover text-dark-text' 
                : 'border-neutral-400 bg-neutral-50 text-neutral-900'
            }`}>
              <h3 className={`text-sm font-medium mb-2 ${
                isDarkMode ? 'text-dark-text' : 'text-neutral-900'
              }`}>Relevant Courses</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Data Structures and Algorithms",
                  "Object-Oriented Programming",
                  "Cybersecurity"
                ].map((course, index) => (
                  <span key={index} className={`text-xs px-2 py-0.5 rounded-md border ${
                    isDarkMode 
                      ? 'border-neutral-600 bg-neutral-800/90 text-gray-300' 
                      : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                  }`}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interests Grid */}
        <motion.div 
          variants={fadeIn}
          className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
        >
          <h2 className={`text-lg font-semibold mb-2 ${
            isDarkMode ? 'text-dark-text' : 'text-neutral-900'
          }`}>Areas of Interest</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: "Web Development", desc: "Building responsive and user-friendly web applications" },
              { title: "AI & ML", desc: "Exploring the frontiers of artificial intelligence" },
              { title: "Cybersecurity", desc: "Ensuring digital safety and security" },
              { title: "Open Source", desc: "Contributing to the global developer community" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`p-3 rounded-md border ${
                  isDarkMode 
                    ? 'border-neutral-600 bg-dark-hover text-dark-text' 
                    : 'border-neutral-400 bg-neutral-50 text-neutral-900'
                } transition-colors duration-300`}
                variants={fadeIn}
                animate={{
                  y: [0, -12, 0, -6, 0],
                  x: [0, 4, 0, -4, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.4,
                    times: [0, 0.25, 0.5, 0.75, 1]
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={`text-sm font-medium mb-0.5 ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>{item.title}</h3>
                <p className={`text-xs ${
                  isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                }`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
