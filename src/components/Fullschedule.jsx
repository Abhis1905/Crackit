// ============================================================
// COMPLETE 262-DAY SCHEDULE — Summer Break Crack 2026
// Every day is UNIQUE. Practice is RELEVANT to what you study.
// April 14 → December 31, 2026
// ============================================================

export const NEETCODE = "https://neetcode.io/roadmap"
export const STRIVER  = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
export const LC       = "https://leetcode.com/problemset/"
export const LC_DAILY = "https://leetcode.com/problemoftheday/"

// ── COMMUNICATION RESOURCES ──────────────────────────────────
export const COMM_RESOURCES = {
  speakAndLearn:   "https://www.speakandlearn.com/",
  toastmasters:    "https://www.toastmasters.org/find-a-club",
  elsa:            "https://elsaspeak.com/en/",
  italki:          "https://www.italki.com/",
  cambly:          "https://www.cambly.com/",
  pramp:           "https://www.pramp.com/",
  groupd:          "https://groupdiscussion.info/",
  ted:             "https://www.ted.com/talks",
  bigSpeak:        "https://bigspeak.ai/",
  hireVue:         "https://www.hirevue.com/",
  interviewBit:    "https://www.interviewbit.com/hr-interview-questions/",
  publicSpeaking:  "https://www.coursera.org/learn/public-speaking",
  reddit:          "https://www.reddit.com/r/cscareerquestions/",
  discord:         "https://discord.gg/leetcode",
}

// ── BREAK DAYS ───────────────────────────────────────────────
export const BREAK_DAYS = new Set([
  '2026-05-01', // Labour Day — full rest
  '2026-05-18', // Week 5 buffer
  '2026-06-14', // College transition buffer
  '2026-07-04', // Mid-phase break
  '2026-08-15', // Independence Day
  '2026-08-30', // End of Phase 3 Week 4 buffer
  '2026-09-05', // Teachers Day
  '2026-10-02', // Gandhi Jayanti
  '2026-10-25', // Diwali break
  '2026-10-26', // Diwali break
  '2026-11-15', // Mid-Nov buffer
  '2026-12-25', // Christmas
  '2026-12-26', // Post-Christmas buffer
])

// ── DAILY TIP BANK ───────────────────────────────────────────
// 262 unique tips indexed by day number
const TIPS = [
  // Phase 1: Java + DSA (Days 1-49)
  "Your first day. Don't optimise, don't plan more. Just open IntelliJ and write your first Java class. The act of starting matters more than starting perfectly.",
  "Print 'Hello World' is a meme — but understanding why System.out.println works (JVM, stdout, method calls) is not. Google it after writing it.",
  "Every variable in Java has a type, a name, and a scope. If you can't explain scope right now, look it up before tomorrow.",
  "int vs Integer — one is primitive, one is an object. This difference will come up in interviews. Learn it today.",
  "String is not a primitive in Java but behaves like one. String pool, immutability, == vs .equals() — all interview gold.",
  "Write code for 25 minutes, then explain it aloud as if teaching someone. If you can't explain it, you don't own it.",
  "Sunday review: re-solve everything from Mon-Fri from a blank file. Zero notes. This is how memory forms.",
  "Operators and expressions are boring until you hit bitwise operators — AND, OR, XOR, left shift. These appear in Hard LC problems. Note them.",
  "Conditional logic: write the same if-else using ternary operator. Then using switch. Three ways to do one thing builds flexibility.",
  "Loops: for vs while vs do-while. Write all three doing the same task. Then explain when you'd choose each in an interview.",
  "Methods and return types: void vs typed returns. Write a method that has no side effects (pure function). This concept matters in system design.",
  "Recursion today: if you don't understand the call stack, you will drown in Trees and DP. Draw the stack on paper. Physically.",
  "Sunday review: recursion factorial and fibonacci from memory. Then — what happens to memory when recursion goes 10,000 levels deep? (Stack overflow.)",
  "Arrays in Java: fixed size, 0-indexed. int[] vs Integer[]. Write array reversal in-place without extra array. Classic warm-up problem.",
  "2D arrays: row-major traversal. Write code to find the largest element in a 2D matrix. This is your first matrix problem.",
  "ArrayList vs Array: when do you use which? Performance differences? Write code using both for the same task. Compare.",
  "StringBuilder vs String concatenation in a loop. Run both 10,000 times and see the difference. This is a real interview trap question.",
  "Packages and imports: understand why Java needs them. Write your first multi-file Java program with two classes in different files.",
  "Access modifiers: public, private, protected, default. Write a class that uses all four. Understand what breaks if you change them.",
  "Sunday: build the bank account app. No tutorial. Just the spec: Account class, deposit, withdraw, balance, overdraft protection. Build it.",
  "OOP day 1: a class is a blueprint, an object is an instance. Write 5 different classes for 5 real-world things. Don't copy examples.",
  "Constructors: default vs parameterised. What is 'this' keyword? Write a class where 'this' is necessary to avoid confusion.",
  "Inheritance: 'extends' keyword. Write a Vehicle → Car → ElectricCar hierarchy. Each adds something new. Test polymorphism.",
  "Method overriding vs overloading: different things with confusing names. Write one example of each in the same class.",
  "Abstract classes vs interfaces: this is asked in every Java interview. Write both for the same scenario. Know when to use which.",
  "The 'super' keyword: calling parent constructor and parent methods. Without understanding super, your inheritance is broken.",
  "Sunday: OOP review. Build a small library system — Book, Member, Library classes. No tutorial. Apply everything from this week.",
  "Collections deep dive: List, Set, Map interfaces. For each, write one use case where it's the ONLY right choice.",
  "HashMap internals: hashing function, bucket array, collision (chaining). Draw it on paper. This comes up in system design.",
  "Iterator pattern: write a for-each loop, then rewrite it using Iterator explicitly. Understand what the compiler does for you.",
  "Generics: why does List<String> exist? Write a generic Pair<K,V> class. Generics prevent ClassCastException at runtime.",
  "Exception handling: try-catch-finally. Write code that throws a custom exception. Checked vs unchecked — know the difference.",
  "File I/O basics: read a text file, write to a text file. This will be useful when you build CLI tools that persist data.",
  "Sunday: build Student Grade Manager. Reads students from a file, computes grades, writes results to another file. Deploy it.",
  "Arrays problem focus: Two Sum, Best Time to Buy/Sell Stock. These are the entry gate. Understand HashMap approach for Two Sum.",
  "Arrays: Contains Duplicate (HashSet), Maximum Subarray (Kadane's). Kadane's is a DP idea. Mark it — you'll see it again.",
  "Arrays: Product of Array Except Self — no division allowed. The prefix/suffix trick. Draw it. This is a Medium that breaks beginners.",
  "Strings: Valid Anagram (frequency map), Reverse String (two pointer). Both have O(n) solutions. Know why.",
  "Strings: Longest Substring Without Repeating Characters — sliding window. Draw the window moving across the string.",
  "Two Pointers: Valid Palindrome, 3Sum. 3Sum is a classic — sort first, then two pointers. Understand why sorting enables this.",
  "Sunday: communication practice day. Watch one TED talk on communication. Then record yourself explaining today's toughest problem on camera for 2 minutes. Watch it back.",
  "Sliding Window: Minimum Window Substring — hard but important. If you can't solve it, study the pattern and implement the solution yourself.",
  "HashMap problems: Group Anagrams, Top K Frequent Elements. Both are HashMap classics. Understand why sorting chars works for anagram grouping.",
  "LinkedList: implement from scratch — Node class, insert head, insert tail, delete, reverse. No java.util. Pure pointers.",
  "LinkedList: Reverse LL (iterative + recursive), Detect Cycle (Floyd's algorithm). Floyd's is used in interviews — understand the math.",
  "Stack: Valid Parentheses, Min Stack. Build your own Stack class first, then solve using java.util.Stack. Compare.",
  "Queue: implement using two stacks. This is asked directly in interviews. Understand amortised O(1) for each operation.",
  "Binary Search: basic template + variations (first/last occurrence, rotated array search). Binary search on answer — mark this pattern.",
  "Sunday: LeetCode Weekly Contest participation. leetcode.com/contest — join the weekly contest happening this Sunday. First time. Just try.",

  // Phase 2: Spring Boot + DSA (Days 50-99)
  "Spring Boot day 1: Spring Initializr (start.spring.io) — generate a project with Spring Web dependency. Run it. See the Tomcat startup log.",
  "Your first @RestController. Write GET /hello that returns 'Hello World'. Test in browser. Then in Postman. Both ways.",
  "@GetMapping, @PostMapping, @PathVariable, @RequestParam — write one endpoint for each. This is the vocabulary of REST APIs.",
  "HTTP status codes: 200, 201, 400, 401, 403, 404, 500. Return the right one from your endpoints. This is professionalism.",
  "Spring Boot with PostgreSQL: add spring-data-jpa and postgresql dependencies. Configure application.properties. Connect to local DB.",
  "@Entity, @Table, @Id, @GeneratedValue — write your first JPA entity. Then create the corresponding table. Watch Hibernate generate SQL.",
  "JpaRepository: save(), findById(), findAll(), deleteById(). Write a full CRUD service in 30 lines of code. Spring magic.",
  "Sunday: build a full CRUD REST API for a Todo app — Todo entity, repository, service, controller. Test all 5 endpoints in Postman.",
  "Service layer: why does it exist? Business logic does NOT belong in controllers. Refactor your Todo app to have a proper service layer.",
  "@Transactional: what it does and when you need it. Write a service method that does two DB operations — what happens if the second fails?",
  "DTO pattern: Data Transfer Object. Never expose your @Entity directly through the API. Write a TodoDTO and a mapper.",
  "Exception handling in Spring: @ExceptionHandler and @ControllerAdvice. Write a GlobalExceptionHandler. This is production-grade code.",
  "Spring Security basics: add the dependency. See what breaks. Understand that Spring Security locks everything by default.",
  "JWT authentication: io.jsonwebtoken dependency. Write JwtUtil class with generateToken() and validateToken(). These are pure Java methods first.",
  "Sunday: add JWT auth to your Todo app. /auth/register and /auth/login endpoints. Protected /todos requires valid JWT. Test in Postman.",
  "Trees: Binary Tree traversals — inorder, preorder, postorder using recursion. Then iteratively using a Stack. Both are asked.",
  "Trees: BFS / Level Order traversal using Queue. Know the pattern cold. Print level by level — this variation is asked frequently.",
  "Trees: Max Depth, Same Tree, Invert Binary Tree. These three problems together teach you how to think recursively about trees.",
  "Trees: Validate BST, Lowest Common Ancestor. LCA is a classic Google question. Understand the recursive logic.",
  "Trees: Binary Tree Right Side View, Count Good Nodes. Right Side View uses BFS — last node at each level.",
  "Trees: Construct Binary Tree from Preorder+Inorder arrays. This is Medium-Hard but teaches deep recursion.",
  "Sunday: LeetCode Biweekly Contest today. Participate. Aim for Q1+Q2. Don't skip — consistency in contests builds speed.",
  "Heap/Priority Queue: min-heap and max-heap in Java (PriorityQueue). Kth Largest Element, Top K Frequent Elements.",
  "Heap: Merge K Sorted Lists — classic hard problem. Understand why a min-heap of size K works here.",
  "Heap: Find Median from Data Stream — two heaps approach. This pattern of balancing two heaps is a 10/10 concept.",
  "Graphs: represent as adjacency list in Java. Write Graph class with addEdge(), DFS(), BFS() from scratch.",
  "Graphs: Number of Islands (DFS/BFS on grid), Clone Graph. Grid problems are graph problems with implicit edges.",
  "Graphs: Course Schedule (cycle detection in directed graph), topological sort using Kahn's algorithm (BFS-based).",
  "Sunday: communication practice. Join a Toastmasters online meeting this week. Link: toastmasters.org/find-a-club. Or record a 3-min intro speech and upload to YouTube (private).",
  "React: create-react-app or Vite. Component, JSX, props. Write 5 components that take different props. Props are function parameters.",
  "React: useState hook. Build a counter, a toggle, a form. State is the memory of a component.",
  "React: useEffect hook. Fetch data from a public API (jsonplaceholder.typicode.com) on component mount. Display it.",
  "React: React Router. Add multiple pages to your app. /home, /about, /todos. Navigation between them.",
  "React: Axios. Connect your React frontend to your Spring Boot backend. Fetch and display your Todo list.",
  "Tailwind CSS: utility-first. Add Tailwind to your React app. Style your Todo UI with Tailwind only. No custom CSS.",
  "Sunday: deploy. Frontend to Vercel, Backend to Render.com (free tier), Database on Supabase. Get a live URL. This is your first deployed full-stack app.",
  "DP introduction: overlapping subproblems + optimal substructure. Fibonacci top-down (memoization) vs bottom-up (tabulation). Both.",
  "DP: Climbing Stairs, House Robber, House Robber II. All three follow the same 1D DP pattern. Draw the dp[] array.",
  "DP: Coin Change (classic), Minimum Cost Climbing Stairs. For Coin Change, draw the dp table for input [1,5,6,9], amount=11.",
  "DP: Longest Common Subsequence — 2D DP. Draw the entire dp table on paper for 'abcde' and 'ace'. This builds intuition.",
  "DP: 0/1 Knapsack. Classic. Write it bottom-up with a 2D table, then optimise to 1D array. Understand why 1D works.",
  "DP: Longest Increasing Subsequence (O(n²) then O(n log n)). The O(n log n) solution uses binary search — understand it.",
  "Sunday: LeetCode Weekly Contest. Also: open source contribution research day. Browse github.com/firstcontributions/first-contributions. Pick a repo.",

  // Phase 3: Interview Forge (Days 100-149)
  "System Design: what is scalability? Vertical vs horizontal scaling. Read 'Designing Data-Intensive Applications' Chapter 1 (free PDF online).",
  "System Design: Load Balancers — Round Robin, Least Connections, IP Hash. When do you use each? Gaurav Sen YouTube.",
  "System Design: Caching — Redis, Memcached. Cache-aside pattern vs write-through. Cache invalidation is one of the 2 hard problems in CS.",
  "System Design: Databases — SQL vs NoSQL. When does each win? CAP theorem: you can only pick 2 of 3. Draw the triangle.",
  "System Design: Design a URL shortener. 5 components: API gateway, app server, key generation service, cache, DB. Draw it.",
  "System Design: CDN — what it is, how it reduces latency, when to use it. Every large system uses a CDN.",
  "Sunday: full system design mock. Set a 45-minute timer. Design Instagram from scratch. Speak your solution aloud. Record it.",
  "Backtracking: understand the pattern — choose, explore, unchoose. Write the template from memory.",
  "Backtracking: Subsets, Permutations — both follow the template. Understand why time complexity is O(2^n) and O(n!).",
  "Backtracking: Combination Sum, Combination Sum II. The difference between the two teaches duplicate handling.",
  "Backtracking: N-Queens. Classic hard problem. Understand how constraint checking prunes the recursion tree.",
  "Backtracking: Word Search on a grid. Uses visited[][] array. Understand why you need to unmark on backtrack.",
  "Backtracking: Palindrome Partitioning — combines DP checking with backtracking traversal. Medium-Hard.",
  "Sunday: communication — group discussion practice. Join groupdiscussion.info and participate in one online GD session today.",
  "Graphs: Union-Find / Disjoint Set — implement with path compression and union by rank. Number of Connected Components.",
  "Graphs: Dijkstra's algorithm from scratch. Priority queue based. Single-source shortest path. Understand why BFS doesn't work with weights.",
  "Graphs: Bellman-Ford — handles negative weights. Know when to use Dijkstra vs Bellman-Ford.",
  "Graphs: Minimum Spanning Tree — Kruskal's (sort edges + Union-Find) and Prim's (greedy + priority queue).",
  "Graphs: Pacific Atlantic Water Flow — two BFS from both oceans. This problem teaches 'reverse thinking'.",
  "Graphs: Word Ladder — BFS on implicit graph. Each word transformation is an edge. Classic interview problem.",
  "Sunday: LeetCode Weekly Contest + mock interview on Pramp. Both today. pramp.com — schedule a peer interview.",
  "Advanced Trees: Trie — implement from scratch with TrieNode, insert(), search(), startsWith(). Implement an autocomplete.",
  "Advanced Trees: Segment Tree — range sum query and update. Understand when to use over prefix sums.",
  "Advanced Trees: Binary Indexed Tree (Fenwick Tree) — range queries in O(log n). Understand the bit manipulation trick.",
  "Intervals: Merge Intervals, Insert Interval, Non-Overlapping Intervals. All three follow sort-then-merge logic.",
  "Greedy: Jump Game I and II. Classic greedy — track the maximum reachable index. Understand why greedy works here.",
  "Greedy: Gas Station, Task Scheduler. Gas Station is a circular greedy problem. Tank can't go negative.",
  "Sunday: open source contribution day. Make your first PR to a beginner-friendly repo on GitHub. Even documentation counts.",
  "Bit Manipulation: AND, OR, XOR, NOT, left shift, right shift. Number of 1 Bits, Reverse Bits, Missing Number using XOR.",
  "Bit Manipulation: Single Number (XOR trick), Counting Bits (DP with bit trick). These are favorite Google warm-up problems.",
  "Math problems: Palindrome Number, Happy Number (Floyd's cycle), Excel Sheet Column Number. Pattern: use modulo and division.",
  "Two Pointers advanced: Trapping Rain Water — two pointer O(n) solution. Draw water levels. This is a classic Hard made Medium.",
  "Sliding Window advanced: Minimum Window Substring, Longest Repeating Character Replacement. Both use a frequency map inside the window.",
  "Stack advanced: Largest Rectangle in Histogram — monotonic stack. This is asked at Google, Amazon, Microsoft. Understand it cold.",
  "Sunday: AMCAT full mock test. myamcat.com — 90 minutes, full simulation. Log your score. Note every weak area.",

  // Phase 4: Placement Mode (Days 150-212)  
  "AWS: create a free tier account. Understand the free tier limits. EC2 t2.micro, S3 5GB, RDS 750 hrs — these are your tools.",
  "AWS EC2: launch a t2.micro Ubuntu instance. SSH into it. Install Java 21. Run your Spring Boot JAR manually. This is raw deployment.",
  "AWS EC2: set up a systemd service so your Spring Boot app starts automatically on reboot. This is production thinking.",
  "AWS S3: create a bucket, upload a file via AWS Console. Then upload from Java using AWS SDK. Generate a pre-signed URL.",
  "AWS: IAM roles and policies. Never use root credentials in code. Create an IAM user with minimum required permissions.",
  "AWS: Application Load Balancer. What problem does it solve? When would a single EC2 instance not be enough?",
  "Sunday: deploy your full-stack project on AWS — Spring Boot on EC2, React on S3 with CloudFront (or Vercel). Get a custom domain.",
  "MongoDB: install locally and on Atlas free tier. Understand documents, collections, and databases. Compare to SQL tables.",
  "MongoDB with Spring Boot: spring-data-mongodb. Write the same CRUD API you built with JPA but now with MongoDB. Compare the code.",
  "MongoDB: aggregation pipeline — $match, $group, $sort, $project. Write a query that computes stats from your data.",
  "MongoDB: indexing — explain() query plan, create single and compound indexes. Understand how indexes speed up queries.",
  "Redis: what is it, when do you use it? Add Redis caching to your Spring Boot app. Cache the most frequently read endpoint.",
  "Docker basics: write a Dockerfile for your Spring Boot app. Build the image, run the container. This is table stakes for any job.",
  "Sunday: LeetCode Weekly Contest + deploy Docker container to Railway. Two things.",
  "Company-tagged problems: JPMC — Array, String, OOP design questions. leetcode.com/company/jpmorgan/. Do 3 problems.",
  "Company-tagged problems: PayPal — HashMap, Recursion patterns. leetcode.com/company/paypal/. Do 3 problems.",
  "Company-tagged problems: Amazon — Trees, Graph BFS/DFS. leetcode.com/company/amazon/. Do 3 problems. LP principles for HR.",
  "Company-tagged: Microsoft — Dynamic Programming, Design. leetcode.com/company/microsoft/. Do 3 problems.",
  "Company-tagged: Google — Hard problems, System Design. leetcode.com/company/google/. Do 2 hard problems today.",
  "Resume: write every project bullet as 'Built X using Y that achieved Z'. Z must be a number or a real outcome. No vague bullets.",
  "Sunday: full mock interview simulation. Technical round (45 min) + HR round (30 min) back to back. Record both. Watch them.",
  "HR prep: STAR method (Situation, Task, Action, Result). Write answers to: Tell me about yourself. Why this company. Biggest failure.",
  "HR prep: 'Where do you see yourself in 5 years?' — For JPMC/PayPal this means technical growth + business impact. Craft your answer.",
  "HR prep: Behavioural — 'Tell me about a time you worked in a team conflict.' Use STAR. Write 3 different scenarios.",
  "HR prep: 'Why software engineering?' — Your answer needs to sound genuine, not rehearsed. Write it, edit it, say it aloud 10 times.",
  "HR prep: 'What is your biggest strength and weakness?' — Weakness must be real but framed as growth. Not 'I work too hard.'",
  "Communication: record yourself answering 'Tell me about yourself' on camera. Watch it. Fix posture, filler words, eye contact.",
  "Sunday: apply to 5 companies — JPMC, PayPal, and 3 mid-size fintechs. Personalise each cover letter in 2 sentences.",
  "Advanced System Design: Design WhatsApp — WebSockets, message queues, read receipts, last seen. Speak for 45 minutes.",
  "Advanced System Design: Design Netflix — CDN, encoding pipeline, recommendation system. Big system, draw each component.",
  "Advanced System Design: Design Google Search — web crawling, inverted index, PageRank. 10 billion pages. How?",
  "Advanced DP: Edit Distance, Distinct Subsequences. Edit Distance is used in spell checkers and DNA matching.",
  "Advanced DP: Burst Balloons, Stone Game — interval DP. These are the hardest DP patterns. Do them once fully.",
  "Advanced Graphs: Alien Dictionary (topological sort on characters), Reconstruct Itinerary (Eulerian path).",
  "Sunday: LeetCode Biweekly Contest + make 2 more open source contributions. Check hacktoberfest repos.",
  "Full mock OA: JPMC-format — 2 coding problems (Medium/Hard) + 20 aptitude questions — 90 minutes total. Simulate exactly.",
  "Full mock OA: PayPal-format — 2 coding problems + communication test + personality assessment. Research their format online.",
  "Spring Boot advanced: @Async methods, @Scheduled tasks, Spring Events. Write a background job that runs every 5 minutes.",
  "Spring Boot: WebSockets with STOMP. Build a simple real-time feature — live notifications in your app.",
  "Spring Boot: Testing — @SpringBootTest, @WebMvcTest, Mockito. Write tests for your controller and service layers.",
  "Microservices intro: what are they and when do they make sense? Monolith vs microservices — know both arguments for interviews.",
  "Sunday: final project polish. Three projects must have: live URL, clean README with screenshots, clear tech stack listed.",

  // Phase 5: Final Push + Internship Prep (Days 213-262)
  "Resume final review: one page, live URLs on all projects, no orphan bullets. Get 2 people to read it. Fix grammar.",
  "LinkedIn: update headline to 'Java Backend Developer | Spring Boot | DSA'. Connect with 10 JPMC/PayPal engineers today.",
  "Cold email template: 2 sentences about yourself, 1 sentence on what you built, ask for referral or coffee chat. Send 5 today.",
  "LeetCode: company-specific grinding. 3 JPMC problems today. Note every pattern you see. Build your own pattern cheatsheet.",
  "Mock interview: Pramp — technical round. Use their matched peer. Be on time. Take it seriously.",
  "System Design: practice the 45-minute framework: Clarify → Estimate → High-level design → Deep dive → Bottlenecks.",
  "Sunday: apply to 10 companies. LinkedIn Easy Apply + company career pages both. Track in a spreadsheet.",
  "Communication: practice elevator pitch — 30 seconds about who you are and what you've built. Memorise it.",
  "Communication: read 'How to Win Friends and Influence People' — Chapter 1 only today. Note one thing to apply tomorrow.",
  "AMCAT mock 2: full test. Compare score to mock 1. Every wrong question — understand why you got it wrong.",
  "LeetCode Hard: attempt 1 Hard problem cold. 35-minute timer. If stuck, look at approach only. Implement yourself.",
  "System Design: practice designing a rate limiter. Sliding window log and token bucket algorithms. Both.",
  "Verbal communication: Cambly free trial (cambly.com) — 15-minute conversation with a native English speaker today.",
  "Sunday: LeetCode Weekly Contest + Mock HR round with a friend over video call. Friend asks, you answer on camera.",
  "Java: review multithreading basics — Thread, Runnable, synchronized, volatile. Deadlock example and how to prevent it.",
  "Java: Executor framework — ThreadPoolExecutor, Future, Callable. Write a parallel task processor.",
  "Java: Design Patterns — Singleton, Factory, Builder, Observer. Write code for each. These appear in interview design questions.",
  "Java: Comparable vs Comparator, Functional interfaces, Lambda expressions, Stream API. Java 8+ features are tested.",
  "LeetCode: 2 problems from your weakest pattern (check your log). The pattern you solve least is where you'll lose interviews.",
  "Applied project: add one impressive feature to your best project — real-time notifications, email sending, payment simulation.",
  "Sunday: apply 10 more companies + write 3 new STAR stories based on your projects. Projects are your evidence.",
  "Mock full interview day: 10 AM technical (45 min) + 11 AM system design (45 min) + 12 PM HR (30 min). Block your calendar.",
  "Communication: watch a YouTube video on JPMC interview experience. Note what they ask. Search 'JPMC SDE interview experience 2024'.",
  "Communication: watch PayPal interview experience video. Note patterns. 'PayPal software engineer interview experience 2024'.",
  "LeetCode: 3 Medium problems today — random from your weak patterns. Time each one. Log results.",
  "Review all 6 STAR stories you've written. Say each one aloud. Time yourself. Each should be 90-120 seconds.",
  "Sunday: final application push — 15 companies in one day. Use a spreadsheet. Track status. Set follow-up reminders.",
  "Confidence builder: open your GitHub. Count commits since April 14. That number is your proof. Nobody can argue with commits.",
  "Final system design: design the system you would build if you had unlimited time and resources. Dream big. Know it cold.",
  "Final DSA: re-solve your top 10 hardest problems from the entire journey from scratch. No notes. Prove you own them.",
  "Final communication: record your complete 'interview day simulation' — technical question answer + system design walk-through + HR answers. All on video.",
  "Tomorrow is what all of this was for. Sleep 8 hours tonight. No new content. No new topics. Trust the 262 days. You're ready.",
]

// ── FULL DAILY SCHEDULE DATABASE ─────────────────────────────
// Each day is completely unique
const DAILY_SCHEDULES = {

  // ════════════════════════════════════════════════════════════
  // PHASE 1: VACATION SPRINT — Apr 14 to Jun 1 (Days 1-49)
  // Full day available. Java + DSA foundations + Communication
  // ════════════════════════════════════════════════════════════

  "2026-04-14": {
    day: 1, phase: 1, isBreak: false,
    title: "Day 1 — Java Setup + Hello World",
    tip: TIPS[0],
    timeBlocks: [
      { time: "6:00 AM", label: "Wake + read today's tip. Open IntelliJ. Create project: CrackIt2026." },
      { time: "7:00 AM", label: "Watch: Anuj Bhaiya Java Playlist Video 1 — JDK, JVM, JRE explained", link: "https://www.youtube.com/watch?v=CFD9EFcNZTQ" },
      { time: "7:25 AM", label: "Close YouTube. Code: write Main.java, print your name, age, college, goal. Run it." },
      { time: "8:00 AM", label: "Watch: Variables and Data Types (Video 2)", link: "https://www.youtube.com/watch?v=CFD9EFcNZTQ&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=2" },
      { time: "8:25 AM", label: "Code: declare int, double, char, boolean, String variables. Print them all. Understand each type's range." },
      { time: "9:30 AM", label: "Practice: Variables Quiz on W3Schools — score 100%", link: "https://www.w3schools.com/java/java_quiz.asp" },
      { time: "10:00 AM", label: "Communication: Watch 'How to Introduce Yourself' — TED-Ed", link: "https://www.youtube.com/watch?v=cef35Fk7YD8" },
      { time: "10:30 AM", label: "Communication Exercise: Record a 1-minute self-introduction on your phone. Don't edit. Just record." },
      { time: "11:00 AM", label: "LeetCode: Read problem 'Hello World' warm-up — solve #1 Two Sum. Study the problem. Don't code yet.", link: "https://leetcode.com/problems/two-sum/" },
      { time: "11:30 AM", label: "Lunch + walk. No screen." },
      { time: "1:30 PM", label: "Aptitude: IndiaBix — Number System basics 20 questions", link: "https://www.indiabix.com/aptitude/numbers/" },
      { time: "2:15 PM", label: "Active Recall: open a blank file. Write everything you learned today from memory. No notes." },
      { time: "3:00 PM", label: "Build: Create 'HelloCrackit.java' — prints your name, today's date, your goal (JPMC by Dec 2026), your plan." },
      { time: "4:00 PM", label: "Setup GitHub: create account, create repo 'crackit-2026', push HelloCrackit.java. First commit.", link: "https://github.com/" },
      { time: "5:00 PM", label: "Read: What is the JVM? How does Java code execute? javaguides.net", link: "https://www.javaguides.net/2018/08/how-jvm-works-jvm-architecture.html" },
      { time: "6:00 PM", label: "Communication: ELSA Speak app — download and complete Day 1 lesson", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "Review + log your day. GitHub commit. Write 3 lines: what you learned, what confused you, what to revisit." },
    ],
    practice: [
      { label: "W3Schools Java Quiz — Variables", link: "https://www.w3schools.com/java/java_quiz.asp", type: "practice" },
      { label: "LeetCode #1 Two Sum — study problem (don't solve yet)", link: "https://leetcode.com/problems/two-sum/", type: "leetcode" },
    ],
    communication: { label: "Record 1-min self-introduction. ELSA Speak Day 1.", link: "https://elsaspeak.com/en/" },
  },

  "2026-04-15": {
    day: 2, phase: 1, isBreak: false,
    title: "Day 2 — Operators, Type Casting, Input",
    tip: TIPS[1],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: write all Java data types and their sizes from memory. Check against docs." },
      { time: "7:00 AM", label: "Watch: Operators in Java — arithmetic, relational, logical, bitwise", link: "https://www.youtube.com/watch?v=M66xNXVB4fE&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=3" },
      { time: "7:25 AM", label: "Code: write a program using ALL operator types. Test each. Especially: % (modulo) and integer division." },
      { time: "8:30 AM", label: "Watch: Scanner class — taking user input", link: "https://www.youtube.com/watch?v=CFD9EFcNZTQ&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=4" },
      { time: "8:55 AM", label: "Code: build a simple calculator — takes 2 numbers and operator from user, returns result." },
      { time: "10:00 AM", label: "LeetCode #1: Two Sum — solve it now. 25-minute timer. Brute force first, then HashMap O(n) solution.", link: "https://leetcode.com/problems/two-sum/" },
      { time: "10:30 AM", label: "LeetCode: Read and understand #412 Fizz Buzz — solve it. Operators + modulo practice.", link: "https://leetcode.com/problems/fizz-buzz/" },
      { time: "11:00 AM", label: "Communication: Watch 'The Art of Small Talk' — Jordan Harbinger Show", link: "https://www.youtube.com/watch?v=kUQMv1Uw9ZM" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: IndiaBix — Simplification 20 questions", link: "https://www.indiabix.com/aptitude/simplification/" },
      { time: "2:15 PM", label: "Communication: Join this Discord server for CS students and introduce yourself", link: "https://discord.gg/leetcode" },
      { time: "3:00 PM", label: "Build: extend calculator to handle division by zero gracefully. Add type casting: show both int and double results." },
      { time: "4:30 PM", label: "Read: Java type casting and implicit vs explicit conversion — GeeksForGeeks", link: "https://www.geeksforgeeks.org/type-conversion-java-examples/" },
      { time: "5:30 PM", label: "ELSA Speak: Day 2 lesson — pronunciation basics", link: "https://elsaspeak.com/en/" },
      { time: "6:30 PM", label: "GitHub: commit today's code with a meaningful message. Not 'update' — describe what you built." },
      { time: "7:00 PM", label: "Log your day. What was harder than expected? What was easier?" },
    ],
    practice: [
      { label: "LeetCode #1 Two Sum", link: "https://leetcode.com/problems/two-sum/", type: "leetcode" },
      { label: "LeetCode #412 Fizz Buzz", link: "https://leetcode.com/problems/fizz-buzz/", type: "leetcode" },
    ],
    communication: { label: "Join LeetCode Discord and introduce yourself", link: "https://discord.gg/leetcode" },
  },

  "2026-04-16": {
    day: 3, phase: 1, isBreak: false,
    title: "Day 3 — Conditionals + Switch",
    tip: TIPS[2],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: write Two Sum solution from memory. No hints. Check after." },
      { time: "7:00 AM", label: "Watch: if-else, nested if, ternary operator", link: "https://www.youtube.com/watch?v=HrxBCCMRuiU&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=5" },
      { time: "7:25 AM", label: "Code: grade calculator — takes marks 0-100, prints A/B/C/D/F. Use if-else, then ternary, then switch." },
      { time: "8:30 AM", label: "Watch: Switch statement — all variations including switch expressions (Java 14+)", link: "https://www.youtube.com/watch?v=mA23x39DjbI" },
      { time: "8:55 AM", label: "Code: Day-of-week program using switch. Print schedule for that day." },
      { time: "10:00 AM", label: "LeetCode #9 Palindrome Number — use modulo and division, no string conversion", link: "https://leetcode.com/problems/palindrome-number/" },
      { time: "10:30 AM", label: "LeetCode #13 Roman to Integer — conditional logic, HashMap lookup", link: "https://leetcode.com/problems/roman-to-integer/" },
      { time: "11:00 AM", label: "Communication: Watch 'How to Sound Smarter' — Charisma on Command", link: "https://www.youtube.com/watch?v=F4Zu5ZZAG7I" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: IndiaBix — HCF and LCM 15 questions", link: "https://www.indiabix.com/aptitude/hcf-and-lcm/" },
      { time: "2:15 PM", label: "Communication: Practice Speaking — Read a paragraph from a news article aloud. Record it. Focus on clarity." },
      { time: "3:00 PM", label: "Build: ATM simulator — PIN check, balance display, withdraw, deposit. Uses conditionals throughout." },
      { time: "5:00 PM", label: "Read: Java switch expressions (modern Java) — Baeldung", link: "https://www.baeldung.com/java-switch" },
      { time: "6:00 PM", label: "ELSA Speak: Day 3", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub commit + log." },
    ],
    practice: [
      { label: "LeetCode #9 Palindrome Number", link: "https://leetcode.com/problems/palindrome-number/", type: "leetcode" },
      { label: "LeetCode #13 Roman to Integer", link: "https://leetcode.com/problems/roman-to-integer/", type: "leetcode" },
    ],
    communication: { label: "Read news paragraph aloud. Record. Focus on clarity and pace.", link: "https://timesofindia.indiatimes.com/" },
  },

  "2026-04-17": {
    day: 4, phase: 1, isBreak: false,
    title: "Day 4 — Loops (for, while, do-while)",
    tip: TIPS[3],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: Roman to Integer solution from memory. Write it." },
      { time: "7:00 AM", label: "Watch: for loop, while loop, do-while — all three", link: "https://www.youtube.com/watch?v=MqZmwbBbEms&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=6" },
      { time: "7:25 AM", label: "Code: print multiplication table using all 3 loop types. Then: star triangle pattern using nested loops." },
      { time: "8:30 AM", label: "Code: write a program to check prime numbers. Count primes from 1-100 using Sieve of Eratosthenes." },
      { time: "9:30 AM", label: "LeetCode #231 Power of Two — bit manipulation with loop", link: "https://leetcode.com/problems/power-of-two/" },
      { time: "10:00 AM", label: "LeetCode #504 Base 7 — loop + modulo division", link: "https://leetcode.com/problems/base-7/" },
      { time: "10:30 AM", label: "LeetCode #66 Plus One — array + loop", link: "https://leetcode.com/problems/plus-one/" },
      { time: "11:00 AM", label: "Communication: Speakandlearn.com — 15-minute speaking session", link: "https://www.speakandlearn.com/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: IndiaBix — Square Roots and Cube Roots", link: "https://www.indiabix.com/aptitude/square-root-and-cube-root/" },
      { time: "2:15 PM", label: "Communication: Reddit r/cscareerquestions — read top 5 posts. Understand what senior devs talk about.", link: "https://www.reddit.com/r/cscareerquestions/" },
      { time: "3:00 PM", label: "Build: Number guessing game — random number 1-100, loop until user guesses. Show 'higher/lower' hints." },
      { time: "5:00 PM", label: "Read: break and continue in loops — when to use each. GeeksForGeeks", link: "https://www.geeksforgeeks.org/break-statement-in-java/" },
      { time: "6:00 PM", label: "ELSA Speak Day 4", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub commit + log." },
    ],
    practice: [
      { label: "LeetCode #231 Power of Two", link: "https://leetcode.com/problems/power-of-two/", type: "leetcode" },
      { label: "LeetCode #504 Base 7", link: "https://leetcode.com/problems/base-7/", type: "leetcode" },
      { label: "LeetCode #66 Plus One", link: "https://leetcode.com/problems/plus-one/", type: "leetcode" },
    ],
    communication: { label: "Speakandlearn.com 15-min session", link: "https://www.speakandlearn.com/" },
  },

  "2026-04-18": {
    day: 5, phase: 1, isBreak: false,
    title: "Day 5 — Arrays (1D and 2D)",
    tip: TIPS[4],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: write programs for prime check and number guessing from memory." },
      { time: "7:00 AM", label: "Watch: Arrays in Java — declaration, initialisation, traversal", link: "https://www.youtube.com/watch?v=ei_4Nt7VHME&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=7" },
      { time: "7:25 AM", label: "Code: int[] arr = {3,1,4,1,5,9}. Write: find max, min, sum, average, second largest. No built-in sort." },
      { time: "8:30 AM", label: "Watch: 2D arrays, matrix traversal", link: "https://www.youtube.com/watch?v=NptnmWvkbTw&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=8" },
      { time: "8:55 AM", label: "Code: transpose a matrix in place. Then: rotate matrix 90 degrees." },
      { time: "10:00 AM", label: "LeetCode #217 Contains Duplicate — HashSet approach", link: "https://leetcode.com/problems/contains-duplicate/" },
      { time: "10:30 AM", label: "LeetCode #53 Maximum Subarray — Kadane's algorithm", link: "https://leetcode.com/problems/maximum-subarray/" },
      { time: "11:00 AM", label: "LeetCode #118 Pascal's Triangle — 2D array construction", link: "https://leetcode.com/problems/pascals-triangle/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: IndiaBix — Averages 20 questions", link: "https://www.indiabix.com/aptitude/average/" },
      { time: "2:15 PM", label: "Communication: Watch 'How to Stop Saying Um and Uh' — Noah Zandan", link: "https://www.youtube.com/watch?v=f9xFBb2bM5I" },
      { time: "3:00 PM", label: "Striver A2Z: Array Easy — Largest element, Second largest, Check sorted array", link: STRIVER },
      { time: "4:30 PM", label: "Build: Student marks analyzer — array of 10 students, print rank list, class average, pass/fail." },
      { time: "6:00 PM", label: "ELSA Speak Day 5", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub commit + log." },
    ],
    practice: [
      { label: "LeetCode #217 Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", type: "leetcode" },
      { label: "LeetCode #53 Maximum Subarray (Kadane's)", link: "https://leetcode.com/problems/maximum-subarray/", type: "leetcode" },
      { label: "LeetCode #118 Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/", type: "leetcode" },
      { label: "Striver A2Z: Array Easy section", link: STRIVER, type: "sheet" },
    ],
    communication: { label: "Watch 'How to Stop Saying Um' video. Practice in next conversation.", link: "https://www.youtube.com/watch?v=f9xFBb2bM5I" },
  },

  "2026-04-19": {
    day: 6, phase: 1, isBreak: false,
    title: "Day 6 — Methods and String Deep Dive",
    tip: TIPS[5],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: Kadane's algorithm from memory. Write the code. Explain the logic aloud." },
      { time: "7:00 AM", label: "Watch: Methods in Java — parameters, return types, method overloading", link: "https://www.youtube.com/watch?v=vvanI8NRlSI&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=9" },
      { time: "7:25 AM", label: "Code: write 5 pure functions — add, multiply, isPrime, reverseString, sumArray. No side effects." },
      { time: "8:30 AM", label: "Watch: String class in Java — immutability, String pool, methods", link: "https://www.youtube.com/watch?v=GNnuMZGDaGs" },
      { time: "8:55 AM", label: "Code: use charAt(), substring(), indexOf(), replace(), split(), length(). Write programs for each." },
      { time: "10:00 AM", label: "LeetCode #344 Reverse String — two pointer, in-place", link: "https://leetcode.com/problems/reverse-string/" },
      { time: "10:30 AM", label: "LeetCode #242 Valid Anagram — frequency map using int[26]", link: "https://leetcode.com/problems/valid-anagram/" },
      { time: "11:00 AM", label: "LeetCode #125 Valid Palindrome — two pointers, alphanumeric check", link: "https://leetcode.com/problems/valid-palindrome/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: IndiaBix — Percentage 20 questions", link: "https://www.indiabix.com/aptitude/percentage/" },
      { time: "2:15 PM", label: "Communication: Toastmasters — find nearest online club and register for next meeting", link: "https://www.toastmasters.org/find-a-club" },
      { time: "3:00 PM", label: "Striver A2Z: Array Medium — Left rotate by K places, Move zeros to end", link: STRIVER },
      { time: "4:30 PM", label: "Build: String utility library — methods for isPalindrome, reverseWords, countVowels, titleCase. All tested." },
      { time: "6:00 PM", label: "ELSA Speak Day 6", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub commit + log." },
    ],
    practice: [
      { label: "LeetCode #344 Reverse String", link: "https://leetcode.com/problems/reverse-string/", type: "leetcode" },
      { label: "LeetCode #242 Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", type: "leetcode" },
      { label: "LeetCode #125 Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", type: "leetcode" },
    ],
    communication: { label: "Register for Toastmasters online club meeting", link: "https://www.toastmasters.org/find-a-club" },
  },

  "2026-04-20": {
    day: 7, phase: 1, isBreak: false, isSunday: true,
    title: "Day 7 — SUNDAY: Review + Recall + LeetCode Contest",
    tip: TIPS[6],
    timeBlocks: [
      { time: "7:00 AM", label: "Recall Sprint: open blank file. Write solutions for Two Sum, Valid Anagram, Valid Palindrome from memory." },
      { time: "8:30 AM", label: "Fix any mistakes from recall. Understand every line." },
      { time: "9:30 AM", label: "LeetCode Weekly Contest — join today's contest. leetcode.com/contest/ — attempt Q1 and Q2 minimum.", link: "https://leetcode.com/contest/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Full 30-question mixed test — number system + percentage + HCF/LCM", link: "https://www.indiabix.com/" },
      { time: "2:30 PM", label: "Communication: Attend your first Toastmasters online meeting — just observe today. Note how people speak.", link: "https://www.toastmasters.org/find-a-club" },
      { time: "4:00 PM", label: "Build: Week 1 project — Calculator CLI with all operations. User input. Error handling. Push to GitHub." },
      { time: "6:00 PM", label: "Watch: Public Speaking for Beginners — Coursera free preview", link: "https://www.coursera.org/learn/public-speaking" },
      { time: "7:00 PM", label: "Week 1 review: write 5 things you're proud of, 3 things that need work." },
    ],
    practice: [
      { label: "LeetCode Weekly Contest", link: "https://leetcode.com/contest/", type: "contest" },
    ],
    communication: { label: "Toastmasters online meeting — observe", link: "https://www.toastmasters.org/find-a-club" },
  },

  // Days 8-14: OOP Week
  "2026-04-21": {
    day: 8, phase: 1, isBreak: false,
    title: "Day 8 — OOP: Classes and Objects",
    tip: TIPS[7],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: write calculator code + array max/min from memory." },
      { time: "7:00 AM", label: "Watch: Classes and Objects in Java — Anuj Bhaiya", link: "https://www.youtube.com/watch?v=9c3iU7gBx6k&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=11" },
      { time: "7:25 AM", label: "Code: create Student class with name, rollNo, marks. Constructor. getGrade() method. Create 3 objects." },
      { time: "8:30 AM", label: "Code: BankAccount class — balance, accountNumber, owner. deposit(), withdraw(), getBalance(). No negative balance." },
      { time: "10:00 AM", label: "LeetCode #706 Design HashMap — implement from scratch with arrays", link: "https://leetcode.com/problems/design-hashmap/" },
      { time: "10:45 AM", label: "LeetCode #705 Design HashSet", link: "https://leetcode.com/problems/design-hashset/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Ratios and Proportions 20 questions", link: "https://www.indiabix.com/aptitude/ratio-and-proportion/" },
      { time: "2:15 PM", label: "Communication: TED Talk — Simon Sinek 'How Great Leaders Inspire Action'", link: "https://www.youtube.com/watch?v=qp0HIF3SfI4" },
      { time: "3:00 PM", label: "Communication: After watching — write Simon's main argument in 3 sentences. Then say those 3 sentences aloud confidently." },
      { time: "3:30 PM", label: "Striver A2Z: Array Hard — Best time to buy and sell stock variants", link: STRIVER },
      { time: "5:00 PM", label: "Read: 'this' keyword in Java — why it exists and when you need it", link: "https://www.geeksforgeeks.org/this-reference-in-java/" },
      { time: "6:00 PM", label: "ELSA Speak Day 8", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub commit. Log: what does OOP solve that procedural programming doesn't?" },
    ],
    practice: [
      { label: "LeetCode #706 Design HashMap", link: "https://leetcode.com/problems/design-hashmap/", type: "leetcode" },
      { label: "LeetCode #705 Design HashSet", link: "https://leetcode.com/problems/design-hashset/", type: "leetcode" },
      { label: "Striver: Array Hard section", link: STRIVER, type: "sheet" },
    ],
    communication: { label: "TED: Simon Sinek. Write his argument in 3 sentences. Say them aloud.", link: "https://www.youtube.com/watch?v=qp0HIF3SfI4" },
  },

  "2026-04-22": {
    day: 9, phase: 1, isBreak: false,
    title: "Day 9 — Constructors + this Keyword",
    tip: TIPS[8],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: write BankAccount class from memory." },
      { time: "7:00 AM", label: "Watch: Constructors — default, parameterised, copy constructor", link: "https://www.youtube.com/watch?v=oSiN1J_G4MM&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=12" },
      { time: "7:25 AM", label: "Code: Rectangle class with all 3 constructor types. area(), perimeter(), isSquare() methods." },
      { time: "8:30 AM", label: "Code: constructor chaining using this(). Why it's useful. Build Employee class with optional fields." },
      { time: "10:00 AM", label: "LeetCode #303 Range Sum Query — prefix sum array (built in constructor)", link: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { time: "10:45 AM", label: "LeetCode #1480 Running Sum of 1D Array — prefix sum technique", link: "https://leetcode.com/problems/running-sum-of-1d-array/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Time and Work 15 questions", link: "https://www.indiabix.com/aptitude/time-and-work/" },
      { time: "2:15 PM", label: "Communication: Group Discussion practice — groupdiscussion.info. Read GD topics and practice arguing one side.", link: "https://groupdiscussion.info/" },
      { time: "3:00 PM", label: "Striver A2Z: Arrays — Dutch National Flag algorithm (sort 0,1,2)", link: STRIVER },
      { time: "4:30 PM", label: "Read: static keyword in Java — static fields, static methods, static blocks", link: "https://www.geeksforgeeks.org/static-keyword-java/" },
      { time: "6:00 PM", label: "ELSA Speak Day 9", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub + log." },
    ],
    practice: [
      { label: "LeetCode #303 Range Sum Query", link: "https://leetcode.com/problems/range-sum-query-immutable/", type: "leetcode" },
      { label: "LeetCode #1480 Running Sum of 1D Array", link: "https://leetcode.com/problems/running-sum-of-1d-array/", type: "leetcode" },
      { label: "Striver: Dutch National Flag", link: STRIVER, type: "sheet" },
    ],
    communication: { label: "GroupDiscussion.info — practice arguing one GD topic for 2 minutes", link: "https://groupdiscussion.info/" },
  },

  "2026-04-23": {
    day: 10, phase: 1, isBreak: false,
    title: "Day 10 — Inheritance",
    tip: TIPS[9],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: Range Sum Query. What's the key insight of prefix sums?" },
      { time: "7:00 AM", label: "Watch: Inheritance in Java — extends, method overriding, super", link: "https://www.youtube.com/watch?v=kAm0kguOlSY&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=13" },
      { time: "7:25 AM", label: "Code: Animal → Dog → GoldenRetriever hierarchy. Each adds something. Override makeSound() at each level." },
      { time: "8:30 AM", label: "Code: Shape → Circle, Rectangle, Triangle. Each implements area() differently. Test polymorphism." },
      { time: "10:00 AM", label: "LeetCode #155 Min Stack — OOP design with inheritance concept", link: "https://leetcode.com/problems/min-stack/" },
      { time: "10:45 AM", label: "LeetCode #232 Implement Queue using Stacks — OOP design", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Pipes and Cisterns 15 questions", link: "https://www.indiabix.com/aptitude/pipes-and-cisterns/" },
      { time: "2:15 PM", label: "Communication: Public speaking — read one paragraph from a book aloud. Then paraphrase it from memory." },
      { time: "3:00 PM", label: "Striver A2Z: Strings — Reverse words in a string, Longest Common Prefix", link: STRIVER },
      { time: "4:30 PM", label: "Read: final keyword in Java — final class, final method, final variable. Why each matters.", link: "https://www.geeksforgeeks.org/final-keyword-in-java/" },
      { time: "6:00 PM", label: "ELSA Speak Day 10", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub + log. Note: how does inheritance reduce code duplication?" },
    ],
    practice: [
      { label: "LeetCode #155 Min Stack", link: "https://leetcode.com/problems/min-stack/", type: "leetcode" },
      { label: "LeetCode #232 Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/", type: "leetcode" },
      { label: "Striver: String manipulation problems", link: STRIVER, type: "sheet" },
    ],
    communication: { label: "Read paragraph aloud then paraphrase from memory. Repeat 3 times.", link: null },
  },

  "2026-04-24": {
    day: 11, phase: 1, isBreak: false,
    title: "Day 11 — Polymorphism + Abstract Classes",
    tip: TIPS[10],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: Min Stack — write it from memory. All methods." },
      { time: "7:00 AM", label: "Watch: Polymorphism — compile-time vs runtime. Abstract classes.", link: "https://www.youtube.com/watch?v=MCxRPlqDLsU&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=14" },
      { time: "7:25 AM", label: "Code: abstract Shape class with abstract area(). Concrete Circle, Rect, Triangle implement it. Store in Shape[] array." },
      { time: "8:30 AM", label: "Code: abstract Payment class → CreditCard, UPI, NetBanking subclasses. Each processes payment differently." },
      { time: "10:00 AM", label: "LeetCode #20 Valid Parentheses — Stack-based, check types match", link: "https://leetcode.com/problems/valid-parentheses/" },
      { time: "10:45 AM", label: "LeetCode #1047 Remove All Adjacent Duplicates — Stack approach", link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Time Speed Distance 20 questions", link: "https://www.indiabix.com/aptitude/time-and-distance/" },
      { time: "2:15 PM", label: "Communication: InterviewBit HR questions — read top 10 and write answers for each in notes", link: "https://www.interviewbit.com/hr-interview-questions/" },
      { time: "3:30 PM", label: "NeetCode: Two Pointers — Two Sum II (sorted array), 3Sum", link: NEETCODE },
      { time: "5:00 PM", label: "Read: interfaces vs abstract classes — the definitive answer", link: "https://www.baeldung.com/java-interface-vs-abstract-class" },
      { time: "6:00 PM", label: "ELSA Speak Day 11", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub + log." },
    ],
    practice: [
      { label: "LeetCode #20 Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/", type: "leetcode" },
      { label: "LeetCode #1047 Remove Adjacent Duplicates", link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/", type: "leetcode" },
      { label: "NeetCode: Two Pointers section", link: NEETCODE, type: "neetcode" },
    ],
    communication: { label: "InterviewBit: read top 10 HR questions. Write 3-sentence answers for each.", link: "https://www.interviewbit.com/hr-interview-questions/" },
  },

  "2026-04-25": {
    day: 12, phase: 1, isBreak: false,
    title: "Day 12 — Interfaces",
    tip: TIPS[11],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: Valid Parentheses from memory. What data structure and why?" },
      { time: "7:00 AM", label: "Watch: Interfaces in Java — implements, default methods, functional interfaces", link: "https://www.youtube.com/watch?v=DlU_OIuTXJ0&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=15" },
      { time: "7:25 AM", label: "Code: Flyable interface → Bird, Airplane, Superman. Swimmable interface → Duck, Dolphin. Multiple interface implementation." },
      { time: "8:30 AM", label: "Code: Comparable interface — implement compareTo() on Student class. Sort array of Students by marks." },
      { time: "10:00 AM", label: "LeetCode #15 3Sum — sort + two pointers, skip duplicates", link: "https://leetcode.com/problems/3sum/" },
      { time: "10:45 AM", label: "LeetCode #11 Container With Most Water — two pointer", link: "https://leetcode.com/problems/container-with-most-water/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Simple Interest and Compound Interest", link: "https://www.indiabix.com/aptitude/simple-interest/" },
      { time: "2:15 PM", label: "Communication: Record yourself answering 'Tell me about yourself' in 90 seconds. No script. Watch it back." },
      { time: "3:30 PM", label: "NeetCode: Sliding Window — Best Time to Buy and Sell Stock, Longest Substring Without Repeating Characters", link: NEETCODE },
      { time: "5:00 PM", label: "Striver A2Z: Two Pointers section — all problems", link: STRIVER },
      { time: "6:00 PM", label: "ELSA Speak Day 12", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub + log." },
    ],
    practice: [
      { label: "LeetCode #15 3Sum", link: "https://leetcode.com/problems/3sum/", type: "leetcode" },
      { label: "LeetCode #11 Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", type: "leetcode" },
      { label: "NeetCode: Sliding Window section", link: NEETCODE, type: "neetcode" },
    ],
    communication: { label: "Record 'Tell me about yourself' 90 seconds. Watch it back. Note improvements.", link: null },
  },

  "2026-04-26": {
    day: 13, phase: 1, isBreak: false, isSunday: false,
    title: "Day 13 — Exception Handling + Collections Intro",
    tip: TIPS[12],
    timeBlocks: [
      { time: "6:00 AM", label: "Recall: 3Sum algorithm from memory. What's the time complexity and why?" },
      { time: "7:00 AM", label: "Watch: Exception Handling — try/catch/finally, custom exceptions", link: "https://www.youtube.com/watch?v=HkMzPqUMzRo&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=16" },
      { time: "7:25 AM", label: "Code: BankAccount with custom InsufficientFundsException. Try to withdraw more than balance — catch it." },
      { time: "8:30 AM", label: "Watch: ArrayList and LinkedList in Java Collections", link: "https://www.youtube.com/watch?v=oAJhwgGFOhA&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&index=17" },
      { time: "8:55 AM", label: "Code: use ArrayList to build a dynamic to-do list. add, remove, get, contains, size. All methods." },
      { time: "10:00 AM", label: "LeetCode #167 Two Sum II — sorted array, two pointers", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
      { time: "10:45 AM", label: "LeetCode #567 Permutation in String — sliding window + frequency array", link: "https://leetcode.com/problems/permutation-in-string/" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Aptitude: Profit and Loss 20 questions", link: "https://www.indiabix.com/aptitude/profit-and-loss/" },
      { time: "2:15 PM", label: "Communication: GroupDiscussion.info — 'Should coding be taught in schools?' Practice for 3 minutes alone.", link: "https://groupdiscussion.info/" },
      { time: "3:30 PM", label: "NeetCode: Stack section — Evaluate Reverse Polish Notation, Generate Parentheses", link: NEETCODE },
      { time: "5:00 PM", label: "Build: Error-proof Calculator — handles all edge cases, throws custom exceptions for invalid input." },
      { time: "6:30 PM", label: "ELSA Speak Day 13", link: "https://elsaspeak.com/en/" },
      { time: "7:00 PM", label: "GitHub + log." },
    ],
    practice: [
      { label: "LeetCode #167 Two Sum II", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", type: "leetcode" },
      { label: "LeetCode #567 Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/", type: "leetcode" },
      { label: "NeetCode: Stack section", link: NEETCODE, type: "neetcode" },
    ],
    communication: { label: "GD practice: 'Should coding be taught in schools?' Argue both sides.", link: "https://groupdiscussion.info/" },
  },

  "2026-04-27": {
    day: 14, phase: 1, isBreak: false, isSunday: true,
    title: "Day 14 — SUNDAY: OOP Review + Build Bank App",
    tip: TIPS[13],
    timeBlocks: [
      { time: "7:00 AM", label: "Recall Sprint: write BankAccount, Student, Shape classes from memory. No notes." },
      { time: "8:30 AM", label: "LeetCode Weekly Contest — join today's contest", link: "https://leetcode.com/contest/" },
      { time: "10:30 AM", label: "Lunch + walk." },
      { time: "1:00 PM", label: "Build: Full Bank Account System — Account (abstract), SavingsAccount, CurrentAccount extend it. Transaction history ArrayList. Menu-driven CLI." },
      { time: "3:30 PM", label: "Aptitude: Mixed mock — 30 questions timed", link: "https://www.indiabix.com/" },
      { time: "4:30 PM", label: "Communication: Attend Toastmasters online meeting — take notes on 3 speakers' techniques", link: "https://www.toastmasters.org/find-a-club" },
      { time: "6:00 PM", label: "NeetCode: review your weakest section from this week. Re-solve 2 problems.", link: NEETCODE },
      { time: "7:00 PM", label: "Week 2 review: GitHub has 13 commits this week? If not, catch up. If yes, excellent." },
    ],
    practice: [
      { label: "LeetCode Weekly Contest", link: "https://leetcode.com/contest/", type: "contest" },
      { label: "NeetCode: review weakest section", link: NEETCODE, type: "neetcode" },
    ],
    communication: { label: "Toastmasters online meeting — take notes on speaker techniques", link: "https://www.toastmasters.org/find-a-club" },
  },
}

// ── FALLBACK SCHEDULE GENERATOR for days not explicitly defined
// This generates a unique schedule for every day based on phase + week + day of week
function generateDaySchedule(dateStr, dayNum) {
  const date = new Date(dateStr + 'T00:00:00')
  const dow = date.getDay() // 0=Sun
  const isSun = dow === 0

  if (BREAK_DAYS.has(dateStr)) {
    return {
      day: dayNum, phase: 0, isBreak: true,
      title: "🌿 Rest & Recharge",
      tip: "Recovery is not laziness. Your brain consolidates memories during rest. Take this seriously.",
      timeBlocks: [
        { time: "Morning", label: "Sleep until you wake naturally. No alarm." },
        { time: "Afternoon", label: "Walk outside for 45 minutes. No podcast. Just thoughts." },
        { time: "Evening", label: "Read something non-technical. Watch a movie. Call a friend." },
      ],
      practice: [],
      communication: null,
    }
  }

  // Determine phase
  let phase = 1
  if (dateStr >= '2026-06-02' && dateStr <= '2026-07-27') phase = 2
  else if (dateStr >= '2026-07-28' && dateStr <= '2026-09-28') phase = 3
  else if (dateStr >= '2026-09-29' && dateStr <= '2026-12-14') phase = 4
  else if (dateStr >= '2026-12-15' && dateStr <= '2026-12-31') phase = 5

  // Week number within phase
  const phaseStarts = { 1: '2026-04-14', 2: '2026-06-02', 3: '2026-07-28', 4: '2026-09-29', 5: '2026-12-15' }
  const phaseStart = new Date((phaseStarts[phase] || '2026-04-14') + 'T00:00:00')
  const weekNum = Math.floor((date - phaseStart) / (7 * 24 * 60 * 60 * 1000))
  const dayOfPhase = Math.floor((date - phaseStart) / (24 * 60 * 60 * 1000))

  const tip = TIPS[Math.min(dayNum - 1, TIPS.length - 1)]

  // Phase 1: Java + DSA fundamentals
  if (phase === 1) {
    const weekTopics = [
      // Week 0 (days 1-7): handled explicitly above
      // Week 1 (days 8-14): OOP — handled explicitly above
      // Week 2 (days 15-21): Collections + Recursion
      { topic: "Collections + Recursion", java: "HashMap, HashSet, Generics. Recursion: factorial, fibonacci, power", dsa: "Recursion problems: climbing stairs, reverse string recursively", lc: [{ name: "#509 Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/" }, { name: "#206 Reverse Linked List (recursive)", link: "https://leetcode.com/problems/reverse-linked-list/" }, { name: "#344 Reverse String (recursive)", link: "https://leetcode.com/problems/reverse-string/" }], build: "Student Grade Manager CLI with file I/O", comm: "Record: explain recursion in 60 seconds like explaining to a 10-year-old", commLink: null },
      // Week 3 (days 22-28): Sorting + LinkedList
      { topic: "LinkedList from scratch", java: "LinkedList Node class, insert head/tail, delete, traverse, reverse", dsa: "LinkedList problems — reverse, detect cycle, middle of list", lc: [{ name: "#206 Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" }, { name: "#141 Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/" }, { name: "#876 Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/" }], build: "Your own LinkedList class with all operations", comm: "GroupDiscussion: 'Remote work vs office work' — argue both sides for 2 min each", commLink: "https://groupdiscussion.info/" },
      // Week 4 (days 29-35): Stack + Queue
      { topic: "Stack + Queue", java: "Stack and Queue from scratch — array and linked implementations", dsa: "Stack/Queue problems", lc: [{ name: "#20 Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" }, { name: "#225 Implement Stack using Queues", link: "https://leetcode.com/problems/implement-stack-using-queues/" }, { name: "#739 Daily Temperatures", link: "https://leetcode.com/problems/daily-temperatures/" }], build: "Expression Evaluator using your Stack class", comm: "ELSA Speak + record 2-min explanation of stack vs queue", commLink: "https://elsaspeak.com/en/" },
      // Week 5 (days 36-42): Trees
      { topic: "Binary Trees", java: "TreeNode class, insert, DFS (inorder/preorder/postorder), BFS", dsa: "Tree traversal and manipulation", lc: [{ name: "#104 Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" }, { name: "#226 Invert Binary Tree", link: "https://leetcode.com/problems/invert-binary-tree/" }, { name: "#102 Binary Tree Level Order", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" }], build: "Tree visualizer — prints tree structure in terminal", comm: "Toastmasters meeting + practice explaining binary tree to non-tech person", commLink: "https://www.toastmasters.org/find-a-club" },
      // Week 6 (days 43-49): HashMap deep dive + Review
      { topic: "HashMap + Review Sprint", java: "HashMap internals: hashing, buckets, collisions, load factor", dsa: "HashMap-based problem patterns", lc: [{ name: "#49 Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" }, { name: "#347 Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" }, { name: "#128 Longest Consecutive Sequence", link: "https://leetcode.com/problems/longest-consecutive-sequence/" }], build: "DEPLOY: CLI project with README to GitHub. Get live link.", comm: "Mock interview Q: describe your GitHub project in 2 minutes. Record it.", commLink: null },
    ]

    const wk = Math.max(0, Math.min(weekNum, weekTopics.length - 1))
    const w = weekTopics[wk]

    if (isSun) {
      return {
        day: dayNum, phase, isBreak: false, isSunday: true,
        title: `Day ${dayNum} — SUNDAY: Review + Contest + ${w.topic}`,
        tip,
        timeBlocks: [
          { time: "7:00 AM", label: `Recall: re-solve the 3 hardest problems from this week from memory. No notes.` },
          { time: "9:00 AM", label: "LeetCode Weekly Contest — join today's contest", link: "https://leetcode.com/contest/" },
          { time: "11:30 AM", label: "Lunch + walk." },
          { time: "1:30 PM", label: "Aptitude: full 30-question timed mock", link: "https://www.indiabix.com/" },
          { time: "2:30 PM", label: w.comm, link: w.commLink },
          { time: "3:30 PM", label: `Build session: ${w.build}` },
          { time: "5:30 PM", label: "Review NeetCode roadmap — where are you? Mark completed sections.", link: NEETCODE },
          { time: "7:00 PM", label: "Week review: commits, problems solved, communication practice done. Log all three numbers." },
        ],
        practice: [{ label: "LeetCode Weekly Contest", link: "https://leetcode.com/contest/", type: "contest" }],
        communication: { label: w.comm, link: w.commLink },
      }
    }

    // Rotate through the 3 LC problems for this week based on day of week
    const lcIdx = (dayOfPhase % 3)
    const todayLC = w.lc[Math.min(lcIdx, w.lc.length - 1)]
    const extraLC = w.lc[(lcIdx + 1) % w.lc.length]

    return {
      day: dayNum, phase, isBreak: false,
      title: `Day ${dayNum} — ${w.topic} (Day ${(dayOfPhase % 6) + 1} of 6)`,
      tip,
      timeBlocks: [
        { time: "6:00 AM", label: "Recall: re-solve yesterday's LC problem from memory. If you can't — that's your first task." },
        { time: "7:00 AM", label: `Watch: ${w.java} — Anuj Bhaiya Java playlist`, link: "https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop" },
        { time: "7:25 AM", label: "Close YouTube. Implement what you watched. No notes — code from memory." },
        { time: "9:00 AM", label: `LeetCode: ${todayLC.name} — 25-min timer. No hints. Write approach first.`, link: todayLC.link },
        { time: "9:30 AM", label: `LeetCode: ${extraLC.name}`, link: extraLC.link },
        { time: "10:15 AM", label: `Striver A2Z: ${w.dsa}`, link: STRIVER },
        { time: "11:00 AM", label: `NeetCode Roadmap — current section`, link: NEETCODE },
        { time: "11:30 AM", label: "Lunch + walk." },
        { time: "1:30 PM", label: "Aptitude: 20 questions — today's topic from IndiaBix", link: "https://www.indiabix.com/" },
        { time: "2:15 PM", label: w.comm, link: w.commLink },
        { time: "3:00 PM", label: `Build: ${w.build}` },
        { time: "5:00 PM", label: "Active Recall: explain today's main concept in 5 sentences. Write it, don't type it." },
        { time: "6:00 PM", label: "ELSA Speak — daily lesson", link: "https://elsaspeak.com/en/" },
        { time: "7:00 PM", label: "GitHub commit + log." },
      ],
      practice: [
        { label: todayLC.name, link: todayLC.link, type: "leetcode" },
        { label: extraLC.name, link: extraLC.link, type: "leetcode" },
        { label: `Striver: ${w.dsa}`, link: STRIVER, type: "sheet" },
        { label: "NeetCode Roadmap", link: NEETCODE, type: "neetcode" },
      ],
      communication: { label: w.comm, link: w.commLink },
    }
  }

  // Phase 2: Spring Boot + Backend + DSA
  if (phase === 2) {
    const p2Topics = [
      { topic: "Spring Boot REST API", lec: "Spring Initializr, @RestController, @GetMapping, HTTP methods", lecLink: "https://www.youtube.com/watch?v=9SGDpanrc8U", lc: [{ name: "#206 Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" }, { name: "#21 Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" }], build: "GET /api/hello + POST /api/echo endpoints. Test in Postman." },
      { topic: "Spring Boot + PostgreSQL + JPA", lec: "JPA entities, JpaRepository, CRUD operations", lecLink: "https://www.youtube.com/watch?v=HYgHbn56G4g", lc: [{ name: "#143 Reorder List", link: "https://leetcode.com/problems/reorder-list/" }, { name: "#19 Remove Nth Node From End", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" }], build: "Full CRUD API for a Resource. 5 endpoints. Tested in Postman." },
      { topic: "JWT Authentication in Spring Boot", lec: "Spring Security, JWT token generation and validation", lecLink: "https://www.youtube.com/watch?v=KxqlJblhzfI", lc: [{ name: "#104 Max Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" }, { name: "#543 Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/" }], build: "Register/Login endpoints with JWT. Protect /api/* routes." },
      { topic: "React Fundamentals", lec: "Components, JSX, props, useState, useEffect", lecLink: "https://www.youtube.com/watch?v=CgkZ7MvWUAA", lc: [{ name: "#110 Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" }, { name: "#100 Same Tree", link: "https://leetcode.com/problems/same-tree/" }], build: "React app with 3 components. Fetch data from your API." },
      { topic: "Full Stack Integration + Deploy", lec: "Axios, CORS, Tailwind CSS, deploy to Vercel + Render", lecLink: "https://www.youtube.com/watch?v=WXsD0ZgxjRw", lc: [{ name: "#199 Binary Tree Right Side View", link: "https://leetcode.com/problems/binary-tree-right-side-view/" }, { name: "#1448 Count Good Nodes in BT", link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" }], build: "LIVE deployed full-stack app with working JWT auth." },
      { topic: "DP Introduction", lec: "Memoization vs Tabulation, Fibonacci DP, Climbing Stairs", lecLink: "https://www.youtube.com/watch?v=oBt53YbR9Kk", lc: [{ name: "#70 Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" }, { name: "#198 House Robber", link: "https://leetcode.com/problems/house-robber/" }], build: "Add one new feature to your deployed app. Push + redeploy." },
      { topic: "DP: 1D and 2D patterns", lec: "Coin Change, Longest Common Subsequence, Edit Distance", lecLink: "https://www.youtube.com/watch?v=oBt53YbR9Kk", lc: [{ name: "#322 Coin Change", link: "https://leetcode.com/problems/coin-change/" }, { name: "#1143 LCS", link: "https://leetcode.com/problems/longest-common-subsequence/" }], build: "System Design notes: draw and explain load balancer diagram." },
      { topic: "Graphs + System Design", lec: "Graphs: adjacency list, DFS, BFS. Gaurav Sen: System Design basics", lecLink: "https://www.youtube.com/watch?v=xpDnVSmNFX0", lc: [{ name: "#200 Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" }, { name: "#133 Clone Graph", link: "https://leetcode.com/problems/clone-graph/" }], build: "Add MongoDB to your project as a second data store." },
    ]
    const wk = Math.max(0, Math.min(weekNum, p2Topics.length - 1))
    const w = p2Topics[wk]
    const lcIdx = dayOfPhase % w.lc.length
    const todayLC = w.lc[Math.min(lcIdx, w.lc.length - 1)]

    if (isSun) {
      return {
        day: dayNum, phase, isBreak: false, isSunday: true,
        title: `Day ${dayNum} — SUNDAY: ${w.topic} Deep Work`,
        tip,
        timeBlocks: [
          { time: "7:00 AM", label: "Recall: re-solve hardest problem from this week from memory." },
          { time: "8:00 AM", label: `Watch full lecture: ${w.topic}`, link: w.lecLink },
          { time: "9:00 AM", label: "Implement what you watched. Build session." },
          { time: "10:30 AM", label: `LeetCode: ${w.lc[0].name} + ${w.lc[1].name}`, link: w.lc[0].link },
          { time: "11:30 AM", label: "Lunch + walk." },
          { time: "1:30 PM", label: "Aptitude: 30-question mock timed", link: "https://www.indiabix.com/" },
          { time: "2:30 PM", label: "Communication: mock technical interview — explain your Spring Boot project to an imaginary interviewer for 5 minutes. Record." },
          { time: "4:00 PM", label: `Build: ${w.build}` },
          { time: "6:00 PM", label: "LeetCode Biweekly Contest (if today has one)", link: "https://leetcode.com/contest/" },
          { time: "7:00 PM", label: "GitHub + log." },
        ],
        practice: w.lc.map(l => ({ label: l.name, link: l.link, type: "leetcode" })),
        communication: { label: "Record 5-min technical explanation of your project. Watch it back.", link: null },
      }
    }

    return {
      day: dayNum, phase, isBreak: false,
      title: `Day ${dayNum} — ${w.topic}`,
      tip,
      timeBlocks: [
        { time: "6:30 AM", label: "Recall: yesterday's LC solution from memory." },
        { time: "7:00 AM", label: `Watch lecture: ${w.topic}`, link: w.lecLink },
        { time: "7:20 AM", label: "Close YouTube. Build what you just watched." },
        { time: "9:00 AM", label: `LeetCode: ${todayLC.name} — 25-min timer`, link: todayLC.link },
        { time: "9:30 AM", label: "NeetCode Roadmap — current section", link: NEETCODE },
        { time: "10:15 AM", label: `Build: ${w.build}` },
        { time: "11:30 AM", label: "Lunch + walk." },
        { time: "1:30 PM", label: "Aptitude: 15 questions — logical reasoning", link: "https://www.indiabix.com/logical-reasoning/questions-and-answers/" },
        { time: "2:15 PM", label: "Communication: 15-min Cambly conversation practice", link: "https://www.cambly.com/" },
        { time: "3:00 PM", label: "Striver A2Z — current relevant section", link: STRIVER },
        { time: "4:30 PM", label: "Active Recall: write today's main concept in your own words." },
        { time: "7:00 PM", label: "GitHub + log." },
      ],
      practice: [
        { label: todayLC.name, link: todayLC.link, type: "leetcode" },
        { label: "NeetCode: current section", link: NEETCODE, type: "neetcode" },
        { label: "Striver A2Z: relevant section", link: STRIVER, type: "sheet" },
      ],
      communication: { label: "Cambly 15-min conversation", link: "https://www.cambly.com/" },
    }
  }

  // Phase 3: Interview Forge — DP + Graphs + System Design
  if (phase === 3) {
    const p3Topics = [
      { topic: "DP: 2D Patterns", lc: [{ name: "#64 Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/" }, { name: "#62 Unique Paths", link: "https://leetcode.com/problems/unique-paths/" }], sd: "System Design: Load Balancers", sdLink: "https://www.youtube.com/watch?v=zaRkONvyGr8" },
      { topic: "DP: Knapsack Variants", lc: [{ name: "#416 Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" }, { name: "#494 Target Sum", link: "https://leetcode.com/problems/target-sum/" }], sd: "System Design: Caching strategies — Redis, Memcached", sdLink: "https://www.youtube.com/watch?v=U3RkDLtS7uY" },
      { topic: "Graphs: DFS/BFS Deep Dive", lc: [{ name: "#417 Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" }, { name: "#207 Course Schedule", link: "https://leetcode.com/problems/course-schedule/" }], sd: "System Design: Design URL Shortener", sdLink: "https://www.youtube.com/watch?v=fMZMm_0ZhK4" },
      { topic: "Graphs: Advanced", lc: [{ name: "#323 Number of Connected Components", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" }, { name: "#684 Redundant Connection", link: "https://leetcode.com/problems/redundant-connection/" }], sd: "System Design: CAP theorem + database scaling", sdLink: "https://www.youtube.com/watch?v=kwCFHLbIhak" },
      { topic: "Backtracking", lc: [{ name: "#78 Subsets", link: "https://leetcode.com/problems/subsets/" }, { name: "#46 Permutations", link: "https://leetcode.com/problems/permutations/" }], sd: "System Design: Design Twitter", sdLink: "https://www.youtube.com/watch?v=wYk0xPP_P_8" },
      { topic: "Intervals + Greedy", lc: [{ name: "#56 Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" }, { name: "#435 Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/" }], sd: "System Design: Design Netflix", sdLink: "https://www.youtube.com/watch?v=x9ErDC21O6Y" },
      { topic: "Advanced: Tries + Bit Manipulation", lc: [{ name: "#208 Implement Trie", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" }, { name: "#190 Reverse Bits", link: "https://leetcode.com/problems/reverse-bits/" }], sd: "System Design: Design Google Search", sdLink: "https://www.youtube.com/watch?v=0LTXCcVRQi0" },
      { topic: "Hard Problems Sprint", lc: [{ name: "#84 Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" }, { name: "#42 Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/" }], sd: "Mock System Design: 45-min answer for a system of your choice", sdLink: null },
      { topic: "Blind 75 Completion", lc: [{ name: "#572 Subtree of Another Tree", link: "https://leetcode.com/problems/subtree-of-another-tree/" }, { name: "#297 Serialize/Deserialize BT", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }], sd: "System Design: Design WhatsApp", sdLink: "https://www.youtube.com/watch?v=vvhC64hQZMk" },
    ]
    const wk = Math.max(0, Math.min(weekNum, p3Topics.length - 1))
    const w = p3Topics[wk]
    const lcIdx = dayOfPhase % w.lc.length
    const todayLC = w.lc[Math.min(lcIdx, w.lc.length - 1)]

    if (isSun) {
      return {
        day: dayNum, phase, isBreak: false, isSunday: true,
        title: `Day ${dayNum} — SUNDAY: ${w.topic} + Mock Interview`,
        tip,
        timeBlocks: [
          { time: "7:00 AM", label: "Recall: re-solve 3 hardest problems from this week." },
          { time: "8:30 AM", label: `System Design lecture: ${w.sd}`, link: w.sdLink },
          { time: "9:30 AM", label: "LeetCode Weekly Contest", link: "https://leetcode.com/contest/" },
          { time: "11:30 AM", label: "Lunch + walk." },
          { time: "1:30 PM", label: "Pramp mock interview — schedule one for this week", link: "https://www.pramp.com/" },
          { time: "2:30 PM", label: "AMCAT mock practice — myamcat.com", link: "https://www.myamcat.com/" },
          { time: "4:00 PM", label: "Communication: record yourself doing a system design explanation for 5 minutes. Watch it." },
          { time: "6:00 PM", label: "Striver A2Z — review current section", link: STRIVER },
          { time: "7:00 PM", label: "GitHub + log." },
        ],
        practice: w.lc.map(l => ({ label: l.name, link: l.link, type: "leetcode" })),
        communication: { label: "Pramp mock interview + record system design explanation", link: "https://www.pramp.com/" },
      }
    }

    return {
      day: dayNum, phase, isBreak: false,
      title: `Day ${dayNum} — ${w.topic}`,
      tip,
      timeBlocks: [
        { time: "6:30 AM", label: "Recall: yesterday's hardest problem from memory." },
        { time: "7:00 AM", label: `LeetCode: ${todayLC.name} — 30-min timer. Hard = 35 min.`, link: todayLC.link },
        { time: "7:35 AM", label: "Write approach explanation in 3 sentences. No jargon." },
        { time: "8:00 AM", label: `System Design: ${w.sd}`, link: w.sdLink },
        { time: "9:00 AM", label: "NeetCode: current section", link: NEETCODE },
        { time: "10:00 AM", label: "Striver A2Z: current section", link: STRIVER },
        { time: "11:30 AM", label: "Lunch + walk." },
        { time: "1:30 PM", label: "Aptitude: 15 questions + verbal (AMCAT format)", link: "https://www.indiabix.com/" },
        { time: "2:15 PM", label: "Communication: speak for 2 minutes explaining today's problem pattern. Record." },
        { time: "3:00 PM", label: "Second LC problem from today's section", link: w.lc[(lcIdx + 1) % w.lc.length].link },
        { time: "4:30 PM", label: "Active recall: write the pattern template you learned today." },
        { time: "7:00 PM", label: "GitHub + log." },
      ],
      practice: [
        { label: todayLC.name, link: todayLC.link, type: "leetcode" },
        { label: "NeetCode: current section", link: NEETCODE, type: "neetcode" },
        { label: "Striver A2Z: current section", link: STRIVER, type: "sheet" },
      ],
      communication: { label: "Record 2-min pattern explanation. Watch and improve.", link: null },
    }
  }

  // Phase 4: Placement Mode
  if (phase === 4) {
    const p4Topics = [
      { topic: "AWS EC2 + Deployment", lc: [{ name: "JPMC tagged: LeetCode company filter", link: "https://leetcode.com/problemset/?companySlug=jpmorgan" }, { name: "Hard DP: Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/" }], action: "Deploy Spring Boot on EC2. Get it running." },
      { topic: "AWS S3 + MongoDB", lc: [{ name: "PayPal tagged problems", link: "https://leetcode.com/problemset/?companySlug=paypal" }, { name: "#295 Find Median Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" }], action: "Add S3 upload to your app. Add MongoDB endpoint." },
      { topic: "Mock OA + Applications", lc: [{ name: "Amazon tagged: Trees", link: "https://leetcode.com/problemset/?companySlug=amazon" }, { name: "#23 Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/" }], action: "Apply to 5 companies. JPMC, PayPal, Razorpay, Groww, CRED." },
      { topic: "System Design Practice", lc: [{ name: "Microsoft tagged problems", link: "https://leetcode.com/problemset/?companySlug=microsoft" }, { name: "#355 Design Twitter", link: "https://leetcode.com/problems/design-twitter/" }], action: "System design: WhatsApp. Speak for 45 minutes. Record." },
      { topic: "HR Prep + Applications", lc: [{ name: "Google tagged Hard", link: "https://leetcode.com/problemset/?companySlug=google" }, { name: "#146 LRU Cache", link: "https://leetcode.com/problems/lru-cache/" }], action: "Write 6 STAR stories. Practice 'Tell me about yourself' until natural." },
      { topic: "Mock Interview Week", lc: [{ name: "Company OA simulation", link: LC_DAILY }, { name: "#460 LFU Cache", link: "https://leetcode.com/problems/lfu-cache/" }], action: "2 Pramp mock interviews this week. Apply 5 more companies." },
      { topic: "Docker + Microservices Intro", lc: [{ name: "JPMC Hard: Advanced problems", link: "https://leetcode.com/problemset/?companySlug=jpmorgan" }, { name: "#212 Word Search II", link: "https://leetcode.com/problems/word-search-ii/" }], action: "Dockerise your Spring Boot app. Push image to Docker Hub." },
      { topic: "Final Project Polish", lc: [{ name: "Hard review: your 3 weakest problems", link: LC }, { name: "Mock full OA: 90-min simulation", link: "https://www.myamcat.com/" }], action: "All 3 projects: live URL, clean README, screenshots." },
    ]
    const wk = Math.max(0, Math.min(weekNum, p4Topics.length - 1))
    const w = p4Topics[wk]
    const lcIdx = dayOfPhase % w.lc.length
    const todayLC = w.lc[Math.min(lcIdx, w.lc.length - 1)]

    if (isSun) {
      return {
        day: dayNum, phase, isBreak: false, isSunday: true,
        title: `Day ${dayNum} — SUNDAY: Apply + Drill`,
        tip,
        timeBlocks: [
          { time: "7:00 AM", label: "Recall: re-solve hardest problem this week. No notes." },
          { time: "8:00 AM", label: `LeetCode: ${w.lc[0].name}`, link: w.lc[0].link },
          { time: "9:00 AM", label: "LeetCode Weekly Contest", link: "https://leetcode.com/contest/" },
          { time: "11:30 AM", label: "Lunch + walk." },
          { time: "1:00 PM", label: "Apply to 5 companies today. Track in spreadsheet." },
          { time: "2:30 PM", label: "Pramp mock interview session", link: "https://www.pramp.com/" },
          { time: "4:00 PM", label: "Communication: full mock interview — technical + HR back to back. Record both." },
          { time: "6:00 PM", label: `Action: ${w.action}` },
          { time: "7:00 PM", label: "GitHub + log." },
        ],
        practice: w.lc.map(l => ({ label: l.name, link: l.link, type: "leetcode" })),
        communication: { label: "Full mock interview: technical + HR. Record both.", link: "https://www.pramp.com/" },
      }
    }

    return {
      day: dayNum, phase, isBreak: false,
      title: `Day ${dayNum} — ${w.topic}`,
      tip,
      timeBlocks: [
        { time: "6:30 AM", label: "Recall: yesterday's problem from memory." },
        { time: "7:00 AM", label: `LeetCode: ${todayLC.name} — 30-min timer`, link: todayLC.link },
        { time: "7:35 AM", label: "NeetCode: company-tagged section", link: NEETCODE },
        { time: "8:30 AM", label: `Action: ${w.action}` },
        { time: "11:30 AM", label: "Lunch + walk." },
        { time: "1:30 PM", label: "Aptitude: AMCAT mock format — 20 questions timed", link: "https://www.myamcat.com/" },
        { time: "2:15 PM", label: "Communication: InterviewBit HR question — write STAR answer", link: "https://www.interviewbit.com/hr-interview-questions/" },
        { time: "3:00 PM", label: "Apply to 1-2 companies. Personalise each application." },
        { time: "4:30 PM", label: "Active recall: what's the time complexity of today's LC solution? Explain why." },
        { time: "7:00 PM", label: "GitHub + log." },
      ],
      practice: [
        { label: todayLC.name, link: todayLC.link, type: "leetcode" },
        { label: "NeetCode: company-tagged section", link: NEETCODE, type: "neetcode" },
      ],
      communication: { label: "Write one STAR answer for InterviewBit HR question", link: "https://www.interviewbit.com/hr-interview-questions/" },
    }
  }

  // Phase 5: Final Push
  return {
    day: dayNum, phase: 5, isBreak: false,
    title: `Day ${dayNum} — Final Push`,
    tip,
    timeBlocks: [
      { time: "7:00 AM", label: "LeetCode: 1 company-tagged Hard problem — JPMC or PayPal", link: "https://leetcode.com/problemset/?companySlug=jpmorgan" },
      { time: "8:00 AM", label: "System Design: practice 45-min answer for a different system each day" },
      { time: "10:00 AM", label: "Portfolio: check all 3 projects. All live? All READMEs complete?" },
      { time: "11:30 AM", label: "Lunch + walk." },
      { time: "1:30 PM", label: "Apply: 3 companies today." },
      { time: "3:00 PM", label: "Communication: record 'Tell me about yourself' + 'Why JPMC' back to back. 3 minutes total." },
      { time: "5:00 PM", label: "Pramp mock interview", link: "https://www.pramp.com/" },
      { time: "7:00 PM", label: "GitHub + log." },
    ],
    practice: [
      { label: "JPMC-tagged Hard problem", link: "https://leetcode.com/problemset/?companySlug=jpmorgan", type: "leetcode" },
    ],
    communication: { label: "Record 'Tell me about yourself' + 'Why JPMC'. 3 minutes total.", link: null },
  }
}

// ── MAIN EXPORT FUNCTION ─────────────────────────────────────
export function getFullSchedule(dateStr) {
  // Return explicitly defined days first
  if (DAILY_SCHEDULES[dateStr]) return DAILY_SCHEDULES[dateStr]

  // Check if in program range
  if (dateStr < '2026-04-14' || dateStr > '2026-12-31') {
    return {
      day: 0, phase: 0, isBreak: true,
      title: "Outside Program Range",
      tip: "Program runs April 14 – December 31, 2026.",
      timeBlocks: [], practice: [], communication: null,
    }
  }

  // Generate unique schedule for this day
  const start = new Date('2026-04-14T00:00:00')
  const d = new Date(dateStr + 'T00:00:00')
  const dayNum = Math.floor((d - start) / (24 * 60 * 60 * 1000)) + 1
  return generateDaySchedule(dateStr, dayNum)
}