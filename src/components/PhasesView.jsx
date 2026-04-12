import { PHASES, NEETCODE_ROADMAP, DSA_SHEET } from '../data/schedule'

const PHASE_DETAILS = [
  {
    id: 1,
    weeks: [
      { label: "Week 1 (Apr 14–20)", topics: "Java syntax, data types, loops, methods + Arrays two-pointer", lc: "10 problems", build: "Calculator CLI" },
      { label: "Week 2 (Apr 21–27)", topics: "OOP — classes, inheritance, polymorphism in Java", lc: "20 total", build: "Bank Account OOP model" },
      { label: "Week 3 (Apr 28–May 3)", topics: "Collections, HashMap, Generics + Recursion", lc: "30 total", build: "Student Grade Manager CLI" },
      { label: "Week 4 (May 4–10)", topics: "LinkedList from scratch — Node, add/remove/reverse", lc: "40 total", build: "Your own LinkedList class" },
      { label: "Week 5 (May 11–17)", topics: "Stack + Queue — array-backed and linked-backed", lc: "50 total", build: "Expression Evaluator CLI" },
      { label: "Week 6 (May 18–24)", topics: "Binary Trees — DFS, BFS, level order", lc: "57 total", build: "Tree Visualizer CLI" },
      { label: "Week 7 (May 25–Jun 1)", topics: "HashMap deep dive + consolidation + deploy", lc: "65 total", build: "Deploy project to GitHub" },
    ],
    rules: ["1 video → close tab → code immediately. Non-negotiable.", "25-minute timer on every LC problem. No hints in first 25.", "Push to GitHub every single day.", "Sunday = re-solve 3 hardest problems from the week from memory."],
    checkpoints: "65 LC problems + 1 deployed Java project on GitHub by June 1",
  },
  {
    id: 2,
    weeks: [
      { label: "Jun 2–8", topics: "Spring Boot intro — Initializr, first REST endpoint (Telusko)", lc: "70 total", build: "GET /hello endpoint running" },
      { label: "Jun 9–15", topics: "Spring Boot CRUD + PostgreSQL + JPA", lc: "78 total", build: "Full CRUD API for one entity" },
      { label: "Jun 16–22", topics: "JWT Authentication — spring-security, token filter", lc: "86 total", build: "Login + protected endpoint" },
      { label: "Jun 23–29", topics: "React fundamentals — components, state, hooks", lc: "94 total", build: "React form connected to your API" },
      { label: "Jun 30–Jul 6", topics: "React + Axios + CORS + Tailwind styling", lc: "102 total", build: "Working full-stack app" },
      { label: "Jul 7–13", topics: "Deploy: Render.com (API) + Vercel (React) + Supabase (DB)", lc: "110 total", build: "LIVE deployed project with URL" },
      { label: "Jul 14–20", topics: "System Design intro: Gaurav Sen — load balancers, caching", lc: "118 total", build: "System design notes + diagram" },
      { label: "Jul 21–27", topics: "Polish + MongoDB intro as second data layer", lc: "130 total", build: "Project 2: deployed + README" },
    ],
    rules: ["College has started. 4-5 hrs weekdays, 7-8 Sunday.", "Spring Boot = enterprise architecture knowledge. Not optional.", "Every project gets a live URL before it goes on your resume.", "No new technologies until current ones are deployed."],
    checkpoints: "130 LC + 1 fully deployed Spring Boot + React app with JWT auth",
  },
  {
    id: 3,
    weeks: [
      { label: "Jul 28–Aug 3", topics: "DP intro: Climbing Stairs, House Robber, Fibonacci variants", lc: "140 total", build: "DP cheatsheet in your own words" },
      { label: "Aug 4–10", topics: "DP: Coin Change, Knapsack, LCS, LIS", lc: "150 total", build: "Add Python + scikit-learn project" },
      { label: "Aug 11–17", topics: "Graphs: DFS/BFS, Number of Islands, Clone Graph", lc: "158 total", build: "Graph visualizer (optional bonus)" },
      { label: "Aug 18–24", topics: "Graphs: Topological sort, Dijkstra, Course Schedule", lc: "165 total", build: "System design: URL shortener write-up" },
      { label: "Aug 25–31", topics: "Backtracking: Subsets, Permutations, N-Queens", lc: "172 total", build: "ML project: iris classifier deployed" },
      { label: "Sep 1–7", topics: "Intervals + Greedy — classic patterns", lc: "178 total", build: "AMCAT mock #1" },
      { label: "Sep 8–14", topics: "Blind 75 — fill gaps in weakest patterns", lc: "184 total", build: "Communication: record 2-min concept explanation" },
      { label: "Sep 15–21", topics: "Hard problems + company-tagged review", lc: "190 total", build: "System design: Twitter feed 45-min answer" },
      { label: "Sep 22–28", topics: "Full review week — re-solve 10 problems you struggled with", lc: "195 total", build: "Resume draft: all 3 projects with live URLs" },
    ],
    rules: ["DP and Graphs are not optional — they appear in every FAANG OA.", "Python is resume breadth only. Don't go deep.", "Communication practice starts this phase. Record yourself.", "AMCAT mocks from Sep — treat them as real."],
    checkpoints: "195 LC + Blind 75 ~90% done + Python ML project deployed",
  },
  {
    id: 4,
    weeks: [
      { label: "Sep 29–Oct 5", topics: "AWS EC2: deploy Spring Boot, configure env vars", lc: "200 total", build: "API live on EC2" },
      { label: "Oct 6–12", topics: "AWS S3: file upload from Spring Boot, pre-signed URLs", lc: "203 total", build: "S3 integration in project" },
      { label: "Oct 13–19", topics: "MongoDB: Spring Data MongoDB, NoSQL vs SQL comparison", lc: "206 total", build: "Project with both SQL and NoSQL endpoints" },
      { label: "Oct 20–26", topics: "Company-tagged LC: JPMC + PayPal filter", lc: "210 total", build: "Resume finalized — sent to peers for review" },
      { label: "Oct 27–Nov 2", topics: "Mock interviews: Pramp + peer — 2 mocks this week", lc: "213 total", build: "Apply to 10 companies" },
      { label: "Nov 3–9", topics: "System design: Design Instagram/Twitter feed full answer", lc: "216 total", build: "Apply 10 more" },
      { label: "Nov 10–16", topics: "HR prep: STAR method — 6 behavioural questions written", lc: "219 total", build: "LinkedIn profile updated" },
      { label: "Nov 17–23", topics: "OA practice: company-specific question banks", lc: "222 total", build: "Apply 10 more + follow up on pending" },
      { label: "Nov 24–Dec 7", topics: "Interview simulation weeks — treat every practice as real", lc: "228 total", build: "Cover letters for top 5 targets" },
      { label: "Dec 8–14", topics: "Final polish — fix any deployed project bugs, update READMEs", lc: "230 total", build: "GitHub profile pinned with best 3 projects" },
    ],
    rules: ["AWS is on resume only if it's actually deployed. No fake bullets.", "Pramp mock interviews are non-negotiable — you need reps.", "Apply consistently. 3-5 companies per week minimum.", "JPMC and PayPal run Java-heavy assessments. Stay sharp."],
    checkpoints: "230+ LC + 3 deployed projects + 30+ applications sent",
  },
  {
    id: 5,
    weeks: [
      { label: "Dec 15–21", topics: "Portfolio audit: every project live, every README complete", lc: "233 total", build: "3 live URLs on resume" },
      { label: "Dec 22–31", topics: "Resume lock + January preparation — no new tech", lc: "235 total", build: "January interview plan ready" },
    ],
    rules: ["No new technology in Phase 5. Lock what you have.", "If a project doesn't have a live URL, remove it from resume.", "January = internship prep ONLY. This month closes the door on building."],
    checkpoints: "Resume final · 3 live URLs · January plan ready · Applications ongoing",
  },
  {
    id: 6,
    weeks: [
      { label: "Jan Week 1", topics: "2 Hard LC/day + system design 45-min daily drill", lc: "250 total", build: "Pramp daily" },
      { label: "Jan Week 2", topics: "Company-specific OA practice — JPMC pattern bank", lc: "255 total", build: "HR round prep: 10 STAR stories" },
      { label: "Jan Week 3", topics: "Full mock rounds: technical + HR + system design back to back", lc: "260 total", build: "Simulate entire interview day" },
      { label: "Jan Week 4", topics: "Sharpen weak spots only — do not start new topics", lc: "265 total", build: "You're ready. Trust the 8 months." },
    ],
    rules: ["This phase is drill, not learn. Everything new you try to learn now will hurt you.", "Mock interviews every 2 days minimum.", "Sleep 8 hours. Your brain needs it to solve Hard DP under pressure.", "Trust the 8 months. You built this."],
    checkpoints: "JPMC/PayPal/MNC internship offer. That's the only checkpoint that matters.",
  },
]

export default function PhasesView({ onSelectDate }) {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h2 style={{ fontFamily: 'Syne', fontSize: 24, color: '#fff', margin: '0 0 6px', fontWeight: 800 }}>
        🗺️ The Full Battle Plan
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: '0 0 28px' }}>
        6 phases · 8 months · one goal. Click any phase to explore.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {PHASE_DETAILS.map((pd, i) => {
          const phase = PHASES[i]
          return (
            <details key={pd.id} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${phase.color}25`, borderRadius: 14, overflow: 'hidden' }}>
              <summary style={{ padding: '18px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, listStyle: 'none', userSelect: 'none' }}>
                <span style={{ fontSize: 28 }}>{phase.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'Syne', fontSize: 16, color: phase.color, fontWeight: 700 }}>Phase {phase.id}: {phase.name}</span>
                    <span style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 10 }}>{phase.dates}</span>
                  </div>
                  <p style={{ margin: '3px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{phase.tag}</p>
                </div>
                <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.2)' }}>▾</span>
              </summary>

              <div style={{ padding: '0 20px 20px', borderTop: `1px solid ${phase.color}20` }}>
                {/* Checkpoint */}
                <div style={{ background: `${phase.color}10`, border: `1px solid ${phase.color}25`, borderRadius: 8, padding: '10px 14px', margin: '16px 0 14px', fontSize: 13, color: phase.color }}>
                  🎯 Phase goal: {pd.checkpoints}
                </div>

                {/* Rules */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>NON-NEGOTIABLE RULES</div>
                  {pd.rules.map((r, ri) => (
                    <div key={ri} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 13, color: 'rgba(255,255,255,0.65)', alignItems: 'flex-start' }}>
                      <span style={{ color: phase.color, flexShrink: 0 }}>→</span> {r}
                    </div>
                  ))}
                </div>

                {/* Week table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr>
                        {['Week', 'Focus', 'LC target', 'Build'].map(h => (
                          <th key={h} style={{ textAlign: 'left', color: 'rgba(255,255,255,0.3)', fontFamily: 'JetBrains Mono', fontSize: 10, padding: '6px 8px', borderBottom: '1px solid rgba(255,255,255,0.07)', fontWeight: 400 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pd.weeks.map((w, wi) => (
                        <tr key={wi}>
                          <td style={{ padding: '8px', color: 'rgba(255,255,255,0.35)', fontSize: 11, fontFamily: 'JetBrains Mono', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top' }}>{w.label}</td>
                          <td style={{ padding: '8px', color: 'rgba(255,255,255,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top', lineHeight: 1.5 }}>{w.topics}</td>
                          <td style={{ padding: '8px', color: phase.color, fontFamily: 'JetBrains Mono', fontSize: 11, borderBottom: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{w.lc}</td>
                          <td style={{ padding: '8px', color: 'rgba(255,255,255,0.55)', borderBottom: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top', fontSize: 12 }}>{w.build}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: 14, flexWrap: 'wrap' }}>
                  <a href={NEETCODE_ROADMAP} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, background: 'rgba(255,107,26,0.1)', border: '1px solid rgba(255,107,26,0.25)', color: '#ff6b1a', padding: '5px 12px', borderRadius: 20, textDecoration: 'none' }}>
                    ⚡ NeetCode Roadmap
                  </a>
                  <a href={DSA_SHEET} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 11, background: 'rgba(255,211,61,0.1)', border: '1px solid rgba(255,211,61,0.25)', color: '#ffd93d', padding: '5px 12px', borderRadius: 20, textDecoration: 'none' }}>
                    📋 Striver Sheet
                  </a>
                </div>
              </div>
            </details>
          )
        })}
      </div>
    </div>
  )
}
