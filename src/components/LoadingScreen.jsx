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
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="text-5xl font-mono text-white tracking-widest">
          {text}
          <span className="animate-blink text-blue-400 ml-1">|</span>
        </div>

        <div className="w-64 h-1 bg-gray-700 rounded overflow-hidden">
          <div className="h-full w-1/3 bg-blue-500 animate-loading-bar rounded shadow-[0_0_10px_#3b82f6]"></div>
        </div>
      </div>
    </div>
  );
};
