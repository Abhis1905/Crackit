import { useState, useEffect, useRef } from 'react'
import { PHASES, NEETCODE_ROADMAP, SHRADHA_SHEET } from '../data/schedule'

const DSA_SHEET_URL = "https://docs.google.com/spreadsheets/d/1_PoEEiE6lk79cmT1kqJpsnkB14b5ImdKpDrXoPBsw2U/edit?usp=sharing"

const PHASE_DETAILS = [
  {
    id: 1,
    icon: "🔥",
    color: "#f97316",
    glow: "rgba(249,115,22,0.4)",
    duration: "Apr 14 – Jun 1 · 48 days · Full day available",
    mission: "Build Java foundations + DSA base. No shortcuts. This phase determines everything.",
    checkpoint: "65 LC problems · 1 deployed Java project · NeetCode streak started",
    weeks: [
      { label: "Week 1", dates: "Apr 14–20", topics: "Java syntax, data types, loops, methods", dsa: "Arrays: Contains Dup, Valid Anagram, Two Sum", build: "Calculator CLI", apt: "% + Ratios 20q" },
      { label: "Week 2", dates: "Apr 21–27", topics: "OOP — Classes, Inheritance, Polymorphism", dsa: "Two Pointers: Palindrome, 3Sum, Container", build: "Bank Account OOP", apt: "Time & Work 20q" },
      { label: "Week 3", dates: "Apr 28–May 4", topics: "Collections, HashMap, Generics", dsa: "Sliding Window: Buy Stock, Longest Substr", build: "Grade Manager CLI", apt: "Profit & Loss 20q" },
      { label: "Week 4", dates: "May 5–11", topics: "Exceptions, File I/O, Java 8 Streams", dsa: "LinkedList: Reverse, Merge Sorted, Cycle", build: "Custom LinkedList Java", apt: "Permutations 20q" },
      { label: "Week 5", dates: "May 12–18", topics: "Multithreading basics, JDBC intro", dsa: "Stack: Valid Parens, Min Stack, Daily Temps", build: "Expression Evaluator CLI", apt: "Logical Reasoning 20q" },
      { label: "Week 6", dates: "May 19–25", topics: "Design Patterns: Singleton, Factory, Builder", dsa: "Trees: Invert, Max Depth, Diameter, BFS", build: "BinaryTree Java impl", apt: "Verbal basics 20q" },
      { label: "Week 7", dates: "May 26–Jun 1", topics: "Review + GitHub deploy week", dsa: "BST: Validate, Kth Smallest, LCA", build: "GitHub deploy + README", apt: "GFG OA mock 60min" },
    ],
    rules: [
      "1 video → close tab → code immediately. Non-negotiable.",
      "25-min timer on every LeetCode. No hints in first 25.",
      "Push to GitHub every single day without exception.",
      "Sunday = re-solve 3 hardest problems from scratch. No notes.",
    ],
  },
  {
    id: 2,
    icon: "⚡",
    color: "#6bcb77",
    glow: "rgba(107,203,119,0.4)",
    duration: "Jun 2 – Jul 13 · 42 days · 4-5 hrs/day",
    mission: "Spring Boot + React + DSA escalation. Build your first production-grade full-stack app.",
    checkpoint: "110 LC · Spring Boot + React app deployed (Render + Vercel) · JWT auth working",
    weeks: [
      { label: "Week 1", dates: "Jun 2–8", topics: "Spring Boot Initializr, first REST endpoint", dsa: "Heaps: Merge K Sorted, Top K Frequent", build: "GET /hello → 200 in Postman", apt: "Mixed quant 15q" },
      { label: "Week 2", dates: "Jun 9–15", topics: "Spring Data JPA, @Entity, PostgreSQL CRUD", dsa: "Stack: NGE II, Stock Span, Histogram", build: "CRUD API: User entity", apt: "Logical 15q" },
      { label: "Week 3", dates: "Jun 16–22", topics: "Spring Security + JWT auth filter", dsa: "BST: Recover, Serialize, Largest BST", build: "Login/signup → JWT token", apt: "Critical Reasoning 15q" },
      { label: "Week 4", dates: "Jun 23–29", topics: "React: components, props, useState, useEffect", dsa: "Heaps: Kth Small, Median Stream", build: "React Todo with useState", apt: "GFG OA 30q" },
      { label: "Week 5", dates: "Jun 30–Jul 6", topics: "Tailwind CSS + React-SpringBoot connection", dsa: "Backtracking: Subsets, Comb Sum, Perms", build: "React+Tailwind calls your API", apt: "Mixed 15q" },
      { label: "Week 6", dates: "Jul 7–13", topics: "MongoDB + Spring Data Mongo, NoSQL CRUD", dsa: "Graphs: Islands, Clone Graph, Pacific", build: "DEPLOY: Render + Vercel live URLs", apt: "15q + mock GD topic" },
    ],
    rules: [
      "4-5 hrs weekdays. 7-8 hrs Sunday. No negotiation.",
      "Spring Boot = enterprise architecture. JPMC runs it in prod.",
      "Every project needs a live URL before it goes on resume.",
      "No new tech until current one is deployed and working.",
    ],
  },
  {
    id: 3,
    icon: "⚔️",
    color: "#c77dff",
    glow: "rgba(199,125,255,0.4)",
    duration: "Jul 14 – Sep 7 · 56 days · 4-5 hrs/day",
    mission: "Full Stack Project 2 + AI/ML + DP + Graphs. This is where 90% of candidates fall behind.",
    checkpoint: "178 LC · 2 deployed projects (Spring Boot + ML) · Blind 75 ~80% done",
    weeks: [
      { label: "Week 1", dates: "Jul 14–20", topics: "Python basics (Hitesh) + pandas, numpy", dsa: "DP: Climbing Stairs, House Robber, Min Cost", build: "Pandas CSV stats script", apt: "Data Interp 15q" },
      { label: "Week 2", dates: "Jul 21–27", topics: "CampusX: scikit-learn, Logistic Regression", dsa: "DP: LCS, Coin Change, LIS", build: "Iris Classifier + confusion matrix", apt: "GFG OA 30q" },
      { label: "Week 3", dates: "Jul 28–Aug 3", topics: "Decision Trees + Random Forest + cross-val", dsa: "Graphs: Course Schedule, Topological Sort", build: "Heart disease RF model + Flask API", apt: "Mixed 15q + puzzles" },
      { label: "Week 4", dates: "Aug 4–10", topics: "Gaurav Sen: Hashing + Load Balancer + CAP", dsa: "Graphs: Prim's, Bellman Ford, Floyd", build: "System Design: URL Shortener 1-page doc", apt: "Mixed 20q timed" },
      { label: "Week 5", dates: "Aug 11–17", topics: "Build Project 2: E-commerce or Expense API", dsa: "DP Hard: Wildcard, Palindrome Part", build: "Project 2 backend deployed", apt: "Weakest section 15q" },
      { label: "Week 6", dates: "Aug 18–24", topics: "CampusX: K-Means + PCA + Flask deploy", dsa: "Greedy + Trie — all from Shradha", build: "ML: Flask + React deployed", apt: "GFG OA 30q" },
      { label: "Week 7", dates: "Aug 25–31", topics: "Gaurav Sen: Pastebin + Rate Limiter design", dsa: "Graph: Dijkstra, Kruskal, Alien Dict", build: "Project 2 polish + README + live URL", apt: "Mixed 20q" },
      { label: "Week 8", dates: "Sep 1–7", topics: "NeetCode: fill weakest categories from profile", dsa: "Remaining skipped Shradha problems", build: "System Design: Twitter Feed 1-page doc", apt: "AMCAT mock #1 — 90 min" },
    ],
    rules: [
      "Python = resume breadth only. Don't go too deep.",
      "AI/ML = 1 deployed project minimum with live URL.",
      "Communication practice starts here. Record yourself.",
      "AMCAT mocks from Sep — treat as real exam day.",
    ],
  },
  {
    id: 4,
    icon: "🎯",
    color: "#4d96ff",
    glow: "rgba(77,150,255,0.4)",
    duration: "Sep 8 – Nov 16 · 70 days · 4-5 hrs/day",
    mission: "AWS + Mock Interviews + Apply aggressively. Everything built toward this phase.",
    checkpoint: "230+ LC · 3 deployed projects · 30+ applications · 6+ mock interviews done",
    weeks: [
      { label: "Week 1", dates: "Sep 8–14", topics: "AWS EC2: create instance, deploy Spring Boot JAR", dsa: "DP Hard: MCM, Egg Drop, Bitonic", build: "API live on EC2 free tier", apt: "Mixed 20q" },
      { label: "Week 2", dates: "Sep 15–21", topics: "AWS S3: upload from Spring Boot, pre-signed URLs", dsa: "DP: remaining + weak review", build: "File upload deployed in project", apt: "JPMC-style OA 60min" },
      { label: "Week 3", dates: "Sep 22–28", topics: "Pramp mock interviews — first session booked", dsa: "Intervals: Merge, Non-Overlap, Meeting Rooms", build: "Resume: B/U/Y bullet format", apt: "Mixed 20q verbal heavy" },
      { label: "Week 4", dates: "Oct 5–11", topics: "Gaurav Sen: Twitter + Uber + WhatsApp design", dsa: "Trie: implement + all 5 sheet problems", build: "All 3 bullets with live URLs on resume", apt: "AMCAT mock #2 — 90 min" },
      { label: "Week 5", dates: "Oct 12–18", topics: "Apply Wave 1: JPMC, PayPal, Razorpay, Zepto", dsa: "Hard company-tagged LC — JPMC filter", build: "LinkedIn: 500+ connections push", apt: "Mixed 20q" },
      { label: "Week 6", dates: "Oct 19–25", topics: "React advanced: Context, custom hooks, React Query", dsa: "NeetCode: 5 weakest patterns drilled", build: "Project 3: Full Stack + ML integrated", apt: "GFG OA 30q" },
      { label: "Week 7", dates: "Oct 26–Nov 1", topics: "Pramp: 2 mock sessions this week", dsa: "LC Hard daily — company tagged", build: "SD verbal: URL + Twitter — 45 min each", apt: "IndiaBix 20q" },
      { label: "Week 8", dates: "Nov 2–9", topics: "Portfolio polish + GitHub cleanup + README audit", dsa: "LC Hard daily", build: "All 3 projects: live URLs confirmed", apt: "AMCAT mock #3 final" },
      { label: "Week 9", dates: "Nov 10–16", topics: "Pramp final session + HR finalization", dsa: "Review weakest 5 LC patterns", build: "Apply 10 more — 30+ total", apt: "IndiaBix 20q verbal" },
    ],
    rules: [
      "AWS on resume ONLY if deployed and working. No fake bullets.",
      "Pramp mock interviews are non-negotiable. You need reps.",
      "Apply 3-5 companies per week minimum. Consistent, not bursty.",
      "JPMC runs Java-heavy OA. Spring Boot = your competitive edge.",
    ],
  },
  {
    id: 5,
    icon: "🚀",
    color: "#ffd93d",
    glow: "rgba(255,217,61,0.4)",
    duration: "Nov 17 – Dec 31 · 45 days · 4-5 hrs/day",
    mission: "Lock everything. 3 deployed projects. Resume finalized. January is interviews only.",
    checkpoint: "Resume final · 3 live URLs · 50+ applications sent · January plan ready",
    weeks: [
      { label: "Week 1", dates: "Nov 17–23", topics: "Portfolio audit: all projects live + README done", dsa: "LC Medium/day — keep engine warm", build: "3 live URLs on resume confirmed", apt: "5 companies applied + followups" },
      { label: "Week 2", dates: "Nov 24–30", topics: "Resume lock + peer review from CS friend", dsa: "LC Medium/day", build: "GitHub: 3 best projects pinned", apt: "50+ total apps by Dec 14" },
      { label: "Week 3", dates: "Dec 1–14", topics: "No new technology. Sharpen only.", dsa: "LC Hard x2/day", build: "January plan doc: companies + interview dates", apt: "Applications ongoing" },
      { label: "Week 4", dates: "Dec 15–31", topics: "Final week. You're ready. Sleep 8 hours.", dsa: "5 weakest — nail them", build: "January interview plan locked", apt: "Rest. Prepare mentally." },
    ],
    rules: [
      "No new technology in Phase 5. Zero.",
      "If a project has no live URL, remove it from resume.",
      "January = interviews only. Building phase is closed.",
      "50+ applications minimum before December ends.",
    ],
  },
  {
    id: 6,
    icon: "💎",
    color: "#ff6b9d",
    glow: "rgba(255,107,157,0.4)",
    duration: "Jan 2027 · 31 days · Full day",
    mission: "Drill only. No new topics. Trust the 8 months you built. This is what it all was for.",
    checkpoint: "JPMC / PayPal / Top MNC internship offer. That's the only metric.",
    weeks: [
      { label: "Week 1", dates: "Jan 1–7", topics: "2 Hard LC/day + System Design 45min verbal", dsa: "JPMC/PayPal tagged — arrays, strings, greedy", build: "Pramp daily", apt: "Company OA patterns" },
      { label: "Week 2", dates: "Jan 8–14", topics: "JPMC/PayPal OA pattern bank", dsa: "Hard daily — no cherry picking", build: "Pramp every 2 days", apt: "Full mock day simulation" },
      { label: "Week 3", dates: "Jan 15–21", topics: "Full simulation: technical + SD + HR back to back", dsa: "Hard daily", build: "3 full mock rounds this week", apt: "OA simulation" },
      { label: "Week 4", dates: "Jan 22–31", topics: "Sharpen weakest 5 only. Trust the process.", dsa: "5 weakest patterns — nail them", build: "Final Pramp session", apt: "You're ready." },
    ],
    rules: [
      "This phase is DRILL not LEARN. New topics will hurt you.",
      "Mock interviews every 2 days minimum.",
      "Sleep 8 hours. DP under pressure needs a rested brain.",
      "Trust the 8 months. You built this from nothing.",
    ],
  },
]

function PhaseNode({ phase, detail, index, isActive, onClick, totalPhases }) {
  const nodeRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * 120)
    return () => clearTimeout(timer)
  }, [index])

  const isLeft = index % 2 === 0

  return (
    <div
      ref={nodeRef}
      style={{
        display: 'flex',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: 0,
        marginBottom: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      {/* Content card */}
      <div style={{ flex: 1, padding: isLeft ? '0 24px 0 0' : '0 0 0 24px' }}>
        <div
          onClick={onClick}
          style={{
            background: isActive
              ? `linear-gradient(135deg, ${phase.color}18, ${phase.color}08)`
              : 'rgba(255,255,255,0.02)',
            border: `1px solid ${isActive ? phase.color + '50' : 'rgba(255,255,255,0.06)'}`,
            borderRadius: 16,
            padding: '18px 20px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: isActive ? `0 0 30px ${phase.color}20` : 'none',
          }}
          onMouseEnter={e => {
            if (!isActive) {
              e.currentTarget.style.background = `${phase.color}10`
              e.currentTarget.style.borderColor = `${phase.color}30`
            }
          }}
          onMouseLeave={e => {
            if (!isActive) {
              e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
            }
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 20 }}>{phase.icon}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  fontSize: 10, fontFamily: 'JetBrains Mono', color: phase.color,
                  background: `${phase.color}18`, padding: '2px 8px', borderRadius: 10, letterSpacing: 1,
                }}>PHASE {phase.id}</span>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono' }}>
                  {detail.weeks.length} weeks
                </span>
              </div>
              <div style={{ fontFamily: 'Syne', fontSize: 15, color: '#fff', fontWeight: 700, marginTop: 2 }}>
                {phase.name}
              </div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono', marginBottom: 6 }}>
            {detail.duration}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
            {detail.mission}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
            <span style={{ fontSize: 10, color: phase.color, fontFamily: 'JetBrains Mono' }}>
              {isActive ? '▼ collapse' : '▶ expand weeks'}
            </span>
          </div>
        </div>

        {/* Expanded weeks */}
        {isActive && (
          <div style={{
            marginTop: 12,
            animation: 'slideDown 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            {/* Checkpoint */}
            <div style={{
              background: `${phase.color}10`,
              border: `1px solid ${phase.color}30`,
              borderRadius: 10, padding: '10px 14px', marginBottom: 12,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 14 }}>🏆</span>
              <div>
                <div style={{ fontSize: 9, color: phase.color, fontFamily: 'JetBrains Mono', letterSpacing: 1, marginBottom: 2 }}>PHASE CHECKPOINT</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{detail.checkpoint}</div>
              </div>
            </div>

            {/* Weeks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
              {detail.weeks.map((week, wi) => (
                <div key={wi} style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 10, padding: '12px 14px',
                  borderLeft: `3px solid ${phase.color}60`,
                  animation: `slideDown 0.3s ${wi * 0.05}s both`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontFamily: 'Syne', fontSize: 13, color: phase.color, fontWeight: 700 }}>{week.label}</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: 'JetBrains Mono' }}>{week.dates}</span>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
                    {[
                      { icon: '📺', label: 'LEARN', val: week.topics, color: '#4d96ff' },
                      { icon: '⚡', label: 'DSA', val: week.dsa, color: '#ff6b1a' },
                      { icon: '🔨', label: 'BUILD', val: week.build, color: '#c77dff' },
                      { icon: '🧮', label: 'APTITUDE', val: week.apt, color: '#6bcb77' },
                    ].map(item => (
                      <div key={item.label} style={{
                        background: `${item.color}08`,
                        border: `1px solid ${item.color}18`,
                        borderRadius: 8, padding: '8px 10px',
                      }}>
                        <div style={{ fontSize: 9, color: item.color, fontFamily: 'JetBrains Mono', letterSpacing: 0.5, marginBottom: 4 }}>
                          {item.icon} {item.label}
                        </div>
                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', lineHeight: 1.4 }}>{item.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Rules */}
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 10, padding: '12px 14px',
            }}>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono', letterSpacing: 1, marginBottom: 8 }}>
                ⚔️ PHASE RULES — NON-NEGOTIABLE
              </div>
              {detail.rules.map((rule, ri) => (
                <div key={ri} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: ri < detail.rules.length - 1 ? 6 : 0 }}>
                  <span style={{ color: phase.color, fontSize: 12, marginTop: 1, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Center spine + node */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 60 }}>
        {/* Top connector */}
        {index > 0 && (
          <div style={{
            width: 2,
            height: 24,
            background: `linear-gradient(to bottom, ${PHASES[index-1].color}60, ${phase.color}60)`,
          }} />
        )}
        {index === 0 && <div style={{ height: 24 }} />}

        {/* Node circle */}
        <div
          onClick={onClick}
          style={{
            width: 44, height: 44, borderRadius: '50%',
            background: isActive
              ? `radial-gradient(circle, ${phase.color}40, ${phase.color}10)`
              : 'rgba(255,255,255,0.04)',
            border: `2px solid ${isActive ? phase.color : phase.color + '50'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, cursor: 'pointer', flexShrink: 0,
            boxShadow: isActive ? `0 0 20px ${phase.color}60, 0 0 40px ${phase.color}30` : 'none',
            transition: 'all 0.3s ease',
            animation: isActive ? 'pulse-node 2s ease-in-out infinite' : 'none',
          }}
        >
          {phase.icon}
        </div>

        {/* Bottom connector */}
        {index < totalPhases - 1 && (
          <div style={{
            width: 2,
            flex: 1,
            minHeight: 40,
            background: `linear-gradient(to bottom, ${phase.color}60, ${PHASES[index+1]?.color}30)`,
          }} />
        )}
      </div>

      {/* Spacer for opposite side */}
      <div style={{ flex: 1 }} />
    </div>
  )
}

export default function PhasesView() {
  const [activePhase, setActivePhase] = useState(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 100)
  }, [])

  const togglePhase = (id) => {
    setActivePhase(prev => prev === id ? null : id)
  }

  return (
    <div style={{ position: 'relative' }}>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-node {
          0%, 100% { box-shadow: 0 0 20px var(--nc, #f97316), 0 0 40px var(--nc, #f97316); }
          50% { box-shadow: 0 0 30px var(--nc, #f97316), 0 0 60px var(--nc, #f97316); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>

      {/* Header */}
      <div style={{
        marginBottom: 32,
        opacity: headerVisible ? 1 : 0,
        transform: headerVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'all 0.6s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div style={{
            fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: 2,
            color: '#ff6b1a', background: 'rgba(255,107,26,0.1)',
            border: '1px solid rgba(255,107,26,0.25)', padding: '4px 12px', borderRadius: 20,
            animation: 'float-badge 3s ease-in-out infinite',
          }}>
            BATTLE MAP · 8 MONTHS · JPMC READY
          </div>
        </div>
        <h2 style={{
          fontFamily: 'Syne', fontSize: 'clamp(22px,4vw,34px)', fontWeight: 800,
          color: '#fff', margin: '0 0 8px', lineHeight: 1.1,
        }}>
          Your Complete Battle Plan
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: 13, margin: 0, fontFamily: 'JetBrains Mono' }}>
          Click any phase to expand week-by-week targets · Apr 2026 → Jan 2027
        </p>

        {/* Phase overview pills */}
        <div style={{ display: 'flex', gap: 6, marginTop: 16, flexWrap: 'wrap' }}>
          {PHASES.map(p => (
            <button key={p.id} onClick={() => togglePhase(p.id)} style={{
              fontSize: 11, fontFamily: 'JetBrains Mono',
              background: activePhase === p.id ? `${p.color}20` : 'rgba(255,255,255,0.04)',
              border: `1px solid ${activePhase === p.id ? p.color + '50' : 'rgba(255,255,255,0.08)'}`,
              color: activePhase === p.id ? p.color : 'rgba(255,255,255,0.4)',
              padding: '5px 12px', borderRadius: 20, cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: activePhase === p.id ? `0 0 12px ${p.color}30` : 'none',
            }}>
              {p.icon} P{p.id} · {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline map */}
      <div style={{ position: 'relative', paddingBottom: 40 }}>
        {PHASES.map((phase, index) => {
          const detail = PHASE_DETAILS.find(d => d.id === phase.id)
          return (
            <PhaseNode
              key={phase.id}
              phase={phase}
              detail={detail}
              index={index}
              isActive={activePhase === phase.id}
              onClick={() => togglePhase(phase.id)}
              totalPhases={PHASES.length}
            />
          )
        })}

        {/* End node */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
          <div style={{
            background: 'linear-gradient(135deg, #ff6b1a, #ffd93d, #ff6b9d)',
            borderRadius: 12, padding: '12px 28px',
            fontFamily: 'Syne', fontSize: 15, fontWeight: 800, color: '#000',
            boxShadow: '0 0 30px rgba(255,107,26,0.4)',
          }}>
            🏆 JPMC / PayPal Offer
          </div>
        </div>
      </div>
    </div>
  )
}