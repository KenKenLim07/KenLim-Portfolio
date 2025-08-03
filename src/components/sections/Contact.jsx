import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    <div className="max-w-3xl mx-auto px-4">
      {children}
    </div>
  </section>
);

// Senior-level animation variants for Contact section - consistent with other sections
const contactAnimations = {
  // Container animations - consistent with other sections
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
  
  // Main card animations - consistent with About/Projects/Skills pattern
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
  
  // Text reveal animations - consistent with other sections
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
  
  // Contact info section animations
  contactInfo: {
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
  
  // Form section animations
  formSection: {
    hidden: { 
      opacity: 0, 
      x: 20,
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
  
  // Contact link animations - keep hover for interactive links
  contactLink: {
    hidden: { 
      opacity: 0, 
      x: -10,
      scale: 0.95
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
      x: 4,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  },
  
  // Social link animations - keep hover for interactive buttons
  socialLink: {
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
        duration: 0.4,
        delay: i * 0.1,
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
  
  // Form field animations - consistent with other sections
  formField: {
    hidden: { 
      opacity: 0, 
      y: 15,
      scale: 0.98
    },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  },
  
  // Submit button animations - keep hover for interactive button
  submitButton: {
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
    },
    hover: {
      scale: 1.03,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.1
      }
    },
    loading: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  
  // Status message animations
  statusMessage: {
    hidden: { 
      opacity: 0, 
      y: 10,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }
};

// Animated text component - consistent with other sections
const AnimatedText = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    variants={contactAnimations.textReveal}
    custom={delay}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

export const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the container - consistent with other sections
  const containerY = useTransform(scrollY, [0, 1000], [0, -50]);

  const SERVICE_ID = "service_3gnzubf";
  const TEMPLATE_ID = "template_8xpd072";
  const PUBLIC_KEY = "ThYLaaQPCUATIOrgE";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      value: "Josemarielim7@gmail.com",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:Josemarielim7@gmail.com"
    },
    {
      title: "Facebook",
      value: "",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      link: "https://www.facebook.com/share/1XfJHYexw9/"
    },
    {
      title: "GitHub",
      value: "",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: "https://github.com/kenkenlim07"
    }
  ];

  return (
    <SectionWrapper>
      <motion.div
        ref={containerRef}
        id="contact"
        variants={contactAnimations.container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
        style={{ y: containerY }}
      >
        <motion.div 
          variants={contactAnimations.card}
          className={`border border-neutral-400 rounded-xl p-6 transition-colors duration-300 ${
            isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
          }`}
          style={{
            willChange: "transform, opacity, filter",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden"
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <motion.div 
              className="space-y-4"
              variants={contactAnimations.contactInfo}
            >
              <div className={`border border-neutral-400 rounded-lg p-4 transition-colors duration-300 ${
                isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
              }`}>
                <AnimatedText 
                  className={`text-sm font-medium mb-3 ${
                    isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                  }`}
                  delay={0.1}
                >
                  Get in Touch
                </AnimatedText>
                <div className="space-y-3">
                  {/* Email */}
                  <motion.a
                    href={contactInfo[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                    } transition-colors`}
                    variants={contactAnimations.contactLink}
                    custom={0}
                    whileHover="hover"
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)"
                    }}
                  >
                    {contactInfo[0].icon}
                    <span className={`text-xs ${
                      isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                    }`}>{contactInfo[0].value}</span>
                  </motion.a>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <motion.a
                      href={contactInfo[1].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 hover:bg-neutral-900/40 text-gray-300' 
                          : 'border-neutral-400 hover:bg-neutral-50 text-neutral-700'
                      } transition-colors duration-200`}
                      variants={contactAnimations.socialLink}
                      custom={0}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        willChange: "transform",
                        transform: "translateZ(0)"
                      }}
                    >
                      {contactInfo[1].icon}
                      <span className="text-xs font-medium">{contactInfo[1].title}</span>
                    </motion.a>

                    <motion.a
                      href={contactInfo[2].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 hover:bg-neutral-900/40 text-gray-300' 
                          : 'border-neutral-400 hover:bg-neutral-50 text-neutral-700'
                      } transition-colors duration-200`}
                      variants={contactAnimations.socialLink}
                      custom={1}
                      whileHover="hover"
                      whileTap="tap"
                      style={{
                        willChange: "transform",
                        transform: "translateZ(0)"
                      }}
                    >
                      {contactInfo[2].icon}
                      <span className="text-xs font-medium">{contactInfo[2].title}</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className={`p-4 transition-colors duration-300 ${
                isDarkMode ? 'text-dark-text' : 'text-neutral-900'
              }`}>
                <AnimatedText 
                  className={`text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                  }`}
                  delay={0.2}
                >
                  QuickChat
                </AnimatedText>
                <AnimatedText 
                  className={`text-xs leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                  }`}
                  delay={0.3}
                >
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </AnimatedText>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="space-y-4"
              variants={contactAnimations.formSection}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  variants={contactAnimations.formField}
                  custom={0}
                >
                  <label htmlFor="name" className={`block text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-700'
                  }`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-dark-hover text-gray-300 placeholder-gray-500' 
                        : 'border-neutral-400 bg-white text-neutral-900 placeholder-neutral-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div
                  variants={contactAnimations.formField}
                  custom={1}
                >
                  <label htmlFor="email" className={`block text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-700'
                  }`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-dark-hover text-gray-300 placeholder-gray-500' 
                        : 'border-neutral-400 bg-white text-neutral-900 placeholder-neutral-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Your email"
                    required
                  />
                </motion.div>
                
                <motion.div
                  variants={contactAnimations.formField}
                  custom={2}
                >
                  <label htmlFor="message" className={`block text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-700'
                  }`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-3 py-2 rounded-lg border ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-dark-hover text-gray-300 placeholder-gray-500' 
                        : 'border-neutral-400 bg-white text-neutral-900 placeholder-neutral-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
                    placeholder="Your message"
                    required
                  ></textarea>
                </motion.div>
                
                {status.message && (
                  <motion.div 
                    variants={contactAnimations.statusMessage}
                    className={`text-xs p-3 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
                
                <motion.button
                  type="submit"
                  className={`w-full px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-white text-black border-neutral-200 hover:border-neutral-300' 
                      : 'bg-neutral-900 text-white border-neutral-400 hover:border-neutral-500'
                  }`}
                  variants={contactAnimations.submitButton}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isSubmitting ? "loading" : ""}
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)"
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
