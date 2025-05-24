import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillCategories = [
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Vite", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" }
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
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Skills & Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Technologies and tools I work with
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={fadeInUp}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                variants={fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div 
                      key={i} 
                      className="flex justify-between items-center"
                      variants={fadeInUp}
                    >
                      <span className="text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 