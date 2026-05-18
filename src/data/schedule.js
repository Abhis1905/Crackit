// ============================================================
// schedule.js  —  Crackit  |  May 17 2026 → Jan 31 2027
//
// GROUND RULES:
//   Start date      : May 17 2026 (Day 1)
//   Today           : May 18 2026 (Day 2) — recalibrated here
//   Vacation        : May 17 – Jun 7  (~8 hrs/day, full sessions)
//   College         : Jun 8 onwards   (9AM–5PM, evenings only ~3 hrs weekdays)
//   Weekends always : Full sessions ~6-7 hrs regardless of college
//
// DEPENDENCY CHAIN (strict):
//   Phase 1  Java syntax, loops, arrays, patterns           May 17 – May 24
//   Phase 2  OOP starts + DSA starts (arrays/sorting)      May 25 – Jun 14
//   Phase 3  Frontend weekends + DSA + OOP deepens         Jun 15 – Jul 20
//   Phase 4  Backend starts (after OOP solid) + DSA cont.  Jul 21 – Sep 14
//   Phase 5  Full-stack project + DSA hard topics          Sep 15 – Nov 15
//   Phase 6  Placement sprint: S79 + Blind75 + SD          Nov 16 – Jan 31
//
// DSA SHEETS IN ORDER:
//   A2Z   474 problems  → https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z
//   S79   79 problems   → https://takeuforward.org/dsa/strivers-79-last-moment-dsa-sheet-ace-interviews
//   B75   75 problems   → https://takeuforward.org/dsa/blind-75-leetcode-problems-detailed-video-solutions
//
// FRONTEND (weekends from Phase 3):
//   HTML/CSS → JS DOM → React + Tailwind → TS → Next.js
//   Trending 2027 additions: Zustand, TanStack Query, Framer Motion
//
// BACKEND (Phase 4 onwards):
//   SQL → JDBC → Spring Boot REST → JWT Auth → Docker
//
// SYSTEM DESIGN (Phase 6):
//   Gaurav Sen + System Design Primer
// ============================================================

// ─────────────────────────────────────────────────────────────
// CONSTANTS & LINKS
// ─────────────────────────────────────────────────────────────
export const SCHEDULE_START = '2026-05-17';
export const VACATION_END   = '2026-06-07';
export const COLLEGE_START  = '2026-06-08';
export const NEETCODE_ROADMAP = 'https://neetcode.io/roadmap';
export const DSA_SHEET = 'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z';
export function isDatePast(dateStr)   { return dateStr < getTodayIST(); }
export function isDateToday(dateStr)  { return dateStr === getTodayIST(); }
export function isDateFuture(dateStr) { return dateStr > getTodayIST(); }

export const LINKS = {
  A2Z:     'https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z',
  S79:     'https://takeuforward.org/dsa/strivers-79-last-moment-dsa-sheet-ace-interviews',
  B75:     'https://takeuforward.org/dsa/blind-75-leetcode-problems-detailed-video-solutions',
  JAVA:    'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
  KUNAL:   'https://www.youtube.com/@KunalKushwaha',
  TUF:     'https://www.youtube.com/@takeUforward',
  REACT:   'https://react.dev/',
  NEXT:    'https://nextjs.org/docs',
  TW:      'https://tailwindcss.com/docs',
  TS:      'https://www.typescriptlang.org/docs/',
  SB:      'https://www.youtube.com/watch?v=9SGDpanrc8U',
  SQL:     'https://sqlzoo.net/',
  JDBC:    'https://www.javatpoint.com/java-jdbc',
  APT:     'https://www.indiabix.com/',
  GAURAV:  'https://www.youtube.com/@GauravSen',
  SDPRIMER:'https://github.com/donnemartin/system-design-primer',
  LC:      'https://leetcode.com/problemset/',
  GH:      'https://github.com/',
  VERCEL:  'https://vercel.com/',
};

// ─────────────────────────────────────────────────────────────
// PHASES
// ─────────────────────────────────────────────────────────────
export const PHASES = [
  {
    id: 1,
    name: 'Java Foundations',
    dates: 'May 17 – May 24',
    color: '#f97316',
    icon: '☕',
    tag: 'Java syntax → loops → arrays → patterns',
    desc: 'Zero DSA yet. Build Java muscle memory. Frontend starts on weekends.',
  },
  {
    id: 2,
    name: 'OOP + DSA Ignition',
    dates: 'May 25 – Jun 14',
    color: '#a855f7',
    icon: '🔥',
    tag: 'OOP daily + A2Z Arrays/Sorting/Strings + Frontend weekends',
    desc: 'DSA and OOP run in parallel. A2Z Steps 1–5. Frontend on weekends only.',
  },
  {
    id: 3,
    name: 'Intermediate Surge',
    dates: 'Jun 15 – Jul 20',
    color: '#6bcb77',
    icon: '⚡',
    tag: 'A2Z Steps 6–12 + OOP advanced + Frontend deepens',
    desc: 'College mode on weekdays. DSA every day. Frontend accelerates on weekends.',
  },
  {
    id: 4,
    name: 'Backend Begins',
    dates: 'Jul 21 – Sep 14',
    color: '#4d96ff',
    icon: '🌐',
    tag: 'A2Z Steps 13–17 (Graphs, DP) + Spring Boot + Full-stack',
    desc: 'OOP complete. Backend starts evenings. DSA gets hard. Project skeleton built.',
  },
  {
    id: 5,
    name: 'Full-Stack Project',
    dates: 'Sep 15 – Nov 15',
    color: '#ff6b6b',
    icon: '🚀',
    tag: 'A2Z finish + Project polished + System Design intro',
    desc: 'A2Z done by late Oct. Major project deployed. System Design begins.',
  },
  {
    id: 6,
    name: 'Placement Sprint',
    dates: 'Nov 16 – Jan 31',
    color: '#ffd93d',
    icon: '🎯',
    tag: 'S79 + Blind75 + System Design + Mock interviews + Apply',
    desc: 'S79 and Blind75. Company-tagged problems. Mocks weekly. Apply every week.',
  },
];

// ─────────────────────────────────────────────────────────────
// SURPRISES + VERIFICATION
// ─────────────────────────────────────────────────────────────
export const SURPRISES = [
  { type: 'meal',  content: '🍕 CHEAT MEAL UNLOCKED — Order whatever you love. Zero guilt. Full fuel tomorrow.' },
  { type: 'quote', content: '"The expert in anything was once a beginner who refused to quit." You refused today.' },
  { type: 'meal',  content: '🍦 ICE CREAM + WALK — Go outside. Eat something cold. The algorithm will wait.' },
  { type: 'quote', content: '"Consistency beats talent when talent doesn\'t show up." You showed up.' },
  { type: 'flex',  content: '💪 Open GitHub. Look at that streak. Nobody can fake that.' },
  { type: 'meal',  content: '🍔 Burger night — DSA + Java all in one day. You deserve it.' },
  { type: 'quote', content: '"JPMC doesn\'t care about your GPA. They care about this streak."' },
  { type: 'flex',  content: '🎮 30 min guilt-free gaming. You worked hard. Now play.' },
  { type: 'meal',  content: '🧋 Cold coffee run. Maximum grind fuel unlocked.' },
  { type: 'quote', content: '"Hard days are the best days — that\'s when champions are built."' },
  { type: 'flex',  content: '😴 Sleep by 10 PM tonight. A rested brain codes better tomorrow.' },
  { type: 'quote', content: '"You built something today that didn\'t exist yesterday. That matters."' },
  { type: 'meal',  content: '🍫 Chocolate run. Small win, real reward.' },
  { type: 'flex',  content: '📱 Text someone: "grinding every single day." Own it.' },
  { type: 'quote', content: '"One more problem. One more component. One step closer."' },
];

export const VERIFY = {
  java:     ['Run your code RIGHT NOW and paste the output mentally.', 'What would break if you deleted the most important line?', 'Can you explain this to a 10-year-old in 2 sentences?', 'Name one thing you learned today you didn\'t know yesterday.'],
  dsa:      ['What is the time complexity? Write it — don\'t guess.', 'What pattern does this problem use? Name it explicitly.', 'Explain your approach in one sentence as if teaching.', 'What edge case almost broke your solution?', 'Could you re-solve this from scratch right now?'],
  oops:     ['Name the OOP concept + one real-world example.', 'Why this design over the simpler alternative?', 'Sketch the class relationship in 30 seconds.'],
  frontend: ['Open in browser NOW. Does it look right on mobile (F12)?', 'Push to GitHub. What\'s the commit message?', 'What CSS property were you most unsure about today?'],
  backend:  ['Test the endpoint in Postman. What was the status code?', 'What error did you hit and exactly how did you fix it?', 'Is this the correct HTTP verb for this operation?'],
  aptitude: ['What was the hardest question? What\'s the correct approach?', 'Which topic is still weak after today?'],
};

// ─────────────────────────────────────────────────────────────
// DATE UTILITIES
// ─────────────────────────────────────────────────────────────
export function getTodayIST() {
  const now = new Date();
  const ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 3600000);
  return `${ist.getFullYear()}-${String(ist.getMonth() + 1).padStart(2, '0')}-${String(ist.getDate()).padStart(2, '0')}`;
}

export function getDayNumber(dateStr) {
  const start = new Date(SCHEDULE_START + 'T00:00:00');
  const current = new Date(dateStr + 'T00:00:00');
  return Math.max(1, Math.floor((current - start) / 86400000) + 1);
}

export function getTotalDays() {
  return Math.floor((new Date('2027-01-31') - new Date(SCHEDULE_START)) / 86400000) + 1;
}

export function isVacation(dateStr)   { return dateStr >= SCHEDULE_START && dateStr <= VACATION_END; }
export function isWeekend(dateStr)    { const d = new Date(dateStr + 'T00:00:00').getDay(); return d === 0 || d === 6; }
export function isSunday(dateStr)     { return new Date(dateStr + 'T00:00:00').getDay() === 0; }
export function isSaturday(dateStr)   { return new Date(dateStr + 'T00:00:00').getDay() === 6; }
export function isCollegeDay(dateStr) { return dateStr >= COLLEGE_START && !isWeekend(dateStr); }
export function isToday(dateStr)      { return dateStr === getTodayIST(); }
export function isPast(dateStr)       { return dateStr < getTodayIST(); }
export function isFuture(dateStr)     { return dateStr > getTodayIST(); }

export function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function getRandomSurprise(dateStr) {
  const seed = dateStr.split('-').reduce((a, b) => a + parseInt(b, 10), 0);
  return SURPRISES[seed % SURPRISES.length];
}

export function getVerifyChallenge(type) {
  const arr = VERIFY[type] || VERIFY.java;
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─────────────────────────────────────────────────────────────
// TASK BUILDER HELPER
// t(label, type, link, verifyType)
// ─────────────────────────────────────────────────────────────
function t(label, type, link, verifyType) {
  return {
    id: Math.random().toString(36).slice(2, 9),
    label,
    type,
    link: link || null,
    verifyType: verifyType || null,
  };
}

// ─────────────────────────────────────────────────────────────
// PHASE HELPER: what phase is a given date in?
// ─────────────────────────────────────────────────────────────
export function getPhase(dateStr) {
  if (dateStr <= '2026-05-24') return 1;
  if (dateStr <= '2026-06-14') return 2;
  if (dateStr <= '2026-07-20') return 3;
  if (dateStr <= '2026-09-14') return 4;
  if (dateStr <= '2026-11-15') return 5;
  return 6;
}

// ─────────────────────────────────────────────────────────────
//
//  THE COMPLETE DAILY SCHEDULE
//  ────────────────────────────
//  PHASE 1 (May 17–24): Java only on weekdays, Frontend on weekends
//  PHASE 2 (May 25–Jun 14): OOP + DSA A2Z Steps 1–5 + Frontend weekends
//  PHASE 3 (Jun 15–Jul 20): College mode + A2Z Steps 6–12 + Frontend weekends
//  PHASE 4 (Jul 21–Sep 14): A2Z Steps 13–17 + Spring Boot + project
//  PHASE 5 (Sep 15–Nov 15): A2Z finish + project polished + SD intro
//  PHASE 6 (Nov 16–Jan 31): S79 + Blind75 + SD + mocks + apply
//
// ─────────────────────────────────────────────────────────────
export const DAILY = {

  // ══════════════════════════════════════════════════════════════
  // PHASE 1 — JAVA FOUNDATIONS (May 17–24)
  // Weekdays: Pure Java, 5 tasks, ~8 hrs (vacation)
  // Weekends: Java + Frontend intro, 5 tasks
  // No DSA yet — build Java instinct first
  // ══════════════════════════════════════════════════════════════

  '2026-05-17': {
    title: 'Day 1 — Setup + Java Hello World',
    phase: 1,
    hours: '8 hrs (vacation)',
    tasks: [
      t('Install JDK 21 + IntelliJ IDEA Community. Set JAVA_HOME. Print "Hello World".', 'java', LINKS.JAVA, 'java'),
      t('Java basics: variables, data types (int/long/double/char/boolean/String), type casting, operators', 'java', LINKS.JAVA, 'java'),
      t('Java: if/else/switch, ternary operator — write 5 programs (grade calc, positive/negative, day name)', 'java', LINKS.JAVA, 'java'),
      t('Java: for/while/do-while loops — print 1–100, sum 1–N, multiplication table', 'java', LINKS.JAVA, 'java'),
      t('IndiaBix — Number System: 15 questions timed 15 min. Note every mistake.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-18': {
    title: 'Day 2 — Loops Deep + Patterns',
    phase: 1,
    hours: '8 hrs (vacation)',
    tasks: [
      t('Java: nested loops — print right triangle, inverted triangle, number pyramid (5 patterns minimum)', 'java', LINKS.JAVA, 'java'),
      t('Java: break/continue/return — write programs demonstrating each. Know the difference.', 'java', LINKS.JAVA, 'java'),
      t('Java: functions — declaration, parameters, return types, method overloading (same name, different params)', 'java', LINKS.JAVA, 'java'),
      t('Java: recursion basics — factorial, Fibonacci, print 1→N and N→1 using ONLY recursion (no loops)', 'java', LINKS.JAVA, 'java'),
      t('IndiaBix — Percentages: 15 questions timed. Write formula before solving each.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-19': {
    title: 'Day 3 — Arrays + Strings',
    phase: 1,
    hours: '8 hrs (vacation)',
    tasks: [
      t('Java: 1D arrays — declare, initialise, iterate, find max/min/sum/average', 'java', LINKS.JAVA, 'java'),
      t('Java: 2D arrays — matrix input, print, transpose, row/col sum', 'java', LINKS.JAVA, 'java'),
      t('Java: String class — charAt/substring/length/indexOf/contains/toUpperCase/toLowerCase/split/trim', 'java', LINKS.JAVA, 'java'),
      t('Java: StringBuilder — why use it over String concatenation? Reverse a string using StringBuilder.', 'java', LINKS.JAVA, 'java'),
      t('IndiaBix — Ratios & Time-Speed-Distance: 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-20': {
    title: 'Day 4 — Static, Math, Scanner',
    phase: 1,
    hours: '8 hrs (vacation)',
    tasks: [
      t('Java: static keyword — static variables, static methods, static blocks. When and WHY to use static.', 'java', LINKS.JAVA, 'java'),
      t('Java: final keyword — final variable, final method, final class. Difference from static.', 'java', LINKS.JAVA, 'java'),
      t('Java: Math class — Math.abs/pow/sqrt/max/min/floor/ceil/round/random. Write 5 programs using these.', 'java', LINKS.JAVA, 'java'),
      t('Java: Scanner — read int, double, String, full line. Build a simple console calculator (+/−/×/÷).', 'java', LINKS.JAVA, 'java'),
      t('IndiaBix — Profit & Loss + Simple Interest: 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-21': {
    title: 'Day 5 — Wrapper Classes + Collections intro',
    phase: 1,
    hours: '8 hrs (vacation)',
    tasks: [
      t('Java: wrapper classes — Integer/Double/Character/Boolean. Autoboxing and unboxing. parseInt/valueOf.', 'java', LINKS.JAVA, 'java'),
      t('Java: ArrayList — add/get/remove/size/contains/indexOf/clear. Compare with array — when to use which?', 'java', LINKS.JAVA, 'java'),
      t('Java: enhanced for-loop, var keyword (Java 10+). Rewrite yesterday\'s programs using ArrayList.', 'java', LINKS.JAVA, 'java'),
      t('Build: Student marks tracker — ArrayList of students, add/remove/print/average using methods. No OOP yet.', 'java', null, 'java'),
      t('IndiaBix — Time & Work + Blood Relations: 20 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  // Weekend — Java continues + FRONTEND DAY 1
  '2026-05-22': {
    title: 'Day 6 (Friday) — Java Revision + Build',
    phase: 1,
    hours: '8 hrs (vacation)',
    tasks: [
      t('Java revision: write 10 small programs from scratch without looking anything up (loops, arrays, strings, math)', 'java', LINKS.JAVA, 'java'),
      t('Java: exception handling — try/catch/finally. ArithmeticException, ArrayIndexOutOfBoundsException, NullPointerException.', 'java', LINKS.JAVA, 'java'),
      t('Java: throw and throws. Write a custom exception: InsufficientFundsException for a bank program.', 'java', LINKS.JAVA, 'java'),
      t('Build: Console number guessing game — random number 1–100, user guesses, hints (too high/low), count attempts.', 'java', null, 'java'),
      t('IndiaBix — 30 question mixed mock timed 30 min. Identify 3 weak areas.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-23': {
    title: 'Day 7 (Saturday) — FRONTEND DAY 1 + Java wrap',
    phase: 1,
    hours: '8 hrs (vacation — weekend)',
    tasks: [
      t('HTML5 — semantic tags: header/nav/main/section/article/footer/aside. Build a personal profile page structure.', 'frontend', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 'frontend'),
      t('HTML5 — forms: input types (text/email/number/checkbox/radio/select), labels, required, placeholder', 'frontend', 'https://developer.mozilla.org/en-US/docs/Web/HTML', 'frontend'),
      t('CSS — box model, margin/padding/border, display (block/inline/inline-block), position (relative/absolute)', 'frontend', 'https://developer.mozilla.org/en-US/docs/Web/CSS', 'frontend'),
      t('CSS — Flexbox: flex-direction, justify-content, align-items, flex-wrap, gap. Make a responsive navbar.', 'frontend', 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/', 'frontend'),
      t('Java: Enums — define, iterate, switch on enum. Add a Day enum to your console programs.', 'java', LINKS.JAVA, 'java'),
    ],
  },

  '2026-05-24': {
    title: 'Day 8 (Sunday) — Frontend CSS + Deploy',
    phase: 1,
    hours: '8 hrs (vacation — weekend)',
    tasks: [
      t('CSS — CSS variables (--primary-color), media queries (@media max-width), responsive design basics', 'frontend', 'https://developer.mozilla.org/en-US/docs/Web/CSS', 'frontend'),
      t('CSS Grid — grid-template-columns/rows, gap, grid-area. Build a 3-column card layout.', 'frontend', 'https://css-tricks.com/snippets/css/complete-guide-grid/', 'frontend'),
      t('Deploy your profile page to GitHub Pages — live URL must exist by end of day. Commit all code.', 'frontend', LINKS.GH, 'frontend'),
      t('Java revision day — re-solve 5 programs from this week from scratch. Time yourself.', 'java', LINKS.JAVA, 'java'),
      t('IndiaBix — 30 question mock. Focus on the 3 weak areas you found yesterday.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // PHASE 2 — OOP + DSA IGNITION (May 25 – Jun 14)
  // Weekdays (vacation till Jun 7): OOP + 2 DSA problems + aptitude
  // Weekends: OOP + DSA + Frontend (JS / React intro)
  // College starts Jun 8: 3 tasks evening only on weekdays
  // ══════════════════════════════════════════════════════════════

  // ── Week 2 remaining vacation ─────────────────────────────
  '2026-05-25': {
    title: 'Day 9 — OOP Day 1: Class + Object + Constructor',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: class, object, instance variables, instance methods, this keyword. Memory model — stack vs heap.', 'java', LINKS.JAVA, 'oops'),
      t('OOP: constructors — default, parameterized, constructor chaining with this(). Create Student class.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 1.1] Count digits in N — brute (loop) AND O(1) log₁₀ approach. Know BOTH.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 1.2] Reverse a number — handle negatives + trailing zero edge case (e.g. 1200 → 21).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Coding-Decoding: 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-26': {
    title: 'Day 10 — OOP: Encapsulation + Getters/Setters',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: access modifiers — public/private/protected/default. Encapsulation — WHY private fields?', 'java', LINKS.JAVA, 'oops'),
      t('OOP: getters/setters with validation. BankAccount class — private balance, deposit/withdraw with checks.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 1.3] Check if number is palindrome — reverse == original (handle negatives).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 1.4] Find GCD of two numbers — brute force THEN Euclidean algorithm (must know this).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Seating Arrangement: 15 questions. Draw before you solve.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-27': {
    title: 'Day 11 — OOP: Inheritance',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: inheritance — extends, super(), @Override, IS-A vs HAS-A relationship. Single and multilevel.', 'java', LINKS.JAVA, 'oops'),
      t('Build: Animal hierarchy — Animal → Dog → GoldenRetriever. Override eat() and sound() at each level.', 'java', null, 'oops'),
      t('[A2Z Step 1.5] Check Armstrong number — sum of cubes of digits equals number (e.g. 153 = 1³+5³+3³).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 1.6] Check if number is prime — brute O(n) THEN O(√n). Why O(√n) works — explain it.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Syllogisms: 15 questions. Evaluate the argument, not the topic.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-28': {
    title: 'Day 12 — OOP: Polymorphism',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: compile-time polymorphism (method overloading) vs runtime polymorphism (method overriding + upcasting).', 'java', LINKS.JAVA, 'oops'),
      t('Build: Shape hierarchy — Shape (abstract) → Circle/Rectangle/Triangle. area() overridden in each. Upcast and call.', 'java', null, 'oops'),
      t('[A2Z Step 1.7] Print all divisors of N in sorted order — O(√n) approach, not O(n).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 1.8] Recursion: print 1→N and N→1 using ONLY recursion. No loops allowed.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Direction Sense: 15 questions. Draw compass before each question.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-29': {
    title: 'Day 13 — OOP: Abstract + Interface',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: abstract class vs interface — when to use which. Default/static methods in interfaces (Java 8+).', 'java', LINKS.JAVA, 'oops'),
      t('Build: Implement Flyable + Swimmable + Runnable interfaces on Duck class. Demonstrate multiple interface implementation.', 'java', null, 'oops'),
      t('[A2Z Step 1.9] Hashing: count frequency of each element in array using HashMap. Find highest and lowest frequency.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 2.1] Bubble Sort — write from scratch. Count swaps. Why is it stable?', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 30 question mixed mock timed 30 min. Track score.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-05-30': {
    title: 'Day 14 (Saturday) — Sorting + JavaScript Day 1',
    phase: 2,
    hours: '8 hrs (vacation — weekend)',
    tasks: [
      t('[A2Z Step 2.2] Selection Sort — write from scratch. [A2Z Step 2.3] Insertion Sort — best case O(n) for nearly sorted.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 2.4] Merge Sort — divide → sort → merge with extra array. Time O(n log n), Space O(n).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 2.5] Quick Sort — Lomuto partition scheme. Average O(n log n), worst O(n²) — when does worst happen?', 'dsa', LINKS.A2Z, 'dsa'),
      t('FRONTEND — JavaScript: let/const/var, arrow functions, template literals, destructuring, spread/rest, nullish coalescing', 'frontend', 'https://javascript.info/', 'frontend'),
      t('FRONTEND — JS: array methods map/filter/reduce/forEach/find/some/every. Rewrite 3 Java array programs in JS.', 'frontend', 'https://javascript.info/', 'frontend'),
    ],
  },

  '2026-05-31': {
    title: 'Day 15 (Sunday) — Arrays DSA + JS DOM',
    phase: 2,
    hours: '8 hrs (vacation — weekend)',
    tasks: [
      t('[A2Z Step 3.1] Arrays Easy: find largest element, second largest element (without sorting).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.2] Arrays Easy: check if array is sorted, remove duplicates from sorted array (in-place O(1) space).', 'dsa', LINKS.A2Z, 'dsa'),
      t('OOP: Collections — HashMap internals (hashing, collision, load factor). HashMap/HashSet/TreeMap/LinkedHashMap — differences.', 'java', LINKS.JAVA, 'oops'),
      t('FRONTEND — JS DOM: querySelector/getElementById, addEventListener, classList, createElement, innerHTML. Add interactivity to profile page.', 'frontend', 'https://javascript.info/document', 'frontend'),
      t('FRONTEND — JS Fetch: promises, async/await, fetch a public API (jsonplaceholder.typicode.com), render data in DOM.', 'frontend', 'https://javascript.info/fetch', 'frontend'),
    ],
  },

  // ── College starts Jun 8 — weekdays shrink to 3 tasks ──────
  '2026-06-01': {
    title: 'Day 16 — Arrays Easy continued',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: Comparable vs Comparator — sort ArrayList<Student> by marks, then by name. Write both approaches.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 3.3] Arrays Easy: left rotate by 1, left rotate by K — temp array first, then reversal trick (O(1) space).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.4] Arrays Easy: move zeroes to end maintaining relative order of non-zero elements.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.5] Arrays Easy: find the missing number 0..N — XOR approach (must know this trick).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 20 questions Number Series timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-02': {
    title: 'Day 17 — Arrays Medium starts',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: toString() / equals() / hashCode() — override all three in Student class. Why equals() and hashCode() must be consistent.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 3.6] Arrays Easy: max consecutive 1s, find number appearing once (all others appear twice) — XOR trick.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.7] Arrays Medium: sort 0s/1s/2s — Dutch National Flag algorithm (single pass only).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.8] Arrays Medium: majority element appearing >N/2 times — Moore\'s Voting Algorithm.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Probability + P&C: 20 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-03': {
    title: 'Day 18 — Arrays Medium: Kadane\'s + Stock',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: Generics — generic class <T>, bounded wildcards <T extends Number>, generic methods. Build generic Stack<T>.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 3.9] Arrays Medium: maximum subarray sum — KADANE\'S ALGORITHM. Critical. Memorise. Explain the intuition.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.10] Arrays Medium: best time to buy and sell stock (1 transaction) — track running minimum.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.11] Arrays Medium: rearrange array elements by sign — positives and negatives alternating, maintain order.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 30 question mock. Note all wrong answers with correct approach.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-04': {
    title: 'Day 19 — Arrays Medium continued',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: Java 8 Lambda — replace anonymous inner classes with lambdas. Functional interfaces: Predicate/Function/Consumer.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 3.12] Arrays Medium: next permutation — 3-step algorithm (find pivot, find swap, reverse suffix). Must memorise.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.13] Arrays Medium: leaders in array — element greater than everything to its right. O(n) from right.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.14] Arrays Medium: longest consecutive sequence — O(n) with HashSet.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Clocks & Calendars: 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-05': {
    title: 'Day 20 — Arrays Hard starts',
    phase: 2,
    hours: '8 hrs (vacation)',
    tasks: [
      t('OOP: Stream API — filter/map/sorted/collect/reduce/groupingBy. Rewrite 3 earlier programs using streams.', 'java', LINKS.JAVA, 'oops'),
      t('[A2Z Step 3.15] Arrays Hard: set matrix zeroes in-place — O(1) space using first row/col as flags.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.16] Arrays Hard: rotate matrix 90° clockwise — transpose then reverse each row. No extra matrix.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.17] Arrays Hard: spiral order traversal of matrix — boundary peeling approach.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — Data Interpretation: 2 full DI sets timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-06': {
    title: 'Day 21 (Saturday) — Arrays Hard + React Day 1',
    phase: 2,
    hours: '8 hrs (vacation — weekend)',
    tasks: [
      t('[A2Z Step 3.18] Arrays Hard: count subarrays with XOR = K — prefix XOR + HashMap. Understand derivation.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.19] Arrays Hard: merge overlapping intervals — sort by start, greedy merge.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 3.20] Arrays Hard: merge two sorted arrays without extra space — gap algorithm.', 'dsa', LINKS.A2Z, 'dsa'),
      t('FRONTEND — React: what is JSX, components, props, rendering lists with keys. Install via Vite. Run first component.', 'frontend', LINKS.REACT, 'frontend'),
      t('FRONTEND — React: useState hook — counter, toggle, controlled form. Build a simple todo list.', 'frontend', LINKS.REACT, 'frontend'),
    ],
  },

  '2026-06-07': {
    title: 'Day 22 (Sunday) — LAST VACATION DAY — Binary Search + React hooks',
    phase: 2,
    hours: '8 hrs (vacation — weekend)',
    tasks: [
      t('[A2Z Step 4.1] Binary Search: classic BS on sorted array — write bug-free from memory every time.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 4.2] BS: first and last occurrence of X in sorted array. Count occurrences using both.', 'dsa', LINKS.A2Z, 'dsa'),
      t('OOP: push ALL vacation Java code to GitHub — organised in packages. Write a clean README. This is your portfolio.', 'java', LINKS.GH, 'oops'),
      t('FRONTEND — React: useEffect — fetch on mount, cleanup function, dependencies array. Fetch a real API (movies/jokes).', 'frontend', LINKS.REACT, 'frontend'),
      t('FRONTEND Build: movie search app — type to search OMDB/OpenLibrary API, render as cards. Deploy to Vercel.', 'frontend', LINKS.VERCEL, 'frontend'),
    ],
  },

  // ── COLLEGE STARTS JUN 8 — Weekdays = 3 tasks, ~2.5 hrs ───
  '2026-06-08': {
    title: 'Day 23 — College Day 1 (Evening only)',
    phase: 2,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 4.3] BS: search in rotated sorted array — two halves logic. [A2Z Step 4.4] Minimum in rotated sorted array.', 'dsa', LINKS.A2Z, 'dsa'),
      t('OOP: Java Collections deep dive — PriorityQueue (min-heap by default), Deque/ArrayDeque, Stack class vs Deque.', 'java', LINKS.JAVA, 'oops'),
      t('IndiaBix — 15 questions any topic, timed 15 min.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-09': {
    title: 'Day 24 — Binary Search on Answer',
    phase: 2,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 4.5] BS on Answer: floor/ceil in sorted array. [A2Z Step 4.6] Integer square root without using sqrt().', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 4.7] BS on Answer: Koko eating bananas — binary search on the rate. Understand this pattern deeply.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-10': {
    title: 'Day 25 — BS Hard',
    phase: 2,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 4.8] BS Hard: allocate minimum pages (books to students) — classic, must know derivation.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 4.9] BS Hard: aggressive cows — maximise minimum distance. [A2Z Step 4.10] Split array largest sum.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-11': {
    title: 'Day 26 — BS: Median + 2D Matrix',
    phase: 2,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 4.11] BS Hard: median of two sorted arrays — O(log n) binary search on smaller array. Hard but critical.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 4.12] BS: search in 2D matrix (treat as 1D). [A2Z Step 4.13] Row-wise sorted matrix search.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-12': {
    title: 'Day 27 — Strings A2Z',
    phase: 2,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 5.1] Strings: reverse words in string (handle extra spaces). [A2Z Step 5.2] Longest palindromic substring — expand around center.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 5.3] Strings: Roman to Integer, Integer to Roman. [A2Z Step 5.4] String to integer (atoi) — handle edge cases.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-13': {
    title: 'Day 28 (Saturday) — Strings + Tailwind CSS',
    phase: 2,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 5.5] Strings: sort characters by frequency. [A2Z Step 5.6] Count and Say. [A2Z Step 5.7] Longest common prefix.', 'dsa', LINKS.A2Z, 'dsa'),
      t('OOP: design patterns — Singleton (thread-safe lazy), Builder pattern. Implement both with real use cases.', 'java', null, 'oops'),
      t('FRONTEND — Tailwind CSS: install in Vite+React, utility classes, responsive prefixes (sm/md/lg/xl), dark: variant.', 'frontend', LINKS.TW, 'frontend'),
      t('FRONTEND: rebuild your movie app cards with Tailwind. No custom CSS. Must be mobile responsive.', 'frontend', null, 'frontend'),
      t('IndiaBix — 25 question mock timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-14': {
    title: 'Day 29 (Sunday) — Linked List + React Router',
    phase: 2,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 6.1] Linked List: construct singly LL from scratch, insert at head/tail/position, delete at position.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 6.2] LL: reverse iteratively (3-pointer). [A2Z Step 6.3] Find middle using fast/slow pointer.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 6.4] LL: detect cycle — Floyd\'s fast/slow pointer. Must memorise. Very frequent in interviews.', 'dsa', LINKS.A2Z, 'dsa'),
      t('FRONTEND — React Router v6: BrowserRouter, Route, Link, useParams, useNavigate, nested routes. Add pages to movie app.', 'frontend', 'https://reactrouter.com/', 'frontend'),
      t('FRONTEND Build: movie app has /home, /movie/:id, /favourites routes. Deploy updated version to Vercel.', 'frontend', LINKS.VERCEL, 'frontend'),
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // PHASE 3 — INTERMEDIATE SURGE (Jun 15 – Jul 20)
  // Weekdays: 3 tasks evening (DSA + OOP)
  // Weekends: 5 tasks (DSA + OOP/Java advanced + Frontend deeper)
  // A2Z Steps 6–12: LL, Recursion, Bit Manip, Stack, Queue, Heaps, Greedy
  // Frontend: TypeScript, useContext, Zustand, Next.js
  // ══════════════════════════════════════════════════════════════

  '2026-06-15': {
    title: 'Day 30 — LL: Merge + Remove Nth',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 6.5] LL: find start of cycle. [A2Z Step 6.6] Merge two sorted linked lists (iterative).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 6.7] LL: remove Nth node from end — one pass with two pointers separated by N.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-16': {
    title: 'Day 31 — LL Medium',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 6.8] LL: add two numbers as LLs (handle carry). [A2Z Step 6.9] Odd-even LL reorder.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 6.10] LL: Doubly LL — construct, insert, delete, reverse DLL.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-17': {
    title: 'Day 32 — LL Hard',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 6.11] LL Hard: reverse in groups of K. [A2Z Step 6.12] Rotate list by K places.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 6.13] LL Hard: clone LL with random pointer — HashMap approach O(n) space, then O(1) space trick.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-18': {
    title: 'Day 33 — Recursion begins',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 7.1] Recursion: subset sum — print all subsets of array. Build recursion tree before coding.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 7.2] Recursion: subset sum II — unique subsets only (sort + skip duplicates).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-19': {
    title: 'Day 34 — Recursion: Combination Sum',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 7.3] Recursion: combination sum I — pick same element multiple times.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 7.4] Recursion: combination sum II — each element once, unique combinations.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-20': {
    title: 'Day 35 (Saturday) — Recursion: Permutations + TypeScript',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 7.5] Recursion: all permutations — swap approach AND visited-boolean approach. Know both.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 7.6] Recursion: N-Queens — backtracking, print all valid boards. [A2Z Step 7.7] Rat in a maze.', 'dsa', LINKS.A2Z, 'dsa'),
      t('OOP: Object class methods — override toString/equals/hashCode properly in Student. Test with HashMap.', 'java', LINKS.JAVA, 'oops'),
      t('FRONTEND — TypeScript: types, interfaces, type aliases, union/intersection, generics. Migrate movie app to .tsx.', 'frontend', LINKS.TS, 'frontend'),
      t('FRONTEND: all React components now typed — props interfaces, useState<T>, event types (React.ChangeEvent etc).', 'frontend', null, 'frontend'),
    ],
  },

  '2026-06-21': {
    title: 'Day 36 (Sunday) — Bit Manipulation + useContext',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 8.1] Bit Manip: AND/OR/XOR/NOT/shifts — 5 warmup problems. Check/set/clear/toggle bit at position i.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 8.2] Bit: count set bits (Brian Kernighan), power of 2 check, XOR single number (others appear twice).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 8.3] Bit: generate all subsets using bit masking (1<<i, iterate 0 to 2^n–1).', 'dsa', LINKS.A2Z, 'dsa'),
      t('FRONTEND — useContext: create ThemeContext and AuthContext. Wrap app. Consume in nested components.', 'frontend', LINKS.REACT, 'frontend'),
      t('FRONTEND — Zustand: global state without prop-drilling. Add favourites store to movie app. Push to Vercel.', 'frontend', 'https://github.com/pmndrs/zustand', 'frontend'),
    ],
  },

  '2026-06-22': {
    title: 'Day 37 — Stack: Basics',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 9.1] Stack: implement using array (push/pop/peek/isEmpty). [A2Z Step 9.2] Implement using queue.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 9.3] Stack: valid parentheses (all 3 bracket types). [A2Z Step 9.4] Min Stack — getMin() in O(1).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-23': {
    title: 'Day 38 — Stack: Monotonic',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 9.5] Monotonic Stack: next greater element I. [A2Z Step 9.6] Next greater element II (circular array).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 9.7] Monotonic Stack: previous smaller element. [A2Z Step 9.8] Largest rectangle in histogram.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-24': {
    title: 'Day 39 — Stack Hard: LRU + Queue',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 9.9] Stack Hard: LRU Cache — HashMap + Doubly LL. TOP interview question. No shortcuts allowed.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 9.10] Queue: implement using 2 stacks. [A2Z Step 9.11] Sliding window max using deque.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-25': {
    title: 'Day 40 — Sliding Window',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 10.1] Sliding Window: longest subarray with sum ≤ K. [A2Z Step 10.2] Max subarray of size K.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 10.3] SW: longest substring without repeating characters. [A2Z Step 10.4] Fruit into baskets.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-26': {
    title: 'Day 41 — Sliding Window Hard',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 10.5] SW Hard: minimum window substring — two pointer + frequency map. Critical pattern.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 10.6] SW: longest repeating character replacement. [A2Z Step 10.7] Count of subarrays with K distinct.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-27': {
    title: 'Day 42 (Saturday) — Heaps + Next.js',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 11.1] Heaps: min/max heap theory, heapify up/down. Implement min heap from array.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 11.2] Heaps: Kth largest (min heap size K). [A2Z Step 11.3] Top K frequent elements.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 11.4] Heaps: find median from data stream — two heaps trick. Critical interview question.', 'dsa', LINKS.A2Z, 'dsa'),
      t('FRONTEND — Next.js: file-based routing, pages vs app dir, server vs client components, image optimisation.', 'frontend', LINKS.NEXT, 'frontend'),
      t('FRONTEND — Next.js: getStaticProps, ISR. Build a blog with 3 markdown posts. Deploy to Vercel.', 'frontend', LINKS.NEXT, 'frontend'),
    ],
  },

  '2026-06-28': {
    title: 'Day 43 (Sunday) — Heaps Hard + TanStack Query',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 11.5] Heaps: merge K sorted lists (min heap). [A2Z Step 11.6] Task scheduler — heap + greedy.', 'dsa', LINKS.A2Z, 'dsa'),
      t('OOP: Multithreading basics — Thread class, Runnable, synchronized, volatile, thread lifecycle. Write a simple demo.', 'java', LINKS.JAVA, 'oops'),
      t('OOP: Java 8 Streams deep dive — 10 stream exercises (groupBy, flatMap, Collectors.joining, parallel streams).', 'java', LINKS.JAVA, 'oops'),
      t('FRONTEND — TanStack Query: useQuery, useMutation, cache invalidation. Replace manual fetch in movie app.', 'frontend', 'https://tanstack.com/query', 'frontend'),
      t('FRONTEND — Framer Motion: motion.div, variants, whileHover/Tap, AnimatePresence. Add animations to movie app.', 'frontend', 'https://www.framer.com/motion/', 'frontend'),
    ],
  },

  '2026-06-29': {
    title: 'Day 44 — Greedy',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 12.1] Greedy: activity selection (max non-overlapping). [A2Z Step 12.2] N-meetings in one room.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 12.3] Greedy: jump game I (can you reach end?). [A2Z Step 12.4] Jump game II (min jumps).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-06-30': {
    title: 'Day 45 — Greedy continued',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 12.5] Greedy: fractional knapsack — sort by value/weight. [A2Z Step 12.6] Job sequencing with deadlines.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 12.7] Greedy: minimum number of platforms for trains. [A2Z Step 12.8] Assign cookies to children.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-01': {
    title: 'Day 46 — Backtracking',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 13.1] Backtracking: palindrome partitioning — all palindromic substrings.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 13.2] Backtracking: M-coloring problem. [A2Z Step 13.3] Word search in matrix (DFS + backtrack).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-02': {
    title: 'Day 47 — Backtracking Hard',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 13.4] Backtracking: sudoku solver — place digit, validate, recurse, undo.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 13.5] Backtracking: expression add operators — hard, requires careful pruning.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-03': {
    title: 'Day 48 — Trees: Binary Tree basics',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 14.1] Trees: Binary Tree — node, insert, BFS level-order traversal, DFS in/pre/post order.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 14.2] Trees: max depth, check if symmetric, invert binary tree, count nodes.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-04': {
    title: 'Day 49 (Saturday) — Trees Medium + CS Fundamentals',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 14.3] Trees: diameter, max path sum, level order (list of lists), zigzag level order.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 14.4] Trees: LCA, path sum II, serialize/deserialize binary tree.', 'dsa', LINKS.A2Z, 'dsa'),
      t('CS Fundamentals — OS: process vs thread, deadlock (4 conditions), scheduling algorithms (FCFS/SJF/Round Robin). These get asked.', 'java', 'https://www.geeksforgeeks.org/operating-systems/', 'java'),
      t('FRONTEND — Build a full dashboard UI: sidebar, dark mode toggle (Zustand), responsive. Push to Vercel.', 'frontend', null, 'frontend'),
      t('IndiaBix — 30 question mixed mock timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-05': {
    title: 'Day 50 (Sunday) — Trees: BST + CS Fundamentals',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 14.5] BST: properties, insert/delete/search, validate BST, Kth smallest in BST.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 14.6] BST: convert sorted array to BST, LCA in BST, inorder successor.', 'dsa', LINKS.A2Z, 'dsa'),
      t('CS Fundamentals — DBMS: ACID properties, normalisation (1NF/2NF/3NF), indexing (B-tree), transactions. Interviewers love this.', 'java', 'https://www.geeksforgeeks.org/dbms/', 'java'),
      t('CS Fundamentals — CN: TCP vs UDP, HTTP vs HTTPS, DNS resolution, IP addressing, 3-way handshake.', 'java', 'https://www.geeksforgeeks.org/computer-network-tutorials/', 'java'),
      t('GitHub: push all week\'s DSA solutions organised by topic. Update README with progress.', 'java', LINKS.GH, 'java'),
    ],
  },

  '2026-07-06': {
    title: 'Day 51 — Trees: Views + traversals',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 14.7] Trees: right view, left view, boundary traversal, vertical order traversal.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 14.8] Trees: top view, bottom view, diagonal traversal.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-07': {
    title: 'Day 52 — Tries',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 15.1] Trie: implement insert/search/startsWith from scratch. Understand node structure.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 15.2] Trie: implement autocomplete, count words with prefix. [A2Z Step 15.3] Longest common prefix using trie.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-08': {
    title: 'Day 53 — Graphs: BFS + DFS',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 16.1] Graphs: representation (adj list, adj matrix), BFS — level-order, components.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 16.2] Graphs: DFS — recursive and iterative. Number of islands. Flood fill.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-09': {
    title: 'Day 54 — Graphs: Topo Sort + Cycle',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 16.3] Graphs: detect cycle in directed graph (DFS + color). Detect cycle in undirected (BFS/DFS parent).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 16.4] Graphs: topological sort — Kahn\'s BFS algorithm AND DFS approach. Course schedule I & II.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-10': {
    title: 'Day 55 — Graphs: Shortest Path',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 16.5] Graphs: Dijkstra — priority queue implementation. Time complexity O((V+E) log V).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 16.6] Graphs: Bellman-Ford (handles negative weights). Floyd-Warshall (all pairs shortest path).', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-11': {
    title: 'Day 56 (Saturday) — Graphs Hard + SQL basics',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 16.7] Graphs: Union-Find/DSU — path compression + union by rank. Islands merge, redundant connection.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 16.8] Graphs: MST — Kruskal (DSU) and Prim (heap). Min cost to connect all points.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 16.9] Graphs: bipartite check (BFS colour). [A2Z Step 16.10] Strongly connected components — Kosaraju\'s algorithm.', 'dsa', LINKS.A2Z, 'dsa'),
      t('SQL: SELECT, WHERE, ORDER BY, LIMIT, DISTINCT. JOIN (INNER/LEFT/RIGHT/FULL). GROUP BY, HAVING, COUNT/SUM/AVG. Do 20 SQLZoo problems.', 'java', LINKS.SQL, 'java'),
      t('IndiaBix — 30 question mock timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-12': {
    title: 'Day 57 (Sunday) — DP starts + SQL deeper',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[A2Z Step 17.1] DP 1D: climbing stairs, min cost climbing, frog jump. Learn tabulation AND memoization for each.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.2] DP 1D: house robber I and II (circular). Tribonacci sequence.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.3] DP: stock problems — Best Time I/II/III/IV, with cooldown, with transaction fee. All 6.', 'dsa', LINKS.A2Z, 'dsa'),
      t('SQL: subqueries, nested SELECT, EXISTS/NOT EXISTS, window functions (ROW_NUMBER, RANK, LEAD, LAG). 20 HackerRank SQL.', 'java', 'https://www.hackerrank.com/domains/sql', 'java'),
      t('GitHub: push all DSA graphs solutions. Write proper docstrings for each solution.', 'java', LINKS.GH, 'java'),
    ],
  },

  '2026-07-13': {
    title: 'Day 58 — DP: 2D',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 17.4] DP 2D: unique paths I and II (with obstacles). Minimum path sum in grid. Triangle min path.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.5] DP 2D: cherry pickup, minimum falling path, max sum rectangle.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-14': {
    title: 'Day 59 — DP: LCS + Strings',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 17.6] DP: LCS — Longest Common Subsequence. Print the LCS (backtrack). LCS length.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.7] DP: Edit Distance. [A2Z Step 17.8] Longest Common Substring. [A2Z Step 17.9] LPS.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-15': {
    title: 'Day 60 — DP: Knapsack',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 17.10] DP: 0/1 Knapsack — subset sum, equal partition, target sum, count subsets with sum K.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.11] DP: Unbounded Knapsack — coin change I (min coins), coin change II (count ways), rod cutting.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-16': {
    title: 'Day 61 — DP: LIS',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 17.12] DP: LIS — O(n²) DP THEN O(n log n) patience sorting. Longest Bitonic Subsequence.', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.13] DP: Wildcard matching. [A2Z Step 17.14] DP: Burst balloons — interval DP.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-17': {
    title: 'Day 62 — DP: Hard + MCM',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[A2Z Step 17.15] DP: Matrix Chain Multiplication — classic interval DP. Palindrome partitioning II (min cuts).', 'dsa', LINKS.A2Z, 'dsa'),
      t('[A2Z Step 17.16] DP: Egg drop, Super egg drop (optimised), Minimum cost to cut stick.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 15 questions timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-18': {
    title: 'Day 63 (Saturday) — A2Z Complete Review + Backend Preview',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('A2Z Review: re-solve the 10 hardest problems you struggled with across all steps. No hints.', 'dsa', LINKS.A2Z, 'dsa'),
      t('A2Z Review: write time/space complexity for every major algorithm you\'ve learned. Make a cheat sheet.', 'dsa', null, 'dsa'),
      t('JDBC intro: what is JDBC, Connection/Statement/PreparedStatement/ResultSet. Connect to MySQL, run SELECT.', 'java', LINKS.JDBC, 'java'),
      t('FRONTEND Build: complete portfolio site — hero, projects (CardioScan, DSA Visualizer, NaturalApp), contact form. Deploy.', 'frontend', LINKS.VERCEL, 'frontend'),
      t('IndiaBix — 30 question mock timed. This is placement-intensity.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-19': {
    title: 'Day 64 (Sunday) — JDBC + Portfolio polish',
    phase: 3,
    hours: '7 hrs (weekend)',
    tasks: [
      t('JDBC: CRUD operations with PreparedStatement — INSERT/UPDATE/DELETE/SELECT. Use try-with-resources properly.', 'java', LINKS.JDBC, 'java'),
      t('JDBC: connection pooling concept, batch processing, transaction management (commit/rollback).', 'java', LINKS.JDBC, 'java'),
      t('SQL: indexes (B-tree, clustered vs non-clustered), EXPLAIN query, query optimization basics.', 'java', LINKS.SQL, 'java'),
      t('Portfolio: add CardioScan metrics (97% recall, 98.5% accuracy), DSA Visualizer demo GIF, live links.', 'frontend', LINKS.VERCEL, 'frontend'),
      t('GitHub: reorganise all repos — clean READMEs with screenshots for each project. Employer-ready.', 'java', LINKS.GH, 'java'),
    ],
  },

  '2026-07-20': {
    title: 'Day 65 — DP revision + DSA transition day',
    phase: 3,
    hours: '3 hrs (college mode)',
    tasks: [
      t('DSA: revisit Kadane\'s, LRU Cache, Topo Sort, Dijkstra — re-solve each from scratch no hints. These appear in every interview.', 'dsa', LINKS.A2Z, 'dsa'),
      t('DSA: review your weakest A2Z topics. Identify 5 problems to redo tomorrow with full explanations.', 'dsa', LINKS.A2Z, 'dsa'),
      t('IndiaBix — 20 question mock timed. Final phase 3 aptitude session.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // PHASE 4 — BACKEND BEGINS (Jul 21 – Sep 14)
  // Weekdays: 3 tasks — DSA + Spring Boot evening
  // Weekends: 5 tasks — DSA + Spring Boot + Frontend + SQL + Project
  // A2Z is done — shift to SDE Sheet for interview patterns
  // Spring Boot: REST → JPA → JWT → Docker
  // ══════════════════════════════════════════════════════════════

  '2026-07-21': {
    title: 'Day 66 — Spring Boot Day 1',
    phase: 4,
    hours: '3 hrs (college mode)',
    tasks: [
      t('Spring Boot: Spring Initializr, project structure, @SpringBootApplication, first REST endpoint @GetMapping.', 'java', LINKS.SB, 'backend'),
      t('Spring Boot: @RestController, @RequestMapping, @PostMapping, @PathVariable, @RequestBody, @RequestParam.', 'java', LINKS.SB, 'backend'),
      t('DSA SDE Sheet: two sum, three sum, 4 sum — all three from memory. Time/space complexity.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
    ],
  },

  '2026-07-22': {
    title: 'Day 67 — Spring Boot: JPA',
    phase: 4,
    hours: '3 hrs (college mode)',
    tasks: [
      t('Spring Boot: JPA — @Entity, @Id, @GeneratedValue, @Column. JpaRepository — save/findById/findAll/delete.', 'java', LINKS.SB, 'backend'),
      t('Spring Boot: JPA relations — @OneToMany, @ManyToOne, @JoinColumn. Student-Course relationship example.', 'java', LINKS.SB, 'backend'),
      t('DSA SDE Sheet: reverse LL, middle of LL, detect cycle — re-solve all three in one session.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
    ],
  },

  '2026-07-23': {
    title: 'Day 68 — Spring Boot: REST CRUD API',
    phase: 4,
    hours: '3 hrs (college mode)',
    tasks: [
      t('Spring Boot: build complete Student CRUD API — GET all, GET by id, POST create, PUT update, DELETE. Test in Postman.', 'java', LINKS.SB, 'backend'),
      t('Spring Boot: @ControllerAdvice, @ExceptionHandler, custom exception classes (StudentNotFoundException).', 'java', LINKS.SB, 'backend'),
      t('DSA SDE Sheet: N-Queens, sudoku solver, word search — which ones can you solve without looking?', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
    ],
  },

  '2026-07-24': {
    title: 'Day 69 — Spring Boot: Service Layer',
    phase: 4,
    hours: '3 hrs (college mode)',
    tasks: [
      t('Spring Boot: @Service, @Repository layers. Dependency injection with @Autowired. Why three layers?', 'java', LINKS.SB, 'backend'),
      t('Spring Boot: DTO pattern — separate request/response objects from entity. ModelMapper or manual mapping.', 'java', LINKS.SB, 'backend'),
      t('DSA SDE Sheet: merge K sorted lists, top K frequent elements — heap approach. Re-solve.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
    ],
  },

  '2026-07-25': {
    title: 'Day 70 (Saturday) — Spring Boot: Auth + Full-Stack Connect',
    phase: 4,
    hours: '7 hrs (weekend)',
    tasks: [
      t('Spring Boot: Spring Security basics — SecurityConfig, CORS configuration, disable CSRF for REST.', 'java', LINKS.SB, 'backend'),
      t('Spring Boot: JWT — generate token on login, validate with JwtFilter, protect endpoints with @PreAuthorize.', 'java', LINKS.SB, 'backend'),
      t('Full-Stack: connect React frontend to Spring Boot backend — CORS headers, axios/fetch, handle auth token in localStorage.', 'java', null, 'backend'),
      t('Project skeleton: start the MAJOR PROJECT repo. What is it? E-commerce / Task Manager / Job Portal. Decide today.', 'java', LINKS.GH, 'backend'),
      t('IndiaBix — 30 question mock timed. Placement intensity.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-07-26': {
    title: 'Day 71 (Sunday) — Spring Boot: Docker + Project',
    phase: 4,
    hours: '7 hrs (weekend)',
    tasks: [
      t('Docker: Dockerfile for Spring Boot app — FROM, COPY, EXPOSE, CMD. Build image and run container.', 'java', 'https://docs.docker.com/', 'backend'),
      t('Docker Compose: app + MySQL + (later Redis) — docker-compose.yml, depends_on, environment variables.', 'java', 'https://docs.docker.com/compose/', 'backend'),
      t('Major Project: set up repo, README, project structure (frontend/backend directories), initial Spring Boot scaffold.', 'java', LINKS.GH, 'backend'),
      t('DSA SDE Sheet: 10 problems sprint — pick any 10 you haven\'t revisited this week. No hints allowed.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
      t('SQL: write 10 complex queries (joins + aggregates + subqueries + window functions). Save them to your notes.', 'java', LINKS.SQL, 'java'),
    ],
  },

  // Weekday pattern continues through Phase 4 — 3 tasks each
  // Pattern: [Spring Boot feature] + [DSA SDE Sheet problems] + [aptitude]
  // I'll define key milestone days; intermediate days follow same pattern

  '2026-08-01': {
    title: 'Day 77 (Saturday) — MongoDB + Redis + Project',
    phase: 4,
    hours: '7 hrs (weekend)',
    tasks: [
      t('MongoDB: Atlas setup, collections, BSON, CRUD in Compass. Connect to Spring Boot with Spring Data MongoDB.', 'java', 'https://www.mongodb.com/docs/', 'backend'),
      t('Redis: what is it, install locally, Spring Boot integration. Cache @Cacheable, @CacheEvict. Cache-aside pattern.', 'java', 'https://redis.io/docs/', 'backend'),
      t('Spring Boot: API versioning, pagination (@Pageable), Swagger/OpenAPI documentation.', 'java', LINKS.SB, 'backend'),
      t('Major Project: implement authentication (register/login), user entity, JWT flow end-to-end. Test with Postman.', 'java', LINKS.GH, 'backend'),
      t('DSA SDE Sheet: 10 problems sprint — focus on DP category problems this week.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
    ],
  },

  '2026-08-15': {
    title: 'Day 91 (Saturday) — Project midpoint checkpoint',
    phase: 4,
    hours: '7 hrs (weekend)',
    tasks: [
      t('Major Project: core backend APIs should be functional — auth, main CRUD, relationships. Review and test all.', 'java', LINKS.GH, 'backend'),
      t('Major Project: React frontend — auth pages (login/register), main dashboard, API integration with TanStack Query.', 'frontend', LINKS.VERCEL, 'frontend'),
      t('System Design PREVIEW: watch Gaurav Sen — "What is a message queue?" and "Caching basics". Take notes.', 'java', LINKS.GAURAV, 'java'),
      t('DSA SDE Sheet: 10 problems. Mix of graphs, DP, trees — simulate interview conditions (45 min each).', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
      t('IndiaBix — Full 60-question mock timed 60 min. This is AMCAT pattern.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-09-05': {
    title: 'Day 112 (Saturday) — Backend complete + System Design intro',
    phase: 4,
    hours: '7 hrs (weekend)',
    tasks: [
      t('Spring Boot: WebSocket intro — STOMP protocol, real-time notification concept. Add to project if applicable.', 'java', LINKS.SB, 'backend'),
      t('Spring Boot: Rate limiting, input validation (@Valid, @NotNull, @Email), audit logging.', 'java', LINKS.SB, 'backend'),
      t('System Design: read System Design Primer — URL Shortener. Design it yourself on paper before reading solution.', 'java', LINKS.SDPRIMER, 'java'),
      t('DSA SDE Sheet: 10 problems sprint. Focus on graph + DP hard problems.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
      t('IndiaBix — 60 question full mock timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-09-14': {
    title: 'Day 121 (Monday) — Phase 4 wrap-up',
    phase: 4,
    hours: '3 hrs (college mode)',
    tasks: [
      t('Backend review: can you explain your project\'s architecture, why you made each design decision, and the tradeoffs?', 'java', null, 'backend'),
      t('DSA SDE Sheet: count how many problems done. Target: 80+ by now. Identify remaining gaps.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
      t('IndiaBix — 20 questions timed. Daily minimum habit.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // PHASE 5 — FULL-STACK PROJECT (Sep 15 – Nov 15)
  // Major project polished and deployed
  // System Design deepens
  // DSA: SDE Sheet finish → start S79
  // ══════════════════════════════════════════════════════════════

  '2026-10-01': {
    title: 'Phase 5 Checkpoint — Project polish + System Design',
    phase: 5,
    hours: '7 hrs (weekend)',
    tasks: [
      t('Major Project: deploy backend to Railway/Render, frontend to Vercel. Both live URLs must work.', 'java', LINKS.VERCEL, 'backend'),
      t('Major Project: add proper README — architecture diagram, tech stack, setup instructions, screenshots/demo GIF.', 'java', LINKS.GH, 'backend'),
      t('System Design: design Twitter feed — fanout on read vs write, caching, sharding. Whiteboard it before Googling.', 'java', LINKS.GAURAV, 'java'),
      t('System Design: design WhatsApp messages — WebSocket, offline queue, message delivery guarantees.', 'java', LINKS.SDPRIMER, 'java'),
      t('DSA: SDE Sheet completion sprint — any remaining problems. S79 starts Nov 1.', 'dsa', 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/', 'dsa'),
    ],
  },

  '2026-11-01': {
    title: 'Day — S79 Begins (Placement Sprint Preview)',
    phase: 5,
    hours: '3 hrs (college mode)',
    tasks: [
      t('[S79] Problems 1–5: Two Sum, Best Time to Buy Stock, Contains Duplicate, Product Except Self, Maximum Subarray.', 'dsa', LINKS.S79, 'dsa'),
      t('System Design: design Uber — geo-indexing with Quadtrees, driver-rider matching, surge pricing algorithm.', 'java', LINKS.GAURAV, 'java'),
      t('IndiaBix — 20 questions timed. Mock interview mode.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  '2026-11-15': {
    title: 'Day — Phase 5 wrap + Apply begins',
    phase: 5,
    hours: '7 hrs (weekend)',
    tasks: [
      t('[S79] Problems 30–45 sprint: Trees, DP, Graph problems. Simulate timed interview conditions.', 'dsa', LINKS.S79, 'dsa'),
      t('Resume: update LaTeX resume — add major project with metrics, update DSA stats (Codolio 180+), ensure all links work.', 'java', null, 'java'),
      t('Apply: research 5 companies opening for summer 2027. Note application deadlines and required skills.', 'java', null, 'java'),
      t('System Design: design Netflix — CDN, HLS streaming, recommendation engine. This is a JPMC favourite.', 'java', LINKS.GAURAV, 'java'),
      t('IndiaBix — 60 question full placement mock timed.', 'aptitude', LINKS.APT, 'aptitude'),
    ],
  },

  // ══════════════════════════════════════════════════════════════
  // PHASE 6 — PLACEMENT SPRINT (Nov 16 – Jan 31)
  // S79 + Blind75, System Design mastery
  // Mock interviews weekly, apply every week
  // OA practice, company-tagged problems
  // ══════════════════════════════════════════════════════════════

  '2026-11-16': {
    title: 'Day — PLACEMENT SPRINT BEGINS',
    phase: 6,
    hours: '4 hrs (college mode — intensified)',
    tasks: [
      t('[S79 + B75] Blind75 problems 1–10: Arrays and Hashing section. Timed: 45 min each max.', 'dsa', LINKS.B75, 'dsa'),
      t('System Design: full mock — pick a system (Uber/Twitter/WhatsApp), design from scratch in 45 min, explain tradeoffs.', 'java', LINKS.GAURAV, 'java'),
      t('Apply: submit 3 applications today. JPMC SDE Intern, PayPal, at least one more. Keep a tracker spreadsheet.', 'java', null, 'java'),
    ],
  },

  '2026-12-01': {
    title: 'Dec 1 — Mid-Placement Checkpoint',
    phase: 6,
    hours: '4 hrs (college mode — intensified)',
    tasks: [
      t('[S79 + B75] S79 should be 60+ done by now, B75 should be 40+ done. Review weakest 10 problems.', 'dsa', LINKS.S79, 'dsa'),
      t('OA practice: attempt 2 full LeetCode contests this week + upsolve all problems. Track your contest rating.', 'dsa', LINKS.LC, 'dsa'),
      t('Apply: 3 more applications. Follow up on previous ones. LinkedIn: connect with engineers at target companies.', 'java', null, 'java'),
    ],
  },

  '2026-01-15': {
    title: 'Jan 15 — Final Stretch',
    phase: 6,
    hours: '5 hrs (intensified)',
    tasks: [
      t('[S79 + B75] All 79 + all 75 should be completed. Do a full speed-run: can you solve any random one in 30 min?', 'dsa', LINKS.S79, 'dsa'),
      t('Mock Technical Interview: ask a friend or use Pramp — 1 hr coding + 30 min system design. Record and review.', 'dsa', 'https://www.pramp.com/', 'dsa'),
      t('Final resume pass: PDF clean, all links work, metrics are specific, no typos. Ready to send today.', 'java', null, 'java'),
    ],
  },

  '2027-01-31': {
    title: 'Day 260 — MISSION END 🎯',
    phase: 6,
    hours: 'FINAL DAY',
    tasks: [
      t('S79 + Blind75: every single problem solved, understood, and explainable without hints.', 'dsa', LINKS.S79, 'dsa'),
      t('System Design: 8 classic systems designed from scratch — URL shortener, Twitter, WhatsApp, Uber, Netflix, Google Search, Dropbox, Zoom.', 'java', LINKS.GAURAV, 'java'),
      t('Final count: 180+ Codolio problems, full-stack project live, portfolio deployed, 30+ applications sent.', 'java', LINKS.GH, 'java'),
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// PRIMARY EXPORT: getScheduleByDate
// Returns the schedule entry for a given date string 'YYYY-MM-DD'
// Falls back to a generated default if date not in DAILY map
// ─────────────────────────────────────────────────────────────
export function getScheduleByDate(dateStr) {
  if (DAILY[dateStr]) return DAILY[dateStr];

  // Generate default for gaps between milestone days
  const dayNum = getDayNumber(dateStr);
  const phase = getPhase(dateStr);
  const vacation = isVacation(dateStr);
  const weekend = isWeekend(dateStr);
  const hours = vacation ? '8 hrs (vacation)' : weekend ? '7 hrs (weekend)' : '3 hrs (college mode)';

  // Determine DSA sheet based on date
  let dsaSheet = LINKS.A2Z;
  let dsaSheetName = 'A2Z';
  if (dateStr >= '2026-11-01') { dsaSheet = LINKS.S79; dsaSheetName = 'S79 + B75'; }

  const defaultTasks = [
    t(`[${dsaSheetName}] Today's DSA — continue from where you left off. 2 problems minimum. No skipping.`, 'dsa', dsaSheet, 'dsa'),
    t('Spring Boot / Backend: continue current feature. Test in Postman. Commit to GitHub.', 'java', LINKS.SB, 'backend'),
    t('IndiaBix — 15 questions timed. Weak area focus.', 'aptitude', LINKS.APT, 'aptitude'),
  ];

  if (vacation || weekend) {
    defaultTasks.push(t('Frontend: continue current feature/project. Mobile responsive check. Deploy update.', 'frontend', LINKS.VERCEL, 'frontend'));
    defaultTasks.push(t('GitHub: daily commit. Update README if project has new features.', 'java', LINKS.GH, 'java'));
  }

  return {
    title: `Day ${dayNum} — Keep the streak alive`,
    phase,
    hours,
    tasks: defaultTasks,
  };
}

// Keep backward compat alias
export function getScheduleByDayNum(n) {
  const start = new Date(SCHEDULE_START + 'T00:00:00');
  const target = new Date(start.getTime() + (n - 1) * 86400000);
  const dateStr = `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, '0')}-${String(target.getDate()).padStart(2, '0')}`;
  return { date: dateStr, ...getScheduleByDate(dateStr) };
}