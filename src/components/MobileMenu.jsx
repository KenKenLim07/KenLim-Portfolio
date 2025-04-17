import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-14.5 right-0 w-[15rem] h-[20rem] z-40 rounded-3xl
      bg-black bg-opacity-80 backdrop-blur-lg border-2 border-white transition-all duration-300 ease-in-out
      flex flex-col items-center justify-center shadow-lg
      ${menuOpen ? "opacity-100 translate-x-0 pointer-events-auto visible" : "opacity-0 translate-x-full pointer-events-none invisible"}`}
    >
      {["home", "about", "projects", "contact"].map((section, i) => (
        <a
          key={i}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`
            text-base font-semibold text-white my-2
            px-6 py-2 border-2 border-white rounded-xl transition-all duration-300 ease-in-out
            hover:bg-white hover:text-black hover:tracking-wider
            ${menuOpen ? "animate-slideDown" : ""}
          `}
          style={{
            animationDelay: `${i * 50}ms`,
            animationFillMode: "forwards",
            opacity: 0,
          }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
