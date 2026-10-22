'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function PoemSection() {
  const [copied, setCopied] = useState(false);
  const { poem } = BIRTHDAY_CONFIG;

  const handleCopyPoem = () => {
    const fullText = poem.verses
      .map((v) => `${v.shatr1} ... ${v.shatr2}`)
      .join('\n');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <section className="section-poem fade-up" id="anniversary-poem">
      <div className="poem-container">
        {/* Luxury Calligraphy Floral Header */}
        <div className="poem-header">
          <div className="poem-bismillah">
            <span>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          </div>

          <span className="section-tag">{poem.tag}</span>

          <h2 className="poem-main-title">{poem.heading}</h2>

          <p className="poem-subtitle">{poem.subtitle}</p>

          <div className="poem-divider-ornament">
            <span className="ornament-line" />
            <span className="ornament-symbol">❦</span>
            <span className="ornament-diamond">✦</span>
            <span className="ornament-symbol">❦</span>
            <span className="ornament-line" />
          </div>
        </div>

        {/* Ornate Parchment Card with Poem Verses */}
        <div className="poem-parchment-card">
          {/* Decorative Corner Ornaments */}
          <div className="parchment-corner top-left" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M0 0 L40 0 C20 0 0 20 0 40 Z" fill="rgba(201, 168, 76, 0.25)" />
              <path d="M2 2 L26 2 C14 2 2 14 2 26 Z" stroke="rgba(201, 168, 76, 0.7)" strokeWidth="1.2" fill="none" />
              <circle cx="8" cy="8" r="2.5" fill="var(--gold)" />
            </svg>
          </div>
          <div className="parchment-corner top-right" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M40 0 L0 0 C20 0 40 20 40 40 Z" fill="rgba(201, 168, 76, 0.25)" />
              <path d="M38 2 L14 2 C26 2 38 14 38 26 Z" stroke="rgba(201, 168, 76, 0.7)" strokeWidth="1.2" fill="none" />
              <circle cx="32" cy="8" r="2.5" fill="var(--gold)" />
            </svg>
          </div>
          <div className="parchment-corner bottom-left" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M0 40 L40 40 C20 40 0 20 0 0 Z" fill="rgba(201, 168, 76, 0.25)" />
              <path d="M2 38 L26 38 C14 38 2 26 2 14 Z" stroke="rgba(201, 168, 76, 0.7)" strokeWidth="1.2" fill="none" />
              <circle cx="8" cy="32" r="2.5" fill="var(--gold)" />
            </svg>
          </div>
          <div className="parchment-corner bottom-right" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M40 40 L0 40 C20 40 40 20 40 0 Z" fill="rgba(201, 168, 76, 0.25)" />
              <path d="M38 38 L14 38 C26 38 38 26 38 14 Z" stroke="rgba(201, 168, 76, 0.7)" strokeWidth="1.2" fill="none" />
              <circle cx="32" cy="32" r="2.5" fill="var(--gold)" />
            </svg>
          </div>

          {/* Verses Container */}
          <div className="poem-verses-list">
            {poem.verses.map((verse, index) => {
              return (
                <div key={index} className="poem-verse-row">
                  {/* Shatr 1 */}
                  <div className="poem-shatr shatr-right">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: formatVerseWords(verse.shatr1),
                      }}
                    />
                  </div>

                  {/* Golden Center Separator */}
                  <div className="poem-center-separator" aria-hidden="true">
                    <span className="separator-dot">❖</span>
                  </div>

                  {/* Shatr 2 */}
                  <div className="poem-shatr shatr-left">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: formatVerseWords(verse.shatr2),
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card Footer with Copy Button */}
          <div className="poem-card-footer">
            <div className="poem-dedication">
              <span>مهداة من القلب إلى سُهيلة الشريف بمناسبة مرور عام على قراءة الفاتحة ♡ 24 أكتوبر 2026</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/** Helper to highlight beloved names in golden/rose calligraphy styling */
function formatVerseWords(text: string): string {
  return text
    .replace(
      /"سُـهَـيـلَـةُ"/g,
      '<span class="poem-highlight name-sohaila">"سُـهَـيـلَـةُ"</span>'
    )
    .replace(
      /"حَـسَـنُ"/g,
      '<span class="poem-highlight name-hassan">"حَـسَـنُ"</span>'
    )
    .replace(
      /"عَـلِيٌّ"/g,
      '<span class="poem-highlight name-ali">"عَـلِيٌّ"</span>'
    )
    .replace(
      /"الشَّريفُ"/g,
      '<span class="poem-highlight name-sharif">"الشَّريفُ"</span>'
    );
}
