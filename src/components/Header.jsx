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
            <img src="/PORTFOLIO_LOGO.png" alt="Prithwiraj Mazumdar" className="header__logo-img" />
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
