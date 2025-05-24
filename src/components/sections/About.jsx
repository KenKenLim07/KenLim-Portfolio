import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const educationItem = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const timelineDot = {
  initial: { scale: 0 },
  animate: { 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

const contentReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            variants={slideUp} 
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Me
        </h2>
            <p className="mt-4 text-lg text-gray-700">
              A passionate developer focused on creating meaningful solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={slideUp}
          >
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
            >
              {[
                "I'm a developer who believes in the power of technology to solve real-world problems. My journey in tech has been driven by curiosity and a desire to create solutions that make a difference.",
                "With a strong foundation in web development and a growing interest in AI and cybersecurity, I'm constantly exploring new technologies and methodologies to enhance my skills.",
                "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community."
              ].map((text, index) => (
                <motion.p 
                  key={index}
                  className="text-gray-700 leading-relaxed"
                  variants={fadeIn}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              {[
                { title: "Web Development", desc: "Building responsive and user-friendly web applications" },
                { title: "AI & ML", desc: "Exploring the frontiers of artificial intelligence" },
                { title: "Cybersecurity", desc: "Ensuring digital safety and security" },
                { title: "Open Source", desc: "Contributing to the global developer community" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-gray-50 rounded-2xl"
                  variants={fadeIn}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            className="mt-20 max-w-3xl mx-auto"
            variants={slideUp}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
              Education
            </h3>
            
            <div className="space-y-8">
              {[
                {
                  degree: "Bachelor of Science in Computer Science",
                  year: "2018 - 2022",
                  school: "University of Technology",
                  details: "First Class Honors • Software Engineering"
                },
                {
                  degree: "Professional Certifications",
                  items: [
                    {
                      title: "AWS Certified Developer",
                      org: "Amazon Web Services",
                      year: "2023"
                    },
                    {
                      title: "Google Cloud Professional",
                      org: "Google Cloud Platform",
                      year: "2022"
                    },
                    {
                      title: "Certified Ethical Hacker",
                      org: "EC-Council",
                      year: "2021"
                    }
                  ]
                }
              ].map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-200"
                  variants={fadeIn}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-900" />
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {edu.degree}
                    </h4>
                    {edu.year && (
                      <p className="text-sm text-gray-500">
                        {edu.year}
                      </p>
                    )}
                    {edu.school && (
                      <p className="text-gray-600">
                        {edu.school}
                      </p>
                    )}
                    {edu.details && (
                      <p className="text-gray-700 mt-2">
                        {edu.details}
                      </p>
                    )}
                    {edu.items && (
                      <div className="space-y-4 mt-4">
                        {edu.items.map((item, idx) => (
                          <motion.div 
                            key={idx}
                            className="flex items-center justify-between"
                            variants={fadeIn}
                            whileHover={{ x: 5 }}
                          >
                            <div>
                              <p className="text-gray-900">{item.title}</p>
                              <p className="text-sm text-gray-500">{item.org}</p>
                            </div>
                            <span className="text-sm text-gray-500">{item.year}</span>
                          </motion.div>
                  ))}
                </div>
                    )}
              </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
