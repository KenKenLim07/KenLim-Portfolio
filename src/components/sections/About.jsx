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
          <h2 className="text-lg font-semibold text-neutral-900 mb-4">About Me</h2>
          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
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
