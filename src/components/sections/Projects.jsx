import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../animations/motionVariants';
import { useTheme } from '../../context/ThemeContext';
import BorderedSection from '../BorderedSection';
import spotifyImage from '../../assets/spotify-project.jpg';
import lostImage from '../../assets/lost-found-project.jpg';

const SectionWrapper = ({ children, className = "", id }) => (
  <section id={id} className={`py-6 ${className}`}>
    <div className="max-w-3xl mx-auto px-3">
      {children}
    </div>
  </section>
);

export const Projects = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: "GPPO Troop Deployment Tracker",
      summary: "Real-time troop tracking system built with React, Firebase, leaflet, openstreetmap, capacitor, and Capacitor background geolocation.",
      problem: "During my internship at the Provincial Police Office I noticed officers were struggling with Google Maps for troop deployment—it lacked customization and critical operational features needed for police operations.",
      challenge: "Overcoming Android's aggressive background process management, especially during battery saver mode, which would kill the APK and break real-time tracking.",
      solution: "Strategic use of Capacitor's background geolocation plugins, Firebase's persistent connections, and intelligent app lifecycle management.",
      impact: "The system is now used by the Provincial Police Office for troop deployment and tracking, providing officers with reliable real-time troop positioning and deployment coordination. It is also used by the Regional Police Office for troop deployment and tracking.",
      image: "",
      tech: [
        "React", "TypeScript", "Vite", "Tailwind CSS", 
        "React Router", "Leaflet", "Leaflet Marker Cluster",
        "Firebase", "Firestore", "Realtime Database", "Authentication", "Storage", "Analytics",
        "Capacitor", "Android", "Geolocation", "Background Geolocation",
        "Push Notifications", "Local Notifications", "OpenStreetMap"
      ],
      github: "",
      demo: "https://gppo-tracker.web.app/",
      category: "Mobile Web App"
    },
    {
      title: "GSU Connect",
      summary: "Centralized university news aggregator built with React, Node.js, and automated scraping via GitHub Actions.",
      problem: " I noticed that University information was scattered across different school portals, making it difficult for students to stay updated on important announcements.",
      challenge: "Ensuring data consistency and avoiding duplicate entries while scraping from multiple sources with different portal structures.",
      solution: "Intelligent deduplication logic, error handling for various portal formats, and robust GitHub Actions workflows with proper error recovery.",
      impact: "Automated data scraping runs every 2 hours, creating a seamless, always-updated platform that consolidates all university communications in one place. It is also used by the University of the Philippines Visayas for news aggregation.",
      image: "",
      tech: [
        "React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", 
        "React Query", "React Router", "Heroicons", "Radix UI",
        "Node.js", "Express", "Supabase", "PostgreSQL",
        "Cheerio", "Axios", "GitHub Actions", "Automated Scraping", "Data Deduplication"
      ],
      github: "",
      demo: "https://kenkenlim07.github.io/gsu-connect/",
      category: "Full Stack"
    },
    {
      title: "MKLA Store",
      summary: "Youth-friendly e-commerce platform with GCash integration and intuitive admin panel for young entrepreneurs.",
      problem: "My 13-year-old cousin wanted to start her own small business but needed a simple, secure e-commerce solution with payment processing.",
      challenge: "Making it simple enough for a teenager to use while including all essential e-commerce features and secure payment processing.",
      solution: "Intuitive admin interface design, secure GCash integration, and user-friendly inventory management system.",
      impact: "Modern, user-friendly store that empowers young entrepreneurs to start their business journey with complete CRUD operations and real-time inventory tracking.",
      image: "",
      tech: [
        "React", "TypeScript", "Vite", "Tailwind CSS", "Tailwind Animate",
        "React Router", "Heroicons", "Class Variance Authority", "CLSX", "Tailwind Merge",
        "Supabase", "PostgreSQL", "Row Level Security", "Authentication",
        "GCash Integration", "CRUD Operations", "Admin Panel", "E-commerce"
      ],
      github: "",
      demo: "https://mkla-store.vercel.app/",
      category: "E-commerce"
    },
    {
      title: "Lost & Found Web",
      summary: "Campus-focused platform for reporting lost belongings with image upload, search, and notification systems.",
      problem: "Students needed a centralized way to report lost items and find belongings on campus with proper privacy and transparency.",
      challenge: "Creating an intuitive image upload system, implementing effective search and filtering, and designing a notification system that balances privacy with transparency.",
      solution: "User-friendly interface with image management, search functionality, status tracking, and smart notification system.",
      impact: "Platform successfully connects lost items with their owners, becoming a valuable tool for the campus community.",
      image: lostImage,
      tech: ["React", "JavaScript", "CSS", "HTML", "GitHub Pages", "Image Upload", "Search & Filter", "User Notifications", "Responsive Design"],
      github: "https://github.com/kenkenlim07/lost-and-found",
      demo: "https://kenkenlim07.github.io/lost-and-found/#",
      category: "Web Development"
    },
    {
      title: "Spotify Data Mining",
      summary: "Data mining analysis of Spotify's recommendation algorithms using Orange platform to uncover user behavior patterns.",
      problem: "Understanding how Spotify's complex recommendation algorithms work and what patterns exist in user music consumption behavior.",
      challenge: "Working with large datasets and extracting meaningful insights from complex music recommendation algorithms with API limitations.",
      solution: "Learned Orange's data mining tools and developed analytical models to identify patterns in user behavior and music preferences.",
      impact: "Successfully uncovered patterns in user behavior and music preferences, demonstrating the power of data mining in understanding modern music consumption.",
      image: spotifyImage,
      tech: ["Python", "Orange", "Data Mining", "Spotify API", "Data Analysis", "Pattern Recognition", "Machine Learning"],
      github: "https://github.com/yourusername/spotify-mining",
      demo: "https://spotify-mining-demo.com",
      category: "Data Science"
    }
  ];

  return (
    <SectionWrapper id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-2"
      >
        {/* Featured Projects Section */}
        <motion.div variants={fadeIn}>
          <BorderedSection title="Featured Projects">
          <div className="grid grid-cols-1 gap-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                  className={`border border-neutral-400 rounded-xl p-4 transition-colors duration-300 ${
                  isDarkMode ? 'bg-dark-card text-dark-text' : 'bg-white text-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xs font-medium ${
                    isDarkMode ? 'text-dark-text' : 'text-neutral-900'
                  }`}>
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-md border ${
                    isDarkMode 
                      ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                      : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                  }`}>
                    {project.category}
                  </span>
                </div>

                  <p className={`text-xs leading-relaxed mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                }`}>
                  {project.summary}
                </p>

                  {project.problem && (
                    <div className="mb-2">
                      <h4 className={`text-xs font-medium mb-1 flex items-center gap-1.5 ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-600'
                      }`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Problem
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                      }`}>
                        {project.problem}
                </p>
                    </div>
                  )}

                  {project.challenge && (
                    <div className="mb-2">
                      <h4 className={`text-xs font-medium mb-1 flex items-center gap-1.5 ${
                        isDarkMode ? 'text-blue-300' : 'text-blue-600'
                      }`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Challenge & Solution
                      </h4>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                      }`}>
                        {project.challenge}
                      </p>
                      <p className={`text-xs leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                      }`}>
                        {project.solution}
                      </p>
                    </div>
                  )}

                  {project.impact && (
                    <div className="mb-2">
                      <h4 className={`text-xs font-medium mb-1 flex items-center gap-1.5 ${
                        isDarkMode ? 'text-green-300' : 'text-green-600'
                      }`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        Impact
                      </h4>
                      <p className={`text-xs leading-relaxed italic ${
                        isDarkMode ? 'text-gray-300' : 'text-neutral-600'
                      }`}>
                        {project.impact}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-md border ${
                        isDarkMode 
                          ? 'border-neutral-600 bg-dark-hover text-gray-300' 
                          : 'border-neutral-400 bg-neutral-50 text-neutral-700'
                      }`}
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
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-md border-2 text-xs ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-white hover:bg-neutral-100 text-black' 
                        : 'border-neutral-400 bg-[#0e0e0e]/90 hover:bg-[#0e0e0e]/90 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                    <span className="ml-0.5">→</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-2 py-1 rounded-md border-2 text-xs ${
                      isDarkMode 
                        ? 'border-neutral-600 bg-transparent hover:bg-neutral-900/40 text-white' 
                        : 'border-neutral-400 bg-white hover:bg-neutral-50 text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                    <span className="ml-0.5">→</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          </BorderedSection>
        </motion.div>

      </motion.div>
    </SectionWrapper>
  );
};