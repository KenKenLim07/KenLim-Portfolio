import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  zoomIn,
  slideFromRight,
} from "../animations/motionVariants";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1); // retrigger animation on mount and menuOpen
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Signature Branding */}
        <a
          href="#home"
          className="text-1xl tracking-wide select-none flex space-x-0"
        >
          <motion.span
            key={`ken-${animationKey}`}
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-cyan-400 inline-block"
          >
            ken
          </motion.span>

          <motion.span
            key={`dot-${animationKey}`}
            variants={zoomIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-white inline-block"
          >
            .
          </motion.span>

          <motion.span
            key={`lim-${animationKey}`}
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-pink-400 inline-block"
          >
            lim
          </motion.span>
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

        {/* Mobile Burger Icon */}
        <div
          className="md:hidden flex flex-col justify-center items-end w-8 h-6 gap-[5px] cursor-pointer z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`h-[4px] w-8 bg-yellow-500 rounded transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] 
              ${menuOpen ? "rotate-45 translate-y-[10px]" : ""}`}
          />
          <span
            className={`h-[3px] w-7 bg-yellow-500 rounded transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] 
              ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-yellow-500 rounded transition-all duration-300 ease-[cubic-bezier(0.77,0,0.175,1)] 
              ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </div>
      </div>
    </nav>
  );
};
