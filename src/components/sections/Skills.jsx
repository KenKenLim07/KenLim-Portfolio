import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';

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

// Senior-level animation variants for Skills section - optimized for scroll focus
const skillsAnimations = {
  // Container animations with sophisticated entrance
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  },
  
  // Main card animations - no hover
  mainCard: {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      filter: "blur(4px)"
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Header animations
  header: {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(2px)"
    },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Toggle button animations - keep hover for interactive button
  toggleButton: {
    hidden: { 
      opacity: 0, 
      x: 20,
      scale: 0.9
    },
    show: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      x: 2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  },
  
  // Category card animations - no hover on cards
  categoryCard: {
    hidden: { 
      opacity: 0, 
      y: 25,
      scale: 0.95,
      rotateX: -5
    },
    show: (i) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  },
  
  // Category title animations - no hover
  categoryTitle: {
    hidden: { 
      opacity: 0, 
      x: -15,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Skills container animations
  skillsContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  },
  
  // Individual skill tag animations - keep hover for interactive pills
  skillTag: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 10,
      rotateZ: -3
    },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.02,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.08,
      rotateZ: 2,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  },
  
  // Newly revealed categories animations - no hover
  newCategory: {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
      rotateX: -10
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  }
};

// Animated header component
const AnimatedHeader = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={skillsAnimations.header}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

// Animated category card component - no hover on cards
const AnimatedCategoryCard = ({ category, index, isNew = false, children }) => (
  <motion.div
    className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
      category.isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
    }`}
    variants={isNew ? skillsAnimations.newCategory : skillsAnimations.categoryCard}
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}

  >
    {children}
  </motion.div>
);

export const Skills = () => {
  const { isDarkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const [shouldShowNew, setShouldShowNew] = useState(false);
  const containerRef = useRef(null);
  
  const alwaysVisible = skillCategories.slice(0, 3);
  const newlyRevealed = skillCategories.slice(3);

  const toggleShowAll = () => {
    if (!showAll) {
      setShowAll(true);
      setTimeout(() => {
        setShouldShowNew(true);
      }, 300);
    } else {
      setShowAll(false);
      setShouldShowNew(false);
    }
  };

  return (
    <section 
      ref={containerRef}
      id="skills"
      className="min-h-screen flex flex-col justify-center relative py-8"
    >
      <motion.div
        variants={skillsAnimations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 max-w-3xl mx-auto px-4"
      >
        <motion.div
          variants={skillsAnimations.mainCard}
          className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}

        >
          <div className="flex justify-between items-center mb-4">
            <AnimatedHeader>
              <h2 className={`text-base font-semibold mb-1 ${
                isDarkMode ? 'text-dark-text' : 'text-neutral-900'
              }`}>
                Tech Stack
              </h2>
              <p className={`text-xs leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-neutral-600'
              }`}>
                Technologies and tools I work with
              </p>
            </AnimatedHeader>
            
            <motion.button
              onClick={toggleShowAll}
              className={`text-xs font-medium px-3 py-1.5 rounded-md border ${
                isDarkMode 
                  ? 'border-neutral-600 bg-dark-hover text-gray-300 hover:text-white' 
                  : 'border-neutral-400 bg-neutral-50 text-neutral-700 hover:text-neutral-900'
              } transition-colors duration-200`}
              variants={skillsAnimations.toggleButton}
              whileHover="hover"
              whileTap="tap"

            >
              {showAll ? "Show Less" : "View All"}
            </motion.button>
          </div>

          <div className="space-y-4">
            {/* Always visible categories */}
            {alwaysVisible.map((category, index) => (
              <AnimatedCategoryCard key={category.title} category={{ isDarkMode }} index={index}>
                <motion.h3 
                  className={`text-xs font-semibold mb-3 ${
                    isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}
                  variants={skillsAnimations.categoryTitle}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)"
                  }}
                >
                  {category.title}
                </motion.h3>

                <motion.div 
                  className="flex flex-wrap gap-1.5"
                  variants={skillsAnimations.skillsContainer}
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      className={`text-xs px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                          : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      }`}
                      variants={skillsAnimations.skillTag}
                      custom={i}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        willChange: "transform",
                        transform: "translateZ(0)"
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
              </motion.div>
              </AnimatedCategoryCard>
            ))}
            
            {/* Newly revealed categories */}
            {showAll && shouldShowNew && newlyRevealed.map((category, index) => (
              <AnimatedCategoryCard 
                key={category.title}
                category={{ isDarkMode }} 
                index={index}
                isNew={true}
              >
                <motion.h3 
                  className={`text-xs font-semibold mb-3 ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                  }`}
                  variants={skillsAnimations.categoryTitle}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)"
                  }}
                >
                  {category.title}
                </motion.h3>

                <motion.div 
                  className="flex flex-wrap gap-1.5"
                  variants={skillsAnimations.skillsContainer}
                >
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      className={`text-xs px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                          : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      }`}
                      variants={skillsAnimations.skillTag}
                      custom={i}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        willChange: "transform",
                        transform: "translateZ(0)"
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
              </motion.div>
              </AnimatedCategoryCard>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
 