// Centralized Profile & Portfolio Data
// Extracted accurately from Dipanshu's Resume & LaTeX details!

export const profile = {
  name: "Dipanshu Sahoo",
  handle: "Ashtaroth91",
  roleTitle: "Software Engineer",
  institution: "National Institute of Technology Delhi",
  degree: "B.Tech in Electronics and Communication Engineering",
  gradYear: "2027",
  cgpa: "7.93",
  location: "New Delhi, India",
  tagline: "Turning logic into scalable, real-world systems.",
  bioShort: "B.Tech at NIT Delhi building high-throughput backend architectures, developer tooling, and distributed systems with Next.js, Node.js, PostgreSQL, and Redis.",
  status: "Available for SWE Roles & Internships",
  email: "dipanshu.sahoo.18@gmail.com",
  github: "https://github.com/Ashtaroth91",
  linkedin: "https://www.linkedin.com/in/dipanshu-sahoo-7a10a5292/",
  linkedinDisplay: "linkedin.com/in/Dipanshu",
  leetcode: "https://leetcode.com",
  resumeUrl: "https://drive.google.com/file/d/1bC0yFafDjTS8Xu7g5MOJ1LGf9yy1KZBR/view?usp=drivesdk",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Terminal", href: "#terminal-section" },
    { label: "Contact", href: "#contact" }
  ],

  stats: [
    { value: "700+", label: "DSA Problems Solved", sub: "LeetCode, Codeforces, GFG, CodeChef" },
    { value: "Round 2", label: "Amazon HackOn S5", sub: "Top national coding hackathon" },
    { value: "99%ile", label: "JEE Maths Percentile", sub: "Strong analytical foundations" },
    { value: "NIT Delhi", label: "B.Tech '27", sub: "Electronics & Communication" }
  ],

  achievements: [
    {
      title: "Amazon HackOn - Season 5",
      detail: "Qualified into Round 2 of Amazon's flagship national engineering hackathon.",
      tag: "Competition"
    },
    {
      title: "700+ Competitive Programming Problems",
      detail: "Consistent problem solver across LeetCode, Codeforces, GeeksforGeeks, and CodeChef.",
      tag: "DSA"
    },
    {
      title: "Pre-Regional Mathematics Olympiad (PRMO / IOQM)",
      detail: "Qualified the prestigious national mathematics Olympiad (now IOQM), demonstrating advanced mathematical problem-solving aptitude.",
      tag: "Olympiad"
    },
    {
      title: "Inter-NIT Football & Sports Leadership",
      detail: "Represented NIT Delhi in All India Inter-NIT Football Competition; Executive in Sports Club leading national tournaments.",
      tag: "Leadership"
    }
  ],

  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
        { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
      ]
    },
    {
      category: "Frameworks & Backend Technologies",
      skills: [
        { name: "Next.js 14", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Prisma ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" }
      ]
    },
    {
      category: "Databases, Cloud & Developer Tools",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
      ]
    }
  ],

  projects: [
    {
      id: "code-recall",
      title: "CodeRecall",
      category: "fullstack",
      categoryLabel: "Full-Stack",
      tagline: "Spaced-Repetition Platform for DSA & LeetCode Retention",
      description: "Architected a full-stack platform implementing the SuperMemo SM-2 algorithm to boost long-term DSA retention by ~40%. Integrated Monaco Editor with multi-language execution, instant question extraction, and Recharts dashboards tracking decay curves and practice streaks.",
      highlight: "Enforced sliding-window limits (10 req/s) with <50ms API responses via Upstash Redis.",
      technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Upstash Redis", "Monaco Editor", "Tailwind CSS"],
      githubUrl: "https://github.com/skksrijan/CodeRecall",
      liveUrl: "https://code-recall-nu.vercel.app"
    },
    {
      id: "task-flow",
      title: "TaskFlow",
      category: "backend",
      categoryLabel: "Backend & APIs",
      tagline: "Enterprise Project Management Backend with RBAC & CI/CD",
      description: "Designed and implemented a secure collaboration backend supporting Projects, Tasks, and Subtasks with hierarchical Role-Based Access Control (Admin, Project Admin, Member). Engineered aggregation pipelines, JWT refresh tokens, cookie-based sessions, and Swagger docs.",
      highlight: "Production-ready Dockerized deployment with GitHub Actions CI pipeline and automated testing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Docker", "GitHub Actions", "Swagger"],
      githubUrl: "https://github.com/Ashtaroth91/Taskflow",
      liveUrl: "#"
    },
    {
      id: "pulse-api",
      title: "PulseAPI",
      category: "fullstack",
      categoryLabel: "Developer Tools",
      tagline: "Developer-Focused API Client & Automated Test Assertion Engine",
      description: "Built a Postman-grade API client supporting request collections, workspaces, environment variables, Bearer/API Key auth, and multi-language code generators. Implemented test assertions validating status codes, response times, headers, and JSON responses.",
      highlight: "Scalable persistent storage and authentication built with Next.js, PostgreSQL, Prisma, and Better Auth.",
      technologies: ["Next.js", "JavaScript", "PostgreSQL", "Prisma", "Better Auth", "Tailwind CSS"],
      githubUrl: "https://github.com/Ashtaroth91",
      liveUrl: "#"
    }
  ]
};
