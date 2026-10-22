'use client';

import React, { useState, useRef, useEffect } from 'react';

interface EnvelopePreloaderProps {
  onOpen: () => void;
}

const CORRECT_PASSWORD = '241025';

// Pre-computed deterministic particle data to avoid hydration mismatch
const PARTICLES = [
  { left: '5%', delay: '0s', duration: '8s', opacity: 0.4, size: '8px' },
  { left: '12%', delay: '2.1s', duration: '11s', opacity: 0.55, size: '10px' },
  { left: '20%', delay: '4.3s', duration: '9s', opacity: 0.3, size: '12px' },
  { left: '28%', delay: '1.5s', duration: '13s', opacity: 0.65, size: '7px' },
  { left: '35%', delay: '6.2s', duration: '10s', opacity: 0.45, size: '14px' },
  { left: '42%', delay: '3.8s', duration: '7s', opacity: 0.5, size: '9px' },
  { left: '50%', delay: '5.1s', duration: '12s', opacity: 0.35, size: '11px' },
  { left: '58%', delay: '0.7s', duration: '8.5s', opacity: 0.6, size: '13px' },
  { left: '65%', delay: '7.4s', duration: '9.5s', opacity: 0.25, size: '8px' },
  { left: '72%', delay: '2.9s', duration: '11.5s', opacity: 0.55, size: '15px' },
  { left: '78%', delay: '4.6s', duration: '7.8s', opacity: 0.4, size: '10px' },
  { left: '85%', delay: '1.2s', duration: '13.5s', opacity: 0.5, size: '7px' },
  { left: '92%', delay: '6.8s', duration: '10.2s', opacity: 0.3, size: '12px' },
  { left: '8%', delay: '3.3s', duration: '8.8s', opacity: 0.6, size: '9px' },
  { left: '18%', delay: '5.7s', duration: '12.3s', opacity: 0.45, size: '14px' },
  { left: '32%', delay: '0.4s', duration: '9.7s', opacity: 0.35, size: '11px' },
  { left: '48%', delay: '7.1s', duration: '7.3s', opacity: 0.55, size: '8px' },
  { left: '62%', delay: '2.5s', duration: '11.8s', opacity: 0.4, size: '13px' },
  { left: '75%', delay: '4.9s', duration: '10.5s', opacity: 0.5, size: '10px' },
  { left: '88%', delay: '1.8s', duration: '8.2s', opacity: 0.3, size: '15px' },
];

export default function EnvelopePreloader({ onOpen }: EnvelopePreloaderProps) {
  const [password, setPassword] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [showError, setShowError] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Auto-focus the input on mount
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.trim() === CORRECT_PASSWORD) {
      setIsSuccess(true);
      setShowError(false);
      try {
        localStorage.setItem('gate_unlocked', 'true');
      } catch (err) {
        console.error(err);
      }

      // Allow the smooth 1.1s luxury exit animation to complete before unmounting
      setTimeout(() => {
        setIsClosed(true);
        onOpen();
      }, 1100);
    } else {
      setShowError(true);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 650);
    }
  };

  if (isClosed) return null;

  return (
    <div
      id="preloader"
      className={`password-gate ${isSuccess ? 'gate-unlocked' : ''}`}
    >
      {/* Ambient Background */}
      <div className="gate-bg-ambient" />
      <div className="gate-dark-overlay" />

      {/* Floating Particles */}
      <div className="gate-particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="gate-particle"
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity,
              fontSize: p.size,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div className={`gate-content ${isSuccess ? 'gate-success-anim' : ''}`}>
        {/* Decorative Top Ornament */}
        <div className="gate-ornament-top">✧ ♡ ✧</div>

        {/* Initials */}
        <div className="gate-initials">
          <span className="gate-initial-s">س</span>
          <span className="gate-heart">♡</span>
          <span className="gate-initial-m">م</span>
        </div>

        {/* Title */}
        <h1 className="gate-title">ذكرى قراءة الفاتحة</h1>
        <p className="gate-subtitle">عامٌ من النور والمودّة</p>

        {/* Divider */}
        <div className="gate-divider">
          <span className="gate-divider-line" />
          <span className="gate-divider-diamond">◆</span>
          <span className="gate-divider-line" />
        </div>

        {/* Password Form */}
        <form
          onSubmit={handleSubmit}
          className={`gate-form ${isShaking ? 'shake' : ''}`}
        >
          <label htmlFor="gate-password" className="gate-label">
            أدخل كلمة المرور للدخول
          </label>

          <div className="gate-input-wrapper">
            <span className="gate-input-icon">🔐</span>
            <input
              ref={inputRef}
              id="gate-password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowError(false);
              }}
              placeholder="• • • • • •"
              className={`gate-input ${showError ? 'input-error' : ''} ${isSuccess ? 'input-success' : ''}`}
              autoComplete="off"
              dir="ltr"
            />
            {isSuccess && (
              <span className="gate-input-check">✓</span>
            )}
          </div>

          {/* Hint */}
          <p className="gate-hint">
            <span className="gate-hint-icon">💡</span>
            تاريخ قراية الفاتحة
          </p>

          {/* Error Message */}
          {showError && (
            <p className="gate-error">كلمة المرور غير صحيحة، حاول تاني ♡</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`gate-submit-btn ${isSuccess ? 'btn-success' : ''}`}
            disabled={isSuccess}
          >
            {isSuccess ? (
              <span className="gate-btn-content">
                <span className="gate-btn-check">✓</span>
                أهلاً وسهلاً
              </span>
            ) : (
              <span className="gate-btn-content">
                <span className="gate-btn-lock">🔓</span>
                ادخل
              </span>
            )}
          </button>
        </form>

        {/* Bottom Ornament */}
        <div className="gate-ornament-bottom">
          24 · 10 · 2026
        </div>
      </div>
    </div>
  );
}
