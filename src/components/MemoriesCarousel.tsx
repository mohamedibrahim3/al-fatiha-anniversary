'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { BIRTHDAY_CONFIG } from '@/lib/config';

export default function MemoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const memories = BIRTHDAY_CONFIG.memories;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  }, [memories.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  }, [memories.length]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  return (
    <section className="section-memories fade-up">
      <div className="memories-inner">
        <span className="section-tag">Our Treasured Moments</span>
        <h2 className="memories-heading">Memories With You</h2>
        <div className="welcome-divider" />

        <div
          className="carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous image"
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {memories.map((memory, index) => (
              <div key={index} className="carousel-slide">
                <Image
                  src={memory.src}
                  alt={memory.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 680px"
                  style={{ objectFit: 'cover' }}
                />
                <div className="carousel-caption-bar">
                  <h3 className="carousel-caption-title">{memory.title}</h3>
                  <p className="carousel-caption-text">{memory.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            aria-label="Next image"
            type="button"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {memories.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
