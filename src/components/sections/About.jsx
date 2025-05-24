import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    <div className="max-w-3xl mx-auto px-4 mt-15">
      {children}
    </div>
  </section>
);

export const About = () => {
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
          className="border border-neutral-400 rounded-xl bg-white p-6"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">About Me</h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            I'm a passionate software engineer with a strong foundation in web development and a keen interest in emerging technologies. My journey in tech has been driven by a constant desire to learn and create meaningful solutions.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          variants={fadeIn}
          className="border border-neutral-400 rounded-xl bg-white p-6"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-neutral-900">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-neutral-600">Guimaras State University • 2025</p>
              <p className="text-sm text-neutral-600">First Class Honors</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-900">Relevant Courses</h3>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>Data Structures and Algorithms</li>
                <li>Object-Oriented Programming</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Interests Grid */}
        <motion.div 
          variants={fadeIn}
          className="border border-neutral-400 rounded-xl bg-white p-6"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Areas of Interest</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Web Development", desc: "Building responsive and user-friendly web applications" },
              { title: "AI & ML", desc: "Exploring the frontiers of artificial intelligence" },
              { title: "Cybersecurity", desc: "Ensuring digital safety and security" },
              { title: "Open Source", desc: "Contributing to the global developer community" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-4 bg-neutral-50 rounded-lg"
                variants={fadeIn}
                whileHover={{ y: -2 }}
              >
                <h3 className="text-sm font-medium text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
