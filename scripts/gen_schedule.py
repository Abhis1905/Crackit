from datetime import date, timedelta
import json

START = date(2026, 4, 14)
PHASE1_END = date(2026, 6, 1)   # last full-day
TOTAL_DAYS = 262

# ═══════════════════════════════════════════════════════════════════════
# RESOURCES
# ═══════════════════════════════════════════════════════════════════════
R = {
  # Java
  'java_kunal':     'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
  'java_telusko':   'https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5',
  'java_exercism':  'https://exercism.org/tracks/java',
  'java_w3':        'https://www.w3schools.com/java/',
  # DSA
  'striver_a2z':    'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/',
  'striver_sde':    'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/',
  'neetcode150':    'https://neetcode.io/practice',
  'neetcode_road':  'https://neetcode.io/roadmap',
  'lc_daily':       'https://leetcode.com/problemset/',
  'lc_contest':     'https://leetcode.com/contest/',
  'lc_array':       'https://leetcode.com/tag/array/',
  'lc_string':      'https://leetcode.com/tag/string/',
  'lc_ll':          'https://leetcode.com/tag/linked-list/',
  'lc_stack':       'https://leetcode.com/tag/stack/',
  'lc_queue':       'https://leetcode.com/tag/queue/',
  'lc_tree':        'https://leetcode.com/tag/tree/',
  'lc_graph':       'https://leetcode.com/tag/graph/',
  'lc_dp':          'https://leetcode.com/tag/dynamic-programming/',
  'lc_bs':          'https://leetcode.com/tag/binary-search/',
  'lc_twoptr':      'https://leetcode.com/tag/two-pointers/',
  'lc_slide':       'https://leetcode.com/tag/sliding-window/',
  'lc_backtrack':   'https://leetcode.com/tag/backtracking/',
  'lc_greedy':      'https://leetcode.com/tag/greedy/',
  'lc_heap':        'https://leetcode.com/tag/heap-priority-queue/',
  'lc_bit':         'https://leetcode.com/tag/bit-manipulation/',
  'lc_trie':        'https://leetcode.com/tag/trie/',
  'lc_math':        'https://leetcode.com/tag/math/',
  'codeforces':     'https://codeforces.com/',
  'dsa_striver_yt': 'https://www.youtube.com/@takeUforward',
  'dsa_neet_yt':    'https://www.youtube.com/@NeetCode',
  # SQL
  'sql_yt_mosh':    'https://www.youtube.com/watch?v=7S_tz1z_5bA',
  'sql_hackerrank': 'https://www.hackerrank.com/domains/sql',
  'sqlzoo':         'https://sqlzoo.net/',
  'postgres_yt':    'https://www.youtube.com/watch?v=qw--VYLpxG4',
  'postgres_ex':    'https://pgexercises.com/',
  # MongoDB
  'mongo_yt':       'https://www.youtube.com/watch?v=ExcRbA7fy_A',
  'mongo_uni':      'https://learn.mongodb.com/',
  # Redis
  'redis_yt':       'https://www.youtube.com/watch?v=jgpVdJB2sKQ',
  # Frontend
  'html_css_yt':    'https://www.youtube.com/watch?v=G3e-cpL7ofc',
  'tailwind_yt':    'https://www.youtube.com/watch?v=UBOj6rqRUME',
  'tailwind_docs':  'https://tailwindcss.com/docs',
  'react_chai':     'https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige',
  'react_docs':     'https://react.dev/',
  'react_traversy': 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
  'frontend_mentor':'https://www.frontendmentor.io/',
  'css_battle':     'https://cssbattle.dev/',
  # Spring Boot
  'spring_amigo':   'https://www.youtube.com/watch?v=9SGDpanrc8U',
  'spring_daily':   'https://www.youtube.com/@DailyCodeBuffer',
  'spring_docs':    'https://spring.io/guides',
  'spring_sec_yt':  'https://www.youtube.com/watch?v=her_7pa0vrg',
  # System Design
  'sd_primer':      'https://github.com/donnemartin/system-design-primer',
  'sd_gaurav':      'https://www.youtube.com/@GauravSen',
  'sd_arpit':       'https://www.youtube.com/@AsliEngineering',
  'sd_roadmap':     'https://roadmap.sh/system-design',
  # Python
  'py_corey':       'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU',
  'py_mosh':        'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
  # AI/ML
  'ml_andrew':      'https://www.youtube.com/playlist?list=PLkDaE6sCZn6FNC6YRfRQc_FbeQrF8BwGI',
  'kaggle':         'https://www.kaggle.com/learn',
  'fast_ai':        'https://www.fast.ai/',
  'huggingface':    'https://huggingface.co/learn',
  # Communication
  'comm_charisma':  'https://www.youtube.com/@Charismaoncommand',
  'comm_ted':       'https://www.youtube.com/user/TEDtalksDirector',
  'comm_ibit':      'https://www.interviewbit.com/hr-interview-questions/',
  'vocab_com':      'https://www.vocabulary.com/',
  'word_day':       'https://www.merriam-webster.com/word-of-the-day',
  'gd_topics':      'https://www.indiabix.com/group-discussion/topics/',
  # Aptitude
  'apt_yt':         'https://www.youtube.com/@PlacementAdda',
  'indiabix':       'https://www.indiabix.com/',
  'faceprep':       'https://www.faceprep.in/',
  'geeks_apt':      'https://www.geeksforgeeks.org/aptitude-questions-and-answers/',
  # GitHub
  'github':         'https://github.com/',
  'good_first':     'https://goodfirstissues.com/',
}

# ═══════════════════════════════════════════════════════════════════════
# QUOTE BANKS
# ═══════════════════════════════════════════════════════════════════════
TECH_Q = [
  "Make it work, make it right, make it fast. — Kent Beck",
  "First, solve the problem. Then, write the code. — John Johnson",
  "Code is like humor. When you have to explain it, it's bad. — Cory House",
  "Debugging is twice as hard as writing code. — Brian Kernighan",
  "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  "Any fool can write code a computer understands. Good programmers write code humans understand. — Fowler",
  "Your GitHub is your resume. Every commit tells a story.",
  "System design is about understanding tradeoffs, not memorizing patterns.",
  "Data structures are the grammar of programming. Master the grammar.",
  "Spring Boot isn't magic. Understanding what it automates makes you 10x.",
  "React is easy to learn, hard to master. The gap is where jobs are won.",
  "SQL is 50 years old and still runs the world. Respect it.",
  "Open source contribution is the best portfolio. Every PR is proof.",
  "The gap between good and great is understanding WHY, not just HOW.",
  "Time complexity matters in interviews. Space complexity matters in production.",
  "Every algorithm you master today is a question you'll ace tomorrow.",
  "Redis is the secret weapon of every high-traffic app. Learn it.",
  "Authentication isn't a feature — it's a foundation.",
  "The best ML model is the one your team can maintain. Start simple.",
  "Microservices solve scaling problems. Monoliths solve complexity problems.",
  "API design is UX for developers. Make it intuitive.",
  "Recursion is just a function that believes in itself.",
  "Dynamic programming: remember your past solutions to avoid past mistakes.",
  "Binary search: eliminate half, not one at a time.",
  "Graph problems are everywhere — social networks, maps, dependencies. Master them.",
  "JPMC, PayPal, Zomato — they all started with someone who refused to stop.",
  "OOP is not just syntax — it is a way of thinking about the world.",
  "Polymorphism: one interface, many forms. The power of abstraction.",
  "Collections Framework is Java's built-in toolkit. Know every tool.",
  "Streams and Lambdas: write less code, mean more.",
  "JWT is stateless auth. Understand the payload before you implement.",
  "Docker: it works on my machine + container = it works everywhere.",
  "PostgreSQL: when data integrity is non-negotiable.",
  "MongoDB flexibility is a feature — use it with discipline.",
  "Neural networks learn by failing and adjusting. So should you.",
  "Python is the lingua franca of AI. Every ML model starts with import.",
  "Tailwind utility-first means you think in design, not CSS files.",
  "NextJS: SSR means your page loads before the JS does. That's real UX.",
  "Kafka: when your monolith needs to breathe, queues are the lungs.",
  "SOLID principles are not rules — they are engineering wisdom.",
  "The best error message is the one that never shows up.",
  "Write tests before features. Your future self will thank you.",
  "Pair programming is not two people on one keyboard — it's two brains on one problem.",
  "Code reviews are not criticism — they are collaboration.",
  "The internet runs on open source. Contribute back.",
  "One meaningful PR is worth more than 100 lines of unused code.",
  "Study the company's tech stack before the interview. It shows you care.",
  "Your localhost is a garden. Keep it clean.",
  "Latency is the enemy of UX. Cache aggressively, measure always.",
  "You don't rise to your goals. You fall to your systems.",
]

COMM_Q = [
  "The most important thing in communication is hearing what isn't said. — Peter Drucker",
  "Effective communication is 20% what you know and 80% how you feel about what you know.",
  "The single biggest problem in communication is the illusion that it has taken place. — G.B. Shaw",
  "In interviews, confidence is contagious. So is the lack of it.",
  "In a GD, the goal isn't to win the argument — it's to advance the discussion.",
  "Vocabulary is the clothing of thought. Dress your ideas well.",
  "Silence is not weakness. Knowing when NOT to speak is mastery.",
  "STAR method: Situation, Task, Action, Result. Use it always.",
  "Active listening is not waiting for your turn to speak.",
  "Clarity beats cleverness. Say it simply. Say it once.",
  "Two sharp points beat ten vague ones in a GD.",
  "Interviewers remember how you made them feel more than what you said.",
  "Pausing before answering signals thoughtfulness, not weakness.",
  "Read one new word every day. In a year: 365 more weapons.",
  "Your body language speaks before your words do.",
  "Eye contact is the most direct path from mind to mind.",
  "Be sincere; be brief; be seated. — Franklin D. Roosevelt",
  "The best communicators are also the best listeners.",
  "Articulation improves with deliberate practice. Like coding.",
  "In cold outreach, be specific. Generic messages get ignored.",
  "Speak with structure: Point → Reason → Example → Point again.",
  "Vocabulary is not about using big words — it's about using the right words.",
  "A great introduction answers: Who, What, and Why should they care.",
  "Mirror the energy of the room — then elevate it slightly.",
  "Never memorize answers. Internalize the story. Let it flow naturally.",
]

APT_Q = [
  "The only way to learn mathematics is to do mathematics. — Paul Halmos",
  "Logic will get you from A to Z; imagination will get you everywhere. — Einstein",
  "Speed and accuracy aren't gifted — they're earned through repetition.",
  "Every aptitude question is a pattern in disguise. Find the pattern.",
  "Mental math is not a talent — it's a trained habit.",
  "In aptitude, the second-fastest solver wins. The fastest checks their work.",
  "Train your brain to see ratios in everything.",
  "Shortcuts in aptitude are just deeply understood fundamentals.",
  "Quantitative ability is the entry ticket to every campus drive.",
  "Logical reasoning isn't just for aptitude — it's how engineers think.",
  "A 2-second mental calculation is 60 seconds of edge over competition.",
  "Syllogisms train strict logical thinking — the same thinking that catches bugs.",
  "Critical reasoning: evaluate the argument, not the topic. Stay objective.",
  "Data interpretation is SQL thinking without a computer.",
  "Master percentages and you solve 30% of every aptitude paper.",
  "Every mock test is a map of your weaknesses. Read it.",
  "Speed comes from pattern recognition. Pattern recognition comes from volume.",
  "The mind is not a vessel to be filled but a fire to be kindled. — Plutarch",
  "Reasoning is the muscle of the mind. Train it daily.",
  "Probability is just structured common sense. Formalize your intuition.",
  "Consistent 30-minute daily aptitude practice beats 3-hour weekly cramming.",
  "Think in ratios, percentages, and proportions — always.",
  "Series questions test pattern vision. Train it like a muscle.",
  "Seating arrangements: draw first, solve later.",
  "Blood relations: tree diagram. Always.",
]

SURPRISES = [
  {'type':'meal',  'content':'🍕 CHEAT MEAL UNLOCKED! You earned it tonight. Order whatever you love. Zero guilt. Full fuel tomorrow.'},
  {'type':'quote', 'content':'🔥 The person who finished today is going to get the JPMC offer. Keep that identity locked in.'},
  {'type':'flex',  'content':'💪 GAME NIGHT PASS: 2 hrs of whatever you want — game, movie, anything. Brain-off time earned.'},
  {'type':'meal',  'content':'🍔 You crushed it. Comfort food tonight. Balance is not weakness — it is strategy.'},
  {'type':'quote', 'content':'⚡ MILESTONE: DSA ✓ Spring Boot ✓ React ✓ Communication ✓. You are building the exact profile top companies hire for.'},
  {'type':'flex',  'content':'🎮 BINGE PASS: One episode you have been putting off. Guilt-free. Then sleep well.'},
  {'type':'meal',  'content':'🍦 ICE CREAM + WALK: Go outside. Eat something cold. The algorithm will wait. You need the reset.'},
  {'type':'quote', 'content':'🌟 You are in the top 5% of students who actually follow structured plans. Most people only talk. You execute.'},
  {'type':'flex',  'content':'🛁 SELF-CARE EVENING: Long shower, journal, early sleep. Your productivity tomorrow will be 2x.'},
  {'type':'meal',  'content':'🍜 FEAST UNLOCKED: Tonight someone else cooks. Order out, call family, feed your soul.'},
  {'type':'quote', 'content':'🏆 You show up even on hard days. JPMC will notice that discipline in your interview.'},
  {'type':'flex',  'content':'📺 CHILL SESSION: Watch a tech documentary or a YouTube rabbit hole — guilt-free exploration time.'},
  {'type':'meal',  'content':'🍰 DESSERT NIGHT: Treat yourself to your favourite sweet. You\'ve been coding hard. Celebrate small wins.'},
  {'type':'quote', 'content':'🚀 Halfway through a tough week. Most students quit here. You did not. That is the difference.'},
]

# ═══════════════════════════════════════════════════════════════════════
# CURRICULUM — THE MASTER SEQUENCE
# 
# GOLDEN RULE: Practice must match what you just learned.
# Java basics → Java practice problems (not DSA)
# When OOP starts → light DSA can begin (arrays/strings — no complex DS yet)
# Complex DS (LL, Trees) → only after strong OOP foundation
#
# PHASE 1 (Days 1-49, Apr 14 – Jun 1): Full day, intensive
#   Week 1  (D1–7):   Java: Variables, operators, conditionals, loops, functions
#   Week 2  (D8–14):  Java: Arrays, Strings, StringBuilder, basic problem solving
#   Week 3  (D15–21): Java OOP: Classes, Objects, Constructors, this
#   Week 4  (D22–28): Java OOP: Inheritance, Polymorphism + DSA: Arrays (now OOP solid)
#   Week 5  (D29–35): Java OOP: Abstraction, Interfaces + DSA: Strings + Two Pointers
#   Week 6  (D36–42): Java: Collections + DSA: Sliding Window + Prefix Sum
#   Week 7  (D43–49): Java: Exceptions, Generics, Streams + DSA: LinkedList + Stack
#                     SQL starts. Frontend HTML/CSS starts.
#
# PHASE 2 (Days 50-262, Jun 2 – Jan 1): College, 4-5 hrs/day
#   Week 8–10  (D50–70):  Java: Threads, I/O, Stream API deep + DSA: Queue + BFS intro + SQL basics
#   Week 11–13 (D71–91):  DSA: Binary Search + Recursion + Trees + SQL intermediate
#   Week 14–16 (D92–112): DSA: BST + Heaps + Greedy + MongoDB intro + Tailwind/React begins
#   Week 17–19 (D113–133):DSA: Graphs (BFS/DFS/Topo) + Spring Boot starts + React basics
#   Week 20–22 (D134–154):DSA: DP basics + Spring Boot: REST + JPA + React: hooks + state
#   Week 23–25 (D155–175):DSA: DP advanced + Spring Security + JWT + React: routing + forms + PostgreSQL
#   Week 26–28 (D176–196):DSA: Hard problems + Full Stack project + Redis + System Design intro
#   Week 29–31 (D197–217):Python: basics → OOP → data structures + ML: numpy/pandas + Project 2
#   Week 32–34 (D218–238):ML: sklearn, deep learning, HuggingFace + Docker + System Design deep
#   Week 35–38 (D239–262):Interview Prep: Mock OAs, SD rounds, HR rounds, open source, polish
# ═══════════════════════════════════════════════════════════════════════

def d(n): return START + timedelta(days=n-1)

# Helper: day of week (0=Mon, 6=Sun)
def dow(day_date): return day_date.weekday()
def is_sun(day_date): return day_date.weekday() == 6
def is_sat(day_date): return day_date.weekday() == 5
def is_weekend(day_date): return day_date.weekday() >= 5
def is_ph1(day_date): return day_date <= PHASE1_END
def week_of(day_num): return (day_num - 1) // 7 + 1

def qtech(n): return TECH_Q[(n-1) % len(TECH_Q)]
def qcomm(n): return COMM_Q[(n-1) % len(COMM_Q)]
def qapt(n):  return APT_Q[(n-1) % len(APT_Q)]
def surprise(n): return SURPRISES[(n-1) % len(SURPRISES)]

# ═══════════════════════════════════════════════════════════════════════
# CURRICULUM TABLES — indexed by (week_number, day_of_week 0-6)
# Each entry: (topic_label, link, practice_label, practice_link, type)
# ═══════════════════════════════════════════════════════════════════════

# ── JAVA CURRICULUM (what to teach each week) ────────────────────────
JAVA_WEEKS = {
  1: [
    ('Java: JDK setup, IntelliJ, Hello World, print, comments', R['java_kunal'],
     'Java Exercism: Hello World + write 5 print programs', R['java_exercism'], 'lecture'),
    ('Java: Variables, Data Types (int, double, char, boolean, String)', R['java_kunal'],
     'W3Schools Java exercises: Variables + Type casting', R['java_w3'], 'practice'),
    ('Java: Operators — arithmetic, relational, logical, ternary', R['java_kunal'],
     'Write 10 programs: calculator, even/odd, max of 3, FizzBuzz', R['java_exercism'], 'practice'),
    ('Java: Conditionals — if/else/else-if, switch-case, nested if', R['java_kunal'],
     'Write programs: grade calculator, day name, simple menu', R['java_w3'], 'practice'),
    ('Java: Loops — for, while, do-while, break, continue', R['java_kunal'],
     'Write programs: factorial, Fibonacci, sum 1-N, multiplication table', R['java_exercism'], 'practice'),
    ('Java: Functions — declaration, parameters, return types, overloading', R['java_kunal'],
     'Write 8 functions: power, palindrome check, prime check, sum of digits', R['java_exercism'], 'practice'),
    ('Java: Review week. Recreate all 6 days programs from memory.', R['java_exercism'],
     'Exercism: complete 5 exercises from track', R['java_exercism'], 'practice'),
  ],
  2: [
    ('Java: Arrays — 1D, 2D, declaration, traversal, pass to function', R['java_kunal'],
     'Write: reverse array, find max/min, sum of array, rotate array', R['java_exercism'], 'practice'),
    ('Java: Arrays — sort, search, copy, Arrays class methods', R['java_kunal'],
     'Write: bubble sort, linear search, count occurrences in array', R['java_w3'], 'practice'),
    ('Java: Strings — String class, charAt, substring, length, indexOf', R['java_kunal'],
     'Write: reverse string, count vowels, remove spaces, string frequency', R['java_exercism'], 'practice'),
    ('Java: String — equals, compareTo, toUpperCase, split, StringBuilder', R['java_kunal'],
     'Write: palindrome string, anagram check, count words, compress string', R['java_exercism'], 'practice'),
    ('Java: String problems — practice 8 string programs', R['java_kunal'],
     'LeetCode: Reverse String, Valid Palindrome, Valid Anagram (Easy — string focus)', R['lc_string'], 'leetcode'),
    ('Java: Pattern programs — stars, numbers, triangle (loops+arrays)', R['java_kunal'],
     'Write 10 pattern programs. These build loop mastery.', R['java_exercism'], 'practice'),
    ('Java Week 2 review: solve previous programs faster, start Week 3 preview', R['java_exercism'],
     'LeetCode: Two Sum (array, use HashMap)', R['lc_array'], 'leetcode'),
  ],
  3: [
    ('Java OOP: Why OOP? Class, Object, instance variables, instance methods', R['java_kunal'],
     'Create: Student class (name, marks, grade). BankAccount class (deposit, withdraw).', R['java_exercism'], 'practice'),
    ('Java OOP: Constructor — default, parameterized, this keyword', R['java_kunal'],
     'Create: Employee class with constructors. Book class. Shape class.', R['java_exercism'], 'practice'),
    ('Java OOP: Static vs instance, static methods, static variables, final', R['java_kunal'],
     'Write: Counter class (static count), Constants class, Math utility class', R['java_exercism'], 'practice'),
    ('Java OOP: Access modifiers — public, private, protected, default. Getters/Setters', R['java_kunal'],
     'Refactor: BankAccount with private fields + getters/setters + validation', R['java_exercism'], 'practice'),
    ('Java OOP: toString(), equals(), hashCode() override. Object class.', R['java_kunal'],
     'Override all 3 in: Student, BankAccount, Product classes', R['java_exercism'], 'practice'),
    ('Java OOP: Practice day — 3 class designs from scratch (mini projects)', R['java_telusko'],
     'Design: Library system (Book, Member, Library), ATM simulation', R['java_exercism'], 'practice'),
    ('OOP Review + LeetCode: Design problems using OOP thinking', R['java_telusko'],
     'LeetCode: Design Parking System, Design HashMap (OOP-style)', R['lc_array'], 'leetcode'),
  ],
  4: [
    ('Java OOP: Inheritance — extends, super(), method inheritance, IS-A', R['java_kunal'],
     'Build: Animal→Dog→GoldenRetriever chain. Vehicle→Car→ElectricCar.', R['java_exercism'], 'practice'),
    ('Java OOP: Polymorphism — method overriding, @Override, runtime dispatch', R['java_kunal'],
     'Build: Shape hierarchy (Circle, Rect, Triangle) with area() polymorphic', R['java_exercism'], 'practice'),
    ('DSA: Arrays — Introduction, complexity analysis, why arrays?', R['dsa_striver_yt'],
     'LeetCode Easy Arrays: Find Max, Second Max, Move Zeros, Remove Duplicates', R['lc_array'], 'leetcode'),
    ('DSA: Arrays — Two pointer: reverse, sort 0s-1s-2s, check palindrome', R['dsa_striver_yt'],
     'LeetCode: Container With Most Water, Two Sum II, Reverse Array', R['lc_twoptr'], 'leetcode'),
    ('Java OOP: Abstraction — abstract class, abstract methods, why abstraction?', R['java_kunal'],
     'Build: Payment system (abstract pay()), Notification system (abstract send())', R['java_exercism'], 'practice'),
    ('Java OOP: Interfaces — interface, implements, multiple interfaces, default methods', R['java_kunal'],
     'Build: Flyable + Swimmable + Runnable interfaces on animals', R['java_exercism'], 'practice'),
    ('DSA: Arrays — Kadane algorithm, max subarray, prefix sum intro', R['dsa_striver_yt'],
     'LeetCode: Maximum Subarray, Best Time to Buy Stock, Product Except Self', R['lc_array'], 'leetcode'),
  ],
  5: [
    ('Java OOP: Interface vs Abstract Class — when to use which, real examples', R['java_telusko'],
     'Refactor previous projects: choose abstract vs interface properly', R['java_exercism'], 'practice'),
    ('DSA: Strings — character array, ASCII, string manipulation algorithms', R['dsa_striver_yt'],
     'LeetCode: Longest Common Prefix, Count & Say, Roman to Integer (string focus)', R['lc_string'], 'leetcode'),
    ('DSA: Strings — anagram detection, palindrome, frequency counting', R['dsa_striver_yt'],
     'LeetCode: Group Anagrams, Valid Anagram, First Unique Character, Ransom Note', R['lc_string'], 'leetcode'),
    ('DSA: Two Pointers — pattern deep dive, when to use, approach', R['dsa_striver_yt'],
     'LeetCode: Three Sum, Four Sum, Trapping Rain Water (two pointer), Valid Palindrome II', R['lc_twoptr'], 'leetcode'),
    ('Java: Enums, Wrapper classes, autoboxing/unboxing, Scanner, Math class', R['java_kunal'],
     'Practice: use all wrapper methods, write enum-based day/month programs', R['java_exercism'], 'practice'),
    ('DSA: Sliding Window — fixed window, variable window, when to use', R['dsa_striver_yt'],
     'LeetCode: Max sum subarray of size K, Longest substring without repeat', R['lc_slide'], 'leetcode'),
    ('DSA: Sliding Window + Hashing — Minimum Window Substring, Permutation in String', R['dsa_striver_yt'],
     'LeetCode: Permutation in String, Minimum Window Substring, Fruit Into Baskets', R['lc_slide'], 'leetcode'),
  ],
  6: [
    ('Java: Collections — List, ArrayList, LinkedList (Java List interface)', R['java_kunal'],
     'Practice: CRUD with ArrayList + LinkedList. Iterate, sort, search.', R['java_exercism'], 'practice'),
    ('Java: Collections — HashMap, HashSet, TreeMap, LinkedHashMap', R['java_kunal'],
     'Practice: word frequency counter, anagram grouper, unique elements with Set', R['java_exercism'], 'practice'),
    ('DSA: Prefix Sum / Hash Map patterns — subarray sum equals K, longest K-sum', R['dsa_striver_yt'],
     'LeetCode: Subarray Sum Equals K, Contiguous Array, Find Pivot Index', R['lc_array'], 'leetcode'),
    ('Java: Collections — Stack, Queue, PriorityQueue, Deque in Java', R['java_kunal'],
     'Practice: implement stack with ArrayList, BFS with Queue, PriorityQueue sorting', R['java_exercism'], 'practice'),
    ('DSA: LinkedList — singly LL: insert head/tail/pos, delete, traversal', R['dsa_striver_yt'],
     'LeetCode: Reverse Linked List, Middle of LL, Remove Nth Node (LL easy set)', R['lc_ll'], 'leetcode'),
    ('DSA: LinkedList — cycle detection (Floyd), merge sorted, palindrome LL', R['dsa_striver_yt'],
     'LeetCode: Linked List Cycle, Merge Two Sorted Lists, Palindrome LL', R['lc_ll'], 'leetcode'),
    ('DSA: Stack — monotonic stack, Next Greater Element, Daily Temperatures', R['dsa_striver_yt'],
     'LeetCode: Valid Parentheses, Min Stack, Next Greater Element I, Daily Temperatures', R['lc_stack'], 'leetcode'),
  ],
  7: [
    ('Java: Exception Handling — try/catch/finally, throw, throws, custom exceptions', R['java_kunal'],
     'Add exception handling to BankAccount, Library system. Write custom exceptions.', R['java_exercism'], 'practice'),
    ('Java: Generics — generic class, generic methods, bounded type, wildcard', R['java_kunal'],
     'Build: generic Pair<T,U>, generic Stack<T>, generic sortAndPrint<T extends Comparable>', R['java_exercism'], 'practice'),
    ('DSA: Queue — BFS intro, implement Queue, Sliding Window Max (deque)', R['dsa_striver_yt'],
     'LeetCode: Implement Queue using Stacks, Sliding Window Maximum, Number of Recent Calls', R['lc_queue'], 'leetcode'),
    ('Java: Streams — filter, map, reduce, collect, sorted, distinct, Collectors', R['java_kunal'],
     'Solve 10 collection problems using Streams API (no loops allowed)', R['java_exercism'], 'practice'),
    ('Java: Lambdas, Functional Interfaces — Predicate, Function, Consumer, Supplier', R['java_kunal'],
     'Refactor: convert all anonymous inner class code to lambdas in all past projects', R['java_exercism'], 'practice'),
    ('SQL: Why SQL? Relational DB, tables, rows, columns, primary key, foreign key', R['sql_yt_mosh'],
     'SQLZoo: SELECT basics — 10 problems', R['sqlzoo'], 'practice'),
    ('Frontend: HTML5 structure, semantic tags, forms, links, images — full basics', R['html_css_yt'],
     'Build: personal profile HTML page (no CSS yet) — structure only', None, 'build'),
  ],
}

# ── PHASE 2 CURRICULUM — indexed by (p2_week, dow) ───────────────────
# p2_week 1 = calendar week 8 (day 50+)

# Helper lookup for phase 2
def p2_curriculum(p2w, day_date):
  """Returns dict with dsa, backend, frontend, db, sd, python/ml tasks for the day"""
  wd = day_date.weekday()  # 0=Mon

  # ── DSA TOPICS by p2_week ──
  dsa_map = {
    (1,0): ('Binary Search: classic template, lower/upper bound', R['lc_bs'], 'LeetCode BS: Binary Search, First Bad Version, Search Insert Position', R['lc_bs']),
    (1,1): ('Binary Search: Search Rotated Sorted Array, Find Peak Element', R['dsa_striver_yt'], 'LeetCode BS medium: Search Rotated, Find Peak, Find Min in Rotated', R['lc_bs']),
    (1,2): ('Binary Search on Answer: Koko Eating Bananas, Min Days Bouquets', R['dsa_striver_yt'], 'LeetCode: Koko Eating Bananas, Capacity to Ship, Split Array Largest Sum', R['lc_bs']),
    (1,3): ('Recursion: base case, recursive tree, tail recursion, memoize intro', R['dsa_striver_yt'], 'Write: power(x,n), sum of digits, reverse array — recursive', R['lc_math']),
    (1,4): ('Recursion: subsets, permutations — build recursion tree visually', R['dsa_striver_yt'], 'LeetCode: Subsets, Permutations, Combinations (backtracking-lite)', R['lc_backtrack']),
    (2,0): ('Trees: Binary Tree — node, insert, BFS level-order, DFS in/pre/post', R['dsa_striver_yt'], 'LeetCode Trees Easy: Max Depth, Symmetric Tree, Invert Binary Tree', R['lc_tree']),
    (2,1): ('Trees: Height, Diameter, Max Path Sum, Level Order Traversal', R['dsa_striver_yt'], 'LeetCode Trees Medium: Diameter, Max Path Sum, Level Order', R['lc_tree']),
    (2,2): ('Trees: LCA, Path Sum II, Serialize/Deserialize, Zigzag Level Order', R['dsa_striver_yt'], 'LeetCode: LCA, Path Sum, Serialize Binary Tree, Zigzag Level Order', R['lc_tree']),
    (2,3): ('BST: properties, insert/delete/search, validate BST, Kth Smallest', R['dsa_striver_yt'], 'LeetCode BST: Validate BST, Kth Smallest, Convert Sorted Array to BST', R['lc_tree']),
    (2,4): ('Trees: Right View, Left View, Boundary Traversal, Vertical Order', R['dsa_striver_yt'], 'LeetCode: Binary Tree Right Side View, Vertical Order, Top View', R['lc_tree']),
    (3,0): ('Heaps: Max/Min Heap, heapify, heap sort, PriorityQueue in Java', R['dsa_striver_yt'], 'LeetCode Heap Easy-Medium: Kth Largest, Last Stone Weight, Sort K Sorted', R['lc_heap']),
    (3,1): ('Heaps: Top K Frequent, Merge K Sorted Lists, Find Median Stream', R['dsa_striver_yt'], 'LeetCode Heap Hard: Merge K Sorted, Find Median from Stream, Task Scheduler', R['lc_heap']),
    (3,2): ('Greedy: Activity Selection, Jump Game, Gas Station, Assign Cookies', R['dsa_striver_yt'], 'LeetCode Greedy: Jump Game, Jump Game II, Gas Station, Candy', R['lc_greedy']),
    (3,3): ('Greedy: N-meetings, Fractional Knapsack, Minimum Platforms, Job Sequencing', R['dsa_striver_yt'], 'Striver Sheet: Greedy section — complete 6 problems', R['striver_sde']),
    (3,4): ('Backtracking deep dive: N-Queens, Sudoku Solver, Word Search', R['dsa_striver_yt'], 'LeetCode Backtracking Hard: N-Queens, Sudoku Solver, Word Search', R['lc_backtrack']),
    (4,0): ('Graphs: representation, BFS, DFS — islands, connected components', R['dsa_striver_yt'], 'LeetCode Graphs: Number of Islands, Flood Fill, Clone Graph', R['lc_graph']),
    (4,1): ('Graphs: Topological Sort — Kahn\'s BFS + DFS approach', R['dsa_striver_yt'], 'LeetCode: Course Schedule, Course Schedule II, Alien Dictionary', R['lc_graph']),
    (4,2): ('Graphs: Dijkstra shortest path, Bellman-Ford', R['dsa_striver_yt'], 'LeetCode: Network Delay Time, Cheapest Flights, Path with Min Effort', R['lc_graph']),
    (4,3): ('Graphs: Union Find (DSU) — islands merge, redundant connections', R['dsa_striver_yt'], 'LeetCode: Redundant Connection, Number of Provinces, Graph Valid Tree', R['lc_graph']),
    (4,4): ('Graphs: MST (Prim/Kruskal), Bridges, Articulation Points', R['dsa_striver_yt'], 'LeetCode: Min Cost to Connect Points, Critical Connections', R['lc_graph']),
    (5,0): ('DP: 1D — Climbing Stairs, House Robber, Min Cost Climbing, Frog Jump', R['dsa_striver_yt'], 'LeetCode DP 1D: Climbing Stairs, House Robber, Fibonacci, Tribonacci', R['lc_dp']),
    (5,1): ('DP: Knapsack 0/1 — subset sum, equal partition, target sum', R['dsa_striver_yt'], 'Striver DP Sheet: Knapsack, Subset Sum, Partition Equal Subset', R['lc_dp']),
    (5,2): ('DP: Knapsack Unbounded — Coin Change, Rod Cutting', R['dsa_striver_yt'], 'LeetCode DP: Coin Change, Coin Change II, Rod Cutting', R['lc_dp']),
    (5,3): ('DP: 2D — Unique Paths, Grid Min Path, Triangle, Minimum Falling Path', R['dsa_striver_yt'], 'LeetCode DP 2D: Unique Paths, Unique Paths II, Min Path Sum, Triangle', R['lc_dp']),
    (5,4): ('DP: LCS — Longest Common Subsequence, Edit Distance, Print LCS', R['dsa_striver_yt'], 'LeetCode: LCS, Edit Distance, Longest Common Substring, Delete Operations', R['lc_dp']),
    (6,0): ('DP: LIS, LPS, Wildcard Matching, Burst Balloons', R['dsa_striver_yt'], 'LeetCode DP Hard: LIS, Longest Palindromic Subsequence, Wildcard Matching', R['lc_dp']),
    (6,1): ('DP: Stock problems — Best Time I/II/III/IV, Cooldown, Transaction Fee', R['dsa_striver_yt'], 'LeetCode: all 6 stock DP problems', R['lc_dp']),
    (6,2): ('Tries: insert, search, startsWith — build from scratch', R['dsa_striver_yt'], 'LeetCode: Implement Trie, Word Search II, Replace Words', R['lc_trie']),
    (6,3): ('Bit Manipulation: AND/OR/XOR tricks, count bits, single number', R['dsa_striver_yt'], 'LeetCode Bit: Single Number I/II, Count Bits, Reverse Bits, Missing Number', R['lc_bit']),
    (6,4): ('Math: GCD/LCM, Sieve, Fast Exponentiation, Modular Arithmetic', R['dsa_striver_yt'], 'LeetCode Math: Pow(x,n), Count Primes, Happy Number, Excel Column', R['lc_math']),
  }

  # Default for p2w > 6: mock / revision
  def get_dsa(pw, wd_):
    key = (min(pw, 6), wd_ % 5)
    if key in dsa_map:
      return dsa_map[key]
    return ('DSA Mock: 2 medium problems timed 45 min each', R['neetcode150'],
            'Upsolve + NeetCode 150 remaining problems', R['neetcode150'])

  # ── BACKEND (Spring Boot) — starts p2w 7 ──
  spring_seq = [
    ('Spring Boot: Intro, Spring Initializr, project structure, first REST endpoint', R['spring_amigo']),
    ('Spring Boot: @RestController, @GetMapping, @PostMapping, request/response', R['spring_amigo']),
    ('Spring Boot: @Service, @Repository, DI with @Autowired, component scan', R['spring_amigo']),
    ('Spring Boot: Spring Data JPA — @Entity, @Id, @GeneratedValue, CrudRepository', R['spring_amigo']),
    ('Spring Boot: JPA relations — @OneToMany, @ManyToOne, @JoinColumn', R['spring_amigo']),
    ('Spring Boot: Full CRUD REST API with JPA — Student Management API', R['spring_amigo']),
    ('Spring Boot: Exception handling — @ControllerAdvice, @ExceptionHandler, custom errors', R['spring_docs']),
    ('Spring Boot: Validation — @Valid, @NotNull, @Size, @Email, custom validator', R['spring_docs']),
    ('Spring Boot: Spring Security intro — filter chain, UserDetails, WebSecurityConfig', R['spring_sec_yt']),
    ('Spring Boot: JWT Auth — generate JWT, validate, JwtFilter, secure endpoints', R['spring_sec_yt']),
    ('Spring Boot: refresh tokens, role-based access (@PreAuthorize)', R['spring_sec_yt']),
    ('Spring Boot: connect MongoDB — MongoRepository, @Document, queries', R['spring_docs']),
    ('Spring Boot: connect PostgreSQL — datasource config, JPA with Postgres', R['spring_docs']),
    ('Spring Boot: Redis caching — @Cacheable, @CacheEvict, RedisTemplate', R['redis_yt']),
    ('Spring Boot: file upload/download, multipart, serve static resources', R['spring_docs']),
    ('Spring Boot: API versioning, pagination, HATEOAS, Swagger/OpenAPI', R['spring_docs']),
    ('Spring Boot: WebSocket intro — STOMP, real-time chat concept', R['spring_docs']),
    ('Spring Boot: Async — @Async, CompletableFuture, thread pool config', R['spring_docs']),
    ('Spring Boot: Testing — @SpringBootTest, MockMvc, @DataJpaTest, Mockito', R['spring_docs']),
    ('Spring Boot: Build Full Project — E-commerce backend (Product/Cart/Order/Auth)', R['spring_amigo']),
    ('Spring Boot: Add Redis cache + rate limiting + Swagger docs to project', R['spring_docs']),
    ('Spring Boot: Dockerize — Dockerfile, docker-compose (app + db + redis)', R['spring_docs']),
    ('Spring Boot: Deploy to Railway/Render — CI/CD concept, env variables', 'https://railway.app/'),
    ('Microservices: mono vs micro, when to split, Spring Cloud Eureka intro', R['sd_arpit']),
    ('Microservices: API Gateway, service discovery, circuit breaker concept', R['sd_arpit']),
  ]

  # ── FRONTEND (HTML→CSS→Tailwind→React) — starts p2w 1 for HTML/CSS, React p2w 5 ──
  frontend_seq = [
    ('CSS: selectors, box model, flexbox, grid — rebuild HTML page with CSS', R['html_css_yt']),
    ('CSS: responsive design, media queries, CSS variables, transitions', R['html_css_yt']),
    ('Tailwind CSS: setup with HTML, utility classes, responsive prefixes', R['tailwind_yt']),
    ('Tailwind: flex, grid, spacing, typography, colors — rebuild page in Tailwind', R['tailwind_docs']),
    ('React: JSX, functional components, props — scaffold with Vite', R['react_chai']),
    ('React: useState hook — counter, toggle, form input', R['react_chai']),
    ('React: useEffect hook — fetch API data, cleanup, dependencies', R['react_docs']),
    ('React: Lists, keys, conditional rendering, event handlers', R['react_docs']),
    ('React + Tailwind: Build responsive Todo App (CRUD, filter, localStorage)', R['react_chai']),
    ('React: React Router v6 — pages, Link, useParams, protected route', R['react_chai']),
    ('React: Custom hooks — useFetch, useDebounce, useLocalStorage', R['react_docs']),
    ('React: useContext — global state (theme, auth), avoid prop drilling', R['react_docs']),
    ('React: Forms — controlled components, React Hook Form, validation', R['react_docs']),
    ('React: Axios — GET/POST/PUT/DELETE, loading/error states, interceptors', R['react_docs']),
    ('React + Spring Boot: connect frontend to backend API (CORS, headers)', R['react_docs']),
    ('React: Auth flow — login page, store JWT, protected routes, logout', R['react_chai']),
    ('React: Redux Toolkit — createSlice, useSelector, useDispatch', R['react_docs']),
    ('React: Performance — useMemo, useCallback, React.memo, code splitting', R['react_docs']),
    ('React: Build full Dashboard UI — sidebar, charts (Recharts), dark mode', R['react_chai']),
    ('NextJS: intro, file-based routing, SSR vs SSG, getServerSideProps', 'https://nextjs.org/docs'),
    ('NextJS: API routes, middleware, Image component, deploy to Vercel', 'https://nextjs.org/docs'),
    ('Full Stack: Connect NextJS frontend to Spring Boot API — full integration', 'https://nextjs.org/docs'),
    ('Frontend Mentor: complete 1 free challenge (card, landing page)', R['frontend_mentor']),
    ('CSS Battle: 5 challenges — pure CSS/Tailwind shapes and layouts', R['css_battle']),
    ('Portfolio Website: build and deploy personal portfolio (NextJS + Tailwind)', 'https://vercel.com/'),
  ]

  # ── DATABASE SEQUENCE ── starts with SQL week 7 ph1, then mongo, postgres, redis
  db_seq = [
    ('SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 HackerRank problems', R['sql_hackerrank']),
    ('SQL: JOINs — INNER/LEFT/RIGHT/FULL — 15 problems', R['sqlzoo']),
    ('SQL: GROUP BY, HAVING, COUNT, SUM, AVG — 15 problems', R['sql_hackerrank']),
    ('SQL: Subqueries, nested SELECT, EXISTS — 15 problems', R['sql_hackerrank']),
    ('SQL: Window functions — ROW_NUMBER, RANK, LAG, LEAD — 10 problems', R['sql_hackerrank']),
    ('SQL: CTEs, recursive CTEs, query optimization, EXPLAIN', R['postgres_ex']),
    ('SQL: Indexes — types, when to use, B-tree, query performance', R['postgres_ex']),
    ('SQL: Transactions — ACID, COMMIT, ROLLBACK, isolation levels', R['postgres_ex']),
    ('SQL: DB design — ER diagrams, normalization 1NF/2NF/3NF, schema design', R['sql_yt_mosh']),
    ('PostgreSQL: setup, psql, pg_dump, schema vs public, SERIAL, constraints', R['postgres_yt']),
    ('PostgreSQL exercises: pgexercises.com — 20 problems', R['postgres_ex']),
    ('MongoDB: intro, Atlas, Collections, Documents, BSON, CRUD in Compass', R['mongo_yt']),
    ('MongoDB: query operators ($gt $lt $in $and $or), projections, sort, limit', R['mongo_uni']),
    ('MongoDB: aggregation pipeline — $match $group $sort $project $lookup', R['mongo_yt']),
    ('MongoDB: indexes, schema design — embedding vs referencing, when each', R['mongo_uni']),
    ('MongoDB: TTL indexes, text search, geospatial, transactions', R['mongo_uni']),
    ('Redis: data types, GET/SET/EXPIRE, lists, sets, sorted sets, hashes', R['redis_yt']),
    ('Redis: caching patterns — cache-aside, write-through, TTL strategy', R['redis_yt']),
    ('Redis: pub/sub, streams, use Redis as session store + queue', R['redis_yt']),
    ('DB revision: SQL hard problems sprint — 20 LeetCode SQL', R['sql_hackerrank']),
  ]

  # ── SYSTEM DESIGN — starts p2w 13 ──
  sd_seq = [
    ('SD: Scalability — horizontal vs vertical, stateless services, load balancer', R['sd_gaurav']),
    ('SD: Caching — CDN, Redis, cache invalidation, eviction policies (LRU/LFU)', R['sd_arpit']),
    ('SD: Databases — SQL vs NoSQL, sharding, replication, read replicas', R['sd_primer']),
    ('SD: Design URL Shortener — full walkthrough: API, DB, cache, scale', R['sd_arpit']),
    ('SD: CAP theorem, ACID vs BASE, eventual consistency, Cassandra vs MySQL', R['sd_primer']),
    ('SD: Design Twitter/Instagram — feed, storage, timeline, fanout', R['sd_gaurav']),
    ('SD: Message queues — Kafka/RabbitMQ, async processing, event-driven arch', R['sd_arpit']),
    ('SD: Design WhatsApp — messaging, WebSocket, offline queue, encryption', R['sd_primer']),
    ('SD: Rate limiting — token bucket, leaky bucket, sliding window', R['sd_gaurav']),
    ('SD: Design Netflix — CDN, HLS streaming, recommendation engine', R['sd_arpit']),
    ('SD: Consistent hashing, virtual nodes, distributed caching', R['sd_primer']),
    ('SD: Design Uber — geo-indexing, matching, surge pricing, real-time location', R['sd_gaurav']),
    ('SD: Microservices patterns — API gateway, service mesh, circuit breaker', R['sd_arpit']),
    ('SD: Design Google Search — crawling, indexing, PageRank, caching', R['sd_primer']),
    ('SD: Database internals — B+ trees, WAL, LSM trees, columnar storage', R['sd_gaurav']),
  ]

  # ── PYTHON / AI/ML — starts p2w 15 ──
  python_ml_seq = [
    ('Python: syntax, variables, data types, input/output, f-strings', R['py_corey']),
    ('Python: lists, tuples, dicts, sets, list comprehensions', R['py_corey']),
    ('Python: functions, *args/**kwargs, lambda, map/filter, generators', R['py_corey']),
    ('Python: OOP — classes, inheritance, magic methods (__init__, __str__, __repr__)', R['py_mosh']),
    ('Python: file I/O, JSON, CSV, error handling, context managers', R['py_mosh']),
    ('Python: modules, packages, virtual environments, pip, requirements.txt', R['py_corey']),
    ('Python: NumPy — arrays, vectorized ops, broadcasting, slicing', R['kaggle']),
    ('Python: Pandas — Series, DataFrame, read_csv, groupby, merge, pivot', R['kaggle']),
    ('Python: Matplotlib + Seaborn — line, bar, scatter, heatmap, EDA on dataset', R['kaggle']),
    ('ML: What is ML? Types (supervised/unsupervised/RL), bias/variance, overfitting', R['ml_andrew']),
    ('ML: Linear Regression — cost function, gradient descent, sklearn, evaluation', R['ml_andrew']),
    ('ML: Logistic Regression — classification, sigmoid, decision boundary, metrics', R['ml_andrew']),
    ('ML: Decision Trees + Random Forest + Gradient Boosting — theory + sklearn', R['kaggle']),
    ('ML: SVM, KNN, Naive Bayes — when to use each + practice on UCI datasets', R['kaggle']),
    ('ML: Feature engineering — encoding, scaling, missing values, pipelines', R['kaggle']),
    ('ML: Model evaluation — cross-validation, AUC-ROC, F1, confusion matrix', R['kaggle']),
    ('Kaggle: Titanic challenge — EDA → feature eng → model → submit', R['kaggle']),
    ('Deep Learning: neural networks, forward/back propagation, activation functions', R['ml_andrew']),
    ('Deep Learning: TensorFlow/Keras — build first NN, MNIST digit classification', R['fast_ai']),
    ('Deep Learning: CNNs — conv layers, pooling, image classification from scratch', R['fast_ai']),
    ('Deep Learning: Transfer learning — fine-tune ResNet on custom image dataset', R['huggingface']),
    ('NLP: text preprocessing, tokenization, TF-IDF, word embeddings (Word2Vec)', R['huggingface']),
    ('NLP: HuggingFace — load pretrained BERT, fine-tune for text classification', R['huggingface']),
    ('ML Project: Sentiment Analysis (NLP + BERT) — train, evaluate, deploy HF Spaces', R['huggingface']),
    ('ML Project: House Price Prediction — full pipeline, feature importance, SHAP', R['kaggle']),
  ]

  dsa_t, dsa_l, dsa_pt, dsa_pl = get_dsa(p2w, wd)

  # Get from sequences by p2_week and day rotation
  spring_idx = max(0, (p2w - 7)) * 5 + (wd % 5) if p2w >= 7 else None
  fe_idx = (p2w - 1) * 2 + (wd % 2)
  db_idx = max(0, (p2w - 1)) * 1 + (wd % 2)
  sd_idx = max(0, (p2w - 13)) * 2 + (wd % 2) if p2w >= 13 else None
  ml_idx = max(0, (p2w - 15)) * 2 + (wd % 2) if p2w >= 15 else None

  def safe_get(lst, idx):
    if idx is None or idx < 0: return None
    return lst[min(idx, len(lst)-1)]

  spring = safe_get(spring_seq, spring_idx)
  fe = safe_get(frontend_seq, min(fe_idx, len(frontend_seq)-1))
  db = safe_get(db_seq, min(db_idx, len(db_seq)-1))
  sd = safe_get(sd_seq, sd_idx)
  ml = safe_get(python_ml_seq, ml_idx)

  return {
    'dsa': (dsa_t, dsa_l, dsa_pt, dsa_pl),
    'spring': spring,
    'frontend': fe,
    'db': db,
    'sd': sd,
    'ml': ml,
  }

# ═══════════════════════════════════════════════════════════════════════
# COMMUNICATION — Phase 1: Daily | Phase 2: Weekends only
# ═══════════════════════════════════════════════════════════════════════
COMM_PH1 = [
  ('Mirror exercise: 2-min self introduction. Record. Watch back. Improve.', R['comm_charisma']),
  ('TED Talk: watch 1 talk, note 3 rhetorical techniques used', R['comm_ted']),
  ('STAR Method: write answers to 3 behavioral questions', R['comm_ibit']),
  ('Vocabulary: learn 10 professional words, use each in a sentence', R['vocab_com']),
  ('GD: pick 1 hot topic, speak 2 min uninterrupted, record yourself', R['gd_topics']),
  ('HR Q: Tell me about yourself — write 3 versions (60s, 90s, 2min)', R['comm_ibit']),
  ('Body Language: watch Charisma on Command video + practice power pose', R['comm_charisma']),
  ('Pronunciation: 5 tongue twisters + 10-min shadowing a speaker you admire', R['comm_charisma']),
  ('TED: Simon Sinek — Start With Why. Note structure of his speech.', 'https://www.youtube.com/watch?v=qp0HIF3SfI4'),
  ('Vocabulary: 10 words from BBC/The Hindu. Etymology for 3 of them.', R['word_day']),
  ('Mock HR: Strengths & Weaknesses — write 3 each. Practice saying them aloud.', R['comm_ibit']),
  ('GD: "AI will replace programmers" — structure opening, 3 points, conclusion', R['gd_topics']),
  ('Active Listening: podcast 20 min → summarize in 5 sentences from memory', 'https://softwareengineeringdaily.com/'),
  ('Email writing: formal, semi-formal, informal — write 1 of each', 'https://www.grammarly.com/'),
  ('TED: Amy Cuddy — Body Language. Practice the posture drill.', 'https://www.youtube.com/watch?v=Ks-_Mh1QhMc'),
  ('LinkedIn: set up profile or improve it. Add a post about something you learned.', 'https://www.linkedin.com/'),
  ('Vocabulary Quiz: test yourself on last 2 weeks of words', R['vocab_com']),
  ('GD: "Work from home vs office" — argue both sides, 3 min each', R['gd_topics']),
  ('Mock full HR round: 5 questions, timed, recorded', R['comm_ibit']),
  ('Storytelling: describe your best project in 90 seconds. STAR format.', R['comm_charisma']),
  ('Word of the Day ritual: Merriam-Webster. Use word 5x today.', R['word_day']),
  ('Cold outreach: write a LinkedIn message to 1 developer you admire. Be specific.', 'https://www.linkedin.com/'),
  ('GD: "Is cryptocurrency the future of money?" — structured debate', R['gd_topics']),
  ('HR Q: Why this company? Why should we hire you? 3 versions.', R['comm_ibit']),
  ('Elevator pitch: 45-second pitch. Who you are, what you build, what you want.', R['comm_charisma']),
  ('TED: talk of your choice. After: speak for 5 min on the topic aloud.', R['comm_ted']),
  ('Vocabulary: 15 words. Write a 100-word paragraph using 10 of them.', R['vocab_com']),
  ('Technical explanation drill: explain a sorting algorithm to a non-programmer', R['comm_charisma']),
  ('Mock GD with timer: 5 topics, 2 min each — record all', R['gd_topics']),
  ('Reddit/Discord: post a thoughtful comment on 3 tech posts', 'https://www.reddit.com/r/cscareerquestions/'),
  ('HR Q: Tell me a time you failed. Growth mindset answer.', R['comm_ibit']),
  ('Write a dev.to blog post intro about today\'s tech topic (100 words)', 'https://dev.to/'),
  ('Charisma: watch 1 video on storytelling technique + practice 5 min', R['comm_charisma']),
  ('GD: "Remote work vs in-office for tech companies"', R['gd_topics']),
  ('Full mock interview: HR (20 min) + project explanation (10 min) — record', R['comm_ibit']),
  ('TED talk: note the exact hook used in first 30 seconds. Rewrite your own intro with same hook technique.', R['comm_ted']),
  ('Vocabulary: words from an Economist/HBR article — 10 words', R['vocab_com']),
  ('GD: pick a controversial tech topic, research both sides, present 3 min each', R['gd_topics']),
  ('Phase 1 comm final: record your best 5-min self introduction. This is your gold standard.', R['comm_charisma']),
]

COMM_PH2_WEEKEND = [
  ('Mock HR: 5 behavioral questions — record, review, redo the weakest', R['comm_ibit']),
  ('GD: structured practice — tech topic 5 min, evaluate your own argument quality', R['gd_topics']),
  ('TED Talk + note 3 persuasion techniques used', R['comm_ted']),
  ('Vocabulary: 15 professional words. Use in context.', R['vocab_com']),
  ('Elevator pitch for latest project: 45 sec, no filler words', R['comm_charisma']),
  ('Technical mock: explain a system design concept aloud to camera (5 min)', R['comm_ibit']),
  ('LinkedIn post: share something you built or learned this week. Publish.', 'https://www.linkedin.com/'),
  ('Debate: "Microservices vs Monolith" — argue both sides', R['gd_topics']),
  ('HR Q: Why JPMC / Zomato / PayPal — write 3 tailored answers', R['comm_ibit']),
  ('Cold outreach: message 2 professionals with thoughtful, specific notes', 'https://www.linkedin.com/'),
  ('Mock full interview: 45 min — HR + tech explanation + project walkthrough', R['comm_ibit']),
  ('Vocabulary quiz: flashcard review of last 4 weeks of words', R['vocab_com']),
  ('Write resume summary + cover letter template — practice explaining yourself in writing', 'https://resume.io/'),
  ('GD: "Is React or Angular better for enterprise?" — structured argument', R['gd_topics']),
  ('HR final round simulation: video, 30 min, all common HR questions', R['comm_ibit']),
]

# ═══════════════════════════════════════════════════════════════════════
# APTITUDE — Phase 1: Daily | Phase 2: Weekends only
# ═══════════════════════════════════════════════════════════════════════
APT_PH1 = [
  ('Number System: types, divisibility rules, LCM, HCF — 20 problems', R['indiabix']),
  ('Number System: remainders, unit digit, factorials — 15 problems', R['geeks_apt']),
  ('Percentages: core formulas, successive %, population problems — 20 problems', R['apt_yt']),
  ('Percentages practice: 20 problems on IndiaBix', R['indiabix']),
  ('Ratios & Proportions: direct/inverse, partnership — 20 problems', R['apt_yt']),
  ('Averages: weighted avg, age-based problems — 20 problems', R['indiabix']),
  ('Mixed Sprint: Number + % + Ratio + Avg — 30 problems timed 30 min', R['faceprep']),
  ('Time Speed Distance: trains, boats, relative speed — 20 problems', R['apt_yt']),
  ('TSD Practice: 20 problems timed', R['indiabix']),
  ('Time & Work: chain rule, pipes & cisterns — 20 problems', R['apt_yt']),
  ('Time & Work Practice: 20 problems', R['indiabix']),
  ('Simple & Compound Interest: formulas + 20 problems', R['apt_yt']),
  ('Mixed Sprint: TSD + Work + SI/CI — 30 problems timed', R['faceprep']),
  ('Logical Reasoning: Number Series + Letter Series — 20 problems', R['geeks_apt']),
  ('Logical: Blood Relations — 20 problems', R['indiabix']),
  ('Logical: Seating Arrangement — linear + circular, 15 problems', R['indiabix']),
  ('Logical: Coding-Decoding — 20 problems', R['indiabix']),
  ('Logical: Direction Sense + Clock & Calendar — 20 problems', R['indiabix']),
  ('Logical Sprint: mixed 30 problems timed', R['faceprep']),
  ('Verbal Reasoning: Syllogisms — all/some/no patterns — 20 problems', R['apt_yt']),
  ('Syllogisms Practice: 20 problems', R['indiabix']),
  ('Data Interpretation: bar, pie, line graphs — how to read fast', R['apt_yt']),
  ('DI Practice: 2 full DI sets timed', R['indiabix']),
  ('Permutation & Combination: nPr, nCr, counting principle — 20 problems', R['apt_yt']),
  ('P&C Practice: 20 problems', R['indiabix']),
  ('Probability: classical, conditional, basic events — 20 problems', R['apt_yt']),
  ('Mixed Sprint: P&C + Probability — 30 problems timed', R['faceprep']),
  ('Profit & Loss + Discount — 25 problems timed', R['indiabix']),
  ('Simplification + Approximation — BODMAS, roots — 20 problems', R['geeks_apt']),
  ('Full Mock Test #1: 60 questions, 60 min, timed — company pattern', R['faceprep']),
  ('Review Mock #1: note wrong answers, identify 3 weak areas', R['indiabix']),
  ('Geometry: area, perimeter, volume of all shapes — 20 problems', R['apt_yt']),
  ('Number Theory: HCF/LCM advanced + quadratic equations — 20 problems', R['indiabix']),
  ('Mixed Sprint: all topics — 40 problems, 40 min', R['faceprep']),
  ('Full Mock Test #2: 80 questions, 80 min', R['faceprep']),
  ('Critical Reasoning: argument strengthening/weakening — 15 problems', R['geeks_apt']),
  ('Puzzles: 10 classic puzzles from IndiaBix — logical thinking', R['indiabix']),
  ('DI: table + mixed graph — 3 full sets timed', R['apt_yt']),
  ('Verbal Ability: Para Jumbles + sentence correction — 20 problems', R['indiabix']),
  ('Phase 1 Final Mock: 90 questions, 90 min — full simulation', R['faceprep']),
]

APT_PH2_WEEKEND = [
  ('Full Aptitude Mock: 60 questions, 60 min — timed', R['faceprep']),
  ('TSD + Work Sprint: 25 problems, 80% accuracy target', R['indiabix']),
  ('Logical Reasoning: Puzzles + Seating — 30 min sprint', R['indiabix']),
  ('Percentages + Profit/Loss + Interest — 30 problems', R['indiabix']),
  ('DI Sprint: 3 full sets — bar + pie + table', R['apt_yt']),
  ('P&C + Probability: 25 problems timed', R['indiabix']),
  ('Syllogisms + Critical Reasoning — 20 problems', R['geeks_apt']),
  ('Full Mock: 80 questions, 80 min — company simulation', R['faceprep']),
  ('Review mock: analyse wrong answers, note error patterns', R['indiabix']),
  ('Mental Math speed drill: 10 min × 3 rounds', R['faceprep']),
  ('Mixed Sprint: 40 problems, all topics, 40 min', R['indiabix']),
  ('Verbal: Para Jumbles + Reading Comprehension — 20 problems', R['indiabix']),
  ('Company mock: TCS/Infosys/JPMC pattern — 60 questions', R['faceprep']),
  ('Number Theory + Geometry — 25 problems', R['geeks_apt']),
  ('Full Aptitude + Reasoning: 90 questions, 90 min', R['faceprep']),
]

# ═══════════════════════════════════════════════════════════════════════
# BUILD THE DAY
# ═══════════════════════════════════════════════════════════════════════
def build_day(n):
  day_date = START + timedelta(days=n-1)
  date_str = day_date.strftime('%Y-%m-%d')
  w = week_of(n)
  ph1 = is_ph1(day_date)
  sun = is_sun(day_date)
  sat = is_sat(day_date)
  wknd = is_weekend(day_date)
  wd = dow(day_date)
  is_biweekly_sat = sat and w % 2 == 0

  # ── REST DAY every 14 days ───────────────────────────────────────────
  if n % 14 == 0:
    return {
      'date': date_str, 'dayNum': n, 'week': w,
      'phase': 1 if ph1 else 2, 'isBreak': True, 'isSunday': sun,
      'title': f'🌿 REST & RESET — Day {n} · Week {w}',
      'tip': 'Full rest. No coding. Walk outside, eat well, sleep 9 hours. This day is what makes every other day possible.',
      'commQuote': qcomm(n), 'aptQuote': qapt(n), 'techQuote': qtech(n),
      'timeBlocks': [
        {'time': '9:00 AM', 'label': 'Wake up naturally. No alarm.'},
        {'time': '10:00 AM', 'label': '30-min walk — no phone, no podcast. Just walk.'},
        {'time': '12:00 PM', 'label': '🍕 CHEAT MEAL — order what you love. Zero guilt.'},
        {'time': '2:00 PM', 'label': 'Optional: flip through this week\'s notes for max 30 min.'},
        {'time': '4:00 PM', 'label': '🎮 Game / movie / YouTube rabbit hole — anything non-study.'},
        {'time': '9:00 PM', 'label': 'Write 3 things you\'re proud of this week. Plan tomorrow. Sleep early.'},
      ],
      'practice': [],
      'surprises': surprise(n),
    }

  # ── PHASE 1 DAYS ─────────────────────────────────────────────────────
  if ph1:
    return build_ph1_day(n, day_date, date_str, w, sun, sat, wknd, wd, is_biweekly_sat)
  else:
    return build_ph2_day(n, day_date, date_str, w, sun, sat, wknd, wd, is_biweekly_sat)


def build_ph1_day(n, day_date, date_str, w, sun, sat, wknd, wd, is_bw_sat):
  # Java curriculum
  java_week = JAVA_WEEKS.get(min(w, 7), JAVA_WEEKS[7])
  jday = java_week[wd % 7]
  j_lec, j_lec_l, j_prac, j_prac_l, j_type = jday

  # Communication (daily in phase 1)
  ci = (n - 1) % len(COMM_PH1)
  comm_lbl, comm_lnk = COMM_PH1[ci]

  # Aptitude (daily in phase 1)
  ai = (n - 1) % len(APT_PH1)
  apt_lbl, apt_lnk = APT_PH1[ai]

  # SQL / Frontend start at week 7
  db_today = None
  fe_today = None
  if w >= 7:
    db_idx = (n - 43) % 3  # week 7 day 1 = index 0
    db_items = [
      ('SQL: SELECT, WHERE, ORDER BY, LIMIT — 15 SQLZoo problems', R['sqlzoo']),
      ('SQL: JOINs — INNER/LEFT/RIGHT — 15 HackerRank problems', R['sql_hackerrank']),
      ('Frontend HTML: structure, semantic tags, forms, links, tables', R['html_css_yt']),
    ]
    db_today = db_items[db_idx % 3]
    fe_today = ('Build personal profile page in HTML — no CSS yet', R['html_css_yt']) if db_idx % 3 == 2 else None

  if sun:
    # Sunday: Contest day
    blocks = [
      {'time': '7:30 AM', 'label': 'Light breakfast. Review yesterday\'s code for 20 min.'},
      {'time': '9:00 AM', 'label': '⚡ LeetCode Weekly Contest — attempt all 4 problems', 'link': R['lc_contest']},
      {'time': '10:45 AM', 'label': 'Upsolve: understand every problem you couldn\'t solve', 'link': R['neetcode_road']},
      {'time': '12:30 PM', 'label': '🍽️ Lunch + 30-min walk'},
      {'time': '2:00 PM', 'label': '🎤 Communication: ' + comm_lbl, 'link': comm_lnk},
      {'time': '3:30 PM', 'label': '🧮 Aptitude: ' + apt_lbl, 'link': apt_lnk},
      {'time': '5:00 PM', 'label': 'GitHub commit: push this week\'s code. Write a README line.', 'link': R['github']},
      {'time': '6:00 PM', 'label': 'Write weekly reflection: what I learned, what was hard, plan for next week.'},
      {'time': '7:30 PM', 'label': '🌿 Free evening — family, walk, recharge.'},
    ]
    tasks = [
      {'label': '⚡ LeetCode Weekly Contest — attempt all 4 problems', 'type': 'contest', 'link': R['lc_contest'], 'needsVerify': True},
      {'label': 'Upsolve contest: understand every unsolved problem (watch editorial)', 'type': 'leetcode', 'link': R['dsa_neet_yt'], 'needsVerify': True},
      {'label': comm_lbl, 'type': 'communication', 'link': comm_lnk, 'needsVerify': False},
      {'label': apt_lbl, 'type': 'aptitude', 'link': apt_lnk, 'needsVerify': False},
      {'label': 'GitHub: daily commit — push code or notes', 'type': 'build', 'link': R['github'], 'needsVerify': False},
    ]
    title = f'🏆 Contest Sunday — Week {w} · Day {n}'

  elif is_bw_sat:
    # Biweekly Saturday
    blocks = [
      {'time': '6:00 AM', 'label': j_lec, 'link': j_lec_l},
      {'time': '7:15 AM', 'label': j_prac, 'link': j_prac_l},
      {'time': '8:15 AM', 'label': '☕ Break'},
      {'time': '9:00 AM', 'label': '⚡ LeetCode Biweekly Contest (90 min)', 'link': R['lc_contest']},
      {'time': '11:00 AM', 'label': 'Upsolve biweekly contest problems', 'link': R['neetcode_road']},
      {'time': '12:30 PM', 'label': '🍽️ Lunch'},
      {'time': '2:00 PM', 'label': '🎤 Communication: ' + comm_lbl, 'link': comm_lnk},
      {'time': '3:30 PM', 'label': '🧮 Aptitude: ' + apt_lbl, 'link': apt_lnk},
      {'time': '5:00 PM', 'label': 'GitHub commit', 'link': R['github']},
      {'time': '5:30 PM', 'label': '🌿 Free evening'},
    ]
    tasks = [
      {'label': j_lec, 'type': 'lecture', 'link': j_lec_l, 'needsVerify': False},
      {'label': j_prac, 'type': j_type, 'link': j_prac_l, 'needsVerify': True},
      {'label': '⚡ LeetCode Biweekly Contest', 'type': 'contest', 'link': R['lc_contest'], 'needsVerify': True},
      {'label': comm_lbl, 'type': 'communication', 'link': comm_lnk, 'needsVerify': False},
      {'label': apt_lbl, 'type': 'aptitude', 'link': apt_lnk, 'needsVerify': False},
      {'label': 'GitHub: daily commit', 'type': 'build', 'link': R['github'], 'needsVerify': False},
    ]
    title = f'⚡ Biweekly Contest Saturday — Week {w} · Day {n}'

  else:
    # Regular Phase 1 weekday — FULL DAY
    blocks = [
      {'time': '5:30 AM', 'label': 'Wake up. Cold water. 5-min stretch. No phone for 30 min.'},
      {'time': '6:00 AM', 'label': f'📺 Java Lecture: {j_lec}', 'link': j_lec_l},
      {'time': '7:15 AM', 'label': f'💻 Java Practice: {j_prac}', 'link': j_prac_l},
      {'time': '8:30 AM', 'label': '☕ Breakfast — no screens. Eat properly.'},
      {'time': '9:00 AM', 'label': '🧮 Aptitude: ' + apt_lbl, 'link': apt_lnk},
      {'time': '10:15 AM', 'label': '🎤 Communication: ' + comm_lbl, 'link': comm_lnk},
      {'time': '11:30 AM', 'label': '☕ Short break — walk 10 min'},
      {'time': '12:00 PM', 'label': '🍽️ Lunch — proper meal, 30 min break'},
    ]

    # Week-dependent afternoon (DSA starts from week 4)
    if w >= 4:
      # DSA afternoon
      dsa_info = JAVA_WEEKS.get(w, JAVA_WEEKS[7])  # fallback
      # Use week-based DSA lookup
      dsa_topics_ph1 = {
        4: [
          ('DSA: Arrays intro, complexity O(n), traversal, Striver A2Z Step 2', R['dsa_striver_yt'], 'LeetCode Easy Arrays: Find Max, Move Zeros, Remove Duplicates', R['lc_array']),
          ('DSA: Arrays — Two Pointer: reverse, sort 0s-1s-2s, check palindrome', R['dsa_striver_yt'], 'LeetCode: Container With Most Water, Two Sum II, Reverse Array', R['lc_twoptr']),
          ('DSA: Arrays — Kadane\'s algorithm, max subarray sum', R['dsa_striver_yt'], 'LeetCode: Maximum Subarray, Best Time to Buy Stock', R['lc_array']),
          ('DSA: Arrays — prefix sum, product except self', R['dsa_striver_yt'], 'LeetCode: Product of Array Except Self, Find Pivot Index', R['lc_array']),
          ('DSA: Strings — reverse, palindrome, frequency, anagram check', R['dsa_striver_yt'], 'LeetCode: Valid Anagram, First Unique Char, Reverse String, Longest Common Prefix', R['lc_string']),
          ('DSA: Strings practice day — group anagrams, count and say', R['dsa_striver_yt'], 'LeetCode: Group Anagrams, Count and Say, Roman to Integer', R['lc_string']),
          ('DSA: Weekly recap + 5 mixed easy problems on arrays/strings', R['neetcode150'], 'Striver A2Z: complete any 5 unsolved from arrays section', R['striver_a2z']),
        ],
        5: [
          ('DSA: Two Pointers deep dive — when, why, visual examples', R['dsa_striver_yt'], 'LeetCode: Three Sum, Four Sum, Trapping Rain Water, Valid Palindrome II', R['lc_twoptr']),
          ('DSA: Two Pointers practice — 5 medium problems timed', R['dsa_striver_yt'], 'Striver A2Z: Two Pointer section — complete 5 problems', R['striver_a2z']),
          ('DSA: Sliding Window — fixed window max sum, intro concept', R['dsa_striver_yt'], 'LeetCode: Maximum Average Subarray, Max Sum Subarray of size K', R['lc_slide']),
          ('DSA: Sliding Window — variable window, longest without repeat', R['dsa_striver_yt'], 'LeetCode: Longest Substring Without Repeat, Fruit Into Baskets', R['lc_slide']),
          ('DSA: Sliding Window hard — Minimum Window Substring, Permutation in String', R['dsa_striver_yt'], 'LeetCode: Permutation in String, Minimum Window Substring', R['lc_slide']),
          ('DSA: Hashing — frequency map, subarray sum = K, longest subarray', R['dsa_striver_yt'], 'LeetCode: Subarray Sum Equals K, Contiguous Array, Longest Subarray', R['lc_array']),
          ('DSA: Sprint — 8 mixed medium problems two-pointer + sliding window', R['neetcode150'], 'NeetCode 150: complete all two-pointer and sliding window problems', R['neetcode150']),
        ],
        6: [
          ('DSA: LinkedList — singly LL from scratch in Java (insert/delete/traverse)', R['dsa_striver_yt'], 'LeetCode LL Easy: Reverse LL, Middle of LL, Remove Duplicates', R['lc_ll']),
          ('DSA: LinkedList — cycle detection, merge sorted, remove Nth from end', R['dsa_striver_yt'], 'LeetCode: Linked List Cycle, Merge Two Sorted, Remove Nth Node', R['lc_ll']),
          ('DSA: LinkedList — LRU Cache concept, add two numbers, palindrome LL', R['dsa_striver_yt'], 'LeetCode: Add Two Numbers, Palindrome LL, Reverse Nodes in k-Group', R['lc_ll']),
          ('DSA: Stack — valid parentheses, min stack, next greater element', R['dsa_striver_yt'], 'LeetCode Stack: Valid Parentheses, Min Stack, Next Greater Element I', R['lc_stack']),
          ('DSA: Stack — monotonic stack, Daily Temperatures, Largest Rectangle', R['dsa_striver_yt'], 'LeetCode Stack Hard: Daily Temperatures, Largest Rectangle, Asteroid Collision', R['lc_stack']),
          ('DSA: Stack + LL combined sprint — 6 medium problems', R['neetcode150'], 'NeetCode 150: complete all stack problems', R['neetcode150']),
          ('DSA: Sprint day — 8 mixed medium problems LL + Stack', R['striver_sde'], 'Striver SDE Sheet: LinkedList + Stack section — complete 8 problems', R['striver_sde']),
        ],
        7: [
          ('DSA: Queue — implement, BFS intro, sliding window max with deque', R['dsa_striver_yt'], 'LeetCode Queue: Implement Queue with Stacks, Sliding Window Max', R['lc_queue']),
          ('DSA: Queue + BFS — Number of Islands, Rotting Oranges intro', R['dsa_striver_yt'], 'LeetCode BFS: Number of Islands, Rotting Oranges, 01 Matrix', R['lc_graph']),
          ('DSA: Binary Search — classic, lower bound, upper bound templates', R['dsa_striver_yt'], 'LeetCode BS Easy: Binary Search, First Bad Version, Search Insert Position', R['lc_bs']),
          ('DSA: Binary Search on answer — Koko Eating Bananas, Find in Rotated', R['dsa_striver_yt'], 'LeetCode: Search Rotated, Find Peak, Min in Rotated', R['lc_bs']),
          ('DSA: Recursion — base case, recursive tree, factorial, fibonacci', R['dsa_striver_yt'], 'Practice: write 8 recursive programs. Then solve: LeetCode Power of Two, Fibonacci.', R['lc_math']),
          ('DSA: Recursion — subsets and permutations intro', R['dsa_striver_yt'], 'LeetCode: Subsets, Permutations (understand recursion tree)', R['lc_backtrack']),
          ('DSA: Phase 1 final sprint — 10 mixed medium problems', R['neetcode150'], 'NeetCode 150: solve 10 problems across all Phase 1 topics', R['neetcode150']),
        ],
      }
      dsa_w = dsa_topics_ph1.get(w, dsa_topics_ph1[7])
      dsa_t, dsa_l, dsa_pt, dsa_pl = dsa_w[wd % 7]
      blocks += [
        {'time': '1:30 PM', 'label': f'📺 DSA Theory: {dsa_t}', 'link': dsa_l},
        {'time': '3:00 PM', 'label': f'💻 DSA Practice: {dsa_pt}', 'link': dsa_pl},
        {'time': '5:00 PM', 'label': '☕ Tea break. 15-min outdoor walk.'},
        {'time': '5:30 PM', 'label': '🔗 LeetCode Daily Problem (related to today\'s topic)', 'link': R['lc_daily']},
        {'time': '6:30 PM', 'label': '📤 GitHub commit: push today\'s code', 'link': R['github']},
      ]
      tasks = [
        {'label': f'📺 Java Lecture: {j_lec}', 'type': 'lecture', 'link': j_lec_l, 'needsVerify': False},
        {'label': f'💻 Java Practice: {j_prac}', 'type': j_type, 'link': j_prac_l, 'needsVerify': True},
        {'label': f'📺 DSA Theory: {dsa_t}', 'type': 'lecture', 'link': dsa_l, 'needsVerify': False},
        {'label': f'💻 DSA Practice: {dsa_pt}', 'type': 'leetcode', 'link': dsa_pl, 'needsVerify': True},
        {'label': 'LeetCode Daily Problem', 'type': 'leetcode', 'link': R['lc_daily'], 'needsVerify': True},
        {'label': apt_lbl, 'type': 'aptitude', 'link': apt_lnk, 'needsVerify': False},
        {'label': comm_lbl, 'type': 'communication', 'link': comm_lnk, 'needsVerify': False},
        {'label': 'GitHub: daily commit — push code or notes', 'type': 'build', 'link': R['github'], 'needsVerify': False},
      ]
      if w == 7 and db_today:
        tasks.append({'label': db_today[0], 'type': 'practice', 'link': db_today[1], 'needsVerify': False})
        blocks.append({'time': '7:00 PM', 'label': db_today[0], 'link': db_today[1]})
    else:
      # Weeks 1-3: Java only + APT + COMM (no DSA yet — learning syntax)
      blocks += [
        {'time': '1:30 PM', 'label': 'Java extra practice: Exercism 2 more exercises', 'link': R['java_exercism']},
        {'time': '3:00 PM', 'label': 'Read: Java Docs for today\'s topic. Write notes.', 'link': R['java_w3']},
        {'time': '4:30 PM', 'label': '☕ Break. Walk.'},
        {'time': '5:00 PM', 'label': 'Mini project: apply today\'s Java topic in a small real program', 'link': R['java_exercism']},
        {'time': '6:30 PM', 'label': '📤 GitHub commit: push today\'s code', 'link': R['github']},
      ]
      tasks = [
        {'label': f'📺 Java Lecture: {j_lec}', 'type': 'lecture', 'link': j_lec_l, 'needsVerify': False},
        {'label': f'💻 Java Practice: {j_prac}', 'type': j_type, 'link': j_prac_l, 'needsVerify': True},
        {'label': 'Extra Java: 2 Exercism exercises related to today\'s topic', 'type': 'practice', 'link': R['java_exercism'], 'needsVerify': True},
        {'label': apt_lbl, 'type': 'aptitude', 'link': apt_lnk, 'needsVerify': False},
        {'label': comm_lbl, 'type': 'communication', 'link': comm_lnk, 'needsVerify': False},
        {'label': 'GitHub: daily commit — push code or notes', 'type': 'build', 'link': R['github'], 'needsVerify': False},
      ]

    blocks += [
      {'time': '7:30 PM', 'label': '🌿 Family time / dinner. No study. Real human time.'},
      {'time': '9:00 PM', 'label': 'Review today: write 3 things learned. Set tomorrow\'s 1 priority. Sleep by 10.'},
    ]
    title = f'📚 Week {w} · Day {n} — Java + {("DSA" if w >= 4 else "Practice")} + APT + COMM'

  return {
    'date': date_str, 'dayNum': n, 'week': w,
    'phase': 1, 'isBreak': False, 'isSunday': sun,
    'title': title,
    'tip': qtech(n),
    'commQuote': qcomm(n),
    'aptQuote': qapt(n),
    'timeBlocks': blocks,
    'practice': tasks,
    'surprises': surprise(n) if n % 7 == 0 else None,
  }


def build_ph2_day(n, day_date, date_str, w, sun, sat, wknd, wd, is_bw_sat):
  p2w = w - 7  # phase 2 week number (1-based)
  p2w = max(1, p2w)

  curr = p2_curriculum(p2w, day_date)
  dsa_t, dsa_l, dsa_pt, dsa_pl = curr['dsa']
  spring = curr['spring']   # (label, link) or None
  fe = curr['frontend']     # (label, link) or None
  db = curr['db']           # (label, link) or None
  sd = curr['sd']           # (label, link) or None
  ml = curr['ml']           # (label, link) or None

  comm = COMM_PH2_WEEKEND[(n-1) % len(COMM_PH2_WEEKEND)]
  apt = APT_PH2_WEEKEND[(n-1) % len(APT_PH2_WEEKEND)]

  if sun:
    # Sunday: Contest + Comm + Apt
    blocks = [
      {'time': '8:00 AM', 'label': 'Wake naturally. Light breakfast.'},
      {'time': '9:00 AM', 'label': '⚡ LeetCode Weekly Contest (90 min)', 'link': R['lc_contest']},
      {'time': '11:00 AM', 'label': 'Upsolve: understand all problems you didn\'t solve', 'link': R['dsa_neet_yt']},
      {'time': '12:30 PM', 'label': '🍽️ Lunch'},
      {'time': '2:00 PM', 'label': '🎤 Communication: ' + comm[0], 'link': comm[1]},
      {'time': '3:30 PM', 'label': '🧮 Aptitude: ' + apt[0], 'link': apt[1]},
      {'time': '5:00 PM', 'label': 'GitHub: weekly commit + update README', 'link': R['github']},
      {'time': '6:00 PM', 'label': '🌿 Rest. Family. Recharge.'},
    ]
    tasks = [
      {'label': '⚡ LeetCode Weekly Contest — attempt all problems', 'type': 'contest', 'link': R['lc_contest'], 'needsVerify': True},
      {'label': 'Upsolve contest: watch editorial for unsolved', 'type': 'leetcode', 'link': R['dsa_neet_yt'], 'needsVerify': True},
      {'label': comm[0], 'type': 'communication', 'link': comm[1], 'needsVerify': False},
      {'label': apt[0], 'type': 'aptitude', 'link': apt[1], 'needsVerify': False},
      {'label': 'GitHub: weekly commit', 'type': 'build', 'link': R['github'], 'needsVerify': False},
    ]
    title = f'🏆 Contest Sunday — Week {w} · Day {n}'

  elif sat:
    # Saturday: Extended study (6-7 hrs) + Comm + Apt + Contest maybe
    contest_block = [{'time': '3:00 PM', 'label': '⚡ LeetCode Biweekly Contest (90 min)', 'link': R['lc_contest']}] if is_bw_sat else []
    slot2 = spring or fe or db
    slot3 = sd or ml or db
    blocks = [
      {'time': '7:00 AM', 'label': f'DSA: {dsa_t}', 'link': dsa_l},
      {'time': '8:30 AM', 'label': f'DSA Practice: {dsa_pt}', 'link': dsa_pl},
      {'time': '9:30 AM', 'label': '☕ Break'},
      {'time': '10:00 AM', 'label': slot2[0] if slot2 else 'Project: work on current project', 'link': slot2[1] if slot2 else R['github']},
      {'time': '11:30 AM', 'label': slot3[0] if slot3 else 'System Design / ML review', 'link': slot3[1] if slot3 else R['sd_primer']},
      {'time': '1:00 PM', 'label': '🍽️ Lunch'},
      *contest_block,
      {'time': '4:30 PM' if is_bw_sat else '2:30 PM', 'label': '🎤 Communication: ' + comm[0], 'link': comm[1]},
      {'time': '6:00 PM' if is_bw_sat else '4:00 PM', 'label': '🧮 Aptitude: ' + apt[0], 'link': apt[1]},
      {'time': '7:30 PM' if is_bw_sat else '5:30 PM', 'label': 'GitHub commit + plan Sunday', 'link': R['github']},
    ]
    tasks = [
      {'label': f'DSA: {dsa_t}', 'type': 'leetcode', 'link': dsa_l, 'needsVerify': False},
      {'label': f'DSA Practice: {dsa_pt}', 'type': 'leetcode', 'link': dsa_pl, 'needsVerify': True},
      *([{'label': '⚡ LeetCode Biweekly Contest', 'type': 'contest', 'link': R['lc_contest'], 'needsVerify': True}] if is_bw_sat else []),
      *([{'label': slot2[0], 'type': 'build', 'link': slot2[1], 'needsVerify': True}] if slot2 else []),
      *([{'label': slot3[0], 'type': 'lecture', 'link': slot3[1], 'needsVerify': False}] if slot3 else []),
      {'label': comm[0], 'type': 'communication', 'link': comm[1], 'needsVerify': False},
      {'label': apt[0], 'type': 'aptitude', 'link': apt[1], 'needsVerify': False},
      {'label': 'GitHub: daily commit', 'type': 'build', 'link': R['github'], 'needsVerify': False},
    ]
    title = f'📅 Weekend — Week {w} · Day {n}'

  else:
    # Weekday Phase 2: 4-5 hrs. DSA (morning before college) + 1 slot (evening)
    # Rotate slots: Mon=Frontend/React, Tue=Spring Boot, Wed=DB, Thu=SD/ML, Fri=Projects
    slot_map = {
      0: (fe,   'Frontend'),
      1: (spring, 'Backend'),
      2: (db,   'Database'),
      3: (sd or ml, 'System Design / ML'),
      4: (ml or spring, 'ML / Projects'),
    }
    slot_item, slot_label = slot_map.get(wd, (None, 'Project'))

    blocks = [
      {'time': '6:00 AM', 'label': f'DSA: {dsa_t}', 'link': dsa_l},
      {'time': '7:15 AM', 'label': f'DSA Practice: {dsa_pt}', 'link': dsa_pl},
      {'time': '8:15 AM', 'label': '🎓 College / morning prep'},
      {'time': '5:00 PM', 'label': 'LeetCode Daily Problem (5-10 min warm-up first)', 'link': R['lc_daily']},
      {'time': '5:30 PM', 'label': slot_item[0] if slot_item else 'Project work / open source contribution', 'link': slot_item[1] if slot_item else R['good_first']},
      {'time': '7:00 PM', 'label': 'GitHub: daily commit', 'link': R['github']},
      {'time': '7:30 PM', 'label': '🌿 Dinner / family time. No study after 8:30 PM.'},
      {'time': '8:30 PM', 'label': 'Review notes (15 min). Set tomorrow\'s 1 priority. Sleep by 10:30.'},
    ]
    tasks = [
      {'label': f'DSA: {dsa_t}', 'type': 'lecture', 'link': dsa_l, 'needsVerify': False},
      {'label': f'DSA Practice: {dsa_pt}', 'type': 'leetcode', 'link': dsa_pl, 'needsVerify': True},
      {'label': 'LeetCode Daily Problem', 'type': 'leetcode', 'link': R['lc_daily'], 'needsVerify': True},
      *([{'label': slot_item[0], 'type': 'build', 'link': slot_item[1], 'needsVerify': True}] if slot_item else []),
      {'label': 'GitHub: daily commit', 'type': 'build', 'link': R['github'], 'needsVerify': False},
    ]
    title = f'🎓 College Day — Week {w} · Day {n} | {slot_label}'

  return {
    'date': date_str, 'dayNum': n, 'week': w,
    'phase': 2, 'isBreak': False, 'isSunday': sun,
    'title': title,
    'tip': qtech(n),
    'commQuote': qcomm(n),
    'aptQuote': qapt(n),
    'timeBlocks': blocks,
    'practice': tasks,
    'surprises': surprise(n) if n % 7 == 0 else None,
  }

# ═══════════════════════════════════════════════════════════════════════
# GENERATE
# ═══════════════════════════════════════════════════════════════════════
print("Generating 262-day master schedule...")
all_days = []
for i in range(TOTAL_DAYS):
    day_data = build_day(i + 1)
    all_days.append(day_data)
    if i % 50 == 0:
        print(f"  Day {i+1}: {day_data['date']} — {day_data['title'][:60]}")

print(f"Total: {len(all_days)} days generated")

# Verify key days
checks = [1, 7, 14, 21, 28, 35, 42, 49, 50, 56, 70, 100, 150, 200, 261]
for c in checks:
    d = all_days[c-1]
    print(f"  Day {c}: {d['date']} | ph{d['phase']} | break={d['isBreak']} | tasks={len(d['practice'])} | {d['title'][:55]}")

with open('/home/claude/schedule_data.js', 'w', encoding='utf-8') as f:
    f.write('// ═══════════════════════════════════════════════════════════════\n')
    f.write('// MASTER SCHEDULE — 262 Days — Apr 14 2026 → Jan 1 2027\n')
    f.write('// Phase 1: Apr 14 – Jun 1 (49 days) — FULL DAY INTENSIVE\n')
    f.write('// Phase 2: Jun 2 – Jan 1 (213 days) — COLLEGE MODE 4-5 hrs/day\n')
    f.write('//\n')
    f.write('// SEQUENCE:\n')
    f.write('// Weeks 1-3:  Java fundamentals only (variables → arrays → OOP basics)\n')
    f.write('// Week 4:     Java OOP + DSA Arrays begins (safe to pair)\n')
    f.write('// Week 5:     Java OOP advanced + DSA Strings + Two Pointers\n')
    f.write('// Week 6:     Java Collections + DSA Sliding Window + LinkedList\n')
    f.write('// Week 7:     Java Advanced (Exceptions/Generics/Streams) + DSA Stack/Queue\n')
    f.write('//             + SQL basics + HTML begins\n')
    f.write('// Phase 2:\n')
    f.write('//   p2w1-2:   BS + Recursion + Trees + CSS/Tailwind starts + SQL intermediate\n')
    f.write('//   p2w3-4:   Heaps + Greedy + Backtracking + React begins + MongoDB\n')
    f.write('//   p2w5-6:   Graphs + DP + React advanced + Spring Boot begins\n')
    f.write('//   p2w7-9:   DP advanced + Spring Boot full + PostgreSQL + Redis\n')
    f.write('//   p2w10-12: Spring Security + JWT + Full Stack integration\n')
    f.write('//   p2w13-15: System Design starts + Full Stack Project\n')
    f.write('//   p2w15-18: Python + NumPy/Pandas + ML begins\n')
    f.write('//   p2w19-22: Deep Learning + HuggingFace + ML Projects\n')
    f.write('//   p2w23-25: Docker + Microservices + Deploy + Open Source\n')
    f.write('//   p2w26-38: Interview Prep intensive — mock OAs, SD rounds, HR\n')
    f.write('// ═══════════════════════════════════════════════════════════════\n\n')
    f.write('export const SCHEDULE_START = "2026-04-14";\n\n')
    f.write('export const MASTER_SCHEDULE = ')
    f.write(json.dumps(all_days, indent=2, ensure_ascii=False))
    f.write(';\n\n')
    f.write('export function getScheduleByDate(dateStr) {\n')
    f.write('  return MASTER_SCHEDULE.find(d => d.date === dateStr) || null;\n')
    f.write('}\n\n')
    f.write('export function getScheduleByDayNum(n) {\n')
    f.write('  return MASTER_SCHEDULE.find(d => d.dayNum === n) || null;\n')
    f.write('}\n')

print(f"\nDone. File: schedule_data.js")