import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function CalendarSection() {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  // January 2027 starts on Friday (5 leading empty days: Sun, Mon, Tue, Wed, Thu)
  const emptyDaysBefore = Array.from({ length: 5 });
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="section-photo fade-up">
      <div className="calendar-card">
        <div className="calendar-header">
          <span className="section-tag" style={{ marginBottom: '0.4rem' }}>
            Save The Date
          </span>
          <h2 className="calendar-month">
            {BIRTHDAY_CONFIG.date.month}
          </h2>
          <p className="calendar-year">{BIRTHDAY_CONFIG.date.year}</p>
        </div>

        <div className="calendar-weekdays" aria-hidden="true">
          {weekdays.map((day, idx) => (
            <span key={idx}>{day}</span>
          ))}
        </div>

        <div className="calendar-days-grid">
          {emptyDaysBefore.map((_, idx) => (
            <div key={`empty-${idx}`} className="cal-day empty" />
          ))}

          {daysInMonth.map((day) => {
            const isSpecial = day === 1;
            return (
              <div
                key={`day-${day}`}
                className={`cal-day ${isSpecial ? 'special-day' : ''}`}
                title={isSpecial ? `Happy Birthday ${BIRTHDAY_CONFIG.name}!` : undefined}
              >
                <span>{day}</span>
              </div>
            );
          })}
        </div>

        <div className="cal-special-badge">
          <span>♡ Happy Birthday {BIRTHDAY_CONFIG.name} ♡</span>
        </div>
      </div>
    </section>
  );
}
