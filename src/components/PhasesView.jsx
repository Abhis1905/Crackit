import { useState, useEffect, useRef } from 'react'
import { PHASES, getTodayIST, getPhase } from '../data/schedule'

const PHASE_DETAILS = [
  {
    id: 1,
    icon: '☕',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.4)',
    codename: 'IRON FOUNDATION',
    duration: 'May 17 – May 24 · 8 days · 8 hrs/day',
    mission: 'Zero DSA. Build Java muscle memory so every algorithm you write later will be clean. Frontend starts on weekends.',
    checkpoint: 'Java: variables, loops, arrays, strings, sorting all coded from scratch · Profile page live on GitHub Pages',
    threat: 'CRITICAL',
    weeks: [
      { label: 'Days 1–4', dates: 'May 17–20', topics: 'Variables, data types, operators, if/else, switch, loops (for/while/do-while)', dsa: 'No DSA yet — Java instinct first', build: 'Console calculator, number guessing game', apt: 'IndiaBix: Number System, Percentages, Ratios — 15q each' },
      { label: 'Days 5–8', dates: 'May 21–24', topics: 'Arrays (1D/2D), Strings, StringBuilder, Enums, exception handling', dsa: 'No DSA yet', build: 'Student marks tracker CLI', apt: 'IndiaBix: Profit & Loss, Time & Work — 15q each · Weekend: Deploy profile page to GitHub Pages' },
    ],
    rules: [
      'Write every program from scratch — no copy-paste, no ChatGPT.',
      'Push to GitHub every single day. Non-negotiable.',
      'No DSA until Day 9. Java instinct must come first.',
      'Weekend: HTML/CSS/Flexbox/Grid — deploy a live page.',
    ],
  },
  {
    id: 2,
    icon: '🔥',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.4)',
    codename: 'DUAL STRIKE',
    duration: 'May 25 – Jun 14 · 21 days · 8 hrs vacation → 3 hrs college',
    mission: 'DSA and OOP run in parallel every weekday. A2Z Steps 1–5. Frontend only on weekends. College starts Jun 8.',
    checkpoint: 'A2Z Steps 1–5 complete · OOP: class/inheritance/polymorphism/interfaces/generics/streams all coded · React movie app deployed',
    threat: 'HIGH',
    weeks: [
      { label: 'Week 1', dates: 'May 25–31', topics: 'OOP: class, object, constructor, encapsulation, inheritance', dsa: 'A2Z Step 1: count digits, reverse num, palindrome, GCD, Armstrong, prime · Step 2: all sorting', build: 'Student + BankAccount + Animal hierarchy', apt: 'IndiaBix: Coding-Decoding, Seating, Syllogisms — 15q each' },
      { label: 'Week 2', dates: 'Jun 1–7', topics: 'OOP: polymorphism, abstract, interfaces, generics, lambda, Streams', dsa: 'A2Z Step 3: Arrays Easy + Medium + Hard (full section)', build: 'Shape hierarchy + generic Stack<T> · Weekend: React useState/useEffect + movie search app deployed on Vercel', apt: 'IndiaBix: mixed 30q mock · Weekend: Aptitude mock 30q' },
      { label: 'Week 3', dates: 'Jun 8–14', topics: 'College starts — evening only. OOP: Comparable/Comparator, Collections deep dive, design patterns', dsa: 'A2Z Step 4: Binary Search (classic + on answer + hard) · Step 5: Strings', build: 'Movie app with React Router + Tailwind (weekend)', apt: 'IndiaBix: 15q daily · Weekend: 25q mock' },
    ],
    rules: [
      'DSA + OOP every weekday without exception — both slots.',
      'Frontend is weekend-only from Phase 2 onwards.',
      'College starts Jun 8 — evening only (3 tasks, ~3 hrs).',
      'Every DSA problem: write time/space complexity before moving on.',
    ],
  },
  {
    id: 3,
    icon: '⚡',
    color: '#6bcb77',
    glow: 'rgba(107,203,119,0.4)',
    codename: 'DEEP STRIKE',
    duration: 'Jun 15 – Jul 20 · 36 days · 3 hrs weekdays · 7 hrs weekends',
    mission: 'College mode weekdays. A2Z Steps 6–12: LL, Recursion, Bit Manipulation, Stack, Queue, Heaps, Greedy. Frontend deepens on weekends.',
    checkpoint: 'A2Z Steps 6–12 complete · TypeScript migrated · Next.js blog deployed · CS Fundamentals: OS/DBMS/CN notes done',
    threat: 'HIGH',
    weeks: [
      { label: 'Week 1–2', dates: 'Jun 15–28', topics: 'LL (singly/doubly/hard) · Recursion + Backtracking (subsets, permutations, N-Queens, Sudoku)', dsa: 'A2Z Step 6: Linked List all problems · Step 7: Recursion + Backtracking', build: 'Weekend: TypeScript migration of movie app · Zustand favourites store', apt: 'IndiaBix 15q daily · OS fundamentals (weekend)' },
      { label: 'Week 3–4', dates: 'Jun 29–Jul 12', topics: 'Bit Manipulation · Stack (monotonic, LRU Cache) · Queue · Sliding Window', dsa: 'A2Z Step 8: Bit Manip · Step 9: Stack + Queue · Step 10: Sliding Window', build: 'Weekend: Next.js blog · TanStack Query + Framer Motion in movie app', apt: 'IndiaBix 15q daily · DBMS + CN fundamentals (weekends)' },
      { label: 'Week 5', dates: 'Jul 13–20', topics: 'Heaps · Greedy · SQL basics', dsa: 'A2Z Step 11: Heaps · Step 12: Greedy · SQL: 20 SQLZoo + 20 HackerRank problems', build: 'Weekend: JDBC intro · Portfolio site with CardioScan/NaturalApp/DSA Visualizer deployed', apt: 'IndiaBix 15q daily · 30q weekend mock' },
    ],
    rules: [
      'LRU Cache: must be able to code from scratch with zero notes. Critical interview Q.',
      'Every weekend: Frontend + CS Fundamentals — both, not one.',
      'SQL is a backend prerequisite — 40 problems minimum this phase.',
      'Re-solve the 5 hardest problems from scratch each Sunday.',
    ],
  },
  {
    id: 4,
    icon: '🌐',
    color: '#4d96ff',
    glow: 'rgba(77,150,255,0.4)',
    codename: 'BACKEND SIEGE',
    duration: 'Jul 21 – Sep 14 · 56 days · 3 hrs weekdays · 7 hrs weekends',
    mission: 'OOP complete. Backend takes the OOP slot. Spring Boot REST → JPA → JWT → Docker. DSA: A2Z Steps 13–17. Major project skeleton.',
    checkpoint: 'Spring Boot API with JWT auth deployed on Render · PostgreSQL on Supabase · React frontend on Vercel · A2Z Steps 13–17 complete',
    threat: 'ELEVATED',
    weeks: [
      { label: 'Week 1–2', dates: 'Jul 21–Aug 1', topics: 'Spring Boot: Initializr, @RestController, JPA, @Entity, CRUD API, @ControllerAdvice, DTOs', dsa: 'A2Z Step 13: Trees (Binary Tree, BST all problems) · SDE Sheet starts', build: 'Student CRUD API — all endpoints tested in Postman', apt: 'IndiaBix 15q daily' },
      { label: 'Week 3–4', dates: 'Aug 1–15', topics: 'Spring Security + JWT auth · @Service/@Repository layers · Docker + docker-compose', dsa: 'A2Z Step 14: BST hard · SDE Sheet problems weekly', build: 'Login/register → JWT token → protected endpoints · Docker image running', apt: 'IndiaBix 15q daily · Weekend: 30q mock' },
      { label: 'Week 5–6', dates: 'Aug 15–Sep 1', topics: 'MongoDB + Redis caching · API versioning + Swagger · Spring Boot project: major entity + auth', dsa: 'A2Z Step 15: Tries · Step 16: Graphs (BFS/DFS/Topo/Dijkstra/Bellman-Ford/MST/DSU)', build: 'Major project: auth + CRUD + relationships working · React frontend connected', apt: 'IndiaBix 15q daily · AMCAT 60q full mock (weekend)' },
      { label: 'Week 7–8', dates: 'Sep 1–14', topics: 'Spring Boot advanced: pagination, caching, WebSocket intro, rate limiting · Deploy to Render', dsa: 'A2Z Step 17: DP (1D, 2D, Knapsack, LCS, LIS, stocks, interval DP)', build: 'Backend deployed live · System Design PREVIEW: URL Shortener', apt: 'IndiaBix 15q daily · 60q full mock' },
    ],
    rules: [
      'Backend only starts after OOP is solid — Phase 4 = OOP prerequisite paid off.',
      'Every Spring Boot endpoint: test in Postman before moving on.',
      'Major project must have a live URL by end of Phase 4.',
      'DP: do BOTH memoization and tabulation for every problem.',
    ],
  },
  {
    id: 5,
    icon: '🚀',
    color: '#ff6b6b',
    glow: 'rgba(255,107,107,0.4)',
    codename: 'FINAL APPROACH',
    duration: 'Sep 15 – Nov 15 · 62 days · 3 hrs weekdays · 7 hrs weekends',
    mission: 'A2Z finish by late Oct. Major project polished and deployed. System Design deepens. S79 preview starts Nov 1.',
    checkpoint: '3 live projects with proper READMEs · System Design: 4 systems designed · A2Z complete · S79 problems 1–30 done',
    threat: 'ELEVATED',
    weeks: [
      { label: 'Week 1–3', dates: 'Sep 15–Oct 5', topics: 'Major project: final features, bug fixes, README, Lighthouse 90+', dsa: 'SDE Sheet completion sprint · Re-solve A2Z weak spots', build: 'All 3 projects with live URLs + screenshots deployed', apt: 'IndiaBix 15q daily · AMCAT mock #2' },
      { label: 'Week 4–6', dates: 'Oct 5–Nov 1', topics: 'System Design deep dive: CAP, Consistent Hashing, DB Sharding, Caching, Message Queues', dsa: 'SDE Sheet hard problems · Company-tagged LC (JPMC/PayPal filter)', build: 'System Design docs: URL Shortener, Twitter, Uber, WhatsApp', apt: 'IndiaBix 15q daily · OA simulation weekly' },
      { label: 'Week 7–8', dates: 'Nov 1–15', topics: 'Resume update · LinkedIn push · S79 begins · Apply to first companies', dsa: 'S79 problems 1–30 · Blind75 preview', build: 'Resume: LaTeX updated with project metrics · 5+ applications submitted', apt: 'IndiaBix 15q daily · 60q full mock' },
    ],
    rules: [
      'System Design: always design on paper BEFORE Googling the solution.',
      'No new tech this phase — deepen what exists.',
      'Every project bullet on resume needs a live URL. No exceptions.',
      'S79 starts Nov 1 — treat each problem as a real interview question.',
    ],
  },
  {
    id: 6,
    icon: '🎯',
    color: '#ffd93d',
    glow: 'rgba(255,217,61,0.4)',
    codename: 'KILL SHOT',
    duration: 'Nov 16 – Jan 31 2027 · 77 days · 4 hrs intensified',
    mission: 'S79 + Blind75. Company-tagged problems. Mock interviews weekly. Apply every week. Everything converges here.',
    checkpoint: 'S79 complete · Blind75 complete · 30+ applications sent · 6+ mock interviews done · Offer received',
    threat: 'MAX',
    weeks: [
      { label: 'Week 1–4', dates: 'Nov 16–Dec 14', topics: 'S79: Arrays → Binary Search → Strings → LL → Stack/Queue → Trees · Java theory daily', dsa: 'S79 + Blind75 parallel · 2 problems/day minimum', build: 'Apply 3 companies/week · Pramp mock every 2 weeks', apt: 'IndiaBix 15q daily · OA simulation weekly' },
      { label: 'Week 5–8', dates: 'Dec 15–Jan 15', topics: 'System Design verbal: 45-min spoken answers · HR STAR answers written + rehearsed', dsa: 'S79 + B75 complete · Company-tagged LC daily', build: 'Apply 3+ companies/week · Pramp mock weekly now', apt: 'AMCAT full mock · Full OA simulations' },
      { label: 'Week 9–11', dates: 'Jan 15–31', topics: 'DRILL only. No new topics. Trust the 8 months.', dsa: 'Speed-run: any S79/B75 problem in 30 min · 5 weakest patterns nailed', build: 'Final Pramp sessions · Resume PDF final pass · 30+ apps confirmed', apt: "You're ready. Sleep 8 hrs. Trust the process." },
    ],
    rules: [
      'S79 + Blind75 = interview sharpness. SDE Sheet = interview breadth. Do both.',
      'Mock interviews every 2 days minimum from Jan. Speed matters.',
      'Apply 3+ companies per week. Consistent, not bursty.',
      'No new tech in Phase 6. This phase is DRILL not LEARN.',
    ],
  },
]

const PHASE_RANGES = [
  { start: '2026-05-17', end: '2026-05-24' },
  { start: '2026-05-25', end: '2026-06-14' },
  { start: '2026-06-15', end: '2026-07-20' },
  { start: '2026-07-21', end: '2026-09-14' },
  { start: '2026-09-15', end: '2026-11-15' },
  { start: '2026-11-16', end: '2027-01-31' },
]

const THREAT_META = {
  CRITICAL: { color: '#ff2d78', label: '🔴 CRITICAL' },
  HIGH:     { color: '#ff6b1a', label: '🟠 HIGH' },
  ELEVATED: { color: '#ffd93d', label: '🟡 ELEVATED' },
  MAX:      { color: '#ff2d78', label: '☠ MAXIMUM' },
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap');

.pv *, .pv *::before, .pv *::after { box-sizing: border-box; }
.pv { font-family: 'Rajdhani', sans-serif; }

/* ── HEADER ── */
.pv-mission-badge {
  font-family: 'Share Tech Mono', monospace;
  font-size: 8px; letter-spacing: 3px; color: rgba(0,255,80,.65);
  display: flex; align-items: center; gap: 7px; margin-bottom: 8px;
}
.pv-pulse {
  width: 5px; height: 5px; border-radius: 50%;
  background: #00ff50; box-shadow: 0 0 8px #00ff50;
  animation: pvBlink 1.4s step-start infinite;
}
@keyframes pvBlink { 50% { opacity: 0; box-shadow: none; } }

.pv-title {
  font-family: 'Orbitron', monospace;
  font-size: clamp(20px,3.5vw,28px); font-weight: 900;
  color: #fff; letter-spacing: 2px; margin: 0 0 4px;
  text-shadow: 0 0 28px rgba(0,255,80,.2);
}
.pv-subtitle {
  font-family: 'Share Tech Mono', monospace;
  font-size: 9px; color: rgba(0,255,80,.3); letter-spacing: 2px; margin-bottom: 14px;
}

/* ── PHASE PILLS ── */
.pv-pills { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 28px; }
.pv-pill {
  font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1px;
  padding: 5px 12px; border: 1px solid; cursor: pointer; transition: all .2s;
  background: transparent; position: relative; overflow: hidden;
}
.pv-pill::before {
  content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent);
  transition: left .4s ease;
}
.pv-pill:hover::before { left: 100%; }

/* ── TIMELINE SPINE ── */
.pv-timeline { position: relative; padding-left: 56px; }
.pv-spine {
  position: absolute; left: 20px; top: 0; bottom: 0; width: 1px;
  background: linear-gradient(180deg,
    rgba(249,115,22,.6), rgba(168,85,247,.6), rgba(107,203,119,.6),
    rgba(77,150,255,.6), rgba(255,107,107,.6), rgba(255,217,61,.6));
}
.pv-spine-glow {
  position: absolute; left: 18px; top: 0; bottom: 0; width: 5px;
  background: linear-gradient(180deg,
    rgba(249,115,22,.12), rgba(168,85,247,.12), rgba(107,203,119,.12),
    rgba(77,150,255,.12), rgba(255,107,107,.12), rgba(255,217,61,.12));
  filter: blur(3px);
}

/* ── NODE ── */
.pv-node-wrap {
  position: relative; margin-bottom: 6px;
  opacity: 0; transform: translateX(-16px);
  animation: pvNodeIn .45s cubic-bezier(.34,1.56,.64,1) both;
}
@keyframes pvNodeIn { to { opacity: 1; transform: translateX(0); } }

/* Dot on spine */
.pv-spine-dot {
  position: absolute; left: -44px; top: 16px;
  width: 12px; height: 12px; border-radius: 50%;
  border: 2px solid var(--nc); background: #020408;
  box-shadow: 0 0 10px var(--nc), 0 0 20px var(--nc-dim);
  transition: all .3s;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
}
.pv-spine-dot.active {
  width: 16px; height: 16px; left: -46px; top: 14px;
  background: var(--nc-dim);
  box-shadow: 0 0 14px var(--nc), 0 0 28px var(--nc-dim), 0 0 48px var(--nc-dim);
  animation: pvDotPulse 2s ease-in-out infinite;
}
@keyframes pvDotPulse { 50% { box-shadow: 0 0 22px var(--nc), 0 0 44px var(--nc-dim); } }

.pv-spine-dot-current {
  position: absolute; left: -47px; top: 12px;
  width: 18px; height: 18px; border-radius: 50%;
  border: 1px solid var(--nc); opacity: .3;
  animation: pvCurrentRing 2s ease-in-out infinite;
}
@keyframes pvCurrentRing { 0%,100% { transform: scale(1); opacity: .3; } 50% { transform: scale(1.5); opacity: 0; } }

/* ── CARD ── */
.pv-card {
  background: rgba(0,0,0,.55);
  border: 1px solid rgba(255,255,255,.06);
  border-left: 2px solid var(--nc);
  padding: 0;
  transition: all .25s ease;
  position: relative; overflow: hidden;
  cursor: pointer;
}
.pv-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, var(--nc), transparent);
  opacity: .4;
}
.pv-card:hover { border-color: var(--nc); box-shadow: 0 0 20px var(--nc-dim); }
.pv-card.active {
  background: var(--nc-bg);
  border-color: var(--nc);
  box-shadow: 0 0 32px var(--nc-dim), inset 0 0 32px rgba(0,0,0,.4);
}

/* Sweep animation */
.pv-card::after {
  content: ''; position: absolute; top: 0; left: -100%; width: 40%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.02), transparent);
  pointer-events: none;
}
.pv-card:hover::after { animation: pvCardSweep .6s ease forwards; }
@keyframes pvCardSweep { to { left: 140%; } }

/* ── CARD HEADER ── */
.pv-card-hdr {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 16px; position: relative;
}

.pv-phase-num {
  font-family: 'Orbitron', monospace; font-size: 28px; font-weight: 900;
  color: var(--nc); opacity: .18; line-height: 1; flex-shrink: 0;
  text-shadow: 0 0 20px var(--nc);
  transition: opacity .3s;
}
.pv-card.active .pv-phase-num { opacity: .35; }

.pv-card-meta { flex: 1; min-width: 0; }

.pv-codename {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; letter-spacing: 3px;
  color: var(--nc); opacity: .8; margin-bottom: 3px;
  display: flex; align-items: center; gap: 8px;
}

.pv-active-tag {
  font-family: 'Share Tech Mono', monospace; font-size: 7px; letter-spacing: 1px;
  color: #ff6b1a; background: rgba(255,107,26,.12);
  border: 1px solid rgba(255,107,26,.3); padding: 1px 6px;
  animation: pvTagBlink 1.8s ease-in-out infinite;
}
@keyframes pvTagBlink { 50% { opacity: .4; } }

.pv-phase-name {
  font-family: 'Orbitron', monospace; font-size: 13px; font-weight: 700; color: #fff;
  margin-bottom: 3px; letter-spacing: .5px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.pv-duration {
  font-family: 'Share Tech Mono', monospace; font-size: 8px;
  color: rgba(255,255,255,.25); letter-spacing: .5px;
}

.pv-card-right { display: flex; flex-direction: column; align-items: flex-end; gap: 5px; flex-shrink: 0; }

.pv-threat {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; letter-spacing: 1px;
  padding: 2px 8px; border: 1px solid; border-color: var(--tc); color: var(--tc);
}

.pv-progress-ring { position: relative; width: 42px; height: 42px; flex-shrink: 0; }
.pv-progress-ring svg { position: absolute; inset: 0; }
.pv-ring-center {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-family: 'Orbitron', monospace; font-size: 9px; font-weight: 700; color: var(--nc);
}

.pv-chevron {
  font-size: 10px; color: var(--nc); opacity: .5;
  transition: transform .3s, opacity .3s;
  font-family: 'Share Tech Mono', monospace;
}
.pv-card.active .pv-chevron { transform: rotate(90deg); opacity: 1; }

/* ── PROGRESS BAR ── */
.pv-prog-bar-wrap { padding: 0 16px 12px; }
.pv-prog-bar {
  height: 2px; background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.04); overflow: hidden; position: relative;
}
.pv-prog-fill {
  height: 100%; background: var(--nc);
  box-shadow: 0 0 6px var(--nc);
  transform-origin: left;
  transition: transform 1.2s cubic-bezier(.34,1.56,.64,1) .3s;
  position: relative; overflow: hidden;
}
.pv-prog-fill::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.5), transparent);
  animation: pvShimmer 2s linear 1.5s infinite;
}
@keyframes pvShimmer { from { transform: translateX(-100%); } to { transform: translateX(400%); } }

/* ── EXPANDED BODY ── */
.pv-body {
  padding: 0 16px 16px;
  animation: pvBodyIn .35s cubic-bezier(.34,1.56,.64,1);
  border-top: 1px solid rgba(255,255,255,.04);
  padding-top: 14px;
}
@keyframes pvBodyIn { from { opacity: 0; transform: translateY(-8px); } }

.pv-mission-block {
  background: var(--nc-bg); border: 1px solid var(--nc-border);
  border-left: 3px solid var(--nc);
  padding: 10px 14px; margin-bottom: 14px;
}
.pv-mission-label {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; letter-spacing: 2px;
  color: var(--nc); margin-bottom: 5px;
}
.pv-mission-text { font-size: 12px; color: rgba(255,255,255,.55); line-height: 1.6; }

/* ── CHECKPOINT ── */
.pv-checkpoint {
  background: rgba(57,255,20,.04); border: 1px solid rgba(57,255,20,.12);
  padding: 10px 14px; margin-bottom: 14px; display: flex; gap: 10px; align-items: flex-start;
}
.pv-checkpoint-label {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; letter-spacing: 2px;
  color: #39ff14; margin-bottom: 4px;
}
.pv-checkpoint-text { font-size: 11px; color: rgba(255,255,255,.55); line-height: 1.5; }

/* ── WEEKS ── */
.pv-weeks { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
.pv-week {
  background: rgba(0,0,0,.4); border: 1px solid rgba(255,255,255,.04);
  border-left: 2px solid var(--nc); padding: 10px 13px;
  animation: pvBodyIn .3s ease both;
}
.pv-week-hdr {
  display: flex; align-items: center; gap: 8px; margin-bottom: 8px;
}
.pv-week-label {
  font-family: 'Orbitron', monospace; font-size: 9px; color: var(--nc); font-weight: 700;
}
.pv-week-dates {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; color: rgba(255,255,255,.2);
}
.pv-week-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.pv-week-slot {
  background: var(--ws-bg); border: 1px solid var(--ws-border);
  padding: 7px 9px;
}
.pv-week-slot-label {
  font-family: 'Share Tech Mono', monospace; font-size: 7px; letter-spacing: 1px;
  color: var(--ws-color); margin-bottom: 3px;
}
.pv-week-slot-text { font-size: 10px; color: rgba(255,255,255,.5); line-height: 1.45; }

/* ── SECTION LABEL ── */
.pv-section {
  font-family: 'Share Tech Mono', monospace;
  font-size: 7px; letter-spacing: 2px; color: rgba(0,255,80,.25); text-transform: uppercase;
  margin-bottom: 8px; display: flex; align-items: center; gap: 6px;
}
.pv-section::after { content: ''; flex: 1; height: 1px; background: linear-gradient(90deg, rgba(0,255,80,.1), transparent); }

/* ── RULES ── */
.pv-rules { display: flex; flex-direction: column; gap: 5px; }
.pv-rule {
  display: flex; gap: 8px; align-items: flex-start;
  font-size: 11px; color: rgba(255,255,255,.45); line-height: 1.55;
  padding: 5px 9px; background: rgba(255,255,255,.02); border: 1px solid rgba(255,255,255,.04);
}
.pv-rule-arrow { color: var(--nc); flex-shrink: 0; font-family: 'Share Tech Mono', monospace; font-size: 10px; margin-top: 1px; }

/* ── GOAL BLOCK ── */
.pv-goal {
  margin-top: 24px;
  background: rgba(0,0,0,.8);
  border: 1px solid rgba(255,217,61,.25);
  padding: 16px 22px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  position: relative; overflow: hidden;
  animation: pvGoalGlow 5s ease-in-out infinite;
}
@keyframes pvGoalGlow {
  0%,100% { box-shadow: 0 0 12px rgba(255,217,61,.06); }
  50%      { box-shadow: 0 0 32px rgba(255,217,61,.2); }
}
.pv-goal::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,217,61,.03), transparent);
  animation: pvGoalSweep 3s linear infinite;
}
@keyframes pvGoalSweep { from { transform: translateX(-100%); } to { transform: translateX(100%); } }
.pv-goal-left { }
.pv-goal-tag {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; letter-spacing: 2px;
  color: rgba(255,217,61,.5); margin-bottom: 4px;
}
.pv-goal-title {
  font-family: 'Orbitron', monospace; font-size: 15px; font-weight: 900;
  color: #ffd93d; text-shadow: 0 0 16px rgba(255,217,61,.5); letter-spacing: 1px;
}
.pv-goal-right {
  font-family: 'Share Tech Mono', monospace; font-size: 8px; color: rgba(255,217,61,.3);
  text-align: right; line-height: 2;
}
`

function useCSS() {
  useEffect(() => {
    if (document.getElementById('pv-styles')) return
    const tag = document.createElement('style')
    tag.id = 'pv-styles'
    tag.textContent = CSS
    document.head.appendChild(tag)
  }, [])
}

function ProgressRing({ pct, color, size = 42 }) {
  const r = (size / 2) - 5
  const circ = 2 * Math.PI * r
  const [offset, setOffset] = useState(circ)
  useEffect(() => {
    const id = setTimeout(() => setOffset(circ * (1 - pct / 100)), 400)
    return () => clearTimeout(id)
  }, [pct, circ])
  return (
    <div className="pv-progress-ring" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,.05)" strokeWidth="3" />
        <circle
          cx={size/2} cy={size/2} r={r} fill="none"
          stroke={color} strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(.34,1.56,.64,1) .5s', filter: `drop-shadow(0 0 4px ${color})` }}
        />
      </svg>
      <div className="pv-ring-center" style={{ '--nc': color }}>{pct}%</div>
    </div>
  )
}

function PhaseCard({ detail, phase, index, isActive, isCurrent, progressPct, onClick }) {
  const [scaleBar, setScaleBar] = useState(false)
  useEffect(() => { if (isActive || progressPct > 0) { const id = setTimeout(() => setScaleBar(true), 100); return () => clearTimeout(id) } }, [isActive, progressPct])

  const threat = THREAT_META[detail.threat] || THREAT_META.ELEVATED
  const nc = phase.color
  const ncDim = phase.glow
  const ncBg = `${nc}08`
  const ncBorder = `${nc}20`

  return (
    <div
      className="pv-node-wrap"
      style={{ '--nc': nc, '--nc-dim': ncDim, '--nc-bg': ncBg, '--nc-border': ncBorder, animationDelay: `${index * 80}ms` }}
    >
      {/* Spine dot */}
      <div
        className={`pv-spine-dot${isActive || isCurrent ? ' active' : ''}`}
        style={{ '--nc': nc, '--nc-dim': ncDim }}
        onClick={onClick}
      >
        {isCurrent && <div className="pv-spine-dot-current" style={{ '--nc': nc }} />}
      </div>

      {/* Card */}
      <div className={`pv-card${isActive ? ' active' : ''}`} style={{ '--nc': nc, '--nc-dim': ncDim, '--nc-bg': ncBg, '--nc-border': ncBorder }}>

        {/* Header */}
        <div className="pv-card-hdr" onClick={onClick}>
          <div className="pv-phase-num">{String(phase.id).padStart(2,'0')}</div>

          <div className="pv-card-meta">
            <div className="pv-codename">
              {phase.icon} {detail.codename}
              {isCurrent && <span className="pv-active-tag">● ACTIVE</span>}
            </div>
            <div className="pv-phase-name">{phase.name || phase.label}</div>
            <div className="pv-duration">{detail.duration}</div>
          </div>

          <div className="pv-card-right">
            <div className="pv-threat" style={{ '--tc': threat.color }}>{threat.label}</div>
            {progressPct > 0 && <ProgressRing pct={progressPct} color={nc} />}
            <div className="pv-chevron">▶</div>
          </div>
        </div>

        {/* Progress bar (always) */}
        <div className="pv-prog-bar-wrap">
          <div className="pv-prog-bar">
            <div
              className="pv-prog-fill"
              style={{
                '--nc': nc,
                transform: `scaleX(${scaleBar ? progressPct / 100 : 0})`,
              }}
            />
          </div>
        </div>

        {/* Expanded body */}
        {isActive && (
          <div className="pv-body" style={{ '--nc': nc, '--nc-bg': ncBg, '--nc-border': ncBorder }}>

            {/* Mission */}
            <div className="pv-mission-block">
              <div className="pv-mission-label">⚡ MISSION OBJECTIVE</div>
              <div className="pv-mission-text">{detail.mission}</div>
            </div>

            {/* Checkpoint */}
            <div className="pv-checkpoint">
              <span style={{ fontSize: 14 }}>🏆</span>
              <div>
                <div className="pv-checkpoint-label">PHASE CHECKPOINT</div>
                <div className="pv-checkpoint-text">{detail.checkpoint}</div>
              </div>
            </div>

            {/* Weeks */}
            <div className="pv-section">Week Breakdown</div>
            <div className="pv-weeks">
              {detail.weeks.map((week, wi) => (
                <div key={wi} className="pv-week" style={{ '--nc': nc, animationDelay: `${wi * 60}ms` }}>
                  <div className="pv-week-hdr">
                    <span className="pv-week-label">{week.label}</span>
                    <span className="pv-week-dates">{week.dates}</span>
                  </div>
                  <div className="pv-week-grid">
                    {[
                      { icon: '📺', label: 'LEARN', val: week.topics, bg: 'rgba(77,150,255,.06)', border: 'rgba(77,150,255,.15)', c: '#4d96ff' },
                      { icon: '⚡', label: 'DSA',   val: week.dsa,    bg: 'rgba(255,107,26,.06)', border: 'rgba(255,107,26,.15)', c: '#ff6b1a' },
                      { icon: '🔨', label: 'BUILD', val: week.build,  bg: 'rgba(168,85,247,.06)', border: 'rgba(168,85,247,.15)', c: '#a855f7' },
                      { icon: '🧮', label: 'APT',   val: week.apt,    bg: 'rgba(107,203,119,.06)', border: 'rgba(107,203,119,.15)', c: '#6bcb77' },
                    ].map(slot => (
                      <div key={slot.label} className="pv-week-slot"
                        style={{ '--ws-bg': slot.bg, '--ws-border': slot.border, '--ws-color': slot.c }}>
                        <div className="pv-week-slot-label">{slot.icon} {slot.label}</div>
                        <div className="pv-week-slot-text">{slot.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Rules */}
            <div className="pv-section">Phase Rules — Non-Negotiable</div>
            <div className="pv-rules">
              {detail.rules.map((rule, ri) => (
                <div key={ri} className="pv-rule" style={{ '--nc': nc }}>
                  <span className="pv-rule-arrow">→</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PhasesView() {
  useCSS()
  const today = getTodayIST()
  const currentPhaseId = getPhase(today) ?? 1
  const [activePhase, setActivePhase] = useState(currentPhaseId)
  const [headerVis, setHeaderVis] = useState(false)

  useEffect(() => { setTimeout(() => setHeaderVis(true), 80) }, [])

  const toggle = id => setActivePhase(prev => prev === id ? null : id)

  const getProgressPct = (start, end) => {
    if (today < start) return 0
    if (today > end) return 100
    const total = Math.floor((new Date(end) - new Date(start)) / 86400000)
    const done  = Math.floor((new Date(today) - new Date(start)) / 86400000)
    return Math.round((done / total) * 100)
  }

  return (
    <div className="pv">
      {/* Header */}
      <div style={{
        marginBottom: 24,
        opacity: headerVis ? 1 : 0, transform: headerVis ? 'none' : 'translateY(-12px)',
        transition: 'all .5s ease',
      }}>
        <div className="pv-mission-badge">
          <div className="pv-pulse" />
          BATTLE MAP · 8 MONTHS · MICROSOFT READY
        </div>
        <h2 className="pv-title">Complete Battle Plan</h2>
        <p className="pv-subtitle">MAY 17 2026 → JAN 31 2027 · SELECT PHASE TO EXPAND</p>

        {/* Phase pills */}
        <div className="pv-pills">
          {PHASES.map(p => {
            const active = activePhase === p.id
            const current = p.id === currentPhaseId
            return (
              <button
                key={p.id}
                className="pv-pill"
                onClick={() => toggle(p.id)}
                style={{
                  color: active ? p.color : 'rgba(255,255,255,.3)',
                  borderColor: active ? p.color : 'rgba(255,255,255,.08)',
                  background: active ? `${p.color}12` : 'transparent',
                  boxShadow: active ? `0 0 12px ${p.glow}` : 'none',
                  fontFamily: "'Share Tech Mono', monospace",
                }}
              >
                {p.icon} P{p.id}{current ? ' ●' : ''}
              </button>
            )
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="pv-timeline">
        <div className="pv-spine-glow" />
        <div className="pv-spine" />

        {PHASES.map((phase, index) => {
          const detail = PHASE_DETAILS.find(d => d.id === phase.id)
          if (!detail) return null
          const range = PHASE_RANGES[index]
          const pct = getProgressPct(range.start, range.end)
          return (
            <PhaseCard
              key={phase.id}
              phase={phase}
              detail={detail}
              index={index}
              isActive={activePhase === phase.id}
              isCurrent={phase.id === currentPhaseId}
              progressPct={pct}
              onClick={() => toggle(phase.id)}
            />
          )
        })}
      </div>

      {/* Final objective */}
      <div className="pv-goal">
        <div className="pv-goal-left">
          <div className="pv-goal-tag">OPERATION CRACKIT · FINAL OBJECTIVE</div>
          <div className="pv-goal-title">🎯 Microsoft / Top MNC Offer</div>
        </div>
        <div className="pv-goal-right">
          260 DAYS · 6 PHASES<br />
          JAN 31 2027
        </div>
      </div>
    </div>
  )
}