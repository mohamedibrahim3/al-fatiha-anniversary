import React from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function VenueSection() {
  const { venue } = BIRTHDAY_CONFIG;

  return (
    <section className="section-venue fade-up">
      <div className="venue-split">
        <div className="venue-text">
          <span className="section-tag">{venue.tag}</span>
          <h2 className="venue-heading">{venue.heading}</h2>
          <p className="venue-name">{venue.name}</p>
          <p className="venue-sub">{venue.address}</p>
          <p className="venue-sub">{venue.city}</p>
          <span className="venue-dress-tip">
            Suggested: {venue.dressCodeSummary}
          </span>
        </div>

        <div className="venue-media">
          <div className="venue-sketch-card">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
            </svg>
            <h3 className="venue-sketch-title">{venue.name}</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '0.3rem' }}>
              Private Celebration Estate
            </p>
          </div>

          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-venue"
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
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Open in Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
