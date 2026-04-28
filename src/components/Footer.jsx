import { FOOTER } from '../data/content';

export default function Footer() {
  const socialLinks = [
    { 
      platform: 'Instagram', 
      href: 'https://www.instagram.com/prithwi_raj_mazumdar', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ) 
    },
    { 
      platform: 'GitHub', 
      href: 'https://github.com/Prithwiraj731', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ) 
    },
    { 
      platform: 'Fiverr', 
      href: 'https://www.fiverr.com/s/WE2DZgl', 
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M7.101 13.922c.556-1.557 1.601-2.462 3.132-2.715.032-.511.167-1.022.406-1.503.245-.494.56-.938.938-1.319.387-.393.842-.711 1.348-.938.513-.231 1.056-.35 1.611-.35.545 0 1.077.114 1.579.338.508.225.962.548 1.348.95.39.406.702.883.916 1.413.221.541.332 1.114.332 1.705 0 .579-.109 1.144-.323 1.674-.21-.527-.513-1.002-.897-1.404-.384-.399-.83-.717-1.328-.937-.505-.224-1.038-.337-1.583-.337s-1.082.113-1.588.337c-.503.223-.952.541-1.339.94-.383.396-.693.864-.916 1.388-.231.541-.347 1.117-.347 1.71s.116 1.168.347 1.709c.224.524.533.992.916 1.388.387.399.836.717 1.339.94.506.224 1.042.337 1.588.337s1.078-.113 1.583-.337c.498-.22.944-.538 1.328-.937.384-.402.687-.877.897-1.404.214.53.323 1.095.323 1.674 0 .591-.111 1.164-.332 1.705-.214.53-.526 1.007-.916 1.413-.386.402-.84.725-1.348.95-.502.224-1.034.338-1.579.338-.555 0-1.098-.119-1.611-.35-.506-.227-.961-.545-1.348-.938-.378-.381-.693-.825-.938-1.319a3.864 3.864 0 01-.406-1.503c-1.531-.253-2.576-1.158-3.132-2.715l-.014-.038zm5.823-1.28c.15-.363.361-.69.626-.964.266-.274.577-.492.923-.645.347-.154.717-.231 1.099-.231s.752.077 1.099.231c.346.153.657.371.923.645.265.274.476.601.626.964.156.377.234.773.234 1.176s-.078.799-.234 1.176c-.15.363-.361.69-.626.964-.266.274-.577.492-.923.645-.347.154-.717.231-1.099.231s-.752-.077-1.099-.231c-.346-.153-.657-.371-.923-.645-.265-.274-.476-.601-.626-.964a2.766 2.766 0 01-.234-1.176 2.766 2.766 0 01.234-1.176zM4.14 7.645v10.354h2.155v-4.14h3.693v-1.897H6.295V9.542h4.382V7.645H4.14z"/>
        </svg>
      ) 
    },
  ];

  const handleBottomLinkClick = (e, target) => {
    e.preventDefault();
    window.location.hash = target;
  };

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
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer__social-link" 
                  aria-label={link.platform}
                >
                  {link.icon}
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
            <a href="#privacy-policy" onClick={(e) => handleBottomLinkClick(e, 'privacy-policy')}>Privacy Policy</a>
            <a href="#terms-of-service" onClick={(e) => handleBottomLinkClick(e, 'terms-of-service')}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
