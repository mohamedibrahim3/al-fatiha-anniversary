# 🎂 Happy Birthday, My Love — Toti (Birthday Invitation Website)

A luxury, romantic birthday invitation website crafted with **Next.js 16**, TypeScript, and bespoke CSS styling. Inspired by the elegant visual identity of fine wedding invitations, transformed into a magical birthday celebration for **Toti** on **January 1, 2027**.

---

## ✨ Features & Highlights

- **💌 Interactive Envelope Preloader**:
  - Realistic 3D parchment envelope with a gold-bordered wax seal stamped with **"T"**.
  - Interactive opening trigger ("Click to open the Invitation" / "اضغط لفتح الدعوة").
  - Smooth seal breaking and envelope unfold animation that reveals the website.
- **🎵 Romantic Background Music**:
  - Floating circular toggle button with pulsing audio waves.
  - Automatically starts softly when the invitation envelope is unsealed.
  - Built-in Web Audio API romantic chime synthesizer fallback if an external audio file is not provided.
- **🌹 Hero Section**:
  - Atmospheric candlelit background with ambient bokeh and subtle floating golden starlight particles.
  - Elegant serif and script typography (*Happy Birthday, My Love — Toti*).
  - Diamond rule ornament and date: `1 · January · 2027`.
  - Scroll indicator cue.
- **📜 Romantic Welcome Letter**:
  - Heartfelt letter in English paired with graceful Arabic poetic calligraphy (*Amiri* font).
- **⏳ Real-Time Countdown Timer**:
  - Days, Hours, Minutes, and Seconds counting down live to **January 1, 2027 (00:00:00)**.
- **🗓️ Save The Date Calendar**:
  - January 2027 vintage sheet highlighting the 1st of January with a glowing rose-gold ring and heart badge.
- **📸 Treasured Memories Carousel**:
  - Interactive touch-friendly photo carousel with smooth transitions, autoplay, dot indicators, and captions.
- **🕰️ Celebration Timeline / Program**:
  - Chronological schedule cards (Candlelight Welcome, Entrance & Cake Cutting, Romantic Dinner, Starlight Wishes & Dance).
- **📍 Venue & Location**:
  - Venue card with address, dress code hints, and direct **Google Maps** button.
- **📋 Event Guidelines**:
  - Elegant cards for dress code and attendance notes in English and Arabic.
- **💖 Closing & Footer**:
  - Romantic love quote, signature, and interactive share button (copies invitation link to clipboard).

---

## 🛠️ How to Customize

All configuration, text, schedule, and assets are centralized in one file:

📂 [`src/lib/config.ts`](file:///C:/Users/Mohamed%20Ibrahim/.gemini/antigravity-ide/scratch/toti-birthday/src/lib/config.ts)

You can easily change:
- **Name**: `name: 'Toti'`
- **Date**: `targetDate: '2027-01-01T00:00:00'`
- **Love Letter / Texts**: `welcome.body1`, `welcome.arabicQuote`
- **Schedule**: `program: [...]`
- **Venue**: `venue.name`, `venue.address`, `venue.mapsUrl`
- **Memories**: Add or swap image paths in `memories: [...]`

---

## 🚀 Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:
```bash
npm run build
npm run start
```
