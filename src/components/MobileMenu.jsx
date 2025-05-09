import { useEffect } from "react";
import { motion } from "framer-motion";
import { popIn, slideFromRight } from "../animations/motionVariants"; // Assuming you have this variant set up

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <motion.div
      variants={popIn} // Apply popIn animation for the menu container
      initial="hidden"
      animate={menuOpen ? "visible" : "hidden"}
      transition={{ type: "tween", duration: 0.4 }} // Smooth transition for the popIn effect
      className={`
        fixed top-14.5 right-0 w-[15rem] h-[20rem] z-40 rounded-4xl
        bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-4 border-white/70 hover:border-yellow-500
        flex flex-col items-center justify-center
        pointer-events-${menuOpen ? "auto" : "none"} 
      `}
    >
      {["home", "about", "projects", "contact"].map((section, i) => (
        <motion.a
          key={menuOpen ? `open-${i}` : `closed-${i}`} // Unique key based on menuOpen state
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          variants={{
            hidden: { opacity: 0, y: 50 },  // Start position (offscreen)
            visible: { opacity: 1, y: 0 },  // End position (onscreen)
          }}
          initial="hidden"
          animate={menuOpen ? "visible" : "hidden"}
          transition={{
            delay: 0.4 + i * 0.1, // Delay the pill animation further after popIn
            duration: 0.4,
          }}
          className="text-base sm:text-xs md:text-base font-small text-white my-2 !bg-transparent
            px-8 py-2 border border-cyan-600 rounded-2xl
            hover:text-cyan-300 hover:tracking-wider hover:border-cyan-300"
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </motion.a>
      ))}
    </motion.div>
  );
};
