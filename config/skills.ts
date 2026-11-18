import type { SkillCategoryConfig, SkillItem } from "@/config/types";

export const skillsSectionConfig = {
  title: "Tech Stack",
  categories: [
    { id: "ai-systems", label: "AI & LLMs" },
    { id: "frontend", label: "Frontend & Web" },
    { id: "backend", label: "Backend & Testing" },
    { id: "cloud-infra", label: "Cloud & DevOps" },
  ] as SkillCategoryConfig[],
};

export const skillsConfig: SkillItem[] = [
  // AI & LLMs
  {
    id: "qwen-llm",
    name: "Qwen 40B+ LLM",
    icon: "llm",
    category: "ai-systems",
    order: 1,
    enabled: true,
  },
  {
    id: "llm-gateway",
    name: "LLM Gateway",
    icon: "llm",
    category: "ai-systems",
    order: 2,
    enabled: true,
  },
  {
    id: "ai-agents",
    name: "AI PR Review Agents",
    icon: "llm",
    category: "ai-systems",
    order: 3,
    enabled: true,
  },
  {
    id: "nvidia-h200",
    name: "NVIDIA H200 (140GB VRAM)",
    icon: "nvidia",
    category: "ai-systems",
    order: 4,
    enabled: true,
  },
  {
    id: "python",
    name: "Python",
    icon: "python",
    category: "ai-systems",
    order: 5,
    enabled: true,
  },

  // Frontend
  {
    id: "nextjs",
    name: "Next.js",
    icon: "nextjs",
    category: "frontend",
    order: 6,
    enabled: true,
  },
  {
    id: "react",
    name: "React",
    icon: "react",
    category: "frontend",
    order: 7,
    enabled: true,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "typescript",
    category: "frontend",
    order: 8,
    enabled: true,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "javascript",
    category: "frontend",
    order: 9,
    enabled: true,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "tailwind",
    category: "frontend",
    order: 10,
    enabled: true,
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    icon: "shadcn",
    category: "frontend",
    order: 11,
    enabled: true,
  },

  // Backend & Testing
  {
    id: "nodejs",
    name: "Node.js",
    icon: "nodejs",
    category: "backend",
    order: 12,
    enabled: true,
  },
  {
    id: "playwright",
    name: "Playwright",
    icon: "playwright",
    category: "backend",
    order: 13,
    enabled: true,
  },
  {
    id: "java",
    name: "Java",
    icon: "java",
    category: "backend",
    order: 14,
    enabled: true,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: "postgresql",
    category: "backend",
    order: 15,
    enabled: true,
  },

  // Cloud & DevOps
  {
    id: "aws",
    name: "AWS",
    icon: "aws",
    category: "cloud-infra",
    order: 16,
    enabled: true,
  },
  {
    id: "docker",
    name: "Docker",
    icon: "docker",
    category: "cloud-infra",
    order: 17,
    enabled: true,
  },
  {
    id: "cursor",
    name: "CI/CD & Developer Tooling",
    icon: "cursor",
    category: "cloud-infra",
    order: 18,
    enabled: true,
  },
];
