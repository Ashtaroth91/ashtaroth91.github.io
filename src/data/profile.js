// Centralized Profile & Portfolio Data
// All content can easily be edited or updated based on your resume!

export const profile = {
  name: "Dipanshu Sahoo",
  handle: "dipanshu",
  roleTitle: "Software Engineer",
  tagline: "Turning logic into scalable, real-world systems.",
  bioShort: "I build high-throughput backend services, distributed architectures, and AI pipelines with an obsession for performance, simplicity, and purpose.",
  status: "Available for SWE Roles · 2026",
  email: "dipanshu.sahoo.18@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "#", // Can be linked to /resume.pdf or Google Drive

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Terminal", href: "#terminal-section" },
    { label: "Contact", href: "#contact" }
  ],

  stats: [
    { value: "9.0+", label: "Academic CGPA", sub: "Computer Science" },
    { value: "20+", label: "Projects & Repos", sub: "Production & Open Source" },
    { value: "99.9%", label: "Target Reliability", sub: "Resilient Systems" },
    { value: "100%", label: "Purpose-Driven", sub: "Clean & Tested Code" }
  ],

  skillCategories: [
    {
      category: "Languages",
      skills: [
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" }
      ]
    },
    {
      category: "Backend & Distributed Systems",
      skills: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
      ]
    },
    {
      category: "Databases & Cloud Infrastructure",
      skills: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ]
    }
  ],

  projects: [
    {
      id: "pulse-api",
      title: "PulseAPI",
      category: "backend",
      categoryLabel: "Backend & Systems",
      tagline: "High-Throughput API Telemetry & Rate-Limiting Engine",
      description: "A distributed telemetry and traffic-control proxy designed for low-latency microservices. Implements sliding-window counter algorithms backed by Redis clusters to mitigate cascading server failures.",
      highlight: "Handled 45,000+ RPS with <0.8ms P99 latency overhead.",
      technologies: ["Go", "Redis Cluster", "Docker", "Prometheus", "gRPC"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    {
      id: "code-recall",
      title: "CodeRecall",
      category: "ai",
      categoryLabel: "AI & Developer Tooling",
      tagline: "Semantic Code Search & AST Vector Retrieval Engine",
      description: "An intelligent codebase search engine using AST (Abstract Syntax Tree) chunking and vector embeddings to enable natural-language semantic discovery across large multi-language code repositories.",
      highlight: "92% Top-3 semantic retrieval precision across 100k+ LoC.",
      technologies: ["Python", "FastAPI", "Tree-sitter", "Qdrant", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    },
    {
      id: "nexus-core",
      title: "NexusCore",
      category: "backend",
      categoryLabel: "Distributed Systems",
      tagline: "Distributed Pub/Sub Broker with Persistent Write-Ahead Logs",
      description: "A fault-tolerant message streaming engine built with segmented append-only logs, consumer group offset commits, and quorum replication for resilient asynchronous event distribution.",
      highlight: "Sustained 120MB/s disk throughput with zero message corruption.",
      technologies: ["C++", "POSIX", "ZeroMQ", "Protobuf", "Linux"],
      githubUrl: "https://github.com",
      liveUrl: "#"
    }
  ]
};
