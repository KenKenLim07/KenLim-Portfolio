import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-16 right-0 w-[10.5rem] h-[20rem] z-40 rounded-3xl
      bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-2 border-white/20 hover:border-yellow-500
      flex flex-col items-center justify-center
      transform transition-all duration-300 ease-in-out
      ${menuOpen ? "opacity-100 translate-x-0 pointer-events-auto visible animate-slideDown" : "opacity-0 translate-x-full pointer-events-none invisible"}`}
    >
      {/* Nav Links */}
      {["home", "about", "projects", "contact"].map((section, i) => (
        <a
          key={i}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-base sm:text-sm md:text-base font-medium text-white my-4 !bg-transparent
          transform transition-all duration-300 ease-in-out
          opacity-0 
          ${menuOpen ? "opacity-100 animate-slideDown" : ""} 
          hover:text-cyan-300 hover:tracking-wider`}
          style={{ animationDelay: `${i * 150}ms` }} // 🔥 Fix for dynamic delay
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
