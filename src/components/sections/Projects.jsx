import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white-500 text-center leading-tight will-change-transform">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Removed the empty div for the Cloud Platform project */}

            {/* Add a funny "I'm still working on it" section */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all col-span-2 text-center"
            >
              <h3 className="text-xl font-bold mb-2 animate__animated animate__fadeIn">
                🛠️ Still Working on These... 🛠️
              </h3>
              <p className="text-gray-400 mb-4 text-lg animate__animated animate__bounceIn">
                I promise they’ll be up and running soon... 🤡🔫💀
                <br />
                For now, enjoy the suspense and expect some chaos along the way!
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
