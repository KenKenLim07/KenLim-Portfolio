import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "Svelte"];
  const backendSkills = ["Firebase", "Node.js", "Python", "C++", "Java", "REST APIs"];

  const workExperience = [
    {
      company: "INSPIRO",
      position: "Customer Service",
      year: "2024",
      responsibilities: [
        "Handled customer inquiries via phone, email, and chat support.",
        "Resolved technical and account-related issues efficiently.",
        "Maintained accurate records and provided product/service information.",
      ],
    },
    {
      company: "TRANSFER IT",
      position: "Custom Printing Associate",
      year: "Jan 2022 – Aug 2023",
      responsibilities: [
        "Operated and maintained printing equipment for custom designs.",
        "Assisted customers with product selection and order fulfillment.",
        "Ensured quality control and timely production of orders.",
      ],
    },
    {
      company: "GOTAN'S FOOD CORP",
      position: "Service Crew",
      year: "Dec 2018 – Apr 2019",
      responsibilities: [
        "Provided customer service and assisted with order handling.",
        "Managed transactions and maintained store cleanliness.",
        "Helped in food preparation and quality control.",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-black to-gray-800">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-8 text-white text-center leading-tight transition-all duration-300 ease-in-out">
            About Me
          </h2>

          {/* Summary */}
          <div className="rounded-xl p-8 border-2 border-white/20 hover:border-cyan-500 hover:translate-y-1 transition-all mb-8 text-center bg-white-500/10 backdrop-blur-md">
            <p className="text-gray-300 mb-6">
              I’m someone who thrives on challenges because I believe they drive growth. With a strong passion for
              cybersecurity and web development, I focus on creating innovative, secure, and scalable solutions. I’m driven
              by a constant desire to improve and push my limits, whether it's in coding, problem-solving, or mastering new
              tools. My ability to connect concepts to real-world applications fuels my work, and I’m always looking to expand
              my expertise, particularly in ethical hacking and penetration testing.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-2 border-transparent hover:border-cyan-500">
                <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                <div className="flex justify-center flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-transparent text-white border-2 border-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:text-black transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border-2 border-transparent hover:border-cyan-500">
                <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                <div className="flex justify-center flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-transparent text-white border-2 border-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:text-black transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="p-6 rounded-xl border-2 border-white/20 hover:border-cyan-500 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - GUIMARAS University (2022-2026)
                </li>
                <li>Relevant Coursework: Data Structures, Web Development, Cyber Security.</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border-2 border-white/20 hover:border-cyan-500 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                {workExperience.map((experience, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-white">{experience.position} – {experience.company} ({experience.year})</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {experience.responsibilities.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
