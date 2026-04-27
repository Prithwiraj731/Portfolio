import { FOOTER } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img src="/PORTFOLIO_LOGO.png" alt="Logo" className="header__logo-img" style={{ height: '32px' }} />
            </a>
            <p className="footer__brand-desc">{FOOTER.brand}</p>
            <div className="footer__social">
              {['Twitter', 'GitHub', 'LinkedIn'].map((platform, i) => (
                <a key={i} href="#" className="footer__social-link" aria-label={platform}>
                  {/* Generic social icon placeholder */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <line x1="1.05" y1="12" x2="7" y2="12"></line>
                    <line x1="17" y1="12" x2="22.95" y2="12"></line>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {FOOTER.columns.map((col, i) => (
            <div className="footer__column" key={i}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            &copy; {new Date().getFullYear()} Prithwiraj. All rights reserved.
          </div>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
