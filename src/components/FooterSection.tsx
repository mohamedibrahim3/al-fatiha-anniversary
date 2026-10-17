'use client';

import React, { useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }
  };

  return (
    <footer className="site-footer fade-up">
      <div className="footer-inner">
        <div className="closing-names">
          Happy Birthday, {BIRTHDAY_CONFIG.name}
        </div>
        <p className="closing-date">{BIRTHDAY_CONFIG.date.short}</p>

        <p className="footer-brand">
          Crafted with endless love · <span>{BIRTHDAY_CONFIG.footer.brand}</span>
        </p>

        <div className="footer-socials">
          <button
            type="button"
            className="footer-btn-icon"
            onClick={handleShare}
            aria-label="Share Invitation"
            title="Share Invitation"
          >
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
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>

        {copied && (
          <p
            style={{
              marginTop: '1rem',
              color: 'var(--gold-light)',
              fontSize: '0.85rem',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            ✓ Link copied to clipboard!
          </p>
        )}
      </div>
    </footer>
  );
}
