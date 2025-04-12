import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 max-w-xl mx-auto">
        <RevealOnScroll>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Jose Marie Lim
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            A driven tech enthusiast with a strong focus on coding, cybersecurity,
            operating system development, and web app development...
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-[#FBBF24] text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
