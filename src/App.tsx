import { useEffect, useRef } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Quote from './sections/Quote';
import Research from './sections/Research';
import Publications from './sections/Publications';
import Books from './sections/Books';
import Conferences from './sections/Conferences';
import Engagements from './sections/Engagements';
import Contact from './sections/Contact';
import Navigation from './sections/Navigation';

function App() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll progress bar
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${pct}%`;
      }
    };
    window.addEventListener('scroll', updateProgress, { passive: true });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale, .stagger-children'
    ).forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', updateProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Scroll progress bar */}
      <div ref={progressRef} id="scroll-progress" style={{ width: '0%' }} />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative">
        <Hero />
        <About />
        <Quote />
        <Research />
        <Publications />
        <Books />
        <Conferences />
        <Engagements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
