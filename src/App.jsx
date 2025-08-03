import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import "./index.css";

// Lazy load sections below the fold for better performance
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })));
const Skills = lazy(() => import('./components/sections/Skills').then(module => ({ default: module.Skills })));
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })));

// Subtle loading component - only shows briefly if needed
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16 opacity-60">
    <div className="animate-pulse text-sm text-gray-500 dark:text-gray-400">
      Loading...
    </div>
  </div>
);

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
      <div className="relative w-full">
        <Navbar />
        <main className="relative z-0 w-full">
          {/* Hero section loads immediately - no loading spinner */}
          <Hero />
          
          {/* Lazy load sections below the fold with single Suspense wrapper */}
          <Suspense fallback={<SectionLoader />}>
          <About />
          <Projects />
          <Skills />
          <Contact />
          </Suspense>
        </main>
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
