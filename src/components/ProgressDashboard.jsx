import { useState, useEffect, useRef } from 'react'
import { getAllProgress, getLeetcodeLog, logLeetcode } from '../lib/supabase'
import { getTotalDays, getTodayIST, PHASES, getDayNumber } from '../data/schedule'

// ─── Constants ────────────────────────────────────────────────────────────────

const PATTERNS = [
  'Array','Two Pointers','Sliding Window','HashMap','Binary Search',
  'Stack','Queue','Linked List','Trees','BST','Heaps','Graph',
  'BFS','DFS','DP','Greedy','Trie','Backtracking','Intervals','Math',
]
const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

const PHASE_RANGES = [
  { start: '2026-05-17', end: '2026-05-24' },
  { start: '2026-05-25', end: '2026-06-14' },
  { start: '2026-06-15', end: '2026-07-20' },
  { start: '2026-07-21', end: '2026-09-14' },
  { start: '2026-09-15', end: '2026-11-15' },
  { start: '2026-11-16', end: '2027-01-31' },
]

const DIFF_META = {
  Easy:   { color: '#39ff14', glow: 'rgba(57,255,20,0.5)',   bg: 'rgba(57,255,20,0.07)'   },
  Medium: { color: '#ffd93d', glow: 'rgba(255,217,61,0.5)',  bg: 'rgba(255,217,61,0.07)'  },
  Hard:   { color: '#ff2d78', glow: 'rgba(255,45,120,0.5)',  bg: 'rgba(255,45,120,0.07)'  },
}

const WEAPON_SYSTEMS = [
  { label: 'Java Core',    icon: '☕', color: '#f97316', glow: 'rgba(249,115,22,0.4)',  readiness: 'OPERATIONAL', phase: 1 },
  { label: 'DSA Arsenal',  icon: '⚡', color: '#a855f7', glow: 'rgba(168,85,247,0.4)',  readiness: 'CHARGING',    phase: 2 },
  { label: 'Frontend',     icon: '🌐', color: '#4d96ff', glow: 'rgba(77,150,255,0.4)',  readiness: 'STANDBY',     phase: 3 },
  { label: 'Spring Boot',  icon: '🚀', color: '#6bcb77', glow: 'rgba(107,203,119,0.4)', readiness: 'OFFLINE',     phase: 4 },
]

const TICKER_MESSAGES = [
  '⚠ MISSION DAY 2 · PHASE 1 ACTIVE · JAVA FOUNDATIONS IN PROGRESS',
  '⬛ DSA TARGET: A2Z 474 problems → S79 79 problems → BLIND75 75 problems',
  '🎯 OBJECTIVE: MICROSOFT / TOP MNC OFFER · JAN 31 2027',
  '⚡ RULE: Push to GitHub EVERY. SINGLE. DAY. Non-negotiable.',
  '🔥 No DSA until Day 9. Java instinct must come first.',
  '📡 College starts Jun 8 · Evening-only mode · 3 tasks · ~3 hrs',
  '🏆 End state: 180+ Codolio · Full-stack live · 30+ applications sent',
]

// ─── Global CSS injection ─────────────────────────────────────────────────────

const WAR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

.wr-root *, .wr-root *::before, .wr-root *::after { box-sizing: border-box; }

.wr-root {
  font-family: 'Rajdhani', sans-serif;
  background: #020408;
  color: #c8d8c8;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* ── ANIMATED GRID BACKGROUND ── */
.wr-grid {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(0,255,80,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,80,.03) 1px, transparent 1px);
  background-size: 44px 44px;
  animation: wrGridDrift 60s linear infinite;
}
@keyframes wrGridDrift { to { background-position: 44px 44px; } }

/* ── SCANLINES ── */
.wr-scanlines {
  position: fixed; inset: 0; z-index: 1; pointer-events: none;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 3px,
    rgba(0,0,0,.08) 3px, rgba(0,0,0,.08) 4px
  );
}

/* ── RADAR PULSE (top right corner) ── */
.wr-radar {
  position: fixed; top: -60px; right: -60px;
  width: 240px; height: 240px; z-index: 0; pointer-events: none;
  border-radius: 50%;
  border: 1px solid rgba(0,255,80,.06);
  animation: wrRadarSpin 8s linear infinite;
}
.wr-radar::before {
  content: '';
  position: absolute; inset: 0;
  background: conic-gradient(from 0deg, rgba(0,255,80,0) 0deg, rgba(0,255,80,.12) 60deg, rgba(0,255,80,0) 90deg);
}
.wr-radar::after {
  content: '';
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 160px; height: 160px;
  border-radius: 50%;
  border: 1px solid rgba(0,255,80,.04);
}
@keyframes wrRadarSpin { to { transform: rotate(360deg); } }

/* ── CORNER BRACKETS ── */
.wr-corner { position: fixed; width: 28px; height: 28px; z-index: 2; pointer-events: none; }
.wr-corner-tl { top: 12px; left: 12px; border-top: 1px solid rgba(0,255,80,.5); border-left: 1px solid rgba(0,255,80,.5); }
.wr-corner-tr { top: 12px; right: 12px; border-top: 1px solid rgba(0,255,80,.5); border-right: 1px solid rgba(0,255,80,.5); }
.wr-corner-bl { bottom: 12px; left: 12px; border-bottom: 1px solid rgba(0,255,80,.5); border-left: 1px solid rgba(0,255,80,.5); }
.wr-corner-br { bottom: 12px; right: 12px; border-bottom: 1px solid rgba(0,255,80,.5); border-right: 1px solid rgba(0,255,80,.5); }

/* ── CONTENT ── */
.wr-content {
  position: relative; z-index: 2;
  max-width: 780px; margin: 0 auto;
  padding: 24px 20px 72px;
}

/* ── HEADER ── */
.wr-header {
  display: flex; align-items: flex-start; justify-content: space-between;
  padding-bottom: 18px; margin-bottom: 18px;
  border-bottom: 1px solid rgba(0,255,80,.1);
}

.wr-mission-badge {
  font-family: 'Share Tech Mono', monospace;
  font-size: 9px; letter-spacing: 3px; color: rgba(0,255,80,.7);
  display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
}

.wr-pulse {
  width: 6px; height: 6px; border-radius: 50%;
  background: #00ff50;
  box-shadow: 0 0 8px #00ff50;
  animation: wrPulse 1.4s step-start infinite;
}
@keyframes wrPulse { 50% { opacity: 0; box-shadow: none; } }

.wr-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(18px,3.5vw,28px); font-weight: 900;
  color: #fff; letter-spacing: 2px; margin: 0;
  text-shadow: 0 0 30px rgba(0,255,80,.2);
  line-height: 1.1;
}

.wr-title-sub {
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px; color: rgba(0,255,80,.35);
  letter-spacing: 2px; margin-top: 4px;
}

.wr-clock {
  font-family: 'Orbitron', monospace;
  font-size: 22px; font-weight: 700;
  color: #00ff50; letter-spacing: 2px; text-align: right;
  text-shadow: 0 0 12px rgba(0,255,80,.6);
}

.wr-date-badge {
  font-family: 'Share Tech Mono', monospace;
  font-size: 9px; color: rgba(0,255,80,.3);
  text-align: right; margin-top: 3px;
}

.wr-day-tag {
  font-family: 'Orbitron', monospace;
  font-size: 10px; color: #ff6b1a; text-align: right; margin-top: 3px;
  text-shadow: 0 0 8px rgba(255,107,26,.5);
}

/* ── TICKER ── */
.wr-ticker {
  background: rgba(0,255,80,.04);
  border: 1px solid rgba(0,255,80,.12);
  border-left: 2px solid rgba(0,255,80,.5);
  padding: 7px 12px; margin-bottom: 16px;
  overflow: hidden; display: flex; align-items: center; gap: 10px;
}

.wr-ticker-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 2px; color: #00ff50; flex-shrink: 0;
}

.wr-ticker-track { flex: 1; overflow: hidden; }

.wr-ticker-text {
  font-family: 'Share Tech Mono', monospace;
  font-size: 10px; color: rgba(255,255,255,.4);
  white-space: nowrap;
  display: inline-block;
  animation: wrTicker 35s linear infinite;
}
@keyframes wrTicker { from { transform: translateX(600px); } to { transform: translateX(-200%); } }

/* ── STAT GRID ── */
.wr-stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px,1fr));
  gap: 8px; margin-bottom: 16px;
}

.wr-stat-card {
  background: rgba(0,0,0,.6);
  border: 1px solid rgba(255,255,255,.05);
  padding: 12px 14px; position: relative; overflow: hidden;
  cursor: default; transition: border-color .2s, transform .2s;
}

.wr-stat-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: var(--acc);
  box-shadow: 0 0 6px var(--acc);
  transform: scaleX(0); transform-origin: left;
  transition: transform .8s ease var(--del, 0s);
}

.wr-stat-card.wr-revealed::before { transform: scaleX(1); }
.wr-stat-card:hover { border-color: var(--acc); transform: translateY(-2px); }

.wr-stat-label {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1.5px;
  color: rgba(255,255,255,.22); text-transform: uppercase; margin-bottom: 7px;
}

.wr-stat-val {
  font-family: 'Orbitron', monospace;
  font-size: 26px; font-weight: 700; line-height: 1;
  color: var(--acc); margin-bottom: 3px;
  text-shadow: 0 0 10px var(--acc);
}

.wr-stat-sub { font-size: 10px; color: rgba(255,255,255,.22); font-family: 'Rajdhani', sans-serif; }

/* ── TODAY PANEL ── */
.wr-today {
  background: rgba(255,107,26,.05);
  border: 1px solid rgba(255,107,26,.2);
  border-left: 3px solid #ff6b1a;
  padding: 16px 18px; margin-bottom: 16px;
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  position: relative; overflow: hidden;
  animation: wrTodayGlow 4s ease-in-out infinite;
}
@keyframes wrTodayGlow {
  0%,100% { box-shadow: 0 0 0 rgba(255,107,26,0); }
  50%      { box-shadow: 0 0 24px rgba(255,107,26,.1); }
}

.wr-today::before {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(255,107,26,.04), transparent);
  animation: wrSweep 3s linear infinite;
}
@keyframes wrSweep { from { transform: translateX(-100%); } to { transform: translateX(100%); } }

.wr-today-tag {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 2px; color: #ff6b1a; margin-bottom: 5px;
}

.wr-today-title {
  font-family: 'Orbitron', monospace;
  font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 3px;
}

.wr-today-sub { font-size: 11px; color: rgba(255,255,255,.35); }

/* ── RING ── */
.wr-ring-wrap { position: relative; width: 66px; height: 66px; flex-shrink: 0; }
.wr-ring-wrap svg { position: absolute; inset: 0; }
.wr-ring-center {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Orbitron', monospace; font-size: 12px; font-weight: 700; color: #ff6b1a;
}

/* ── SECTION HEADER ── */
.wr-section {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 2.5px; color: rgba(0,255,80,.3);
  text-transform: uppercase; margin-bottom: 10px;
  display: flex; align-items: center; gap: 8px;
}
.wr-section::after {
  content: ''; flex: 1; height: 1px;
  background: linear-gradient(90deg, rgba(0,255,80,.12), transparent);
}

/* ── OVERALL BAR ── */
.wr-overall { margin-bottom: 16px; }

.wr-bar-hdr {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 7px;
}

.wr-bar-lbl {
  font-family: 'Orbitron', monospace; font-size: 11px; font-weight: 700;
  color: rgba(255,255,255,.5);
}

.wr-bar-pct { font-family: 'Share Tech Mono', monospace; font-size: 11px; color: #ffd93d; }

.wr-track {
  height: 6px; background: rgba(255,255,255,.04);
  border: 1px solid rgba(0,255,80,.08); overflow: hidden; position: relative;
}

.wr-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff50, #00ccff, #ff6b1a);
  transform-origin: left;
  transition: transform 1.6s cubic-bezier(.34,1.56,.64,1) .5s;
  position: relative; overflow: hidden;
}

.wr-fill::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%);
  animation: wrShimmer 3s linear 2s infinite;
}
@keyframes wrShimmer { from { transform: translateX(-100%); } to { transform: translateX(400%); } }

.wr-bar-dates {
  display: flex; justify-content: space-between; margin-top: 5px;
}
.wr-bar-date { font-family: 'Share Tech Mono', monospace; font-size: 8px; color: rgba(0,255,80,.2); }

/* ── WEAPON GRID ── */
.wr-weapon-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 7px; margin-bottom: 16px;
}

.wr-weapon {
  background: rgba(0,0,0,.6);
  border: 1px solid rgba(255,255,255,.05);
  border-left: 2px solid var(--wc);
  padding: 10px 12px;
  opacity: 0; animation: wrReveal .5s ease forwards;
  animation-delay: var(--wi, 0s);
}
@keyframes wrReveal { to { opacity: 1; transform: none; } }

.wr-weapon-lbl {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1px; color: rgba(255,255,255,.22);
  text-transform: uppercase; margin-bottom: 4px;
}

.wr-weapon-name {
  font-family: 'Rajdhani', sans-serif; font-weight: 600;
  font-size: 13px; color: rgba(255,255,255,.65); margin-bottom: 7px;
}

.wr-weapon-bar {
  height: 2px; background: rgba(255,255,255,.04); overflow: hidden; margin-bottom: 4px;
}

.wr-weapon-fill {
  height: 100%;
  background: var(--wc);
  box-shadow: 0 0 4px var(--wc);
  transform-origin: left;
  transition: transform 1.2s ease .6s;
}

.wr-weapon-status {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1px; color: var(--wc);
}

/* ── PHASE ROWS ── */
.wr-phases { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }

.wr-phase-row {
  background: rgba(0,0,0,.5);
  border: 1px solid rgba(255,255,255,.04);
  border-left: 2px solid var(--pc);
  padding: 11px 13px;
  display: flex; align-items: center; gap: 12px;
  cursor: pointer;
  opacity: 0; transform: translateX(-12px);
  animation: wrSlide .45s ease forwards;
  animation-delay: var(--pd, 0s);
  transition: background .2s, border-color .2s;
}
@keyframes wrSlide { to { opacity: 1; transform: translateX(0); } }

.wr-phase-row.wr-active {
  background: rgba(255,107,26,.05);
  border-color: rgba(255,107,26,.25);
  border-left-color: #ff6b1a;
  box-shadow: 0 0 16px rgba(255,107,26,.08);
}

.wr-phase-row:hover { background: rgba(255,255,255,.02); }

.wr-phase-icon { font-size: 17px; flex-shrink: 0; width: 22px; text-align: center; }

.wr-phase-info { flex: 1; min-width: 0; }

.wr-phase-name {
  font-family: 'Orbitron', monospace; font-size: 10px; font-weight: 700;
  color: var(--pc); margin-bottom: 3px; text-transform: uppercase;
  display: flex; align-items: center; gap: 7px;
}

.wr-active-tag {
  font-family: 'Share Tech Mono', monospace; font-size: 7px; letter-spacing: 1px;
  color: #ff6b1a; background: rgba(255,107,26,.12);
  border: 1px solid rgba(255,107,26,.3); padding: 1px 6px;
  animation: wrTagBlink 1.8s ease-in-out infinite;
}
@keyframes wrTagBlink { 50% { opacity: .4; } }

.wr-phase-tag {
  font-size: 10px; color: rgba(255,255,255,.28);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.wr-phase-mini-bar {
  height: 2px; background: rgba(255,255,255,.04); margin-top: 5px; overflow: hidden;
}

.wr-phase-mini-fill {
  height: 100%; background: var(--pc);
  box-shadow: 0 0 4px var(--pc);
  transform-origin: left;
  transition: transform 1s ease var(--pd, 0s);
}

.wr-phase-right { text-align: right; flex-shrink: 0; }
.wr-phase-pct { font-family: 'Orbitron', monospace; font-size: 11px; color: var(--pc); }
.wr-phase-days { font-family: 'Share Tech Mono', monospace; font-size: 8px; color: rgba(255,255,255,.2); margin-top: 2px; }

/* ── LC SECTION ── */
.wr-lc-pills {
  display: grid; grid-template-columns: repeat(3,1fr);
  gap: 7px; margin-bottom: 10px;
}

.wr-lc-pill {
  background: rgba(0,0,0,.5);
  border: 1px solid rgba(255,255,255,.05);
  border-top: 1px solid var(--dc);
  padding: 11px 10px; text-align: center;
  position: relative; overflow: hidden; cursor: default;
  transition: transform .2s;
}

.wr-lc-pill::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: var(--dc); box-shadow: 0 0 6px var(--dc);
}

.wr-lc-pill:hover { transform: translateY(-2px); }

.wr-lc-count {
  font-family: 'Orbitron', monospace; font-size: 24px; font-weight: 700;
  color: var(--dc); line-height: 1; margin-bottom: 4px;
}

.wr-lc-type {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1px; color: rgba(255,255,255,.25);
  text-transform: uppercase;
}

/* ── LC FORM ── */
.wr-lc-form {
  background: rgba(255,107,26,.04);
  border: 1px solid rgba(255,107,26,.15);
  padding: 16px 18px; margin-bottom: 12px;
  animation: wrDropIn .35s cubic-bezier(.34,1.56,.64,1);
}
@keyframes wrDropIn { from { opacity:0; transform:translateY(-8px); } }

.wr-lc-form label {
  display: block; font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1px; color: rgba(255,255,255,.25);
  text-transform: uppercase; margin-bottom: 5px;
}

.wr-lc-form input, .wr-lc-form select, .wr-lc-form textarea {
  width: 100%;
  background: rgba(0,0,0,.6);
  border: 1px solid rgba(255,255,255,.08);
  color: #e0ffe0; font-family: 'Share Tech Mono', monospace;
  font-size: 12px; padding: 8px 10px; outline: none;
  transition: border-color .2s;
}

.wr-lc-form input:focus, .wr-lc-form select:focus, .wr-lc-form textarea:focus {
  border-color: rgba(255,107,26,.5);
  box-shadow: 0 0 8px rgba(255,107,26,.15);
}

.wr-lc-form select option { background: #050a05; }
.wr-lc-form textarea { min-height: 54px; resize: vertical; }

.wr-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }

.wr-submit {
  font-family: 'Orbitron', monospace; font-weight: 700; font-size: 12px;
  letter-spacing: 1px; text-transform: uppercase;
  padding: 9px 22px; border: none; cursor: pointer;
  transition: all .2s;
}

/* ── RECENT PROBLEMS ── */
.wr-recent { display: flex; flex-direction: column; gap: 5px; }

.wr-recent-lbl {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 1.5px; color: rgba(0,255,80,.2);
  margin-bottom: 5px; text-transform: uppercase;
}

.wr-problem-row {
  background: rgba(0,0,0,.4);
  border: 1px solid rgba(255,255,255,.04);
  border-left: 2px solid var(--dbc, rgba(107,203,119,.4));
  padding: 9px 12px;
  display: flex; justify-content: space-between; align-items: center;
  transition: background .2s;
}

.wr-problem-row:hover { background: rgba(255,255,255,.02); }

.wr-prob-name { font-size: 13px; color: rgba(255,255,255,.7); margin-bottom: 2px; }
.wr-prob-pat  { font-family: 'Share Tech Mono', monospace; font-size: 9px; color: rgba(255,255,255,.28); }

.wr-diff-badge {
  font-family: 'Share Tech Mono', monospace; font-size: 9px;
  padding: 2px 8px; border: 1px solid var(--dbc, rgba(107,203,119,.3));
  color: var(--dbc, #6bcb77);
}

.wr-prob-time { font-family: 'Share Tech Mono', monospace; font-size: 9px; color: rgba(255,255,255,.22); margin-left: 8px; }

/* ── LOG BTN ── */
.wr-log-btn {
  font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1px;
  background: rgba(255,107,26,.08);
  border: 1px solid rgba(255,107,26,.22); color: #ff6b1a;
  padding: 5px 13px; cursor: pointer; text-transform: uppercase;
  transition: all .2s;
}
.wr-log-btn:hover { background: rgba(255,107,26,.16); box-shadow: 0 0 10px rgba(255,107,26,.2); }

/* ── FOOTER ── */
.wr-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 18px; margin-top: 8px;
  border-top: 1px solid rgba(0,255,80,.08);
}

.wr-objective {
  font-family: 'Orbitron', monospace; font-size: 12px; font-weight: 900;
  letter-spacing: 1px; text-transform: uppercase;
  padding: 10px 22px;
  background: rgba(0,0,0,.8);
  border: 1px solid rgba(255,217,61,.3);
  color: #ffd93d;
  text-shadow: 0 0 12px rgba(255,217,61,.4);
  box-shadow: 0 0 24px rgba(255,217,61,.08), inset 0 0 24px rgba(255,217,61,.03);
  animation: wrObjPulse 5s ease-in-out infinite;
  position: relative; overflow: hidden;
}

.wr-objective::before {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(255,217,61,.06), transparent);
  animation: wrSweep 3s linear infinite;
}

@keyframes wrObjPulse {
  0%,100% { box-shadow: 0 0 12px rgba(255,217,61,.08); }
  50%      { box-shadow: 0 0 32px rgba(255,217,61,.22); }
}

.wr-footer-meta {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; color: rgba(0,255,80,.2);
  text-align: right; line-height: 2;
}

/* ── SECTION FLEX HEADER ── */
.wr-section-row {
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;
}
`

function useWARCSS() {
  useEffect(() => {
    if (document.getElementById('war-room-styles')) return
    const tag = document.createElement('style')
    tag.id = 'war-room-styles'
    tag.textContent = WAR_CSS
    document.head.appendChild(tag)
  }, [])
}

// ─── Clock ────────────────────────────────────────────────────────────────────

function LiveClock() {
  const fmt = () => {
    const n = new Date()
    return [n.getHours(), n.getMinutes(), n.getSeconds()]
      .map(v => String(v).padStart(2, '0')).join(':')
  }
  const [t, setT] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 1000)
    return () => clearInterval(id)
  }, [])
  return <div className="wr-clock">{t}</div>
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

function Ticker({ messages }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % messages.length), 9000)
    return () => clearInterval(id)
  }, [messages.length])
  return (
    <div className="wr-ticker">
      <span className="wr-ticker-label">⬛ INTEL</span>
      <div className="wr-ticker-track">
        <span className="wr-ticker-text" key={idx}>{messages[idx]}</span>
      </div>
    </div>
  )
}

// ─── Ring ─────────────────────────────────────────────────────────────────────

function Ring({ pct }) {
  const r = 27, circ = 2 * Math.PI * r
  const [offset, setOffset] = useState(circ)
  useEffect(() => {
    const id = setTimeout(() => setOffset(circ * (1 - pct / 100)), 300)
    return () => clearTimeout(id)
  }, [pct, circ])
  return (
    <div className="wr-ring-wrap">
      <svg viewBox="0 0 66 66" width="66" height="66" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wrRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b1a" />
            <stop offset="100%" stopColor="#ffd93d" />
          </linearGradient>
        </defs>
        <circle cx="33" cy="33" r={r} fill="none" stroke="rgba(255,107,26,.1)" strokeWidth="4" />
        <circle
          cx="33" cy="33" r={r} fill="none"
          stroke="url(#wrRingGrad)" strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          transform="rotate(-90 33 33)"
          style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(.34,1.56,.64,1)' }}
        />
      </svg>
      <div className="wr-ring-center">{pct}%</div>
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, color, delay = 0 }) {
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setRevealed(true), delay)
    return () => clearTimeout(id)
  }, [delay])
  return (
    <div
      className={`wr-stat-card${revealed ? ' wr-revealed' : ''}`}
      style={{ '--acc': color, '--del': `${delay / 1000}s` }}
    >
      <div className="wr-stat-label">{label}</div>
      <div className="wr-stat-val">{value}</div>
      {sub && <div className="wr-stat-sub">{sub}</div>}
    </div>
  )
}

// ─── Animated mini bar ────────────────────────────────────────────────────────

function MiniBar({ pct, color, delay = 0 }) {
  const [scale, setScale] = useState(0)
  useEffect(() => {
    const id = setTimeout(() => setScale(pct / 100), 600 + delay)
    return () => clearTimeout(id)
  }, [pct, delay])
  return (
    <div className="wr-phase-mini-bar">
      <div
        className="wr-phase-mini-fill"
        style={{
          '--pc': color,
          transform: `scaleX(${scale})`,
          transition: `transform 1s ease ${delay / 1000 + 0.3}s`,
        }}
      />
    </div>
  )
}

// ─── Phase Row ────────────────────────────────────────────────────────────────

function PhaseRow({ phase, range, index, isActive, progress }) {
  const [revealed, setRevealed] = useState(false)
  const total = range
    ? Math.floor((new Date(range.end) - new Date(range.start)) / 86400000) + 1
    : 0
  const done = Math.min(progress, total)
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  useEffect(() => {
    const id = setTimeout(() => setRevealed(true), 500 + index * 80)
    return () => clearTimeout(id)
  }, [index])

  return (
    <div
      className={`wr-phase-row${isActive ? ' wr-active' : ''}`}
      style={{ '--pc': phase.color, '--pd': `${index * 0.08}s` }}
    >
      <div className="wr-phase-icon">{phase.icon}</div>
      <div className="wr-phase-info">
        <div className="wr-phase-name">
          P{phase.id}: {phase.name}
          {isActive && <span className="wr-active-tag">● ACTIVE</span>}
        </div>
        <div className="wr-phase-tag">{phase.tag}</div>
        <MiniBar pct={pct} color={phase.color} delay={index * 80} />
      </div>
      <div className="wr-phase-right">
        <div className="wr-phase-pct">{pct}%</div>
        <div className="wr-phase-days">{done}/{total}d</div>
      </div>
    </div>
  )
}

// ─── Weapon Card ──────────────────────────────────────────────────────────────

function WeaponCard({ weapon, currentPhase }) {
  const [scale, setScale] = useState(0)
  const isOnline = currentPhase >= weapon.phase
  const fillPct = isOnline ? (currentPhase > weapon.phase ? 100 : 15) : 0

  useEffect(() => {
    const id = setTimeout(() => setScale(fillPct / 100), 800)
    return () => clearTimeout(id)
  }, [fillPct])

  return (
    <div className="wr-weapon" style={{ '--wc': weapon.color, '--wi': `${weapon.phase * 0.1}s` }}>
      <div className="wr-weapon-lbl">{weapon.label}</div>
      <div className="wr-weapon-name">{weapon.icon} {weapon.label}</div>
      <div className="wr-weapon-bar">
        <div
          className="wr-weapon-fill"
          style={{ transform: `scaleX(${scale})`, transition: 'transform 1.4s cubic-bezier(.34,1.56,.64,1) .8s' }}
        />
      </div>
      <div className="wr-weapon-status">
        {isOnline ? weapon.readiness : 'OFFLINE'}
      </div>
    </div>
  )
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function ProgressDashboard() {
  useWARCSS()

  const [progress, setProgress]     = useState([])
  const [lcLog, setLcLog]           = useState([])
  const [showLcForm, setShowLcForm] = useState(false)
  const [lcForm, setLcForm]         = useState({
    problem: '', difficulty: 'Medium', pattern: 'Array', timeTaken: 25, approach: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const today  = getTodayIST()
  const dayNum = getDayNumber(today)

  useEffect(() => {
    getAllProgress().then(setProgress)
    getLeetcodeLog().then(setLcLog)
  }, [])

  // ── derived stats ─────────────────────────────────────────────────────────

  const completedDays = progress.filter(p => Object.values(p.checks || {}).some(Boolean)).length
  const fullyDone = progress.filter(p => {
    const v = Object.values(p.checks || {}); return v.length > 0 && v.every(Boolean)
  }).length
  const totalDays = getTotalDays()
  const pct = Math.round((completedDays / totalDays) * 100) || 0

  let streak = 0
  const sorted = [...progress].sort((a, b) => b.date.localeCompare(a.date))
  for (const p of sorted) {
    if (Object.values(p.checks || {}).some(Boolean)) streak++
    else break
  }

  const diffCounts = { Easy: 0, Medium: 0, Hard: 0 }
  lcLog.forEach(p => { if (diffCounts[p.difficulty] !== undefined) diffCounts[p.difficulty]++ })
  const totalLC = lcLog.length
  const hardPct = totalLC > 0 ? Math.round(diffCounts.Hard / totalLC * 100) : 0

  const todayEntry  = progress.find(p => p.date === today)
  const todayChecks = Object.values(todayEntry?.checks || {})
  const todayDone   = todayChecks.filter(Boolean).length
  const todayTotal  = todayChecks.length
  const todayPct    = todayTotal > 0 ? Math.round(todayDone / todayTotal * 100) : 0

  const currentPhaseId = PHASES.find((_, i) => {
    const r = PHASE_RANGES[i]; return r && today >= r.start && today <= r.end
  })?.id ?? 1

  const phaseProgress = PHASES.map((p, i) => {
    const range = PHASE_RANGES[i]
    if (!range) return 0
    return progress.filter(pr =>
      pr.date >= range.start && pr.date <= range.end &&
      Object.values(pr.checks || {}).some(Boolean)
    ).length
  })

  // ── log submit ────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    if (!lcForm.problem.trim()) return
    setSubmitting(true)
    await logLeetcode(
      lcForm.problem, lcForm.difficulty, lcForm.pattern,
      lcForm.timeTaken, lcForm.approach
    )
    setLcLog(await getLeetcodeLog())
    setShowLcForm(false)
    setLcForm({ problem: '', difficulty: 'Medium', pattern: 'Array', timeTaken: 25, approach: '' })
    setSubmitting(false)
  }

  // ── render ────────────────────────────────────────────────────────────────

  return (
    <div className="wr-root">
      <div className="wr-grid" />
      <div className="wr-scanlines" />
      <div className="wr-radar" />
      <div className="wr-corner wr-corner-tl" />
      <div className="wr-corner wr-corner-tr" />
      <div className="wr-corner wr-corner-bl" />
      <div className="wr-corner wr-corner-br" />

      <div className="wr-content">

        {/* ── HEADER ── */}
        <div className="wr-header">
          <div>
            <div className="wr-mission-badge">
              <div className="wr-pulse" />
              CRACKIT MISSION CONTROL · CLASSIFIED
            </div>
            <h1 className="wr-title">Battle Dashboard</h1>
            <div className="wr-title-sub">OPERATION MICROSOFT · MAY 17 2026 → JAN 31 2027</div>
          </div>
          <div>
            <LiveClock />
            <div className="wr-date-badge">{today}</div>
            <div className="wr-day-tag">DAY {dayNum} · PHASE {currentPhaseId}</div>
          </div>
        </div>

        {/* ── TICKER ── */}
        <Ticker messages={TICKER_MESSAGES} />

        {/* ── STAT CARDS ── */}
        <div className="wr-stat-grid">
          <StatCard label="STREAK"      value={`${streak}🔥`}      sub="consecutive"        color="#ff6b1a" delay={100} />
          <StatCard label="DAYS ACTIVE" value={completedDays}       sub={`of ${totalDays}`}  color="#a855f7" delay={180} />
          <StatCard label="FULL DAYS ✓" value={fullyDone}           sub="all done"           color="#39ff14" delay={260} />
          <StatCard label="OVERALL"     value={`${pct}%`}           sub="program"            color="#ffd93d" delay={340} />
          <StatCard label="LC SOLVED"   value={totalLC}             sub={`${hardPct}% Hard`} color="#4d96ff" delay={420} />
          <StatCard label="HARD"        value={diffCounts.Hard}     sub={`${diffCounts.Medium} Med`} color="#ff2d78" delay={500} />
        </div>

        {/* ── TODAY BRIEFING ── */}
        <div className="wr-today">
          <div>
            <div className="wr-today-tag">
              ● TODAY · DAY {dayNum} · PHASE {currentPhaseId}
            </div>
            <div className="wr-today-title">
              {todayTotal === 0
                ? 'No tasks loaded yet — go to Today view'
                : todayDone === todayTotal
                  ? '🔥 ALL TASKS COMPLETE — MISSION SUCCESS'
                  : `${todayDone} of ${todayTotal} tasks complete`}
            </div>
            {todayTotal > 0 && (
              <div className="wr-today-sub">{todayPct}% complete today</div>
            )}
          </div>
          {todayTotal > 0 && <Ring pct={todayPct} />}
        </div>

        {/* ── OVERALL BAR ── */}
        <div className="wr-overall">
          <div className="wr-bar-hdr">
            <div className="wr-bar-lbl">Mission Timeline</div>
            <div className="wr-bar-pct">{pct}% · Day {dayNum} of {totalDays}</div>
          </div>
          <div className="wr-track">
            <div
              className="wr-fill"
              style={{ transform: `scaleX(${Math.max(pct / 100, 0.005)})` }}
            />
          </div>
          <div className="wr-bar-dates">
            <span className="wr-bar-date">MAY 17 2026</span>
            <span className="wr-bar-date">JAN 31 2027</span>
          </div>
        </div>

        {/* ── WEAPON SYSTEMS ── */}
        <div className="wr-section">Weapon Systems · Skill Arsenal</div>
        <div className="wr-weapon-grid">
          {WEAPON_SYSTEMS.map(w => (
            <WeaponCard key={w.label} weapon={w} currentPhase={currentPhaseId} />
          ))}
        </div>

        {/* ── PHASE BREAKDOWN ── */}
        <div className="wr-section">Phase Operations · Battle Map</div>
        <div className="wr-phases">
          {PHASES.map((phase, i) => {
            const range = PHASE_RANGES[i]
            const isActive = range && today >= range.start && today <= range.end
            return (
              <PhaseRow
                key={phase.id}
                phase={phase}
                range={range}
                index={i}
                isActive={isActive}
                progress={phaseProgress[i]}
              />
            )
          })}
        </div>

        {/* ── LC INTEL ── */}
        <div className="wr-section-row">
          <div className="wr-section" style={{ margin: 0, flex: 1 }}>
            Problem-Solving Intel · {totalLC} logged
          </div>
          <button className="wr-log-btn" onClick={() => setShowLcForm(v => !v)}>
            {showLcForm ? '✕ CANCEL' : '+ LOG PROBLEM'}
          </button>
        </div>

        <div style={{ marginTop: 10 }}>
          <div className="wr-lc-pills">
            {[
              { label: 'Easy',   val: diffCounts.Easy,   color: '#39ff14' },
              { label: 'Medium', val: diffCounts.Medium, color: '#ffd93d' },
              { label: 'Hard',   val: diffCounts.Hard,   color: '#ff2d78' },
            ].map(d => (
              <div key={d.label} className="wr-lc-pill" style={{ '--dc': d.color }}>
                <div className="wr-lc-count" style={{ color: d.color, textShadow: `0 0 10px ${d.color}` }}>
                  {d.val}
                </div>
                <div className="wr-lc-type">{d.label}</div>
              </div>
            ))}
          </div>

          {/* LOG FORM */}
          {showLcForm && (
            <div className="wr-lc-form">
              <div className="wr-form-grid">
                <div>
                  <label>Problem Name / #</label>
                  <input
                    type="text"
                    value={lcForm.problem}
                    onChange={e => setLcForm(f => ({ ...f, problem: e.target.value }))}
                    placeholder="e.g. Two Sum"
                  />
                </div>
                <div>
                  <label>Time (minutes)</label>
                  <input
                    type="number"
                    value={lcForm.timeTaken}
                    onChange={e => setLcForm(f => ({ ...f, timeTaken: Number(e.target.value) }))}
                    min={1} max={120}
                  />
                </div>
              </div>

              <div className="wr-form-grid" style={{ marginBottom: 10 }}>
                <div>
                  <label>Difficulty</label>
                  <select
                    value={lcForm.difficulty}
                    onChange={e => setLcForm(f => ({ ...f, difficulty: e.target.value }))}
                  >
                    {DIFFICULTIES.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label>Pattern</label>
                  <select
                    value={lcForm.pattern}
                    onChange={e => setLcForm(f => ({ ...f, pattern: e.target.value }))}
                  >
                    {PATTERNS.map(p => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 12 }}>
                <label>Key Insight / Approach</label>
                <textarea
                  value={lcForm.approach}
                  onChange={e => setLcForm(f => ({ ...f, approach: e.target.value }))}
                  placeholder="What was the key insight?"
                />
              </div>

              <button
                className="wr-submit"
                disabled={!lcForm.problem.trim() || submitting}
                onClick={handleSubmit}
                style={{
                  background: lcForm.problem.trim() && !submitting
                    ? 'linear-gradient(135deg, #ff6b1a, #ffd93d)'
                    : 'rgba(255,255,255,.05)',
                  color: lcForm.problem.trim() && !submitting ? '#000' : 'rgba(255,255,255,.2)',
                  cursor: lcForm.problem.trim() && !submitting ? 'pointer' : 'not-allowed',
                }}
              >
                {submitting ? 'TRANSMITTING...' : '⚡ LOG PROBLEM'}
              </button>
            </div>
          )}

          {/* RECENT */}
          {lcLog.length > 0 && (
            <div className="wr-recent">
              <div className="wr-recent-lbl">Recent Intel</div>
              {lcLog.slice(0, 5).map((lc, i) => {
                const dm = DIFF_META[lc.difficulty] || DIFF_META.Easy
                return (
                  <div
                    key={i}
                    className="wr-problem-row"
                    style={{ '--dbc': dm.color }}
                  >
                    <div>
                      <div className="wr-prob-name">{lc.problem}</div>
                      <div className="wr-prob-pat">{lc.pattern}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className="wr-diff-badge" style={{ '--dbc': dm.color, color: dm.color }}>
                        {lc.difficulty}
                      </span>
                      <span className="wr-prob-time">{lc.time_taken}m</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* ── FOOTER ── */}
        <div className="wr-footer">
          <div className="wr-objective">🎯 Microsoft · Top MNC</div>
          <div className="wr-footer-meta">
            OPERATION CRACKIT<br />
            260 DAYS · 6 PHASES<br />
            MAY 17 2026 → JAN 31 2027
          </div>
        </div>

      </div>
    </div>
  )
}