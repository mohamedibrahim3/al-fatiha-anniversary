'use client';

import React, { useState, useEffect, useCallback } from 'react';
import EnvelopePreloader from './EnvelopePreloader';
import AudioPlayer from './AudioPlayer';
import HeroSection from './HeroSection';
import WelcomeSection from './WelcomeSection';
import PoemSection from './PoemSection';
import DividerOrnament from './DividerOrnament';
import CalendarSection from './CalendarSection';
import MemoriesCarousel from './MemoriesCarousel';
import ClosingSection from './ClosingSection';
import FooterSection from './FooterSection';

const GATE_KEY = 'gate_unlocked';

export default function BirthdayPage() {
  // null = still checking, true = already unlocked, false = needs password
  const [authState, setAuthState] = useState<null | boolean>(null);

  // Check localStorage on mount (client-only)
  useEffect(() => {
    const wasUnlocked = localStorage.getItem(GATE_KEY) === 'true';
    setAuthState(wasUnlocked);
  }, []);

  const handleGateOpen = useCallback(() => {
    localStorage.setItem(GATE_KEY, 'true');
    setAuthState(true);
  }, []);

  // Setup IntersectionObserver for smooth .fade-up scroll animations
  useEffect(() => {
    if (!authState) return;

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
  }, [authState]);

  // While checking localStorage, show nothing (prevents flash)
  if (authState === null) {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#0a0612',
          zIndex: 9999,
        }}
      />
    );
  }

  return (
    <>
      {/* 1. Password Gate — only rendered if NOT yet authenticated */}
      {!authState && (
        <EnvelopePreloader onOpen={handleGateOpen} />
      )}

      {/* 2. Floating Audio Player */}
      <AudioPlayer autoStart={authState} />

      {/* 3. Main Website Sections */}
      <main>
        <HeroSection />

        <WelcomeSection />

        <DividerOrnament />

        {/* 4. Dedicated Illuminated Poem Section */}
        <PoemSection />

        <DividerOrnament />

        <CalendarSection />

        <DividerOrnament />

        <MemoriesCarousel />

        <DividerOrnament />

        <ClosingSection />

        <FooterSection />
      </main>
    </>
  );
}
