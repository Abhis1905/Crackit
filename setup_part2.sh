#!/bin/bash
# Run from inside crackit-prep/ directory
# This writes all src files

# ── src/lib/supabase.js ──────────────────────────────────────
cat > src/lib/supabase.js << 'SUPABASE'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getProgress(date) {
  const { data } = await supabase.from('daily_progress').select('*').eq('date', date).single()
  return data
}
export async function saveProgress(date, checks, notes) {
  const { data, error } = await supabase.from('daily_progress')
    .upsert({ date, checks, notes, updated_at: new Date().toISOString() }, { onConflict: 'date' })
    .select().single()
  if (error) console.error('Save error:', error)
  return data
}
export async function getAllProgress() {
  const { data } = await supabase.from('daily_progress').select('*').order('date', { ascending: true })
  return data || []
}
export async function getLeetcodeLog() {
  const { data } = await supabase.from('leetcode_log').select('*').order('solved_at', { ascending: false })
  return data || []
}
export async function logLeetcode(problem, difficulty, pattern, timeTaken, approach) {
  const { data } = await supabase.from('leetcode_log')
    .insert({ problem, difficulty, pattern, time_taken: timeTaken, approach, solved_at: new Date().toISOString() })
    .select().single()
  return data
}
SUPABASE

# ── src/data/schedule.js ─────────────────────────────────────
cat > src/data/schedule.js << 'SCHEDULE'
export const PHASES = [
  { id:1, name:"Survival Sprint",   dates:"Apr 14 – Jun 1",   color:"#f97316", tag:"Java + DSA Foundations",        icon:"🔥" },
  { id:2, name:"Backend Ignition",  dates:"Jun 2 – Jul 27",   color:"#6bcb77", tag:"Spring Boot + DSA Escalation",  icon:"⚡" },
  { id:3, name:"Interview Forge",   dates:"Jul 28 – Sep 28",  color:"#c77dff", tag:"DP + Graphs + System Design",   icon:"⚔️" },
  { id:4, name:"Placement Mode",    dates:"Sep 29 – Dec 14",  color:"#4d96ff", tag:"Full Stack + AWS + Apply",      icon:"🎯" },
  { id:5, name:"Final Push",        dates:"Dec 15 – Dec 31",  color:"#ffd93d", tag:"Portfolio + Resume Lock",       icon:"🚀" },
  { id:6, name:"Internship Elite",  dates:"Jan 2027",         color:"#ff6b9d", tag:"Interview-Specific Drills",     icon:"💎" },
]

export const NEETCODE_ROADMAP = "https://neetcode.io/roadmap"
export const DSA_SHEET = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"

export const SURPRISES = [
  { type:"meal",  content:"🍕 CHEAT MEAL UNLOCKED! You earned a large pizza tonight. No guilt — fuel the grind." },
  { type:"quote", content:"\"The expert in anything was once a beginner who refused to quit.\" You're building something real." },
  { type:"meal",  content:"🍦 Ice cream. Full scoop. Two scoops if you want. You crushed it today." },
  { type:"quote", content:"\"It does not matter how slowly you go as long as you do not stop.\" JPMC will see this consistency." },
  { type:"flex",  content:"💪 Go look at your GitHub streak right now. That's proof. Nobody can take that from you." },
  { type:"meal",  content:"🍔 Burger time. Guilt-free. Because you showed up today when it was hard." },
  { type:"quote", content:"\"Success is the sum of small efforts repeated day in, day out.\" One more brick in the wall." },
  { type:"flex",  content:"📱 Text your best friend: 'I just crushed a full day of prep.' Say it out loud. Own it." },
  { type:"meal",  content:"🧋 Boba tea / cold coffee — whatever your favourite drink is. You've earned it." },
  { type:"quote", content:"\"The difference between ordinary and extraordinary is that little extra.\" Today you chose extra." },
  { type:"flex",  content:"🎮 30 minutes of guilt-free gaming tonight. You worked, now play." },
  { type:"quote", content:"\"Hard days are the best days because that's when champions are made.\"" },
  { type:"meal",  content:"🍫 Chocolate. All of it. You built something today that didn't exist yesterday." },
  { type:"flex",  content:"😴 Sleep at 10 PM tonight — no guilt. A rested brain solves DP problems faster." },
  { type:"quote", content:"\"Don't wish it were easier. Wish you were better.\" You just got better. Again." },
]

export const VERIFY_CHALLENGES = {
  leetcode: [
    "What was the time complexity of your solution? Type it.",
    "What pattern did today's problem use? (Two pointer / Sliding window / HashMap / etc)",
    "Explain your approach in one sentence as if teaching a 10-year-old.",
    "What edge case almost broke your solution?",
    "Could you solve it again right now without looking? (Honest answer — be specific)",
  ],
  java: [
    "What is one thing you built today that didn't exist yesterday? Name it specifically.",
    "Which concept confused you most today? You have to name something.",
    "What would break if you deleted 10 lines of your code?",
    "Run your Java file RIGHT NOW and paste the output in notes.",
  ],
  spring: [
    "What HTTP endpoint did you build today? (e.g. GET /api/users)",
    "Did you test it in Postman/Insomnia? What was the response code?",
    "What error did you hit today and exactly how did you fix it?",
  ],
  aptitude: [
    "What was the hardest question you got wrong? What was the correct answer?",
    "How many questions did you complete? Be honest.",
    "Which topic still feels weak after today's session?",
  ]
}

const BREAK_DAYS = ['2026-05-01','2026-06-15','2026-07-04','2026-08-15','2026-09-05','2026-10-02','2026-10-24','2026-11-14','2026-12-25']

function makeTask(id, label, type, link, verifyType) {
  return { id, label, type, link: link || null, verifyType: verifyType || null }
}

const PHASE1_WEEKS = [
  { java:{ label:"Anuj Bhaiya: Java basics — watch 1 video then close tab and code", link:"https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" }, dsa:{ label:"NeetCode Arrays — Contains Duplicate, Valid Anagram, Two Sum", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Arrays — Largest element, Second largest, Check sorted", link:DSA_SHEET }, apt:{ label:"IndiaBix Quant: Percentages + Ratios — 20 questions", link:"https://www.indiabix.com/aptitude/percentage/" }, build:{ label:"Build: Java Calculator CLI — add/subtract/multiply/divide, runs in terminal" } },
  { java:{ label:"Anuj Bhaiya: OOP — Classes, Objects, Constructors. Code every example yourself.", link:"https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" }, dsa:{ label:"NeetCode: Two Pointers — Valid Palindrome, 3Sum, Container With Most Water", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Sorting — Bubble, Selection, Insertion from scratch", link:DSA_SHEET }, apt:{ label:"IndiaBix: Time & Work + Time-Speed-Distance — 20 questions", link:"https://www.indiabix.com/aptitude/time-and-work/" }, build:{ label:"Build: Bank Account OOP model — Account class, deposit(), withdraw(), balance" } },
  { java:{ label:"Anuj Bhaiya: Collections — ArrayList, HashMap, Generics basics", link:"https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" }, dsa:{ label:"NeetCode: Sliding Window — Best Time to Buy Stock, Longest Substring", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Recursion — Reverse array, Fibonacci, Power(x,n)", link:DSA_SHEET }, apt:{ label:"IndiaBix: Profit & Loss + Number Series — 20 questions", link:"https://www.indiabix.com/aptitude/profit-and-loss/" }, build:{ label:"Build: Student Grade Manager CLI — add/remove students, compute average" } },
  { java:{ label:"Implement LinkedList from scratch — Node class, add/remove/traverse, NO java.util", link:"https://youtube.com/@AnujBhaiya" }, dsa:{ label:"NeetCode: Linked Lists — Reverse LL, Merge Two Sorted, Linked List Cycle", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Linked List section — Basic to Medium", link:DSA_SHEET }, apt:{ label:"IndiaBix: Logical Reasoning — Number Series, Coding-Decoding — 20 questions", link:"https://www.indiabix.com/logical-reasoning/questions-and-answers/" }, build:{ label:"Build: Your own LinkedList class — push, pop, insert at position, reverse" } },
  { java:{ label:"Stack + Queue: implement array-backed and linked-backed versions from scratch", link:"https://youtube.com/@AnujBhaiya" }, dsa:{ label:"NeetCode: Stack — Valid Parentheses, Min Stack, Daily Temperatures", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Stack & Queue section", link:DSA_SHEET }, apt:{ label:"IndiaBix: Blood Relations + Seating Arrangement — 20 questions", link:"https://www.indiabix.com/logical-reasoning/blood-relations/" }, build:{ label:"Build: CLI Expression Evaluator — evaluates (3+4)*2 using your Stack" } },
  { java:{ label:"Binary Tree: Node class, DFS (inorder/preorder/postorder), BFS (level order)", link:"https://youtube.com/@AnujBhaiya" }, dsa:{ label:"NeetCode: Trees — Invert Binary Tree, Max Depth, Same Tree, Level Order", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Binary Trees — Easy to Medium problems", link:DSA_SHEET }, apt:{ label:"IndiaBix: Syllogisms + Direction Sense — 20 questions", link:"https://www.indiabix.com/logical-reasoning/syllogism/" }, build:{ label:"Build: Tree Visualizer CLI — prints tree structure in terminal" } },
  { java:{ label:"HashMap internals — hashing, collision, load factor. Solve 5 problems using HashMap only", link:"https://youtube.com/@AnujBhaiya" }, dsa:{ label:"NeetCode: Review week — re-solve 3 problems you got wrong. No hints this time.", link:NEETCODE_ROADMAP }, sheet:{ label:"Striver A2Z: Hashing section — Consolidation", link:DSA_SHEET }, apt:{ label:"Full mock aptitude test: 30 questions mixed quant + logical — time yourself", link:"https://www.indiabix.com/" }, build:{ label:"DEPLOY: Push final CLI project to GitHub with README. Live URL before June 1." } },
]

function getPhase1WeekIndex(date) {
  const start = new Date('2026-04-14')
  const d = new Date(date)
  const diff = Math.floor((d - start) / (1000 * 60 * 60 * 24))
  return Math.min(Math.floor(diff / 7), PHASE1_WEEKS.length - 1)
}

export function getScheduleForDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  const p1s = new Date('2026-04-14'), p1e = new Date('2026-06-01')
  const p2s = new Date('2026-06-02'), p2e = new Date('2026-07-27')
  const p3s = new Date('2026-07-28'), p3e = new Date('2026-09-28')
  const p4s = new Date('2026-09-29'), p4e = new Date('2026-12-14')
  const p5s = new Date('2026-12-15'), p5e = new Date('2026-12-31')

  if (BREAK_DAYS.includes(dateStr)) return { phase:0, title:"REST & RECHARGE DAY", subtitle:"Your tutor says: no code today. Full stop.", isBreak:true, tasks:[makeTask('r1','Walk outside 30+ minutes — no phone','rest'),makeTask('r2','Read something non-technical for 1 hour','rest'),makeTask('r3','Sleep 8+ hours tonight','rest')] }

  const sun = new Date(dateStr + 'T00:00:00').getDay() === 0

  if (date >= p1s && date <= p1e) {
    const w = PHASE1_WEEKS[getPhase1WeekIndex(dateStr)]
    return { phase:1, phaseColor:"#f97316", title: sun ? "SUNDAY — Review & Reinforce" : "DAILY SPRINT", subtitle: sun ? "Re-solve your 3 hardest problems from this week. No notes. Prove you own it." : "Full day. No excuses. This window never returns.", hoursAvailable:"Full day",
      tasks: sun ? [
        makeTask('s1','Re-solve hardest problem Mon–Wed from memory — NO notes','leetcode',null,'leetcode'),
        makeTask('s2','Re-solve hardest problem Thu–Sat from memory — NO notes','leetcode',null,'leetcode'),
        makeTask('s3','Write 5-line explanation of each solution pattern in your own words','recall'),
        makeTask('s4','Review and clean up this week\'s code — commit to GitHub','build'),
        makeTask('s5','Aptitude: Full 30-question mixed test. Timed.','aptitude','https://www.indiabix.com/','aptitude'),
      ] : [
        makeTask('l1', w.java.label, 'lecture', w.java.link, 'java'),
        makeTask('d1', w.dsa.label,  'leetcode', w.dsa.link, 'leetcode'),
        makeTask('sh1',w.sheet.label,'sheet',   w.sheet.link,'leetcode'),
        makeTask('a1', w.apt.label,  'aptitude', w.apt.link, 'aptitude'),
        makeTask('b1', w.build.label,'build',   null,        'java'),
        makeTask('rc1','Active Recall: Explain today\'s main concept in 5 sentences — write it','recall'),
      ]
    }
  }

  if (date >= p2s && date <= p2e) {
    const wn = Math.min(Math.floor((date - p2s) / (7*24*60*60*1000)), 7)
    const springTopics = [
      { lec:"Spring Boot intro — Initializr, project structure, first REST endpoint", link:"https://www.youtube.com/watch?v=9SGDpanrc8U" },
      { lec:"Spring Boot: CRUD endpoints + PostgreSQL + JPA/Hibernate basics", link:"https://www.youtube.com/watch?v=HYgHbn56G4g" },
      { lec:"Spring Boot: JWT Authentication — spring-security, token generation", link:"https://www.youtube.com/watch?v=KxqlJblhzfI" },
      { lec:"React fundamentals — components, state, props, hooks (useState, useEffect)", link:"https://www.youtube.com/watch?v=CgkZ7MvWUAA" },
      { lec:"React: Connect frontend to Spring Boot API — Axios, CORS config", link:"https://www.youtube.com/watch?v=WXsD0ZgxjRw" },
      { lec:"Tailwind CSS — utility classes, responsive design, component styling", link:"https://www.youtube.com/watch?v=lCxcTsOHrjo" },
      { lec:"Deploy: Spring Boot on Render.com + Supabase PostgreSQL", link:"https://render.com/docs/deploy-spring-boot" },
      { lec:"System Design basics: Gaurav Sen — Load Balancers, Caching, CDN", link:"https://www.youtube.com/watch?v=xpDnVSmNFX0" },
    ]
    const w = springTopics[wn]
    return { phase:2, phaseColor:"#6bcb77", title: sun ? "SUNDAY DEEP WORK" : "COLLEGE + GRIND", subtitle:"4-5 hrs available. Make every minute count.", hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: sun ? [
        makeTask('l1', w.lec + " — watch then build immediately", 'lecture', w.link, 'spring'),
        makeTask('d1','NeetCode: 2 problems — 25-min timer each, no hints','leetcode',NEETCODE_ROADMAP,'leetcode'),
        makeTask('b1','Add one feature to your Spring Boot project — push to GitHub','build',null,'spring'),
        makeTask('a1','Aptitude mock: 30 questions. Time it. Log your score.','aptitude','https://www.indiabix.com/','aptitude'),
        makeTask('rc1','Write README update for your project — describe what it does','recall'),
      ] : [
        makeTask('d1','NeetCode: 1 problem — 25-min timer, write approach before coding','leetcode',NEETCODE_ROADMAP,'leetcode'),
        makeTask('l1', w.lec,'lecture',w.link,'spring'),
        makeTask('b1','Build session: implement what you watched. Push to GitHub.','build',null,'spring'),
        makeTask('a1','Aptitude: 15 questions — logical reasoning','aptitude','https://www.indiabix.com/','aptitude'),
      ]
    }
  }

  if (date >= p3s && date <= p3e) {
    const wn = Math.min(Math.floor((date - p3s) / (7*24*60*60*1000)), 8)
    const topics = ["NeetCode DP: Climbing Stairs, House Robber, Fibonacci variants","NeetCode DP: Coin Change, Knapsack, Longest Common Subsequence","NeetCode Graphs: Number of Islands, Clone Graph, Pacific Atlantic","NeetCode Graphs: Course Schedule, topological sort, Dijkstra","NeetCode Backtracking: Subsets, Permutations, N-Queens","NeetCode Intervals + Greedy: Merge Intervals, Jump Game","NeetCode Blind 75 — fill gaps in weakest patterns","Hard problems + company-tagged JPMC/PayPal review","Full review: re-solve 10 problems you struggled with — no hints"]
    const sysdes = [
      { l:"Gaurav Sen: Consistent Hashing", link:"https://www.youtube.com/watch?v=zaRkONvyGr8" },
      { l:"System Design: Database sharding + replication", link:"https://www.youtube.com/watch?v=hdxdhCpgYo8" },
      { l:"System Design: CAP theorem + eventual consistency", link:"https://www.youtube.com/watch?v=kwCFHLbIhak" },
      { l:"System Design: Design URL shortener (classic FAANG)", link:"https://www.youtube.com/watch?v=fMZMm_0ZhK4" },
      { l:"Python: Hitesh Choudhary — basics + scikit-learn intro", link:"https://www.youtube.com/watch?v=UrsmFxEIp5k" },
      { l:"Python: Build iris classifier, deploy to Hugging Face Spaces", link:"https://www.youtube.com/watch?v=7eh4d6sabA0" },
      { l:"AMCAT mock: full OA simulation — 90 min, no breaks", link:"https://www.myamcat.com/" },
      { l:"Communication drill: record 2-min concept explanation on camera", link:null },
      { l:"System Design: Twitter feed — 45-min full answer aloud", link:"https://www.youtube.com/watch?v=wYk0xPP_P_8" },
    ]
    const sd = sysdes[wn]
    return { phase:3, phaseColor:"#c77dff", title: sun ? "SUNDAY HARD MODE" : "INTERVIEW FORGE", subtitle:"DSA gets hard here. No shortcut through DP and Graphs.", hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: sun ? [
        makeTask('d1', topics[wn] + " — 2 full problems, full focus", 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('sh1','Striver A2Z: 1 problem from current section','sheet',DSA_SHEET,'leetcode'),
        makeTask('l1', sd.l, 'lecture', sd.link, 'java'),
        makeTask('b1','Add MongoDB to project OR continue Python ML project','build'),
        makeTask('a1','Full AMCAT-format OA mock — timed','aptitude','https://www.myamcat.com/','aptitude'),
        makeTask('c1','Speak 2 minutes explaining a concept you learned today — record or aloud','communication'),
      ] : [
        makeTask('d1', topics[wn], 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('l1', sd.l, 'lecture', sd.link, 'java'),
        makeTask('a1','Aptitude: 15 mixed questions — verbal from this phase','aptitude','https://www.indiabix.com/','aptitude'),
        makeTask('rc1','Explain today\'s DP/Graph concept in your own words — write it down','recall'),
      ]
    }
  }

  if (date >= p4s && date <= p4e) {
    const wn = Math.min(Math.floor((date - p4s) / (7*24*60*60*1000)), 9)
    const awsTopics = [
      { l:"AWS: Create EC2 instance — deploy Spring Boot, configure env vars", link:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html" },
      { l:"AWS: S3 bucket — upload files from Spring Boot, pre-signed URLs", link:"https://www.youtube.com/watch?v=NZElg91l_ms" },
      { l:"MongoDB: Spring Data MongoDB — NoSQL endpoint alongside SQL", link:"https://www.youtube.com/watch?v=3_CnItURxdk" },
      { l:"Pramp mock interview: 45-min live coding session with a peer", link:"https://www.pramp.com/" },
      { l:"Resume: write 3 bullets using 'Built X with Y that achieved Z' format", link:null },
      { l:"LeetCode: company-tagged JPMC/PayPal problems — filter by company", link:"https://leetcode.com/problemset/?companySlug=jpmorgan" },
      { l:"System Design: Design Instagram feed — 45-min full spoken answer", link:"https://www.youtube.com/watch?v=wYk0xPP_P_8" },
      { l:"HR prep: STAR method — write 6 behavioural answers", link:null },
      { l:"OA practice: JPMC-specific question bank on LeetCode", link:"https://leetcode.com/problemset/?companySlug=jpmorgan" },
      { l:"Final project polish — fix bugs, update READMEs, pin GitHub repos", link:null },
    ]
    const w = awsTopics[wn]
    return { phase:4, phaseColor:"#4d96ff", title: sun ? "SUNDAY: APPLY & DRILL" : "PLACEMENT MODE", subtitle:"This is what the last 6 months were for. Stay sharp.", hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: sun ? [
        makeTask('d1','LeetCode: 2 company-tagged problems — JPMC or PayPal filter','leetcode','https://leetcode.com/problemset/?companySlug=jpmorgan','leetcode'),
        makeTask('l1', w.l, 'lecture', w.link, 'spring'),
        makeTask('m1','Mock interview on Pramp — 45 min with peer','build','https://www.pramp.com/','spring'),
        makeTask('a1','Full verbal + quant OA simulation — 60 minutes','aptitude','https://www.indiabix.com/','aptitude'),
        makeTask('ap1','Apply to 3 off-campus roles on LinkedIn/company sites','build'),
        makeTask('c1','HR round: "Tell me about yourself" — 90-second version, record it','communication'),
      ] : [
        makeTask('d1','LeetCode: 1 problem — company-tagged preferred','leetcode','https://leetcode.com/problemset/','leetcode'),
        makeTask('l1', w.l, 'lecture', w.link, 'spring'),
        makeTask('ap1','Apply to 1-2 roles OR refine a resume bullet','build'),
        makeTask('a1','Aptitude: 15 questions + 1 mock HR question','aptitude','https://www.indiabix.com/','aptitude'),
      ]
    }
  }

  if (date >= p5s && date <= p5e) {
    return { phase:5, phaseColor:"#ffd93d", title:"FINAL PUSH", subtitle:"Lock everything. 3 deployed projects. Resume done. January is internship-only.", hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks:[
        makeTask('p1','Portfolio check: all 3 projects deployed with live URLs — fix what\'s broken','build'),
        makeTask('r1','Resume: every bullet has a live URL. No URL = remove the project.','build'),
        makeTask('d1','LeetCode: 1 problem — stay sharp, don\'t rust','leetcode',NEETCODE_ROADMAP,'leetcode'),
        makeTask('ap1','Applications: 3 companies today — JPMC, PayPal, fintech targets','build'),
        makeTask('c1','HR: "Why JPMC?" — write and rehearse a 90-second answer','communication'),
      ]
    }
  }

  return { phase:6, phaseColor:"#ff6b9d", title:"INTERNSHIP ELITE MODE", subtitle:"Every day is interview prep. This is what it all built toward.", hoursAvailable:"Full day",
    tasks:[
      makeTask('d1','LeetCode: 2 hard problems — company-tagged','leetcode','https://leetcode.com/problemset/','leetcode'),
      makeTask('sd1','System Design: 45-min full answer for one classic question — speak aloud','lecture','https://www.youtube.com/c/GauravSenOnYouTube'),
      makeTask('m1','Mock interview: Pramp or with friend — full 45 min technical round','build','https://www.pramp.com/'),
      makeTask('h1','HR: one STAR behavioural question — write it out fully','communication'),
      makeTask('ap1','Follow up on pending apps OR apply to 2 more companies','build'),
    ]
  }
}

export function getTodayIST() {
  const now = new Date()
  const ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 60 * 60 * 1000)
  return `${ist.getFullYear()}-${String(ist.getMonth()+1).padStart(2,'0')}-${String(ist.getDate()).padStart(2,'0')}`
}
export function formatDate(dateStr) {
  return new Date(dateStr+'T00:00:00').toLocaleDateString('en-IN',{weekday:'long',year:'numeric',month:'long',day:'numeric'})
}
export function getDayNumber(dateStr) {
  return Math.floor((new Date(dateStr+'T00:00:00') - new Date('2026-04-14')) / (1000*60*60*24)) + 1
}
export function isDatePast(dateStr)   { return dateStr < getTodayIST() }
export function isDateToday(dateStr)  { return dateStr === getTodayIST() }
export function isDateFuture(dateStr) { return dateStr > getTodayIST() }
export function getTotalDays()        { return Math.floor((new Date('2026-12-31') - new Date('2026-04-14')) / (1000*60*60*24)) + 1 }
export function getDaysSince(dateStr) { return Math.max(0, Math.floor((new Date(dateStr+'T00:00:00') - new Date('2026-04-14')) / (1000*60*60*24))) }
export function getRandomSurprise(dateStr) { return SURPRISES[getDaysSince(dateStr) % SURPRISES.length] }
export function getVerifyChallenge(vt) { if(!vt) return null; const arr=VERIFY_CHALLENGES[vt]||VERIFY_CHALLENGES.java; return arr[Math.floor(Math.random()*arr.length)] }
SCHEDULE

echo "✅ Data files done."
