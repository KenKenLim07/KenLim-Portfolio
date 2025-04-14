import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Signature Branding */}
        <a
          href="#home"
          className="text-white font-mono text-2xl tracking-wide select-none"
        >
          <span className="text-cyan-400">ken</span>
          <span className="text-white">.</span>
          <span className="text-pink-400">lim</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {["home", "about", "projects", "contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              className="relative text-gray-300 hover:text-white transition-colors duration-300"
            >
              <span className="capitalize">{item}</span>
              <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Icon */}
        <button
  className="md:hidden text-gray-300 focus:outline-none text-xl"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  {menuOpen ? (
    <i className="fas fa-times"></i> // Close icon
  ) : (
    <i className="fas fa-bars"></i> // Hamburger icon
  )}
</button>

      </div>
    </nav>
  );
};
