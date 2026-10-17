import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function GuidelinesSection() {
  return (
    <section className="section-guidelines fade-up">
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <span className="section-tag">Good to Know</span>
        <h2 className="guidelines-heading">Event Guidelines</h2>
        <p className="guidelines-sub">
          A few thoughtful details to make the evening seamless and magical
        </p>

        <div className="guidelines-grid">
          {BIRTHDAY_CONFIG.guidelines.map((guide, index) => (
            <div key={index} className="guideline-card">
              <span className="guide-tag">{guide.tag}</span>
              <h3 className="guide-title">{guide.title}</h3>
              <div className="guide-rule" />

              <p className="guide-body">{guide.body}</p>

              <div className="guide-note-ar">
                {guide.arabicNote.map((line, idx) => (
                  <span key={idx}>{line}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
