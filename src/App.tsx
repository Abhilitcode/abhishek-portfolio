import BackgroundGlow from '@/components/layout/BackgroundGlow';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Achievements from '@/components/sections/Achievements';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
