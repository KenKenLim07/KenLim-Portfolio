import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 max-w-xl mx-auto">
        <RevealOnScroll>
          <h1 className="text-5xl font-bold mb-8 text-white-500 text-center leading-tight will-change-transform">
            Hi, I'm Jose Marie Lim
          </h1>

          <p className="text-gray-400 text-lg mb-8">
          A driven tech enthusiast with a strong focus on coding, cybersecurity, operating system development, and web app development. Currently pursuing a Computer Science degree, I'm dedicated to mastering the technical skills required to excel in the ever-evolving field of technology. Passionate about solving complex problems, optimizing systems, and building secure and efficient applications. Constantly pushing myself to innovate, learn, and grow.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-cyan-400 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-yellow-500 text-black py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
