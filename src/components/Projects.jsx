import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/content';
import { 
  Terminal, ExternalLink
} from 'lucide-react';
import internshipCertificate from '../assets/Internship_Certificate.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const CertificateIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);



export default function Projects() {
  const ref = useRef(null);
  const [activeTabs, setActiveTabs] = useState({});
  const [certificateOpen, setCertificateOpen] = useState(false);

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
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

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
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const getActiveTab = (idx) => activeTabs[idx] || 'overview';
  const setTab = (idx, tab) => setActiveTabs(prev => ({ ...prev, [idx]: tab }));

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__title">
            FEATURED PROJECTS
            <span className="title-dot">.</span>
          </h2>
          <p className="projects__subtitle">Production-ready systems, tools, and platforms showing technical trade-offs, architecture decisions, and code principles.</p>
        </div>
        <div className="projects__grid-vertical">
          {PROJECTS.map((project, i) => {
            const currentTab = getActiveTab(i);
            return (
              <div 
                className="project-case-card reveal" 
                key={i}
                onMouseMove={handleMouseMove}
              >
                <div className="project-case-card__spotlight" />
                
                {/* Left Column - Specifications & Core Tech */}
                <div className="project-case-card__left">
                  <div className="project-case-card__visual">
                    <img src={project.image} alt={project.title} className="project-case-card__img" />
                    <div className="project-case-card__img-overlay" />
                    <div className="project-case-card__hud">
                      <span className="project-case-card__number">CASE-0{i + 1}</span>
                    </div>
                  </div>
                  
                  {project.architecture && (
                    <div className="project-case-card__blueprint">
                      <span className="blueprint-label">
                        <Terminal size={12} />
                        SYSTEM ARCHITECTURE
                      </span>
                      <pre className="blueprint-schema">{project.architecture}</pre>
                    </div>
                  )}

                  <div className="project-case-card__stack-groups">
                    {project.techStack.slice(0, 3).map((stack, sIdx) => (
                      <div key={sIdx} className="stack-group-inline">
                        <span className="stack-group-label">{stack.group}:</span>
                        <div className="stack-group-tags">
                          {stack.skills.map((skill, skIdx) => (
                            <span key={skIdx} className="stack-pill">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="project-case-card__links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link-btn">
                        <GithubIcon size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="project-link-btn project-link-btn--active">
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.links.certificate && (
                      <button 
                        onClick={() => setCertificateOpen(true)} 
                        className="project-link-btn"
                        style={{ cursor: 'pointer' }}
                      >
                        <CertificateIcon size={16} />
                        <span>Certificate</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column - Deep-Dive Tabs */}
                <div className="project-case-card__right">
                  <div className="project-case-card__header-flex">
                    <span className="project-case-card__category">{project.category}</span>
                    <span className={`project-case-card__status status--${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="project-case-card__name">{project.title}</h3>
                  <p className="project-case-card__summary">{project.summary}</p>
                  
                  {/* Tab Controls */}
                  <div className="project-tabs">
                    <button 
                      className={`project-tab-btn ${currentTab === 'overview' ? 'active' : ''}`}
                      onClick={() => setTab(i, 'overview')}
                    >
                      Overview
                    </button>
                    <button 
                      className={`project-tab-btn ${currentTab === 'engineering' ? 'active' : ''}`}
                      onClick={() => setTab(i, 'engineering')}
                    >
                      Engineering Details
                    </button>
                    <button 
                      className={`project-tab-btn ${currentTab === 'lessons' ? 'active' : ''}`}
                      onClick={() => setTab(i, 'lessons')}
                    >
                      Impact & Lessons
                    </button>
                  </div>

                  {/* Tab Panels */}
                  <div className="project-tab-content">
                    {currentTab === 'overview' && (
                      <div className="tab-pane fade-in">
                        <div className="pane-section">
                          <h4 className="pane-title">Why I Built This</h4>
                          <p className="pane-desc">{project.whyBuilt}</p>
                        </div>
                        <div className="pane-section">
                          <h4 className="pane-title">Core Highlights</h4>
                          <div className="pane-highlights">
                            {project.highlights.map((h, hIdx) => (
                              <span key={hIdx} className="highlight-pill">{h}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentTab === 'engineering' && (
                      <div className="tab-pane fade-in">
                        <div className="pane-section">
                          <h4 className="pane-title">Engineering Challenges</h4>
                          <ul className="pane-list">
                            {project.challenges.map((challenge, cIdx) => (
                              <li key={cIdx}>{challenge}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pane-section">
                          <h4 className="pane-title">Technical Decisions & Trade-offs</h4>
                          <div className="pane-decisions">
                            {project.decisions.map((decision, dIdx) => (
                              <div key={dIdx} className="decision-item">
                                <span className="decision-choice">{decision.choice}</span>
                                <p className="decision-reason">{decision.reason}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentTab === 'lessons' && (
                      <div className="tab-pane fade-in">
                        <div className="pane-section">
                          <h4 className="pane-title">Measurable Achievements</h4>
                          <ul className="pane-list pane-list--impact">
                            {project.impact.map((imp, impIdx) => (
                              <li key={impIdx}>{imp}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="pane-section">
                          <h4 className="pane-title">Lessons & Technical Retrospective</h4>
                          <p className="pane-desc italic-text">"{project.lessons}"</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Inline Certificate Modal */}
      {certificateOpen && (
        <div className="certificate-modal-overlay" onClick={() => setCertificateOpen(false)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={() => setCertificateOpen(false)}>
              &times;
            </button>
            <img src={internshipCertificate} alt="Internship Certificate" className="certificate-modal-img" />
          </div>
        </div>
      )}
    </section>
  );
}
