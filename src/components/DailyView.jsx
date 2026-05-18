import { useState, useEffect, useRef, useCallback } from 'react'
import { getScheduleByDate, getTodayIST, getDayNumber, getTotalDays, getPhase, PHASES, getRandomSurprise, getVerifyChallenge } from '../data/schedule'
import { getAllProgress, saveProgress } from '../lib/supabase'

const MISSION_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,600;0,700;1,300&family=Space+Grotesk:wght@300;400;500;600&display=swap');

:root {
  --tm-bg: #05050a;
  --tm-surface: rgba(255,255,255,0.026);
  --tm-border: rgba(255,255,255,0.055);
  --tm-orange: #ff6b1a;
  --tm-amber: #ffb830;
  --tm-gold: #ffd93d;
  --tm-green: #39ff7a;
  --tm-red: #ff3b3b;
  --tm-blue: #4da6ff;
  --tm-purple: #b06dff;
  --tm-pink: #ff4da6;
  --tm-white: rgba(255,255,255,0.9);
  --tm-muted: rgba(255,255,255,0.22);
  --tm-faint: rgba(255,255,255,0.07);
}

.tm-root *, .tm-root *::before, .tm-root *::after { box-sizing: border-box; }
.tm-root { font-family: 'Space Grotesk', sans-serif; background: var(--tm-bg); color: #fff; min-height: 100vh; overflow-x: hidden; position: relative; }

.tm-atmo { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
.tm-atmo-radial {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,107,26,0.09) 0%, transparent 70%),
              radial-gradient(ellipse 60% 40% at 0% 100%, rgba(77,150,255,0.05) 0%, transparent 60%),
              radial-gradient(ellipse 40% 30% at 100% 80%, rgba(176,109,255,0.04) 0%, transparent 50%);
}
.tm-atmo-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,107,26,0.018) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,107,26,0.018) 1px, transparent 1px);
  background-size: 52px 52px;
  animation: tmGridShift 60s linear infinite;
}
.tm-atmo-scanline {
  position: absolute; inset: 0;
  background: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.018) 3px, rgba(0,0,0,0.018) 4px);
}
.tm-atmo-vignette {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%);
}
@keyframes tmGridShift { from { background-position: 0 0; } to { background-position: 52px 52px; } }

.tm-particle { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; animation: tmFloat linear infinite; }
@keyframes tmFloat {
  0%   { transform: translateY(100vh) translateX(0) scale(0); opacity: 0; }
  10%  { opacity: 1; }
  90%  { opacity: 0.6; }
  100% { transform: translateY(-20px) translateX(var(--drift)) scale(1); opacity: 0; }
}

.tm-root::-webkit-scrollbar { width: 4px; }
.tm-root::-webkit-scrollbar-track { background: transparent; }
.tm-root::-webkit-scrollbar-thumb { background: rgba(255,107,26,0.3); border-radius: 2px; }

.tm-content { position: relative; z-index: 1; max-width: 860px; margin: 0 auto; padding: 28px 20px 80px; }

.tm-boot {
  position: fixed; inset: 0; z-index: 1000;
  background: #05050a;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity 0.8s ease, visibility 0.8s ease;
}
.tm-boot.tm-boot-exit { opacity: 0; visibility: hidden; pointer-events: none; }
.tm-boot-title {
  font-family: 'Syne', sans-serif; font-size: clamp(28px,6vw,56px); font-weight: 900;
  letter-spacing: -2px; color: #fff;
  animation: tmBootPulse 1.5s ease-in-out infinite;
  margin-bottom: 32px;
}
@keyframes tmBootPulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
.tm-boot-lines { display: flex; flex-direction: column; gap: 8px; min-width: 340px; }
.tm-boot-line { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--tm-orange); letter-spacing: 1px; opacity: 0; animation: tmBootLine 0.3s forwards; }
@keyframes tmBootLine { to { opacity: 1; } }
.tm-boot-bar { width: 340px; height: 2px; background: rgba(255,107,26,0.15); border-radius: 1px; margin-top: 24px; overflow: hidden; }
.tm-boot-fill { height: 100%; background: linear-gradient(90deg, var(--tm-orange), var(--tm-gold)); border-radius: 1px; transition: width 0.15s ease; }

/* viewing-past banner */
.tm-past-banner {
  background: rgba(255,211,61,0.07); border: 1px solid rgba(255,211,61,0.25);
  border-radius: 10px; padding: 10px 16px; margin-bottom: 20px;
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
  font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #ffd93d;
}
.tm-past-banner span { opacity: 0.6; }

.tm-header { margin-bottom: 32px; }
.tm-header-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
.tm-header-left { flex: 1; }
.tm-breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-muted); letter-spacing: 2px; }
.tm-live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--tm-green); box-shadow: 0 0 8px var(--tm-green); animation: tmLivePulse 1.8s ease-in-out infinite; }
@keyframes tmLivePulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.6); } }
.tm-mission-id { font-family: 'Syne', sans-serif; font-size: clamp(28px,5vw,42px); font-weight: 900; color: #fff; letter-spacing: -1.5px; line-height: 1; margin-bottom: 8px; }
.tm-mission-id span { background: linear-gradient(90deg, var(--tm-orange), var(--tm-gold)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.tm-mission-sub { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--tm-muted); letter-spacing: 0.5px; line-height: 1.7; }

.tm-countdown-block { background: rgba(255,107,26,0.05); border: 1px solid rgba(255,107,26,0.2); border-radius: 14px; padding: 16px 18px; min-width: 180px; text-align: right; }
.tm-countdown-label { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-orange); letter-spacing: 2px; margin-bottom: 6px; }
.tm-countdown-time { font-family: 'JetBrains Mono', monospace; font-size: 26px; font-weight: 700; color: #fff; letter-spacing: 2px; line-height: 1; margin-bottom: 4px; }
.tm-countdown-sub { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-muted); }

.tm-status-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px,1fr)); gap: 8px; margin-bottom: 28px; }
.tm-status-cell { background: var(--tm-surface); border: 1px solid var(--tm-border); border-radius: 10px; padding: 11px 14px; position: relative; overflow: hidden; transition: all 0.2s; }
.tm-status-cell::after { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: var(--accent, var(--tm-orange)); transform: scaleX(0); transform-origin: left; transition: transform 0.7s 0.3s ease; }
.tm-status-cell.tm-sc-revealed::after { transform: scaleX(1); }
.tm-sc-label { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-muted); letter-spacing: 1.5px; margin-bottom: 5px; }
.tm-sc-value { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800; line-height: 1; margin-bottom: 2px; }
.tm-sc-sub { font-size: 10px; color: var(--tm-muted); }

.tm-orbital-section { display: flex; align-items: center; gap: 28px; background: linear-gradient(135deg, rgba(255,107,26,0.07), rgba(255,107,26,0.02)); border: 1px solid rgba(255,107,26,0.2); border-radius: 20px; padding: 24px 28px; margin-bottom: 28px; position: relative; overflow: hidden; animation: tmOrbitalGlow 5s ease-in-out infinite; }
@keyframes tmOrbitalGlow { 0%,100% { box-shadow: 0 0 0 rgba(255,107,26,0); } 50% { box-shadow: 0 0 40px rgba(255,107,26,0.08), inset 0 0 40px rgba(255,107,26,0.03); } }
.tm-orbital-section::before { content: 'MISSION ACTIVE'; position: absolute; top: 14px; right: 18px; font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-orange); letter-spacing: 2px; background: rgba(255,107,26,0.1); padding: 3px 10px; border-radius: 10px; }
.tm-orbital-ring { position: relative; flex-shrink: 0; }
.tm-orbital-ring svg { display: block; }
.tm-orbital-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; }
.tm-orbital-pct { font-family: 'Syne', sans-serif; font-size: 28px; font-weight: 900; color: #fff; line-height: 1; }
.tm-orbital-pct-sub { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-orange); letter-spacing: 1px; }
.tm-orbital-info { flex: 1; }
.tm-orbital-tag { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-orange); letter-spacing: 1.5px; margin-bottom: 8px; }
.tm-orbital-title { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #fff; line-height: 1.2; margin-bottom: 10px; letter-spacing: -0.5px; }
.tm-orbital-meta { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--tm-muted); line-height: 1.8; }

.tm-journey { margin-bottom: 28px; }
.tm-journey-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px; }
.tm-journey-label { font-family: 'Syne', sans-serif; font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.5); }
.tm-journey-pct { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--tm-gold); }
.tm-journey-track { height: 5px; background: rgba(255,255,255,0.04); border-radius: 3px; overflow: hidden; position: relative; }
.tm-journey-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #ff6b1a, #ffb830, #ffd93d, #ff6b9d); transform-origin: left; transition: transform 1.6s cubic-bezier(0.34,1.56,0.64,1) 0.6s; position: relative; overflow: hidden; }
.tm-journey-fill::after { content: ''; position: absolute; top: 0; left: -100%; right: -100%; height: 100%; background: linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%); animation: tmShimmer 3s ease-in-out 2s infinite; }
@keyframes tmShimmer { from { transform: translateX(-60%); } to { transform: translateX(160%); } }
.tm-journey-dates { display: flex; justify-content: space-between; margin-top: 5px; font-family: 'JetBrains Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.15); }

.tm-ops-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.tm-ops-title { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-muted); letter-spacing: 2px; }
.tm-ops-count { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--tm-orange); }

.tm-task-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px; }
.tm-task { background: rgba(255,255,255,0.022); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 0; overflow: hidden; transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); opacity: 0; transform: translateY(16px) scale(0.98); }
.tm-task.tm-task-revealed { opacity: 1; transform: translateY(0) scale(1); }
.tm-task.tm-task-done { background: rgba(57,255,122,0.04); border-color: rgba(57,255,122,0.18); }
.tm-task.tm-task-done .tm-task-label { opacity: 0.45; text-decoration: line-through; text-decoration-color: rgba(57,255,122,0.4); }
.tm-task-main { display: flex; align-items: flex-start; gap: 0; cursor: pointer; padding: 16px 18px; position: relative; }
.tm-task-main:hover .tm-task-label { color: #fff; }
.tm-task-accent { width: 3px; border-radius: 2px; flex-shrink: 0; margin-right: 16px; margin-top: 2px; min-height: 20px; align-self: stretch; transition: opacity 0.3s; }
.tm-task-done .tm-task-accent { opacity: 0.4; }
.tm-task-check { width: 22px; height: 22px; border-radius: 6px; border: 1.5px solid rgba(255,255,255,0.15); flex-shrink: 0; margin-right: 14px; margin-top: 1px; display: flex; align-items: center; justify-content: center; transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1); background: transparent; }
.tm-task-done .tm-task-check { background: rgba(57,255,122,0.15); border-color: #39ff7a; box-shadow: 0 0 10px rgba(57,255,122,0.3); }
.tm-check-icon { width: 12px; height: 12px; opacity: 0; transition: opacity 0.2s 0.05s; }
.tm-task-done .tm-check-icon { opacity: 1; }
.tm-task-body { flex: 1; min-width: 0; }
.tm-task-type-badge { display: inline-flex; align-items: center; gap: 4px; font-family: 'JetBrains Mono', monospace; font-size: 8px; letter-spacing: 1px; padding: 2px 8px; border-radius: 8px; margin-bottom: 6px; border: 1px solid transparent; }
.tm-task-label { font-size: 13px; line-height: 1.55; color: rgba(255,255,255,0.78); transition: color 0.2s; margin-bottom: 8px; }
.tm-task-footer { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.tm-task-link { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-muted); text-decoration: none; letter-spacing: 0.5px; transition: color 0.2s; display: flex; align-items: center; gap: 4px; }
.tm-task-link:hover { color: #fff; }
.tm-task-verify-btn { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-orange); background: rgba(255,107,26,0.08); border: 1px solid rgba(255,107,26,0.2); border-radius: 8px; padding: 2px 9px; cursor: pointer; transition: all 0.2s; letter-spacing: 0.5px; }
.tm-task-verify-btn:hover { background: rgba(255,107,26,0.16); }
.tm-verify-drop { border-top: 1px solid rgba(255,255,255,0.06); padding: 12px 18px 14px 58px; background: rgba(255,107,26,0.04); animation: tmVerifyIn 0.3s cubic-bezier(0.34,1.56,0.64,1); }
@keyframes tmVerifyIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
.tm-verify-label { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-orange); letter-spacing: 1.5px; margin-bottom: 6px; }
.tm-verify-q { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.55; font-style: italic; }

.tm-complete-banner { background: linear-gradient(135deg, rgba(57,255,122,0.1), rgba(57,255,122,0.03)); border: 1px solid rgba(57,255,122,0.3); border-radius: 20px; padding: 28px 32px; text-align: center; margin-bottom: 28px; animation: tmCompletePop 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards, tmCompleteGlow 3s ease-in-out 0.6s infinite; opacity: 0; }
@keyframes tmCompletePop { to { opacity: 1; } }
@keyframes tmCompleteGlow { 0%,100% { box-shadow: 0 0 0 rgba(57,255,122,0); } 50% { box-shadow: 0 0 40px rgba(57,255,122,0.12); } }
.tm-complete-icon { font-size: 40px; margin-bottom: 10px; }
.tm-complete-title { font-family: 'Syne', sans-serif; font-size: 24px; font-weight: 900; color: #39ff7a; margin-bottom: 6px; letter-spacing: -0.5px; }
.tm-complete-sub { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.4); letter-spacing: 0.5px; }

.tm-surprise { background: linear-gradient(135deg, rgba(255,184,48,0.08), rgba(255,107,26,0.04)); border: 1px solid rgba(255,184,48,0.25); border-radius: 16px; padding: 18px 22px; margin-bottom: 28px; display: flex; align-items: flex-start; gap: 14px; animation: tmSurpriseIn 0.5s 0.3s cubic-bezier(0.34,1.56,0.64,1) both; }
@keyframes tmSurpriseIn { from { opacity:0; transform:scale(0.95) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
.tm-surprise-icon { font-size: 28px; flex-shrink: 0; }
.tm-surprise-label { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-amber); letter-spacing: 2px; margin-bottom: 5px; }
.tm-surprise-text { font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.55; font-style: italic; }

.tm-phase-intel { background: var(--tm-surface); border: 1px solid var(--tm-border); border-radius: 16px; padding: 20px 22px; margin-bottom: 28px; }
.tm-pi-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.tm-pi-icon { font-size: 22px; }
.tm-pi-badge { font-family: 'JetBrains Mono', monospace; font-size: 8px; letter-spacing: 1.5px; padding: 3px 10px; border-radius: 9px; border: 1px solid transparent; }
.tm-pi-name { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 800; color: #fff; }
.tm-pi-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px,1fr)); gap: 8px; }
.tm-pi-cell { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 10px; padding: 10px 13px; }
.tm-pi-cell-label { font-family: 'JetBrains Mono', monospace; font-size: 8px; color: var(--tm-muted); letter-spacing: 1px; margin-bottom: 4px; }
.tm-pi-cell-val { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.5; }

.tm-footer-ribbon { position: fixed; bottom: 0; left: 0; right: 0; z-index: 100; background: rgba(5,5,10,0.92); border-top: 1px solid rgba(255,107,26,0.15); padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); flex-wrap: wrap; }
.tm-ribbon-left { display: flex; align-items: center; gap: 16px; }
.tm-ribbon-clock { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: var(--tm-orange); font-weight: 600; letter-spacing: 1px; }
.tm-ribbon-sep { width: 1px; height: 18px; background: rgba(255,255,255,0.1); }
.tm-ribbon-progress { display: flex; align-items: center; gap: 10px; }
.tm-ribbon-bar { width: 120px; height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }
.tm-ribbon-fill { height: 100%; background: linear-gradient(90deg, var(--tm-orange), var(--tm-gold)); border-radius: 2px; transition: width 0.5s ease; }
.tm-ribbon-pct { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--tm-gold); }
.tm-ribbon-right { display: flex; align-items: center; gap: 10px; }
.tm-ribbon-day { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--tm-muted); letter-spacing: 0.5px; }
.tm-ribbon-target { background: linear-gradient(90deg, var(--tm-orange), var(--tm-gold)); border-radius: 8px; padding: 5px 14px; font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 800; color: #000; }

.tm-saving { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--tm-muted); letter-spacing: 1px; transition: all 0.3s; }
.tm-saving.tm-saving-active { color: var(--tm-orange); }
.tm-saving.tm-saving-done { color: var(--tm-green); }

@media (max-width: 600px) {
  .tm-orbital-section { flex-direction: column; align-items: flex-start; }
  .tm-status-strip { grid-template-columns: repeat(3,1fr); }
  .tm-countdown-block { min-width: auto; text-align: left; width: 100%; }
  .tm-header-top { flex-direction: column; }
  .tm-ribbon-left { flex-wrap: wrap; }
}
`

function useInjectMissionCSS() {
  useEffect(() => {
    if (document.getElementById('tm-styles-v2')) return
    const el = document.createElement('style')
    el.id = 'tm-styles-v2'
    el.textContent = MISSION_CSS
    document.head.appendChild(el)
  }, [])
}

const TYPE_CONFIG = {
  dsa:      { label: 'DSA',      color: '#ff6b1a', bg: 'rgba(255,107,26,0.1)',  border: 'rgba(255,107,26,0.25)',  icon: '⚡' },
  java:     { label: 'JAVA',     color: '#4da6ff', bg: 'rgba(77,166,255,0.1)',  border: 'rgba(77,166,255,0.25)',  icon: '☕' },
  frontend: { label: 'FRONTEND', color: '#b06dff', bg: 'rgba(176,109,255,0.1)', border: 'rgba(176,109,255,0.25)', icon: '🎨' },
  aptitude: { label: 'APT',      color: '#39ff7a', bg: 'rgba(57,255,122,0.08)', border: 'rgba(57,255,122,0.2)',   icon: '🧮' },
  backend:  { label: 'BACKEND',  color: '#ffb830', bg: 'rgba(255,184,48,0.08)', border: 'rgba(255,184,48,0.2)',   icon: '🌐' },
}

function Particles() {
  const particles = useRef([])
  useEffect(() => {
    particles.current = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 20 + 12}s`,
      delay: `${Math.random() * 15}s`,
      drift: `${(Math.random() - 0.5) * 100}px`,
      color: ['#ff6b1a', '#ffd93d', '#4da6ff', '#39ff7a', '#b06dff'][Math.floor(Math.random() * 5)],
      opacity: Math.random() * 0.4 + 0.1,
    }))
  }, [])
  return (
    <>
      {particles.current.map(p => (
        <div key={p.id} className="tm-particle" style={{
          left: p.left, width: p.size, height: p.size,
          animationDuration: p.duration, animationDelay: p.delay,
          '--drift': p.drift, background: p.color, opacity: p.opacity,
          boxShadow: `0 0 ${parseInt(p.size) * 3}px ${p.color}`,
        }} />
      ))}
    </>
  )
}

const BOOT_LINES = [
  'INITIALIZING MISSION SYSTEMS...',
  'LOADING SCHEDULE MANIFEST...',
  'SYNCING SUPABASE PROGRESS DB...',
  'CALIBRATING IST TIMEZONE...',
  'COMPUTING BATTLE STATISTICS...',
  'MISSION CONTROL ONLINE.',
]

function BootScreen({ onDone }) {
  const [lines, setLines] = useState([])
  const [barW, setBarW] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    let i = 0
    const next = () => {
      if (i >= BOOT_LINES.length) {
        setTimeout(() => { setExit(true); setTimeout(onDone, 800) }, 300)
        return
      }
      setLines(prev => [...prev, BOOT_LINES[i]])
      setBarW(Math.round(((i + 1) / BOOT_LINES.length) * 100))
      i++
      setTimeout(next, 220 + Math.random() * 120)
    }
    const t = setTimeout(next, 200)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div className={`tm-boot${exit ? ' tm-boot-exit' : ''}`}>
      <div className="tm-boot-title">CRACKIT</div>
      <div className="tm-boot-lines">
        {lines.map((l, i) => (
          <div key={i} className="tm-boot-line" style={{ animationDelay: '0s' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: 8 }}>{'>'}</span>{l}
          </div>
        ))}
      </div>
      <div className="tm-boot-bar">
        <div className="tm-boot-fill" style={{ width: `${barW}%` }} />
      </div>
    </div>
  )
}

function OrbitalRing({ pct, size = 120, strokeW = 7, color = '#ff6b1a', glowColor }) {
  const r = (size - strokeW * 2) / 2
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - pct / 100)
  const [dash, setDash] = useState(circ)

  useEffect(() => {
    const id = setTimeout(() => setDash(offset), 400)
    return () => clearTimeout(id)
  }, [offset])

  return (
    <div className="tm-orbital-ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <defs>
          <linearGradient id="tmOrbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={glowColor || '#ffd93d'} />
          </linearGradient>
          <filter id="tmGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeW} />
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x1 = size/2 + (r - strokeW) * Math.cos(angle)
          const y1 = size/2 + (r - strokeW) * Math.sin(angle)
          const x2 = size/2 + (r - strokeW/2) * Math.cos(angle)
          const y2 = size/2 + (r - strokeW/2) * Math.sin(angle)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        })}
        <circle
          cx={size/2} cy={size/2} r={r} fill="none"
          stroke="url(#tmOrbGrad)" strokeWidth={strokeW} strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={dash}
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s', filter: 'url(#tmGlow)' }}
        />
        {pct > 0 && (() => {
          const angle = ((pct / 100) * 360 - 90) * (Math.PI / 180)
          const x = size/2 + r * Math.cos(angle)
          const y = size/2 + r * Math.sin(angle)
          return <circle cx={x} cy={y} r={strokeW/1.8} fill={color} style={{ filter: 'url(#tmGlow)', transition: 'all 1.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s' }} />
        })()}
      </svg>
      <div className="tm-orbital-center">
        <div className="tm-orbital-pct">{pct}%</div>
        <div className="tm-orbital-pct-sub">COMPLETE</div>
      </div>
    </div>
  )
}

function TaskCard({ task, index, checked, onToggle, saving, isReadOnly }) {
  const [expanded, setExpanded] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [verifyQ, setVerifyQ] = useState(null)
  const tc = TYPE_CONFIG[task.type] || TYPE_CONFIG.java

  useEffect(() => {
    const id = setTimeout(() => setRevealed(true), 100 + index * 90)
    return () => clearTimeout(id)
  }, [index])

  const handleVerify = (e) => {
    e.stopPropagation()
    setVerifyQ(getVerifyChallenge(task.verifyType || task.type))
    setExpanded(true)
  }

  return (
    <div className={`tm-task${checked ? ' tm-task-done' : ''}${revealed ? ' tm-task-revealed' : ''}`}
      style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="tm-task-main" onClick={() => !isReadOnly && onToggle(task.id)}>
        <div className="tm-task-accent" style={{ background: tc.color }} />
        <div className="tm-task-check">
          {checked && (
            <svg className="tm-check-icon" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="#39ff7a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <div className="tm-task-body">
          <div className="tm-task-type-badge" style={{ color: tc.color, background: tc.bg, borderColor: tc.border }}>
            {tc.icon} {tc.label}
          </div>
          <div className="tm-task-label">{task.label}</div>
          <div className="tm-task-footer">
            {task.link && (
              <a className="tm-task-link" href={task.link} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path d="M1 8L8 1M8 1H3M8 1v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                RESOURCE
              </a>
            )}
            {task.verifyType && !isReadOnly && (
              <button className="tm-task-verify-btn" onClick={handleVerify}>
                ⚡ VERIFY
              </button>
            )}
            {saving && <span style={{ fontSize: 9, color: 'var(--tm-muted)', fontFamily: 'JetBrains Mono' }}>saving...</span>}
          </div>
        </div>
        <div style={{ font: '700 10px/1 "JetBrains Mono",monospace', color: 'rgba(255,255,255,0.1)', flexShrink: 0, paddingLeft: 8 }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
      {expanded && verifyQ && (
        <div className="tm-verify-drop">
          <div className="tm-verify-label">🔍 VERIFY YOURSELF</div>
          <div className="tm-verify-q">"{verifyQ}"</div>
        </div>
      )}
    </div>
  )
}

function MidnightCountdown() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const calc = () => {
      const now = new Date()
      const ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 3600000)
      const midnight = new Date(ist); midnight.setHours(24, 0, 0, 0)
      const diff = midnight - ist
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTime(`${String(h).padStart(2,'0')}:${String(m).padStart(2,'00')}:${String(s).padStart(2,'0')}`)
    }
    calc(); const id = setInterval(calc, 1000); return () => clearInterval(id)
  }, [])
  return <>{time}</>
}

function LiveClock() {
  const [t, setT] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 3600000)
      setT([ist.getHours(), ist.getMinutes(), ist.getSeconds()].map(v => String(v).padStart(2,'0')).join(':'))
    }
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id)
  }, [])
  return <>{t}</>
}

function StatusCell({ label, value, sub, color, delay }) {
  const [rev, setRev] = useState(false)
  useEffect(() => { const id = setTimeout(() => setRev(true), delay); return () => clearTimeout(id) }, [delay])
  return (
    <div className={`tm-status-cell${rev ? ' tm-sc-revealed' : ''}`} style={{ '--accent': color }}>
      <div className="tm-sc-label">{label}</div>
      <div className="tm-sc-value" style={{ color }}>{value}</div>
      {sub && <div className="tm-sc-sub">{sub}</div>}
    </div>
  )
}

// ─── Main component — accepts dateStr prop ────────────────────
export default function DailyView({ dateStr }) {
  useInjectMissionCSS()

  // ── THE FIX: use dateStr prop, fall back to today only if not provided ──
  const today = getTodayIST()
  const activeDate = dateStr || today
  const isReadOnly = activeDate !== today  // past/future dates: view only

  const [booted, setBooted] = useState(false)
  const [progress, setProgress] = useState([])
  const [checks, setChecks] = useState({})
  const [savingId, setSavingId] = useState(null)
  const [saveState, setSaveState] = useState('idle')
  const saveTimer = useRef(null)

  const schedule  = getScheduleByDate(activeDate)
  const dayNum    = getDayNumber(activeDate)
  const totalDays = getTotalDays()
  const phase     = getPhase(activeDate)
  const phaseObj  = PHASES.find(p => p.id === phase) || PHASES[0]
  const surprise  = getRandomSurprise(activeDate)

  // Re-load progress + checks whenever activeDate changes
  useEffect(() => {
    getAllProgress().then(data => {
      setProgress(data || [])
      const entry = (data || []).find(p => p.date === activeDate)
      setChecks(entry?.checks || {})
    })
  }, [activeDate])

  const tasks        = schedule?.tasks || []
  const checkedCount = Object.values(checks).filter(Boolean).length
  const totalTasks   = tasks.length
  const todayPct     = totalTasks > 0 ? Math.round((checkedCount / totalTasks) * 100) : 0
  const allDone      = checkedCount === totalTasks && totalTasks > 0

  const completedDays = progress.filter(p => Object.values(p.checks || {}).some(Boolean)).length
  const pct = Math.round((completedDays / totalDays) * 100) || 0
  let streak = 0
  const sorted = [...progress].sort((a, b) => b.date.localeCompare(a.date))
  for (const p of sorted) { if (Object.values(p.checks || {}).some(Boolean)) streak++; else break }

  const handleToggle = useCallback(async (taskId) => {
    if (isReadOnly) return  // no toggling on past/future dates
    const next = { ...checks, [taskId]: !checks[taskId] }
    setChecks(next)
    setSavingId(taskId)
    setSaveState('saving')
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(async () => {
      await saveProgress(activeDate, next)
      setSavingId(null)
      setSaveState('done')
      setTimeout(() => setSaveState('idle'), 2000)
    }, 600)
  }, [checks, activeDate, isReadOnly])

  const saveLabel = saveState === 'saving' ? 'SAVING...' : saveState === 'done' ? 'SAVED ✓' : ''

  return (
    <div className="tm-root">
      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div className="tm-atmo">
        <div className="tm-atmo-radial" />
        <div className="tm-atmo-grid" />
        <div className="tm-atmo-scanline" />
        <div className="tm-atmo-vignette" />
        <Particles />
      </div>

      <div className="tm-content">

        {/* Past/future date banner */}
        {isReadOnly && (
          <div className="tm-past-banner">
            <span>📅 Viewing: {activeDate}</span>
            <span>{checkedCount}/{totalTasks} tasks were completed</span>
          </div>
        )}

        <div className="tm-header">
          <div className="tm-header-top">
            <div className="tm-header-left">
              <div className="tm-breadcrumb">
                <div className="tm-live-dot" />
                CRACKIT MISSION CONTROL
                <span style={{ opacity: 0.4 }}>·</span>
                PHASE {phase}
                <span style={{ opacity: 0.4 }}>·</span>
                {phaseObj.name.toUpperCase()}
              </div>
              <div className="tm-mission-id">
                MISSION <span>DAY {dayNum}</span>
              </div>
              <div className="tm-mission-sub">
                {schedule?.title}<br />
                {schedule?.hours} · {activeDate}
              </div>
            </div>

            <div className="tm-countdown-block">
              <div className="tm-countdown-label">⏱ WINDOW CLOSES IN</div>
              <div className="tm-countdown-time">
                {isReadOnly ? '—' : <MidnightCountdown />}
              </div>
              <div className="tm-countdown-sub">IST — MISSION DEADLINE</div>
            </div>
          </div>

          <div className="tm-status-strip">
            <StatusCell label="STREAK"      value={`${streak}🔥`}              sub="days"             color="#ff6b1a" delay={200} />
            <StatusCell label="DAY"         value={`${dayNum}/${totalDays}`}    sub="of program"       color="#ffd93d" delay={280} />
            <StatusCell label="TODAY"       value={`${checkedCount}/${totalTasks}`} sub="tasks done"   color="#39ff7a" delay={360} />
            <StatusCell label="DAYS ACTIVE" value={completedDays}               sub={`${pct}% overall`} color="#c77dff" delay={440} />
            <StatusCell label="PHASE"       value={`P${phase}/6`}               sub={phaseObj.name}   color={phaseObj.color} delay={520} />
          </div>
        </div>

        <div className="tm-orbital-section" style={{ borderColor: `${phaseObj.color}35` }}>
          <OrbitalRing pct={todayPct} size={130} strokeW={7} color={phaseObj.color} glowColor={phaseObj.color === '#f97316' ? '#ffd93d' : phaseObj.color} />
          <div className="tm-orbital-info">
            <div className="tm-orbital-tag" style={{ color: phaseObj.color }}>
              {phaseObj.icon} {phaseObj.tag.toUpperCase()}
            </div>
            <div className="tm-orbital-title">{schedule?.title?.replace(/^Day \d+ — /, '') || "Today's Operations"}</div>
            <div className="tm-orbital-meta">
              {checkedCount === 0 && (isReadOnly ? 'No tasks completed on this day' : 'Mission not yet started · Begin when ready')}
              {checkedCount > 0 && checkedCount < totalTasks && `${totalTasks - checkedCount} operations remaining · ${todayPct}% mission progress`}
              {allDone && '🎯 All systems nominal · Mission complete'}
            </div>
          </div>
        </div>

        <div className="tm-journey">
          <div className="tm-journey-header">
            <div className="tm-journey-label">PROGRAM JOURNEY</div>
            <div className="tm-journey-pct">{pct}% · {completedDays} days active</div>
          </div>
          <div className="tm-journey-track">
            <div className="tm-journey-fill" style={{ transform: `scaleX(${Math.max(pct / 100, 0.004)})` }} />
          </div>
          <div className="tm-journey-dates"><span>May 17 2026</span><span>Jan 31 2027</span></div>
        </div>

        {allDone && (
          <>
            <div className="tm-complete-banner">
              <div className="tm-complete-icon">🎯</div>
              <div className="tm-complete-title">ALL SYSTEMS NOMINAL</div>
              <div className="tm-complete-sub">DAY {dayNum} MISSION COMPLETE · STREAK EXTENDED · COMMIT TO GITHUB</div>
            </div>
            <div className="tm-surprise">
              <div className="tm-surprise-icon">{surprise.type === 'meal' ? '🍽️' : surprise.type === 'flex' ? '💪' : '💬'}</div>
              <div>
                <div className="tm-surprise-label">🏆 MISSION REWARD UNLOCKED</div>
                <div className="tm-surprise-text">{surprise.content}</div>
              </div>
            </div>
          </>
        )}

        <div>
          <div className="tm-ops-header">
            <div className="tm-ops-title">OPERATIONAL TASKS {isReadOnly && '· READ ONLY'}</div>
            <div className="tm-ops-count">{checkedCount}/{totalTasks} COMPLETE</div>
          </div>
          <div className="tm-task-list">
            {tasks.map((task, i) => (
              <TaskCard
                key={task.id}
                task={task}
                index={i}
                checked={!!checks[task.id]}
                onToggle={handleToggle}
                saving={savingId === task.id}
                isReadOnly={isReadOnly}
              />
            ))}
          </div>
        </div>

        <div className="tm-phase-intel">
          <div className="tm-pi-header">
            <div className="tm-pi-icon">{phaseObj.icon}</div>
            <div>
              <div className="tm-pi-badge" style={{ color: phaseObj.color, background: `${phaseObj.color}12`, borderColor: `${phaseObj.color}30` }}>
                PHASE {phase} INTEL
              </div>
              <div className="tm-pi-name">{phaseObj.name}</div>
            </div>
          </div>
          <div className="tm-pi-grid">
            <div className="tm-pi-cell">
              <div className="tm-pi-cell-label">DATES</div>
              <div className="tm-pi-cell-val">{phaseObj.dates}</div>
            </div>
            <div className="tm-pi-cell">
              <div className="tm-pi-cell-label">OBJECTIVE</div>
              <div className="tm-pi-cell-val">{phaseObj.desc}</div>
            </div>
            <div className="tm-pi-cell">
              <div className="tm-pi-cell-label">FOCUS</div>
              <div className="tm-pi-cell-val">{phaseObj.tag}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tm-footer-ribbon">
        <div className="tm-ribbon-left">
          <div className="tm-ribbon-clock"><LiveClock /></div>
          <div className="tm-ribbon-sep" />
          <div className="tm-ribbon-progress">
            <div className="tm-ribbon-bar">
              <div className="tm-ribbon-fill" style={{ width: `${todayPct}%` }} />
            </div>
            <div className="tm-ribbon-pct">{todayPct}%</div>
          </div>
          {saveLabel && (
            <>
              <div className="tm-ribbon-sep" />
              <div className={`tm-saving${saveState !== 'idle' ? ` tm-saving-${saveState === 'saving' ? 'active' : 'done'}` : ''}`}>
                {saveLabel}
              </div>
            </>
          )}
        </div>
        <div className="tm-ribbon-right">
          <div className="tm-ribbon-day">DAY {dayNum} · {activeDate}</div>
          <div className="tm-ribbon-target">🏆 MICROSOFT</div>
        </div>
      </div>
    </div>
  )
}