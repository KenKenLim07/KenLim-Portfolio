import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ showTypewriter, showFadeUp, showfadein }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-black to-gray-800"
    >
      <div className="text-center z-10 px-8 max-w-xl mx-auto">
        <RevealOnScroll>
          <h1
            className={`text-center font-bold mb-3 text-white leading-tight transition-all duration-300 ease-in-out
              ${showTypewriter ? "typewriter" : ""}`}
          >
            Hi, I'm Jose Marie Lim
          </h1>

          <p className="rounded-xl p-8 border-2 border-white/20 hover:border-cyan-500 hover:-translate-y-1 transition-all mb-8 text-center bg-white-500/10 backdrop-blur-md text-sm sm:text-base">

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
          <div className=" justify-center space-x-2 text-sm scale-80 mt-5 ">
            <a
              href="#projects"
              className="whitespace-nowrap bg-transparent text-white border-2 border-yellow-400 py-3 px-6 sm:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:bg-yellow-300/20 hover:shadow-lg rounded-4xl text-sm"
              >
              View Projects
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap bg-transparent text-white border-2 border-cyan-400 py-3 px-6 sm:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-300/20 hover:shadow-lg rounded-4xl text-sm"
              >
              Contact Me
            </a>
            
            <a
            href="https://drive.google.com/file/d/14YnWNfobuUFlAlLK7O4cdCA5Sa9OZ-qU/view?usp=sharing/JOSE MARIE LIM.pdf"
               className="whitespace-nowrap bg-transparent text-white border-2 border-pink-400 py-3 px-6 sm:px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-300/20 hover:shadow-lg rounded-4xl text-sm "
            >
              Download CV
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
