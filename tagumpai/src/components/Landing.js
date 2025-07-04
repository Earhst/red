import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bringing You To TagumpAI!</h1>
      <p className={styles.subtitle}>Tagging AI into Training, Compliance and Growth</p>

      <section className={styles.section}>
        <p>
          TagumpAI.com is an AI-powered platform built to level up how businesses train, manage, and ensure compliance—across hospitality, food service, retail, logistics, and more.
        </p>
        <p>
          Carrying the spirit of Filipino ingenuity—resourceful, service-centered, and warm-hearted, it is proudly built on the foundation of the Filipinos' globally recognized talent—respected in world-class hotels, airlines, and enterprises for their excellence, adaptability, and heart.
        </p>
        <p>
          Whether you're running a fast-growing cafe, a logistics chain, or a training institute, we help you build smarter systems without the paperwork, complexity, or guesswork. We’re not just another LMS. And we’re definitely not your old audit checklist in Excel.
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

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To advance the future of workforce excellence by integrating the globally respected Filipino work ethic with intelligent, human-centered technologies—elevating training, compliance, and operational culture in businesses worldwide.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To become the world’s most trusted Filipino-born platform, redefining how service-based industries build capability, ensure accountability, and scale with integrity—powered by AI, inspired by people.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Galing at Puso (Skill with Heart):</strong> We merge competence with compassion in every solution.</li>
          <li><strong>Bayanihan (Cooperation):</strong> We believe in the power of collaboration and shared success.</li>
          <li><strong>Agility & Adaptability:</strong> Just like Filipinos across the globe, we respond fast and flex smartly.</li>
          <li><strong>Excellence through Simplicity:</strong> We create solutions that are powerful yet practical.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>What We Believe</h2>
        <p>
          We believe that every business—big or small—deserves tools that are:
        </p>
        <ul>
          <li>✅ Simple to use</li>
          <li>✅ Built for local teams</li>
          <li>✅ Powered by world-class technology</li>
        </ul>
        <p>
          And more importantly: We believe your people thrive when they are equipped, engaged, and trusted to lead.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Who We’re For</h2>
        <ul>
          <li>🏨 Hospitality & Food Service – From quick service restaurants to fine dining chains</li>
          <li>🏪 Retail & Convenience – Storefront consistency, team alignment, and SOP adherence</li>
          <li>📦 Logistics & Warehousing – Training for fulfillment teams, checklists for safety and accuracy</li>
          <li>🏢 Franchise & Multi-Unit Businesses – Scalable training rollouts and operational control</li>
          <li>🩺 Healthcare & Field Services – Onboarding, compliance, and quality tracking on-the-go</li>
        </ul>
        <p>If your operations rely on people following process, training on-the-go, or passing audits—you need us.</p>
      </section>

      <section className={styles.section}>
        <h2>Key Features that Set Us Apart</h2>
        <ol>
          <li><strong>AI Learning Coach:</strong> Smart module suggestions, engagement prompts, and mastery pathing</li>
          <li><strong>Voice-Enabled SOPs:</strong> Frontliners can follow SOPs hands-free and search via voice</li>
          <li><strong>Predictive Compliance Analytics:</strong> Flags operational risks based on behavioral data</li>
          <li><strong>Offline Mode:</strong> Designed for low-bandwidth or offline environments</li>
          <li><strong>Mobile-First Interface:</strong> Seamless use across devices, perfect for field operations</li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Impact Metrics We Aim to Drive</h2>
        <ul>
          <li>🚀 Faster onboarding across service teams</li>
          <li>📈 Increase in SOP compliance in high-volume locations</li>
          <li>✅ High learner completion rate through gamified and AI-assisted modules</li>
          <li>💡 Data insights per store to enable coaching, forecasting, and quality reviews</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Executive Summary</h2>
        <p>
          TagumpAI.com is a tech-driven learning and operations platform designed to revolutionize how businesses train, manage, and scale. With AI-powered modules, digital SOPs, and automation-focused workforce training, we aim to elevate the operational excellence across all organizational structures of any size. Our goal is to position TagumpAI.com as the go-to LMS and digital compliance solution in the global service economy.
        </p>
      </section>
    </div>
  );
}

export default Landing;
