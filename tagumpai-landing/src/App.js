import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Bringing You To TagumpAI!</h1>
        <p>Tagging AI into Training, Compliance and Growth</p>
        <a href="#form" className="cta-button">Get Notified</a>
      </header>

      <section className="about">
        <h2>About TagumpAI</h2>
        <p>TagumpAI.com is an AI-powered platform built to level up how businesses train, manage, and ensure compliance—across hospitality, food service, retail, logistics, and more.</p>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>🧠 AI Learning Coach</li>
          <li>🎤 Voice-Enabled SOPs</li>
          <li>📊 Predictive Compliance Analytics</li>
          <li>📱 Mobile-First Interface</li>
          <li>🚫 Offline Mode</li>
        </ul>
      </section>

      <section id="form" className="form-section">
        <h2>Be the First to Know</h2>
        <form name="lead-form" method="POST" data-netlify="true">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} TagumpAI.com. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
