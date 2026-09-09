
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Impact } from './components/Impact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light-bg bg-noise font-sans text-dark-text selection:bg-blue-accent/30 selection:text-blue-accent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
