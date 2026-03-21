import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../config';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Research',     href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Engagements',  href: '#engagements' },
  { label: 'Contact',      href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll state + active section tracking
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Determine the active section
      const sectionIds = navLinks.map((l) => l.href.slice(1));
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F4F6F8]/92 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-[6vw] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#0B0D10] hover:text-[#C8332E] transition-colors"
          >
            {PERSONAL_INFO.name}
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1 text-[#0B0D10]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F4F6F8] flex flex-col items-center justify-center
          transition-all duration-500 md:hidden ${
            mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Close button top-right */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 p-2 text-[#0B0D10]"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>

        <nav className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-display text-[clamp(28px,8vw,48px)] font-semibold text-[#0B0D10] hover:text-[#C8332E] transition-colors"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                transitionDelay: mobileOpen ? `${i * 0.05}s` : '0s',
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p className="absolute bottom-8 font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#0B0D10]/40">
          {PERSONAL_INFO.name}
        </p>
      </div>
    </>
  );
};

export default Navigation;
