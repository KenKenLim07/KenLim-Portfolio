import { useEffect, useState } from "react";

// LoadingScreen.jsx
export const LoadingScreen = ({ onComplete }) => {
  const fullText = "Loading...";

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {/* Fade-in text */}
        <div className="text-3xl md:text-5xl font-mono text-white tracking-wide text-center transition-all duration-300 ease-in-out">
          {fullText.split("").map((char, index) => (
            <span
              key={index}
              style={{
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
                animation: "fadeIn 1s forwards",
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-700 rounded overflow-hidden">
          <div className="animate-loading-bar h-full w-1/2 bg-cyan-500 rounded transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};
