import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showFadeUp, setShowFadeUp] = useState(false);
  const [showfadein, setShowfadein] = useState(false);
  const [showMotion, setMotion] = useState(false);
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowTypewriter(true);
      }, 100); // Start typewriter after 100ms
  
      const fadeUpTimer = setTimeout(() => {
        setShowFadeUp(true);
      }, 500); // Start fade-up after typewriter finishes
  
      const motionTimer = setTimeout(() => {
        setMotion(true);
      }, 100);

      const fadeInTimer = setTimeout(() => {
        setShowfadein(true);
      }, 100); // Fade-in comes last after all animations
  
      return () => {
        clearTimeout(timer);
        clearTimeout(fadeUpTimer);
        clearTimeout(fadeInTimer);
        clearTimeout(motionTimer);
      };
    }
  }, [isLoaded]);
  

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home 
          showTypewriter={showTypewriter} 
          showFadeUp={showFadeUp} 
           showfadein={showfadein} 
           showMotion ={showMotion}
        />
        
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
