import { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.testimonials__header > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        opacity: 0, y: 30, filter: 'blur(10px)', duration: 1, stagger: 0.15, ease: 'power4.out',
      });
      gsap.from('.testimonial-wrapper', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        opacity: 0, y: 40, rotationX: 10, transformOrigin: '50% 100%', duration: 1, stagger: 0.15, ease: 'power4.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">CLIENT<br/>ENDORSEMENTS</h2>
          <p className="testimonials__desc">
            What clients and collaborators say about working with me on digital products.
          </p>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testimonial-wrapper" key={i} style={{ perspective: '1000px' }}>
              <div className="testimonial-card">
                <div className="testimonial-card__header">
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      {t.avatar ? (
                        <img src={t.avatar} alt={t.name} />
                      ) : (
                        <div style={{
                          width: '100%', height: '100%',
                          background: `hsl(${i * 120}, 30%, 25%)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 700
                        }}>
                          {t.name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="testimonial-card__name">{t.name}</div>
                      <div className="testimonial-card__role">{t.role}</div>
                    </div>
                  </div>
                  <div className="testimonial-card__stars">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} />
                    ))}
                  </div>
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
