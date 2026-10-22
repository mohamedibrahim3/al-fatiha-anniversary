'use client';

import React, { useEffect, useState } from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      const target = new Date(BIRTHDAY_CONFIG.targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return isMounted ? String(num).padStart(2, '0') : '00';
  };

  return (
    <section className="section-countdown fade-up">
      <div className="countdown-wrapper">
        <span className="section-tag light">{BIRTHDAY_CONFIG.countdown.tag}</span>
        <h2 className="countdown-heading">{BIRTHDAY_CONFIG.countdown.heading}</h2>
        <p className="countdown-sub">{BIRTHDAY_CONFIG.countdown.subtitle}</p>

        <div className="countdown-grid" role="timer" aria-live="polite">
          <div className="cd-cell">
            <span className="cd-num" id="cd-days">
              {formatNumber(timeLeft.days)}
            </span>
            <em className="cd-label">أيام · Days</em>
          </div>

          <div className="cd-sep">:</div>

          <div className="cd-cell">
            <span className="cd-num" id="cd-hours">
              {formatNumber(timeLeft.hours)}
            </span>
            <em className="cd-label">ساعات · Hours</em>
          </div>

          <div className="cd-sep">:</div>

          <div className="cd-cell">
            <span className="cd-num" id="cd-min">
              {formatNumber(timeLeft.minutes)}
            </span>
            <em className="cd-label">دقائق · Minutes</em>
          </div>

          <div className="cd-sep">:</div>

          <div className="cd-cell">
            <span className="cd-num" id="cd-sec">
              {formatNumber(timeLeft.seconds)}
            </span>
            <em className="cd-label">ثوانٍ · Seconds</em>
          </div>
        </div>
      </div>
    </section>
  );
}
