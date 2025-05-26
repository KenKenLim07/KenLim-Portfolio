import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import "./index.css";

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-neutral-900' : 'bg-neutral-50'}`}>
      <div className="relative">
        <Navbar />
        <main className="relative z-0">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
