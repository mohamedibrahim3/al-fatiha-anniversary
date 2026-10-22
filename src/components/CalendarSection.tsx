import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function CalendarSection() {
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  // October 2026 starts on Thursday (4 leading empty days: Sun, Mon, Tue, Wed)
  const emptyDaysBefore = Array.from({ length: 4 });
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
            <span style={{ display: 'block', fontSize: '1rem', color: 'var(--muted)', marginTop: '2px' }}>
              {BIRTHDAY_CONFIG.date.monthArabic}
            </span>
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
            const isSpecial = day === 24;
            return (
              <div
                key={`day-${day}`}
                className={`cal-day ${isSpecial ? 'special-day' : ''}`}
                title={
                  isSpecial
                    ? `ذكرى مرور عام على قراءة الفاتحة · 24 أكتوبر 2026`
                    : undefined
                }
              >
                <span>{day}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
