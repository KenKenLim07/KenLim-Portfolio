import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    <div className="max-w-3xl mx-auto px-4">
      {children}
    </div>
  </section>
);

export const Contact = () => {
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

  return (
    <SectionWrapper>
      <motion.div
      id="contact"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        <motion.div variants={fadeIn} className="border border-neutral-400 rounded-xl bg-white p-6">
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Let's Connect</h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Contact Info */}
            <motion.div variants={fadeIn} className="space-y-4">
              <div className="border border-neutral-400 rounded-xl bg-white p-4">
                <h3 className="text-sm font-medium text-neutral-900 mb-3">Get in Touch</h3>
                <div className="space-y-3">
                  <motion.a
                    href="mailto:josemarielim7@gmail.com"
                    className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    josemarielim7@gmail.com
                  </motion.a>
                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-4 h-4 text-neutral-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeIn}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-neutral-900 block mb-1">
                    Name
                  </label>
              <input
                type="text"
                id="name"
                name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-400 rounded-lg bg-white text-neutral-900 focus:outline-none focus:border-neutral-500 transition-colors duration-200"
                required
                    disabled={isSubmitting}
              />
            </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium text-neutral-900 block mb-1">
                    Email
                  </label>
              <input
                type="email"
                id="email"
                name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-400 rounded-lg bg-white text-neutral-900 focus:outline-none focus:border-neutral-500 transition-colors duration-200"
                required
                    disabled={isSubmitting}
              />
            </div>
                <div>
                  <label htmlFor="message" className="text-xs font-medium text-neutral-900 block mb-1">
                    Message
                  </label>
              <textarea
                id="message"
                name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-neutral-400 rounded-lg bg-white text-neutral-900 focus:outline-none focus:border-neutral-500 transition-colors duration-200"
                required
                    disabled={isSubmitting}
              />
            </div>
                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm p-3 rounded-lg ${
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
                  className="w-full px-4 py-2 text-sm border border-neutral-400 rounded-lg bg-white text-neutral-900 hover:bg-neutral-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
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
