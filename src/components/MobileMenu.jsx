import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-40 
      bg-[rgba(10,10,10,0.8)] backdrop-blur-lg 
      flex flex-col items-center justify-center
      transform transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto visible"
          : "opacity-0 -translate-y-10 pointer-events-none invisible"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Nav Links */}
      {["home", "about", "projects", "contact"].map((section, i) => (
        <a
          key={i}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 
          transform transition-all duration-300 ease-in-out
          hover:text-cyan-300 hover:tracking-wider
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
