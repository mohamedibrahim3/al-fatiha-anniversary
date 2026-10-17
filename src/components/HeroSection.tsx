import React from 'react';
import Image from 'next/image';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function HeroSection() {
  return (
    <section className="hero-video-section">
      {/* Background Image / Poster */}
      <Image
        src={BIRTHDAY_CONFIG.assets.heroPoster}
        alt="Birthday Celebration Atmosphere"
        fill
        priority
        className="hero-video-bg"
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />

      <div className="hero-video-overlay" />
      <div className="hero-ambient-lights" />

      <div className="hero-video-content">
        <p className="hero-eyebrow">{BIRTHDAY_CONFIG.eyebrow}</p>

        <h1 className="hero-couple-names">
          {BIRTHDAY_CONFIG.heroTitle}
          <span className="hero-name-highlight">{BIRTHDAY_CONFIG.heroSubtitle}</span>
        </h1>

        <div className="hero-rule" aria-hidden="true">
          <span className="hero-rule-line" />
          <span className="hero-rule-diamond">◇</span>
          <span className="hero-rule-line" />
        </div>

        <p className="hero-date">{BIRTHDAY_CONFIG.date.display}</p>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
