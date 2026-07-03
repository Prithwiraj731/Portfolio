import { useEffect, useRef } from 'react';
import { 
  ENGINEERING_FOCUS, 
  TECH_STACK, 
  ENGINEERING_PRINCIPLES, 
  CURRENT_EXPLORATION 
} from '../data/content';
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) {
      const reveals = ref.current.querySelectorAll('.reveal');
      reveals.forEach((el, index) => {
        el.style.transitionDelay = `${(index % 4) * 0.05}s`;
        observer.observe(el);
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
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
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
          <h2 className="skills__title">ENGINEERING PROFILE</h2>
          <p className="skills__subtitle">A refined overview of my technical direction, engineering focus areas, core stack, and operational philosophy.</p>
        </div>

        {/* 1. Engineering Focus */}
        <div className="skills__focus-grid">
          {ENGINEERING_FOCUS.map((focus) => {
            const Icon = ICON_MAP[focus.icon];

            return (
              <div 
                className="focus-card reveal" 
                key={focus.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="focus-card__spotlight" />
                <div className="focus-card__header">
                  <div className="focus-card__icon-wrapper">
                    {Icon && <Icon className="focus-card__icon" />}
                  </div>
                  <h3 className="focus-card__title">{focus.title}</h3>
                </div>
                
                <p className="focus-card__desc">{focus.desc}</p>
                
                <div className="focus-card__tech">
                  {focus.tech.map((t, idx) => (
                    <span key={idx} className="focus-card__tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="focus-card__glow" />
              </div>
            );
          })}
        </div>

        {/* 2. Technical Stack */}
        <div className="skills__stack">
          <h3 className="skills__section-label">Technical Stack</h3>
          <div className="stack-grid">
            {TECH_STACK.map((group, idx) => (
              <div key={idx} className="stack-group reveal">
                <h4 className="stack-group__category">{group.category}</h4>
                <div className="stack-group__tags">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="stack-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Engineering Principles */}
        <div className="skills__principles">
          <h3 className="skills__section-label">Engineering Principles</h3>
          <div className="principles-grid">
            {ENGINEERING_PRINCIPLES.map((principle) => (
              <div key={principle.id} className="principle-card reveal">
                <span className="principle-card__number">{principle.id}</span>
                <p className="principle-card__text">{principle.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Currently Exploring */}
        <div className="skills__exploring">
          <h3 className="skills__section-label">Currently Exploring</h3>
          <div className="exploring-tags">
            {CURRENT_EXPLORATION.map((topic, idx) => (
              <span key={idx} className="exploring-tag reveal">
                <span className="exploring-tag__dot" />
                {topic}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

