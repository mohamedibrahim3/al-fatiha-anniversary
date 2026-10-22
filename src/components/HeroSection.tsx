import React from 'react';
import Image from 'next/image';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function HeroSection() {
  return (
    <section className="hero-video-section">
      {/* Ambient Blurred Background with Floating Stars */}
      <div className="hero-ambient-bg-wrapper" aria-hidden="true">
        <Image
          src={BIRTHDAY_CONFIG.assets.heroPoster}
          alt=""
          fill
          priority
          className="hero-video-bg-ambient"
          sizes="100vw"
        />
        <div className="hero-video-overlay" />
        <div className="hero-ambient-lights" />
      </div>

      <div className="hero-video-content">
        <p className="hero-eyebrow">{BIRTHDAY_CONFIG.eyebrow}</p>

        <h1 className="hero-couple-names">
          {BIRTHDAY_CONFIG.coupleDisplay}
          <span className="hero-name-highlight">مرور عام على قراءة الفاتحة</span>
        </h1>

        {/* Featured Artwork Frame: Uncropped, Full Resolution Display */}
        <div className="hero-art-frame">
          <div className="hero-art-inner">
            <Image
              src={BIRTHDAY_CONFIG.assets.heroPoster}
              alt="احتفال مرور عام على قراءة الفاتحة — محمد وسهيلة"
              width={1086}
              height={1448}
              priority
              className="hero-art-image"
              sizes="(max-width: 768px) 90vw, 460px"
            />
          </div>
        </div>

        <div className="hero-rule" aria-hidden="true">
          <span className="hero-rule-line" />
          <span className="hero-rule-diamond">◇</span>
          <span className="hero-rule-line" />
        </div>

        <p className="hero-date">{BIRTHDAY_CONFIG.date.display}</p>
        <p className="hero-subdate">{BIRTHDAY_CONFIG.date.arabicDisplay}</p>
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
