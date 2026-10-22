'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { BIRTHDAY_CONFIG } from '@/lib/config';

interface BalloonItem {
  id: number;
  x: number;
  speed: number;
  color: string;
  size: number;
  popped: boolean;
  message: string;
}

const BALLOON_MESSAGES = [
  'أول نظرة.. وأول دقة قلب ليكِ 💖',
  'ضحكتك بتخلي الدنيا كلها جنة 🌸',
  'كل خطوة في حياتي أحلى وإنتِ فيها ✨',
  'يا أجمل صدفة وأغلى نصيب في عمري 💍',
  'كل سنة وإنتِ قمري وسر فرحتي 🎂',
  'عروستي الحلوة اللي ملهاش بديل في قلبي 🕊️',
  'مع بعض لآخر العمر وإلى ما لا نهاية 🎈',
  'أحلى وأعظم مغامرة في الدنيا إني اخترتك 🏡',
];

const BALLOON_COLORS = [
  '#ff6b8b', // rose
  '#f59e0b', // amber
  '#38bdf8', // sky
  '#a855f7', // purple
  '#ec4899', // pink
  '#10b981', // emerald
  '#eab308', // gold
  '#f97316', // orange
];

export default function UpLoveStorySection() {
  const { upLoveStory, name } = BIRTHDAY_CONFIG;
  const chapters = upLoveStory.chapters;

  // Active view: 'movie' (cinematic video) or 'game' (interactive adventure)
  const [activeTab, setActiveTab] = useState<'movie' | 'game'>('movie');

  // Video playback state
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

  // Game state
  const [balloons, setBalloons] = useState<BalloonItem[]>([]);
  const [poppedCount, setPoppedCount] = useState(0);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const [unlockedBadges, setUnlockedBadges] = useState<number[]>([1]);
  const [showGrandReward, setShowGrandReward] = useState(false);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const melodyTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Audio Context on demand
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Play cute balloon pop sound
  const playPopSound = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx || isMuted) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.14);
    } catch {
      // Audio context may not be allowed yet
    }
  }, [getAudioContext, isMuted]);

  // Play fanfare chime on badge unlock / grand win
  const playFanfare = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx || isMuted) return;

      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          if (!ctx || ctx.state === 'closed') return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          gain.gain.setValueAtTime(0.15, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start();
          osc.stop(ctx.currentTime + 0.65);
        }, idx * 110);
      });
    } catch {
      // Audio context restricted
    }
  }, [getAudioContext, isMuted]);

  // Play gentle UP-style romantic waltz notes (3/4 tempo)
  const playUpThemeWaltz = useCallback(() => {
    try {
      const ctx = getAudioContext();
      if (!ctx || isMuted) return;

      // UP-inspired waltz melody sequence (frequencies in Hz)
      const waltzNotes = [
        // Measure 1
        { freq: 392.0, duration: 0.4 },  // G4
        { freq: 329.63, duration: 0.3 }, // E4
        { freq: 329.63, duration: 0.3 }, // E4
        // Measure 2
        { freq: 440.0, duration: 0.4 },  // A4
        { freq: 349.23, duration: 0.3 }, // F4
        { freq: 349.23, duration: 0.3 }, // F4
        // Measure 3
        { freq: 493.88, duration: 0.5 }, // B4
        { freq: 523.25, duration: 0.5 }, // C5
        { freq: 587.33, duration: 0.6 }, // D5
        // Measure 4 (resolution)
        { freq: 523.25, duration: 0.8 }, // C5
      ];

      let noteIndex = 0;
      const playStep = () => {
        if (!ctx || ctx.state === 'closed' || isMuted) return;
        const currentNote = waltzNotes[noteIndex % waltzNotes.length];
        noteIndex++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Music-box / Rhodes soft tone
        osc.type = 'sine';
        osc.frequency.setValueAtTime(currentNote.freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + currentNote.duration + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + currentNote.duration + 0.5);
      };

      if (melodyTimerRef.current) clearInterval(melodyTimerRef.current);
      playStep();
      melodyTimerRef.current = setInterval(playStep, 750);
    } catch {
      // Audio context restricted
    }
  }, [getAudioContext, isMuted]);

  // Stop melody
  const stopMelody = useCallback(() => {
    if (melodyTimerRef.current) {
      clearInterval(melodyTimerRef.current);
      melodyTimerRef.current = null;
    }
  }, []);

  // Handle Video Movie Progress Timer (each scene plays for ~7 seconds)
  useEffect(() => {
    if (activeTab !== 'movie' || !isPlaying) return;

    const SCENE_DURATION_MS = 7500;
    const UPDATE_INTERVAL_MS = 100;
    const stepIncrement = (UPDATE_INTERVAL_MS / SCENE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next chapter
          setCurrentChapterIndex((prevIdx) => (prevIdx + 1) % chapters.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [activeTab, isPlaying, chapters.length]);

  // Start sound on first play interaction
  const togglePlay = () => {
    if (!isPlaying && !hasStartedAudio && !isMuted) {
      playUpThemeWaltz();
      setHasStartedAudio(true);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleSound = () => {
    if (isMuted) {
      setIsMuted(false);
      playUpThemeWaltz();
    } else {
      setIsMuted(true);
      stopMelody();
    }
  };

  // Switch Chapter
  const selectChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setProgress(0);
    if (!unlockedBadges.includes(chapters[index].id)) {
      setUnlockedBadges((prev) => [...prev, chapters[index].id]);
      playFanfare();
    }
  };

  // Spawn Balloons for the Game mode
  useEffect(() => {
    if (activeTab !== 'game') return;

    const initialBalloons: BalloonItem[] = BALLOON_MESSAGES.map((msg, index) => ({
      id: index,
      x: 8 + (index * 11) % 84,
      speed: 14 + (index % 5) * 3,
      color: BALLOON_COLORS[index % BALLOON_COLORS.length],
      size: 48 + (index % 3) * 8,
      popped: false,
      message: msg,
    }));

    setBalloons(initialBalloons);
    setPoppedCount(0);
    setShowGrandReward(false);
  }, [activeTab]);

  // Handle balloon pop
  const handlePopBalloon = (id: number) => {
    playPopSound();
    setBalloons((prev) =>
      prev.map((b) => {
        if (b.id === id && !b.popped) {
          setActiveMessage(b.message);
          return { ...b, popped: true };
        }
        return b;
      })
    );

    setPoppedCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount === BALLOON_MESSAGES.length) {
        setShowGrandReward(true);
        playFanfare();
      }
      return nextCount;
    });
  };

  const currentChapter = chapters[currentChapterIndex];

  return (
    <section className="section-up-story fade-up" id="up-love-story">
      {/* Decorative Floating Balloons In Background */}
      <div className="up-ambient-balloons" aria-hidden="true">
        <span className="ambient-balloon b1">🎈</span>
        <span className="ambient-balloon b2">🎈</span>
        <span className="ambient-balloon b3">🎈</span>
        <span className="ambient-balloon b4">🎈</span>
        <span className="ambient-balloon b5">🎈</span>
      </div>

      <div className="up-story-container">
        {/* Section Header */}
        <div className="up-header-wrapper">
          <span className="section-tag">{upLoveStory.tag}</span>
          <h2 className="up-main-heading">{upLoveStory.heading}</h2>
          <p className="up-subheading arabic-text">{upLoveStory.subtitle}</p>
          <div className="welcome-divider" />
          <p className="up-intro-desc arabic-text">{upLoveStory.description}</p>
        </div>

        {/* View Switcher Tabs */}
        <div className="up-mode-tabs">
          <button
            type="button"
            className={`up-tab-btn ${activeTab === 'movie' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('movie');
              if (!isMuted && isPlaying) playUpThemeWaltz();
            }}
          >
            <span className="tab-icon">🎬</span>
            <span>فيلم الحكاية السينمائي (Movie Mode)</span>
          </button>
          <button
            type="button"
            className={`up-tab-btn ${activeTab === 'game' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('game');
              stopMelody();
            }}
          >
            <span className="tab-icon">🎮</span>
            <span>لعبة مغامرتنا والبلالين (Game Mode)</span>
          </button>
        </div>

        {/* ---------------- MODE 1: CINEMATIC MOVIE VIEWER ---------------- */}
        {activeTab === 'movie' && (
          <div className="up-movie-player">
            {/* Screen Frame */}
            <div className="up-screen-frame">
              {/* Image with Ken Burns animation */}
              <div className={`up-slide-media ${isPlaying ? 'ken-burns' : ''}`}>
                <Image
                  key={currentChapter.id}
                  src={currentChapter.image}
                  alt={currentChapter.title}
                  fill
                  priority
                  className="up-slide-image"
                  sizes="(max-width: 768px) 100vw, 1100px"
                />
              </div>

              {/* Film Grain & Cinematic Overlay */}
              <div className="up-screen-overlay" />

              {/* Floating UP House & Balloons Watermark Ornament */}
              <div className="up-watermark">
                <span>🎈</span>
                <span className="up-watermark-text">Our Adventure Book · سُهيلة & مُـحَـمَّـد</span>
              </div>

              {/* Chapter Badge Floating */}
              <div className="up-chapter-badge">
                <span className="badge-pill">{currentChapter.badge}</span>
                <span className="period-pill">{currentChapter.period}</span>
              </div>

              {/* Subtitle Narration Bar */}
              <div className="up-narration-box">
                <div className="narration-chapter-indicator">
                  الفصل {currentChapterIndex + 1} من {chapters.length}:{' '}
                  <strong>{currentChapter.arabicTitle}</strong>
                </div>
                <blockquote className="narration-arabic arabic-text">
                  {currentChapter.quote}
                </blockquote>
                <p className="narration-english">{currentChapter.englishQuote}</p>
              </div>

              {/* Top Control Overlay (Sound & Play) */}
              <div className="up-top-controls">
                <button
                  type="button"
                  className="up-control-icon-btn"
                  onClick={toggleSound}
                  title={isMuted ? 'تشغيل موسيقى UP' : 'كتم الصوت'}
                  aria-label="Toggle Sound"
                >
                  {isMuted ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Timeline Progress Bar */}
            <div className="up-timeline-track">
              {chapters.map((chap, idx) => (
                <div
                  key={chap.id}
                  className="up-timeline-segment"
                  onClick={() => selectChapter(idx)}
                  title={`انتقل إلى: ${chap.arabicTitle}`}
                >
                  <div
                    className="up-timeline-fill"
                    style={{
                      width:
                        idx < currentChapterIndex
                          ? '100%'
                          : idx === currentChapterIndex
                          ? `${progress}%`
                          : '0%',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Player Bottom Control Bar */}
            <div className="up-player-controls">
              <button
                type="button"
                className="up-nav-btn prev"
                onClick={() =>
                  selectChapter((currentChapterIndex - 1 + chapters.length) % chapters.length)
                }
                aria-label="Previous Chapter"
              >
                ❮ السابق
              </button>

              <button
                type="button"
                className="up-play-toggle-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <>
                    <span className="btn-icon">⏸</span>
                    <span>إيقاف مؤقت</span>
                  </>
                ) : (
                  <>
                    <span className="btn-icon">▶</span>
                    <span>متابعة العرض</span>
                  </>
                )}
              </button>

              <button
                type="button"
                className="up-nav-btn next"
                onClick={() => selectChapter((currentChapterIndex + 1) % chapters.length)}
                aria-label="Next Chapter"
              >
                التالي ❯
              </button>
            </div>

            {/* Chapters Thumbnail Quick-Bar */}
            <div className="up-thumbs-bar">
              {chapters.map((chap, idx) => (
                <button
                  key={chap.id}
                  type="button"
                  className={`up-thumb-card ${idx === currentChapterIndex ? 'active' : ''}`}
                  onClick={() => selectChapter(idx)}
                >
                  <div className="up-thumb-image-wrap">
                    <Image
                      src={chap.image}
                      alt={chap.title}
                      fill
                      className="up-thumb-img"
                      sizes="180px"
                    />
                    <span className="up-thumb-number">{idx + 1}</span>
                  </div>
                  <div className="up-thumb-text">
                    <span className="up-thumb-arabic arabic-text">{chap.arabicTitle}</span>
                    <span className="up-thumb-badge">{chap.badge}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- MODE 2: INTERACTIVE ADVENTURE GAME ---------------- */}
        {activeTab === 'game' && (
          <div className="up-game-arena">
            <div className="game-instructions">
              <div className="game-status-badge">
                <span>🎈 بلالين السعادة المجمعة:</span>
                <strong>
                  {poppedCount} / {BALLOON_MESSAGES.length}
                </strong>
              </div>
              <p className="game-hint arabic-text">
                فرقعي البلالين الطايرة بالضغط عليها لتكتشفي رسايل الحب المخفية واجمعي وسام المغامرة الأبدي! ♡
              </p>
            </div>

            {/* Active message toast */}
            {activeMessage && (
              <div className="game-message-banner fade-in arabic-text">
                <span className="banner-star">✦</span>
                <span className="banner-text">{activeMessage}</span>
                <span className="banner-star">✦</span>
              </div>
            )}

            {/* Floating Balloons Sky Canvas */}
            <div className="game-sky-box">
              {balloons.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  className={`floating-game-balloon ${b.popped ? 'popped' : ''}`}
                  style={{
                    left: `${b.x}%`,
                    animationDuration: `${b.speed}s`,
                    backgroundColor: b.color,
                    width: `${b.size}px`,
                    height: `${b.size * 1.25}px`,
                  }}
                  onClick={() => handlePopBalloon(b.id)}
                  aria-label="Pop Balloon"
                  disabled={b.popped}
                >
                  {!b.popped && (
                    <>
                      <span className="balloon-shine" />
                      <span className="balloon-knot" style={{ borderBottomColor: b.color }} />
                      <span className="balloon-string" />
                      <span className="balloon-heart-inner">♡</span>
                    </>
                  )}
                  {b.popped && <span className="pop-sparkle">✨</span>}
                </button>
              ))}
            </div>

            {/* Grand Reward Modal / Card when all balloons popped */}
            {showGrandReward && (
              <div className="grand-reward-card fade-up">
                <div className="medal-glow">🎖️</div>
                <h3 className="reward-title">وسام كارل وإيلي للحب الأبدي</h3>
                <p className="reward-subtitle arabic-text">
                  ألف مبروك يا أجمل خطيبة {name}! جمعتي كل بلالين السعادة وفتشتي كل أسرار كتاب مغامراتنا ♡
                </p>
                <div className="reward-quote-box arabic-text">
                  «شكراً على كل ابتسامة وكل لحظة حلوة عشناها في هذا العام.. عهدٌ وثيق وقراءة فاتحة جمعت قلبينا، إنتِ أعظم هدية القدر اهداني إياها. عامٌ مضى والعمرُ بكِ يبتسم يا حبيبة قلبي سُهيلة ♡»
                </div>
                <div className="reward-badges-row">
                  {chapters.map((chap) => (
                    <div key={chap.id} className="earned-badge-chip">
                      <span>{chap.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Interactive Adventure Book Flip Viewer */}
            <div className="adventure-book-view">
              <div className="book-cover-header">
                <span className="book-pin">📌</span>
                <h4 className="book-title">Our Adventure Book · كتاب المغامرات التفاعلي</h4>
              </div>
              <div className="book-grid">
                {chapters.map((chap, idx) => (
                  <div
                    key={chap.id}
                    className={`book-page-card ${idx === currentChapterIndex ? 'selected' : ''}`}
                    onClick={() => selectChapter(idx)}
                  >
                    <div className="book-page-img-wrap">
                      <Image
                        src={chap.image}
                        alt={chap.title}
                        fill
                        className="book-page-img"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      <div className="stamp-badge">{chap.badge}</div>
                    </div>
                    <div className="book-page-content">
                      <h5 className="book-page-title arabic-text">{chap.arabicTitle}</h5>
                      <p className="book-page-quote arabic-text">{chap.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
