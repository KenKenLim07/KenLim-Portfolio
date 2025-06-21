import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-6 ${className}`}>
    <div className="max-w-3xl mx-auto px-4">
      {children}
    </div>
  </section>
);

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Python",
      "Firebase",
      "Supabase",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    title: "Cybersecurity",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Security Analysis"
    ]
  },
  {
    title: "AI/ML",
    skills: [
      "Python",
      "Data Mining",
      "Machine Learning",
      "Data Analysis"
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "Technical Writing"
    ]
  }
];

export const Skills = () => {
  const { isDarkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [shouldShowNew, setShouldShowNew] = useState(false);
  const sectionRef = useRef(null);
  const alwaysVisible = skillCategories.slice(0, 3);
  const newlyRevealed = skillCategories.slice(3);

  const toggleShowAll = () => {
    if (!showAll && sectionRef.current) {
      setShouldShowNew(false);
      setShowAll(true);
      // Check if the bottom of the section is in the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.bottom <= window.innerHeight;
      if (inView) {
        setShouldShowNew(true);
      } else {
        setTimeout(() => {
          sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            setShouldShowNew(true);
          }, 400); // Wait for scroll to finish, then show new categories
        }, 200); // Wait for render
      }
    } else {
      setShowAll(false);
      setShouldShowNew(false);
    }
  };

  return (
    <SectionWrapper>
      <motion.div
        ref={sectionRef}
        id="skills"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 scroll-mt-[80px]"
      >
        <motion.div
          variants={fadeIn}
          className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
        >
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className={`text-base font-semibold mb-1 ${
                isDarkMode ? 'text-dark-text' : 'text-neutral-900'
              }`}>
                Tech Stack
              </h2>
              <p className={`text-xs leading-relaxed mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-neutral-600'
              }`}>
                Technologies and tools I work with
              </p>
            </div>
            <motion.button
              onClick={toggleShowAll}
              className={`text-xs font-medium ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-900 hover:text-neutral-700'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "View All"}
            </motion.button>
          </div>

          <div className="space-y-3">
            {/* Always visible categories */}
            {alwaysVisible.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className={`text-xs font-semibold mb-2 ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className={`text-xs px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                          : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
            {/* Newly revealed categories, only render after scroll, animate 1 by 1 */}
            {showAll && shouldShowNew && newlyRevealed.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className={`text-xs font-semibold mb-2 ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className={`text-xs px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                          : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
 