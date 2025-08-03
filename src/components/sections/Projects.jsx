import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';
import spotifyImage from '../../assets/spotify-project.jpg';
import lostImage from '../../assets/lost-found-project.jpg';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-6 ${className}`}>
    <div className="max-w-3xl mx-auto px-4">
      {children}
    </div>
  </section>
);

// Senior-level animation variants for Projects section - optimized for scroll focus
const projectAnimations = {
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
  
  // Project card animations with 3D effects - no hover on cards
  projectCard: {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
      rotateX: -10,
      filter: "blur(4px)"
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Project title animations - no hover
  projectTitle: {
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
  
  // Category badge animations - keep hover for interactive badges
  categoryBadge: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 10
    },
    show: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    }
  },
  
  // Description text animations
  description: {
    hidden: { 
      opacity: 0, 
      y: 15,
      filter: "blur(1px)"
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
  
  // Tech stack animations with staggered reveals
  techStack: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  },
  
  // Individual tech tag animations - keep hover for interactive pills
  techTag: {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 10,
      rotateZ: -5
    },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateZ: 0,
      transition: {
        duration: 0.3,
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
  
  // Action buttons animations
  actionButtons: {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  },
  
  // Individual button animations - keep hover for interactive buttons
  actionButton: {
    hidden: { 
      opacity: 0, 
      x: -15,
      scale: 0.9
    },
    show: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
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
  }
};

// Animated header component
const AnimatedHeader = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={projectAnimations.header}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

// Animated project card component - no hover on cards
const AnimatedProjectCard = ({ project, index, children }) => (
  <motion.div
    className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
      project.isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
    }`}
    variants={projectAnimations.projectCard}
    custom={index}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    style={{
      willChange: "transform, opacity, filter",
      transform: "translateZ(0)",
      backfaceVisibility: "hidden"
    }}
  >
    {children}
  </motion.div>
);

export const Projects = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the container
  const containerY = useTransform(scrollY, [0, 1000], [0, -30]);

  const projects = [
    {
      title: "GSU Connect",
      description: "GSU Connect is a centralized platform that aggregates and displays news, events, and announcements from various Guimaras State University official sources. I created it to solve the recurring problem of fragmented communication, where important updates were scattered across multiple school portals",
      image: "",
      tech: [
        "React", "Vite", "Tailwind CSS", "Framer Motion", "React Query", "React Router", "Lucide/Heroicons", "Radix UI", "PostCSS",
        "Node.js", "Express", "Supabase", "Cheerio", "node-fetch", "axios",
        "GitHub",
        "TypeScript"
      ],
      github: "",
      demo: "https://kenkenlim07.github.io/gsu-connect/",
      category: "Full Stack"
    },
    {
      title: "Lost & Found Web",
      description: "A campus-focused platform that makes it easy for students to report lost belongings or share items they've found. By posting pictures, descriptions and item statuses, users help reconnect lost items with their rightful owners, fostering a more responsible and supportive school community.",
      image: lostImage,
      tech: ["React", "JavaScript", "CSS", "HTML", "GitHub Pages"],
      github: "https://github.com/kenkenlim07/lost-and-found",
      demo: "https://kenkenlim07.github.io/lost-and-found/#",
      category: "Web Development"
    },
    {
      title: "Spotify Data Mining",
      description: "Leveraged Orange data mining platform to analyze Spotify's music recommendation algorithms. Uncovered patterns in user behavior and music preferences, demonstrating how data can reveal insights into modern music consumption.",
      image: spotifyImage,
      tech: ["Python", "Orange", "Data Mining", "Spotify API"],
      github: "https://github.com/yourusername/spotify-mining",
      demo: "https://spotify-mining-demo.com",
      category: "Data Science"
    }
  ];

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        id="projects"
        variants={projectAnimations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
        style={{ y: containerY }}
      >
        <motion.div 
          className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
          isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
          style={{
            willChange: "transform, opacity, filter",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden"
          }}
        >
          <AnimatedHeader>
          <h2 className={`text-base font-semibold mb-1 ${
            isDarkMode ? 'text-dark-text' : 'text-neutral-900'
          }`}>Featured Projects</h2>
          <p className={`text-xs leading-relaxed mb-4 ${
            isDarkMode ? 'text-gray-300' : 'text-neutral-600'
          }`}>
            Here are some of the projects I've worked on.
          </p>
          </AnimatedHeader>

          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={index} project={{ isDarkMode }} index={index}>
                <div className="flex items-center justify-between mb-3">
                  <motion.h3 
                    className={`text-xs font-medium ${
                    isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                    }`}
                    variants={projectAnimations.projectTitle}
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)"
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.span 
                    className={`text-xs px-2 py-1 rounded-md border ${
                    isDarkMode 
                      ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                      : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                    }`}
                    variants={projectAnimations.categoryBadge}
                    whileHover="hover"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)"
                    }}
                  >
                    {project.category}
                  </motion.span>
                </div>

                <motion.p 
                  className={`text-xs leading-relaxed mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                  }`}
                  variants={projectAnimations.description}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-1.5 mb-4"
                  variants={projectAnimations.techStack}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                          : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      }`}
                      variants={projectAnimations.techTag}
                      custom={i}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        willChange: "transform",
                        transform: "translateZ(0)"
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex gap-3"
                  variants={projectAnimations.actionButtons}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border-2 text-xs font-medium ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-white hover:bg-neutral-100 text-black' 
                        : 'border-neutral-400 bg-neutral-900/90 hover:bg-neutral-800/90 text-white'
                    } transition-colors duration-200`}
                    variants={projectAnimations.actionButton}
                    custom={0}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)"
                    }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                    <motion.span 
                      className="ml-0.5"
                      animate={{
                        x: [0, 2, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border-2 text-xs font-medium ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-transparent hover:bg-neutral-900/40 text-white' 
                        : 'border-neutral-400 bg-white hover:bg-neutral-50 text-gray-900'
                    } transition-colors duration-200`}
                    variants={projectAnimations.actionButton}
                    custom={1}
                    whileHover="hover"
                    whileTap="tap"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)"
                    }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                    <motion.span 
                      className="ml-0.5"
                      animate={{
                        x: [0, 2, 0],
                        transition: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
              </motion.div>
              </AnimatedProjectCard>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};