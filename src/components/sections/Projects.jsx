import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import spotifyImage from '../../assets/spotify-project.jpg';
import lostImage from '../../assets/lost-found-project.jpg';

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-8 ${className}`}>
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
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Featured Projects</h2>
          <p className="text-sm text-neutral-600 leading-relaxed mb-6">
            Here are some of the projects I've worked on.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="border border-neutral-400 rounded-xl bg-white p-6"
              >
                <div className="aspect-w-16 aspect-h-9 bg-neutral-50 rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-neutral-900">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-50 text-neutral-600">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-neutral-50 text-neutral-600"
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
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};