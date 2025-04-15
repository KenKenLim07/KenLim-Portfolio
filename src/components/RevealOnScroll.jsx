import { useEffect, useRef, useState } from "react";

export const RevealOnScroll = ({ children, animationClass = "translate-y-8" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          setIsVisible(true);
          observer.unobserve(ref.current); // only run once
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
      className={`opacity-0 transition-all duration-700 ease-out transform ${
        isVisible ? `opacity-100 ${animationClass}` : ""
      }`}
    >
      {children}
    </div>
  );
};
