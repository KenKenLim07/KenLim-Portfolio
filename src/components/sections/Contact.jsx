import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';

const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`py-8 ${className}`}>
    <div className="max-w-3xl mx-auto px-3">
      {children}
    </div>
  </section>
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

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
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
    <SectionWrapper id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-2"
      >
        <motion.div variants={fadeIn} className={`border border-neutral-400 rounded-xl p-2 transition-colors duration-300 ${
          isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Info */}
            <motion.div variants={fadeIn} className="space-y-2">
              <div className={`border border-neutral-400 rounded-lg p-3 transition-colors duration-300 ${
                isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
              }`}>
                <h3 className={`text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>Get in Touch</h3>
                <div className="space-y-2">
                  {/* Email */}
                  <motion.a
                    href={contactInfo[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn}
                    className={`flex items-center gap-2 text-sm ${
                      isDarkMode ? 'text-gray-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                    } transition-colors`}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
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
                      variants={fadeIn}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 hover:bg-neutral-900/40 text-gray-300' 
                          : 'border-neutral-400 hover:bg-neutral-50 text-neutral-700'
                      } transition-colors`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {contactInfo[1].icon}
                      <span className="text-xs font-medium">{contactInfo[1].title}</span>
                    </motion.a>

                    <motion.a
                      href={contactInfo[2].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={fadeIn}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 hover:bg-neutral-900/40 text-gray-300' 
                          : 'border-neutral-400 hover:bg-neutral-50 text-neutral-700'
                      } transition-colors`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {contactInfo[2].icon}
                      <span className="text-xs font-medium">{contactInfo[2].title}</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className={`p-3 transition-colors duration-300 ${
                isDarkMode ? 'text-dark-text' : 'text-neutral-900'
              }`}>
                <h3 className={`text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                }`}>QuickChat</h3>
                <p className={`text-xs leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeIn}>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label htmlFor="name" className={`block text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-700'
                  }`}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-1.5 rounded-lg border ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-dark-hover text-gray-300 placeholder-gray-500' 
                        : 'border-neutral-400 bg-white text-neutral-900 placeholder-neutral-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-700'
                  }`}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-1.5 rounded-lg border ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-dark-hover text-gray-300 placeholder-gray-500' 
                        : 'border-neutral-400 bg-white text-neutral-900 placeholder-neutral-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-xs font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-neutral-700'
                  }`}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className={`w-full px-3 py-1.5 rounded-lg border ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-dark-hover text-gray-300 placeholder-gray-500' 
                        : 'border-neutral-400 bg-white text-neutral-900 placeholder-neutral-500'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-xs p-2 rounded-lg ${
                      status.type === 'success' 
                        ? 'bg-neutral-50 text-neutral-900' 
                        : 'bg-neutral-50 text-neutral-900'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  className={`w-full px-3 py-1.5 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-white text-black border-neutral-200 hover:border-neutral-300' 
                      : 'bg-white text-gray-900 border-neutral-400 hover:border-neutral-500'
                  } text-sm font-medium transition-colors`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
