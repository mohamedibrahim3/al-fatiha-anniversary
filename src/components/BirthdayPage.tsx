'use client';

import React, { useState, useEffect } from 'react';
import EnvelopePreloader from './EnvelopePreloader';
import AudioPlayer from './AudioPlayer';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import DividerOrnament from './DividerOrnament';
import CountdownSection from './CountdownSection';
import CalendarSection from './CalendarSection';
import MemoriesCarousel from './MemoriesCarousel';
import UpLoveStorySection from './UpLoveStorySection';
import ClosingSection from './ClosingSection';
import FooterSection from './FooterSection';

export default function BirthdayPage() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  // Setup IntersectionObserver for smooth .fade-up scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [envelopeOpened]);

  return (
    <>
      {/* 1. Interactive Envelope Opening Screen */}
      <EnvelopePreloader onOpen={() => setEnvelopeOpened(true)} />

      {/* 2. Floating Audio Player */}
      <AudioPlayer autoStart={envelopeOpened} />

      {/* 3. Main Website Sections */}
      <main>
        <HeroSection />

        <WelcomeSection />

        <DividerOrnament />

        <CountdownSection />

        <DividerOrnament />

        <CalendarSection />

        <DividerOrnament />

        <MemoriesCarousel />

        <DividerOrnament />

        <UpLoveStorySection />

        <DividerOrnament />

        <ClosingSection />

        <FooterSection />
      </main>
    </>
  );
}
