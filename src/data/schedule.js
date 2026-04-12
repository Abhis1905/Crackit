// ============================================================

export const PHASES = [
  { id: 1, name: "Survival Sprint", dates: "Apr 14 – Jun 1", color: "#f97316", bg: "from-orange-900/30 to-orange-800/10", tag: "Java + DSA Foundations · Full day available", icon: "🔥", days: "48 days" },
  { id: 2, name: "Backend Ignition", dates: "Jun 2 – Jul 13", color: "#6bcb77", bg: "from-green-900/30 to-green-800/10", tag: "Spring Boot + React + DSA escalation · 4-5 hrs/day", icon: "⚡", days: "42 days" },
  { id: 3, name: "Full Stack Forge", dates: "Jul 14 – Sep 7", color: "#c77dff", bg: "from-purple-900/30 to-purple-800/10", tag: "Full Stack projects + AI/ML + DSA Hard · 4-5 hrs/day", icon: "⚔️", days: "56 days" },
  { id: 4, name: "Placement Mode", dates: "Sep 8 – Nov 16", color: "#4d96ff", bg: "from-blue-900/30 to-blue-800/10", tag: "DP + Graphs + System Design + Apply · 4-5 hrs/day", icon: "🎯", days: "70 days" },
  { id: 5, name: "Final Lock", dates: "Nov 17 – Dec 31", color: "#ffd93d", bg: "from-yellow-900/30 to-yellow-800/10", tag: "Portfolio + Resume + Applications · 4-5 hrs/day", icon: "🚀", days: "45 days" },
  { id: 6, name: "Internship Elite", dates: "Jan 2027", color: "#ff6b9d", bg: "from-pink-900/30 to-pink-800/10", tag: "Interview Drills Only · No new topics", icon: "💎", days: "31 days" },
]

export const NEETCODE_PROFILE = "https://neetcode.io/profile/1905-abhishek"
export const NEETCODE_ROADMAP = "https://neetcode.io/roadmap"
export const LEETCODE_PROFILE = "https://leetcode.com/u/1905-abhishek/"
export const LEETCODE_DAILY = "https://leetcode.com/problemset/"
export const SHRADHA_SHEET = "https://docs.google.com/spreadsheets/d/1hXserPuxVoWMG9Hs7y8wVdRCJTcj3AphXpW-QfI3orQ"
export const CODING_SHUTTLE = "https://codingshuttle.com"
export const SPRING_TELUSKO = "https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5"
export const SPRING_AMIGOSCODE = "https://www.youtube.com/watch?v=9SGDpanrc8U"
export const REACT_HITESH = "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
export const TAILWIND_LINK = "https://www.youtube.com/watch?v=tS7upsfuxmo"
export const PYTHON_HITESH = "https://youtube.com/playlist?list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s"
export const AIML_CAMPUSX = "https://youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH"
export const COMMUNICATION_YT = "https://www.youtube.com/@ChetChat"
export const COMMUNICATION_PLATFORM = "https://www.speeko.co/"
export const SYSTEM_DESIGN_YT = "https://www.youtube.com/@gkcs"
export const AWS_FREE = "https://aws.amazon.com/free/"
export const INDIABIX = "https://www.indiabix.com/"
export const PRAMP = "https://www.pramp.com/"
export const GEEKSFORGEEKS_OA = "https://practice.geeksforgeeks.org/company/1/practice/"

export const SURPRISES = [
  { type: "meal", content: "🍕 CHEAT MEAL UNLOCKED! You earned a large pizza tonight. Order it. No guilt — this is the fuel." },
  { type: "quote", content: "\"The expert in anything was once a beginner who refused to quit.\" You're building something that'll last a career." },
  { type: "meal", content: "🍦 Two scoops of ice cream. Full guilt-free pass. You showed up when it was hard." },
  { type: "quote", content: "\"Success is the sum of small efforts repeated day in, day out.\" JPMC will see this in your GitHub streak." },
  { type: "flex", content: "💪 Open GitHub right now. Look at that streak. That's proof. Nobody can take that." },
  { type: "meal", content: "🍔 Burger time. Fully deserved. Because you chose to grind when most 2nd-year students watched Netflix." },
  { type: "flex", content: "🎮 30 minutes guilt-free gaming tonight. You worked. Now play. Recovery is strategy." },
  { type: "quote", content: "\"Hard days are the best days because that's when champions are made.\" FAANG level, one commit at a time." },
  { type: "meal", content: "🧋 Cold coffee or boba or whatever your favourite drink is. You built something today that didn't exist yesterday." },
  { type: "flex", content: "😴 Sleep at 10 PM tonight. A fully rested brain solves DP problems 30% faster. This is the grind too." },
  { type: "quote", content: "\"Don't wish it were easier. Wish you were better.\" You just got better. Again." },
  { type: "flex", content: "📱 Text your closest friend: 'I just crushed a full prep day.' You earned the right." },
  { type: "meal", content: "🍫 All the chocolate. Every piece. You built something real today." },
  { type: "quote", content: "\"The difference between ordinary and extraordinary is that little extra.\" Today you chose extra." },
  { type: "flex", content: "🎵 One hour of your favourite playlist, zero guilt. Come back sharper tomorrow." },
]

export const VERIFY_CHALLENGES = {
  leetcode: [
    "What was the time complexity of your solution? Write it out (O(n), O(n log n) etc.)",
    "What pattern did this problem use? (Two pointer / Sliding window / HashMap / BFS / DP / etc)",
    "What edge case almost broke your solution? Name the specific input.",
    "Explain your approach in one sentence as if teaching someone who just started coding.",
    "Could you solve this again right now from scratch? Be honest — yes or no and why.",
  ],
  java: [
    "What is one concrete thing you built today that didn't exist 6 hours ago? Name it specifically.",
    "Which concept confused you most? You HAVE to name something — 'nothing' is a lie.",
    "Run your code RIGHT NOW and tell me the output.",
    "What would break if you deleted 10 lines from what you wrote today?",
  ],
  spring: [
    "What HTTP endpoint did you build? (e.g., POST /api/users) — tell me the method + path.",
    "Did you test it in Postman? What was the status code you got back?",
    "What error did you hit and exactly how did you fix it? Be specific.",
    "What Spring annotation did you use today that you didn't know last week?",
  ],
  react: [
    "Which React hook did you use today and what did it do in your component?",
    "What does your component render? Describe the UI in one sentence.",
    "What was a prop you passed down and what happened with it?",
    "Show me the useState — what's the state name and what triggers the update?",
  ],
  aiml: [
    "What ML algorithm did you implement and what dataset did you use?",
    "What accuracy did your model get? What would improve it?",
    "What did you learn about the data before training — any preprocessing steps?",
  ],
  aptitude: [
    "What was the hardest question you got wrong? Write the correct answer.",
    "How many questions did you complete? Be brutally honest.",
    "Which topic still feels weakest after today's session? Name it.",
  ],
  communication: [
    "What topic did you speak about and for how long?",
    "What filler word did you catch yourself using the most?",
    "What's one thing you'll improve in your next speaking session?",
  ],
}

function makeTask(id, label, type, link, verifyType, extraLink) {
  return { id, label, type, link: link || null, verifyType: verifyType || null, extraLink: extraLink || null }
}

function toDate(str) { return new Date(str + 'T00:00:00+05:30') }
function isSunday(dateStr) { return toDate(dateStr).getDay() === 0 }
function isWeekend(dateStr) { const d = toDate(dateStr).getDay(); return d === 0 || d === 6 }

export const BREAK_DAYS = new Set([
  '2026-04-19','2026-04-26','2026-05-03','2026-05-10','2026-05-17','2026-05-24','2026-05-31',
  '2026-06-14','2026-06-28','2026-07-12',
  '2026-07-26','2026-08-09','2026-08-23','2026-09-06',
  '2026-09-20','2026-10-04','2026-10-18','2026-11-01','2026-11-15',
  '2026-11-29','2026-12-13','2026-12-25',
])

const P1_WEEKS = [
  {
    label: "Java Syntax + Arrays DSA",
    java: { label: "Coding Shuttle: Java basics — variables, data types, control flow, methods (2 modules)", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode Arrays: Contains Duplicate, Valid Anagram, Two Sum", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: Arrays — Majority Element, Single Number (Easy)", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "IndiaBix Quant: Percentages + Ratios — 20 questions timed", link: INDIABIX, verify: 'aptitude' },
    build:{ label: "Build: Java Calculator CLI — +/-/×/÷ from terminal input, handles edge cases" },
    sun:  { label: "Sunday Review: Re-solve all 3 Arrays problems from memory. No hints. Write time complexities." },
  },
  {
    label: "OOP Deep Dive + Two Pointers",
    java: { label: "Coding Shuttle: OOP — Classes, Objects, Constructors, Inheritance, Polymorphism, Interfaces", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode Two Pointers: Valid Palindrome, 3Sum, Container With Most Water", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: Arrays — Stock Buy & Sell, Kadane's Algorithm", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "IndiaBix: Time & Work + Speed-Distance — 20 questions", link: INDIABIX, verify: 'aptitude' },
    build:{ label: "Build: Bank Account OOP — Account class, deposit(), withdraw(), getBalance(), overdraft check" },
    sun:  { label: "Sunday: Re-solve 3Sum + Container from scratch. Explain all 4 OOP pillars aloud for 5 min." },
  },
  {
    label: "Collections + Sliding Window",
    java: { label: "Coding Shuttle: Java Collections — ArrayList, LinkedList, HashMap, HashSet, Generics", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode Sliding Window: Best Time to Buy Stock, Longest Substring Without Repeating", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: Arrays — Subarray Sum = K, Longest Substring Without Repeating", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "IndiaBix: Profit & Loss + Number Series — 20 questions", link: INDIABIX, verify: 'aptitude' },
    build:{ label: "Build: Student Grade Manager CLI — add/remove students, compute average, sort by grade, save to file" },
    sun:  { label: "Sunday: 3 sliding window problems from NeetCode. Time yourself — 25 min each." },
  },
  {
    label: "LinkedList + Stack/Queue Foundations",
    java: { label: "Coding Shuttle: Exception Handling, File I/O, Java 8 features (streams, lambda)", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode LinkedList: Reverse LL, Merge Two Sorted Lists, Linked List Cycle", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: Linked List — Reverse, Middle, Merge 2 Sorted, Detect Cycle", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "IndiaBix: Permutations & Combinations + Probability — 20 questions", link: INDIABIX, verify: 'aptitude' },
    build:{ label: "Build: Implement your own LinkedList class in Java — add, remove, reverse, detectCycle methods" },
    sun:  { label: "Sunday: Implement Stack + Queue using LinkedList from scratch. No reference." },
  },
  {
    label: "Stack/Queue + Binary Search",
    java: { label: "Coding Shuttle: Multithreading basics, JDBC intro, connecting Java to PostgreSQL", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode Stack: Valid Parentheses, Min Stack, Daily Temperatures. Binary Search: Search Rotated", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: Stack & Queue — Valid Parentheses, Next Greater Element, Min Stack", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "IndiaBix: Logical Reasoning — Seating Arrangement + Blood Relations — 20 questions", link: INDIABIX, verify: 'aptitude' },
    build:{ label: "Build: Expression Evaluator CLI using Stack — handles +,-,*,/ with brackets + test cases" },
    sun:  { label: "Sunday: Binary Search — 3 problems. Allocate Min Pages + Aggressive Cows from Shradha sheet." },
  },
  {
    label: "Binary Trees + Communication Sprint",
    java: { label: "Coding Shuttle: Design Patterns — Singleton, Factory, Builder, Observer", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode Trees: Invert Binary Tree, Max Depth, Diameter, Same Tree, Level Order BFS", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: Binary Trees — Inorder/Preorder/Postorder, Symmetric Tree, Height Balanced", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "IndiaBix: Verbal — Reading Comprehension + Sentence Correction — 20 questions", link: INDIABIX, verify: 'aptitude' },
    comm: { label: "ChetChat YT: Intro to communication for interviews — Watch 1 video, then speak 5 min on today's learning", link: COMMUNICATION_YT, verify: 'communication' },
    build:{ label: "Build: Binary Tree implementation in Java — insert, BFS traversal, height calculator" },
    sun:  { label: "Sunday: Record 2-minute explanation of Binary Trees. Play it back. Judge yourself brutally." },
  },
  {
    label: "BST + Phase 1 Consolidation",
    java: { label: "Coding Shuttle: Review week — revisit weakest Java concept. Write 50 lines from scratch.", link: CODING_SHUTTLE, verify: 'java' },
    dsa:  { label: "NeetCode: BST problems + review weakest patterns from Phase 1", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:{ label: "Shradha Sheet: BST — Validate BST, Kth Smallest, LCA in BST, Inorder Successor", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:  { label: "GeeksForGeeks OA mock — full 60-minute timed practice test", link: GEEKSFORGEEKS_OA, verify: 'aptitude' },
    comm: { label: "Speeko app: Daily 5-minute speaking exercise. Focus on pace and filler words.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
    build:{ label: "Deploy your Java project to GitHub. README must explain what it does + how to run. Non-negotiable." },
    sun:  { label: "Sunday: Phase 1 final review — Solve 5 problems you struggled with this month. From scratch." },
  },
]

const P2_WEEKS = [
  {
    label: "Spring Boot: Initializr + First REST API",
    spring: { label: "Coding Shuttle / Telusko: Spring Boot intro — Initializr, first REST controller, @GetMapping", link: SPRING_TELUSKO, verify: 'spring' },
    dsa:    { label: "NeetCode: 1 problem — continue Sliding Window / Two Pointers", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:  { label: "Shradha Sheet: Heaps — Merge K Sorted Arrays, Top K Frequent Elements", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:    { label: "IndiaBix: 15 mixed quant questions — timed 20 minutes", link: INDIABIX, verify: 'aptitude' },
    build:  { label: "Build: GET /api/hello endpoint running locally. Test in Postman. Show 200 status." },
  },
  {
    label: "Spring Boot CRUD + PostgreSQL",
    spring: { label: "Telusko: Spring Data JPA, @Entity, @Repository, PostgreSQL connection, full CRUD", link: SPRING_TELUSKO, verify: 'spring' },
    dsa:    { label: "NeetCode: Stack problems — Evaluate RPN, Generate Parentheses, Car Fleet", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:  { label: "Shradha Sheet: Stack — Next Greater II, Stock Span, Max Histogram Area", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:    { label: "IndiaBix Logical Reasoning: 15 questions — Statement Assumption", link: INDIABIX, verify: 'aptitude' },
    build:  { label: "Build: Full CRUD API for 'User' entity — POST/GET/PUT/DELETE all working in Postman" },
  },
  {
    label: "Spring Security + JWT Authentication",
    spring: { label: "Amigoscode: Spring Security + JWT — auth filter, token generation, protected routes", link: SPRING_AMIGOSCODE, verify: 'spring' },
    dsa:    { label: "NeetCode: Trees — Subtree of Tree, Count Good Nodes, Validate BST", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:  { label: "Shradha Sheet: BST — Recover BST, Serialize/Deserialize, Largest BST in BT", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:    { label: "IndiaBix: 15 verbal questions — Critical Reasoning", link: INDIABIX, verify: 'aptitude' },
    build:  { label: "Build: Add login + signup. /api/auth/register and /api/auth/login returning JWT." },
  },
  {
    label: "React Fundamentals (Hitesh Choudhary)",
    react:  { label: "Hitesh Choudhary React: components, props, useState, useEffect — code every example yourself", link: REACT_HITESH, verify: 'react' },
    dsa:    { label: "NeetCode: Heap — Kth Largest, Top K Frequent, Find Median Stream", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:  { label: "Shradha Sheet: Heaps — Kth Smallest, Median from Stream, Smallest Range in K Lists", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:    { label: "GeeksForGeeks OA mock: 30 questions — quant + logical", link: GEEKSFORGEEKS_OA, verify: 'aptitude' },
    build:  { label: "Build: React Todo app with useState — add, complete, delete todos. Style with basic CSS." },
  },
  {
    label: "Tailwind + Full Stack Connection",
    react:  { label: "Tailwind CSS crash course — utility classes, responsive, Flex/Grid", link: TAILWIND_LINK, verify: 'react' },
    dsa:    { label: "NeetCode: Backtracking — Subsets, Combination Sum, Permutations", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:  { label: "Shradha Sheet: Recursion — Combination Sum I, Palindrome Partitioning, N Queens", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:    { label: "IndiaBix: 15 mixed questions — quant + reasoning", link: INDIABIX, verify: 'aptitude' },
    comm:   { label: "ChetChat: Interview body language + articulation. Then explain a tech concept on camera 3 min.", link: COMMUNICATION_YT, verify: 'communication' },
    build:  { label: "Build: React + Tailwind frontend calling your Spring Boot API — display users from /api/users" },
  },
  {
    label: "Deployment + MongoDB",
    spring: { label: "MongoDB + Spring Data MongoDB — connect, create MongoRepository, CRUD with NoSQL", link: "https://www.youtube.com/watch?v=ssj0CGxv60k", verify: 'spring' },
    dsa:    { label: "NeetCode: Graphs — Number of Islands, Clone Graph, Pacific Atlantic Water Flow", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet:  { label: "Shradha Sheet: Graph — Flood Fill, BFS, DFS, Detect Cycle undirected", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:    { label: "IndiaBix: 15 questions + 1 mock GD topic — note 3 points you'd make", link: INDIABIX, verify: 'aptitude' },
    comm:   { label: "Speeko: 10-min session. Focus on eliminating 'umm' and 'like'.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
    build:  { label: "DEPLOY: Backend to Render.com + Frontend to Vercel. Get live URLs. Non-negotiable." },
  },
]

const P3_WEEKS = [
  {
    label: "Python + AI/ML Intro + DP Begins",
    aiml:  { label: "Hitesh Choudhary Python: Basics crash course — variables, loops, functions, lists", link: PYTHON_HITESH, verify: 'aiml' },
    dsa:   { label: "NeetCode DP: Climbing Stairs, House Robber, Min Cost Climbing Stairs", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: DP — Buy & Sell Stocks I, 0-1 Knapsack, Target Sum Subset", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "IndiaBix: 15 quant questions — Data Interpretation", link: INDIABIX, verify: 'aptitude' },
    build: { label: "Build: Python script — read CSV with pandas, print basic stats (mean, max, min, distribution)" },
  },
  {
    label: "AI/ML: scikit-learn + Classification",
    aiml:  { label: "CampusX ML: Supervised Learning — Linear + Logistic Regression, implement in scikit-learn", link: AIML_CAMPUSX, verify: 'aiml' },
    dsa:   { label: "NeetCode DP: Longest Common Subsequence, Coin Change, Longest Increasing Subsequence", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: DP — LCS, Coin Change, Edit Distance, LIS", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "GeeksForGeeks OA mock: 30 questions — full simulation", link: GEEKSFORGEEKS_OA, verify: 'aptitude' },
    comm:  { label: "ChetChat: Group Discussion technique. Then practice: speak 2 min on 'AI in hiring'.", link: COMMUNICATION_YT, verify: 'communication' },
    build: { label: "Build: Iris flower classifier — logistic regression, evaluate accuracy, confusion matrix" },
  },
  {
    label: "AI/ML Project + Graph Algorithms",
    aiml:  { label: "CampusX: Decision Trees + Random Forest — tune hyperparameters, cross validation", link: AIML_CAMPUSX, verify: 'aiml' },
    dsa:   { label: "NeetCode Graph: Course Schedule (topological sort), Pacific Atlantic, Redundant Connection", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Graph — Detect cycle directed, Topological Sort DFS + BFS", link: SHRADHA_SHEET, verify: 'leetcode' },
    spring:{ label: "Add second feature to Spring Boot project — add a new entity/relationship/endpoint", link: CODING_SHUTTLE, verify: 'spring' },
    apt:   { label: "IndiaBix: 15 verbal questions + 5 mathematical puzzles", link: INDIABIX, verify: 'aptitude' },
    build: { label: "Build: Heart disease RF model — deployed with a simple Flask API endpoint" },
  },
  {
    label: "System Design Fundamentals",
    sysd:  { label: "Gaurav Sen: Consistent Hashing + Load Balancers + CAP Theorem (3 videos, take notes)", link: SYSTEM_DESIGN_YT, verify: 'java' },
    dsa:   { label: "NeetCode Graph: Number of Provinces, Rotting Oranges, Walls and Gates", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Graph — Prim's MST, Bellman Ford, Floyd Warshall", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "IndiaBix: 20 questions — timed — Quant + Verbal mixed", link: INDIABIX, verify: 'aptitude' },
    comm:  { label: "Speeko: 15-min session. Record yourself answering 'Tell me about yourself' — 90 seconds. Play back.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
    build: { label: "System Design: Write 1-page design for URL Shortener — DB schema, API, scale considerations" },
  },
  {
    label: "Full Stack Project #2 Build Week",
    spring:{ label: "Build Project 2 Backend: E-commerce REST API or Expense Tracker — JWT + PostgreSQL", link: CODING_SHUTTLE, verify: 'spring' },
    dsa:   { label: "NeetCode DP Hard: Word Break, Coin Change 2, Partition Equal Subset Sum", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: DP — Wildcard Matching, Palindrome Partitioning, Edit Distance hard", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "IndiaBix: 15 questions — your weakest section", link: INDIABIX, verify: 'aptitude' },
    build: { label: "Build React frontend for Project 2 — tables, forms, auth flow, Tailwind styled, connected to API" },
  },
  {
    label: "Greedy + Trie + AI/ML Deployed",
    aiml:  { label: "CampusX: K-Means Clustering + PCA — unsupervised learning basics", link: AIML_CAMPUSX, verify: 'aiml' },
    dsa:   { label: "NeetCode: Greedy — Jump Game, Gas Station, Hand of Straights. Trie — Implement + Word Search II", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Greedy — Fractional Knapsack, Activity Selection, Job Scheduling. Trie — all 5.", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "GeeksForGeeks OA: 30 questions full mock — 60 minutes", link: GEEKSFORGEEKS_OA, verify: 'aptitude' },
    comm:  { label: "ChetChat: Technical interview communication — structuring answers. Explain a project in 2 min.", link: COMMUNICATION_YT, verify: 'communication' },
    build: { label: "Deploy ML project: Flask API + React frontend showing predictions. GitHub + live URL." },
  },
  {
    label: "System Design Deep + Hard Graphs",
    sysd:  { label: "Gaurav Sen: Design Pastebin + Rate Limiter — study approach, write your own notes", link: SYSTEM_DESIGN_YT, verify: 'java' },
    dsa:   { label: "NeetCode: Advanced Graphs — Dijkstra, Kruskal's MST, Swim in Rising Water", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Graph — Dijkstra, Kruskal, Kosaraju, Alien Dictionary, Cheapest Flights K Stops", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "IndiaBix: 20 mixed + 5 GK/current affairs questions", link: INDIABIX, verify: 'aptitude' },
    build: { label: "Project 2: polish + complete README + deploy both frontend + backend. Live URL must exist." },
  },
  {
    label: "Blind 75 Gaps + AMCAT Simulation",
    dsa:   { label: "NeetCode: Fill top 10 weakest problems from your profile — check neetcode.io/profile", link: NEETCODE_PROFILE, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Identify and solve any skipped problems — revisit all topics", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "AMCAT mock test — full 90 minutes — no breaks. Treat it as real.", link: "https://www.myamcat.com/", verify: 'aptitude' },
    comm:  { label: "Practice STAR: 'Describe a challenge you overcame' — write and speak 2 min version.", link: COMMUNICATION_YT, verify: 'communication' },
    build: { label: "System design notes: Twitter feed — components, DB, caching — 1 A4 page." },
  },
]

const P4_WEEKS = [
  {
    label: "AWS EC2 + Hard DP",
    cloud: { label: "AWS Free Tier: Create EC2, SSH in, deploy your Spring Boot JAR on EC2", link: AWS_FREE, verify: 'spring' },
    dsa:   { label: "NeetCode Hard DP: Burst Balloons, Regular Expression Matching, Interleaving String", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: DP — Egg Dropping, MCM, Longest Bitonic, Rod Cutting", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "IndiaBix: 20 questions — all sections mixed", link: INDIABIX, verify: 'aptitude' },
    comm:  { label: "Speeko: 20-min session. Topic: 'Why should we hire you?' — 90-second answer recorded.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
  },
  {
    label: "AWS S3 + Company OA Patterns",
    cloud: { label: "AWS: S3 bucket — configure CORS, upload from Spring Boot, generate pre-signed download URLs", link: AWS_FREE, verify: 'spring' },
    dsa:   { label: "LeetCode JPMC tagged: 3 problems from their bank — filter by J.P. Morgan", link: "https://leetcode.com/company/jpmorgan/", verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Finish any remaining DP problems from the sheet", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "GeeksForGeeks OA mock: JPMC-style 60 min assessment simulation", link: GEEKSFORGEEKS_OA, verify: 'aptitude' },
    build: { label: "Add file upload to Project 1 or 2 — Spring Boot + S3 integration working and deployed" },
  },
  {
    label: "Mock Interviews Begin + Interval Problems",
    dsa:   { label: "NeetCode: Intervals — Merge Intervals, Non-Overlapping, Meeting Rooms II", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: revisit 2 hardest unsolved from each category you struggled", link: SHRADHA_SHEET, verify: 'leetcode' },
    mock:  { label: "Pramp: Book first 45-min live coding mock session. Non-negotiable.", link: PRAMP, verify: 'leetcode' },
    apt:   { label: "IndiaBix: 20 questions — focus on verbal + critical reasoning", link: INDIABIX, verify: 'aptitude' },
    comm:  { label: "ChetChat: HR round strategy + common mistakes. Practice 'Why JPMC?' — 90 seconds.", link: COMMUNICATION_YT, verify: 'communication' },
  },
  {
    label: "System Design: Practice Full Answers",
    sysd:  { label: "Gaurav Sen: Design Twitter Feed + Design Uber + Design WhatsApp — watch and write your version", link: SYSTEM_DESIGN_YT, verify: 'java' },
    dsa:   { label: "LeetCode PayPal tagged: 3 problems from their bank", link: "https://leetcode.com/company/paypal/", verify: 'leetcode' },
    sheet: { label: "Shradha Sheet: Trie complete — implement, word break, phone directory, longest string prefix", link: SHRADHA_SHEET, verify: 'leetcode' },
    apt:   { label: "AMCAT mock #2 — 90 minutes — simulate exam day", link: "https://www.myamcat.com/", verify: 'aptitude' },
    build: { label: "Resume: write all 3 project bullets in 'Built X using Y that achieved Z' format. Live URLs on each." },
  },
  {
    label: "Apply Wave 1 + HR Round Prep",
    dsa:   { label: "NeetCode: Hard review — pick your 5 lowest-solved categories and drill", link: NEETCODE_PROFILE, verify: 'leetcode' },
    hr:    { label: "STAR method: Write 8 behavioural answers — challenges, teamwork, failure, leadership, impact", verify: 'communication' },
    apt:   { label: "IndiaBix: 20 questions + 1 mock GD — note your speaking time and key points", link: INDIABIX, verify: 'aptitude' },
    comm:  { label: "Record full mock HR round on camera: 5 questions, 90 seconds each. Review + rate yourself.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
    build: { label: "Apply to 5 companies: JPMC, PayPal, Razorpay, Zepto, Flipkart — LinkedIn + company sites" },
  },
  {
    label: "Project 3: Full Stack + AI + React Advanced",
    react:  { label: "React advanced: useContext, custom hooks, React Query, code splitting", link: REACT_HITESH, verify: 'react' },
    dsa:    { label: "NeetCode: 1 problem/day — maintain streak. Focus on Hard.", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    aiml:   { label: "Build Project 3: Spring Boot + React + ML integration (e.g. Sentiment Analyzer API)", link: AIML_CAMPUSX, verify: 'aiml' },
    apt:    { label: "GeeksForGeeks OA: 30-question simulation", link: GEEKSFORGEEKS_OA, verify: 'aptitude' },
    build:  { label: "Apply 5 more companies + follow up on previous applications" },
  },
  {
    label: "Mock Interview Week + LeetCode Hard",
    dsa:   { label: "LeetCode: 1 Hard/day — company tagged (JPMC/PayPal/Goldman Sachs filter)", link: "https://leetcode.com/company/jpmorgan/", verify: 'leetcode' },
    mock:  { label: "Pramp: 2 mock sessions this week — full 45-min technical rounds", link: PRAMP, verify: 'leetcode' },
    sysd:  { label: "System design practice: URL shortener + Twitter feed aloud in 45 min each", link: SYSTEM_DESIGN_YT, verify: 'java' },
    apt:   { label: "IndiaBix: 20 questions + review past mocks for weak areas", link: INDIABIX, verify: 'aptitude' },
    comm:  { label: "Full mock interview on camera — technical + HR, 60 minutes. Play back, find 3 improvements.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
  },
  {
    label: "Portfolio Polish + LinkedIn + Apply Wave 2",
    dsa:   { label: "NeetCode: 1 problem/day — maintain streak.", link: NEETCODE_ROADMAP, verify: 'leetcode' },
    build: { label: "All 3 projects: every endpoint works, every live URL is up, READMEs complete" },
    apt:   { label: "AMCAT mock #3 — final full simulation", link: "https://www.myamcat.com/", verify: 'aptitude' },
    comm:  { label: "LinkedIn: complete profile — 500+ connections target, headline shows your stack", link: "https://linkedin.com", verify: 'communication' },
    build2:{ label: "Apply 10 more: Stripe, Atlassian, PhonePe, Swiggy, CRED, Goldman Sachs, DE Shaw, Airbnb" },
  },
  {
    label: "Final Mock Rounds + Applications",
    dsa:   { label: "LeetCode: 1 Hard/day. Random tag — no cherry picking.", link: LEETCODE_DAILY, verify: 'leetcode' },
    mock:  { label: "Pramp: 1 full mock + 1 peer practice = 2 sessions. Go in prepared.", link: PRAMP, verify: 'leetcode' },
    hr:    { label: "Finalize all STAR answers. Practice 'Why this company?' for your top 5 targets.", verify: 'communication' },
    apt:   { label: "IndiaBix: 20 questions — verbal heavy. JPMC verbal sections are underestimated.", link: INDIABIX, verify: 'aptitude' },
    build: { label: "Apply 10 more — wave 3. Total should be 30+ by end of this week." },
  },
]

const P5_WEEKS = [
  {
    label: "Portfolio Audit + Resume Lock",
    build:  { label: "Every project: live URL, complete README, works on fresh machine test. Fix anything broken." },
    resume: { label: "Resume: 1 page max. Each bullet: verb + tech + impact. Peer review from someone in CS." },
    dsa:    { label: "1 LeetCode Medium/day — keep the engine warm", link: LEETCODE_DAILY, verify: 'leetcode' },
    apply:  { label: "Applications: 5 companies + follow up on all pending with a brief email" },
  },
  {
    label: "Resume Finalization + January Plan",
    build: { label: "GitHub profile: pin your 3 best projects. Fix any broken demo links." },
    dsa:   { label: "NeetCode: re-solve your 5 hardest solved problems. No hints. Time yourself.", link: NEETCODE_PROFILE, verify: 'leetcode' },
    apply: { label: "Apply 10 more companies. Total applications must be 50+ before December ends." },
    comm:  { label: "Final mock: full interview simulation — technical + system design + HR. Record it.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
  },
]

const P6_WEEKS = [
  {
    label: "Hard DSA Daily + System Design Drill",
    dsa:  { label: "2 Hard LeetCode/day — company tagged JPMC/PayPal/GS", link: "https://leetcode.com/company/jpmorgan/", verify: 'leetcode' },
    sysd: { label: "System design: 45-min full verbal answer for one classic — speak it aloud, time it", link: SYSTEM_DESIGN_YT, verify: 'java' },
    mock: { label: "Pramp: daily if possible, minimum every 2 days", link: PRAMP, verify: 'leetcode' },
    hr:   { label: "STAR method — 10 behavioural questions written and rehearsed", verify: 'communication' },
  },
  {
    label: "JPMC/PayPal OA Pattern Bank",
    dsa:  { label: "JPMC-specific OA prep: arrays + strings + greedy patterns from their bank", link: "https://leetcode.com/company/jpmorgan/", verify: 'leetcode' },
    sysd: { label: "Design URL shortener + Twitter feed — alternate days, 45-min verbal answer", link: SYSTEM_DESIGN_YT, verify: 'java' },
    mock: { label: "Full mock interview day — technical + system design + HR back to back", link: PRAMP, verify: 'leetcode' },
    comm: { label: "Record yourself. Watch back. Fix 1 thing each session.", link: COMMUNICATION_PLATFORM, verify: 'communication' },
  },
  {
    label: "Full Interview Simulation Week",
    dsa:  { label: "Simulate OA: 2 hours, 3 problems, no hints. Treat it as the real thing.", link: LEETCODE_DAILY, verify: 'leetcode' },
    mock: { label: "Pramp: 2 sessions + 1 peer session = 3 mock rounds total this week", link: PRAMP, verify: 'leetcode' },
    hr:   { label: "Full HR rehearsal — 10 questions, 90 sec each, on camera. You're ready.", verify: 'communication' },
    sysd: { label: "Final system design run — your hardest design question. Nail it.", link: SYSTEM_DESIGN_YT, verify: 'java' },
  },
  {
    label: "Sharpen Weak Spots Only — Final Week",
    dsa:  { label: "Only your weakest 5 LC patterns. Do not start anything new. Sharpen, not explore.", link: NEETCODE_PROFILE, verify: 'leetcode' },
    mock: { label: "Pramp: final session. Focus on communication, not just code.", link: PRAMP, verify: 'leetcode' },
    hr:   { label: "Final 'Why JPMC/PayPal?' — perfect 2-min answer. Sleep 8 hours. Trust the 8 months.", verify: 'communication' },
  },
]

export const PHASE_DETAILS = [
  {
    id: 1,
    weeks: [
      { label: "Week 1 (Apr 14–20)", topics: "Coding Shuttle: Java syntax, variables, loops, methods", lc: "5 problems", build: "Calculator CLI", sheet: "Arrays Easy", apt: "% + Ratios", comm: "—" },
      { label: "Week 2 (Apr 21–27)", topics: "Coding Shuttle: OOP — Inheritance, Polymorphism", lc: "15 total", build: "Bank Account OOP", sheet: "Stock Buy/Sell, Kadane's", apt: "Time & Work", comm: "—" },
      { label: "Week 3 (Apr 28–May 4)", topics: "Coding Shuttle: Collections, HashMap, Generics", lc: "25 total", build: "Grade Manager CLI", sheet: "Subarray Sum K, Sliding Window", apt: "Profit & Loss", comm: "—" },
      { label: "Week 4 (May 5–11)", topics: "Coding Shuttle: Exceptions, File I/O, Streams", lc: "35 total", build: "Custom LinkedList Java", sheet: "LL: Reverse, Middle, Cycle", apt: "Permutations", comm: "—" },
      { label: "Week 5 (May 12–18)", topics: "Coding Shuttle: Multithreading, JDBC intro", lc: "45 total", build: "Expression Evaluator CLI", sheet: "Stack: Parens, NGE, Min Stack", apt: "Logical Reasoning", comm: "—" },
      { label: "Week 6 (May 19–25)", topics: "Coding Shuttle: Design Patterns — Singleton, Factory", lc: "55 total", build: "BinaryTree Java impl", sheet: "Trees: All traversals, Height", apt: "Verbal basics", comm: "ChetChat intro + 5min talk" },
      { label: "Week 7 (May 26–Jun 1)", topics: "Coding Shuttle: Review + GitHub deploy", lc: "65 total", build: "GitHub deploy + README", sheet: "BST: Validate, Kth, LCA", apt: "GFG OA mock 60min", comm: "Speeko 5min/day" },
    ],
    rules: ["1 video → close tab → code immediately. Non-negotiable.", "25-min timer on every LeetCode. No hints in first 25.", "Push to GitHub every single day.", "Sunday = re-solve 3 hardest problems from the week from memory."],
    checkpoints: "65 LC + 1 deployed Java project on GitHub + NeetCode streak started",
    resources: [{ label: "Coding Shuttle", link: CODING_SHUTTLE }, { label: "NeetCode Roadmap", link: NEETCODE_ROADMAP }, { label: "Shradha Sheet", link: SHRADHA_SHEET }, { label: "IndiaBix", link: INDIABIX }]
  },
  {
    id: 2,
    weeks: [
      { label: "Jun 2–8", topics: "Spring Boot Initializr, REST controller, @GetMapping (Telusko)", lc: "70 total", build: "GET /hello in Postman — 200", sheet: "Heaps: Merge K, Top K", apt: "Mixed quant 15q", comm: "—" },
      { label: "Jun 9–15 (Break Jun 14)", topics: "Spring Data JPA, @Entity, PostgreSQL, full CRUD", lc: "78 total", build: "CRUD API: User entity", sheet: "Stack: NGE II, Stock Span", apt: "Logical 15q", comm: "—" },
      { label: "Jun 16–22", topics: "Spring Security + JWT — auth filter, token generation", lc: "86 total", build: "Login/signup → JWT token", sheet: "BST: Recover, Serialize, Largest", apt: "Critical Reasoning 15q", comm: "—" },
      { label: "Jun 23–29 (Break Jun 28)", topics: "React: components, props, useState, useEffect (Hitesh)", lc: "94 total", build: "React Todo with useState", sheet: "Heaps: Kth Small, Median", apt: "GFG OA 30q", comm: "—" },
      { label: "Jun 30–Jul 6", topics: "Tailwind CSS + React-SpringBoot CORS connection", lc: "102 total", build: "React+Tailwind calls your API", sheet: "Recursion: Comb Sum, N Queens", apt: "Mixed 15q", comm: "ChetChat body language + 3min talk" },
      { label: "Jul 7–13 (Break Jul 12)", topics: "MongoDB + Spring Data Mongo, NoSQL endpoints", lc: "110 total", build: "DEPLOY: Render + Vercel live URLs", sheet: "Graph: Flood Fill, BFS, DFS", apt: "15q + mock GD topic", comm: "Speeko 10min — filler words" },
    ],
    rules: ["College started. 4-5 hrs weekdays, 7-8 Sunday.", "Spring Boot = enterprise architecture. JPMC runs it in prod.", "Every project gets a live URL before it goes on resume.", "No new tech until current one is deployed."],
    checkpoints: "110 LC + 1 deployed Spring Boot + React app with JWT auth (Vercel + Render)",
    resources: [{ label: "Telusko Spring Boot", link: SPRING_TELUSKO }, { label: "Amigoscode Spring Security", link: SPRING_AMIGOSCODE }, { label: "Hitesh React", link: REACT_HITESH }, { label: "Tailwind Course", link: TAILWIND_LINK }]
  },
  {
    id: 3,
    weeks: [
      { label: "Jul 14–20", topics: "Python basics (Hitesh) + DP: Climbing Stairs, House Robber", lc: "118 total", build: "Pandas CSV stats script", sheet: "DP: Knapsack, Target Subset", apt: "Data Interp 15q", comm: "—" },
      { label: "Jul 21–27 (Break Jul 26)", topics: "CampusX: scikit-learn Logistic Regression, Classification", lc: "128 total", build: "Iris Classifier + metrics", sheet: "DP: LCS, Coin Change, LIS", apt: "GFG OA 30q", comm: "ChetChat GD + speak 2min AI topic" },
      { label: "Jul 28–Aug 3", topics: "CampusX: Decision Trees + Random Forest + cross-validation", lc: "138 total", build: "Heart disease RF model + Flask API", sheet: "Graph: Cycle directed, Topo Sort", apt: "Mixed 15q + puzzles", comm: "—" },
      { label: "Aug 4–10 (Break Aug 9)", topics: "Gaurav Sen: Consistent Hashing + Load Balancer + CAP theorem", lc: "146 total", build: "System Design: URL Shortener 1-page doc", sheet: "Graph: Prim's, Bellman, Floyd", apt: "Mixed 20q timed", comm: "'Tell me about yourself' 90sec recorded" },
      { label: "Aug 11–17", topics: "Build Project 2: E-commerce or Expense Tracker API", lc: "154 total", build: "Project 2 backend deployed", sheet: "DP Hard: Wildcard, Palindrome Part", apt: "Weakest section 15q", comm: "—" },
      { label: "Aug 18–24 (Break Aug 23)", topics: "CampusX: K-Means + PCA + deploy Flask API", lc: "162 total", build: "ML project: Flask + React deployed", sheet: "Greedy + Trie — all from Shradha", apt: "GFG OA 30q", comm: "Record project explanation 2min" },
      { label: "Aug 25–31", topics: "Gaurav Sen: Pastebin + Rate Limiter design", lc: "170 total", build: "Project 2 polish + README + live URL", sheet: "Graph: Dijkstra, Kruskal, Alien Dict", apt: "Mixed 20q", comm: "—" },
      { label: "Sep 1–7 (Break Sep 6)", topics: "NeetCode: fill weakest categories (check your profile)", lc: "178 total", build: "System Design: Twitter Feed 1-page doc", sheet: "Remaining skipped sheet problems", apt: "AMCAT mock #1 — 90 min full", comm: "STAR: 'Describe challenge' written + 2min spoken" },
    ],
    rules: ["Python = resume breadth only. Don't go deep.", "AI/ML = 1 deployed project minimum. Must have live URL.", "Communication practice starts here. Record yourself. Be brutal.", "AMCAT mocks from Sep — treat as real. Zero excuses."],
    checkpoints: "178 LC + 2 deployed projects (Spring Boot + ML) + Blind 75 ~80% done",
    resources: [{ label: "Hitesh Python", link: PYTHON_HITESH }, { label: "CampusX AI/ML", link: AIML_CAMPUSX }, { label: "Gaurav Sen System Design", link: SYSTEM_DESIGN_YT }, { label: "Shradha Sheet", link: SHRADHA_SHEET }]
  },
  {
    id: 4,
    weeks: [
      { label: "Sep 8–14", topics: "AWS EC2: create instance, SSH, deploy Spring Boot JAR", lc: "186 total", build: "API live on EC2 free tier", sheet: "DP Hard: MCM, Egg Drop, Bitonic", apt: "Mixed 20q", comm: "'Why hire you?' 90sec recorded" },
      { label: "Sep 15–21 (Break Sep 20)", topics: "AWS S3: upload from Spring Boot, pre-signed URLs", lc: "192 total", build: "File upload deployed in project", sheet: "DP: remaining + weak review", apt: "JPMC-style OA 60min", comm: "—" },
      { label: "Sep 22–28", topics: "Pramp mock interviews — book first session", lc: "198 total", build: "Intervals: Merge, Non-Overlap, Meeting Rooms", sheet: "Hardest unsolved x2 each category", apt: "Mixed 20q verbal heavy", comm: "ChetChat HR strategy + 'Why JPMC?' rehearsed" },
      { label: "Oct 5–11 (Break Oct 4)", topics: "Gaurav Sen: Twitter + Uber + WhatsApp design", lc: "204 total", build: "Resume: all 3 bullets in B/U/Y format", sheet: "Trie: complete all 5 problems", apt: "AMCAT mock #2 — 90 min", comm: "—" },
      { label: "Oct 12–18 (Break Oct 18)", topics: "Apply Wave 1: JPMC, PayPal, Razorpay, Zepto, Flipkart", lc: "210 total", build: "LinkedIn: 500+ connections push", sheet: "Hard company-tagged LC", apt: "Mixed 20q", comm: "Mock HR round 5q on camera" },
      { label: "Oct 19–25", topics: "React advanced: Context, custom hooks, React Query", lc: "216 total", build: "Project 3: Full Stack + ML integrated deployed", sheet: "NeetCode: 5 weakest patterns", apt: "GFG OA 30q", comm: "—" },
      { label: "Oct 26–Nov 1 (Break Nov 1)", topics: "Pramp: 2 mock sessions this week", lc: "222 total", build: "SD verbal: URL + Twitter — 45 min each", sheet: "LC Hard daily — company tagged", apt: "IndiaBix 20q", comm: "Full 60min mock on camera" },
      { label: "Nov 2–9", topics: "Portfolio polish + GitHub cleanup + README audit", lc: "226 total", build: "All 3 projects: live URLs confirmed", sheet: "LC Hard daily", apt: "AMCAT mock #3 final", comm: "LinkedIn done + apply 10 more" },
      { label: "Nov 10–16 (Break Nov 15)", topics: "Pramp final session + HR finalization", lc: "230 total", build: "Apply 10 more — 30+ total", sheet: "Review weakest 5 LC patterns", apt: "IndiaBix 20q verbal", comm: "10 STAR answers written + 5 rehearsed" },
    ],
    rules: ["AWS on resume ONLY if deployed and working. No fake bullets.", "Pramp mock interviews are non-negotiable — you need reps.", "Apply 3-5 companies per week minimum. Consistent, not bursty.", "JPMC runs Java-heavy OA. Your Spring Boot knowledge = competitive edge."],
    checkpoints: "230+ LC + 3 deployed projects + 30+ applications + 6+ mock interviews done",
    resources: [{ label: "AWS Free Tier", link: AWS_FREE }, { label: "Pramp", link: PRAMP }, { label: "LeetCode JPMC", link: "https://leetcode.com/company/jpmorgan/" }, { label: "Gaurav Sen", link: SYSTEM_DESIGN_YT }]
  },
  {
    id: 5,
    weeks: [
      { label: "Nov 17–29 (Break Nov 29)", topics: "Portfolio audit: all projects live + README complete", lc: "233 total", build: "3 live URLs on resume confirmed", sheet: "LC Medium/day", apt: "5 companies applied + followups", comm: "Final mock: technical + HR + SD recorded" },
      { label: "Nov 30–Dec 14 (Break Dec 13)", topics: "Resume lock + January interview plan written", lc: "236 total", build: "GitHub: 3 best projects pinned", sheet: "LC Medium/day", apt: "50+ total apps by Dec 14", comm: "10 STAR answers finalized" },
      { label: "Dec 15–25 (Break Dec 25)", topics: "No new technology. Sharpen only. Trust the process.", lc: "239 total", build: "January plan doc: companies + dates", sheet: "LC Hard x2/day", apt: "Applications ongoing", comm: "Mock interview every 3 days" },
      { label: "Dec 26–31", topics: "Final week. You're ready. Sleep 8 hours.", lc: "241 total", build: "January interview plan locked", sheet: "5 weakest — nail them", apt: "Applications ongoing", comm: "Rest. Prepare mentally." },
    ],
    rules: ["No new technology in Phase 5. Lock what you have.", "If a project doesn't have a live URL, remove it from resume.", "January = interviews only. Building phase closed."],
    checkpoints: "Resume final · 3 live URLs · 50+ applications sent · January plan ready",
    resources: [{ label: "NeetCode Profile", link: NEETCODE_PROFILE }, { label: "LeetCode Profile", link: LEETCODE_PROFILE }, { label: "Speeko", link: COMMUNICATION_PLATFORM }]
  },
  {
    id: 6,
    weeks: [
      { label: "Jan Week 1", topics: "2 Hard LC/day + System Design 45min verbal drill", lc: "250 total", build: "Pramp daily", sheet: "Hard daily", apt: "Company OA patterns", comm: "10 STAR rehearsed" },
      { label: "Jan Week 2", topics: "JPMC/PayPal OA pattern bank — arrays, strings, greedy", lc: "258 total", build: "Pramp every 2 days", sheet: "Hard daily", apt: "Full mock day simulation", comm: "Record + review daily" },
      { label: "Jan Week 3", topics: "Full simulation: technical + system design + HR back to back", lc: "265 total", build: "3 full mock rounds", sheet: "Hard daily", apt: "OA simulation", comm: "Final mock — judge objectively" },
      { label: "Jan Week 4", topics: "Sharpen weakest 5 only. No new topics. Trust the 8 months.", lc: "270 total", build: "Final Pramp session", sheet: "5 weakest patterns", apt: "You're ready", comm: "Sleep 8 hrs. Trust the process." },
    ],
    rules: ["This phase is drill, not learn. New topics WILL hurt you.", "Mock interviews every 2 days minimum.", "Sleep 8 hours. DP under pressure needs a rested brain.", "Trust the 8 months. You built this from nothing."],
    checkpoints: "JPMC / PayPal / Top MNC internship offer. That's the ONLY metric.",
    resources: [{ label: "LeetCode JPMC", link: "https://leetcode.com/company/jpmorgan/" }, { label: "LeetCode PayPal", link: "https://leetcode.com/company/paypal/" }, { label: "Pramp", link: PRAMP }, { label: "Gaurav Sen", link: SYSTEM_DESIGN_YT }]
  },
]

export function getScheduleForDate(dateStr) {
  const date = toDate(dateStr)
  const weekend = isWeekend(dateStr)

  if (BREAK_DAYS.has(dateStr)) {
    return {
      phase: 0, phaseColor: "#6bcb77",
      title: "🌿 REST DAY — MANDATORY",
      subtitle: "No LeetCode. No coding. No guilt. Recovery is part of the plan.",
      hoursAvailable: "0 hrs — full rest",
      isBreak: true,
      tasks: [
        makeTask('rest1', "Go outside. Touch grass. 2 hours minimum away from screens.", 'rest'),
        makeTask('rest2', "Watch a movie, play a game, call a friend. Zero tech guilt.", 'rest'),
        makeTask('rest3', "Sleep by 10 PM. Tomorrow you come back 20% sharper. This is science.", 'rest'),
      ]
    }
  }

  const phase1Start = toDate('2026-04-14'), phase1End = toDate('2026-06-01')
  const phase2Start = toDate('2026-06-02'), phase2End = toDate('2026-07-13')
  const phase3Start = toDate('2026-07-14'), phase3End = toDate('2026-09-07')
  const phase4Start = toDate('2026-09-08'), phase4End = toDate('2026-11-16')
  const phase5Start = toDate('2026-11-17'), phase5End = toDate('2026-12-31')
  const phase6Start = toDate('2027-01-01')

  if (date >= phase1Start && date <= phase1End) {
    const dayNum = Math.floor((date - phase1Start) / (24*60*60*1000))
    const weekIdx = Math.min(Math.floor(dayNum / 7), P1_WEEKS.length - 1)
    const w = P1_WEEKS[weekIdx]
    if (isSunday(dateStr)) {
      return {
        phase: 1, phaseColor: "#f97316",
        title: "☀️ SUNDAY REVIEW", subtitle: "Re-solve, not rewatch. Active recall only.",
        hoursAvailable: "6-8 hrs",
        tasks: [
          makeTask('sun1', w.sun.label, 'leetcode', NEETCODE_ROADMAP, 'leetcode'),
          makeTask('sun2', "NeetCode profile: check your weakest section — solve 2 unsolved problems there", 'leetcode', NEETCODE_PROFILE, 'leetcode'),
          makeTask('sun3', "Shradha Sheet: 1 problem you skipped or struggled with this week", 'sheet', SHRADHA_SHEET, 'leetcode'),
          makeTask('sun4', "Aptitude: 20 questions — this week's topic", 'aptitude', INDIABIX, 'aptitude'),
          makeTask('sun5', "Write 10 lines in notebook: what did you learn this week? No computer.", 'recall'),
          makeTask('sun6', "Push EVERYTHING to GitHub. Empty repo = wasted day.", 'build'),
        ]
      }
    }
    const tasks = [
      makeTask('lec1', w.java.label, 'lecture', w.java.link, w.java.verify),
      makeTask('dsa1', w.dsa.label, 'leetcode', w.dsa.link, w.dsa.verify, NEETCODE_PROFILE),
      makeTask('sheet1', w.sheet.label, 'sheet', w.sheet.link, w.sheet.verify),
      makeTask('apt1', w.apt.label, 'aptitude', w.apt.link, w.apt.verify),
      makeTask('build1', w.build.label, 'build'),
    ]
    if (w.comm && (dayNum % 7 >= 4)) tasks.push(makeTask('comm1', w.comm.label, 'communication', w.comm.link, w.comm.verify))
    return { phase: 1, phaseColor: "#f97316", title: `🔥 SURVIVAL SPRINT — Week ${weekIdx + 1}`, subtitle: `${w.label} · Full day. No wasted hours.`, hoursAvailable: "10-12 hrs", tasks }
  }

  if (date >= phase2Start && date <= phase2End) {
    const dayNum = Math.floor((date - phase2Start) / (24*60*60*1000))
    const weekIdx = Math.min(Math.floor(dayNum / 7), P2_WEEKS.length - 1)
    const w = P2_WEEKS[weekIdx]
    const lec = w.react || w.spring
    const tasks = weekend ? [
      makeTask('lec1', lec.label, 'lecture', lec.link || SPRING_TELUSKO, 'spring'),
      makeTask('dsa1', w.dsa.label + " — 2 problems, 25-min timer each", 'leetcode', w.dsa.link, 'leetcode', NEETCODE_PROFILE),
      makeTask('sheet1', w.sheet.label, 'sheet', w.sheet.link, 'leetcode'),
      makeTask('build1', w.build.label, 'build'),
      makeTask('apt1', w.apt.label, 'aptitude', w.apt.link, 'aptitude'),
      ...(w.comm ? [makeTask('comm1', w.comm.label, 'communication', w.comm.link, 'communication')] : []),
    ] : [
      makeTask('lec1', lec.label, 'lecture', lec.link || SPRING_TELUSKO, 'spring'),
      makeTask('dsa1', w.dsa.label, 'leetcode', w.dsa.link, 'leetcode', NEETCODE_PROFILE),
      makeTask('build1', w.build.label, 'build'),
      makeTask('apt1', w.apt.label, 'aptitude', w.apt.link, 'aptitude'),
    ]
    return { phase: 2, phaseColor: "#6bcb77", title: weekend ? "⚡ WEEKEND BACKEND PUSH" : "⚡ BACKEND IGNITION", subtitle: `${w.label} · ${weekend ? '7-8 hrs' : '4-5 hrs'}`, hoursAvailable: weekend ? "7-8 hrs" : "4-5 hrs", tasks }
  }

  if (date >= phase3Start && date <= phase3End) {
    const dayNum = Math.floor((date - phase3Start) / (24*60*60*1000))
    const weekIdx = Math.min(Math.floor(dayNum / 7), P3_WEEKS.length - 1)
    const w = P3_WEEKS[weekIdx]
    const primaryLec = w.aiml || w.sysd || w.spring
    const tasks = weekend ? [
      makeTask('dsa1', w.dsa.label + " — 2 problems", 'leetcode', w.dsa.link, 'leetcode', NEETCODE_PROFILE),
      makeTask('sheet1', w.sheet.label, 'sheet', w.sheet.link, 'leetcode'),
      ...(primaryLec ? [makeTask('lec1', primaryLec.label, 'lecture', primaryLec.link, primaryLec.verify)] : []),
      ...(w.build ? [makeTask('build1', w.build.label, 'build')] : []),
      makeTask('apt1', "GeeksForGeeks OA: 30 questions — 60-min full simulation", 'aptitude', GEEKSFORGEEKS_OA, 'aptitude'),
      ...(w.comm ? [makeTask('comm1', w.comm.label, 'communication', w.comm.link, 'communication')] : []),
    ] : [
      makeTask('dsa1', w.dsa.label, 'leetcode', w.dsa.link, 'leetcode', NEETCODE_PROFILE),
      ...(primaryLec ? [makeTask('lec1', primaryLec.label, 'lecture', primaryLec.link, primaryLec.verify)] : []),
      makeTask('sheet1', w.sheet.label, 'sheet', w.sheet.link, 'leetcode'),
      makeTask('apt1', "IndiaBix: 15 questions — 20 minutes", 'aptitude', INDIABIX, 'aptitude'),
    ]
    return { phase: 3, phaseColor: "#c77dff", title: weekend ? "⚔️ WEEKEND FORGE MODE" : "⚔️ FULL STACK FORGE", subtitle: `${w.label} · ${weekend ? '7-8 hrs' : '4-5 hrs'}`, hoursAvailable: weekend ? "7-8 hrs" : "4-5 hrs", tasks }
  }

  if (date >= phase4Start && date <= phase4End) {
    const dayNum = Math.floor((date - phase4Start) / (24*60*60*1000))
    const weekIdx = Math.min(Math.floor(dayNum / 7), P4_WEEKS.length - 1)
    const w = P4_WEEKS[weekIdx]
    const primaryLec = w.cloud || w.sysd || w.react || w.spring
    const dsaLink = w.dsa ? w.dsa.link : "https://leetcode.com/company/jpmorgan/"
    const tasks = weekend ? [
      makeTask('dsa1', w.dsa ? w.dsa.label + " — 2 problems" : "LeetCode: 2 Hard company-tagged", 'leetcode', dsaLink, 'leetcode', NEETCODE_PROFILE),
      ...(primaryLec ? [makeTask('lec1', primaryLec.label, 'lecture', primaryLec.link, 'spring')] : []),
      ...(w.mock ? [makeTask('mock1', w.mock.label, 'build', w.mock.link, 'leetcode')] : []),
      makeTask('apt1', w.apt ? w.apt.label : "Full OA mock — 60 minutes", 'aptitude', w.apt ? w.apt.link : GEEKSFORGEEKS_OA, 'aptitude'),
      ...(w.build ? [makeTask('build1', w.build.label, 'build')] : []),
      ...(w.build2 ? [makeTask('apply1', w.build2.label, 'build')] : []),
      ...(w.comm ? [makeTask('comm1', w.comm.label, 'communication', w.comm.link, 'communication')] : []),
      ...(w.hr ? [makeTask('hr1', w.hr.label, 'communication', null, 'communication')] : []),
    ] : [
      makeTask('dsa1', w.dsa ? w.dsa.label : "LeetCode: 1 company-tagged problem", 'leetcode', dsaLink, 'leetcode', NEETCODE_PROFILE),
      ...(primaryLec ? [makeTask('lec1', primaryLec.label, 'lecture', primaryLec.link, 'spring')] : []),
      makeTask('apt1', w.apt ? w.apt.label : "IndiaBix: 15 questions", 'aptitude', w.apt ? w.apt.link : INDIABIX, 'aptitude'),
      ...(w.comm ? [makeTask('comm1', w.comm.label, 'communication', w.comm.link, 'communication')] : []),
    ]
    return { phase: 4, phaseColor: "#4d96ff", title: weekend ? "🎯 WEEKEND PLACEMENT DRILL" : "🎯 PLACEMENT MODE", subtitle: `${w.label} · This is what the last 6 months were for.`, hoursAvailable: weekend ? "7-8 hrs" : "4-5 hrs", tasks }
  }

  if (date >= phase5Start && date <= phase5End) {
    const dayNum = Math.floor((date - phase5Start) / (24*60*60*1000))
    const weekIdx = Math.min(Math.floor(dayNum / 7), P5_WEEKS.length - 1)
    const w = P5_WEEKS[weekIdx]
    return {
      phase: 5, phaseColor: "#ffd93d",
      title: "🚀 FINAL LOCK",
      subtitle: "No new tech. Lock what you built. January is interviews only.",
      hoursAvailable: weekend ? "7-8 hrs" : "4-5 hrs",
      tasks: [
        ...(w.build ? [makeTask('port1', w.build.label, 'build')] : [makeTask('port1', "Portfolio: every project has live URL + README. Check each one.", 'build')]),
        ...(w.resume ? [makeTask('resume1', w.resume.label, 'build')] : []),
        makeTask('dsa1', w.dsa ? w.dsa.label : "1 LeetCode Medium/day — engine warm", 'leetcode', w.dsa ? w.dsa.link : LEETCODE_DAILY, 'leetcode', NEETCODE_PROFILE),
        ...(w.apply ? [makeTask('apply1', w.apply.label, 'build')] : [makeTask('apply1', "Apply to 3 companies today + follow ups", 'build')]),
        ...(w.comm ? [makeTask('comm1', w.comm.label, 'communication', w.comm.link, 'communication')] : [makeTask('comm1', "HR practice: 'Why JPMC/PayPal?' — perfect 90-second answer.", 'communication', COMMUNICATION_PLATFORM, 'communication')]),
      ]
    }
  }

  const p6DayNum = Math.floor((date - phase6Start) / (24*60*60*1000))
  const p6WeekIdx = Math.min(Math.floor(p6DayNum / 7), P6_WEEKS.length - 1)
  const p6w = P6_WEEKS[p6WeekIdx]
  return {
    phase: 6, phaseColor: "#ff6b9d",
    title: "💎 INTERNSHIP ELITE MODE",
    subtitle: p6w.label + " · Every day is interview prep.",
    hoursAvailable: "Full day",
    tasks: [
      makeTask('dsa1', p6w.dsa.label, 'leetcode', p6w.dsa.link, 'leetcode', NEETCODE_PROFILE),
      makeTask('sd1', p6w.sysd ? p6w.sysd.label : "System Design: 45-min verbal answer, speak it aloud, time it", 'lecture', SYSTEM_DESIGN_YT, 'java'),
      makeTask('mock1', p6w.mock.label, 'build', PRAMP, 'leetcode'),
      makeTask('hr1', p6w.hr ? p6w.hr.label : "HR: STAR answer — write + speak 2-min version", 'communication'),
      ...(p6w.comm ? [makeTask('comm1', p6w.comm.label, 'communication', COMMUNICATION_PLATFORM, 'communication')] : []),
    ]
  }
}

export function getTodayIST() {
  const now = new Date()
  const utc = now.getTime() + now.getTimezoneOffset() * 60000
  const ist = new Date(utc + 5.5 * 60 * 60 * 1000)
  const y = ist.getFullYear()
  const m = String(ist.getMonth() + 1).padStart(2, '0')
  const d = String(ist.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}

export function getDayNumber(dateStr) {
  const start = new Date('2026-04-14')
  const d = new Date(dateStr + 'T00:00:00')
  return Math.floor((d - start) / (1000 * 60 * 60 * 24)) + 1
}

export function isDatePast(dateStr) { return dateStr < getTodayIST() }
export function isDateToday(dateStr) { return dateStr === getTodayIST() }
export function isDateFuture(dateStr) { return dateStr > getTodayIST() }
export function getTotalDays() { return 262 }
export function isBreakDay(dateStr) { return BREAK_DAYS.has(dateStr) }

export function getDaysSince(dateStr) {
  const start = new Date('2026-04-14')
  const d = new Date(dateStr + 'T00:00:00')
  return Math.max(0, Math.floor((d - start) / (1000 * 60 * 60 * 24)))
}

export function getRandomSurprise(dateStr) {
  return SURPRISES[getDaysSince(dateStr) % SURPRISES.length]
}

export function getVerifyChallenge(verifyType) {
  if (!verifyType) return null
  const arr = VERIFY_CHALLENGES[verifyType] || VERIFY_CHALLENGES.java
  return arr[Math.floor(Math.random() * arr.length)]
}

export const DSA_SHEET = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
