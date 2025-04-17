import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-r from-black to-gray-800"
    >
      <RevealOnScroll>
        
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white text-center leading-tight transition-all duration-300 ease-in-out">
            Featured Projects
          </h2>

          
 <div className="p-6 rounded-xl border-2 border-white/20 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all bg-white-500/10 backdrop-blur-md">
 <h3 className="text-xl font-bold mb-2 text-white">
   🎧 Spotify Data Mining Case Study
 </h3>
 <p className="text-gray-300 mb-4 text-sm leading-relaxed">
   A data mining project where I analyzed students' Spotify listening habits
   and compared them to local and global charts. I visualized the data using
   <span className="text-orange-400 font-medium"> Orange Data Mining</span> and explored how music preferences could influence events in school and the famous Manggahan Festival in Guimaras through artist selection and merch sales.
 </p>

 <div className="flex flex-wrap gap-2 mb-4">
   {["Orange Data Mining", "Excel", "PowerPoint", "Google Forms"].map((tech, key) => (
     <span
       key={key}
       className="bg-blue-cyan/10 text-white border-2 border-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
     >
       {tech}
     </span>
   ))}
 </div>

 <div className="flex justify-between items-center">
   <a
     href="#"
     className="inline-block mt-2 text-cyan-400 hover:underline text-sm"
     target="_blank"
     rel="noopener noreferrer"
   >
     View Case Study (Coming Soon)
   </a>
 </div>
</div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* "Still working on it" Section */}
            <div
              className="p-6 rounded-xl border-2 border-white/20 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all col-span-2 text-center bg-white-500/10 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-2 text-white animate__animated animate__fadeIn">
                🛠️ Still Working on These... 🛠️
              </h3>
              <p className="text-gray-300 mb-4 text-lg animate__animated animate__bounceIn">
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
