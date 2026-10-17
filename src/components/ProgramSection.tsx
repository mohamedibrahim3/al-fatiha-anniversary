import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function ProgramSection() {
  return (
    <section className="section-program fade-up">
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <span className="section-tag">Evening Schedule</span>
        <h2 className="program-heading">The Celebration</h2>

        <div className="program-grid">
          {BIRTHDAY_CONFIG.program.map((item, index) => {
            const [hours, minutes] = item.time.split(':');
            return (
              <div key={index} className="program-card">
                <div className="program-icon">{item.icon}</div>
                <div className="program-time-big">
                  {hours}
                  <span className="program-colon">:</span>
                  {minutes}
                </div>
                <div className="program-pm">{item.period}</div>
                <h3 className="program-label">{item.title}</h3>
                <p className="program-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
