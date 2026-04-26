import { useEffect, useRef } from 'react';
import { SKILLS_DATA } from '../data/content';
import { 
  Terminal, Code2, BrainCircuit, ShieldAlert, 
  Server, Palette, Wrench, Workflow, 
  Rocket, Lightbulb, CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Terminal, Code2, BrainCircuit, ShieldAlert,
  Server, Palette, Wrench, Workflow,
  Rocket, Lightbulb
};

export default function Skills() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Use IntersectionObserver for a robust reveal without GSAP getting stuck
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) {
      const cards = ref.current.querySelectorAll('.skill-card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${(index % 3) * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
  };

  return (
    <section className="skills" id="expertise" ref={ref}>
      <div className="container">
        <div className="skills__header">
          <h2 className="skills__title">FULL EXPERTISE</h2>
          <p className="skills__subtitle">A comprehensive breakdown of my technical arsenal, from front-end pixels to back-end logic, AI, and cybersecurity.</p>
        </div>

        <div className="skills__grid">
          {SKILLS_DATA.map((category, i) => {
            const Icon = ICON_MAP[category.icon];

            return (
              <div 
                className="skill-card reveal" 
                key={category.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="skill-card__spotlight" />
                <div className="skill-card__header">
                  <div className="skill-card__icon-wrapper">
                    {Icon && <Icon className="skill-card__icon" />}
                  </div>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>
                
                <ul className="skill-card__list">
                  {category.skills.map((skill, j) => (
                    <li key={j} className="skill-card__item">
                      <CheckCircle2 className="skill-card__bullet" size={16} />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="skill-card__glow" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
