import { useEffect, useRef } from 'react';
import { DIGITAL_PRESENCE } from '../data/content';

// Pixel-perfect branded inline vector icons
const PlatformIcon = ({ id, className }) => {
  switch (id) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className} aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      );
    default:
      return null;
  }
};

const ExternalIndicator = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

function SocialCard({ profile, onMouseMove }) {
  return (
    <a
      href={profile.url}
      target={profile.isExternal ? '_blank' : undefined}
      rel={profile.isExternal ? 'noopener noreferrer' : undefined}
      className={`presence-card presence-card--${profile.id} reveal`}
      onMouseMove={onMouseMove}
      aria-label={`${profile.platform}: ${profile.name} - ${profile.description}`}
      style={{
        '--card-accent': profile.accent,
        '--card-glow': profile.glowColor,
        '--card-border': profile.borderColor,
      }}
    >
      {/* Ambient Radial Hover Aura */}
      <div className="presence-card__glow" aria-hidden="true" />

      {/* Mouse Spotlight */}
      <div className="presence-card__spotlight" aria-hidden="true" />

      {/* Header Row: Platform Monogram + Tag + Out-Link Indicator */}
      <div className="presence-card__header">
        <div className="presence-card__platform-badge">
          <span className="presence-card__icon-box">
            <PlatformIcon id={profile.id} className="presence-card__icon" />
          </span>
          <span className="presence-card__tag">{profile.tag}</span>
        </div>

        <span className="presence-card__indicator">
          <ExternalIndicator />
        </span>
      </div>

      {/* Body: Identity Info & Description */}
      <div className="presence-card__body">
        <div className="presence-card__identity">
          <div className="presence-card__avatar-pill">
            <span className="presence-card__avatar-initials">
              {profile.id === 'email' ? 'PM' : profile.name.split(' ').map(n => n[0]).join('')}
            </span>
            <span className="presence-card__status-dot" />
          </div>
          <div>
            <h3 className="presence-card__name">{profile.name}</h3>
            <span className="presence-card__handle">{profile.handle}</span>
          </div>
        </div>

        <p className="presence-card__desc">{profile.description}</p>
      </div>

      {/* Hairline Divider */}
      <div className="presence-card__divider" aria-hidden="true" />

      {/* Footer Row: Contextual Indicator + CTA */}
      <div className="presence-card__footer">
        <span className="presence-card__context">{profile.contextLabel}</span>

        <div className="presence-card__cta">
          <span className="presence-card__cta-text">{profile.cta}</span>
          <span className="presence-card__cta-arrow">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function DigitalPresence() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      const cards = ref.current.querySelectorAll('.reveal');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${(index % 2) * 0.08}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="presence" id="presence" ref={ref} aria-labelledby="presence-heading">
      <div className="container">
        {/* Section Header */}
        <div className="presence__header">
          <div className="presence__badge">
            <span className="presence__badge-dot" />
            <span>{DIGITAL_PRESENCE.badge}</span>
          </div>
          <h2 className="presence__title" id="presence-heading">
            {DIGITAL_PRESENCE.title}
            <span className="title-dot">.</span>
          </h2>
          <p className="presence__subtitle">
            {DIGITAL_PRESENCE.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="presence__grid">
          {DIGITAL_PRESENCE.profiles.map((profile) => (
            <SocialCard
              key={profile.id}
              profile={profile}
              onMouseMove={handleMouseMove}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
