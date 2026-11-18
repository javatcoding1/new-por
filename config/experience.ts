import type { ExperienceItem } from "@/config/types";

export const experienceSectionConfig = {
  title: "Experience",
};

export const experienceConfig: ExperienceItem[] = [
  {
    id: "cubic",
    role: "Associate Software Engineer",
    company: "Cubic",
    period: "May 2024 — Present",
    summary:
      "Building full-stack release platforms, high-performance LLM infrastructure, and autonomous AI agents.",
    highlights: [
      "Engineered an enterprise LLM Gateway providing unified, high-throughput, and secure authenticated access to internal Qwen foundation models.",
      "Developed an autonomous AI PR Review Agent for the AI team, deployed on NVIDIA H200 GPUs (140GB VRAM) using Qwen 40B+ LLM to automate code review, security analysis, and PR summaries.",
      "Built a full-stack Release Management Automation Platform with Next.js and Node.js, consolidating multi-program release tracking from scattered Excel sheets into a centralized, real-time dashboard.",
      "Implemented comprehensive end-to-end automation test suites using Playwright, significantly improving regression velocity and CI/CD reliability.",
    ],
    order: 1,
    enabled: true,
  },
  {
    id: "helixque",
    role: "Maintainer & Core Developer",
    company: "Helixque (HXQLabs)",
    period: "Apr 2024 — Aug 2024",
    summary:
      "Architected a scalable 1:1 video networking and mentorship platform supporting active developers.",
    highlights: [
      "Architected scalable 1:1 video networking platform supporting 100+ active users with Node.js and TypeScript.",
      "Optimized WebRTC connections via custom TURN/STUN configurations and real-time signaling with Socket.io.",
      "Led project to 140+ GitHub stars and implemented CI/CD via GitHub Actions for automated Vercel deployments.",
    ],
    order: 2,
    enabled: true,
  },
  {
    id: "coursevita",
    role: "Full Stack Developer Intern",
    company: "CourseVita",
    period: "Apr 2024 — Jul 2024",
    summary:
      "Frontend performance optimization and modular backend API engineering.",
    highlights: [
      "Migrated legacy React frontend to Next.js, optimizing Server-Side Rendering (SSR) and reducing load times by 25%.",
      "Developed modular REST API endpoints in Node.js, improving content delivery availability for global users.",
    ],
    order: 3,
    enabled: true,
  },
  {
    id: "edspread",
    role: "Web Developer Intern",
    company: "Ed Spread",
    period: "Nov 2022 — Jan 2023",
    summary:
      "Full-stack web application development for library and content management.",
    highlights: [
      "Built a full-stack Library Management System using React, Node.js, Express, and MongoDB.",
      "Implemented REST APIs and JWT authentication for secure access control and catalog management.",
    ],
    order: 4,
    enabled: true,
  },
];

