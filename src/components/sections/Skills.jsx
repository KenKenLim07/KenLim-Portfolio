import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
    <div className="max-w-5xl mx-auto px-4">
      {children}
    </div>
  </section>
);

const skillCategories = [
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Vite", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" }
    ]
  },
  {
    title: "Cybersecurity",
    icon: "🔒",
    skills: [
      { name: "Network Security", level: "Intermediate" },
      { name: "Ethical Hacking", level: "Intermediate" },
      { name: "Penetration Testing", level: "Intermediate" },
      { name: "Security Analysis", level: "Intermediate" }
    ]
  },
  {
    title: "AI/ML",
    icon: "🤖",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Data Mining", level: "Intermediate" },
      { name: "Machine Learning", level: "Beginner" },
      { name: "Data Analysis", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Beginner" },
      { name: "Linux", level: "Intermediate" },
      { name: "Technical Writing", level: "Advanced" }
    ]
  }
];

export const Skills = () => {
  return (
    <SectionWrapper>
      <motion.div
        id="skills"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 scroll-mt-[80px]"
      >
        <motion.div
          variants={fadeIn}
          className="border border-neutral-300 rounded-xl bg-white p-6"
        >
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">
            Skills & Expertise
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="border border-neutral-300 rounded-xl bg-white p-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-sm font-semibold text-neutral-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2 mt-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex justify-between items-center"
                      variants={fadeIn}
                    >
                      <span className="text-xs text-neutral-700 truncate">
                        {skill.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                        {skill.level}
                      </span>
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
