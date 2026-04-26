import { useEffect, useRef } from 'react';
import { SERVICES } from '../data/content';
import { Monitor, Cpu, Smartphone, ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = { Monitor, Cpu, Smartphone };

export default function Services() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        opacity: 0, y: 40, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">MY EXPERTISE</h2>
          <div className="services__arrows">
            <button className="services__arrow" aria-label="Previous">
              <ArrowLeft />
            </button>
            <button className="services__arrow" aria-label="Next">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div className="service-card" key={i}>
                <div className="service-card__icon">
                  {Icon && <Icon />}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <div className="service-card__image">
                  <div style={{
                    width: '100%', height: '100%',
                    background: `linear-gradient(135deg, #0d0d0d 0%, ${['#1a1a2e','#162e1a','#2e1a1a'][i]} 100%)`,
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
