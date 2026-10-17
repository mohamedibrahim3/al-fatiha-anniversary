import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function ClosingSection() {
  return (
    <section className="section-closing fade-up">
      <div className="closing-inner">
        <div className="closing-ornament">✦</div>
        <h2 className="closing-quote">{BIRTHDAY_CONFIG.closing.quote}</h2>
        <p className="closing-arabic">{BIRTHDAY_CONFIG.closing.arabicQuote}</p>
      </div>
    </section>
  );
}
