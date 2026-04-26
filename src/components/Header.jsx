import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/content';
import { Search } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setHeroVisible(window.scrollY < window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const cls = ['header'];
  if (scrolled) cls.push('scrolled');
  if (heroVisible && !scrolled) cls.push('hero-visible');

  return (
    <>
      <header className={cls.join(' ')} id="header">
        <div className="container">
          <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 22V10h3l5 8V10h3v12h-3l-5-8v8h-3z" fill="currentColor"/>
            </svg>
            Prithwiraj
          </a>

          <nav className="header__nav">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header__actions">
            <button className="header__cta" onClick={(e) => handleNavClick(e, '#contact')}>
              Let's Talk
            </button>
            <button
              className={`header__menu-btn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn--light" onClick={(e) => handleNavClick(e, '#contact')} style={{ marginTop: '1rem', fontSize: '1rem' }}>
          Let's Talk
        </a>
      </nav>
    </>
  );
}
