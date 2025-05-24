import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { ScrollToTop } from "./components/ScrollToTop";
import "./index.css";

function App() {
  return (
    <Layout>
      <main className="min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
        <About />
        </section>
        <section id="projects">
        <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
        <Contact />
        </section>
      </main>
      <ScrollToTop />
    </Layout>
  );
}

export default App;
