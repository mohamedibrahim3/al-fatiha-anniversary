'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

interface EnvelopePreloaderProps {
  onOpen: () => void;
}

export default function EnvelopePreloader({ onOpen }: EnvelopePreloaderProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    if (isOpening || isClosed) return;
    setIsOpening(true);

    // Call onOpen to start music and animations
    onOpen();

    // After animation finishes, hide preloader
    setTimeout(() => {
      setIsClosed(true);
    }, 850);
  };

  if (isClosed) return null;

  return (
    <div
      id="preloader"
      className={`preloader ${isOpening ? 'closing started' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Click to open the invitation"
    >
      <div className="preloader-bg-ambient" />
      <div className="preloader-dark-overlay" />

      <div className="envelope-container">
        <div className="envelope-card">
          <div className="envelope-flap-decor" />
          <div className="envelope-seal-wrapper">
            <div className="wax-seal" title="Wax Seal">
              <span>T</span>
            </div>
            <div className="envelope-recipient">
              For {BIRTHDAY_CONFIG.name} ♡
            </div>
          </div>
        </div>

        <div className="preloader-prompt">
          <span>Click to open the Invitation</span>
          <span className="preloader-prompt-ar">اضغط لفتح الدعوة</span>
        </div>
      </div>
    </div>
  );
}
