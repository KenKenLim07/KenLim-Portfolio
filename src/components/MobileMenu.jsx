import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-14.5 right-0 w-[15rem] h-[20rem] z-40 rounded-4xl
      bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-2 border-white/20 hover:border-yellow-500
      flex flex-col items-center justify-center
      transform transition-all duration-300 ease-in-out
      ${menuOpen ? "opacity-100 translate-x-0 pointer-events-auto visible" : "opacity-0 translate-x-full pointer-events-none invisible"}`}
    >
      {["home", "about", "projects", "contact"].map((section, i) => (
        <a
          key={i}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`
            text-base sm:text-xs md:text-base font-small text-white my-2 !bg-transparent
            px-8 py-2 border border-cyan-600 rounded-2xl
            transform transition-all duration-300 ease-in-out
            hover:text-cyan-300 hover:tracking-wider hover:border-cyan-300s 
            ${menuOpen ? "animate-slideDown" : ""}
          `}
          style={{
            animationDelay: `${i * 50}ms`,
            animationFillMode: "forwards",
            opacity: 0, // Let animation reveal it
          }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};

