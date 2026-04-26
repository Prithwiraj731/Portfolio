import { useEffect, useRef } from 'react';
import { ABOUT } from '../data/content';
import { Code2, Brain, Palette } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage2 from '../assets/hero2.png';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = { Code2, Brain, Palette };

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.about__image', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        opacity: 0, x: -50, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.about__content > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about__visual">
          <div className="about__image">
            <img src={heroImage2} alt="About visualization" style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'transparent' }} />
          </div>
          <div className="about__badge">{ABOUT.badge}</div>
        </div>

        <div className="about__content">
          <div className="about__label">{ABOUT.label}</div>
          <h2 className="about__title">{ABOUT.title}</h2>
          <p className="about__desc">{ABOUT.desc}</p>
          <div className="about__features">
            {ABOUT.features.map((f, i) => {
              const Icon = ICON_MAP[f.icon];
              return (
                <div className="about__feature" key={i}>
                  <div className="about__feature-icon">
                    {Icon && <Icon />}
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <a href="#services" className="btn btn--light" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Explore My Expertise
          </a>
        </div>
      </div>
    </section>
  );
}
