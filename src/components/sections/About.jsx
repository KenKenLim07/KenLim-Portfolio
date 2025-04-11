import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"];
  const backendSkills = ["Firebase", "Node.js", "Python", "C++", "Java", "REST APIs"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Summary */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 hover:shadow-[0_2px_8px_rgba(251,146,60,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-400/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20 hover:shadow-[0_2px_8px_rgba(250,204,21,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - GUIMARAS University (2022-2026)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cyber Security.
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">

                {/* INSPIRO */}
                <div>
                  <h4 className="font-semibold">
                    Customer Service – INSPIRO (2024)
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Handled customer inquiries via phone, email, and chat support.</li>
                    <li>Resolved technical and account-related issues efficiently.</li>
                    <li>Maintained accurate records and provided product/service information.</li>
                  </ul>
                </div>

                {/* TRANSFER IT */}
                <div>
                  <h4 className="font-semibold">
                    Custom Printing Associate – TRANSFER IT (Jan 2022 – Aug 2023)
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Operated and maintained printing equipment for custom designs.</li>
                    <li>Assisted customers with product selection and order fulfillment.</li>
                    <li>Ensured quality control and timely production of orders.</li>
                  </ul>
                </div>

                {/* GOTAN'S FOOD CORP */}
                <div>
                  <h4 className="font-semibold">
                    Service Crew – GOTAN'S FOOD CORP (Dec 2018 – Apr 2019)
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provided customer service and assisted with order handling.</li>
                    <li>Managed transactions and maintained store cleanliness.</li>
                    <li>Helped in food preparation and quality control.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
