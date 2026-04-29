import { useEffect, useRef, useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: 'New Portfolio Inquiry',
      };

      await emailjs.send(
        'service_f3t36p7',
        'template_gl70psu',
        templateParams,
        'uXmJwmkMkhhqzjk4O'
      );

      setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again or use WhatsApp.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="cta" id="contact" ref={ref}>
      <div className="container">
        <div className="cta__inner">
          <div className="cta__content">
            <h2 className="cta__title">GET IN TOUCH</h2>
            <p className="cta__desc">
              Whether you have a project in mind or just want to say hi, my inbox is always open. I'll get back to you as soon as I can!
            </p>
            
            <form className="cta__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Tell me what you need..." 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="cta__buttons">
                <button 
                  type="submit" 
                  className="btn btn--outline-light" 
                  disabled={isSending}
                  style={{ opacity: isSending ? 0.7 : 1, display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  {isSending ? 'Sending...' : 'Send Message'} <Send size={16} />
                </button>
                <a 
                  href="https://wa.me/919832992240" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--outline-light"
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  WhatsApp <MessageCircle size={16} />
                </a>
              </div>

              {status.message && (
                <div style={{ 
                  marginTop: '1.5rem', 
                  padding: '1rem', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem',
                  background: status.type === 'success' ? 'rgba(200, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                  color: status.type === 'success' ? 'var(--accent)' : '#ff4444',
                  border: `1px solid ${status.type === 'success' ? 'rgba(200, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)'}`,
                  animation: 'fadeIn 0.5s ease forwards'
                }}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
          
          <div className="cta__info">
            <div className="cta__info-item">
              <h3>Let's collaborate</h3>
              <p>I am currently available for freelance work and full-time positions.</p>
            </div>
            <div className="cta__info-item">
              <h3>WhatsApp</h3>
              <p>+91 98329 92240</p>
            </div>
            <div className="cta__info-item">
              <h3>Email</h3>
              <p>prithwi1016@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
