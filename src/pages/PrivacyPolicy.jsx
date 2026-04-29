import { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
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
              <Shield size={32} />
            </div>
            <h1 className="legal-page__title">Privacy Policy</h1>
            <p className="legal-page__date">Last updated: April 2026</p>
          </div>
        </header>

        <main className="legal-page__content">
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to Prithwiraj Mazumdar's Portfolio. This Privacy Policy explains how I collect, use, and protect your information when you visit my website and use the contact forms provided.</p>
          </section>

          <section>
            <h2>2. Information I Collect</h2>
            <p>When you use the contact form on my website, I collect the following information:</p>
            <ul>
              <li><strong>Name:</strong> To know who I am talking to.</li>
              <li><strong>Email Address:</strong> To respond to your inquiries.</li>
              <li><strong>Message Content:</strong> The details of your request or inquiry.</li>
            </ul>
            <p>I also use WhatsApp for direct communication. When you message me via WhatsApp, your phone number and profile information will be visible to me as per WhatsApp's own privacy settings.</p>
          </section>

          <section>
            <h2>3. How I Use Your Information</h2>
            <p>The information collected is used solely for the following purposes:</p>
            <ul>
              <li>To respond to your messages and inquiries.</li>
              <li>To discuss potential project collaborations or employment opportunities.</li>
              <li>To improve my services and website experience.</li>
            </ul>
            <p>I do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>I implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
          </section>

          <section>
            <h2>5. Cookies</h2>
            <p>This portfolio is a static-driven application and does not use tracking cookies or third-party analytics that store personal data on your device.</p>
          </section>

          <section>
            <h2>6. Contact Me</h2>
            <p>If you have any questions regarding this Privacy Policy, you may contact me using the information below:</p>
            <p><strong>Email:</strong> prithwi1016@gmail.com</p>
            <p><strong>WhatsApp:</strong> +91 98329 92240</p>
          </section>
        </main>
      </div>
    </div>
  );
}
