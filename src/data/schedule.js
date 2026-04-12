// ============================================================
// COMPLETE SCHEDULE DATA — Summer Break Crack 2026
// Phase 1: Apr 14 – Jun 1 (vacation, full day)
// Phase 2: Jun 2 – Jul 27 (college, 4-5 hrs/day)
// Phase 3: Jul 28 – Sep 28 (college, DSA heavy)
// Phase 4: Sep 29 – Dec 14 (college, placement mode)
// Phase 5: Dec 15 – Dec 31 (wrap + apply)
// Phase 6: Jan 2027 (internship prep)
// ============================================================

export const PHASES = [
  { id: 1, name: "Survival Sprint", dates: "Apr 14 – Jun 1", color: "#f97316", bg: "from-orange-900/30 to-orange-800/10", tag: "Java + DSA Foundations", icon: "🔥" },
  { id: 2, name: "Backend Ignition", dates: "Jun 2 – Jul 27", color: "#6bcb77", bg: "from-green-900/30 to-green-800/10", tag: "Spring Boot + DSA Escalation", icon: "⚡" },
  { id: 3, name: "Interview Forge", dates: "Jul 28 – Sep 28", color: "#c77dff", bg: "from-purple-900/30 to-purple-800/10", tag: "DP + Graphs + System Design", icon: "⚔️" },
  { id: 4, name: "Placement Mode", dates: "Sep 29 – Dec 14", color: "#4d96ff", bg: "from-blue-900/30 to-blue-800/10", tag: "Full Stack + AWS + Apply", icon: "🎯" },
  { id: 5, name: "Final Push", dates: "Dec 15 – Dec 31", color: "#ffd93d", bg: "from-yellow-900/30 to-yellow-800/10", tag: "Portfolio + Resume Lock", icon: "🚀" },
  { id: 6, name: "Internship Elite", dates: "Jan 2027", color: "#ff6b9d", bg: "from-pink-900/30 to-pink-800/10", tag: "Interview-Specific Drills", icon: "💎" },
]

export const NEETCODE_ROADMAP = "https://neetcode.io/roadmap"
export const DSA_SHEET = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"

// Surprise rewards — shown when all tasks on a day are complete
export const SURPRISES = [
  { type: "meal", content: "🍕 CHEAT MEAL UNLOCKED! You earned a large pizza tonight. No guilt — fuel the grind." },
  { type: "quote", content: "\"The expert in anything was once a beginner who refused to quit.\" — You're building something real." },
  { type: "meal", content: "🍦 Ice cream. Full scoop. Two scoops if you want. You crushed it today." },
  { type: "quote", content: "\"It does not matter how slowly you go as long as you do not stop.\" JPMC will see this consistency." },
  { type: "flex", content: "💪 Go look at your GitHub streak right now. That's proof. That's real. Nobody can take that from you." },
  { type: "meal", content: "🍔 Burger time. Guilt-free. Because you showed up today when it was hard." },
  { type: "quote", content: "\"Success is the sum of small efforts repeated day in, day out.\" One more brick in the wall today." },
  { type: "flex", content: "📱 Text your best friend: 'I just crushed a full day of prep.' Say it out loud. Own it." },
  { type: "meal", content: "🧋 Boba tea / cold coffee / whatever your favourite drink is. You've earned it completely." },
  { type: "quote", content: "\"The difference between ordinary and extraordinary is that little extra.\" Today you chose extra." },
  { type: "flex", content: "🎮 30 minutes of guilt-free gaming tonight. You worked, now play. Balance is a weapon too." },
  { type: "quote", content: "\"Hard days are the best days because that's when champions are made.\" FAANG level, one commit at a time." },
  { type: "meal", content: "🍫 Chocolate. All of it. You built something today that didn't exist yesterday." },
  { type: "flex", content: "😴 Sleep at 10 PM tonight — no guilt. A fully rested brain solves DP problems faster. Science." },
  { type: "quote", content: "\"Don't wish it were easier. Wish you were better.\" You just got better. Again." },
]

// Verification challenges — prove you actually did the work
export const VERIFY_CHALLENGES = {
  leetcode: [
    "What was the time complexity of your solution? Type it.",
    "What pattern did today's problem use? (Two pointer / Sliding window / HashMap / etc)",
    "Could you solve it again right now without looking? (Honest answer)",
    "What edge case almost broke your solution?",
    "Explain your approach in one sentence as if teaching a 10-year-old.",
  ],
  java: [
    "What is one thing you built today that didn't exist yesterday? Name it.",
    "Which concept confused you most today? You have to name something.",
    "Run your Java file RIGHT NOW and paste the output in the notes.",
    "What would break if you deleted 10 lines of your code today?",
  ],
  spring: [
    "What HTTP endpoint did you build today? (e.g., GET /api/users)",
    "Did you test it in Postman/Insomnia? What was the response code?",
    "What error did you hit and how did you fix it?",
  ],
  aptitude: [
    "What was the hardest question you got wrong today? What was the correct answer?",
    "How many questions did you complete? Be honest.",
    "Which topic still feels weak after today's session?",
  ]
}

// ============================================================
// DAILY SCHEDULE GENERATOR
// Generates tasks for any date in the program
// ============================================================

function makeTask(id, label, type, link, verifyType) {
  return { id, label, type, link: link || null, verifyType: verifyType || null }
}

// Phase 1 Week content — vacation sprint
const PHASE1_WEEKS = [
  { // Week 1: Apr 14-20 — Java basics + Arrays
    java: { label: "Anuj Bhaiya: Java basics — watch 1 video then close tab and code", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
    dsa:  { label: "NeetCode Arrays — Easy problems (Contains Duplicate, Valid Anagram, Two Sum)", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Arrays — Largest element, Second largest, Check sorted", link: DSA_SHEET },
    apt:  { label: "IndiaBix Quant: Percentages + Ratios — 20 questions", link: "https://www.indiabix.com/aptitude/percentage/" },
    build:{ label: "Build: Java Calculator CLI — takes two numbers, supports +/-/*// , runs in terminal" },
  },
  { // Week 2: Apr 21-27 — OOP in Java
    java: { label: "Anuj Bhaiya: OOP — Classes, Objects, Constructors. Code every example yourself.", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
    dsa:  { label: "NeetCode: Two Pointers — Valid Palindrome, 3Sum, Container With Most Water", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Sorting — Bubble, Selection, Insertion sort from scratch", link: DSA_SHEET },
    apt:  { label: "IndiaBix: Time & Work + Time-Speed-Distance — 20 questions", link: "https://www.indiabix.com/aptitude/time-and-work/" },
    build:{ label: "Build: Bank Account OOP model — Account class, deposit(), withdraw(), balance check" },
  },
  { // Week 3: Apr 28 - May 3 — Collections + Recursion
    java: { label: "Anuj Bhaiya: Collections — ArrayList, HashMap, Generics basics", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
    dsa:  { label: "NeetCode: Sliding Window — Best Time to Buy Stock, Longest Substring Without Repeat", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Recursion — Reverse array, Fibonacci, Power(x,n)", link: DSA_SHEET },
    apt:  { label: "IndiaBix: Profit & Loss + Number Series — 20 questions", link: "https://www.indiabix.com/aptitude/profit-and-loss/" },
    build:{ label: "Build: Student Grade Manager CLI — add/remove students, compute average, save to file" },
  },
  { // Week 4: May 4-10 — LinkedList
    java: { label: "Implement LinkedList from scratch — Node class, add/remove/traverse, NO java.util", link: "https://youtube.com/@AnujBhaiya" },
    dsa:  { label: "NeetCode: Linked Lists — Reverse LL, Merge Two Sorted, Linked List Cycle", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Linked List section — Basic to Medium", link: DSA_SHEET },
    apt:  { label: "IndiaBix: Logical Reasoning — Number Series, Coding-Decoding — 20 questions", link: "https://www.indiabix.com/logical-reasoning/questions-and-answers/" },
    build:{ label: "Build: Your own LinkedList class with all operations — push, pop, insert at position, reverse" },
  },
  { // Week 5: May 11-17 — Stack + Queue
    java: { label: "Stack + Queue: implement both array-backed and linked-backed versions from scratch", link: "https://youtube.com/@AnujBhaiya" },
    dsa:  { label: "NeetCode: Stack — Valid Parentheses, Min Stack, Daily Temperatures", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Stack & Queue section", link: DSA_SHEET },
    apt:  { label: "IndiaBix: Blood Relations + Seating Arrangement — 20 questions", link: "https://www.indiabix.com/logical-reasoning/blood-relations/" },
    build:{ label: "Build: CLI Expression Evaluator — evaluates (3+4)*2 using your Stack implementation" },
  },
  { // Week 6: May 18-24 — Binary Trees
    java: { label: "Binary Tree: Node class, insert, DFS (inorder/preorder/postorder), BFS (level order)", link: "https://youtube.com/@AnujBhaiya" },
    dsa:  { label: "NeetCode: Trees — Invert Binary Tree, Max Depth, Same Tree, Level Order", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Binary Trees — Easy to Medium problems", link: DSA_SHEET },
    apt:  { label: "IndiaBix: Syllogisms + Direction Sense — 20 questions", link: "https://www.indiabix.com/logical-reasoning/syllogism/" },
    build:{ label: "Build: Tree Visualizer CLI — prints tree structure in terminal (like tree command)" },
  },
  { // Week 7: May 25 - Jun 1 — HashMap + Review
    java: { label: "HashMap internals — hashing, collision, load factor. Solve 5 problems using only HashMap", link: "https://youtube.com/@AnujBhaiya" },
    dsa:  { label: "NeetCode: Review week — re-solve 3 problems you got wrong. No hints this time.", link: NEETCODE_ROADMAP },
    sheet:{ label: "Striver A2Z: Hashing section — Consolidation", link: DSA_SHEET },
    apt:  { label: "Full mock aptitude test: 30 questions mixed quant + logical — time yourself", link: "https://www.indiabix.com/" },
    build:{ label: "DEPLOY: Push final CLI project to GitHub with README. Live URL before June 1." },
  },
]

function getPhase1WeekIndex(date) {
  const start = new Date('2026-04-14')
  const d = new Date(date)
  const daysDiff = Math.floor((d - start) / (1000 * 60 * 60 * 24))
  return Math.min(Math.floor(daysDiff / 7), PHASE1_WEEKS.length - 1)
}

// Break day rules
export function isBreakDay(dateStr) {
  const breakDays = [
    '2026-05-01', // Labour day break
    '2026-06-15', // College settle break
    '2026-07-04', // Mid-phase break
    '2026-08-15', // Independence day
    '2026-09-05', // Teachers day break
    '2026-10-02', // Gandhi Jayanti
    '2026-10-24', // Pre-Phase4 break
    '2026-11-14', // Mid-Nov break
    '2026-12-25', // Christmas
  ]
  return breakDays.includes(dateStr)
}

function isSunday(dateStr) {
  return new Date(dateStr).getDay() === 0
}

export function getScheduleForDate(dateStr) {
  const date = new Date(dateStr)
  const today = new Date()
  today.setHours(0,0,0,0)
  date.setHours(0,0,0,0)

  const phase1Start = new Date('2026-04-14')
  const phase1End   = new Date('2026-06-01')
  const phase2Start = new Date('2026-06-02')
  const phase2End   = new Date('2026-07-27')
  const phase3Start = new Date('2026-07-28')
  const phase3End   = new Date('2026-09-28')
  const phase4Start = new Date('2026-09-29')
  const phase4End   = new Date('2026-12-14')
  const phase5Start = new Date('2026-12-15')
  const phase5End   = new Date('2026-12-31')

  if (isBreakDay(dateStr)) {
    return {
      phase: 0,
      title: "REST & RECHARGE DAY",
      subtitle: "Your tutor says: no code today. Full stop.",
      isBreak: true,
      tasks: [
        makeTask('rest1', 'Walk outside for 30+ minutes — no phone', 'rest'),
        makeTask('rest2', 'Read something non-technical for 1 hour', 'rest'),
        makeTask('rest3', 'Sleep 8+ hours tonight', 'rest'),
      ]
    }
  }

  if (date >= phase1Start && date <= phase1End) {
    const weekIdx = getPhase1WeekIndex(dateStr)
    const w = PHASE1_WEEKS[weekIdx]
    const sun = isSunday(dateStr)
    return {
      phase: 1,
      phaseColor: "#f97316",
      title: sun ? "SUNDAY — Review & Reinforce" : "DAILY SPRINT",
      subtitle: sun ? "Re-solve your 3 hardest problems from this week. No notes. Prove you own it." : "Full day. No excuses. This window never returns.",
      hoursAvailable: "Full day",
      tasks: sun ? [
        makeTask('sun1', 'Re-solve hardest problem from Mon–Wed from memory — NO notes', 'leetcode', null, 'leetcode'),
        makeTask('sun2', 'Re-solve hardest problem from Thu–Sat from memory — NO notes', 'leetcode', null, 'leetcode'),
        makeTask('sun3', 'Write 5-line explanation of each solution pattern in your own words', 'recall'),
        makeTask('sun4', 'Review and clean up this week\'s code — commit to GitHub', 'build'),
        makeTask('sun5', 'Aptitude: Full 30-question mixed test. Timed.', 'aptitude', 'https://www.indiabix.com/', 'aptitude'),
      ] : [
        makeTask('lec1', w.java.label, 'lecture', w.java.link, 'java'),
        makeTask('dsa1', w.dsa.label, 'leetcode', w.dsa.link, 'leetcode'),
        makeTask('sheet1', w.sheet.label, 'sheet', w.sheet.link, 'leetcode'),
        makeTask('apt1', w.apt.label, 'aptitude', w.apt.link, 'aptitude'),
        makeTask('build1', w.build.label, 'build', null, 'java'),
        makeTask('recall1', 'Active Recall: Explain today\'s main concept in 5 sentences — write it, don\'t type it', 'recall'),
      ]
    }
  }

  if (date >= phase2Start && date <= phase2End) {
    const sun = isSunday(dateStr)
    const dayOfWeek = date.getDay()
    const weekNum = Math.floor((date - phase2Start) / (7 * 24 * 60 * 60 * 1000))
    const springTopics = [
      { lec: "Spring Boot intro — Spring Initializr, project structure, first REST endpoint", link: "https://www.youtube.com/watch?v=9SGDpanrc8U" },
      { lec: "Spring Boot: CRUD endpoints + PostgreSQL + JPA/Hibernate basics", link: "https://www.youtube.com/watch?v=HYgHbn56G4g" },
      { lec: "Spring Boot: JWT Authentication — spring-security, token generation, filter chain", link: "https://www.youtube.com/watch?v=KxqlJblhzfI" },
      { lec: "React fundamentals — components, state, props, hooks (useState, useEffect)", link: "https://www.youtube.com/watch?v=CgkZ7MvWUAA" },
      { lec: "React: Connect frontend to Spring Boot API — Axios, CORS config, form handling", link: "https://www.youtube.com/watch?v=WXsD0ZgxjRw" },
      { lec: "Tailwind CSS — utility classes, responsive design, component styling", link: "https://www.youtube.com/watch?v=lCxcTsOHrjo" },
      { lec: "Deploy: Spring Boot on Render.com free tier — env vars, PostgreSQL on Supabase", link: "https://render.com/docs/deploy-spring-boot" },
      { lec: "System Design basics: Gaurav Sen — Load Balancers, Caching, CDN", link: "https://www.youtube.com/watch?v=xpDnVSmNFX0" },
    ]
    const w = springTopics[Math.min(weekNum, springTopics.length - 1)]
    return {
      phase: 2,
      phaseColor: "#6bcb77",
      title: sun ? "SUNDAY DEEP WORK" : "COLLEGE + GRIND",
      subtitle: "4-5 hrs available. Make every minute count.",
      hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: sun ? [
        makeTask('lec1', w.lec + " — watch, then build", 'lecture', w.link, 'spring'),
        makeTask('dsa1', 'NeetCode: 2 problems — 25-min timer each, no hints', 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('build1', 'Add one feature to your Spring Boot project — push to GitHub', 'build', null, 'spring'),
        makeTask('apt1', 'Aptitude mock: 30 questions. Time it. Log your score.', 'aptitude', 'https://www.indiabix.com/', 'aptitude'),
        makeTask('recall1', 'Write README update for your project — describe what it does', 'recall'),
      ] : [
        makeTask('dsa1', 'NeetCode: 1 problem — 25-min timer, write approach before coding', 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('lec1', w.lec, 'lecture', w.link, 'spring'),
        makeTask('build1', 'Build session: implement what you watched. Push to GitHub.', 'build', null, 'spring'),
        makeTask('apt1', 'Aptitude: 15 questions — logical reasoning', 'aptitude', 'https://www.indiabix.com/', 'aptitude'),
      ]
    }
  }

  if (date >= phase3Start && date <= phase3End) {
    const sun = isSunday(dateStr)
    const weekNum = Math.floor((date - phase3Start) / (7 * 24 * 60 * 60 * 1000))
    const dsaTopics = [
      "NeetCode: Dynamic Programming — Climbing Stairs, House Robber, Longest Common Subsequence",
      "NeetCode: DP — Coin Change, Knapsack variants, Partition Equal Subset Sum",
      "NeetCode: Graphs — Number of Islands, Clone Graph, Pacific Atlantic Water Flow",
      "NeetCode: Graphs — Course Schedule (topological sort), Dijkstra's algorithm",
      "NeetCode: Backtracking — Subsets, Permutations, N-Queens",
      "NeetCode: Intervals — Merge Intervals, Non-overlapping Intervals",
      "NeetCode: Greedy — Maximum Subarray, Jump Game, Gas Station",
      "NeetCode: Hard review — pick your 3 weakest patterns and drill them",
    ]
    const sysDes = [
      { label: "System Design: Gaurav Sen — Consistent Hashing", link: "https://www.youtube.com/watch?v=zaRkONvyGr8" },
      { label: "System Design: Database sharding + replication", link: "https://www.youtube.com/watch?v=hdxdhCpgYo8" },
      { label: "System Design: CAP theorem + eventual consistency", link: "https://www.youtube.com/watch?v=kwCFHLbIhak" },
      { label: "System Design: Design URL shortener (classic FAANG question)", link: "https://www.youtube.com/watch?v=fMZMm_0ZhK4" },
      { label: "Python intro: Hitesh Choudhary — basics + scikit-learn classification", link: "https://www.youtube.com/watch?v=UrsmFxEIp5k" },
      { label: "Python: Build a simple ML model — iris dataset, random forest, predict", link: "https://www.youtube.com/watch?v=7eh4d6sabA0" },
      { label: "AMCAT mock: full OA simulation — 90 min, no breaks", link: "https://www.myamcat.com/" },
      { label: "Communication: speak-to-camera for 2 min explaining one DS concept — record it", link: null },
    ]
    const topic = dsaTopics[Math.min(weekNum, dsaTopics.length - 1)]
    const sd = sysDes[Math.min(weekNum, sysDes.length - 1)]
    return {
      phase: 3,
      phaseColor: "#c77dff",
      title: sun ? "SUNDAY HARD MODE" : "INTERVIEW FORGE",
      subtitle: "DSA gets hard here. No shortcut through DP and Graphs.",
      hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: sun ? [
        makeTask('dsa1', topic + " — 2 problems full focus", 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('sheet1', 'Striver A2Z: 1 problem from current section', 'sheet', DSA_SHEET, 'leetcode'),
        makeTask('sd1', sd.label, 'lecture', sd.link, 'java'),
        makeTask('build1', 'Add MongoDB to your project OR start new Python ML project', 'build'),
        makeTask('apt1', 'Full AMCAT-format OA mock — timed', 'aptitude', 'https://www.myamcat.com/', 'aptitude'),
        makeTask('comm1', 'Talk for 2 minutes explaining a concept you just learned — record or speak aloud', 'communication'),
      ] : [
        makeTask('dsa1', topic, 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('sd1', sd.label, 'lecture', sd.link, 'java'),
        makeTask('apt1', 'Aptitude: 15 mixed questions — verbal from this phase', 'aptitude', 'https://www.indiabix.com/', 'aptitude'),
        makeTask('recall1', 'Explain today\'s DP/Graph concept in your own words — write it down', 'recall'),
      ]
    }
  }

  if (date >= phase4Start && date <= phase4End) {
    const sun = isSunday(dateStr)
    const weekNum = Math.floor((date - phase4Start) / (7 * 24 * 60 * 60 * 1000))
    const awsTopics = [
      { label: "AWS: Create EC2 instance — deploy your Spring Boot app on EC2 free tier", link: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html" },
      { label: "AWS: S3 bucket — upload files from Spring Boot, generate pre-signed URLs", link: "https://www.youtube.com/watch?v=NZElg91l_ms" },
      { label: "MongoDB: Intro + Spring Data MongoDB — build a NoSQL endpoint alongside your SQL one", link: "https://www.youtube.com/watch?v=3_CnItURxdk" },
      { label: "Pramp mock interview: 45-min live coding session with a peer", link: "https://www.pramp.com/" },
      { label: "Resume: write 3 project bullets using 'Built X using Y that achieved Z' format", link: null },
      { label: "LeetCode: company-tagged JPMC/PayPal problems — filter by company", link: "https://leetcode.com/problemset/?search=&companySlug=jpmorgan" },
      { label: "System Design: Design Twitter/Instagram feed — practice 45-min answer structure", link: "https://www.youtube.com/watch?v=wYk0xPP_P_8" },
      { label: "Off-campus applications: Apply to 5 companies today using your resume", link: null },
    ]
    const w = awsTopics[Math.min(weekNum, awsTopics.length - 1)]
    return {
      phase: 4,
      phaseColor: "#4d96ff",
      title: sun ? "SUNDAY: APPLY & DRILL" : "PLACEMENT MODE",
      subtitle: "This is what the last 6 months were for. Stay sharp.",
      hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: sun ? [
        makeTask('dsa1', 'LeetCode: 2 company-tagged problems — JPMC or PayPal filter', 'leetcode', 'https://leetcode.com/problemset/?companySlug=jpmorgan', 'leetcode'),
        makeTask('lec1', w.label, 'lecture', w.link, 'spring'),
        makeTask('mock1', 'Mock interview on Pramp — 45 min with peer', 'build', 'https://www.pramp.com/', 'spring'),
        makeTask('apt1', 'Full verbal + quant OA simulation — 60 minutes', 'aptitude', 'https://www.indiabix.com/', 'aptitude'),
        makeTask('apply1', 'Apply to 3 off-campus roles on LinkedIn/company sites', 'build'),
        makeTask('comm1', 'Practice HR answer: "Tell me about yourself" — 90 second version, record it', 'communication'),
      ] : [
        makeTask('dsa1', 'LeetCode: 1 problem — company-tagged preferred', 'leetcode', 'https://leetcode.com/problemset/', 'leetcode'),
        makeTask('lec1', w.label, 'lecture', w.link, 'spring'),
        makeTask('apply1', 'Apply to 1-2 roles OR refine resume bullet', 'build'),
        makeTask('apt1', 'Aptitude: 15 questions + 1 mock HR question', 'aptitude', 'https://www.indiabix.com/', 'aptitude'),
      ]
    }
  }

  if (date >= phase5Start && date <= phase5End) {
    const sun = isSunday(dateStr)
    return {
      phase: 5,
      phaseColor: "#ffd93d",
      title: "FINAL PUSH",
      subtitle: "Lock everything. 3 deployed projects. Resume done. January is internship-only.",
      hoursAvailable: sun ? "7-8 hrs" : "4-5 hrs",
      tasks: [
        makeTask('port1', 'Portfolio check: are all 3 projects deployed with live URLs? Fix what\'s broken.', 'build'),
        makeTask('resume1', 'Resume review: every bullet has a live URL. No URL = remove the project.', 'build'),
        makeTask('dsa1', 'LeetCode: 1 problem — stay sharp, don\'t rust', 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
        makeTask('apply1', 'Applications: 3 companies today — JPMC, PayPal, fintech targets', 'build'),
        makeTask('comm1', 'HR prep: "Why do you want to join JPMC?" — write and rehearse a 90-second answer', 'communication'),
      ]
    }
  }

  // Phase 6 — Jan 2027
  return {
    phase: 6,
    phaseColor: "#ff6b9d",
    title: "INTERNSHIP ELITE MODE",
    subtitle: "Every day is interview prep. This is what it all built toward.",
    hoursAvailable: "Full day",
    tasks: [
      makeTask('dsa1', 'LeetCode: 2 hard problems — company-tagged', 'leetcode', 'https://leetcode.com/problemset/', 'leetcode'),
      makeTask('sd1', 'System Design: 45-min full answer for one classic question — speak it aloud', 'lecture', 'https://www.youtube.com/c/GauravSenOnYouTube'),
      makeTask('mock1', 'Mock interview: Pramp or with a friend — full 45 min technical round', 'build', 'https://www.pramp.com/'),
      makeTask('hr1', 'HR round prep: one behavioural question using STAR method — write it out', 'communication'),
      makeTask('apply1', 'Follow up on pending applications / apply to 2 more companies', 'build'),
    ]
  }
}

// Get today's date in IST
export function getTodayIST() {
  const now = new Date()
  const istOffset = 5.5 * 60 * 60 * 1000
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const ist = new Date(utc + istOffset)
  const y = ist.getFullYear()
  const m = String(ist.getMonth() + 1).padStart(2, '0')
  const d = String(ist.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export function getDayNumber(dateStr) {
  const start = new Date('2026-04-14')
  const d = new Date(dateStr + 'T00:00:00')
  return Math.floor((d - start) / (1000 * 60 * 60 * 24)) + 1
}

export function isDatePast(dateStr) {
  const today = getTodayIST()
  return dateStr < today
}

export function isDateToday(dateStr) {
  return dateStr === getTodayIST()
}

export function isDateFuture(dateStr) {
  const today = getTodayIST()
  return dateStr > today
}

export function getTotalDays() {
  const start = new Date('2026-04-14')
  const end = new Date('2026-12-31')
  return Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1
}

export function getDaysSince(dateStr) {
  const start = new Date('2026-04-14')
  const d = new Date(dateStr + 'T00:00:00')
  return Math.max(0, Math.floor((d - start) / (1000 * 60 * 60 * 24)))
}

export function getRandomSurprise(dateStr) {
  const idx = getDaysSince(dateStr) % SURPRISES.length
  return SURPRISES[idx]
}

export function getVerifyChallenge(verifyType) {
  if (!verifyType) return null
  const arr = VERIFY_CHALLENGES[verifyType] || VERIFY_CHALLENGES.java
  return arr[Math.floor(Math.random() * arr.length)]
}

export const NEETCODE_PROFILE = "https://neetcode.io/profile"
export const SHRADHA_SHEET = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
export const LEETCODE_DAILY = "https://leetcode.com/problemset/"
export const LEETCODE_PROFILE = "https://leetcode.com/"

export const BREAK_DAYS = new Set([
  '2026-05-01','2026-06-15','2026-07-04','2026-08-15',
  '2026-09-05','2026-10-02','2026-10-24','2026-11-14','2026-12-25',
])
