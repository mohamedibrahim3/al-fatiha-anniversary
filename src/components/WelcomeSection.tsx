import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function WelcomeSection() {
  return (
    <section className="section-welcome fade-up">
      <div className="welcome-inner">
        <span className="section-tag">{BIRTHDAY_CONFIG.welcome.tag}</span>

        <h2
          className="welcome-heading"
          dangerouslySetInnerHTML={{ __html: BIRTHDAY_CONFIG.welcome.heading }}
        />

        <div className="welcome-divider" />

        <p className="welcome-body">{BIRTHDAY_CONFIG.welcome.body1}</p>

        <p className="welcome-body">
          {BIRTHDAY_CONFIG.welcome.body2}
          <span className="welcome-highlight-name">{BIRTHDAY_CONFIG.name}</span>
        </p>
      </div>
    </section>
  );
}
