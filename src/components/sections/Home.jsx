import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ showTypewriter }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="text-center z-10 px-4 max-w-xl mx-auto space-y-6">
        <RevealOnScroll>
          <h1
            className={`font-bold text-3xl tracking-wide ${
              showTypewriter ? "typewriter" : ""
            }`}
          >
            Hi, I'm Jose Marie Lim
          </h1>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className="border-2 border-white rounded-xl px-6 py-5 text-sm md:text-base font-medium">
            A driven tech enthusiast with a strong focus on coding, cybersecurity, operating system development, and web app development. Currently pursuing a Computer Science degree, I'm dedicated to mastering the technical skills required to excel in the ever-evolving field of technology. Passionate about solving complex problems, optimizing systems, and building secure and efficient applications. Constantly pushing myself to innovate, learn, and grow.
          </p>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-2 border-2 border-white rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-2 border-2 border-white rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/14YnWNfobuUFlAlLK7O4cdCA5Sa9OZ-qU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-white rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
