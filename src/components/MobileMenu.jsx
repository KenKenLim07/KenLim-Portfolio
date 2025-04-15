import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-17 right-0 w-50 h-100 z-40 rounded-4xl
      bg-[rgba(10,10,10,0.8)] backdrop-blur-lg 
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
        className={`text-xl font-medium text-white my-4 !bg-transparent
        transform transition-all duration-300 ease-in-out
        opacity-0 
        ${menuOpen ? `opacity-100 animate-fadeSlideUp delay-${i * 100}` : ""} 
        hover:text-cyan-300 hover:tracking-wider`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
      
      
      ))}
    </div>
  );
};
