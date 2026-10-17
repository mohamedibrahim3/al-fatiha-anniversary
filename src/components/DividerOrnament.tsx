import React from 'react';

export default function DividerOrnament() {
  return (
    <div className="ornamental-divider-svg fade-up" aria-hidden="true">
      <svg
        width="160"
        height="32"
        viewBox="0 0 160 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 16 H65"
          stroke="url(#goldGradL)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M95 16 H150"
          stroke="url(#goldGradR)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Central Floral Diamond Flourish */}
        <circle cx="80" cy="16" r="3" fill="#c9a84c" />
        <path
          d="M80 7 C80 12 73 16 80 16 C87 16 80 12 80 7 Z"
          fill="#c54b6c"
          opacity="0.85"
        />
        <path
          d="M80 25 C80 20 73 16 80 16 C87 16 80 20 80 25 Z"
          fill="#c54b6c"
          opacity="0.85"
        />
        <circle cx="72" cy="16" r="1.5" fill="#e4c97e" />
        <circle cx="88" cy="16" r="1.5" fill="#e4c97e" />
        <defs>
          <linearGradient id="goldGradL" x1="10" y1="16" x2="65" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9a84c" stopOpacity="0" />
            <stop offset="1" stopColor="#c9a84c" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="goldGradR" x1="95" y1="16" x2="150" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9a84c" stopOpacity="0.8" />
            <stop offset="1" stopColor="#c9a84c" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
