import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = ref.current;
        if (entry.isIntersecting && el) {
          // Add reveal animation
          el.classList.add("visible");

          // Re-trigger any child animations (like typewriter)
          const typewriter = el.querySelector(".typewriter");
          if (typewriter) {
            typewriter.classList.remove("typewriter");
            void typewriter.offsetWidth; // Force reflow
            typewriter.classList.add("typewriter");
          }
        } else {
          // Optionally remove classes if you want it to animate again
          ref.current?.classList.remove("visible");
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out reveal"
    >
      {children}
    </div>
  );
};
