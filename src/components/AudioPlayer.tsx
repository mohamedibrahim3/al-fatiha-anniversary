'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { BIRTHDAY_CONFIG } from '@/lib/config';

interface AudioPlayerProps {
  autoStart?: boolean;
}

export default function AudioPlayer({ autoStart = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Fallback gentle romantic acoustic chime generator using Web Audio API
  const playRomanticChime = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Romantic chord notes in Hz (Soft Cmaj7, Am9, Fmaj7)
      const chordNotes = [
        [261.63, 329.63, 392.0, 493.88], // Cmaj7
        [220.0, 261.63, 329.63, 392.0],  // Am7
        [174.61, 220.0, 261.63, 329.63], // Fmaj7
        [196.0, 246.94, 293.66, 392.0],  // G
      ];

      let chordIndex = 0;
      const playNextChord = () => {
        const chord = chordNotes[chordIndex % chordNotes.length];
        chordIndex++;

        chord.forEach((freq, i) => {
          setTimeout(() => {
            if (!ctx || ctx.state === 'closed') return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            // Soft romantic envelope
            gain.gain.setValueAtTime(0.001, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 3.2);
          }, i * 280);
        });
      };

      playNextChord();
      synthIntervalRef.current = setInterval(playNextChord, 4200);
    } catch {
      // Audio context might be restricted
    }
  }, []);

  const stopSynth = useCallback(() => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  }, []);

  const startMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Fallback to synthesized ambient chimes
          playRomanticChime();
          setIsPlaying(true);
        });
    } else {
      playRomanticChime();
      setIsPlaying(true);
    }
  }, [playRomanticChime]);

  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopSynth();
    setIsPlaying(false);
  }, [stopSynth]);

  const toggleMusic = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    if (autoStart && !isPlaying) {
      startMusic();
    }
  }, [autoStart, isPlaying, startMusic]);

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, [stopSynth]);

  return (
    <>
      <audio
        ref={audioRef}
        src={BIRTHDAY_CONFIG.assets.musicSrc}
        preload="auto"
        loop
      />
      <button
        id="music-toggle"
        className={`music-toggle ${isPlaying ? 'playing' : ''}`}
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Pause Music' : 'Play Romantic Music'}
      >
        <span>{isPlaying ? '♪' : '♫'}</span>
      </button>
    </>
  );
}
