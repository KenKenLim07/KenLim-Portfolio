import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    <div className="max-w-3xl mx-auto px-4 mt-15">
      {children}
    </div>
  </section>
);

// Senior-level animation variants for About section - optimized for scroll focus
const aboutAnimations = {
  // Container animations
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  
  // Card animations with sophisticated entrance - no hover
  card: {
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
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Text reveal animations
  textReveal: {
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
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Staggered text paragraphs
  paragraph: {
    hidden: { opacity: 0, y: 15 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  },
  
  // Education item animations - no hover
  educationItem: {
    hidden: { 
      opacity: 0, 
      x: -20,
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
  
  // Course tag animations - keep hover only for pills
  courseTag: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 10
    },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.05,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
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
  
  // Interest card animations - no hover on cards, only on pills
  interestCard: {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -15,
      scale: 0.9
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  }
};

// Animated text component for sophisticated text reveals
const AnimatedText = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    variants={aboutAnimations.textReveal}
    custom={delay}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

// Animated paragraph component
const AnimatedParagraph = ({ children, index = 0, className = "" }) => (
  <motion.p
    className={className}
    variants={aboutAnimations.paragraph}
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-30px" }}
  >
    {children}
  </motion.p>
);

export const About = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the container
  const containerY = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        id="about"
        variants={aboutAnimations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
        style={{ y: containerY }}
      >
        {/* About Me Section */}
        <motion.div 
          variants={aboutAnimations.card}
          className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
          style={{
            willChange: "transform, opacity, filter",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden"
          }}
        >
          <AnimatedText 
            className={`text-lg font-semibold mb-4 ${
              isDarkMode ? 'text-dark-text' : 'text-neutral-900'
            }`}
            delay={0.1}
          >
            About Me
          </AnimatedText>
          
          <div className={`space-y-4 text-sm leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            <AnimatedParagraph index={0}>
              As a 3rd year Computer Science student, I've found my passion at the crossroads of cybersecurity, web development, and artificial intelligence. What started as a simple "how does this even work?" moment turned into an ongoing obsession with breaking systems down and building them back smarter.
            </AnimatedParagraph>
            
            <AnimatedParagraph index={1}>
              I adapt fast. Whether I'm switching between debugging a web app, exploring AI models, or hunting down security flaws, I thrive in fast-paced, ever-changing environments. Throw me into something unfamiliar—I'll figure it out, tweak it, and probably optimize it just for fun.
            </AnimatedParagraph>

            <AnimatedParagraph index={2}>
              Outside the keyboard? I do calisthenics. You'll find me doing pull-ups between compile times and pushing to failure like I'm training for both the Olympics and a CTF challenge. It's like DevOps, but for your body: automate progress, monitor form, eliminate bugs (aka bad reps).
            </AnimatedParagraph>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          variants={aboutAnimations.card}
          className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
          style={{
            willChange: "transform, opacity, filter",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden"
          }}
        >
          <AnimatedText 
            className={`text-lg font-semibold mb-3 ${
              isDarkMode ? 'text-dark-text' : 'text-neutral-900'
            }`}
            delay={0.2}
          >
            Education
          </AnimatedText>
          
          <div className="space-y-3">
            <motion.div 
              className={`p-3 rounded-lg border ${
                isDarkMode 
                  ? 'border-neutral-600 bg-dark-hover text-dark-text' 
                  : 'border-neutral-400 bg-neutral-50 text-neutral-900'
              }`}
              variants={aboutAnimations.educationItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              style={{
                willChange: "transform",
                transform: "translateZ(0)"
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className={`text-sm font-medium ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>Bachelor of Science in Computer Science</h3>
                <motion.span 
                  className={`text-xs px-2 py-0.5 rounded-md border ${
                    isDarkMode 
                      ? 'border-neutral-600 bg-neutral-800/90 text-gray-300' 
                      : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                  }`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  2025
                </motion.span>
              </div>
              <p className={`text-xs ${
                isDarkMode ? 'text-gray-300' : 'text-neutral-600'
              }`}>Guimaras State University</p>
            </motion.div>

            <motion.div 
              className={`p-3 rounded-lg border ${
                isDarkMode 
                  ? 'border-neutral-600 bg-dark-hover text-dark-text' 
                  : 'border-neutral-400 bg-neutral-50 text-neutral-900'
              }`}
              variants={aboutAnimations.educationItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              style={{
                willChange: "transform",
                transform: "translateZ(0)"
              }}
            >
              <h3 className={`text-sm font-medium mb-2 ${
                isDarkMode ? 'text-dark-text' : 'text-neutral-900'
              }`}>Relevant Courses</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Data Structures and Algorithms",
                  "Object-Oriented Programming",
                  "Cybersecurity"
                ].map((course, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-0.5 rounded-md border ${
                      isDarkMode 
                        ? 'border-neutral-600 text-gray-300' 
                        : 'border-neutral-400 text-neutral-700'
                    }`}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interests Grid */}
        <motion.div 
          variants={aboutAnimations.card}
          className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
          style={{
            willChange: "transform, opacity, filter",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden"
          }}
        >
          <AnimatedText 
            className={`text-lg font-semibold mb-2 ${
              isDarkMode ? 'text-dark-text' : 'text-neutral-900'
            }`}
            delay={0.3}
          >
            Areas of Interest
          </AnimatedText>
          
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
                variants={aboutAnimations.interestCard}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden"
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
