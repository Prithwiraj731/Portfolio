import { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GRADIENTS = [
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 50%, #2d1b69 100%)',
  'linear-gradient(135deg, #1b1b2f 0%, #162447 50%, #1f4068 100%)',
];

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) {
      const cards = ref.current.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__title">SELECTED WORK</h2>
          <p className="projects__subtitle">Featured projects showcasing my expertise across web, AI, and design.</p>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((project, i) => {
            const isLink = !!project.github;
            const CardTag = isLink ? 'a' : 'div';
            const linkProps = isLink ? { href: project.github, target: '_blank', rel: 'noreferrer' } : {};
            
            return (
              <CardTag 
                className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`} 
                key={i}
                style={isLink ? { display: 'block', textDecoration: 'none', color: 'inherit' } : {}}
                {...linkProps}
              >
                <div className="project-card__hud">
                  <span className="project-card__number">0{i + 1}</span>
                  <div className="project-card__bar" />
                </div>
                <div className="project-card__image">
                  {project.image ? (
                    <>
                      <img src={project.image} alt={project.title} />
                      <div className="project-card__image-overlay" />
                    </>
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: GRADIENTS[i % GRADIENTS.length] }} />
                  )}
                </div>
                <div className="project-card__overlay">
                  <div className="project-card__header-flex">
                    <div className="project-card__category">{project.category}</div>
                    <div className="project-card__specs">
                      <span className="spec">ID-731</span>
                      <span className="spec-line" />
                      <span className="spec">v1.0</span>
                    </div>
                  </div>
                  <h3 className="project-card__name">{project.title}</h3>
                  <div className="project-card__content-hidden">
                    <p className="project-card__desc">{project.desc}</p>
                    <div className="project-card__tags">
                      {project.tags.map((tag, j) => (
                        <span className="project-card__tag" key={j}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
