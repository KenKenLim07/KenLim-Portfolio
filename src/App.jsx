import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from "./components/ScrollToTop";
import { ViewportManager } from './components/ViewportManager';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import "./index.css";

function AppContent() {
  const { isDarkMode } = useTheme();
  
  return (
    <div 
      className="min-h-screen w-full transition-colors duration-300"
      style={{
        backgroundColor: isDarkMode ? '#0e0e0e' : '#ffffff',
        color: isDarkMode ? '#f1f1f1' : '#111827'
      }}
    >
      <ViewportManager />
      <div className="relative w-full">
        <Navbar />
        <main className="relative z-0 w-full">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
