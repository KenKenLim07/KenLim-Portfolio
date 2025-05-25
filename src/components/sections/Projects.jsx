import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import spotifyImage from '../../assets/spotify-project.jpg';
import lostImage from '../../assets/lost-found-project.jpg';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-6 ${className}`}>
    <div className="max-w-3xl mx-auto px-4">
      {children}
    </div>
  </section>
);

const projects = [
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
  },
];

export const Projects = () => {
  return (
    <SectionWrapper>
      <motion.div
      id="projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4"
      >
        <motion.div variants={fadeIn} className="border border-neutral-400 rounded-xl bg-white p-6">
          <h2 className="text-base font-semibold text-neutral-900 mb-1">Featured Projects</h2>
          <p className="text-xs text-neutral-600 leading-relaxed mb-4">
            Here are some of the projects I've worked on.
            </p>

          <div className="grid grid-cols-1 gap-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="border border-neutral-400 rounded-xl bg-white p-6 hover:border-neutral-500 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                >
                <div className="aspect-w-16 aspect-h-9 bg-neutral-50 rounded-md mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-medium text-neutral-900">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-md border border-neutral-400 bg-white text-neutral-700 hover:border-neutral-500 hover:bg-neutral-50 transition-all duration-300">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md border border-neutral-400 bg-white text-neutral-700 hover:border-neutral-500 hover:bg-neutral-50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-2 rounded-lg bg-neutral-900/90 text-white hover:bg-neutral-800/90 transition-all duration-300 flex items-center gap-2 group shadow-sm"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-2 rounded-lg bg-blue-600/90 text-white hover:bg-blue-700/90 transition-all duration-300 flex items-center gap-2 group shadow-sm"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span className="font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};