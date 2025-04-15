import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ showTypewriter, showFadeUp, showfadein }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-black to-gray-800"
    >
      <div className="text-center z-10 px-4 max-w-xl mx-auto">
        <RevealOnScroll>
          <h1
            className={`text-4xl font-bold mb-3 text-white leading-tight transition-all duration-300 ease-in-out
              ${showTypewriter ? "typewriter" : ""}`}
          >
            Hi, I'm Jose Marie Lim
          </h1>

          <p className="text-gray-300 text-lg mb-8">
            A driven tech enthusiast with a strong focus on coding,
            cybersecurity, operating system development, and web app
            development. Currently pursuing a Computer Science degree, I'm
            dedicated to mastering the technical skills required to excel in the
            ever-evolving field of technology. Passionate about solving complex
            problems, optimizing systems, and building secure and efficient
            applications. Constantly pushing myself to innovate, learn, and
            grow.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-transparent text-white border-2 border-cyan-500 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-500/20 hover:shadow-lg rounded-4xl"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white border-2 border-yellow-400 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-400/20 hover:shadow-lg rounded-4xl"
            >
              Contact Me
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
