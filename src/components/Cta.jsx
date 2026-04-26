import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from('.cta__inner', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        opacity: 0, y: 50, scale: 0.98, duration: 0.8, ease: 'power3.out',
      });
      gsap.from('.cta__content > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
        opacity: 0, y: 20, duration: 0.6, stagger: 0.1, delay: 0.2, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="cta" id="contact" ref={ref}>
      <div className="container">
        <div className="cta__inner">
          <div className="cta__content">
            <h2 className="cta__title">LET'S BUILD THE FUTURE</h2>
            <p className="cta__desc">
              Looking for a dedicated developer to bring your vision to life? Let's collaborate on your next digital product or web application.
            </p>
            <a href="mailto:hello@example.com" className="btn btn--primary">
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
          <div className="cta__image">
            {/* Placeholder for futuristic image */}
            <div style={{
              width: '100%', height: '100%',
              background: 'linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <div style={{ width: '0', height: '0', borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid white', marginLeft: '4px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
