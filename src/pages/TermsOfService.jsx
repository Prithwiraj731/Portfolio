import { useEffect } from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    window.location.hash = '';
  };

  return (
    <div className="legal-page">
      <div className="container">
        <header className="legal-page__header">
          <a href="#" onClick={handleBack} className="btn btn--outline-light" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1rem', fontSize: '0.9rem', marginBottom: '2rem' }}>
            <ArrowLeft size={16} /> Back to Home
          </a>
          <div className="legal-page__title-wrap">
            <div className="legal-page__icon">
              <FileText size={32} />
            </div>
            <h1 className="legal-page__title">Terms of Service</h1>
            <p className="legal-page__date">Last updated: April 2026</p>
          </div>
        </header>

        <main className="legal-page__content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2>2. Use of Site</h2>
            <p>The content on this website, including but not limited to text, graphics, images, and code, is the property of Prithwiraj Mazumdar and is protected by copyright and other intellectual property laws.</p>
            <p>You may view the content for personal, non-commercial use. Any other use, including the reproduction, modification, distribution, or republication of the content without prior written permission is strictly prohibited.</p>
          </section>

          <section>
            <h2>3. Project Collaboration</h2>
            <p>The "Let's Talk" and "Contact" features are intended for professional inquiries only. I reserve the right to decline any project or request for services at my sole discretion.</p>
          </section>

          <section>
            <h2>4. Disclaimer of Liability</h2>
            <p>The information on this website is provided "as is" without any representations or warranties, express or implied. While I strive for accuracy, I make no representations or warranties in relation to the completeness or accuracy of the information found on this site.</p>
          </section>

          <section>
            <h2>5. Links to Third-Party Sites</h2>
            <p>This website contains links to external sites (such as GitHub, LinkedIn, Fiverr, and Instagram). I am not responsible for the content or privacy practices of these sites.</p>
          </section>

          <section>
            <h2>6. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2>7. Changes to Terms</h2>
            <p>I reserve the right to update or change these Terms of Service at any time. Your continued use of the site after I post any modifications will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Terms of Service.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
