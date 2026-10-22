'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AudioPlayerProps {
  autoStart?: boolean;
}

interface TrackItem {
  id: string;
  title: string;
  artist: string;
  src: string;
  icon: string;
}

const TRACKS: TrackItem[] = [
  {
    id: 'amr-diab',
    title: 'أنا معاك',
    artist: 'عمرو دياب · Amr Diab',
    src: '/Amr Diab - Ana Maak.mp3',
    icon: '🎵',
  },
  {
    id: 'tamer-hosny',
    title: 'أفلت قلبي',
    artist: 'تامر حسني · Tamer Hosny',
    src: '/Tamer Hosny - Afalt Alby.mp3',
    icon: '🎶',
  },
  {
    id: 'shireen',
    title: 'إنكتبلي عمر',
    artist: 'شيرين عبد الوهاب · Shireen',
    src: '/Shireen Abdul Wahab Enkatble Aomr.mp3',
    icon: '💜',
  },
];

export default function AudioPlayer({ autoStart = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [customAudioSrc, setCustomAudioSrc] = useState<string | null>(null);
  const [customTrackName, setCustomTrackName] = useState<string>('');
  const [isCustomTrack, setIsCustomTrack] = useState(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const hasAutoStartedRef = useRef(false);

  const currentTrack = TRACKS[currentTrackIndex];

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Play current track
  const startPlayback = useCallback(
    (trackIdx?: number) => {
      if (audioRef.current) {
        const idx = trackIdx ?? currentTrackIndex;
        const src = isCustomTrack && customAudioSrc ? customAudioSrc : TRACKS[idx].src;

        if (!audioRef.current.src.endsWith(src)) {
          audioRef.current.src = src;
        }

        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    },
    [currentTrackIndex, isCustomTrack, customAudioSrc]
  );

  // Pause
  const pausePlayback = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  }, []);

  // Toggle Play / Pause
  const togglePlayPause = () => {
    if (isPlaying) {
      pausePlayback();
    } else {
      startPlayback(currentTrackIndex);
    }
  };

  // Next track
  const nextTrack = useCallback(() => {
    setIsCustomTrack(false);
    const nextIdx = (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIdx);
    if (audioRef.current) {
      audioRef.current.src = TRACKS[nextIdx].src;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  // Previous track
  const prevTrack = useCallback(() => {
    setIsCustomTrack(false);
    const prevIdx = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    setCurrentTrackIndex(prevIdx);
    if (audioRef.current) {
      audioRef.current.src = TRACKS[prevIdx].src;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex]);

  // Select Track from playlist
  const handleSelectTrack = (index: number) => {
    setIsCustomTrack(false);
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = TRACKS[index].src;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  // Handle Custom Audio File Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomAudioSrc(url);
      setCustomTrackName(file.name.replace(/\.[^/.]+$/, ''));
      setIsCustomTrack(true);

      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  };

  // Auto-advance to next track when current one ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      if (isCustomTrack) {
        // Loop custom track
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        nextTrack();
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isCustomTrack, nextTrack]);

  // Auto-start only ONCE when envelope is opened
  useEffect(() => {
    if (autoStart && !hasAutoStartedRef.current) {
      hasAutoStartedRef.current = true;
      startPlayback(0);
    }
  }, [autoStart, startPlayback]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Current track display name
  const currentTitle = isCustomTrack && customTrackName
    ? customTrackName
    : currentTrack.title;

  const currentArtist = isCustomTrack && customTrackName
    ? 'أغنية مخصصة'
    : currentTrack.artist;

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={isCustomTrack && customAudioSrc ? customAudioSrc : currentTrack.src}
        preload="auto"
      />

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="audio/*"
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />

      {/* Floating Music Controller Widget */}
      <div className={`music-widget-wrapper ${isMenuOpen ? 'menu-active' : ''}`}>
        {/* Playlist & Settings Drawer */}
        {isMenuOpen && (
          <div className="music-drawer" role="dialog" aria-label="Music Settings">
            <div className="music-drawer-header">
              <span className="drawer-title">قائمة الأغاني ♫</span>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setIsMenuOpen(false)}
                title="إغلاق القائمة"
                aria-label="Close music settings"
              >
                ✕
              </button>
            </div>

            {/* Volume Control */}
            <div className="music-drawer-volume">
              <button
                type="button"
                className="volume-toggle-btn"
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? 'إلغاء الكتم' : 'كتم الصوت'}
                aria-label="Toggle mute"
              >
                {isMuted || volume === 0 ? '🔇' : volume < 0.5 ? '🔉' : '🔊'}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                className="volume-slider"
                aria-label="Volume slider"
              />
              <span className="volume-percent">{Math.round((isMuted ? 0 : volume) * 100)}%</span>
            </div>

            {/* Track Selector List */}
            <div className="music-drawer-tracks">
              {TRACKS.map((track, index) => {
                const isSelected = !isCustomTrack && currentTrackIndex === index;
                return (
                  <button
                    key={track.id}
                    type="button"
                    className={`track-item-btn ${isSelected ? 'active' : ''}`}
                    onClick={() => handleSelectTrack(index)}
                  >
                    <span className="track-icon">{track.icon}</span>
                    <div className="track-details">
                      <div className="track-title-text">{track.title}</div>
                      <div className="track-subtitle-text">{track.artist}</div>
                    </div>
                    {isSelected && (
                      <span className="track-playing-indicator">
                        {isPlaying ? '● شغال' : '○ محدد'}
                      </span>
                    )}
                  </button>
                );
              })}

              {/* Custom upload button */}
              <button
                type="button"
                className={`track-item-btn ${isCustomTrack ? 'active' : ''}`}
                onClick={() => fileInputRef.current?.click()}
              >
                <span className="track-icon">📁</span>
                <div className="track-details">
                  <div className="track-title-text">
                    {isCustomTrack && customTrackName ? customTrackName : 'رفع أغنية من جهازك (MP3)'}
                  </div>
                  <div className="track-subtitle-text">
                    اختر أغنيتك المفضلة من الهاتف أو الكمبيوتر
                  </div>
                </div>
                {isCustomTrack && (
                  <span className="track-playing-indicator">
                    {isPlaying ? '● شغال' : '○ محدد'}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Floating Capsule Bar */}
        <div className={`music-pill-bar ${isPlaying ? 'is-playing' : 'is-paused'}`}>
          {/* Vinyl Disc / Icon */}
          <div
            className={`music-vinyl ${isPlaying ? 'spinning' : ''}`}
            onClick={togglePlayPause}
            title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل الموسيقى'}
          >
            <div className="vinyl-center-dot">♡</div>
          </div>

          {/* Track Info & Equalizer */}
          <div className="music-info-section" onClick={togglePlayPause}>
            <div className="music-now-playing">
              <span className="music-name-marquee">{currentTitle}</span>
              <span className="music-artist-name">{currentArtist}</span>
            </div>

            {/* Equalizer Sound Waves */}
            <div className="music-equalizer">
              <span className="eq-bar bar-1"></span>
              <span className="eq-bar bar-2"></span>
              <span className="eq-bar bar-3"></span>
              <span className="eq-bar bar-4"></span>
              <span className="eq-status-label">
                {isPlaying ? 'شغال الآن' : 'متوقف مؤقتاً'}
              </span>
            </div>
          </div>

          {/* Prev Track Button */}
          <button
            type="button"
            className="music-nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              prevTrack();
            }}
            aria-label="الأغنية السابقة"
            title="الأغنية السابقة"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          {/* THE PROMINENT PAUSE / PLAY BUTTON */}
          <button
            id="music-pause-play-btn"
            type="button"
            className={`music-action-btn ${isPlaying ? 'pause-state' : 'play-state'}`}
            onClick={(e) => {
              e.stopPropagation();
              togglePlayPause();
            }}
            aria-label={isPlaying ? 'إيقاف مؤقت للأغنية (Pause)' : 'تشغيل الأغنية (Play)'}
            title={isPlaying ? 'إيقاف مؤقت (Pause)' : 'تشغيل الأغنية (Play)'}
          >
            {isPlaying ? (
              <svg
                className="btn-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="btn-icon play-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
            <span className="action-btn-label">
              {isPlaying ? 'Pause' : 'Play'}
            </span>
          </button>

          {/* Next Track Button */}
          <button
            type="button"
            className="music-nav-btn"
            onClick={(e) => {
              e.stopPropagation();
              nextTrack();
            }}
            aria-label="الأغنية التالية"
            title="الأغنية التالية"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>

          {/* Settings / Playlist Toggle Button */}
          <button
            type="button"
            className={`music-settings-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="قائمة الأغاني والخيارات"
            title="قائمة الأغاني والخيارات"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
