import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<WELCOME/>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-3xl md:text-5xl font-mono text-white tracking-wide text-center">
          {text}
          <span className="blink ml-1 text-blue-400">|</span>
        </div>

        <div className="w-64 h-1 bg-gray-700 rounded overflow-hidden">
          <div className="loading-bar h-full w-1/3 bg-blue-500 rounded"></div>
        </div>
      </div>
    </div>
  );
};
