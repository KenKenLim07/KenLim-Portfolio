import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ showTypewriter, showFadeUp, showfadein }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-gray-800 overflow-hidden"
    >
      <div className="text-center z-10 px-4 max-w-xl mx-auto">
        <RevealOnScroll>
        <h1
  className={`font-bold mb-3 text-white leading-tight transition-all duration-300 ease-in-out text-2xl ${
    showTypewriter ? "typewriter" : ""
  }`}
>
  <span className="text-xl opacity-50">Hi, I'm </span>
  
  <span className="text-4xl ">Jose Marie Lim</span>
</h1>


          <p className="rounded-xl p-4 border- border-white/20 hover:border-cyan-500 hover:-translate-y-1 transition-all mb-8 text-center" >
          Driven tech enthusiast pursuing a Computer Science degree with a focus on coding, cybersecurity, OS development, and web apps. Passionate about solving complex problems, building secure systems, and constantly pushing boundaries to innovate and grow.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
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
