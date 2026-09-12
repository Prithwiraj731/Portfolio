import { useEffect, useRef } from 'react';
import { DIGITAL_PRESENCE } from '../data/content';
import githubAvatar from '../assets/social/github-avatar.png';
import linkedinAvatar from '../assets/social/linkedin-avatar.png';
import xAvatar from '../assets/social/x-avatar.png';
import emailAvatar from '../assets/social/email-avatar.png';

const AVATAR_MAP = {
  github: githubAvatar,
  linkedin: linkedinAvatar,
  twitter: xAvatar,
  email: emailAvatar,
};

// Clean platform monogram icons
const PlatformMonogram = ({ id, className }) => {
  switch (id) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className={className} aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'email':
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      );
    default:
      return null;
  }
};

const ExternalArrow = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const CtaArrow = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Reusable 3D Collectible Profile Identity Card
export function ProfileIdentityCard({
  platform,
  platformIcon,
  avatar,
  name,
  handle,
  description,
  status,
  cta,
  url,
  theme,
  isExternal = true,
  onMouseMove,
}) {
  const avatarSrc = AVATAR_MAP[platformIcon] || avatar;

  return (
    <a
      href={url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`collectible-card collectible-card--${platformIcon} reveal`}
      onMouseMove={onMouseMove}
      aria-label={`${platform}: ${name} - ${description}`}
      style={{
        '--card-accent': theme.accent,
        '--card-glow': theme.glow,
        '--card-border': theme.border,
      }}
    >
      {/* Soft dimensional background layer */}
      <div className="collectible-card__surface" aria-hidden="true" />
      <div className="collectible-card__spotlight" aria-hidden="true" />

      {/* Top Header: Platform + Status + External indicator */}
      <div className="collectible-card__top">
        <div className="collectible-card__platform-meta">
          <span className="collectible-card__platform-icon">
            <PlatformMonogram id={platformIcon} />
          </span>
          <span className="collectible-card__platform-name">{platform}</span>
        </div>

        <div className="collectible-card__top-right">
          {status && (
            <span className="collectible-card__status-pill">
              <span className="collectible-card__status-dot" />
              <span className="collectible-card__status-label">{status}</span>
            </span>
          )}
          <span className="collectible-card__out-indicator" aria-hidden="true">
            <ExternalArrow />
          </span>
        </div>
      </div>

      {/* Main: Primary 3D Avatar visual hero */}
      <div className="collectible-card__visual-stage">
        <div className="collectible-card__avatar-pod">
          <img
            src={avatarSrc}
            alt={`${name} - ${platform} 3D Avatar`}
            className="collectible-card__avatar-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom: Editorial Identity info + Compact Pill CTA */}
      <div className="collectible-card__bottom">
        <div className="collectible-card__meta">
          <h3 className="collectible-card__name">{name}</h3>
          <p className="collectible-card__desc">{description}</p>
        </div>

        <div className="collectible-card__actions">
          <span className="collectible-card__handle">{handle}</span>
          <span className="collectible-card__cta-pill">
            <span className="collectible-card__cta-text">{cta}</span>
            <span className="collectible-card__cta-arrow">
              <CtaArrow />
            </span>
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
        card.style.transitionDelay = `${(index % 2) * 0.1}s`;
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
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="presence" id="presence" ref={ref} aria-labelledby="presence-heading">
      <div className="container">
        {/* Section Header */}
        <div className="presence__header">
          <h2 className="presence__title" id="presence-heading">
            {DIGITAL_PRESENCE.title}
            <span className="title-dot">.</span>
          </h2>
          <p className="presence__subtitle">
            {DIGITAL_PRESENCE.subtitle}
          </p>
        </div>

        {/* 3D Collectible Cards Grid: GitHub, LinkedIn / X, Email */}
        <div className="presence__grid-collectibles">
          {DIGITAL_PRESENCE.profiles.map((profile) => (
            <ProfileIdentityCard
              key={profile.id}
              platform={profile.platform}
              platformIcon={profile.platformIcon}
              avatar={profile.avatar}
              name={profile.name}
              handle={profile.handle}
              description={profile.description}
              status={profile.status}
              cta={profile.cta}
              url={profile.url}
              theme={profile.theme}
              isExternal={profile.isExternal}
              onMouseMove={handleMouseMove}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
