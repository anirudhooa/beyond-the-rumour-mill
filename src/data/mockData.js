export const INITIAL_COMPANIES = [
  {
    id: "comp-1",
    name: "Microsoft",
    logo: "🪟",
    role: "Software Development Engineer (SDE-1)",
    category: "SDE",
    batch: "2026 Batch",
    driveDate: "12 Nov 2025",
    verifiedDate: "14 Nov 2025 by Placement Cell & 8 Placed Seniors",
    verificationStatus: "Verified Current",
    isFresh: true,
    ctc: "43.5 LPA (Full Time)",
    cgpaCutoff: 7.5,
    eligibleBranches: ["CSE", "IT", "ECE"],
    overview: "Canonical drive breakdown for LPU on-campus drive. Evaluated via online assessment followed by 3 rounds of technical and system design interviews.",
    rounds: [
      {
        roundNumber: 1,
        title: "Online Assessment (OA)",
        platform: "Mettle / Codility",
        duration: "90 Mins",
        eliminationRate: "72% Eliminated",
        description: "2 algorithmic coding questions (Graph traversal, DP on Arrays) + 15 MCQs on OS Concurrency & DBMS Indexing."
      },
      {
        roundNumber: 2,
        title: "Technical Round 1 (Data Structures)",
        platform: "Microsoft Teams (1:1 with Senior Engineer)",
        duration: "45-60 Mins",
        eliminationRate: "45% Eliminated",
        description: "In-depth problem solving: Binary Tree boundary traversal & LRU Cache implementation with dry run on edge cases."
      },
      {
        roundNumber: 3,
        title: "Technical Round 2 (System Design & Core CS)",
        platform: "Microsoft Teams (1:1 with Principal Lead)",
        duration: "45 Mins",
        eliminationRate: "35% Eliminated",
        description: "Design a scalable URL Shortener (TinyURL) or Rate Limiter. In-depth OS questions on process vs thread and paging."
      },
      {
        roundNumber: 4,
        title: "Tech-HR & Culture Fit (AA Round)",
        platform: "Microsoft Teams (Director / Partner)",
        duration: "30 Mins",
        eliminationRate: "15% Eliminated",
        description: "Discussion on past projects, conflict resolution, growth mindset, and why Microsoft Azure / Cloud."
      }
    ],
    topicWeightage: [
      { topic: "Data Structures & Algorithms", percentage: 45, color: "bg-emerald-500" },
      { topic: "System Design & Scalability", percentage: 25, color: "bg-blue-500" },
      { topic: "OS & DBMS Concurrency", percentage: 20, color: "bg-purple-500" },
      { topic: "Behavioral & Culture Fit", percentage: 10, color: "bg-amber-500" }
    ],
    seniorDebriefCount: 6,
    rumourAlert: null
  },
  {
    id: "comp-2",
    name: "Amazon",
    logo: "📦",
    role: "SDE Intern + FTE",
    category: "SDE",
    batch: "2026 Batch",
    driveDate: "28 Oct 2025",
    verifiedDate: "30 Oct 2025 by Placed 2025 Seniors",
    verificationStatus: "Verified Current",
    isFresh: true,
    ctc: "32 LPA + 80k/mo stipend",
    cgpaCutoff: 7.0,
    eligibleBranches: ["CSE", "IT", "ECE", "EE"],
    overview: "Drive focused rigorously on Amazon 16 Leadership Principles combined with LeetCode Medium/Hard algorithmic agility.",
    rounds: [
      {
        roundNumber: 1,
        title: "OA 1: Code & Workstyles Assessment",
        platform: "HackerRank",
        duration: "105 Mins",
        eliminationRate: "80% Eliminated",
        description: "2 coding questions (Sliding Window, Priority Queues) + 20-min workstyle scenario simulation (LP questions)."
      },
      {
        roundNumber: 2,
        title: "Technical Interview 1",
        platform: "Amazon Chime",
        duration: "60 Mins",
        eliminationRate: "50% Eliminated",
        description: "1 Graph/Tree question + 2 Amazon Leadership Principles (Customer Obsession, Bias for Action)."
      },
      {
        roundNumber: 3,
        title: "Technical Interview 2 & Bar Raiser",
        platform: "Amazon Chime",
        duration: "60 Mins",
        eliminationRate: "40% Eliminated",
        description: "Low-level object-oriented design (Design Parking Lot or Chess) + LP deep dive on 'Have Backbone; Disagree & Commit'."
      }
    ],
    topicWeightage: [
      { topic: "DSA (Trees, Graphs, Heaps)", percentage: 40, color: "bg-emerald-500" },
      { topic: "Leadership Principles (STAR)", percentage: 35, color: "bg-amber-500" },
      { topic: "Low-Level Object Oriented Design", percentage: 25, color: "bg-blue-500" }
    ],
    seniorDebriefCount: 5,
    rumourAlert: null
  },
  {
    id: "comp-3",
    name: "Optum (UnitedHealth Group)",
    logo: "🏥",
    role: "Associate Software Engineer",
    category: "SDE",
    batch: "2025 Batch (Outdated Record)",
    driveDate: "15 Sep 2024",
    verifiedDate: "16 Sep 2024 (14 Months Ago)",
    verificationStatus: "Previous Batch — Needs Fresh Re-Verification",
    isFresh: false,
    ctc: "14.5 LPA",
    cgpaCutoff: 6.5,
    eligibleBranches: ["CSE", "IT", "ECE"],
    overview: "WARNING: This dossier reflects the 2025 batch drive. Placement cell has not verified 2026 drive changes yet. Watch out for changed test vendors.",
    rounds: [
      {
        roundNumber: 1,
        title: "Online Assessment",
        platform: "AMCAT / CoCubes (2025 Format)",
        duration: "75 Mins",
        eliminationRate: "65% Eliminated",
        description: "Aptitude + CS Fundamentals (OOPs, SQL) + 2 Basic DSA Questions."
      },
      {
        roundNumber: 2,
        title: "Technical & Behavioral Discussion",
        platform: "Cisco Webex",
        duration: "45 Mins",
        eliminationRate: "40% Eliminated",
        description: "Project discussion, Java/C++ fundamentals, basic database normalization questions."
      }
    ],
    topicWeightage: [
      { topic: "Core CS (OOPs, DBMS, OS)", percentage: 40, color: "bg-purple-500" },
      { topic: "Aptitude & Verbal", percentage: 30, color: "bg-amber-500" },
      { topic: "Basic Coding & Projects", percentage: 30, color: "bg-emerald-500" }
    ],
    seniorDebriefCount: 2,
    rumourAlert: "WhatsApp forward claiming Optum added a 3-hour Hackathon round for 2026 batch is UNCONFIRMED by Placement Cell."
  },
  {
    id: "comp-4",
    name: "Deloitte USI",
    logo: "🟢",
    role: "Analyst — Technology & Advisory",
    category: "Analyst",
    batch: "2026 Batch",
    driveDate: "18 Nov 2025",
    verifiedDate: "20 Nov 2025 by Placement Cell",
    verificationStatus: "Verified Current",
    isFresh: true,
    ctc: "8.5 LPA",
    cgpaCutoff: 6.5,
    eligibleBranches: ["All Engineering Branches", "MCA"],
    overview: "Rigorous focus on logical problem solving, business case guesstimates, SQL data extraction, and client-facing communication.",
    rounds: [
      {
        roundNumber: 1,
        title: "Cognitive & Technical Assessment",
        platform: "Firstnaukri / TestGorilla",
        duration: "80 Mins",
        eliminationRate: "65% Eliminated",
        description: "Quantitative Aptitude, Logical Reasoning, Verbal, and Cloud/IT fundamentals."
      },
      {
        roundNumber: 2,
        title: "Case Study & Group Discussion",
        platform: "Campus On-Site / Zoom",
        duration: "35 Mins",
        eliminationRate: "50% Eliminated",
        description: "Case analysis: How a retail client can adopt predictive AI without breaking legacy infrastructure."
      },
      {
        roundNumber: 3,
        title: "Partner Technical & Behavioral Interview",
        platform: "Zoom",
        duration: "30 Mins",
        eliminationRate: "25% Eliminated",
        description: "Resume verification, situational questions, SQL Joins vs Subqueries, and willingness to relocate."
      }
    ],
    topicWeightage: [
      { topic: "Aptitude & Logical Reasoning", percentage: 35, color: "bg-amber-500" },
      { topic: "Business Case & Guesstimates", percentage: 35, color: "bg-blue-500" },
      { topic: "SQL & Technical Literacy", percentage: 30, color: "bg-emerald-500" }
    ],
    seniorDebriefCount: 4,
    rumourAlert: null
  },
  {
    id: "comp-5",
    name: "Bosch Global Software",
    logo: "⚙️",
    role: "Embedded Systems & Automotive Software Engineer",
    category: "Core",
    batch: "2026 Batch",
    driveDate: "05 Nov 2025",
    verifiedDate: "07 Nov 2025 by ECE/CSE Coordinators",
    verificationStatus: "Verified Current",
    isFresh: true,
    ctc: "9.2 LPA",
    cgpaCutoff: 7.0,
    eligibleBranches: ["ECE", "EE", "CSE", "Robotics"],
    overview: "Canonical drive for core hardware/software hybrid roles. Emphasizes C/C++ memory management, RTOS, microcontroller protocols (CAN/SPI/I2C).",
    rounds: [
      {
        roundNumber: 1,
        title: "Technical MCQ & C Coding Test",
        platform: "Wheebox",
        duration: "75 Mins",
        eliminationRate: "60% Eliminated",
        description: "Pointers in C, Bitwise manipulation, Embedded C questions, and Basic Electronics."
      },
      {
        roundNumber: 2,
        title: "Technical Round (Microcontrollers & RTOS)",
        platform: "MS Teams",
        duration: "45 Mins",
        eliminationRate: "45% Eliminated",
        description: "Interfacing sensors, Interrupt Service Routines, Semaphore vs Mutex in RTOS."
      },
      {
        roundNumber: 3,
        title: "Managerial & HR Interview",
        platform: "MS Teams",
        duration: "30 Mins",
        eliminationRate: "20% Eliminated",
        description: "Project walkthrough, career commitment to automotive software, relocation readiness."
      }
    ],
    topicWeightage: [
      { topic: "Embedded C & Bit Manipulation", percentage: 40, color: "bg-emerald-500" },
      { topic: "Microcontrollers & Protocols", percentage: 35, color: "bg-blue-500" },
      { topic: "OS & RTOS Concepts", percentage: 25, color: "bg-purple-500" }
    ],
    seniorDebriefCount: 3,
    rumourAlert: null
  },
  {
    id: "comp-6",
    name: "Cognizant (GenC Elevate)",
    logo: "💼",
    role: "Programmer Analyst Trainee",
    category: "SDE",
    batch: "2025 Batch (Outdated Record)",
    driveDate: "20 Aug 2024",
    verifiedDate: "22 Aug 2024",
    verificationStatus: "Previous Batch — Needs Fresh Re-Verification",
    isFresh: false,
    ctc: "4.5 - 6.5 LPA",
    cgpaCutoff: 6.0,
    eligibleBranches: ["All Engineering Branches"],
    overview: "Archive data from 2025 mass hiring. Note that 2026 drive uses an updated skill-based assessment platform.",
    rounds: [
      {
        roundNumber: 1,
        title: "Communication & Aptitude Test",
        platform: "Superset / AMCAT",
        duration: "60 Mins",
        eliminationRate: "40% Eliminated",
        description: "Automated spoken English evaluation + Quantitative Aptitude."
      },
      {
        roundNumber: 2,
        title: "GenC Elevate Coding Assessment",
        platform: "HackerEarth",
        duration: "90 Mins",
        eliminationRate: "50% Eliminated",
        description: "2 Coding problems + SQL queries."
      }
    ],
    topicWeightage: [
      { topic: "Aptitude & Spoken English", percentage: 40, color: "bg-amber-500" },
      { topic: "Java/Python & SQL Basics", percentage: 35, color: "bg-emerald-500" },
      { topic: "Basic Data Structures", percentage: 25, color: "bg-blue-500" }
    ],
    seniorDebriefCount: 2,
    rumourAlert: "Do not follow 2024 syllabus forwards: Communication assessment is now audio-AI proctored."
  }
];

export const FOUNDATION_ROADMAP = [
  {
    week: 1,
    title: "Week 1: Aptitude & Elimination Round Mastery",
    objective: "Clear the first 70% elimination hurdle common across all LPU campus drives.",
    focusAreas: ["Quantitative Aptitude (Speed Math, Ratios, Work & Time)", "Logical Reasoning (Seating, Syllogisms)", "Verbal Comprehension"],
    vettedLinks: [
      {
        id: "v-101",
        title: "PrepInsta LPU Placement Aptitude Master Deck",
        type: "Practice Sheet",
        author: "Vetted by 14 Placed Seniors",
        upvotes: 312,
        url: "https://prepinsta.com/lpu-drive-questions",
        tag: "Highest Campus Relevance",
        timeEstimate: "6 Hours",
        whyUseful: "Directly mimics the pattern of AMCAT, Codility, and Wheebox aptitude sections used at LPU."
      },
      {
        id: "v-102",
        title: "IndiaBIX Quantitative Aptitude Speed Hacks",
        type: "Interactive Problem Set",
        author: "Vetted by 9 Placed Seniors",
        upvotes: 245,
        url: "https://indiabix.com/aptitude/questions-and-answers",
        tag: "Speed Formula Drill",
        timeEstimate: "4 Hours",
        whyUseful: "Formula shortcuts for Profit/Loss, Time-Speed-Distance that save 40 seconds per question in Round 1."
      },
      {
        id: "v-103",
        title: "LPU Career Services Logical Syllogism Cheat Sheet",
        type: "PDF Cheat Sheet",
        author: "Curated by CSE Faculty & Placed Leads",
        upvotes: 189,
        url: "https://ums.lpu.in/placements/aptitude-notes",
        tag: "Campus Official Archive",
        timeEstimate: "2 Hours",
        whyUseful: "Venn diagram shortcut rules to eliminate 100% of syllogism errors in timed rounds."
      }
    ]
  },
  {
    week: 2,
    title: "Week 2: Algorithmic Patterns (Data Structures & Coding)",
    objective: "Transition from random LeetCode grinding to pattern recognition that clears Technical Round 1.",
    focusAreas: ["Two Pointers & Sliding Window", "HashMaps & Frequency Arrays", "Binary Trees & BFS/DFS", "Dynamic Programming Basics"],
    vettedLinks: [
      {
        id: "v-201",
        title: "NeetCode 150 Pattern-Based Roadmap (Free Video Solutions)",
        type: "Interactive Roadmap & Video",
        author: "Vetted by 28 Placed Seniors",
        upvotes: 498,
        url: "https://neetcode.io/roadmap",
        tag: "Gold Standard for SDE",
        timeEstimate: "14 Hours",
        whyUseful: "Clusters questions by underlying pattern instead of memorization. 8 out of 10 LPU SDE OA questions map directly to these."
      },
      {
        id: "v-202",
        title: "Striver's A2Z DSA Sheet — Step 3 to Step 7 Core",
        type: "Curated Practice Tracker",
        author: "Vetted by 32 Placed Seniors",
        upvotes: 462,
        url: "https://takeuforward.org/strivers-a2z-dsa-course",
        tag: "Most Used by 2025/2026 Batch",
        timeEstimate: "12 Hours",
        whyUseful: "Covers the exact edge cases that interviewers at Microsoft, Amazon, and Optum probe in live coding."
      },
      {
        id: "v-203",
        title: "Visualgo Interactive Data Structure Visualizer",
        type: "Interactive Tool",
        author: "Vetted by 11 Placed Seniors",
        upvotes: 215,
        url: "https://visualgo.net/en",
        tag: "Visual Memory Anchor",
        timeEstimate: "3 Hours",
        whyUseful: "Helps you instantly visualize recursion stacks and graph cycles so you can explain pointer logic confidently."
      }
    ]
  },
  {
    week: 3,
    title: "Week 3: Core CS Foundations (OS, DBMS, OOPs, CN)",
    objective: "Master the 20-30 minute theoretical drilling in Technical Round 2 where many candidates stumble.",
    focusAreas: ["OS Virtual Memory, Paging & Concurrency/Deadlocks", "DBMS Normalization & Indexing (B+ Trees)", "SQL Complex Joins", "OOPs 4 Pillars & Real-World Implementations"],
    vettedLinks: [
      {
        id: "v-301",
        title: "Gate Smashers Operating Systems Crash Course",
        type: "Curated Video Playlist",
        author: "Vetted by 21 Placed Seniors",
        upvotes: 388,
        url: "https://youtube.com/playlist?list=GateSmashersOS",
        tag: "Highest Conceptual Clarity",
        timeEstimate: "6 Hours",
        whyUseful: "Clear, crisp breakdown of Process Synchronization, Semaphores, and Virtual Memory paging algorithms."
      },
      {
        id: "v-302",
        title: "50 Must-Solve SQL Interview Queries (LeetCode + LPU Archive)",
        type: "Interactive SQL Sandbox",
        author: "Vetted by 17 Placed Seniors",
        upvotes: 341,
        url: "https://leetcode.com/studyplan/top-sql-50/",
        tag: "Direct Interview Overlap",
        timeEstimate: "5 Hours",
        whyUseful: "Self joins, Window functions (DENSE_RANK), and GROUP BY HAVING queries asked verbatim in Analyst/SDE drives."
      },
      {
        id: "v-303",
        title: "Love Babbar OOPs in C++/Java & Top 25 Interview Questions",
        type: "Cheat Sheet + Code",
        author: "Vetted by 15 Placed Seniors",
        upvotes: 279,
        url: "https://lovebabbar.com/oops-guide",
        tag: "Quick Reference",
        timeEstimate: "3 Hours",
        whyUseful: "Diamond problem in inheritance, abstract classes vs interfaces, and runtime polymorphism code snippets."
      }
    ]
  },
  {
    week: 4,
    title: "Week 4: System Design & STAR Resume Defense",
    objective: "Ace the final rounds by speaking like an engineer and defending your GitHub projects with metrics.",
    focusAreas: ["High-Level Design Principles (Load Balancers, Caching, DB Sharding)", "Resume Project Architecture Walkthrough", "STAR Behavioral Framework for HR / AA Rounds"],
    vettedLinks: [
      {
        id: "v-401",
        title: "ByteByteGo System Design Foundations for Juniors",
        type: "Visual Architecture Guide",
        author: "Vetted by 19 Placed Seniors",
        upvotes: 412,
        url: "https://bytebytego.com/system-design-primer",
        tag: "Visual Architecture",
        timeEstimate: "5 Hours",
        whyUseful: "Teaches you how to draw microservice diagrams and explain Redis caching and horizontal scaling in 15 minutes."
      },
      {
        id: "v-402",
        title: "The STAR Method Engineering Storybuilder (With LPU Senior Examples)",
        type: "Framework & Template",
        author: "Curated by Placement Peer Mentors",
        upvotes: 320,
        url: "https://beyond-rumour.lpu/star-framework",
        tag: "Eliminates Rambling in HR",
        timeEstimate: "3 Hours",
        whyUseful: "Step-by-step formula to turn ordinary academic projects into impactful Situation-Task-Action-Result stories."
      },
      {
        id: "v-403",
        title: "Gaurav Sen Distributed Systems & Database Trade-offs Primer",
        type: "Video Series",
        author: "Vetted by 14 Placed Seniors",
        upvotes: 260,
        url: "https://youtube.com/c/GauravSensei",
        tag: "High Impact for Tier-1 Roles",
        timeEstimate: "4 Hours",
        whyUseful: "Explains CAP theorem and SQL vs NoSQL trade-offs simply without getting bogged down in jargon."
      }
    ]
  }
];

export const CURATED_TOPICS = [
  {
    topicId: "topic-dsa",
    name: "Data Structures: Trees, Graphs & Dynamic Programming",
    companyId: "comp-1",
    seniorRationale: "Microsoft and Amazon campus assessments heavily filter candidates at this stage. Focus on state transitions in DP and BFS/DFS on trees.",
    links: [
      {
        id: "l-1",
        title: "NeetCode Binary Tree & Graph Visual Playlist",
        type: "Video & Code",
        upvotes: 142,
        timeEstimate: "4h 30m",
        url: "https://neetcode.io",
        seniorNote: "Must solve: Lowest Common Ancestor & Word Ladder before Microsoft Round 2."
      },
      {
        id: "l-2",
        title: "Striver 2D DP & Subsequence Patterns",
        type: "Article & Video",
        upvotes: 128,
        timeEstimate: "3h 15m",
        url: "https://takeuforward.org",
        seniorNote: "Explains tabulation vs memoization clearly with space optimization tricks."
      },
      {
        id: "l-3",
        title: "LeetCode Top 50 Interview Questions (Company Tagged)",
        type: "Problem Set",
        upvotes: 95,
        timeEstimate: "6h 00m",
        url: "https://leetcode.com",
        seniorNote: "Focus only on Medium level questions. Hard questions are rarely asked in 45-min rounds."
      }
    ]
  },
  {
    topicId: "topic-sysdesign",
    name: "System Design: Microservices, Caching & DB Sharding",
    companyId: "comp-1",
    seniorRationale: "Tested in Microsoft Round 3. They expect freshers to understand latency, Redis caching, and rate limiting fundamentals.",
    links: [
      {
        id: "l-4",
        title: "ByteByteGo URL Shortener (TinyURL) Architecture",
        type: "Visual Breakdown",
        upvotes: 118,
        timeEstimate: "2h 00m",
        url: "https://bytebytego.com",
        seniorNote: "Standard fresher question. Draw client -> load balancer -> web servers -> Redis -> DB."
      },
      {
        id: "l-5",
        title: "Donne Martin System Design Primer (GitHub)",
        type: "GitHub Repo",
        upvotes: 104,
        timeEstimate: "3h 30m",
        url: "https://github.com/donnemartin/system-design-primer",
        seniorNote: "Use only Chapters 1-4 for fresher interviews. Don't waste time on complex consensus protocols."
      },
      {
        id: "l-6",
        title: "Redis Caching Strategies & Eviction Policies",
        type: "Cheat Sheet",
        upvotes: 82,
        timeEstimate: "1h 30m",
        url: "https://redis.io/docs",
        seniorNote: "Know the difference between Cache-Aside and Write-Through, plus LRU eviction."
      }
    ]
  },
  {
    topicId: "topic-os-dbms",
    name: "Core CS: OS Synchronization & DBMS Normalization",
    companyId: "comp-1",
    seniorRationale: "Asked in both OA MCQs and 1:1 rounds. Interviewers check whether you actually understand concurrency vs buzzwords.",
    links: [
      {
        id: "l-7",
        title: "Gate Smashers Process Synchronization & Semaphores",
        type: "Video Series",
        upvotes: 135,
        timeEstimate: "2h 45m",
        url: "https://youtube.com/gatesmashers",
        seniorNote: "Crucial for Producer-Consumer problem and Dining Philosophers deadlock conditions."
      },
      {
        id: "l-8",
        title: "DBMS Indexing: How B+ Trees Work Behind the Scenes",
        type: "Article with Visuals",
        upvotes: 98,
        timeEstimate: "1h 45m",
        url: "https://use-the-index-luke.com",
        seniorNote: "Explains why clustered indexes speed up range queries and when indexes hurt write performance."
      },
      {
        id: "l-9",
        title: "LPU Placements Operating System Viva 50 Questions",
        type: "PDF Document",
        upvotes: 91,
        timeEstimate: "2h 00m",
        url: "https://ums.lpu.in",
        seniorNote: "Repeated questions on paging vs segmentation, thrashing, and context switching overhead."
      }
    ]
  }
];

export const SENIOR_DEBRIEFS = [
  {
    id: "deb-1",
    companyId: "comp-1",
    companyName: "Microsoft",
    seniorName: "Rohan Sharma",
    avatar: "👨‍💻",
    role: "Placed as SDE-1 (Azure Core)",
    batch: "2025 Placed (4th Year CSE)",
    ctcOffered: "43.5 LPA",
    driveDateFaced: "12 Nov 2025",
    submissionDate: "15 Nov 2025",
    timeSpentInMinutes: 4,
    roundsFaced: "OA + 2 Tech + 1 AA Director Round",
    keyAdvice: "Do NOT write code immediately! The interviewer intentionally left out edge cases (e.g., negative nodes, null inputs) in the Binary Tree question to see if I asked clarifying questions.",
    actualQuestionsAsked: [
      "Find the maximum path sum between two leaves of a binary tree.",
      "Implement a thread-safe LRU cache using doubly linked list and mutex locks.",
      "Tell me about a time your project crashed in production or during submission and how you debugged it."
    ],
    commonTrapsToAvoid: "Rushing into O(N) auxiliary space without being asked to optimize for space complexity.",
    helpfulCount: 42,
    markedHelpful: false,
    topLinksContributed: [
      "NeetCode 150 - Trees Section",
      "ByteByteGo TinyURL Architecture",
      "Striver 2D DP Sheet"
    ]
  },
  {
    id: "deb-2",
    companyId: "comp-2",
    companyName: "Amazon",
    seniorName: "Simran Kaur",
    avatar: "👩‍💻",
    role: "Placed as SDE Intern + PPO",
    batch: "2025 Placed (IT Branch)",
    ctcOffered: "32 LPA + PPO",
    driveDateFaced: "28 Oct 2025",
    submissionDate: "02 Nov 2025",
    timeSpentInMinutes: 5,
    roundsFaced: "HackerRank OA + 2 Chime Interviews",
    keyAdvice: "Amazon evaluates Leadership Principles (LPs) in EVERY round, including coding! Prepare 2 distinct STAR stories for 'Customer Obsession' and 'Bias for Action'.",
    actualQuestionsAsked: [
      "Find median in a stream of running integers using Min-Heap and Max-Heap.",
      "Design an Amazon Locker low-level system using Object Oriented principles.",
      "Tell me about a time you had a disagreement with your project teammate or team lead."
    ],
    commonTrapsToAvoid: "Using 'We did this' instead of 'I analyzed X, decided on Y, and achieved Z metric' during behavioral questions.",
    helpfulCount: 37,
    markedHelpful: false,
    topLinksContributed: [
      "Amazon 16 LP STAR Template Guide",
      "NeetCode Heap & Two Pointers",
      "Gaurav Sen Low Level System Design"
    ]
  },
  {
    id: "deb-3",
    companyId: "comp-4",
    companyName: "Deloitte USI",
    seniorName: "Aman Verma",
    avatar: "👔",
    role: "Placed as Technology Analyst",
    batch: "2025 Placed (ECE Branch)",
    ctcOffered: "8.5 LPA",
    driveDateFaced: "18 Nov 2025",
    submissionDate: "20 Nov 2025",
    timeSpentInMinutes: 3,
    roundsFaced: "Cognitive Test + Group Case + Partner Interview",
    keyAdvice: "Aptitude eliminated 65% of candidates. Practice speed math shortcuts. In the case study, speak up early with structured points rather than talking the most.",
    actualQuestionsAsked: [
      "Estimate the number of electric vehicle charging stations needed in Punjab by 2028.",
      "Write a SQL query to find the second highest salary department-wise using DENSE_RANK().",
      "How would you explain cloud computing and SaaS to a 60-year-old traditional manufacturing owner?"
    ],
    commonTrapsToAvoid: "Getting bogged down in exact numbers in guesstimates; interviewers care about your logical equation structure.",
    helpfulCount: 29,
    markedHelpful: false,
    topLinksContributed: [
      "PrepInsta LPU Aptitude Deck",
      "50 Must-Solve SQL Queries LeetCode",
      "Case Interview Secrets - Victor Cheng"
    ]
  },
  {
    id: "deb-4",
    companyId: "comp-3",
    companyName: "Optum",
    seniorName: "Priya Patel",
    avatar: "👩‍🔬",
    role: "Associate Software Engineer",
    batch: "2024 Placed (CSE 2025 Batch)",
    ctcOffered: "14.5 LPA",
    driveDateFaced: "15 Sep 2024",
    submissionDate: "18 Sep 2024",
    timeSpentInMinutes: 4,
    roundsFaced: "AMCAT Test + Technical Discussion",
    keyAdvice: "NOTE: This feedback is from the 2025 batch drive. Be careful with WhatsApp rumours claiming testing format changed.",
    actualQuestionsAsked: [
      "Explain ACID properties with an example of bank transfer.",
      "Find cycle in a linked list and return the starting node.",
      "Differences between Java Abstract class and Interface with Java 8 default methods."
    ],
    commonTrapsToAvoid: "Assuming Optum only asks Java; they accept C++ and Python as well.",
    helpfulCount: 14,
    markedHelpful: false,
    topLinksContributed: [
      "Love Babbar OOPs Crash Course",
      "Gate Smashers DBMS Normalization",
      "IndiaBIX Technical MCQs"
    ]
  }
];
