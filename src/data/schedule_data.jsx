// ═══════════════════════════════════════════════════════════════
// MASTER SCHEDULE — 262 Days — Apr 14 2026 → Jan 1 2027
// Phase 1: Apr 14 – Jun 1 (49 days) — FULL DAY INTENSIVE
// Phase 2: Jun 2 – Jan 1 (213 days) — COLLEGE MODE 4-5 hrs/day
//
// SEQUENCE:
// Weeks 1-3:  Java fundamentals only (variables → arrays → OOP basics)
// Week 4:     Java OOP + DSA Arrays begins (safe to pair)
// Week 5:     Java OOP advanced + DSA Strings + Two Pointers
// Week 6:     Java Collections + DSA Sliding Window + LinkedList
// Week 7:     Java Advanced (Exceptions/Generics/Streams) + DSA Stack/Queue
//             + SQL basics + HTML begins
// Phase 2:
//   p2w1-2:   BS + Recursion + Trees + CSS/Tailwind starts + SQL intermediate
//   p2w3-4:   Heaps + Greedy + Backtracking + React begins + MongoDB
//   p2w5-6:   Graphs + DP + React advanced + Spring Boot begins
//   p2w7-9:   DP advanced + Spring Boot full + PostgreSQL + Redis
//   p2w10-12: Spring Security + JWT + Full Stack integration
//   p2w13-15: System Design starts + Full Stack Project
//   p2w15-18: Python + NumPy/Pandas + ML begins
//   p2w19-22: Deep Learning + HuggingFace + ML Projects
//   p2w23-25: Docker + Microservices + Deploy + Open Source
//   p2w26-38: Interview Prep intensive — mock OAs, SD rounds, HR
// ═══════════════════════════════════════════════════════════════

export const SCHEDULE_START = "2026-04-14";

export const MASTER_SCHEDULE = [
  {
    "date": "2026-04-14",
    "dayNum": 1,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 1 · Day 1 — Java + Practice + APT + COMM",
    "tip": "Make it work, make it right, make it fast. — Kent Beck",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Variables, Data Types (int, double, char, boolean, String)",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: W3Schools Java exercises: Variables + Type casting",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Number System: types, divisibility rules, LCM, HCF — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Mirror exercise: 2-min self introduction. Record. Watch back. Improve.",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Variables, Data Types (int, double, char, boolean, String)",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: W3Schools Java exercises: Variables + Type casting",
        "type": "practice",
        "link": "https://www.w3schools.com/java/",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Number System: types, divisibility rules, LCM, HCF — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Mirror exercise: 2-min self introduction. Record. Watch back. Improve.",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-15",
    "dayNum": 2,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 1 · Day 2 — Java + Practice + APT + COMM",
    "tip": "First, solve the problem. Then, write the code. — John Johnson",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Operators — arithmetic, relational, logical, ternary",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write 10 programs: calculator, even/odd, max of 3, FizzBuzz",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Number System: remainders, unit digit, factorials — 15 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: TED Talk: watch 1 talk, note 3 rhetorical techniques used",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Operators — arithmetic, relational, logical, ternary",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write 10 programs: calculator, even/odd, max of 3, FizzBuzz",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Number System: remainders, unit digit, factorials — 15 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "TED Talk: watch 1 talk, note 3 rhetorical techniques used",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-16",
    "dayNum": 3,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 1 · Day 3 — Java + Practice + APT + COMM",
    "tip": "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Conditionals — if/else/else-if, switch-case, nested if",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write programs: grade calculator, day name, simple menu",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Percentages: core formulas, successive %, population problems — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: STAR Method: write answers to 3 behavioral questions",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Conditionals — if/else/else-if, switch-case, nested if",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write programs: grade calculator, day name, simple menu",
        "type": "practice",
        "link": "https://www.w3schools.com/java/",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Percentages: core formulas, successive %, population problems — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "STAR Method: write answers to 3 behavioral questions",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-17",
    "dayNum": 4,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 1 · Day 4 — Java + Practice + APT + COMM",
    "tip": "Debugging is twice as hard as writing code. — Brian Kernighan",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Loops — for, while, do-while, break, continue",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write programs: factorial, Fibonacci, sum 1-N, multiplication table",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Percentages practice: 20 problems on IndiaBix",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Vocabulary: learn 10 professional words, use each in a sentence",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Loops — for, while, do-while, break, continue",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write programs: factorial, Fibonacci, sum 1-N, multiplication table",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Percentages practice: 20 problems on IndiaBix",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: learn 10 professional words, use each in a sentence",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-18",
    "dayNum": 5,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 1 · Day 5 — Java + Practice + APT + COMM",
    "tip": "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Functions — declaration, parameters, return types, overloading",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write 8 functions: power, palindrome check, prime check, sum of digits",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Ratios & Proportions: direct/inverse, partnership — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: GD: pick 1 hot topic, speak 2 min uninterrupted, record yourself",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Functions — declaration, parameters, return types, overloading",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write 8 functions: power, palindrome check, prime check, sum of digits",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Ratios & Proportions: direct/inverse, partnership — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GD: pick 1 hot topic, speak 2 min uninterrupted, record yourself",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-19",
    "dayNum": 6,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 1 · Day 6",
    "tip": "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: HR Q: Tell me about yourself — write 3 versions (60s, 90s, 2min)",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Averages: weighted avg, age-based problems — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "HR Q: Tell me about yourself — write 3 versions (60s, 90s, 2min)",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Averages: weighted avg, age-based problems — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-20",
    "dayNum": 7,
    "week": 1,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 1 · Day 7 — Java + Practice + APT + COMM",
    "tip": "Your GitHub is your resume. Every commit tells a story.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: JDK setup, IntelliJ, Hello World, print, comments",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Java Exercism: Hello World + write 5 print programs",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Mixed Sprint: Number + % + Ratio + Avg — 30 problems timed 30 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Body Language: watch Charisma on Command video + practice power pose",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: JDK setup, IntelliJ, Hello World, print, comments",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Java Exercism: Hello World + write 5 print programs",
        "type": "lecture",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Mixed Sprint: Number + % + Ratio + Avg — 30 problems timed 30 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "Body Language: watch Charisma on Command video + practice power pose",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-04-21",
    "dayNum": 8,
    "week": 2,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 2 · Day 8 — Java + Practice + APT + COMM",
    "tip": "System design is about understanding tradeoffs, not memorizing patterns.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Arrays — sort, search, copy, Arrays class methods",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write: bubble sort, linear search, count occurrences in array",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Time Speed Distance: trains, boats, relative speed — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Pronunciation: 5 tongue twisters + 10-min shadowing a speaker you admire",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Arrays — sort, search, copy, Arrays class methods",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write: bubble sort, linear search, count occurrences in array",
        "type": "practice",
        "link": "https://www.w3schools.com/java/",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Time Speed Distance: trains, boats, relative speed — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "Pronunciation: 5 tongue twisters + 10-min shadowing a speaker you admire",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-22",
    "dayNum": 9,
    "week": 2,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 2 · Day 9 — Java + Practice + APT + COMM",
    "tip": "Data structures are the grammar of programming. Master the grammar.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Strings — String class, charAt, substring, length, indexOf",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write: reverse string, count vowels, remove spaces, string frequency",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: TSD Practice: 20 problems timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: TED: Simon Sinek — Start With Why. Note structure of his speech.",
        "link": "https://www.youtube.com/watch?v=qp0HIF3SfI4"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Strings — String class, charAt, substring, length, indexOf",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write: reverse string, count vowels, remove spaces, string frequency",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "TSD Practice: 20 problems timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "TED: Simon Sinek — Start With Why. Note structure of his speech.",
        "type": "communication",
        "link": "https://www.youtube.com/watch?v=qp0HIF3SfI4",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-23",
    "dayNum": 10,
    "week": 2,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 2 · Day 10 — Java + Practice + APT + COMM",
    "tip": "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: String — equals, compareTo, toUpperCase, split, StringBuilder",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write: palindrome string, anagram check, count words, compress string",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Time & Work: chain rule, pipes & cisterns — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Vocabulary: 10 words from BBC/The Hindu. Etymology for 3 of them.",
        "link": "https://www.merriam-webster.com/word-of-the-day"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: String — equals, compareTo, toUpperCase, split, StringBuilder",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write: palindrome string, anagram check, count words, compress string",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Time & Work: chain rule, pipes & cisterns — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: 10 words from BBC/The Hindu. Etymology for 3 of them.",
        "type": "communication",
        "link": "https://www.merriam-webster.com/word-of-the-day",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-24",
    "dayNum": 11,
    "week": 2,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 2 · Day 11 — Java + Practice + APT + COMM",
    "tip": "React is easy to learn, hard to master. The gap is where jobs are won.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: String problems — practice 8 string programs",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Reverse String, Valid Palindrome, Valid Anagram (Easy — string focus)",
        "link": "https://leetcode.com/tag/string/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Time & Work Practice: 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Mock HR: Strengths & Weaknesses — write 3 each. Practice saying them aloud.",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: String problems — practice 8 string programs",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Reverse String, Valid Palindrome, Valid Anagram (Easy — string focus)",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/string/",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Time & Work Practice: 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Mock HR: Strengths & Weaknesses — write 3 each. Practice saying them aloud.",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-25",
    "dayNum": 12,
    "week": 2,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "⚡ Biweekly Contest Saturday — Week 2 · Day 12",
    "tip": "SQL is 50 years old and still runs the world. Respect it.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "Java: Pattern programs — stars, numbers, triangle (loops+arrays)",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "Write 10 pattern programs. These build loop mastery.",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:15 AM",
        "label": "☕ Break"
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve biweekly contest problems",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: GD: \"AI will replace programmers\" — structure opening, 3 points, conclusion",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Simple & Compound Interest: formulas + 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit",
        "link": "https://github.com/"
      },
      {
        "time": "5:30 PM",
        "label": "🌿 Free evening"
      }
    ],
    "practice": [
      {
        "label": "Java: Pattern programs — stars, numbers, triangle (loops+arrays)",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "Write 10 pattern programs. These build loop mastery.",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "GD: \"AI will replace programmers\" — structure opening, 3 points, conclusion",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Simple & Compound Interest: formulas + 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-26",
    "dayNum": 13,
    "week": 2,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 2 · Day 13",
    "tip": "Open source contribution is the best portfolio. Every PR is proof.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Active Listening: podcast 20 min → summarize in 5 sentences from memory",
        "link": "https://softwareengineeringdaily.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mixed Sprint: TSD + Work + SI/CI — 30 problems timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Active Listening: podcast 20 min → summarize in 5 sentences from memory",
        "type": "communication",
        "link": "https://softwareengineeringdaily.com/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: TSD + Work + SI/CI — 30 problems timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-27",
    "dayNum": 14,
    "week": 2,
    "phase": 1,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 14 · Week 2",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "techQuote": "The gap between good and great is understanding WHY, not just HOW.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-04-28",
    "dayNum": 15,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 3 · Day 15 — Java + Practice + APT + COMM",
    "tip": "Time complexity matters in interviews. Space complexity matters in production.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Constructor — default, parameterized, this keyword",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Create: Employee class with constructors. Book class. Shape class.",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Logical: Blood Relations — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: TED: Amy Cuddy — Body Language. Practice the posture drill.",
        "link": "https://www.youtube.com/watch?v=Ks-_Mh1QhMc"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Constructor — default, parameterized, this keyword",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Create: Employee class with constructors. Book class. Shape class.",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Logical: Blood Relations — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "TED: Amy Cuddy — Body Language. Practice the posture drill.",
        "type": "communication",
        "link": "https://www.youtube.com/watch?v=Ks-_Mh1QhMc",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-29",
    "dayNum": 16,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 3 · Day 16 — Java + Practice + APT + COMM",
    "tip": "Every algorithm you master today is a question you'll ace tomorrow.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Static vs instance, static methods, static variables, final",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Write: Counter class (static count), Constants class, Math utility class",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Logical: Seating Arrangement — linear + circular, 15 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: LinkedIn: set up profile or improve it. Add a post about something you learned.",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Static vs instance, static methods, static variables, final",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Write: Counter class (static count), Constants class, Math utility class",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Logical: Seating Arrangement — linear + circular, 15 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "LinkedIn: set up profile or improve it. Add a post about something you learned.",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-04-30",
    "dayNum": 17,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 3 · Day 17 — Java + Practice + APT + COMM",
    "tip": "Redis is the secret weapon of every high-traffic app. Learn it.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Access modifiers — public, private, protected, default. Getters/Setters",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Refactor: BankAccount with private fields + getters/setters + validation",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Logical: Coding-Decoding — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Vocabulary Quiz: test yourself on last 2 weeks of words",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Access modifiers — public, private, protected, default. Getters/Setters",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Refactor: BankAccount with private fields + getters/setters + validation",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Logical: Coding-Decoding — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Vocabulary Quiz: test yourself on last 2 weeks of words",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-01",
    "dayNum": 18,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 3 · Day 18 — Java + Practice + APT + COMM",
    "tip": "Authentication isn't a feature — it's a foundation.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: toString(), equals(), hashCode() override. Object class.",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Override all 3 in: Student, BankAccount, Product classes",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Logical: Direction Sense + Clock & Calendar — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: GD: \"Work from home vs office\" — argue both sides, 3 min each",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: toString(), equals(), hashCode() override. Object class.",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Override all 3 in: Student, BankAccount, Product classes",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Logical: Direction Sense + Clock & Calendar — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GD: \"Work from home vs office\" — argue both sides, 3 min each",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-02",
    "dayNum": 19,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 3 · Day 19 — Java + Practice + APT + COMM",
    "tip": "The best ML model is the one your team can maintain. Start simple.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Practice day — 3 class designs from scratch (mini projects)",
        "link": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Design: Library system (Book, Member, Library), ATM simulation",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Logical Sprint: mixed 30 problems timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Mock full HR round: 5 questions, timed, recorded",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Practice day — 3 class designs from scratch (mini projects)",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Design: Library system (Book, Member, Library), ATM simulation",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Logical Sprint: mixed 30 problems timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "Mock full HR round: 5 questions, timed, recorded",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-03",
    "dayNum": 20,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 3 · Day 20",
    "tip": "Microservices solve scaling problems. Monoliths solve complexity problems.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Storytelling: describe your best project in 90 seconds. STAR format.",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Verbal Reasoning: Syllogisms — all/some/no patterns — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Storytelling: describe your best project in 90 seconds. STAR format.",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "Verbal Reasoning: Syllogisms — all/some/no patterns — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-04",
    "dayNum": 21,
    "week": 3,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 3 · Day 21 — Java + Practice + APT + COMM",
    "tip": "API design is UX for developers. Make it intuitive.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Why OOP? Class, Object, instance variables, instance methods",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Create: Student class (name, marks, grade). BankAccount class (deposit, withdraw).",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Syllogisms Practice: 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Word of the Day ritual: Merriam-Webster. Use word 5x today.",
        "link": "https://www.merriam-webster.com/word-of-the-day"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "Java extra practice: Exercism 2 more exercises",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "3:00 PM",
        "label": "Read: Java Docs for today's topic. Write notes.",
        "link": "https://www.w3schools.com/java/"
      },
      {
        "time": "4:30 PM",
        "label": "☕ Break. Walk."
      },
      {
        "time": "5:00 PM",
        "label": "Mini project: apply today's Java topic in a small real program",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Why OOP? Class, Object, instance variables, instance methods",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Create: Student class (name, marks, grade). BankAccount class (deposit, withdraw).",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Extra Java: 2 Exercism exercises related to today's topic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "Syllogisms Practice: 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Word of the Day ritual: Merriam-Webster. Use word 5x today.",
        "type": "communication",
        "link": "https://www.merriam-webster.com/word-of-the-day",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-05-05",
    "dayNum": 22,
    "week": 4,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 4 · Day 22 — Java + DSA + APT + COMM",
    "tip": "Recursion is just a function that believes in itself.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Polymorphism — method overriding, @Override, runtime dispatch",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Build: Shape hierarchy (Circle, Rect, Triangle) with area() polymorphic",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Data Interpretation: bar, pie, line graphs — how to read fast",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Cold outreach: write a LinkedIn message to 1 developer you admire. Be specific.",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Arrays — Two Pointer: reverse, sort 0s-1s-2s, check palindrome",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Container With Most Water, Two Sum II, Reverse Array",
        "link": "https://leetcode.com/tag/two-pointers/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Polymorphism — method overriding, @Override, runtime dispatch",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Build: Shape hierarchy (Circle, Rect, Triangle) with area() polymorphic",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Arrays — Two Pointer: reverse, sort 0s-1s-2s, check palindrome",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Container With Most Water, Two Sum II, Reverse Array",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/two-pointers/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Data Interpretation: bar, pie, line graphs — how to read fast",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "Cold outreach: write a LinkedIn message to 1 developer you admire. Be specific.",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-06",
    "dayNum": 23,
    "week": 4,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 4 · Day 23 — Java + DSA + APT + COMM",
    "tip": "Dynamic programming: remember your past solutions to avoid past mistakes.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Arrays — Introduction, complexity analysis, why arrays?",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode Easy Arrays: Find Max, Second Max, Move Zeros, Remove Duplicates",
        "link": "https://leetcode.com/tag/array/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: DI Practice: 2 full DI sets timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: GD: \"Is cryptocurrency the future of money?\" — structured debate",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Arrays — Kadane's algorithm, max subarray sum",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Maximum Subarray, Best Time to Buy Stock",
        "link": "https://leetcode.com/tag/array/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Arrays — Introduction, complexity analysis, why arrays?",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode Easy Arrays: Find Max, Second Max, Move Zeros, Remove Duplicates",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/array/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Arrays — Kadane's algorithm, max subarray sum",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Maximum Subarray, Best Time to Buy Stock",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/array/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DI Practice: 2 full DI sets timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GD: \"Is cryptocurrency the future of money?\" — structured debate",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-07",
    "dayNum": 24,
    "week": 4,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 4 · Day 24 — Java + DSA + APT + COMM",
    "tip": "Binary search: eliminate half, not one at a time.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Arrays — Two pointer: reverse, sort 0s-1s-2s, check palindrome",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Container With Most Water, Two Sum II, Reverse Array",
        "link": "https://leetcode.com/tag/two-pointers/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Permutation & Combination: nPr, nCr, counting principle — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: HR Q: Why this company? Why should we hire you? 3 versions.",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Arrays — prefix sum, product except self",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Product of Array Except Self, Find Pivot Index",
        "link": "https://leetcode.com/tag/array/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Arrays — Two pointer: reverse, sort 0s-1s-2s, check palindrome",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Container With Most Water, Two Sum II, Reverse Array",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/two-pointers/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Arrays — prefix sum, product except self",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Product of Array Except Self, Find Pivot Index",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/array/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Permutation & Combination: nPr, nCr, counting principle — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "HR Q: Why this company? Why should we hire you? 3 versions.",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-08",
    "dayNum": 25,
    "week": 4,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 4 · Day 25 — Java + DSA + APT + COMM",
    "tip": "Graph problems are everywhere — social networks, maps, dependencies. Master them.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Abstraction — abstract class, abstract methods, why abstraction?",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Build: Payment system (abstract pay()), Notification system (abstract send())",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: P&C Practice: 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Elevator pitch: 45-second pitch. Who you are, what you build, what you want.",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Strings — reverse, palindrome, frequency, anagram check",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Valid Anagram, First Unique Char, Reverse String, Longest Common Prefix",
        "link": "https://leetcode.com/tag/string/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Abstraction — abstract class, abstract methods, why abstraction?",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Build: Payment system (abstract pay()), Notification system (abstract send())",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Strings — reverse, palindrome, frequency, anagram check",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Valid Anagram, First Unique Char, Reverse String, Longest Common Prefix",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/string/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "P&C Practice: 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Elevator pitch: 45-second pitch. Who you are, what you build, what you want.",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-09",
    "dayNum": 26,
    "week": 4,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "⚡ Biweekly Contest Saturday — Week 4 · Day 26",
    "tip": "JPMC, PayPal, Zomato — they all started with someone who refused to stop.",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "Java OOP: Interfaces — interface, implements, multiple interfaces, default methods",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "Build: Flyable + Swimmable + Runnable interfaces on animals",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:15 AM",
        "label": "☕ Break"
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve biweekly contest problems",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: TED: talk of your choice. After: speak for 5 min on the topic aloud.",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Probability: classical, conditional, basic events — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit",
        "link": "https://github.com/"
      },
      {
        "time": "5:30 PM",
        "label": "🌿 Free evening"
      }
    ],
    "practice": [
      {
        "label": "Java OOP: Interfaces — interface, implements, multiple interfaces, default methods",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "Build: Flyable + Swimmable + Runnable interfaces on animals",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "TED: talk of your choice. After: speak for 5 min on the topic aloud.",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "Probability: classical, conditional, basic events — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-10",
    "dayNum": 27,
    "week": 4,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 4 · Day 27",
    "tip": "OOP is not just syntax — it is a way of thinking about the world.",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Vocabulary: 15 words. Write a 100-word paragraph using 10 of them.",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mixed Sprint: P&C + Probability — 30 problems timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Vocabulary: 15 words. Write a 100-word paragraph using 10 of them.",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: P&C + Probability — 30 problems timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-11",
    "dayNum": 28,
    "week": 4,
    "phase": 1,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 28 · Week 4",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "techQuote": "Polymorphism: one interface, many forms. The power of abstraction.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-05-12",
    "dayNum": 29,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 5 · Day 29 — Java + DSA + APT + COMM",
    "tip": "Collections Framework is Java's built-in toolkit. Know every tool.",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Strings — character array, ASCII, string manipulation algorithms",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Longest Common Prefix, Count & Say, Roman to Integer (string focus)",
        "link": "https://leetcode.com/tag/string/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Simplification + Approximation — BODMAS, roots — 20 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Mock GD with timer: 5 topics, 2 min each — record all",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Two Pointers practice — 5 medium problems timed",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: Striver A2Z: Two Pointer section — complete 5 problems",
        "link": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Strings — character array, ASCII, string manipulation algorithms",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Longest Common Prefix, Count & Say, Roman to Integer (string focus)",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/string/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Two Pointers practice — 5 medium problems timed",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: Striver A2Z: Two Pointer section — complete 5 problems",
        "type": "leetcode",
        "link": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Simplification + Approximation — BODMAS, roots — 20 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "Mock GD with timer: 5 topics, 2 min each — record all",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-13",
    "dayNum": 30,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 5 · Day 30 — Java + DSA + APT + COMM",
    "tip": "Streams and Lambdas: write less code, mean more.",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Strings — anagram detection, palindrome, frequency counting",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Group Anagrams, Valid Anagram, First Unique Character, Ransom Note",
        "link": "https://leetcode.com/tag/string/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Full Mock Test #1: 60 questions, 60 min, timed — company pattern",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Reddit/Discord: post a thoughtful comment on 3 tech posts",
        "link": "https://www.reddit.com/r/cscareerquestions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Sliding Window — fixed window max sum, intro concept",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Maximum Average Subarray, Max Sum Subarray of size K",
        "link": "https://leetcode.com/tag/sliding-window/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Strings — anagram detection, palindrome, frequency counting",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Group Anagrams, Valid Anagram, First Unique Character, Ransom Note",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/string/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Sliding Window — fixed window max sum, intro concept",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Maximum Average Subarray, Max Sum Subarray of size K",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/sliding-window/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Full Mock Test #1: 60 questions, 60 min, timed — company pattern",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "Reddit/Discord: post a thoughtful comment on 3 tech posts",
        "type": "communication",
        "link": "https://www.reddit.com/r/cscareerquestions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-14",
    "dayNum": 31,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 5 · Day 31 — Java + DSA + APT + COMM",
    "tip": "JWT is stateless auth. Understand the payload before you implement.",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Two Pointers — pattern deep dive, when to use, approach",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Three Sum, Four Sum, Trapping Rain Water (two pointer), Valid Palindrome II",
        "link": "https://leetcode.com/tag/two-pointers/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Review Mock #1: note wrong answers, identify 3 weak areas",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: HR Q: Tell me a time you failed. Growth mindset answer.",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Sliding Window — variable window, longest without repeat",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Longest Substring Without Repeat, Fruit Into Baskets",
        "link": "https://leetcode.com/tag/sliding-window/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Two Pointers — pattern deep dive, when to use, approach",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Three Sum, Four Sum, Trapping Rain Water (two pointer), Valid Palindrome II",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/two-pointers/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Sliding Window — variable window, longest without repeat",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Longest Substring Without Repeat, Fruit Into Baskets",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/sliding-window/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Review Mock #1: note wrong answers, identify 3 weak areas",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "HR Q: Tell me a time you failed. Growth mindset answer.",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-15",
    "dayNum": 32,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 5 · Day 32 — Java + DSA + APT + COMM",
    "tip": "Docker: it works on my machine + container = it works everywhere.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Enums, Wrapper classes, autoboxing/unboxing, Scanner, Math class",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Practice: use all wrapper methods, write enum-based day/month programs",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Geometry: area, perimeter, volume of all shapes — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Write a dev.to blog post intro about today's tech topic (100 words)",
        "link": "https://dev.to/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Sliding Window hard — Minimum Window Substring, Permutation in String",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Permutation in String, Minimum Window Substring",
        "link": "https://leetcode.com/tag/sliding-window/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Enums, Wrapper classes, autoboxing/unboxing, Scanner, Math class",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Practice: use all wrapper methods, write enum-based day/month programs",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Sliding Window hard — Minimum Window Substring, Permutation in String",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Permutation in String, Minimum Window Substring",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/sliding-window/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Geometry: area, perimeter, volume of all shapes — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "Write a dev.to blog post intro about today's tech topic (100 words)",
        "type": "communication",
        "link": "https://dev.to/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-16",
    "dayNum": 33,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 5 · Day 33 — Java + DSA + APT + COMM",
    "tip": "PostgreSQL: when data integrity is non-negotiable.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Sliding Window — fixed window, variable window, when to use",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Max sum subarray of size K, Longest substring without repeat",
        "link": "https://leetcode.com/tag/sliding-window/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Number Theory: HCF/LCM advanced + quadratic equations — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Charisma: watch 1 video on storytelling technique + practice 5 min",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Hashing — frequency map, subarray sum = K, longest subarray",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Subarray Sum Equals K, Contiguous Array, Longest Subarray",
        "link": "https://leetcode.com/tag/array/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Sliding Window — fixed window, variable window, when to use",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Max sum subarray of size K, Longest substring without repeat",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/sliding-window/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Hashing — frequency map, subarray sum = K, longest subarray",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Subarray Sum Equals K, Contiguous Array, Longest Subarray",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/array/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Number Theory: HCF/LCM advanced + quadratic equations — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Charisma: watch 1 video on storytelling technique + practice 5 min",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-17",
    "dayNum": 34,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 5 · Day 34",
    "tip": "MongoDB flexibility is a feature — use it with discipline.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: GD: \"Remote work vs in-office for tech companies\"",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mixed Sprint: all topics — 40 problems, 40 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "GD: \"Remote work vs in-office for tech companies\"",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: all topics — 40 problems, 40 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-18",
    "dayNum": 35,
    "week": 5,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 5 · Day 35 — Java + DSA + APT + COMM",
    "tip": "Neural networks learn by failing and adjusting. So should you.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java OOP: Interface vs Abstract Class — when to use which, real examples",
        "link": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Refactor previous projects: choose abstract vs interface properly",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Full Mock Test #2: 80 questions, 80 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Full mock interview: HR (20 min) + project explanation (10 min) — record",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Two Pointers deep dive — when, why, visual examples",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Three Sum, Four Sum, Trapping Rain Water, Valid Palindrome II",
        "link": "https://leetcode.com/tag/two-pointers/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java OOP: Interface vs Abstract Class — when to use which, real examples",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Refactor previous projects: choose abstract vs interface properly",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Two Pointers deep dive — when, why, visual examples",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Three Sum, Four Sum, Trapping Rain Water, Valid Palindrome II",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/two-pointers/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Full Mock Test #2: 80 questions, 80 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "Full mock interview: HR (20 min) + project explanation (10 min) — record",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-05-19",
    "dayNum": 36,
    "week": 6,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 6 · Day 36 — Java + DSA + APT + COMM",
    "tip": "Python is the lingua franca of AI. Every ML model starts with import.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Collections — HashMap, HashSet, TreeMap, LinkedHashMap",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Practice: word frequency counter, anagram grouper, unique elements with Set",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Critical Reasoning: argument strengthening/weakening — 15 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: TED talk: note the exact hook used in first 30 seconds. Rewrite your own intro with same hook technique.",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: LinkedList — cycle detection, merge sorted, remove Nth from end",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Linked List Cycle, Merge Two Sorted, Remove Nth Node",
        "link": "https://leetcode.com/tag/linked-list/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Collections — HashMap, HashSet, TreeMap, LinkedHashMap",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Practice: word frequency counter, anagram grouper, unique elements with Set",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: LinkedList — cycle detection, merge sorted, remove Nth from end",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Linked List Cycle, Merge Two Sorted, Remove Nth Node",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/linked-list/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Critical Reasoning: argument strengthening/weakening — 15 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "TED talk: note the exact hook used in first 30 seconds. Rewrite your own intro with same hook technique.",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-20",
    "dayNum": 37,
    "week": 6,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 6 · Day 37 — Java + DSA + APT + COMM",
    "tip": "Tailwind utility-first means you think in design, not CSS files.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Prefix Sum / Hash Map patterns — subarray sum equals K, longest K-sum",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Subarray Sum Equals K, Contiguous Array, Find Pivot Index",
        "link": "https://leetcode.com/tag/array/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Puzzles: 10 classic puzzles from IndiaBix — logical thinking",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Vocabulary: words from an Economist/HBR article — 10 words",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: LinkedList — LRU Cache concept, add two numbers, palindrome LL",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Add Two Numbers, Palindrome LL, Reverse Nodes in k-Group",
        "link": "https://leetcode.com/tag/linked-list/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Prefix Sum / Hash Map patterns — subarray sum equals K, longest K-sum",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Subarray Sum Equals K, Contiguous Array, Find Pivot Index",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/array/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: LinkedList — LRU Cache concept, add two numbers, palindrome LL",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Add Two Numbers, Palindrome LL, Reverse Nodes in k-Group",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/linked-list/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Puzzles: 10 classic puzzles from IndiaBix — logical thinking",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: words from an Economist/HBR article — 10 words",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-21",
    "dayNum": 38,
    "week": 6,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 6 · Day 38 — Java + DSA + APT + COMM",
    "tip": "NextJS: SSR means your page loads before the JS does. That's real UX.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Collections — Stack, Queue, PriorityQueue, Deque in Java",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Practice: implement stack with ArrayList, BFS with Queue, PriorityQueue sorting",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: DI: table + mixed graph — 3 full sets timed",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: GD: pick a controversial tech topic, research both sides, present 3 min each",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Stack — valid parentheses, min stack, next greater element",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode Stack: Valid Parentheses, Min Stack, Next Greater Element I",
        "link": "https://leetcode.com/tag/stack/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Collections — Stack, Queue, PriorityQueue, Deque in Java",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Practice: implement stack with ArrayList, BFS with Queue, PriorityQueue sorting",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Stack — valid parentheses, min stack, next greater element",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode Stack: Valid Parentheses, Min Stack, Next Greater Element I",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/stack/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DI: table + mixed graph — 3 full sets timed",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GD: pick a controversial tech topic, research both sides, present 3 min each",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-22",
    "dayNum": 39,
    "week": 6,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 6 · Day 39 — Java + DSA + APT + COMM",
    "tip": "Kafka: when your monolith needs to breathe, queues are the lungs.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: LinkedList — singly LL: insert head/tail/pos, delete, traversal",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Reverse Linked List, Middle of LL, Remove Nth Node (LL easy set)",
        "link": "https://leetcode.com/tag/linked-list/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Verbal Ability: Para Jumbles + sentence correction — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Phase 1 comm final: record your best 5-min self introduction. This is your gold standard.",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Stack — monotonic stack, Daily Temperatures, Largest Rectangle",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode Stack Hard: Daily Temperatures, Largest Rectangle, Asteroid Collision",
        "link": "https://leetcode.com/tag/stack/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: LinkedList — singly LL: insert head/tail/pos, delete, traversal",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Reverse Linked List, Middle of LL, Remove Nth Node (LL easy set)",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/linked-list/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Stack — monotonic stack, Daily Temperatures, Largest Rectangle",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode Stack Hard: Daily Temperatures, Largest Rectangle, Asteroid Collision",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/stack/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Verbal Ability: Para Jumbles + sentence correction — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Phase 1 comm final: record your best 5-min self introduction. This is your gold standard.",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-23",
    "dayNum": 40,
    "week": 6,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "⚡ Biweekly Contest Saturday — Week 6 · Day 40",
    "tip": "SOLID principles are not rules — they are engineering wisdom.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: LinkedList — cycle detection (Floyd), merge sorted, palindrome LL",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "LeetCode: Linked List Cycle, Merge Two Sorted Lists, Palindrome LL",
        "link": "https://leetcode.com/tag/linked-list/"
      },
      {
        "time": "8:15 AM",
        "label": "☕ Break"
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve biweekly contest problems",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Mirror exercise: 2-min self introduction. Record. Watch back. Improve.",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Phase 1 Final Mock: 90 questions, 90 min — full simulation",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit",
        "link": "https://github.com/"
      },
      {
        "time": "5:30 PM",
        "label": "🌿 Free evening"
      }
    ],
    "practice": [
      {
        "label": "DSA: LinkedList — cycle detection (Floyd), merge sorted, palindrome LL",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "LeetCode: Linked List Cycle, Merge Two Sorted Lists, Palindrome LL",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/linked-list/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Mirror exercise: 2-min self introduction. Record. Watch back. Improve.",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "Phase 1 Final Mock: 90 questions, 90 min — full simulation",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-24",
    "dayNum": 41,
    "week": 6,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 6 · Day 41",
    "tip": "The best error message is the one that never shows up.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: TED Talk: watch 1 talk, note 3 rhetorical techniques used",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Number System: types, divisibility rules, LCM, HCF — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "TED Talk: watch 1 talk, note 3 rhetorical techniques used",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "Number System: types, divisibility rules, LCM, HCF — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-25",
    "dayNum": 42,
    "week": 6,
    "phase": 1,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 42 · Week 6",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "techQuote": "Write tests before features. Your future self will thank you.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-05-26",
    "dayNum": 43,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 7 · Day 43 — Java + DSA + APT + COMM",
    "tip": "Pair programming is not two people on one keyboard — it's two brains on one problem.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Generics — generic class, generic methods, bounded type, wildcard",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Build: generic Pair<T,U>, generic Stack<T>, generic sortAndPrint<T extends Comparable>",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Percentages: core formulas, successive %, population problems — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Vocabulary: learn 10 professional words, use each in a sentence",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Queue + BFS — Number of Islands, Rotting Oranges intro",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode BFS: Number of Islands, Rotting Oranges, 01 Matrix",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:00 PM",
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems",
        "link": "https://sqlzoo.net/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Generics — generic class, generic methods, bounded type, wildcard",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Build: generic Pair<T,U>, generic Stack<T>, generic sortAndPrint<T extends Comparable>",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Queue + BFS — Number of Islands, Rotting Oranges intro",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode BFS: Number of Islands, Rotting Oranges, 01 Matrix",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Percentages: core formulas, successive %, population problems — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: learn 10 professional words, use each in a sentence",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      },
      {
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems",
        "type": "practice",
        "link": "https://sqlzoo.net/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-27",
    "dayNum": 44,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 7 · Day 44 — Java + DSA + APT + COMM",
    "tip": "Code reviews are not criticism — they are collaboration.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: DSA: Queue — BFS intro, implement Queue, Sliding Window Max (deque)",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: LeetCode: Implement Queue using Stacks, Sliding Window Maximum, Number of Recent Calls",
        "link": "https://leetcode.com/tag/queue/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Percentages practice: 20 problems on IndiaBix",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: GD: pick 1 hot topic, speak 2 min uninterrupted, record yourself",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Binary Search — classic, lower bound, upper bound templates",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode BS Easy: Binary Search, First Bad Version, Search Insert Position",
        "link": "https://leetcode.com/tag/binary-search/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:00 PM",
        "label": "SQL: JOINs — INNER/LEFT/RIGHT — 15 HackerRank problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: DSA: Queue — BFS intro, implement Queue, Sliding Window Max (deque)",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: LeetCode: Implement Queue using Stacks, Sliding Window Maximum, Number of Recent Calls",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/queue/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Binary Search — classic, lower bound, upper bound templates",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode BS Easy: Binary Search, First Bad Version, Search Insert Position",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/binary-search/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Percentages practice: 20 problems on IndiaBix",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GD: pick 1 hot topic, speak 2 min uninterrupted, record yourself",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      },
      {
        "label": "SQL: JOINs — INNER/LEFT/RIGHT — 15 HackerRank problems",
        "type": "practice",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-28",
    "dayNum": 45,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 7 · Day 45 — Java + DSA + APT + COMM",
    "tip": "The internet runs on open source. Contribute back.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Streams — filter, map, reduce, collect, sorted, distinct, Collectors",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Solve 10 collection problems using Streams API (no loops allowed)",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Ratios & Proportions: direct/inverse, partnership — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: HR Q: Tell me about yourself — write 3 versions (60s, 90s, 2min)",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Binary Search on answer — Koko Eating Bananas, Find in Rotated",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Search Rotated, Find Peak, Min in Rotated",
        "link": "https://leetcode.com/tag/binary-search/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:00 PM",
        "label": "Frontend HTML: structure, semantic tags, forms, links, tables",
        "link": "https://www.youtube.com/watch?v=G3e-cpL7ofc"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Streams — filter, map, reduce, collect, sorted, distinct, Collectors",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Solve 10 collection problems using Streams API (no loops allowed)",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Binary Search on answer — Koko Eating Bananas, Find in Rotated",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Search Rotated, Find Peak, Min in Rotated",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/binary-search/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Ratios & Proportions: direct/inverse, partnership — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "HR Q: Tell me about yourself — write 3 versions (60s, 90s, 2min)",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      },
      {
        "label": "Frontend HTML: structure, semantic tags, forms, links, tables",
        "type": "practice",
        "link": "https://www.youtube.com/watch?v=G3e-cpL7ofc",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-29",
    "dayNum": 46,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 7 · Day 46 — Java + DSA + APT + COMM",
    "tip": "One meaningful PR is worth more than 100 lines of unused code.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Lambdas, Functional Interfaces — Predicate, Function, Consumer, Supplier",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Refactor: convert all anonymous inner class code to lambdas in all past projects",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Averages: weighted avg, age-based problems — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Body Language: watch Charisma on Command video + practice power pose",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Recursion — base case, recursive tree, factorial, fibonacci",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: Practice: write 8 recursive programs. Then solve: LeetCode Power of Two, Fibonacci.",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:00 PM",
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems",
        "link": "https://sqlzoo.net/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Lambdas, Functional Interfaces — Predicate, Function, Consumer, Supplier",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Refactor: convert all anonymous inner class code to lambdas in all past projects",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Recursion — base case, recursive tree, factorial, fibonacci",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: Practice: write 8 recursive programs. Then solve: LeetCode Power of Two, Fibonacci.",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Averages: weighted avg, age-based problems — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Body Language: watch Charisma on Command video + practice power pose",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      },
      {
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems",
        "type": "practice",
        "link": "https://sqlzoo.net/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-30",
    "dayNum": 47,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 7 · Day 47 — Java + DSA + APT + COMM",
    "tip": "Study the company's tech stack before the interview. It shows you care.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: SQL: Why SQL? Relational DB, tables, rows, columns, primary key, foreign key",
        "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: SQLZoo: SELECT basics — 10 problems",
        "link": "https://sqlzoo.net/"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: Mixed Sprint: Number + % + Ratio + Avg — 30 problems timed 30 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Pronunciation: 5 tongue twisters + 10-min shadowing a speaker you admire",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Recursion — subsets and permutations intro",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode: Subsets, Permutations (understand recursion tree)",
        "link": "https://leetcode.com/tag/backtracking/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:00 PM",
        "label": "SQL: JOINs — INNER/LEFT/RIGHT — 15 HackerRank problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: SQL: Why SQL? Relational DB, tables, rows, columns, primary key, foreign key",
        "type": "lecture",
        "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: SQLZoo: SELECT basics — 10 problems",
        "type": "practice",
        "link": "https://sqlzoo.net/",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Recursion — subsets and permutations intro",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode: Subsets, Permutations (understand recursion tree)",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/backtracking/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Mixed Sprint: Number + % + Ratio + Avg — 30 problems timed 30 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "Pronunciation: 5 tongue twisters + 10-min shadowing a speaker you admire",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      },
      {
        "label": "SQL: JOINs — INNER/LEFT/RIGHT — 15 HackerRank problems",
        "type": "practice",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-05-31",
    "dayNum": 48,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 7 · Day 48",
    "tip": "Your localhost is a garden. Keep it clean.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "7:30 AM",
        "label": "Light breakfast. Review yesterday's code for 20 min."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "10:45 AM",
        "label": "Upsolve: understand every problem you couldn't solve",
        "link": "https://neetcode.io/roadmap"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch + 30-min walk"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: TED: Simon Sinek — Start With Why. Note structure of his speech.",
        "link": "https://www.youtube.com/watch?v=qp0HIF3SfI4"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Time Speed Distance: trains, boats, relative speed — 20 problems",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub commit: push this week's code. Write a README line.",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "Write weekly reflection: what I learned, what was hard, plan for next week."
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Free evening — family, walk, recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all 4 problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: understand every unsolved problem (watch editorial)",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "TED: Simon Sinek — Start With Why. Note structure of his speech.",
        "type": "communication",
        "link": "https://www.youtube.com/watch?v=qp0HIF3SfI4",
        "needsVerify": false
      },
      {
        "label": "Time Speed Distance: trains, boats, relative speed — 20 problems",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-01",
    "dayNum": 49,
    "week": 7,
    "phase": 1,
    "isBreak": false,
    "isSunday": false,
    "title": "📚 Week 7 · Day 49 — Java + DSA + APT + COMM",
    "tip": "Latency is the enemy of UX. Cache aggressively, measure always.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "5:30 AM",
        "label": "Wake up. Cold water. 5-min stretch. No phone for 30 min."
      },
      {
        "time": "6:00 AM",
        "label": "📺 Java Lecture: Java: Exception Handling — try/catch/finally, throw, throws, custom exceptions",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
      },
      {
        "time": "7:15 AM",
        "label": "💻 Java Practice: Add exception handling to BankAccount, Library system. Write custom exceptions.",
        "link": "https://exercism.org/tracks/java"
      },
      {
        "time": "8:30 AM",
        "label": "☕ Breakfast — no screens. Eat properly."
      },
      {
        "time": "9:00 AM",
        "label": "🧮 Aptitude: TSD Practice: 20 problems timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "10:15 AM",
        "label": "🎤 Communication: Vocabulary: 10 words from BBC/The Hindu. Etymology for 3 of them.",
        "link": "https://www.merriam-webster.com/word-of-the-day"
      },
      {
        "time": "11:30 AM",
        "label": "☕ Short break — walk 10 min"
      },
      {
        "time": "12:00 PM",
        "label": "🍽️ Lunch — proper meal, 30 min break"
      },
      {
        "time": "1:30 PM",
        "label": "📺 DSA Theory: DSA: Queue — implement, BFS intro, sliding window max with deque",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "3:00 PM",
        "label": "💻 DSA Practice: LeetCode Queue: Implement Queue with Stacks, Sliding Window Max",
        "link": "https://leetcode.com/tag/queue/"
      },
      {
        "time": "5:00 PM",
        "label": "☕ Tea break. 15-min outdoor walk."
      },
      {
        "time": "5:30 PM",
        "label": "🔗 LeetCode Daily Problem (related to today's topic)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "6:30 PM",
        "label": "📤 GitHub commit: push today's code",
        "link": "https://github.com/"
      },
      {
        "time": "7:00 PM",
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems",
        "link": "https://sqlzoo.net/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Family time / dinner. No study. Real human time."
      },
      {
        "time": "9:00 PM",
        "label": "Review today: write 3 things learned. Set tomorrow's 1 priority. Sleep by 10."
      }
    ],
    "practice": [
      {
        "label": "📺 Java Lecture: Java: Exception Handling — try/catch/finally, throw, throws, custom exceptions",
        "type": "lecture",
        "link": "https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
        "needsVerify": false
      },
      {
        "label": "💻 Java Practice: Add exception handling to BankAccount, Library system. Write custom exceptions.",
        "type": "practice",
        "link": "https://exercism.org/tracks/java",
        "needsVerify": true
      },
      {
        "label": "📺 DSA Theory: DSA: Queue — implement, BFS intro, sliding window max with deque",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "💻 DSA Practice: LeetCode Queue: Implement Queue with Stacks, Sliding Window Max",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/queue/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "TSD Practice: 20 problems timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: 10 words from BBC/The Hindu. Etymology for 3 of them.",
        "type": "communication",
        "link": "https://www.merriam-webster.com/word-of-the-day",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit — push code or notes",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      },
      {
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems",
        "type": "practice",
        "link": "https://sqlzoo.net/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-06-02",
    "dayNum": 50,
    "week": 8,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 8 · Day 50 | Backend",
    "tip": "You don't rise to your goals. You fall to your systems.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Binary Search: Search Rotated Sorted Array, Find Peak Element",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode BS medium: Search Rotated, Find Peak, Find Min in Rotated",
        "link": "https://leetcode.com/tag/binary-search/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Binary Search: Search Rotated Sorted Array, Find Peak Element",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode BS medium: Search Rotated, Find Peak, Find Min in Rotated",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/binary-search/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-03",
    "dayNum": 51,
    "week": 8,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 8 · Day 51 | Database",
    "tip": "Make it work, make it right, make it fast. — Kent Beck",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Binary Search on Answer: Koko Eating Bananas, Min Days Bouquets",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Koko Eating Bananas, Capacity to Ship, Split Array Largest Sum",
        "link": "https://leetcode.com/tag/binary-search/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 HackerRank problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Binary Search on Answer: Koko Eating Bananas, Min Days Bouquets",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Koko Eating Bananas, Capacity to Ship, Split Array Largest Sum",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/binary-search/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 HackerRank problems",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-04",
    "dayNum": 52,
    "week": 8,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 8 · Day 52 | System Design / ML",
    "tip": "First, solve the problem. Then, write the code. — John Johnson",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Recursion: base case, recursive tree, tail recursion, memoize intro",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: Write: power(x,n), sum of digits, reverse array — recursive",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Recursion: base case, recursive tree, tail recursion, memoize intro",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: Write: power(x,n), sum of digits, reverse array — recursive",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-05",
    "dayNum": 53,
    "week": 8,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 8 · Day 53 | ML / Projects",
    "tip": "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Recursion: subsets, permutations — build recursion tree visually",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Subsets, Permutations, Combinations (backtracking-lite)",
        "link": "https://leetcode.com/tag/backtracking/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Recursion: subsets, permutations — build recursion tree visually",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Subsets, Permutations, Combinations (backtracking-lite)",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/backtracking/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-06",
    "dayNum": 54,
    "week": 8,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 8 · Day 54",
    "tip": "Debugging is twice as hard as writing code. — Brian Kernighan",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: Binary Search: classic template, lower/upper bound",
        "link": "https://leetcode.com/tag/binary-search/"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode BS: Binary Search, First Bad Version, Search Insert Position",
        "link": "https://leetcode.com/tag/binary-search/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "CSS: responsive design, media queries, CSS variables, transitions",
        "link": "https://www.youtube.com/watch?v=G3e-cpL7ofc"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: JOINs — INNER/LEFT/RIGHT/FULL — 15 problems",
        "link": "https://sqlzoo.net/"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Review mock: analyse wrong answers, note error patterns",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: Binary Search: classic template, lower/upper bound",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/binary-search/",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode BS: Binary Search, First Bad Version, Search Insert Position",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/binary-search/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "CSS: responsive design, media queries, CSS variables, transitions",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=G3e-cpL7ofc",
        "needsVerify": true
      },
      {
        "label": "SQL: JOINs — INNER/LEFT/RIGHT/FULL — 15 problems",
        "type": "lecture",
        "link": "https://sqlzoo.net/",
        "needsVerify": false
      },
      {
        "label": "HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Review mock: analyse wrong answers, note error patterns",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-07",
    "dayNum": 55,
    "week": 8,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 8 · Day 55",
    "tip": "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Cold outreach: message 2 professionals with thoughtful, specific notes",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mental Math speed drill: 10 min × 3 rounds",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Cold outreach: message 2 professionals with thoughtful, specific notes",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Mental Math speed drill: 10 min × 3 rounds",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-08",
    "dayNum": 56,
    "week": 8,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 56 · Week 8",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "techQuote": "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-06-09",
    "dayNum": 57,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 9 · Day 57 | Backend",
    "tip": "Your GitHub is your resume. Every commit tells a story.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Trees: Height, Diameter, Max Path Sum, Level Order Traversal",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Trees Medium: Diameter, Max Path Sum, Level Order",
        "link": "https://leetcode.com/tag/tree/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Trees: Height, Diameter, Max Path Sum, Level Order Traversal",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Trees Medium: Diameter, Max Path Sum, Level Order",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/tree/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-10",
    "dayNum": 58,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 9 · Day 58 | Database",
    "tip": "System design is about understanding tradeoffs, not memorizing patterns.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Trees: LCA, Path Sum II, Serialize/Deserialize, Zigzag Level Order",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: LCA, Path Sum, Serialize Binary Tree, Zigzag Level Order",
        "link": "https://leetcode.com/tag/tree/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: JOINs — INNER/LEFT/RIGHT/FULL — 15 problems",
        "link": "https://sqlzoo.net/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Trees: LCA, Path Sum II, Serialize/Deserialize, Zigzag Level Order",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: LCA, Path Sum, Serialize Binary Tree, Zigzag Level Order",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/tree/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: JOINs — INNER/LEFT/RIGHT/FULL — 15 problems",
        "type": "build",
        "link": "https://sqlzoo.net/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-11",
    "dayNum": 59,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 9 · Day 59 | System Design / ML",
    "tip": "Data structures are the grammar of programming. Master the grammar.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: BST: properties, insert/delete/search, validate BST, Kth Smallest",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode BST: Validate BST, Kth Smallest, Convert Sorted Array to BST",
        "link": "https://leetcode.com/tag/tree/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: BST: properties, insert/delete/search, validate BST, Kth Smallest",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode BST: Validate BST, Kth Smallest, Convert Sorted Array to BST",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/tree/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-12",
    "dayNum": 60,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 9 · Day 60 | ML / Projects",
    "tip": "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Trees: Right View, Left View, Boundary Traversal, Vertical Order",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Binary Tree Right Side View, Vertical Order, Top View",
        "link": "https://leetcode.com/tag/tree/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Trees: Right View, Left View, Boundary Traversal, Vertical Order",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Binary Tree Right Side View, Vertical Order, Top View",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/tree/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-13",
    "dayNum": 61,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 9 · Day 61",
    "tip": "React is easy to learn, hard to master. The gap is where jobs are won.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: Trees: Binary Tree — node, insert, BFS level-order, DFS in/pre/post",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode Trees Easy: Max Depth, Symmetric Tree, Invert Binary Tree",
        "link": "https://leetcode.com/tag/tree/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Tailwind: flex, grid, spacing, typography, colors — rebuild page in Tailwind",
        "link": "https://tailwindcss.com/docs"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: GROUP BY, HAVING, COUNT, SUM, AVG — 15 problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Full Aptitude Mock: 60 questions, 60 min — timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: Trees: Binary Tree — node, insert, BFS level-order, DFS in/pre/post",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Trees Easy: Max Depth, Symmetric Tree, Invert Binary Tree",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/tree/",
        "needsVerify": true
      },
      {
        "label": "Tailwind: flex, grid, spacing, typography, colors — rebuild page in Tailwind",
        "type": "build",
        "link": "https://tailwindcss.com/docs",
        "needsVerify": true
      },
      {
        "label": "SQL: GROUP BY, HAVING, COUNT, SUM, AVG — 15 problems",
        "type": "lecture",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": false
      },
      {
        "label": "Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude Mock: 60 questions, 60 min — timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-14",
    "dayNum": 62,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 9 · Day 62",
    "tip": "SQL is 50 years old and still runs the world. Respect it.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: TSD + Work Sprint: 25 problems, 80% accuracy target",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "TSD + Work Sprint: 25 problems, 80% accuracy target",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-15",
    "dayNum": 63,
    "week": 9,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 9 · Day 63 | Frontend",
    "tip": "Open source contribution is the best portfolio. Every PR is proof.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Trees: Binary Tree — node, insert, BFS level-order, DFS in/pre/post",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Trees Easy: Max Depth, Symmetric Tree, Invert Binary Tree",
        "link": "https://leetcode.com/tag/tree/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Tailwind CSS: setup with HTML, utility classes, responsive prefixes",
        "link": "https://www.youtube.com/watch?v=UBOj6rqRUME"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Trees: Binary Tree — node, insert, BFS level-order, DFS in/pre/post",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Trees Easy: Max Depth, Symmetric Tree, Invert Binary Tree",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/tree/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Tailwind CSS: setup with HTML, utility classes, responsive prefixes",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=UBOj6rqRUME",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-06-16",
    "dayNum": 64,
    "week": 10,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 10 · Day 64 | Backend",
    "tip": "The gap between good and great is understanding WHY, not just HOW.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Heaps: Top K Frequent, Merge K Sorted Lists, Find Median Stream",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Heap Hard: Merge K Sorted, Find Median from Stream, Task Scheduler",
        "link": "https://leetcode.com/tag/heap-priority-queue/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Heaps: Top K Frequent, Merge K Sorted Lists, Find Median Stream",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Heap Hard: Merge K Sorted, Find Median from Stream, Task Scheduler",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/heap-priority-queue/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-17",
    "dayNum": 65,
    "week": 10,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 10 · Day 65 | Database",
    "tip": "Time complexity matters in interviews. Space complexity matters in production.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Greedy: Activity Selection, Jump Game, Gas Station, Assign Cookies",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Greedy: Jump Game, Jump Game II, Gas Station, Candy",
        "link": "https://leetcode.com/tag/greedy/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: GROUP BY, HAVING, COUNT, SUM, AVG — 15 problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Greedy: Activity Selection, Jump Game, Gas Station, Assign Cookies",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Greedy: Jump Game, Jump Game II, Gas Station, Candy",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/greedy/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: GROUP BY, HAVING, COUNT, SUM, AVG — 15 problems",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-18",
    "dayNum": 66,
    "week": 10,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 10 · Day 66 | System Design / ML",
    "tip": "Every algorithm you master today is a question you'll ace tomorrow.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Greedy: N-meetings, Fractional Knapsack, Minimum Platforms, Job Sequencing",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: Striver Sheet: Greedy section — complete 6 problems",
        "link": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Greedy: N-meetings, Fractional Knapsack, Minimum Platforms, Job Sequencing",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: Striver Sheet: Greedy section — complete 6 problems",
        "type": "leetcode",
        "link": "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-19",
    "dayNum": 67,
    "week": 10,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 10 · Day 67 | ML / Projects",
    "tip": "Redis is the secret weapon of every high-traffic app. Learn it.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Backtracking deep dive: N-Queens, Sudoku Solver, Word Search",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Backtracking Hard: N-Queens, Sudoku Solver, Word Search",
        "link": "https://leetcode.com/tag/backtracking/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Backtracking deep dive: N-Queens, Sudoku Solver, Word Search",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Backtracking Hard: N-Queens, Sudoku Solver, Word Search",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/backtracking/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-20",
    "dayNum": 68,
    "week": 10,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 10 · Day 68",
    "tip": "Authentication isn't a feature — it's a foundation.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: Heaps: Max/Min Heap, heapify, heap sort, PriorityQueue in Java",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode Heap Easy-Medium: Kth Largest, Last Stone Weight, Sort K Sorted",
        "link": "https://leetcode.com/tag/heap-priority-queue/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "React: useState hook — counter, toggle, form input",
        "link": "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: Subqueries, nested SELECT, EXISTS — 15 problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Debate: \"Microservices vs Monolith\" — argue both sides",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Full Mock: 80 questions, 80 min — company simulation",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: Heaps: Max/Min Heap, heapify, heap sort, PriorityQueue in Java",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Heap Easy-Medium: Kth Largest, Last Stone Weight, Sort K Sorted",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/heap-priority-queue/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "React: useState hook — counter, toggle, form input",
        "type": "build",
        "link": "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
        "needsVerify": true
      },
      {
        "label": "SQL: Subqueries, nested SELECT, EXISTS — 15 problems",
        "type": "lecture",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": false
      },
      {
        "label": "Debate: \"Microservices vs Monolith\" — argue both sides",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Full Mock: 80 questions, 80 min — company simulation",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-21",
    "dayNum": 69,
    "week": 10,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 10 · Day 69",
    "tip": "The best ML model is the one your team can maintain. Start simple.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Review mock: analyse wrong answers, note error patterns",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Review mock: analyse wrong answers, note error patterns",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-22",
    "dayNum": 70,
    "week": 10,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 70 · Week 10",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "techQuote": "Microservices solve scaling problems. Monoliths solve complexity problems.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-06-23",
    "dayNum": 71,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 11 · Day 71 | Backend",
    "tip": "API design is UX for developers. Make it intuitive.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Graphs: Topological Sort — Kahn's BFS + DFS approach",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Course Schedule, Course Schedule II, Alien Dictionary",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Graphs: Topological Sort — Kahn's BFS + DFS approach",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Course Schedule, Course Schedule II, Alien Dictionary",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-24",
    "dayNum": 72,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 11 · Day 72 | Database",
    "tip": "Recursion is just a function that believes in itself.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Graphs: Dijkstra shortest path, Bellman-Ford",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Network Delay Time, Cheapest Flights, Path with Min Effort",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: Subqueries, nested SELECT, EXISTS — 15 problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Graphs: Dijkstra shortest path, Bellman-Ford",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Network Delay Time, Cheapest Flights, Path with Min Effort",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: Subqueries, nested SELECT, EXISTS — 15 problems",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-25",
    "dayNum": 73,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 11 · Day 73 | System Design / ML",
    "tip": "Dynamic programming: remember your past solutions to avoid past mistakes.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Graphs: Union Find (DSU) — islands merge, redundant connections",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Redundant Connection, Number of Provinces, Graph Valid Tree",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Graphs: Union Find (DSU) — islands merge, redundant connections",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Redundant Connection, Number of Provinces, Graph Valid Tree",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-26",
    "dayNum": 74,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 11 · Day 74 | ML / Projects",
    "tip": "Binary search: eliminate half, not one at a time.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Graphs: MST (Prim/Kruskal), Bridges, Articulation Points",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Min Cost to Connect Points, Critical Connections",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Graphs: MST (Prim/Kruskal), Bridges, Articulation Points",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Min Cost to Connect Points, Critical Connections",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-27",
    "dayNum": 75,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 11 · Day 75",
    "tip": "Graph problems are everywhere — social networks, maps, dependencies. Master them.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: Graphs: representation, BFS, DFS — islands, connected components",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode Graphs: Number of Islands, Flood Fill, Clone Graph",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "React: Lists, keys, conditional rendering, event handlers",
        "link": "https://react.dev/"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: Window functions — ROW_NUMBER, RANK, LAG, LEAD — 10 problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: HR final round simulation: video, 30 min, all common HR questions",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Full Aptitude + Reasoning: 90 questions, 90 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: Graphs: representation, BFS, DFS — islands, connected components",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Graphs: Number of Islands, Flood Fill, Clone Graph",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "React: Lists, keys, conditional rendering, event handlers",
        "type": "build",
        "link": "https://react.dev/",
        "needsVerify": true
      },
      {
        "label": "SQL: Window functions — ROW_NUMBER, RANK, LAG, LEAD — 10 problems",
        "type": "lecture",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": false
      },
      {
        "label": "HR final round simulation: video, 30 min, all common HR questions",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude + Reasoning: 90 questions, 90 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-28",
    "dayNum": 76,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 11 · Day 76",
    "tip": "JPMC, PayPal, Zomato — they all started with someone who refused to stop.",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Full Aptitude Mock: 60 questions, 60 min — timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude Mock: 60 questions, 60 min — timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-06-29",
    "dayNum": 77,
    "week": 11,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 11 · Day 77 | Frontend",
    "tip": "OOP is not just syntax — it is a way of thinking about the world.",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Graphs: representation, BFS, DFS — islands, connected components",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Graphs: Number of Islands, Flood Fill, Clone Graph",
        "link": "https://leetcode.com/tag/graph/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "React: useEffect hook — fetch API data, cleanup, dependencies",
        "link": "https://react.dev/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Graphs: representation, BFS, DFS — islands, connected components",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Graphs: Number of Islands, Flood Fill, Clone Graph",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/graph/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "React: useEffect hook — fetch API data, cleanup, dependencies",
        "type": "build",
        "link": "https://react.dev/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-06-30",
    "dayNum": 78,
    "week": 12,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 12 · Day 78 | Backend",
    "tip": "Polymorphism: one interface, many forms. The power of abstraction.",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Knapsack 0/1 — subset sum, equal partition, target sum",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: Striver DP Sheet: Knapsack, Subset Sum, Partition Equal Subset",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Knapsack 0/1 — subset sum, equal partition, target sum",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: Striver DP Sheet: Knapsack, Subset Sum, Partition Equal Subset",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-01",
    "dayNum": 79,
    "week": 12,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 12 · Day 79 | Database",
    "tip": "Collections Framework is Java's built-in toolkit. Know every tool.",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Knapsack Unbounded — Coin Change, Rod Cutting",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP: Coin Change, Coin Change II, Rod Cutting",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: Window functions — ROW_NUMBER, RANK, LAG, LEAD — 10 problems",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Knapsack Unbounded — Coin Change, Rod Cutting",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP: Coin Change, Coin Change II, Rod Cutting",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: Window functions — ROW_NUMBER, RANK, LAG, LEAD — 10 problems",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-02",
    "dayNum": 80,
    "week": 12,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 12 · Day 80 | System Design / ML",
    "tip": "Streams and Lambdas: write less code, mean more.",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: 2D — Unique Paths, Grid Min Path, Triangle, Minimum Falling Path",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP 2D: Unique Paths, Unique Paths II, Min Path Sum, Triangle",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: 2D — Unique Paths, Grid Min Path, Triangle, Minimum Falling Path",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP 2D: Unique Paths, Unique Paths II, Min Path Sum, Triangle",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-03",
    "dayNum": 81,
    "week": 12,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 12 · Day 81 | ML / Projects",
    "tip": "JWT is stateless auth. Understand the payload before you implement.",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LCS — Longest Common Subsequence, Edit Distance, Print LCS",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: LCS, Edit Distance, Longest Common Substring, Delete Operations",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LCS — Longest Common Subsequence, Edit Distance, Print LCS",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: LCS, Edit Distance, Longest Common Substring, Delete Operations",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-04",
    "dayNum": 82,
    "week": 12,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 12 · Day 82",
    "tip": "Docker: it works on my machine + container = it works everywhere.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: 1D — Climbing Stairs, House Robber, Min Cost Climbing, Frog Jump",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP 1D: Climbing Stairs, House Robber, Fibonacci, Tribonacci",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "React: React Router v6 — pages, Link, useParams, protected route",
        "link": "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: CTEs, recursive CTEs, query optimization, EXPLAIN",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: LinkedIn post: share something you built or learned this week. Publish.",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Syllogisms + Critical Reasoning — 20 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: 1D — Climbing Stairs, House Robber, Min Cost Climbing, Frog Jump",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP 1D: Climbing Stairs, House Robber, Fibonacci, Tribonacci",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "React: React Router v6 — pages, Link, useParams, protected route",
        "type": "build",
        "link": "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
        "needsVerify": true
      },
      {
        "label": "SQL: CTEs, recursive CTEs, query optimization, EXPLAIN",
        "type": "lecture",
        "link": "https://pgexercises.com/",
        "needsVerify": false
      },
      {
        "label": "LinkedIn post: share something you built or learned this week. Publish.",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Syllogisms + Critical Reasoning — 20 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-05",
    "dayNum": 83,
    "week": 12,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 12 · Day 83",
    "tip": "PostgreSQL: when data integrity is non-negotiable.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Debate: \"Microservices vs Monolith\" — argue both sides",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Full Mock: 80 questions, 80 min — company simulation",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Debate: \"Microservices vs Monolith\" — argue both sides",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Full Mock: 80 questions, 80 min — company simulation",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-06",
    "dayNum": 84,
    "week": 12,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 84 · Week 12",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "techQuote": "MongoDB flexibility is a feature — use it with discipline.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-07-07",
    "dayNum": 85,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 13 · Day 85 | Backend",
    "tip": "Neural networks learn by failing and adjusting. So should you.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-08",
    "dayNum": 86,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 13 · Day 86 | Database",
    "tip": "Python is the lingua franca of AI. Every ML model starts with import.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: CTEs, recursive CTEs, query optimization, EXPLAIN",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: CTEs, recursive CTEs, query optimization, EXPLAIN",
        "type": "build",
        "link": "https://pgexercises.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-09",
    "dayNum": 87,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 13 · Day 87 | System Design / ML",
    "tip": "Tailwind utility-first means you think in design, not CSS files.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-10",
    "dayNum": 88,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 13 · Day 88 | ML / Projects",
    "tip": "NextJS: SSR means your page loads before the JS does. That's real UX.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-11",
    "dayNum": 89,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 13 · Day 89",
    "tip": "Kafka: when your monolith needs to breathe, queues are the lungs.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "React: useContext — global state (theme, auth), avoid prop drilling",
        "link": "https://react.dev/"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: Indexes — types, when to use, B-tree, query performance",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Number Theory + Geometry — 25 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "React: useContext — global state (theme, auth), avoid prop drilling",
        "type": "build",
        "link": "https://react.dev/",
        "needsVerify": true
      },
      {
        "label": "SQL: Indexes — types, when to use, B-tree, query performance",
        "type": "lecture",
        "link": "https://pgexercises.com/",
        "needsVerify": false
      },
      {
        "label": "GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Number Theory + Geometry — 25 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-12",
    "dayNum": 90,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 13 · Day 90",
    "tip": "SOLID principles are not rules — they are engineering wisdom.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: HR final round simulation: video, 30 min, all common HR questions",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Full Aptitude + Reasoning: 90 questions, 90 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "HR final round simulation: video, 30 min, all common HR questions",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude + Reasoning: 90 questions, 90 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-13",
    "dayNum": 91,
    "week": 13,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 13 · Day 91 | Frontend",
    "tip": "The best error message is the one that never shows up.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "React: Custom hooks — useFetch, useDebounce, useLocalStorage",
        "link": "https://react.dev/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "React: Custom hooks — useFetch, useDebounce, useLocalStorage",
        "type": "build",
        "link": "https://react.dev/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-07-14",
    "dayNum": 92,
    "week": 14,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 14 · Day 92 | Backend",
    "tip": "Write tests before features. Your future self will thank you.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: @RestController, @GetMapping, @PostMapping, request/response",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: @RestController, @GetMapping, @PostMapping, request/response",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-15",
    "dayNum": 93,
    "week": 14,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 14 · Day 93 | Database",
    "tip": "Pair programming is not two people on one keyboard — it's two brains on one problem.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: Indexes — types, when to use, B-tree, query performance",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: Indexes — types, when to use, B-tree, query performance",
        "type": "build",
        "link": "https://pgexercises.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-16",
    "dayNum": 94,
    "week": 14,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 14 · Day 94 | System Design / ML",
    "tip": "Code reviews are not criticism — they are collaboration.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-17",
    "dayNum": 95,
    "week": 14,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 14 · Day 95 | ML / Projects",
    "tip": "The internet runs on open source. Contribute back.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: JPA relations — @OneToMany, @ManyToOne, @JoinColumn",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: JPA relations — @OneToMany, @ManyToOne, @JoinColumn",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-18",
    "dayNum": 96,
    "week": 14,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 14 · Day 96",
    "tip": "One meaningful PR is worth more than 100 lines of unused code.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Spring Boot: Intro, Spring Initializr, project structure, first REST endpoint",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: Transactions — ACID, COMMIT, ROLLBACK, isolation levels",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Technical mock: explain a system design concept aloud to camera (5 min)",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: P&C + Probability: 25 problems timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: Intro, Spring Initializr, project structure, first REST endpoint",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U",
        "needsVerify": true
      },
      {
        "label": "SQL: Transactions — ACID, COMMIT, ROLLBACK, isolation levels",
        "type": "lecture",
        "link": "https://pgexercises.com/",
        "needsVerify": false
      },
      {
        "label": "Technical mock: explain a system design concept aloud to camera (5 min)",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "P&C + Probability: 25 problems timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-19",
    "dayNum": 97,
    "week": 14,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 14 · Day 97",
    "tip": "Study the company's tech stack before the interview. It shows you care.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: LinkedIn post: share something you built or learned this week. Publish.",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Syllogisms + Critical Reasoning — 20 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "LinkedIn post: share something you built or learned this week. Publish.",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Syllogisms + Critical Reasoning — 20 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-20",
    "dayNum": 98,
    "week": 14,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 98 · Week 14",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "techQuote": "Your localhost is a garden. Keep it clean.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-07-21",
    "dayNum": 99,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 15 · Day 99 | Backend",
    "tip": "Latency is the enemy of UX. Cache aggressively, measure always.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: Exception handling — @ControllerAdvice, @ExceptionHandler, custom errors",
        "link": "https://spring.io/guides"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: Exception handling — @ControllerAdvice, @ExceptionHandler, custom errors",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-22",
    "dayNum": 100,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 15 · Day 100 | Database",
    "tip": "You don't rise to your goals. You fall to your systems.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: Transactions — ACID, COMMIT, ROLLBACK, isolation levels",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: Transactions — ACID, COMMIT, ROLLBACK, isolation levels",
        "type": "build",
        "link": "https://pgexercises.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-23",
    "dayNum": 101,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 15 · Day 101 | System Design / ML",
    "tip": "Make it work, make it right, make it fast. — Kent Beck",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-24",
    "dayNum": 102,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 15 · Day 102 | ML / Projects",
    "tip": "First, solve the problem. Then, write the code. — John Johnson",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: JWT Auth — generate JWT, validate, JwtFilter, secure endpoints",
        "link": "https://www.youtube.com/watch?v=her_7pa0vrg"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: JWT Auth — generate JWT, validate, JwtFilter, secure endpoints",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=her_7pa0vrg",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-25",
    "dayNum": 103,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 15 · Day 103",
    "tip": "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Spring Boot: Full CRUD REST API with JPA — Student Management API",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U"
      },
      {
        "time": "11:30 AM",
        "label": "SQL: DB design — ER diagrams, normalization 1NF/2NF/3NF, schema design",
        "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Write resume summary + cover letter template — practice explaining yourself in writing",
        "link": "https://resume.io/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: Full CRUD REST API with JPA — Student Management API",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U",
        "needsVerify": true
      },
      {
        "label": "SQL: DB design — ER diagrams, normalization 1NF/2NF/3NF, schema design",
        "type": "lecture",
        "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        "needsVerify": false
      },
      {
        "label": "Write resume summary + cover letter template — practice explaining yourself in writing",
        "type": "communication",
        "link": "https://resume.io/",
        "needsVerify": false
      },
      {
        "label": "Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-26",
    "dayNum": 104,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 15 · Day 104",
    "tip": "Debugging is twice as hard as writing code. — Brian Kernighan",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Number Theory + Geometry — 25 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Number Theory + Geometry — 25 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-27",
    "dayNum": 105,
    "week": 15,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 15 · Day 105 | Frontend",
    "tip": "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "React + Spring Boot: connect frontend to backend API (CORS, headers)",
        "link": "https://react.dev/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "React + Spring Boot: connect frontend to backend API (CORS, headers)",
        "type": "build",
        "link": "https://react.dev/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-07-28",
    "dayNum": 106,
    "week": 16,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 16 · Day 106 | Backend",
    "tip": "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: connect MongoDB — MongoRepository, @Document, queries",
        "link": "https://spring.io/guides"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: connect MongoDB — MongoRepository, @Document, queries",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-29",
    "dayNum": 107,
    "week": 16,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 16 · Day 107 | Database",
    "tip": "Your GitHub is your resume. Every commit tells a story.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SQL: DB design — ER diagrams, normalization 1NF/2NF/3NF, schema design",
        "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SQL: DB design — ER diagrams, normalization 1NF/2NF/3NF, schema design",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-30",
    "dayNum": 108,
    "week": 16,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 16 · Day 108 | System Design / ML",
    "tip": "System design is about understanding tradeoffs, not memorizing patterns.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-07-31",
    "dayNum": 109,
    "week": 16,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 16 · Day 109 | ML / Projects",
    "tip": "Data structures are the grammar of programming. Master the grammar.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: file upload/download, multipart, serve static resources",
        "link": "https://spring.io/guides"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: file upload/download, multipart, serve static resources",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-01",
    "dayNum": 110,
    "week": 16,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 16 · Day 110",
    "tip": "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Spring Boot: refresh tokens, role-based access (@PreAuthorize)",
        "link": "https://www.youtube.com/watch?v=her_7pa0vrg"
      },
      {
        "time": "11:30 AM",
        "label": "PostgreSQL: setup, psql, pg_dump, schema vs public, SERIAL, constraints",
        "link": "https://www.youtube.com/watch?v=qw--VYLpxG4"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Elevator pitch for latest project: 45 sec, no filler words",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: DI Sprint: 3 full sets — bar + pie + table",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: refresh tokens, role-based access (@PreAuthorize)",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=her_7pa0vrg",
        "needsVerify": true
      },
      {
        "label": "PostgreSQL: setup, psql, pg_dump, schema vs public, SERIAL, constraints",
        "type": "lecture",
        "link": "https://www.youtube.com/watch?v=qw--VYLpxG4",
        "needsVerify": false
      },
      {
        "label": "Elevator pitch for latest project: 45 sec, no filler words",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "DI Sprint: 3 full sets — bar + pie + table",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-02",
    "dayNum": 111,
    "week": 16,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 16 · Day 111",
    "tip": "React is easy to learn, hard to master. The gap is where jobs are won.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Technical mock: explain a system design concept aloud to camera (5 min)",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: P&C + Probability: 25 problems timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Technical mock: explain a system design concept aloud to camera (5 min)",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "P&C + Probability: 25 problems timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-03",
    "dayNum": 112,
    "week": 16,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 112 · Week 16",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "techQuote": "SQL is 50 years old and still runs the world. Respect it.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-08-04",
    "dayNum": 113,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 17 · Day 113 | Backend",
    "tip": "Open source contribution is the best portfolio. Every PR is proof.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: WebSocket intro — STOMP, real-time chat concept",
        "link": "https://spring.io/guides"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: WebSocket intro — STOMP, real-time chat concept",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-05",
    "dayNum": 114,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 17 · Day 114 | Database",
    "tip": "The gap between good and great is understanding WHY, not just HOW.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "PostgreSQL: setup, psql, pg_dump, schema vs public, SERIAL, constraints",
        "link": "https://www.youtube.com/watch?v=qw--VYLpxG4"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "PostgreSQL: setup, psql, pg_dump, schema vs public, SERIAL, constraints",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=qw--VYLpxG4",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-06",
    "dayNum": 115,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 17 · Day 115 | System Design / ML",
    "tip": "Time complexity matters in interviews. Space complexity matters in production.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-07",
    "dayNum": 116,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 17 · Day 116 | ML / Projects",
    "tip": "Every algorithm you master today is a question you'll ace tomorrow.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: Build Full Project — E-commerce backend (Product/Cart/Order/Auth)",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: Build Full Project — E-commerce backend (Product/Cart/Order/Auth)",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=9SGDpanrc8U",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-08",
    "dayNum": 117,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 17 · Day 117",
    "tip": "Redis is the secret weapon of every high-traffic app. Learn it.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Spring Boot: API versioning, pagination, HATEOAS, Swagger/OpenAPI",
        "link": "https://spring.io/guides"
      },
      {
        "time": "11:30 AM",
        "label": "PostgreSQL exercises: pgexercises.com — 20 problems",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Vocabulary quiz: flashcard review of last 4 weeks of words",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: API versioning, pagination, HATEOAS, Swagger/OpenAPI",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "PostgreSQL exercises: pgexercises.com — 20 problems",
        "type": "lecture",
        "link": "https://pgexercises.com/",
        "needsVerify": false
      },
      {
        "label": "Vocabulary quiz: flashcard review of last 4 weeks of words",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-09",
    "dayNum": 118,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 17 · Day 118",
    "tip": "Authentication isn't a feature — it's a foundation.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Write resume summary + cover letter template — practice explaining yourself in writing",
        "link": "https://resume.io/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Write resume summary + cover letter template — practice explaining yourself in writing",
        "type": "communication",
        "link": "https://resume.io/",
        "needsVerify": false
      },
      {
        "label": "Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-10",
    "dayNum": 119,
    "week": 17,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 17 · Day 119 | Frontend",
    "tip": "The best ML model is the one your team can maintain. Start simple.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "React: Build full Dashboard UI — sidebar, charts (Recharts), dark mode",
        "link": "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "React: Build full Dashboard UI — sidebar, charts (Recharts), dark mode",
        "type": "build",
        "link": "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-08-11",
    "dayNum": 120,
    "week": 18,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 18 · Day 120 | Backend",
    "tip": "Microservices solve scaling problems. Monoliths solve complexity problems.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Spring Boot: Dockerize — Dockerfile, docker-compose (app + db + redis)",
        "link": "https://spring.io/guides"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: Dockerize — Dockerfile, docker-compose (app + db + redis)",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-12",
    "dayNum": 121,
    "week": 18,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 18 · Day 121 | Database",
    "tip": "API design is UX for developers. Make it intuitive.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "PostgreSQL exercises: pgexercises.com — 20 problems",
        "link": "https://pgexercises.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "PostgreSQL exercises: pgexercises.com — 20 problems",
        "type": "build",
        "link": "https://pgexercises.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-13",
    "dayNum": 122,
    "week": 18,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 18 · Day 122 | System Design / ML",
    "tip": "Recursion is just a function that believes in itself.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-14",
    "dayNum": 123,
    "week": 18,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 18 · Day 123 | ML / Projects",
    "tip": "Dynamic programming: remember your past solutions to avoid past mistakes.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-15",
    "dayNum": 124,
    "week": 18,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 18 · Day 124",
    "tip": "Binary search: eliminate half, not one at a time.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Spring Boot: Add Redis cache + rate limiting + Swagger docs to project",
        "link": "https://spring.io/guides"
      },
      {
        "time": "11:30 AM",
        "label": "MongoDB: intro, Atlas, Collections, Documents, BSON, CRUD in Compass",
        "link": "https://www.youtube.com/watch?v=ExcRbA7fy_A"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Vocabulary: 15 professional words. Use in context.",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Percentages + Profit/Loss + Interest — 30 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Spring Boot: Add Redis cache + rate limiting + Swagger docs to project",
        "type": "build",
        "link": "https://spring.io/guides",
        "needsVerify": true
      },
      {
        "label": "MongoDB: intro, Atlas, Collections, Documents, BSON, CRUD in Compass",
        "type": "lecture",
        "link": "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: 15 professional words. Use in context.",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Percentages + Profit/Loss + Interest — 30 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-16",
    "dayNum": 125,
    "week": 18,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 18 · Day 125",
    "tip": "Graph problems are everywhere — social networks, maps, dependencies. Master them.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Elevator pitch for latest project: 45 sec, no filler words",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: DI Sprint: 3 full sets — bar + pie + table",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Elevator pitch for latest project: 45 sec, no filler words",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "DI Sprint: 3 full sets — bar + pie + table",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-17",
    "dayNum": 126,
    "week": 18,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 126 · Week 18",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "techQuote": "JPMC, PayPal, Zomato — they all started with someone who refused to stop.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-08-18",
    "dayNum": 127,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 19 · Day 127 | Backend",
    "tip": "OOP is not just syntax — it is a way of thinking about the world.",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-19",
    "dayNum": 128,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 19 · Day 128 | Database",
    "tip": "Polymorphism: one interface, many forms. The power of abstraction.",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "MongoDB: intro, Atlas, Collections, Documents, BSON, CRUD in Compass",
        "link": "https://www.youtube.com/watch?v=ExcRbA7fy_A"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "MongoDB: intro, Atlas, Collections, Documents, BSON, CRUD in Compass",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-20",
    "dayNum": 129,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 19 · Day 129 | System Design / ML",
    "tip": "Collections Framework is Java's built-in toolkit. Know every tool.",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Project work / open source contribution",
        "link": "https://goodfirstissues.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-21",
    "dayNum": 130,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 19 · Day 130 | ML / Projects",
    "tip": "Streams and Lambdas: write less code, mean more.",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-22",
    "dayNum": 131,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 19 · Day 131",
    "tip": "JWT is stateless auth. Understand the payload before you implement.",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "MongoDB: query operators ($gt $lt $in $and $or), projections, sort, limit",
        "link": "https://learn.mongodb.com/"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Mixed Sprint: 40 problems, all topics, 40 min",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "MongoDB: query operators ($gt $lt $in $and $or), projections, sort, limit",
        "type": "lecture",
        "link": "https://learn.mongodb.com/",
        "needsVerify": false
      },
      {
        "label": "Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: 40 problems, all topics, 40 min",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-23",
    "dayNum": 132,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 19 · Day 132",
    "tip": "Docker: it works on my machine + container = it works everywhere.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Vocabulary quiz: flashcard review of last 4 weeks of words",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Vocabulary quiz: flashcard review of last 4 weeks of words",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-24",
    "dayNum": 133,
    "week": 19,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 19 · Day 133 | Frontend",
    "tip": "PostgreSQL: when data integrity is non-negotiable.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Frontend Mentor: complete 1 free challenge (card, landing page)",
        "link": "https://www.frontendmentor.io/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Frontend Mentor: complete 1 free challenge (card, landing page)",
        "type": "build",
        "link": "https://www.frontendmentor.io/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-08-25",
    "dayNum": 134,
    "week": 20,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 20 · Day 134 | Backend",
    "tip": "MongoDB flexibility is a feature — use it with discipline.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-26",
    "dayNum": 135,
    "week": 20,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 20 · Day 135 | Database",
    "tip": "Neural networks learn by failing and adjusting. So should you.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "MongoDB: query operators ($gt $lt $in $and $or), projections, sort, limit",
        "link": "https://learn.mongodb.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "MongoDB: query operators ($gt $lt $in $and $or), projections, sort, limit",
        "type": "build",
        "link": "https://learn.mongodb.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-27",
    "dayNum": 136,
    "week": 20,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 20 · Day 136 | System Design / ML",
    "tip": "Python is the lingua franca of AI. Every ML model starts with import.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Caching — CDN, Redis, cache invalidation, eviction policies (LRU/LFU)",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Caching — CDN, Redis, cache invalidation, eviction policies (LRU/LFU)",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-28",
    "dayNum": 137,
    "week": 20,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 20 · Day 137 | ML / Projects",
    "tip": "Tailwind utility-first means you think in design, not CSS files.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-29",
    "dayNum": 138,
    "week": 20,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 20 · Day 138",
    "tip": "NextJS: SSR means your page loads before the JS does. That's real UX.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Caching — CDN, Redis, cache invalidation, eviction policies (LRU/LFU)",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: TED Talk + note 3 persuasion techniques used",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Caching — CDN, Redis, cache invalidation, eviction policies (LRU/LFU)",
        "type": "lecture",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": false
      },
      {
        "label": "TED Talk + note 3 persuasion techniques used",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-30",
    "dayNum": 139,
    "week": 20,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 20 · Day 139",
    "tip": "Kafka: when your monolith needs to breathe, queues are the lungs.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Vocabulary: 15 professional words. Use in context.",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Percentages + Profit/Loss + Interest — 30 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Vocabulary: 15 professional words. Use in context.",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Percentages + Profit/Loss + Interest — 30 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-08-31",
    "dayNum": 140,
    "week": 20,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 140 · Week 20",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "techQuote": "SOLID principles are not rules — they are engineering wisdom.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-09-01",
    "dayNum": 141,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 21 · Day 141 | Backend",
    "tip": "The best error message is the one that never shows up.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-02",
    "dayNum": 142,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 21 · Day 142 | Database",
    "tip": "Write tests before features. Your future self will thank you.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "MongoDB: aggregation pipeline — $match $group $sort $project $lookup",
        "link": "https://www.youtube.com/watch?v=ExcRbA7fy_A"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "MongoDB: aggregation pipeline — $match $group $sort $project $lookup",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=ExcRbA7fy_A",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-03",
    "dayNum": 143,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 21 · Day 143 | System Design / ML",
    "tip": "Pair programming is not two people on one keyboard — it's two brains on one problem.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Design URL Shortener — full walkthrough: API, DB, cache, scale",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Design URL Shortener — full walkthrough: API, DB, cache, scale",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-04",
    "dayNum": 144,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 21 · Day 144 | ML / Projects",
    "tip": "Code reviews are not criticism — they are collaboration.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-05",
    "dayNum": 145,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 21 · Day 145",
    "tip": "The internet runs on open source. Contribute back.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Design URL Shortener — full walkthrough: API, DB, cache, scale",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Cold outreach: message 2 professionals with thoughtful, specific notes",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Mental Math speed drill: 10 min × 3 rounds",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Design URL Shortener — full walkthrough: API, DB, cache, scale",
        "type": "lecture",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": false
      },
      {
        "label": "Cold outreach: message 2 professionals with thoughtful, specific notes",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Mental Math speed drill: 10 min × 3 rounds",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-06",
    "dayNum": 146,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 21 · Day 146",
    "tip": "One meaningful PR is worth more than 100 lines of unused code.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mixed Sprint: 40 problems, all topics, 40 min",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: 40 problems, all topics, 40 min",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-07",
    "dayNum": 147,
    "week": 21,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 21 · Day 147 | Frontend",
    "tip": "Study the company's tech stack before the interview. It shows you care.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-09-08",
    "dayNum": 148,
    "week": 22,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 22 · Day 148 | Backend",
    "tip": "Your localhost is a garden. Keep it clean.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-09",
    "dayNum": 149,
    "week": 22,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 22 · Day 149 | Database",
    "tip": "Latency is the enemy of UX. Cache aggressively, measure always.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "MongoDB: indexes, schema design — embedding vs referencing, when each",
        "link": "https://learn.mongodb.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "MongoDB: indexes, schema design — embedding vs referencing, when each",
        "type": "build",
        "link": "https://learn.mongodb.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-10",
    "dayNum": 150,
    "week": 22,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 22 · Day 150 | System Design / ML",
    "tip": "You don't rise to your goals. You fall to your systems.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Design Twitter/Instagram — feed, storage, timeline, fanout",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Design Twitter/Instagram — feed, storage, timeline, fanout",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-11",
    "dayNum": 151,
    "week": 22,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 22 · Day 151 | ML / Projects",
    "tip": "Make it work, make it right, make it fast. — Kent Beck",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Python: syntax, variables, data types, input/output, f-strings",
        "link": "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Python: syntax, variables, data types, input/output, f-strings",
        "type": "build",
        "link": "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-12",
    "dayNum": 152,
    "week": 22,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 22 · Day 152",
    "tip": "First, solve the problem. Then, write the code. — John Johnson",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Design Twitter/Instagram — feed, storage, timeline, fanout",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: TSD + Work Sprint: 25 problems, 80% accuracy target",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Design Twitter/Instagram — feed, storage, timeline, fanout",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "TSD + Work Sprint: 25 problems, 80% accuracy target",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-13",
    "dayNum": 153,
    "week": 22,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 22 · Day 153",
    "tip": "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: TED Talk + note 3 persuasion techniques used",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "TED Talk + note 3 persuasion techniques used",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-14",
    "dayNum": 154,
    "week": 22,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 154 · Week 22",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "techQuote": "Debugging is twice as hard as writing code. — Brian Kernighan",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-09-15",
    "dayNum": 155,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 23 · Day 155 | Backend",
    "tip": "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-16",
    "dayNum": 156,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 23 · Day 156 | Database",
    "tip": "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "MongoDB: TTL indexes, text search, geospatial, transactions",
        "link": "https://learn.mongodb.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "MongoDB: TTL indexes, text search, geospatial, transactions",
        "type": "build",
        "link": "https://learn.mongodb.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-17",
    "dayNum": 157,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 23 · Day 157 | System Design / ML",
    "tip": "Your GitHub is your resume. Every commit tells a story.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Design WhatsApp — messaging, WebSocket, offline queue, encryption",
        "link": "https://github.com/donnemartin/system-design-primer"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Design WhatsApp — messaging, WebSocket, offline queue, encryption",
        "type": "build",
        "link": "https://github.com/donnemartin/system-design-primer",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-18",
    "dayNum": 158,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 23 · Day 158 | ML / Projects",
    "tip": "System design is about understanding tradeoffs, not memorizing patterns.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Python: functions, *args/**kwargs, lambda, map/filter, generators",
        "link": "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Python: functions, *args/**kwargs, lambda, map/filter, generators",
        "type": "build",
        "link": "https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-19",
    "dayNum": 159,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 23 · Day 159",
    "tip": "Data structures are the grammar of programming. Master the grammar.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Design WhatsApp — messaging, WebSocket, offline queue, encryption",
        "link": "https://github.com/donnemartin/system-design-primer"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Review mock: analyse wrong answers, note error patterns",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Design WhatsApp — messaging, WebSocket, offline queue, encryption",
        "type": "lecture",
        "link": "https://github.com/donnemartin/system-design-primer",
        "needsVerify": false
      },
      {
        "label": "HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Review mock: analyse wrong answers, note error patterns",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-20",
    "dayNum": 160,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 23 · Day 160",
    "tip": "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Cold outreach: message 2 professionals with thoughtful, specific notes",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mental Math speed drill: 10 min × 3 rounds",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Cold outreach: message 2 professionals with thoughtful, specific notes",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Mental Math speed drill: 10 min × 3 rounds",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-21",
    "dayNum": 161,
    "week": 23,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 23 · Day 161 | Frontend",
    "tip": "React is easy to learn, hard to master. The gap is where jobs are won.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-09-22",
    "dayNum": 162,
    "week": 24,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 24 · Day 162 | Backend",
    "tip": "SQL is 50 years old and still runs the world. Respect it.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-23",
    "dayNum": 163,
    "week": 24,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 24 · Day 163 | Database",
    "tip": "Open source contribution is the best portfolio. Every PR is proof.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Redis: data types, GET/SET/EXPIRE, lists, sets, sorted sets, hashes",
        "link": "https://www.youtube.com/watch?v=jgpVdJB2sKQ"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Redis: data types, GET/SET/EXPIRE, lists, sets, sorted sets, hashes",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-24",
    "dayNum": 164,
    "week": 24,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 24 · Day 164 | System Design / ML",
    "tip": "The gap between good and great is understanding WHY, not just HOW.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Design Netflix — CDN, HLS streaming, recommendation engine",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Design Netflix — CDN, HLS streaming, recommendation engine",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-25",
    "dayNum": 165,
    "week": 24,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 24 · Day 165 | ML / Projects",
    "tip": "Time complexity matters in interviews. Space complexity matters in production.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Python: file I/O, JSON, CSV, error handling, context managers",
        "link": "https://www.youtube.com/watch?v=_uQrJ0TkZlc"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Python: file I/O, JSON, CSV, error handling, context managers",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-26",
    "dayNum": 166,
    "week": 24,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 24 · Day 166",
    "tip": "Every algorithm you master today is a question you'll ace tomorrow.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Design Netflix — CDN, HLS streaming, recommendation engine",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Full Aptitude Mock: 60 questions, 60 min — timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Design Netflix — CDN, HLS streaming, recommendation engine",
        "type": "lecture",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": false
      },
      {
        "label": "Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude Mock: 60 questions, 60 min — timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-27",
    "dayNum": 167,
    "week": 24,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 24 · Day 167",
    "tip": "Redis is the secret weapon of every high-traffic app. Learn it.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: TSD + Work Sprint: 25 problems, 80% accuracy target",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "TSD + Work Sprint: 25 problems, 80% accuracy target",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-28",
    "dayNum": 168,
    "week": 24,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 168 · Week 24",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "techQuote": "Authentication isn't a feature — it's a foundation.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-09-29",
    "dayNum": 169,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 25 · Day 169 | Backend",
    "tip": "The best ML model is the one your team can maintain. Start simple.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-09-30",
    "dayNum": 170,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 25 · Day 170 | Database",
    "tip": "Microservices solve scaling problems. Monoliths solve complexity problems.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Redis: caching patterns — cache-aside, write-through, TTL strategy",
        "link": "https://www.youtube.com/watch?v=jgpVdJB2sKQ"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Redis: caching patterns — cache-aside, write-through, TTL strategy",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-01",
    "dayNum": 171,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 25 · Day 171 | System Design / ML",
    "tip": "API design is UX for developers. Make it intuitive.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Design Uber — geo-indexing, matching, surge pricing, real-time location",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Design Uber — geo-indexing, matching, surge pricing, real-time location",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-02",
    "dayNum": 172,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 25 · Day 172 | ML / Projects",
    "tip": "Recursion is just a function that believes in itself.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Python: NumPy — arrays, vectorized ops, broadcasting, slicing",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Python: NumPy — arrays, vectorized ops, broadcasting, slicing",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-03",
    "dayNum": 173,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 25 · Day 173",
    "tip": "Dynamic programming: remember your past solutions to avoid past mistakes.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Design Uber — geo-indexing, matching, surge pricing, real-time location",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Debate: \"Microservices vs Monolith\" — argue both sides",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Full Mock: 80 questions, 80 min — company simulation",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Design Uber — geo-indexing, matching, surge pricing, real-time location",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Debate: \"Microservices vs Monolith\" — argue both sides",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Full Mock: 80 questions, 80 min — company simulation",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-04",
    "dayNum": 174,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 25 · Day 174",
    "tip": "Binary search: eliminate half, not one at a time.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Review mock: analyse wrong answers, note error patterns",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Review mock: analyse wrong answers, note error patterns",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-05",
    "dayNum": 175,
    "week": 25,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 25 · Day 175 | Frontend",
    "tip": "Graph problems are everywhere — social networks, maps, dependencies. Master them.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-10-06",
    "dayNum": 176,
    "week": 26,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 26 · Day 176 | Backend",
    "tip": "JPMC, PayPal, Zomato — they all started with someone who refused to stop.",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-07",
    "dayNum": 177,
    "week": 26,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 26 · Day 177 | Database",
    "tip": "OOP is not just syntax — it is a way of thinking about the world.",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Redis: pub/sub, streams, use Redis as session store + queue",
        "link": "https://www.youtube.com/watch?v=jgpVdJB2sKQ"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Redis: pub/sub, streams, use Redis as session store + queue",
        "type": "build",
        "link": "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-08",
    "dayNum": 178,
    "week": 26,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 26 · Day 178 | System Design / ML",
    "tip": "Polymorphism: one interface, many forms. The power of abstraction.",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Design Google Search — crawling, indexing, PageRank, caching",
        "link": "https://github.com/donnemartin/system-design-primer"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Design Google Search — crawling, indexing, PageRank, caching",
        "type": "build",
        "link": "https://github.com/donnemartin/system-design-primer",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-09",
    "dayNum": 179,
    "week": 26,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 26 · Day 179 | ML / Projects",
    "tip": "Collections Framework is Java's built-in toolkit. Know every tool.",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Python: Matplotlib + Seaborn — line, bar, scatter, heatmap, EDA on dataset",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Python: Matplotlib + Seaborn — line, bar, scatter, heatmap, EDA on dataset",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-10",
    "dayNum": 180,
    "week": 26,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 26 · Day 180",
    "tip": "Streams and Lambdas: write less code, mean more.",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Design Google Search — crawling, indexing, PageRank, caching",
        "link": "https://github.com/donnemartin/system-design-primer"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: HR final round simulation: video, 30 min, all common HR questions",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Full Aptitude + Reasoning: 90 questions, 90 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Design Google Search — crawling, indexing, PageRank, caching",
        "type": "lecture",
        "link": "https://github.com/donnemartin/system-design-primer",
        "needsVerify": false
      },
      {
        "label": "HR final round simulation: video, 30 min, all common HR questions",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude + Reasoning: 90 questions, 90 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-11",
    "dayNum": 181,
    "week": 26,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 26 · Day 181",
    "tip": "JWT is stateless auth. Understand the payload before you implement.",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Full Aptitude Mock: 60 questions, 60 min — timed",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Mock HR: 5 behavioral questions — record, review, redo the weakest",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude Mock: 60 questions, 60 min — timed",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-12",
    "dayNum": 182,
    "week": 26,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 182 · Week 26",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "techQuote": "Docker: it works on my machine + container = it works everywhere.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-10-13",
    "dayNum": 183,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 27 · Day 183 | Backend",
    "tip": "PostgreSQL: when data integrity is non-negotiable.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-14",
    "dayNum": 184,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 27 · Day 184 | Database",
    "tip": "MongoDB flexibility is a feature — use it with discipline.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-15",
    "dayNum": 185,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 27 · Day 185 | System Design / ML",
    "tip": "Neural networks learn by failing and adjusting. So should you.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-16",
    "dayNum": 186,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 27 · Day 186 | ML / Projects",
    "tip": "Python is the lingua franca of AI. Every ML model starts with import.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML: Linear Regression — cost function, gradient descent, sklearn, evaluation",
        "link": "https://www.youtube.com/playlist?list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML: Linear Regression — cost function, gradient descent, sklearn, evaluation",
        "type": "build",
        "link": "https://www.youtube.com/playlist?list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-17",
    "dayNum": 187,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 27 · Day 187",
    "tip": "Tailwind utility-first means you think in design, not CSS files.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: LinkedIn post: share something you built or learned this week. Publish.",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Syllogisms + Critical Reasoning — 20 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "LinkedIn post: share something you built or learned this week. Publish.",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Syllogisms + Critical Reasoning — 20 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-18",
    "dayNum": 188,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 27 · Day 188",
    "tip": "NextJS: SSR means your page loads before the JS does. That's real UX.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Debate: \"Microservices vs Monolith\" — argue both sides",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Full Mock: 80 questions, 80 min — company simulation",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Debate: \"Microservices vs Monolith\" — argue both sides",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Full Mock: 80 questions, 80 min — company simulation",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-19",
    "dayNum": 189,
    "week": 27,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 27 · Day 189 | Frontend",
    "tip": "Kafka: when your monolith needs to breathe, queues are the lungs.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-10-20",
    "dayNum": 190,
    "week": 28,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 28 · Day 190 | Backend",
    "tip": "SOLID principles are not rules — they are engineering wisdom.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-21",
    "dayNum": 191,
    "week": 28,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 28 · Day 191 | Database",
    "tip": "The best error message is the one that never shows up.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-22",
    "dayNum": 192,
    "week": 28,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 28 · Day 192 | System Design / ML",
    "tip": "Write tests before features. Your future self will thank you.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-23",
    "dayNum": 193,
    "week": 28,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 28 · Day 193 | ML / Projects",
    "tip": "Pair programming is not two people on one keyboard — it's two brains on one problem.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML: Decision Trees + Random Forest + Gradient Boosting — theory + sklearn",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML: Decision Trees + Random Forest + Gradient Boosting — theory + sklearn",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-24",
    "dayNum": 194,
    "week": 28,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 28 · Day 194",
    "tip": "Code reviews are not criticism — they are collaboration.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Number Theory + Geometry — 25 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Number Theory + Geometry — 25 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-25",
    "dayNum": 195,
    "week": 28,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 28 · Day 195",
    "tip": "The internet runs on open source. Contribute back.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: HR final round simulation: video, 30 min, all common HR questions",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Full Aptitude + Reasoning: 90 questions, 90 min",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "HR final round simulation: video, 30 min, all common HR questions",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Full Aptitude + Reasoning: 90 questions, 90 min",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-26",
    "dayNum": 196,
    "week": 28,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 196 · Week 28",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "techQuote": "One meaningful PR is worth more than 100 lines of unused code.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-10-27",
    "dayNum": 197,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 29 · Day 197 | Backend",
    "tip": "Study the company's tech stack before the interview. It shows you care.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-28",
    "dayNum": 198,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 29 · Day 198 | Database",
    "tip": "Your localhost is a garden. Keep it clean.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-29",
    "dayNum": 199,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 29 · Day 199 | System Design / ML",
    "tip": "Latency is the enemy of UX. Cache aggressively, measure always.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-30",
    "dayNum": 200,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 29 · Day 200 | ML / Projects",
    "tip": "You don't rise to your goals. You fall to your systems.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML: Feature engineering — encoding, scaling, missing values, pipelines",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML: Feature engineering — encoding, scaling, missing values, pipelines",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-10-31",
    "dayNum": 201,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 29 · Day 201",
    "tip": "Make it work, make it right, make it fast. — Kent Beck",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Technical mock: explain a system design concept aloud to camera (5 min)",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: P&C + Probability: 25 problems timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Technical mock: explain a system design concept aloud to camera (5 min)",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "P&C + Probability: 25 problems timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-01",
    "dayNum": 202,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 29 · Day 202",
    "tip": "First, solve the problem. Then, write the code. — John Johnson",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: LinkedIn post: share something you built or learned this week. Publish.",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Syllogisms + Critical Reasoning — 20 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "LinkedIn post: share something you built or learned this week. Publish.",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Syllogisms + Critical Reasoning — 20 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-02",
    "dayNum": 203,
    "week": 29,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 29 · Day 203 | Frontend",
    "tip": "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-11-03",
    "dayNum": 204,
    "week": 30,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 30 · Day 204 | Backend",
    "tip": "Debugging is twice as hard as writing code. — Brian Kernighan",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-04",
    "dayNum": 205,
    "week": 30,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 30 · Day 205 | Database",
    "tip": "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-05",
    "dayNum": 206,
    "week": 30,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 30 · Day 206 | System Design / ML",
    "tip": "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-06",
    "dayNum": 207,
    "week": 30,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 30 · Day 207 | ML / Projects",
    "tip": "Your GitHub is your resume. Every commit tells a story.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Kaggle: Titanic challenge — EDA → feature eng → model → submit",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Kaggle: Titanic challenge — EDA → feature eng → model → submit",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-07",
    "dayNum": 208,
    "week": 30,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 30 · Day 208",
    "tip": "System design is about understanding tradeoffs, not memorizing patterns.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Write resume summary + cover letter template — practice explaining yourself in writing",
        "link": "https://resume.io/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Write resume summary + cover letter template — practice explaining yourself in writing",
        "type": "communication",
        "link": "https://resume.io/",
        "needsVerify": false
      },
      {
        "label": "Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-08",
    "dayNum": 209,
    "week": 30,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 30 · Day 209",
    "tip": "Data structures are the grammar of programming. Master the grammar.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Number Theory + Geometry — 25 problems",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "GD: \"Is React or Angular better for enterprise?\" — structured argument",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "Number Theory + Geometry — 25 problems",
        "type": "aptitude",
        "link": "https://www.geeksforgeeks.org/aptitude-questions-and-answers/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-09",
    "dayNum": 210,
    "week": 30,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 210 · Week 30",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "techQuote": "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-11-10",
    "dayNum": 211,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 31 · Day 211 | Backend",
    "tip": "React is easy to learn, hard to master. The gap is where jobs are won.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-11",
    "dayNum": 212,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 31 · Day 212 | Database",
    "tip": "SQL is 50 years old and still runs the world. Respect it.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-12",
    "dayNum": 213,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 31 · Day 213 | System Design / ML",
    "tip": "Open source contribution is the best portfolio. Every PR is proof.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-13",
    "dayNum": 214,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 31 · Day 214 | ML / Projects",
    "tip": "The gap between good and great is understanding WHY, not just HOW.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Deep Learning: TensorFlow/Keras — build first NN, MNIST digit classification",
        "link": "https://www.fast.ai/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Deep Learning: TensorFlow/Keras — build first NN, MNIST digit classification",
        "type": "build",
        "link": "https://www.fast.ai/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-14",
    "dayNum": 215,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 31 · Day 215",
    "tip": "Time complexity matters in interviews. Space complexity matters in production.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Elevator pitch for latest project: 45 sec, no filler words",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: DI Sprint: 3 full sets — bar + pie + table",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Elevator pitch for latest project: 45 sec, no filler words",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "DI Sprint: 3 full sets — bar + pie + table",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-15",
    "dayNum": 216,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 31 · Day 216",
    "tip": "Every algorithm you master today is a question you'll ace tomorrow.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Technical mock: explain a system design concept aloud to camera (5 min)",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: P&C + Probability: 25 problems timed",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Technical mock: explain a system design concept aloud to camera (5 min)",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "P&C + Probability: 25 problems timed",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-16",
    "dayNum": 217,
    "week": 31,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 31 · Day 217 | Frontend",
    "tip": "Redis is the secret weapon of every high-traffic app. Learn it.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-11-17",
    "dayNum": 218,
    "week": 32,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 32 · Day 218 | Backend",
    "tip": "Authentication isn't a feature — it's a foundation.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-18",
    "dayNum": 219,
    "week": 32,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 32 · Day 219 | Database",
    "tip": "The best ML model is the one your team can maintain. Start simple.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-19",
    "dayNum": 220,
    "week": 32,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 32 · Day 220 | System Design / ML",
    "tip": "Microservices solve scaling problems. Monoliths solve complexity problems.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-20",
    "dayNum": 221,
    "week": 32,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 32 · Day 221 | ML / Projects",
    "tip": "API design is UX for developers. Make it intuitive.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Deep Learning: Transfer learning — fine-tune ResNet on custom image dataset",
        "link": "https://huggingface.co/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Deep Learning: Transfer learning — fine-tune ResNet on custom image dataset",
        "type": "build",
        "link": "https://huggingface.co/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-21",
    "dayNum": 222,
    "week": 32,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 32 · Day 222",
    "tip": "Recursion is just a function that believes in itself.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Vocabulary quiz: flashcard review of last 4 weeks of words",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Vocabulary quiz: flashcard review of last 4 weeks of words",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-22",
    "dayNum": 223,
    "week": 32,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 32 · Day 223",
    "tip": "Dynamic programming: remember your past solutions to avoid past mistakes.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Write resume summary + cover letter template — practice explaining yourself in writing",
        "link": "https://resume.io/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Write resume summary + cover letter template — practice explaining yourself in writing",
        "type": "communication",
        "link": "https://resume.io/",
        "needsVerify": false
      },
      {
        "label": "Company mock: TCS/Infosys/JPMC pattern — 60 questions",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-23",
    "dayNum": 224,
    "week": 32,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 224 · Week 32",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "techQuote": "Binary search: eliminate half, not one at a time.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-11-24",
    "dayNum": 225,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 33 · Day 225 | Backend",
    "tip": "Graph problems are everywhere — social networks, maps, dependencies. Master them.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-25",
    "dayNum": 226,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 33 · Day 226 | Database",
    "tip": "JPMC, PayPal, Zomato — they all started with someone who refused to stop.",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-26",
    "dayNum": 227,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 33 · Day 227 | System Design / ML",
    "tip": "OOP is not just syntax — it is a way of thinking about the world.",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-27",
    "dayNum": 228,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 33 · Day 228 | ML / Projects",
    "tip": "Polymorphism: one interface, many forms. The power of abstraction.",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "NLP: HuggingFace — load pretrained BERT, fine-tune for text classification",
        "link": "https://huggingface.co/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "NLP: HuggingFace — load pretrained BERT, fine-tune for text classification",
        "type": "build",
        "link": "https://huggingface.co/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-28",
    "dayNum": 229,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 33 · Day 229",
    "tip": "Collections Framework is Java's built-in toolkit. Know every tool.",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: Vocabulary: 15 professional words. Use in context.",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Percentages + Profit/Loss + Interest — 30 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Vocabulary: 15 professional words. Use in context.",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Percentages + Profit/Loss + Interest — 30 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-29",
    "dayNum": 230,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 33 · Day 230",
    "tip": "Streams and Lambdas: write less code, mean more.",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Elevator pitch for latest project: 45 sec, no filler words",
        "link": "https://www.youtube.com/@Charismaoncommand"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: DI Sprint: 3 full sets — bar + pie + table",
        "link": "https://www.youtube.com/@PlacementAdda"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Elevator pitch for latest project: 45 sec, no filler words",
        "type": "communication",
        "link": "https://www.youtube.com/@Charismaoncommand",
        "needsVerify": false
      },
      {
        "label": "DI Sprint: 3 full sets — bar + pie + table",
        "type": "aptitude",
        "link": "https://www.youtube.com/@PlacementAdda",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-11-30",
    "dayNum": 231,
    "week": 33,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 33 · Day 231 | Frontend",
    "tip": "JWT is stateless auth. Understand the payload before you implement.",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-12-01",
    "dayNum": 232,
    "week": 34,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 34 · Day 232 | Backend",
    "tip": "Docker: it works on my machine + container = it works everywhere.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-02",
    "dayNum": 233,
    "week": 34,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 34 · Day 233 | Database",
    "tip": "PostgreSQL: when data integrity is non-negotiable.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-03",
    "dayNum": 234,
    "week": 34,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 34 · Day 234 | System Design / ML",
    "tip": "MongoDB flexibility is a feature — use it with discipline.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-04",
    "dayNum": 235,
    "week": 34,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 34 · Day 235 | ML / Projects",
    "tip": "Neural networks learn by failing and adjusting. So should you.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-05",
    "dayNum": 236,
    "week": 34,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 34 · Day 236",
    "tip": "Python is the lingua franca of AI. Every ML model starts with import.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Mixed Sprint: 40 problems, all topics, 40 min",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: 40 problems, all topics, 40 min",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-06",
    "dayNum": 237,
    "week": 34,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 34 · Day 237",
    "tip": "Tailwind utility-first means you think in design, not CSS files.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Vocabulary quiz: flashcard review of last 4 weeks of words",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Vocabulary quiz: flashcard review of last 4 weeks of words",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Verbal: Para Jumbles + Reading Comprehension — 20 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-07",
    "dayNum": 238,
    "week": 34,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 238 · Week 34",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Pausing before answering signals thoughtfulness, not weakness.",
    "aptQuote": "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
    "techQuote": "NextJS: SSR means your page loads before the JS does. That's real UX.",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-12-08",
    "dayNum": 239,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 35 · Day 239 | Backend",
    "tip": "Kafka: when your monolith needs to breathe, queues are the lungs.",
    "commQuote": "Read one new word every day. In a year: 365 more weapons.",
    "aptQuote": "Data interpretation is SQL thinking without a computer.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-09",
    "dayNum": 240,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 35 · Day 240 | Database",
    "tip": "SOLID principles are not rules — they are engineering wisdom.",
    "commQuote": "Your body language speaks before your words do.",
    "aptQuote": "Master percentages and you solve 30% of every aptitude paper.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-10",
    "dayNum": 241,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 35 · Day 241 | System Design / ML",
    "tip": "The best error message is the one that never shows up.",
    "commQuote": "Eye contact is the most direct path from mind to mind.",
    "aptQuote": "Every mock test is a map of your weaknesses. Read it.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-11",
    "dayNum": 242,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 35 · Day 242 | ML / Projects",
    "tip": "Write tests before features. Your future self will thank you.",
    "commQuote": "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
    "aptQuote": "Speed comes from pattern recognition. Pattern recognition comes from volume.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-12",
    "dayNum": 243,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 35 · Day 243",
    "tip": "Pair programming is not two people on one keyboard — it's two brains on one problem.",
    "commQuote": "The best communicators are also the best listeners.",
    "aptQuote": "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: TED Talk + note 3 persuasion techniques used",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "TED Talk + note 3 persuasion techniques used",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-13",
    "dayNum": 244,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 35 · Day 244",
    "tip": "Code reviews are not criticism — they are collaboration.",
    "commQuote": "Articulation improves with deliberate practice. Like coding.",
    "aptQuote": "Reasoning is the muscle of the mind. Train it daily.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Vocabulary: 15 professional words. Use in context.",
        "link": "https://www.vocabulary.com/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Percentages + Profit/Loss + Interest — 30 problems",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Vocabulary: 15 professional words. Use in context.",
        "type": "communication",
        "link": "https://www.vocabulary.com/",
        "needsVerify": false
      },
      {
        "label": "Percentages + Profit/Loss + Interest — 30 problems",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-14",
    "dayNum": 245,
    "week": 35,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 35 · Day 245 | Frontend",
    "tip": "The internet runs on open source. Contribute back.",
    "commQuote": "In cold outreach, be specific. Generic messages get ignored.",
    "aptQuote": "Probability is just structured common sense. Formalize your intuition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-12-15",
    "dayNum": 246,
    "week": 36,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 36 · Day 246 | Backend",
    "tip": "One meaningful PR is worth more than 100 lines of unused code.",
    "commQuote": "Speak with structure: Point → Reason → Example → Point again.",
    "aptQuote": "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-16",
    "dayNum": 247,
    "week": 36,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 36 · Day 247 | Database",
    "tip": "Study the company's tech stack before the interview. It shows you care.",
    "commQuote": "Vocabulary is not about using big words — it's about using the right words.",
    "aptQuote": "Think in ratios, percentages, and proportions — always.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-17",
    "dayNum": 248,
    "week": 36,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 36 · Day 248 | System Design / ML",
    "tip": "Your localhost is a garden. Keep it clean.",
    "commQuote": "A great introduction answers: Who, What, and Why should they care.",
    "aptQuote": "Series questions test pattern vision. Train it like a muscle.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-18",
    "dayNum": 249,
    "week": 36,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 36 · Day 249 | ML / Projects",
    "tip": "Latency is the enemy of UX. Cache aggressively, measure always.",
    "commQuote": "Mirror the energy of the room — then elevate it slightly.",
    "aptQuote": "Seating arrangements: draw first, solve later.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-19",
    "dayNum": 250,
    "week": 36,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 36 · Day 250",
    "tip": "You don't rise to your goals. You fall to your systems.",
    "commQuote": "Never memorize answers. Internalize the story. Let it flow naturally.",
    "aptQuote": "Blood relations: tree diagram. Always.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "3:00 PM",
        "label": "⚡ LeetCode Biweekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "4:30 PM",
        "label": "🎤 Communication: Cold outreach: message 2 professionals with thoughtful, specific notes",
        "link": "https://www.linkedin.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🧮 Aptitude: Mental Math speed drill: 10 min × 3 rounds",
        "link": "https://www.faceprep.in/"
      },
      {
        "time": "7:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "⚡ LeetCode Biweekly Contest",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "Cold outreach: message 2 professionals with thoughtful, specific notes",
        "type": "communication",
        "link": "https://www.linkedin.com/",
        "needsVerify": false
      },
      {
        "label": "Mental Math speed drill: 10 min × 3 rounds",
        "type": "aptitude",
        "link": "https://www.faceprep.in/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-20",
    "dayNum": 251,
    "week": 36,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 36 · Day 251",
    "tip": "Make it work, make it right, make it fast. — Kent Beck",
    "commQuote": "The most important thing in communication is hearing what isn't said. — Peter Drucker",
    "aptQuote": "The only way to learn mathematics is to do mathematics. — Paul Halmos",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "link": "https://www.interviewbit.com/hr-interview-questions/"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Mixed Sprint: 40 problems, all topics, 40 min",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "Mock full interview: 45 min — HR + tech explanation + project walkthrough",
        "type": "communication",
        "link": "https://www.interviewbit.com/hr-interview-questions/",
        "needsVerify": false
      },
      {
        "label": "Mixed Sprint: 40 problems, all topics, 40 min",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-21",
    "dayNum": 252,
    "week": 36,
    "phase": 2,
    "isBreak": true,
    "isSunday": false,
    "title": "🌿 REST & RESET — Day 252 · Week 36",
    "tip": "Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.",
    "commQuote": "Effective communication is 20% what you know and 80% how you feel about what you know.",
    "aptQuote": "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
    "techQuote": "First, solve the problem. Then, write the code. — John Johnson",
    "timeBlocks": [
      {
        "time": "9:00 AM",
        "label": "Wake up naturally. No alarm."
      },
      {
        "time": "10:00 AM",
        "label": "30-min walk — no phone, no podcast. Just walk."
      },
      {
        "time": "12:00 PM",
        "label": "🍕 CHEAT MEAL — order what you love. Zero guilt."
      },
      {
        "time": "2:00 PM",
        "label": "Optional: flip through this week's notes for max 30 min."
      },
      {
        "time": "4:00 PM",
        "label": "🎮 Game / movie / YouTube rabbit hole — anything non-study."
      },
      {
        "time": "9:00 PM",
        "label": "Write 3 things you're proud of this week. Plan tomorrow. Sleep early."
      }
    ],
    "practice": [],
    "surprises": {
      "type": "quote",
      "content": "🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference."
    }
  },
  {
    "date": "2026-12-22",
    "dayNum": 253,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 37 · Day 253 | Backend",
    "tip": "Code is like humor. When you have to explain it, it's bad. — Cory House",
    "commQuote": "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
    "aptQuote": "Speed and accuracy aren't gifted — they're earned through repetition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-23",
    "dayNum": 254,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 37 · Day 254 | Database",
    "tip": "Debugging is twice as hard as writing code. — Brian Kernighan",
    "commQuote": "In interviews, confidence is contagious. So is the lack of it.",
    "aptQuote": "Every aptitude question is a pattern in disguise. Find the pattern.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-24",
    "dayNum": 255,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 37 · Day 255 | System Design / ML",
    "tip": "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
    "commQuote": "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
    "aptQuote": "Mental math is not a talent — it's a trained habit.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-25",
    "dayNum": 256,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 37 · Day 256 | ML / Projects",
    "tip": "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
    "commQuote": "Vocabulary is the clothing of thought. Dress your ideas well.",
    "aptQuote": "In aptitude, the second-fastest solver wins. The fastest checks their work.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "link": "https://leetcode.com/tag/math/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "link": "https://www.kaggle.com/learn"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/math/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "ML Project: House Price Prediction — full pipeline, feature importance, SHAP",
        "type": "build",
        "link": "https://www.kaggle.com/learn",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-26",
    "dayNum": 257,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "📅 Weekend — Week 37 · Day 257",
    "tip": "Your GitHub is your resume. Every commit tells a story.",
    "commQuote": "Silence is not weakness. Knowing when NOT to speak is mastery.",
    "aptQuote": "Train your brain to see ratios in everything.",
    "timeBlocks": [
      {
        "time": "7:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "8:30 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "9:30 AM",
        "label": "☕ Break"
      },
      {
        "time": "10:00 AM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "11:30 AM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "1:00 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:30 PM",
        "label": "🎤 Communication: GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "link": "https://www.indiabix.com/group-discussion/topics/"
      },
      {
        "time": "4:00 PM",
        "label": "🧮 Aptitude: TSD + Work Sprint: 25 problems, 80% accuracy target",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:30 PM",
        "label": "GitHub commit + plan Sunday",
        "link": "https://github.com/"
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "leetcode",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "lecture",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": false
      },
      {
        "label": "GD: structured practice — tech topic 5 min, evaluate your own argument quality",
        "type": "communication",
        "link": "https://www.indiabix.com/group-discussion/topics/",
        "needsVerify": false
      },
      {
        "label": "TSD + Work Sprint: 25 problems, 80% accuracy target",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-27",
    "dayNum": 258,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": true,
    "title": "🏆 Contest Sunday — Week 37 · Day 258",
    "tip": "System design is about understanding tradeoffs, not memorizing patterns.",
    "commQuote": "STAR method: Situation, Task, Action, Result. Use it always.",
    "aptQuote": "Shortcuts in aptitude are just deeply understood fundamentals.",
    "timeBlocks": [
      {
        "time": "8:00 AM",
        "label": "Wake naturally. Light breakfast."
      },
      {
        "time": "9:00 AM",
        "label": "⚡ LeetCode Weekly Contest (90 min)",
        "link": "https://leetcode.com/contest/"
      },
      {
        "time": "11:00 AM",
        "label": "Upsolve: understand all problems you didn't solve",
        "link": "https://www.youtube.com/@NeetCode"
      },
      {
        "time": "12:30 PM",
        "label": "🍽️ Lunch"
      },
      {
        "time": "2:00 PM",
        "label": "🎤 Communication: TED Talk + note 3 persuasion techniques used",
        "link": "https://www.youtube.com/user/TEDtalksDirector"
      },
      {
        "time": "3:30 PM",
        "label": "🧮 Aptitude: Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "link": "https://www.indiabix.com/"
      },
      {
        "time": "5:00 PM",
        "label": "GitHub: weekly commit + update README",
        "link": "https://github.com/"
      },
      {
        "time": "6:00 PM",
        "label": "🌿 Rest. Family. Recharge."
      }
    ],
    "practice": [
      {
        "label": "⚡ LeetCode Weekly Contest — attempt all problems",
        "type": "contest",
        "link": "https://leetcode.com/contest/",
        "needsVerify": true
      },
      {
        "label": "Upsolve contest: watch editorial for unsolved",
        "type": "leetcode",
        "link": "https://www.youtube.com/@NeetCode",
        "needsVerify": true
      },
      {
        "label": "TED Talk + note 3 persuasion techniques used",
        "type": "communication",
        "link": "https://www.youtube.com/user/TEDtalksDirector",
        "needsVerify": false
      },
      {
        "label": "Logical Reasoning: Puzzles + Seating — 30 min sprint",
        "type": "aptitude",
        "link": "https://www.indiabix.com/",
        "needsVerify": false
      },
      {
        "label": "GitHub: weekly commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-28",
    "dayNum": 259,
    "week": 37,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 37 · Day 259 | Frontend",
    "tip": "Data structures are the grammar of programming. Master the grammar.",
    "commQuote": "Active listening is not waiting for your turn to speak.",
    "aptQuote": "Quantitative ability is the entry ticket to every campus drive.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "link": "https://vercel.com/"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: LIS, LPS, Wildcard Matching, Burst Balloons",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)",
        "type": "build",
        "link": "https://vercel.com/",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": {
      "type": "meal",
      "content": "🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset."
    }
  },
  {
    "date": "2026-12-29",
    "dayNum": 260,
    "week": 38,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 38 · Day 260 | Backend",
    "tip": "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
    "commQuote": "Clarity beats cleverness. Say it simply. Say it once.",
    "aptQuote": "Logical reasoning isn't just for aptitude — it's how engineers think.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "link": "https://leetcode.com/tag/dynamic-programming/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "link": "https://www.youtube.com/@AsliEngineering"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: all 6 stock DP problems",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/dynamic-programming/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "Microservices: API Gateway, service discovery, circuit breaker concept",
        "type": "build",
        "link": "https://www.youtube.com/@AsliEngineering",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-30",
    "dayNum": 261,
    "week": 38,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 38 · Day 261 | Database",
    "tip": "React is easy to learn, hard to master. The gap is where jobs are won.",
    "commQuote": "Two sharp points beat ten vague ones in a GD.",
    "aptQuote": "A 2-second mental calculation is 60 seconds of edge over competition.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "link": "https://leetcode.com/tag/trie/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "link": "https://www.hackerrank.com/domains/sql"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Tries: insert, search, startsWith — build from scratch",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode: Implement Trie, Word Search II, Replace Words",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/trie/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "DB revision: SQL hard problems sprint — 20 LeetCode SQL",
        "type": "build",
        "link": "https://www.hackerrank.com/domains/sql",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  },
  {
    "date": "2026-12-31",
    "dayNum": 262,
    "week": 38,
    "phase": 2,
    "isBreak": false,
    "isSunday": false,
    "title": "🎓 College Day — Week 38 · Day 262 | System Design / ML",
    "tip": "SQL is 50 years old and still runs the world. Respect it.",
    "commQuote": "Interviewers remember how you made them feel more than what you said.",
    "aptQuote": "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
    "timeBlocks": [
      {
        "time": "6:00 AM",
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "link": "https://www.youtube.com/@takeUforward"
      },
      {
        "time": "7:15 AM",
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "link": "https://leetcode.com/tag/bit-manipulation/"
      },
      {
        "time": "8:15 AM",
        "label": "🎓 College / morning prep"
      },
      {
        "time": "5:00 PM",
        "label": "LeetCode Daily Problem (5-10 min warm-up first)",
        "link": "https://leetcode.com/problemset/"
      },
      {
        "time": "5:30 PM",
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "link": "https://www.youtube.com/@GauravSen"
      },
      {
        "time": "7:00 PM",
        "label": "GitHub: daily commit",
        "link": "https://github.com/"
      },
      {
        "time": "7:30 PM",
        "label": "🌿 Dinner / family time. No study after 8:30 PM."
      },
      {
        "time": "8:30 PM",
        "label": "Review notes (15 min). Set tomorrow's 1 priority. Sleep by 10:30."
      }
    ],
    "practice": [
      {
        "label": "DSA: Bit Manipulation: AND/OR/XOR tricks, count bits, single number",
        "type": "lecture",
        "link": "https://www.youtube.com/@takeUforward",
        "needsVerify": false
      },
      {
        "label": "DSA Practice: LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number",
        "type": "leetcode",
        "link": "https://leetcode.com/tag/bit-manipulation/",
        "needsVerify": true
      },
      {
        "label": "LeetCode Daily Problem",
        "type": "leetcode",
        "link": "https://leetcode.com/problemset/",
        "needsVerify": true
      },
      {
        "label": "SD: Database internals — B+ trees, WAL, LSM trees, columnar storage",
        "type": "build",
        "link": "https://www.youtube.com/@GauravSen",
        "needsVerify": true
      },
      {
        "label": "GitHub: daily commit",
        "type": "build",
        "link": "https://github.com/",
        "needsVerify": false
      }
    ],
    "surprises": null
  }
];

export function getScheduleByDate(dateStr) {
  return MASTER_SCHEDULE.find(d => d.date === dateStr) || null;
}

export function getScheduleByDayNum(n) {
  return MASTER_SCHEDULE.find(d => d.dayNum === n) || null;
}