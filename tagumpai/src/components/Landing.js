import { useState } from 'react';
import styles from './Landing.module.css';
const logo = '/tagumpai-logo.png';

function Landing() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }, 50)
  };

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/tagumpai-logo.png" alt="TagumpAI Logo" />
        </div>
        <div className={styles.navLinks}>
          <a href="#hero" onClick={() => setActiveSection('hero')}>Home</a>
          <a onClick={() => scrollToSection('mission')}>Mission</a>
          <a onClick={() => scrollToSection('features')}>Features</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </nav>

      <section id="hero" className={styles.hero}>
        <h1><span className={styles.brand}>TagumpAI</span>: Bringing You to TagumpAI!</h1>
        <p className={styles.tagline}>Tagging AI into Training, Compliance and Growth</p>
        <p className={styles.description}>
          TagumpAI.com is an AI-powered platform built to level up how businesses train, manage,
          and ensure compliance—across hospitality, food service, retail, logistics, and more.
          Carrying the spirit of Filipino ingenuity—resourceful, service-centered, and warm-hearted,
          it is proudly built on the foundation of the Filipinos' globally recognized talent—respected
          in world-class hotels, airlines, and enterprises for their excellence, adaptability, and heart.
          Whether you're running a fast-growing cafe, a logistics chain, or a training institute, we help
          you build smarter systems without the paperwork, complexity, or guesswork.
        </p>
      </section>

      <section className={styles.section}>
        <p className={styles.highlight}>
          TagumpAI.com combines AI, digital operations, and Filipino brilliance to bring you an all-in-one system that:
        </p>
        <ul>
          <li>✅ Trains your people with interactive, gamified learning paths</li>
          <li>✅ Tracks compliance through smart, voice-enabled SOPs</li>
          <li>✅ Flags risks before they become problems using predictive AI</li>
          <li>✅ Builds a culture of accountability, safety, and operational excellence</li>
        </ul>
      </section>

      {activeSection === 'mission' && (
        <section id="mission" className={styles.section}>
          <h2>Our Mission</h2>
          <p>
           To advance the future of workforce excellence by integrating the globally respected Filipino work ethic with intelligent,
            human-centered technologies—elevating training, compliance, and operational culture in businesses worldwide.

          </p>
          <h2>Our Vision</h2>
          <p>
            To become the world’s most trusted Filipino-born platform, redefining how service-based industries build
            capability, ensure accountability, and scale with integrity—powered by AI, inspired by people.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Galing at Puso (Skill with Heart):</strong> We merge competence with compassion in every solution.</li>
            <li><strong>Bayanihan (Cooperation):</strong> We believe in the power of collaboration and shared success.</li>
            <li><strong>Agility & Adaptability:</strong> Just like Filipinos across the globe, we respond fast and flex smartly.</li>
            <li><strong>Excellence through Simplicity:</strong> We create solutions that are powerful yet practical.</li>
          </ul>
        </section>
      )}

      {activeSection === 'features' && (
        <section id="features" className={styles.section}>
          <h2>Key Features that Set Us Apart</h2>
          <ol>
            <li><strong>AI Learning Coach:</strong> Smart module suggestions, engagement prompts, and mastery pathing</li>
            <li><strong>Voice-Enabled SOPs:</strong> Frontliners can follow SOPs hands-free and search via voice</li>
            <li><strong>Predictive Compliance Analytics:</strong> Flags operational risks based on behavioral data</li>
            <li><strong>Offline Mode:</strong> Designed for low-bandwidth or offline environments</li>
            <li><strong>Mobile-First Interface:</strong> Seamless use across devices, perfect for field operations</li>
          </ol>

          <h2>Impact Metrics We Aim to Drive</h2>
          <ul>
            <li>🚀 Faster onboarding across service teams</li>
            <li>📈 Increase in SOP compliance in high-volume locations</li>
            <li>✅ High learner completion rate through gamified and AI-assisted modules</li>
            <li>💡 Data insights per store to enable coaching, forecasting, and quality reviews</li>
          </ul>
        </section>
      )}

      {activeSection === 'contact' && (
        <section id="contact" className={styles.section}>
          <h2>Executive Summary</h2>
          <p>
            TagumpAI.com is a tech-driven learning and operations platform designed to revolutionize how businesses train, manage,
            and scale. With AI-powered modules, digital SOPs, and automation-focused workforce training, we aim to elevate operational
            excellence across all organizational structures of any size.
          </p>
          <p>Our goal is to position TagumpAI.com as the go-to LMS and digital compliance solution in the global service economy.</p>
        </section>
      )}
    </div>
  );
}

export default Landing;
