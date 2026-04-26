import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const fraction = scrolled / max;
        scrollProgress.style.transform = `scaleX(${fraction})`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="scroll-progress" className="scroll-progress" style={{ transform: 'scaleX(0)' }}></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
