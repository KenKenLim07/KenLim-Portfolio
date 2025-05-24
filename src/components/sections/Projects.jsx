import { motion } from 'framer-motion';
import spotifyImage from '../../assets/spotify-project.jpg';
import lostImage from '../../assets/lost-found-project.jpg';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Systems I've built and analyzed to understand the digital landscape better
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={fadeInUp}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};