import { useState, useEffect, useRef } from 'react'
import { getAllProgress } from '../lib/supabase'
import { getTodayIST, PHASES } from '../data/schedule'

// ─── Constants ────────────────────────────────────────────────────────────────

const MONTHS = [
  { y: 2026, m: 4,  label: 'May 2026' },
  { y: 2026, m: 5,  label: 'June 2026' },
  { y: 2026, m: 6,  label: 'July 2026' },
  { y: 2026, m: 7,  label: 'August 2026' },
  { y: 2026, m: 8,  label: 'September 2026' },
  { y: 2026, m: 9,  label: 'October 2026' },
  { y: 2026, m: 10, label: 'November 2026' },
  { y: 2026, m: 11, label: 'December 2026' },
  { y: 2027, m: 0,  label: 'January 2027' },
]

const PHASE_RANGES = [
  { start: '2026-05-17', end: '2026-05-24' },
  { start: '2026-05-25', end: '2026-06-14' },
  { start: '2026-06-15', end: '2026-07-20' },
  { start: '2026-07-21', end: '2026-09-14' },
  { start: '2026-09-15', end: '2026-11-15' },
  { start: '2026-11-16', end: '2027-01-31' },
]

function getPhaseColor(dateStr) {
  for (let i = 0; i < PHASE_RANGES.length; i++) {
    const r = PHASE_RANGES[i]
    if (dateStr >= r.start && dateStr <= r.end) return PHASES[i]?.color ?? null
  }
  return null
}

function isInProgram(dateStr) {
  return dateStr >= '2026-05-17' && dateStr <= '2027-01-31'
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

/* ── RESET ── */
.wrc *, .wrc *::before, .wrc *::after { box-sizing: border-box; }

/* ═══════════════════════════════════════════════
   LOADING SCREEN — NEVER-SEEN-BEFORE SEQUENCE
   ═══════════════════════════════════════════════ */

.wrc-loader {
  position: fixed; inset: 0; z-index: 9999;
  background: #000;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  overflow: hidden;
}

/* Particle field — 40 random sparks via nth-child */
.wrc-particles {
  position: absolute; inset: 0; pointer-events: none;
}

.wrc-particle {
  position: absolute;
  width: 2px; height: 2px; border-radius: 50%;
  background: #00ff50;
  animation: wrcParticleFloat var(--dur, 4s) linear var(--del, 0s) infinite;
  left: var(--lx, 50%); top: 110%;
  opacity: 0;
}
@keyframes wrcParticleFloat {
  0%   { opacity: 0;   transform: translateY(0)      scale(1); }
  10%  { opacity: .8; }
  90%  { opacity: .4; }
  100% { opacity: 0;   transform: translateY(-110vh) scale(.3); }
}

/* Central hex grid loader */
.wrc-hex-stage {
  position: relative; width: 240px; height: 240px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 32px;
}

/* Rotating outer rings */
.wrc-ring {
  position: absolute; border-radius: 50%;
  border: 1px solid transparent;
}
.wrc-ring-1 {
  width: 240px; height: 240px;
  border-top-color: rgba(0,255,80,.5);
  border-right-color: rgba(0,255,80,.15);
  animation: wrcSpin1 3s linear infinite;
}
.wrc-ring-2 {
  width: 200px; height: 200px;
  border-bottom-color: rgba(255,107,26,.6);
  border-left-color: rgba(255,107,26,.1);
  animation: wrcSpin1 2s linear infinite reverse;
}
.wrc-ring-3 {
  width: 160px; height: 160px;
  border-top-color: rgba(255,217,61,.7);
  border-right-color: rgba(255,217,61,.1);
  animation: wrcSpin1 1.5s linear infinite;
}
.wrc-ring-4 {
  width: 120px; height: 120px;
  border-bottom-color: rgba(0,204,255,.6);
  border-left-color: rgba(0,204,255,.1);
  animation: wrcSpin1 1s linear infinite reverse;
}
@keyframes wrcSpin1 { to { transform: rotate(360deg); } }

/* Hex dots on the rings */
.wrc-ring-dot {
  position: absolute; width: 5px; height: 5px;
  border-radius: 50%; transform-origin: 0 0;
}
.wrc-ring-dot::after {
  content: ''; position: absolute;
  inset: 0; border-radius: 50%;
  animation: wrcDotGlow 1s ease-in-out infinite;
}
@keyframes wrcDotGlow { 0%,100% { opacity: .6; } 50% { opacity: 1; box-shadow: 0 0 8px var(--dc); } }

/* Core — beating heart of the loader */
.wrc-core {
  position: relative; width: 72px; height: 72px;
  display: flex; align-items: center; justify-content: center;
}

.wrc-core-bg {
  position: absolute; inset: 0;
  background: radial-gradient(circle, rgba(0,255,80,.12), transparent 70%);
  animation: wrcCorePulse 1.6s ease-in-out infinite;
}
@keyframes wrcCorePulse {
  0%,100% { transform: scale(1);   opacity: .6; }
  50%      { transform: scale(1.6); opacity: 1; }
}

/* SVG hexagon (rendered via CSS clip + borders) */
.wrc-hex {
  position: absolute; width: 52px; height: 60px;
  background: rgba(0,255,80,.06);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: wrcHexSpin 4s linear infinite;
}
@keyframes wrcHexSpin { to { transform: rotate(360deg); } }

.wrc-hex-inner {
  position: absolute; width: 36px; height: 41px;
  background: rgba(0,255,80,.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: wrcHexSpin 3s linear infinite reverse;
}

.wrc-core-icon {
  position: relative; z-index: 2;
  font-family: 'Orbitron', monospace; font-size: 11px; font-weight: 900;
  color: #00ff50; letter-spacing: 1px;
  text-shadow: 0 0 12px #00ff50;
  animation: wrcIconFlicker 3s step-start infinite;
}
@keyframes wrcIconFlicker {
  0%,90%,100% { opacity: 1; }
  91%,93%,95%,97%,99% { opacity: .1; }
  92%,94%,96%,98% { opacity: .8; }
}

/* Sector arcs — triangle slices that fill up */
.wrc-sectors {
  position: absolute; inset: 0; border-radius: 50%;
}
.wrc-sector {
  position: absolute; width: 50%; height: 50%;
  transform-origin: 100% 100%;
  background: rgba(0,255,80,.04);
  animation: wrcSectorFill 3s linear infinite;
}
.wrc-sector:nth-child(1) { transform: rotate(0deg);    animation-delay: 0s; }
.wrc-sector:nth-child(2) { transform: rotate(45deg);   animation-delay: .1s; }
.wrc-sector:nth-child(3) { transform: rotate(90deg);   animation-delay: .2s; }
.wrc-sector:nth-child(4) { transform: rotate(135deg);  animation-delay: .3s; }
.wrc-sector:nth-child(5) { transform: rotate(180deg);  animation-delay: .4s; }
.wrc-sector:nth-child(6) { transform: rotate(225deg);  animation-delay: .5s; }
.wrc-sector:nth-child(7) { transform: rotate(270deg);  animation-delay: .6s; }
.wrc-sector:nth-child(8) { transform: rotate(315deg);  animation-delay: .7s; }
@keyframes wrcSectorFill {
  0%,100% { background: rgba(0,255,80,.02); }
  25%     { background: rgba(0,255,80,.12); }
  50%     { background: rgba(0,255,80,.04); }
}

/* Data streams — diagonal lines raining down */
.wrc-streams {
  position: absolute; inset: 0; pointer-events: none; overflow: hidden;
}
.wrc-stream {
  position: absolute; top: 0; width: 1px;
  background: linear-gradient(180deg, transparent, rgba(0,255,80,.3), rgba(0,255,80,.1), transparent);
  animation: wrcStreamDrop var(--sd, 2s) linear var(--sdel, 0s) infinite;
  left: var(--sl, 10%); height: var(--sh, 80px);
}
@keyframes wrcStreamDrop {
  from { transform: translateY(-200px); }
  to   { transform: translateY(110vh); }
}

/* Horizontal scan beam */
.wrc-scan-beam {
  position: absolute; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, rgba(0,255,80,.4), rgba(0,255,80,.8), rgba(0,255,80,.4), transparent);
  box-shadow: 0 0 12px rgba(0,255,80,.5);
  animation: wrcScanBeam 2.4s ease-in-out infinite;
}
@keyframes wrcScanBeam {
  0%   { top: -5px; opacity: 0; }
  5%   { opacity: 1; }
  95%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* Glitch lines on scan */
.wrc-glitch-line {
  position: absolute; left: 0; right: 0; height: 1px;
  background: rgba(0,255,80,.15);
  animation: wrcGlitchLine var(--gl, 3s) step-start var(--gld, 0s) infinite;
}
@keyframes wrcGlitchLine {
  0%,80%,100% { opacity: 0; transform: scaleX(0); }
  85%          { opacity: 1; transform: scaleX(1); transform-origin: left; }
  90%          { opacity: .4; }
  95%          { opacity: 0; }
}

/* Boot text sequence */
.wrc-boot-wrap {
  width: min(400px, 90vw);
  background: rgba(0,0,0,.8);
  border: 1px solid rgba(0,255,80,.15);
  padding: 16px 20px;
  position: relative; overflow: hidden;
}
.wrc-boot-wrap::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, #00ff50, transparent);
  animation: wrcBorderSweep 2s linear infinite;
}
@keyframes wrcBorderSweep {
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
}

.wrc-boot-line {
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px; letter-spacing: 1px;
  line-height: 1.9;
  opacity: 0;
  animation: wrcBootReveal .1s ease forwards;
  animation-delay: var(--bl, 0s);
}
.wrc-boot-line.green  { color: rgba(0,255,80,.7); }
.wrc-boot-line.orange { color: rgba(255,107,26,.8); }
.wrc-boot-line.yellow { color: rgba(255,217,61,.8); }
.wrc-boot-line.dim    { color: rgba(255,255,255,.2); }
@keyframes wrcBootReveal { to { opacity: 1; } }

/* Progress bar */
.wrc-progress-wrap {
  margin-top: 20px;
  width: min(400px, 90vw);
}
.wrc-progress-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 9px; letter-spacing: 2px; color: rgba(0,255,80,.4);
  display: flex; justify-content: space-between; margin-bottom: 6px;
}
.wrc-progress-track {
  height: 3px; background: rgba(255,255,255,.04);
  border: 1px solid rgba(0,255,80,.1); overflow: hidden; position: relative;
}
.wrc-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff50, #00ccff, #ff6b1a);
  animation: wrcProgressFill 2.8s cubic-bezier(.4,0,.2,1) forwards;
  position: relative; overflow: hidden;
}
.wrc-progress-fill::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
  animation: wrcProgressShimmer 1s linear 1s infinite;
}
@keyframes wrcProgressFill { from { width: 0; } to { width: 100%; } }
@keyframes wrcProgressShimmer { from { transform: translateX(-100%); } to { transform: translateX(400%); } }

/* Corner brackets on loader */
.wrc-corner { position: absolute; width: 24px; height: 24px; }
.wrc-corner-tl { top: 16px; left: 16px; border-top: 1px solid rgba(0,255,80,.5); border-left: 1px solid rgba(0,255,80,.5); animation: wrcCornerPulse 2s ease-in-out infinite; }
.wrc-corner-tr { top: 16px; right: 16px; border-top: 1px solid rgba(0,255,80,.5); border-right: 1px solid rgba(0,255,80,.5); animation: wrcCornerPulse 2s ease-in-out infinite .5s; }
.wrc-corner-bl { bottom: 16px; left: 16px; border-bottom: 1px solid rgba(0,255,80,.5); border-left: 1px solid rgba(0,255,80,.5); animation: wrcCornerPulse 2s ease-in-out infinite 1s; }
.wrc-corner-br { bottom: 16px; right: 16px; border-bottom: 1px solid rgba(0,255,80,.5); border-right: 1px solid rgba(0,255,80,.5); animation: wrcCornerPulse 2s ease-in-out infinite 1.5s; }
@keyframes wrcCornerPulse {
  0%,100% { opacity: .5; }
  50%      { opacity: 1; box-shadow: 0 0 8px rgba(0,255,80,.3); }
}

/* Loader fade out */
.wrc-loader.wrc-done {
  animation: wrcLoaderExit .6s cubic-bezier(.4,0,.2,1) forwards;
}
@keyframes wrcLoaderExit {
  0%   { opacity: 1; transform: scale(1); }
  60%  { opacity: 1; transform: scale(1.04); }
  100% { opacity: 0; transform: scale(.96); pointer-events: none; }
}

/* ═══════════════════════════════════════════════
   MAIN CALENDAR
   ═══════════════════════════════════════════════ */

.wrc-root {
  font-family: 'Rajdhani', sans-serif;
  background: #020408;
  color: #c8d8c8;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.wrc-bg-grid {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(0,255,80,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,80,.025) 1px, transparent 1px);
  background-size: 44px 44px;
  animation: wrcGridDrift 70s linear infinite;
}
@keyframes wrcGridDrift { to { background-position: 44px 44px; } }

.wrc-scanlines {
  position: fixed; inset: 0; z-index: 1; pointer-events: none;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 3px, rgba(0,0,0,.07) 3px, rgba(0,0,0,.07) 4px
  );
}

.wrc-radar {
  position: fixed; top: -70px; right: -70px;
  width: 260px; height: 260px; z-index: 0; pointer-events: none;
  border-radius: 50%;
  border: 1px solid rgba(0,255,80,.05);
  animation: wrcRadar 9s linear infinite;
}
.wrc-radar::before {
  content: '';
  position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(0,255,80,0) 0deg, rgba(0,255,80,.1) 60deg, rgba(0,255,80,0) 90deg);
}
@keyframes wrcRadar { to { transform: rotate(360deg); } }

.wrc-corner-deco { position: fixed; width: 26px; height: 26px; z-index: 2; pointer-events: none; }
.wrc-corner-deco.tl { top: 10px; left: 10px; border-top: 1px solid rgba(0,255,80,.5); border-left: 1px solid rgba(0,255,80,.5); }
.wrc-corner-deco.tr { top: 10px; right: 10px; border-top: 1px solid rgba(0,255,80,.5); border-right: 1px solid rgba(0,255,80,.5); }
.wrc-corner-deco.bl { bottom: 10px; left: 10px; border-bottom: 1px solid rgba(0,255,80,.5); border-left: 1px solid rgba(0,255,80,.5); }
.wrc-corner-deco.br { bottom: 10px; right: 10px; border-bottom: 1px solid rgba(0,255,80,.5); border-right: 1px solid rgba(0,255,80,.5); }

.wrc-content {
  position: relative; z-index: 2;
  max-width: 780px; margin: 0 auto;
  padding: 22px 18px 64px;
}

/* ── HEADER ── */
.wrc-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  padding-bottom: 16px; margin-bottom: 16px;
  border-bottom: 1px solid rgba(0,255,80,.1);
}

.wrc-mission-badge {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 3px; color: rgba(0,255,80,.65);
  display: flex; align-items: center; gap: 7px; margin-bottom: 5px;
}

.wrc-pulse {
  width: 5px; height: 5px; border-radius: 50%;
  background: #00ff50; box-shadow: 0 0 8px #00ff50;
  animation: wrcPulse 1.4s step-start infinite;
}
@keyframes wrcPulse { 50% { opacity: 0; box-shadow: none; } }

.wrc-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(18px,3.5vw,26px); font-weight: 900;
  color: #fff; letter-spacing: 2px; margin: 0;
  text-shadow: 0 0 28px rgba(0,255,80,.2); line-height: 1.1;
}

.wrc-title-sub {
  font-family: 'Share Tech Mono', monospace;
  font-size: 9px; color: rgba(0,255,80,.3); letter-spacing: 2px; margin-top: 4px;
}

.wrc-clock {
  font-family: 'Orbitron', monospace; font-size: 20px; font-weight: 700;
  color: #00ff50; letter-spacing: 2px; text-align: right;
  text-shadow: 0 0 12px rgba(0,255,80,.6);
}
.wrc-date-badge {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; color: rgba(0,255,80,.28); text-align: right; margin-top: 3px;
}
.wrc-day-tag {
  font-family: 'Orbitron', monospace; font-size: 9px; color: #ff6b1a;
  text-align: right; margin-top: 2px; text-shadow: 0 0 8px rgba(255,107,26,.5);
}

/* ── STAT STRIP ── */
.wrc-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
  gap: 7px; margin-bottom: 16px;
}

.wrc-stat {
  background: rgba(0,0,0,.6);
  border: 1px solid rgba(255,255,255,.05);
  padding: 10px 12px; position: relative; overflow: hidden;
  transition: border-color .2s, transform .2s;
}
.wrc-stat::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: var(--sc); box-shadow: 0 0 6px var(--sc);
  transform: scaleX(0); transform-origin: left;
  transition: transform .8s ease var(--sd, 0s);
}
.wrc-stat.wrc-revealed::before { transform: scaleX(1); }
.wrc-stat:hover { border-color: var(--sc); transform: translateY(-2px); }
.wrc-stat-val {
  font-family: 'Orbitron', monospace; font-size: 22px; font-weight: 700;
  color: var(--sc); text-shadow: 0 0 8px var(--sc); line-height: 1;
}
.wrc-stat-lbl {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; letter-spacing: 1.5px;
  color: rgba(255,255,255,.2); text-transform: uppercase; margin-top: 5px;
}

/* ── LEGEND ── */
.wrc-legend {
  display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 14px;
}
.wrc-leg-item { display: flex; align-items: center; gap: 5px; }
.wrc-leg-dot {
  width: 8px; height: 8px; border-radius: 1px;
  background: var(--lc); box-shadow: 0 0 4px var(--lc);
}
.wrc-leg-text {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; color: rgba(255,255,255,.28); letter-spacing: .5px;
}

/* ── PHASE LEGEND ── */
.wrc-section-lbl {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 2.5px; color: rgba(0,255,80,.25);
  text-transform: uppercase; margin-bottom: 9px;
  display: flex; align-items: center; gap: 8px;
}
.wrc-section-lbl::after {
  content: ''; flex: 1; height: 1px;
  background: linear-gradient(90deg, rgba(0,255,80,.1), transparent);
}

.wrc-phase-legend { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
.wrc-ph-pill { display: flex; align-items: center; gap: 5px; }
.wrc-ph-swatch { width: 6px; height: 6px; border-radius: 1px; }
.wrc-ph-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; color: rgba(255,255,255,.28); letter-spacing: .5px;
}

/* ── NAV ── */
.wrc-nav {
  display: flex; align-items: center; justify-content: space-between;
  background: rgba(0,0,0,.5); border: 1px solid rgba(0,255,80,.1);
  padding: 9px 12px; margin-bottom: 12px;
  position: relative; overflow: hidden;
}
.wrc-nav::after {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(0,255,80,.025), transparent);
  animation: wrcNavSweep 4s linear infinite;
}
@keyframes wrcNavSweep {
  from { transform: translateX(-100%); }
  to   { transform: translateX(100%); }
}

.wrc-nav-btn {
  background: transparent; border: 1px solid rgba(0,255,80,.18);
  color: rgba(0,255,80,.6); padding: 5px 14px; cursor: pointer;
  font-family: 'Orbitron', monospace; font-size: 13px;
  transition: all .2s;
}
.wrc-nav-btn:hover:not(:disabled) {
  background: rgba(0,255,80,.07); border-color: rgba(0,255,80,.5);
  box-shadow: 0 0 10px rgba(0,255,80,.15);
}
.wrc-nav-btn:disabled { opacity: .15; cursor: not-allowed; }

.wrc-month-name {
  font-family: 'Orbitron', monospace; font-size: 13px; font-weight: 700;
  color: #fff; letter-spacing: 1px; text-align: center;
}
.wrc-month-sub {
  font-family: 'Share Tech Mono', monospace; font-size: 8px;
  color: rgba(0,255,80,.22); margin-top: 2px; text-align: center; letter-spacing: 1px;
}

/* ── DAY HEADERS ── */
.wrc-day-hdrs {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; margin-bottom: 3px;
}
.wrc-day-hdr {
  text-align: center; font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1px; color: rgba(0,255,80,.18); padding: 4px 0;
}

/* ── CALENDAR GRID ── */
.wrc-grid {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; margin-bottom: 16px;
}

/* ── DAY CELL ── */
.wrc-day {
  aspect-ratio: 1; min-height: 44px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  border: 1px solid rgba(255,255,255,.04);
  position: relative; overflow: hidden;
  cursor: default;
  background: transparent;
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
}

/* In-program: phase-tinted */
.wrc-day.in-prog {
  cursor: pointer;
  background: var(--pc-bg, rgba(0,255,80,.02));
  border-color: var(--pc-border, rgba(0,255,80,.1));
}

/* Appear animation */
.wrc-day.in-prog {
  animation: wrcCellAppear 350ms cubic-bezier(.34,1.56,.64,1) both;
  animation-delay: var(--ci, 0s);
}
@keyframes wrcCellAppear {
  from { opacity: 0; transform: scale(.6); }
  to   { opacity: 1; transform: scale(1); }
}

/* Hover effect */
.wrc-day.in-prog:hover {
  transform: scale(1.1); z-index: 5;
  border-color: rgba(0,255,80,.4) !important;
  background: rgba(0,255,80,.07) !important;
}

/* Scan effect on hover */
.wrc-day.in-prog::before {
  content: '';
  position: absolute; left: 0; right: 0; height: 40%; top: -50%;
  background: linear-gradient(180deg, transparent, rgba(0,255,80,.06), transparent);
  pointer-events: none;
}
.wrc-day.in-prog:hover::before {
  animation: wrcCellScan .5s ease forwards;
}
@keyframes wrcCellScan {
  from { top: -50%; }
  to   { top: 110%; }
}

/* FULL */
.wrc-day.full {
  background: rgba(57,255,20,.1) !important;
  border-color: rgba(57,255,20,.5) !important;
  box-shadow: 0 0 10px rgba(57,255,20,.2) !important;
}
.wrc-day.full::after {
  content: '✓';
  position: absolute; top: 2px; right: 3px;
  font-size: 7px; color: rgba(57,255,20,.7);
  font-family: 'Share Tech Mono', monospace;
}

/* PARTIAL */
.wrc-day.partial {
  background: rgba(255,217,61,.08) !important;
  border-color: rgba(255,217,61,.35) !important;
}

/* MISSED */
.wrc-day.missed {
  background: rgba(255,0,0,.025) !important;
  border-color: rgba(255,0,0,.1) !important;
}

/* TODAY */
.wrc-day.today {
  background: rgba(255,107,26,.18) !important;
  border-color: #ff6b1a !important;
  animation: wrcCellAppear 350ms cubic-bezier(.34,1.56,.64,1) both var(--ci, 0s),
             wrcTodayPulse 2.8s ease-in-out infinite calc(var(--ci, 0s) + .4s) !important;
}
@keyframes wrcTodayPulse {
  0%,100% { box-shadow: 0 0 10px rgba(255,107,26,.4), inset 0 0 8px rgba(255,107,26,.08); }
  50%      { box-shadow: 0 0 28px rgba(255,107,26,.7), inset 0 0 18px rgba(255,107,26,.18); }
}

.wrc-day-num {
  font-family: 'Orbitron', monospace; font-size: 10px; line-height: 1;
  color: rgba(255,255,255,.1);
}
.wrc-day.in-prog .wrc-day-num { color: rgba(255,255,255,.3); }
.wrc-day.today   .wrc-day-num { color: #fff; font-weight: 700; font-size: 11px; }
.wrc-day.full    .wrc-day-num { color: #39ff14; }
.wrc-day.partial .wrc-day-num { color: #ffd93d; }
.wrc-day.missed  .wrc-day-num { color: rgba(255,255,255,.1); text-decoration: line-through; text-decoration-color: rgba(255,50,50,.3); }

/* Dots for partial */
.wrc-dots { display: flex; gap: 2px; margin-top: 3px; }
.wrc-dot { width: 3px; height: 3px; border-radius: 50%; }

/* Today blip */
.wrc-today-blip {
  width: 4px; height: 4px; border-radius: 50%;
  background: #ff6b1a; box-shadow: 0 0 5px #ff6b1a; margin-top: 3px;
  animation: wrcBlipPulse 1.6s ease-in-out infinite;
}
@keyframes wrcBlipPulse { 50% { opacity: .3; box-shadow: 0 0 2px #ff6b1a; } }

/* Tooltip */
.wrc-tooltip {
  position: absolute; bottom: calc(100% + 5px); left: 50%;
  transform: translateX(-50%);
  background: rgba(0,4,0,.96); border: 1px solid rgba(0,255,80,.22);
  padding: 3px 8px; font-family: 'Share Tech Mono', monospace; font-size: 8px;
  color: rgba(0,255,80,.9); white-space: nowrap; z-index: 20; pointer-events: none;
  letter-spacing: .5px; box-shadow: 0 0 12px rgba(0,255,80,.1);
}
.wrc-tooltip::after {
  content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 4px solid transparent; border-top-color: rgba(0,255,80,.22);
}

/* ── FOOTER ── */
.wrc-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 16px; margin-top: 6px; border-top: 1px solid rgba(0,255,80,.07);
}
.wrc-footer-meta {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; color: rgba(0,255,80,.18); line-height: 2;
}
.wrc-objective {
  font-family: 'Orbitron', monospace; font-size: 11px; font-weight: 900;
  letter-spacing: 1px; text-transform: uppercase;
  padding: 9px 18px; background: rgba(0,0,0,.8);
  border: 1px solid rgba(255,217,61,.25); color: #ffd93d;
  text-shadow: 0 0 12px rgba(255,217,61,.4);
  animation: wrcObjPulse 5s ease-in-out infinite; position: relative; overflow: hidden;
}
.wrc-objective::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,217,61,.05), transparent);
  animation: wrcNavSweep 3s linear infinite;
}
@keyframes wrcObjPulse {
  0%,100% { box-shadow: 0 0 8px rgba(255,217,61,.06); }
  50%      { box-shadow: 0 0 28px rgba(255,217,61,.2); }
}

/* Cal content enter */
.wrc-cal-content {
  animation: wrcCalEnter .5s cubic-bezier(.34,1.56,.64,1) forwards;
}
@keyframes wrcCalEnter {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
`

function useCSS() {
  useEffect(() => {
    if (document.getElementById('war-cal-v2')) return
    const tag = document.createElement('style')
    tag.id = 'war-cal-v2'
    tag.textContent = CAL_CSS
    document.head.appendChild(tag)
  }, [])
}

// ─── Live Clock ───────────────────────────────────────────────────────────────

function LiveClock() {
  const fmt = () => {
    const n = new Date()
    return [n.getHours(), n.getMinutes(), n.getSeconds()]
      .map(v => String(v).padStart(2, '0')).join(':')
  }
  const [t, setT] = useState(fmt)
  useEffect(() => { const id = setInterval(() => setT(fmt()), 1000); return () => clearInterval(id) }, [])
  return <div className="wrc-clock">{t}</div>
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ label, value, color, delay = 0 }) {
  const [rev, setRev] = useState(false)
  useEffect(() => { const id = setTimeout(() => setRev(true), delay); return () => clearTimeout(id) }, [delay])
  return (
    <div className={`wrc-stat${rev ? ' wrc-revealed' : ''}`} style={{ '--sc': color, '--sd': `${delay / 1000}s` }}>
      <div className="wrc-stat-val">{value}</div>
      <div className="wrc-stat-lbl">{label}</div>
    </div>
  )
}

// ─── Day Cell ─────────────────────────────────────────────────────────────────

function DayCell({ day, dateStr, ip, isToday, prog, phaseColor, cellIndex, onSelect }) {
  const [hovered, setHovered] = useState(false)
  const today = getTodayIST()
  const isFuture = dateStr > today
  const isPastMissed = dateStr < today && !isToday && ip && !prog

  let cls = 'wrc-day'
  if (ip) cls += ' in-prog'
  if (isToday) cls += ' today'
  else if (prog?.status === 'full')    cls += ' full'
  else if (prog?.status === 'partial') cls += ' partial'
  else if (isPastMissed)               cls += ' missed'

  const pcBg     = phaseColor ? `${phaseColor}08` : undefined
  const pcBorder = phaseColor ? `${phaseColor}14` : undefined

  return (
    <div
      className={cls}
      style={{
        '--ci': `${cellIndex * 16}ms`,
        '--pc-bg': pcBg,
        '--pc-border': pcBorder,
      }}
      onClick={() => ip && onSelect && onSelect(dateStr)}
      onMouseEnter={() => ip && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && ip && (
        <div className="wrc-tooltip">
          {dateStr}
          {prog ? ` · ${prog.done}/${prog.total}` : isFuture ? ' · upcoming' : ' · no data'}
        </div>
      )}

      <span className="wrc-day-num">{day}</span>

      {prog?.status === 'partial' && prog.total > 0 && (
        <div className="wrc-dots">
          {Array.from({ length: Math.min(prog.total, 5) }, (_, i) => (
            <div key={i} className="wrc-dot" style={{
              background: i < prog.done ? '#ffd93d' : 'rgba(255,255,255,.07)',
              boxShadow: i < prog.done ? '0 0 3px #ffd93d' : undefined,
            }} />
          ))}
        </div>
      )}

      {isToday && !prog && <div className="wrc-today-blip" />}
    </div>
  )
}

// ─── Loader ───────────────────────────────────────────────────────────────────

const BOOT_LINES = [
  { text: '> INITIALIZING CRACKIT WAR ROOM SYSTEMS...', cls: 'green',  delay: 0.05 },
  { text: '> DECRYPTING MISSION DATA PACKETS...',       cls: 'dim',    delay: 0.3  },
  { text: '> SATELLITE UPLINK ESTABLISHED',             cls: 'green',  delay: 0.55 },
  { text: '> LOADING PHASE SECTOR MAP...',              cls: 'dim',    delay: 0.8  },
  { text: '⚠ INTEL: DAY 2 · PHASE 1 · JAVA CORE',      cls: 'orange', delay: 1.05 },
  { text: '> CROSS-REFERENCING PROGRESS DATABASE...',   cls: 'dim',    delay: 1.3  },
  { text: '> BATTLE CALENDAR RENDER ENGINE READY',      cls: 'yellow', delay: 1.6  },
  { text: '> ALL SYSTEMS NOMINAL. LAUNCHING...',        cls: 'green',  delay: 1.85 },
]

const PARTICLE_DATA = Array.from({ length: 36 }, (_, i) => ({
  lx: `${Math.round(Math.random() * 98)}%`,
  dur: `${(2.5 + Math.random() * 4).toFixed(1)}s`,
  del: `${(Math.random() * 3).toFixed(1)}s`,
}))

const STREAM_DATA = Array.from({ length: 20 }, (_, i) => ({
  sl: `${Math.round(Math.random() * 95)}%`,
  sd: `${(1.2 + Math.random() * 2.5).toFixed(1)}s`,
  sdel: `${(Math.random() * 2).toFixed(1)}s`,
  sh: `${Math.round(50 + Math.random() * 100)}px`,
}))

const GLITCH_LINES = Array.from({ length: 8 }, (_, i) => ({
  top: `${Math.round(10 + Math.random() * 80)}%`,
  gl: `${(2 + Math.random() * 4).toFixed(1)}s`,
  gld: `${(Math.random() * 2).toFixed(1)}s`,
}))

function Loader({ onDone }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, 600)
    }, 2800)
    return () => clearTimeout(id)
  }, [onDone])

  return (
    <div className={`wrc-loader${exiting ? ' wrc-done' : ''}`}>
      {/* Corner brackets */}
      <div className="wrc-corner wrc-corner-tl" />
      <div className="wrc-corner wrc-corner-tr" />
      <div className="wrc-corner wrc-corner-bl" />
      <div className="wrc-corner wrc-corner-br" />

      {/* Floating particles */}
      <div className="wrc-particles">
        {PARTICLE_DATA.map((p, i) => (
          <div key={i} className="wrc-particle"
            style={{ '--lx': p.lx, '--dur': p.dur, '--del': p.del }} />
        ))}
      </div>

      {/* Data streams */}
      <div className="wrc-streams">
        {STREAM_DATA.map((s, i) => (
          <div key={i} className="wrc-stream"
            style={{ '--sl': s.sl, '--sd': s.sd, '--sdel': s.sdel, '--sh': s.sh }} />
        ))}
        {/* Glitch lines */}
        {GLITCH_LINES.map((g, i) => (
          <div key={`g${i}`} className="wrc-glitch-line"
            style={{ top: g.top, '--gl': g.gl, '--gld': g.gld }} />
        ))}
        {/* Scan beam */}
        <div className="wrc-scan-beam" />
      </div>

      {/* Central hex stage */}
      <div className="wrc-hex-stage">
        <div className="wrc-ring wrc-ring-1" />
        <div className="wrc-ring wrc-ring-2" />
        <div className="wrc-ring wrc-ring-3" />
        <div className="wrc-ring wrc-ring-4" />

        <div className="wrc-sectors">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="wrc-sector" />
          ))}
        </div>

        <div className="wrc-core">
          <div className="wrc-core-bg" />
          <div className="wrc-hex" />
          <div className="wrc-hex-inner" />
          <div className="wrc-core-icon">WAR</div>
        </div>
      </div>

      {/* Boot text */}
      <div className="wrc-boot-wrap">
        {BOOT_LINES.map((line, i) => (
          <div key={i} className={`wrc-boot-line ${line.cls}`}
            style={{ '--bl': `${line.delay}s` }}>
            {line.text}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="wrc-progress-wrap">
        <div className="wrc-progress-label">
          <span>SYSTEM BOOT</span><span>100%</span>
        </div>
        <div className="wrc-progress-track">
          <div className="wrc-progress-fill" />
        </div>
      </div>
    </div>
  )
}

// ─── Main Calendar ────────────────────────────────────────────────────────────

export default function CalendarView({ onSelectDate }) {
  useCSS()

  const today = getTodayIST()

  const [loading, setLoading]   = useState(true)
  const [booting, setBooting]   = useState(true)
  const [progMap, setProgMap]   = useState({})
  const [ymi, setYmi]           = useState(() => {
    const now = new Date()
    const idx = MONTHS.findIndex(x => x.y === now.getFullYear() && x.m === now.getMonth())
    return Math.max(0, idx >= 0 ? idx : 0)
  })

  useEffect(() => {
    getAllProgress().then(data => {
      const map = {}
      if (Array.isArray(data)) {
        data.forEach(p => {
          try {
            const vals  = Object.values(p.checks || {})
            const done  = vals.filter(Boolean).length
            const total = vals.length
            if (total > 0) map[p.date] = {
              status: vals.every(Boolean) ? 'full' : 'partial',
              done, total,
            }
          } catch {}
        })
      }
      setProgMap(map)
    }).catch(() => {}).finally(() => setLoading(false))
  }, [])

  // ── derived stats ─────────────────────────────────────────────────────────

  const { y, m, label } = MONTHS[ymi]
  const daysInMonth      = new Date(y, m + 1, 0).getDate()
  const firstDay         = new Date(y, m, 1).getDay()
  const ds = d => `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

  const monthDays    = Array.from({ length: daysInMonth }, (_, i) => ds(i + 1))
  const monthInProg  = monthDays.filter(isInProgram)
  const monthFull    = monthInProg.filter(d => progMap[d]?.status === 'full').length
  const monthPartial = monthInProg.filter(d => progMap[d]?.status === 'partial').length

  let streak = 0
  let check = new Date(today + 'T00:00:00')
  for (let i = 0; i < 300; i++) {
    const ds2 = `${check.getFullYear()}-${String(check.getMonth()+1).padStart(2,'0')}-${String(check.getDate()).padStart(2,'0')}`
    if (!isInProgram(ds2)) break
    const s = progMap[ds2]?.status
    if (s === 'full' || s === 'partial') streak++
    else break
    check = new Date(check.getTime() - 86400000)
  }

  const currentPhaseId = PHASES.find((p, i) => {
    const r = PHASE_RANGES[i]; return r && today >= r.start && today <= r.end
  })?.id ?? 1

  const dayNum = (() => {
    if (!isInProgram(today)) return null
    const start = new Date('2026-05-17')
    const curr  = new Date(today + 'T00:00:00')
    return Math.floor((curr - start) / 86400000) + 1
  })()

  // ── render ────────────────────────────────────────────────────────────────

  if (booting) {
    return (
      <div className="wrc">
        <Loader onDone={() => setBooting(false)} />
      </div>
    )
  }

  return (
    <div className="wrc">
      <div className="wrc-root">
        <div className="wrc-bg-grid" />
        <div className="wrc-scanlines" />
        <div className="wrc-radar" />
        <div className="wrc-corner-deco tl" />
        <div className="wrc-corner-deco tr" />
        <div className="wrc-corner-deco bl" />
        <div className="wrc-corner-deco br" />

        <div className="wrc-content wrc-cal-content">

          {/* ── HEADER ── */}
          <div className="wrc-header">
            <div>
              <div className="wrc-mission-badge">
                <div className="wrc-pulse" />
                MISSION CALENDAR · CLASSIFIED
              </div>
              <h1 className="wrc-title">📅 Battle Map</h1>
              <div className="wrc-title-sub">SELECT SECTOR · VIEW DAILY OPS · 260-DAY WAR</div>
            </div>
            <div>
              <LiveClock />
              <div className="wrc-date-badge">{today}</div>
              <div className="wrc-day-tag">DAY {dayNum ?? '—'} · PHASE {currentPhaseId}</div>
            </div>
          </div>

          {/* ── STAT STRIP ── */}
          <div className="wrc-stats">
            <StatCard label="Full Days"  value={monthFull}            color="#39ff14" delay={80}  />
            <StatCard label="Partial"    value={monthPartial}          color="#ffd93d" delay={160} />
            <StatCard label="In Sector"  value={monthInProg.length}    color="rgba(0,255,80,.5)" delay={240} />
            <StatCard label="Streak 🔥"  value={`${streak}`}           color="#ff6b1a" delay={320} />
          </div>

          {/* ── LEGEND ── */}
          <div className="wrc-legend">
            {[
              { color: '#ff6b1a',               label: 'TODAY'      },
              { color: '#39ff14',               label: 'ALL DONE'   },
              { color: '#ffd93d',               label: 'PARTIAL'    },
              { color: 'rgba(0,255,80,.2)',      label: 'IN PROGRAM' },
              { color: 'rgba(255,50,50,.25)',    label: 'MISSED'     },
            ].map(x => (
              <div key={x.label} className="wrc-leg-item">
                <div className="wrc-leg-dot" style={{ '--lc': x.color, background: x.color, boxShadow: `0 0 4px ${x.color}` }} />
                <span className="wrc-leg-text">{x.label}</span>
              </div>
            ))}
          </div>

          {/* ── PHASE LEGEND ── */}
          <div className="wrc-section-lbl">Phase Sectors</div>
          <div className="wrc-phase-legend">
            {PHASES.map(p => (
              <div key={p.id} className="wrc-ph-pill">
                <div className="wrc-ph-swatch" style={{ background: p.color, boxShadow: `0 0 4px ${p.color}` }} />
                <span className="wrc-ph-label">P{p.id}: {p.name || p.label}</span>
              </div>
            ))}
          </div>

          {/* ── NAV ── */}
          <div className="wrc-nav">
            <button className="wrc-nav-btn" onClick={() => setYmi(i => Math.max(0, i - 1))}
              disabled={ymi === 0}>←</button>
            <div>
              <div className="wrc-month-name">{label.toUpperCase()}</div>
              <div className="wrc-month-sub">{ymi + 1} / {MONTHS.length} · SECTOR</div>
            </div>
            <button className="wrc-nav-btn" onClick={() => setYmi(i => Math.min(MONTHS.length - 1, i + 1))}
              disabled={ymi === MONTHS.length - 1}>→</button>
          </div>

          {/* ── DAY HEADERS ── */}
          <div className="wrc-day-hdrs">
            {['SUN','MON','TUE','WED','THU','FRI','SAT'].map(d => (
              <div key={d} className="wrc-day-hdr">{d}</div>
            ))}
          </div>

          {/* ── GRID ── */}
          <div className="wrc-grid">
            {/* Empty prefix cells */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`e${i}`} style={{ aspectRatio: '1' }} />
            ))}

            {/* Day cells */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day     = i + 1
              const dateStr = ds(day)
              const ip      = isInProgram(dateStr)
              const isToday = dateStr === today
              const prog    = progMap[dateStr]
              const pc      = getPhaseColor(dateStr)
              const cellIndex = firstDay + i

              return (
                <DayCell
                  key={day}
                  day={day}
                  dateStr={dateStr}
                  ip={ip}
                  isToday={isToday}
                  prog={prog}
                  phaseColor={pc}
                  cellIndex={cellIndex}
                  onSelect={onSelectDate}
                />
              )
            })}
          </div>

          {/* ── FOOTER ── */}
          <div className="wrc-footer">
            <div className="wrc-footer-meta">
              OPERATION CRACKIT<br />
              260 DAYS · 6 PHASES<br />
              MAY 17 2026 → JAN 31 2027
            </div>
            <div className="wrc-objective">🎯 Microsoft · Top MNC</div>
          </div>

        </div>
      </div>
    </div>
  )
}