import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ showTypewriter, showFadeUp, showfadein,showMotion }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 overflow-hidden"
    >
      <div className="text-center z-10 px-4 max-w-xl mx-auto">
      {showMotion && (
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="font-bold mb-3 text-white leading-tight text-2xl"
  >
    <span className="text-xl opacity-50">Hi, I'm </span>
    <span className="text-6xl">Jose Marie Lim</span>
  </motion.h1>
)}


        <RevealOnScroll start={showTypewriter}>
          <p className="rounded-4xl p-4 border-4 border-white/70 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all mb-4 text-center">
            Driven tech enthusiast pursuing a Computer Science degree with a focus on coding, cybersecurity, OS development, and web apps. Passionate about solving complex problems, building secure systems, and constantly pushing boundaries to innovate and grow.
          </p>
        </RevealOnScroll>

        <RevealOnScroll start={showTypewriter}>
          <div className="flex flex-wrap justify-center space-x-2 text-sm mt-4 gap-3">
            <a
              href="#projects"
              className="whitespace-nowrap bg-transparent text-white border-2 border-yellow-400 py-2 px-5 rounded-4xl font-medium transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-300/20 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="whitespace-nowrap bg-transparent text-white border-2 border-cyan-400 py-2 px-5 rounded-4xl font-medium transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/20 hover:shadow-lg"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/14YnWNfobuUFlAlLK7O4cdCA5Sa9OZ-qU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap bg-transparent text-white border-2 border-pink-400 py-2 px-5 rounded-4xl font-medium transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-300/20 hover:shadow-lg"
            >
              Download CV
            </a>
          </div>
        </RevealOnScroll>

        
        
        
        
      </div>
    </section>
  );
};
