import { useEffect, useRef } from 'react';
import { HERO } from '../data/content';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import heroImage from '../assets/hero1.png';

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('.hero__label', 
          { opacity: 0, y: 30, filter: 'blur(10px)' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.3 }
        )
        .fromTo('.hero__title .line', 
          { y: '110%', opacity: 0, rotationX: -45, transformOrigin: '0% 50% -50' }, 
          { y: '0%', opacity: 1, rotationX: 0, duration: 1, stagger: 0.15 }, 
          '-=0.5'
        )
        .fromTo('.hero__subtitle', 
          { opacity: 0, y: 20, filter: 'blur(5px)' }, 
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, 
          '-=0.6'
        )
        .fromTo('.hero__buttons .btn', 
          { opacity: 0, y: 15, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 }, 
          '-=0.5'
        )
        .fromTo('.hero__stat', 
          { opacity: 0, x: -20 }, 
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1 }, 
          '-=0.5'
        )
        .fromTo('.hero__visual', 
          { opacity: 0, scale: 0.9, filter: 'blur(20px)' }, 
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 }, 
          '-=1'
        )
        .fromTo('.hero__floating-card', 
          { opacity: 0, y: 40, scale: 0.8 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.5)' }, 
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="container">
        <div className="hero__content" ref={contentRef}>
          <div className="hero__label">
            <span></span>
            {HERO.label}
          </div>
          <h1 className="hero__title" ref={titleRef}>
            {HERO.title.map((line, i) => (
              <span className="line" key={i}>{line}</span>
            ))}
          </h1>
          <p className="hero__subtitle">{HERO.subtitle}</p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View My Work <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
              Download Resume
            </a>
          </div>
          <div className="hero__stats">
            {HERO.stats.map((stat, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="hero__stat-divider" />}
                <div className="hero__stat">
                  <div className="hero__stat-number">{stat.number}</div>
                  <div className="hero__stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-wrapper">
            <img src={heroImage} alt="Hero representation" style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'transparent' }} />
          </div>
          <div className="hero__floating-card hero__floating-card--top">
            <div className="number">100</div>
            <div style={{ fontSize: '.7rem', color: '#666' }}>Lighthouse<br/>Score</div>
          </div>
          <div className="hero__floating-card hero__floating-card--bottom">
            <div style={{ fontSize: '.7rem', color: '#999', fontFamily: 'var(--font-mono)' }}>Clean Code</div>
            <div className="number">100%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
