import { useEffect, useRef } from 'react';
import { SERVICES } from '../data/content';
import { 
  Monitor, Cpu, Smartphone, ArrowRight, ExternalLink, 
  ShieldCheck, Bot, Sparkles, CheckCircle2, Layers
} from 'lucide-react';
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
      gsap.from('.services__header-badge, .services__title, .services__subtitle', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        opacity: 0, y: 30, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      });

      gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services__grid', start: 'top 80%', once: true },
        opacity: 0, y: 35, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      });

      gsap.from('.services__agency-banner', {
        scrollTrigger: { trigger: '.services__agency-banner', start: 'top 85%', once: true },
        opacity: 0, y: 40, scale: 0.98, duration: 0.8, ease: 'power3.out',
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="services__header">
          <div className="services__header-badge">
            <span className="services__badge-dot" />
            <span>Client Solutions & Freelance</span>
          </div>
          <h2 className="services__title">MY SERVICES & CAPABILITIES</h2>
          <p className="services__subtitle">
            I engineer high-performance web systems, scalable backend architectures, and intelligent digital experiences tailored for clients, high-growth startups, and clinics.
          </p>
        </div>

        {/* Existing 3 Core Service Categories */}
        <div className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div className="service-card" key={i}>
                <div className="service-card__icon-wrapper">
                  <div className="service-card__icon">
                    {Icon && <Icon size={24} />}
                  </div>
                  <span className="service-card__index">0{i + 1}</span>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <div className="service-card__footer">
                  <span className="service-card__tag">Production Ready</span>
                  <span className="service-card__line" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated ZEROPOINT Agency & Freelancing Showcase Banner */}
        <div className="services__agency-banner">
          <div className="agency-banner__glow" />
          <div className="agency-banner__content">
            <div className="agency-banner__badge">
              <Sparkles size={14} className="agency-banner__badge-icon" />
              <span>ZEROPOINT Digital Agency</span>
              <span className="agency-banner__status-pill">Live Platform</span>
            </div>

            <h3 className="agency-banner__title">
              Looking for End-to-End Agency & Turnkey Solutions?
            </h3>
            
            <p className="agency-banner__desc">
              Through my dedicated client services platform <strong>ZEROPOINT</strong>, I provide complete turnkey web development, bank-grade <em>Site Shield</em> security hardening, and autonomous AI voice receptionist workflows built specifically to elevate your practice and brand.
            </p>

            {/* Capability Pills */}
            <div className="agency-banner__perks">
              <div className="agency-banner__perk">
                <ShieldCheck size={16} className="perk-icon perk-icon--emerald" />
                <span>Bank-Grade Security Hardening</span>
              </div>
              <div className="agency-banner__perk">
                <Bot size={16} className="perk-icon perk-icon--gold" />
                <span>AI Voice & WhatsApp Booking Agents</span>
              </div>
              <div className="agency-banner__perk">
                <Layers size={16} className="perk-icon perk-icon--blue" />
                <span>Custom React & WordPress Platforms</span>
              </div>
              <div className="agency-banner__perk">
                <CheckCircle2 size={16} className="perk-icon perk-icon--accent" />
                <span>1-on-1 Consultation & Delivery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="agency-banner__actions">
              <a 
                href="https://zeropoint-security.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="discover-services-btn"
                id="discover-services-btn"
              >
                <span>Discover My Services</span>
                <ArrowRight size={18} className="discover-services-btn__arrow" />
                <ExternalLink size={14} className="discover-services-btn__ext" />
              </a>

              <a 
                href="#contact" 
                className="btn btn--outline-light agency-banner__contact-btn"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Direct Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
