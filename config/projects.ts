import type { Project } from "@/config/types";

export const projectsSectionConfig = {
  title: "Featured Projects",
  liveButtonLabel: "Live platform",
  sourceButtonLabel: "Source code",
};

export const projectsConfig: Project[] = [
  {
    id: "helixque",
    title: "HelixQue (HXQLabs)",
    tagline: "★ 140+ Stars · Scalable 1:1 Video Networking Platform",
    description:
      "Scalable 1:1 video networking and mentorship platform supporting active developers with low-latency WebRTC and real-time Socket.io signaling.",
    content:
      "Architected scalable 1:1 video networking platform supporting 100+ active users with Node.js and TypeScript. Engineered custom TURN/STUN WebRTC infrastructure and Socket.io signaling, bringing peer connection negotiation to sub-100ms. Led project to 140+ GitHub stars and 1000+ views, implementing automated CI/CD via GitHub Actions for Vercel deployment.",
    image: "/talvess.png",
    imageAlt: "HelixQue platform interface and WebRTC architecture",
    imageTone: "dark",
    liveUrl: "https://helixque.vercel.app",
    githubUrl: "https://github.com/HXQLabs/HelixQue",
    tags: ["Featured", "★ 140+ Stars", "WebRTC", "Socket.io", "TypeScript", "Node.js", "TURN/STUN", "Vercel"],
    year: 2024,
    status: "shipped",
    category: "Featured Open-Source / WebRTC",
    order: 1,
    enabled: true,
  },
  {
    id: "llm-gateway-pr-reviewer",
    title: "Qwen LLM Gateway & AI Agents",
    tagline: "Enterprise LLM gateway & autonomous PR reviewer",
    description:
      "High-performance LLM gateway for internal Qwen model access and autonomous PR review agents deployed on NVIDIA H200 GPUs.",
    content:
      "Engineered a low-latency LLM gateway to provide standardized, secure authenticated API access to self-hosted Qwen models. Built an autonomous PR review agent handling automated code reviews, security vulnerability scanning, and PR summarization on 140GB VRAM NVIDIA H200 GPUs.",
    image: "/rixel.png",
    imageAlt: "Qwen LLM Gateway and AI Agent architecture",
    imageTone: "dark",
    githubUrl: "https://github.com/javatcoding1",
    tags: ["LLM Gateway", "Qwen LLM", "NVIDIA H200", "Python", "FastAPI", "AI Agents"],
    year: 2024,
    status: "shipped",
    category: "AI & Infrastructure",
    order: 2,
    enabled: true,
  },
  {
    id: "mri-tumor-detection",
    title: "Enhanced MRI Tumor Detection",
    tagline: "Privacy-preserving medical image analysis",
    description:
      "Federated Learning system with WCGANs synthesis for enhanced medical image analysis, boosting accuracy by 18%.",
    content:
      "Designed a privacy-preserving Federated Learning architecture to train models across distributed medical nodes without centralizing raw data. Leveraged Wasserstein Conditional GANs (WCGANs) for data augmentation and deployed on scalable AWS EC2 with auto-scaling.",
    image: "/aura.png",
    imageAlt: "MRI Tumor Detection and GAN synthesis",
    imageTone: "dark",
    githubUrl: "https://github.com/ejayanthmadhav/mri-tumor-detection",
    tags: ["Federated Learning", "WCGANs", "TensorFlow", "Python", "AWS EC2", "Computer Vision"],
    year: 2024,
    status: "shipped",
    category: "AI / Deep Learning",
    order: 3,
    enabled: true,
  },
  {
    id: "ai-interview-platform",
    title: "AI Interview Platform Backend",
    tagline: "High-concurrency intelligent assessment engine",
    description:
      "Intelligent evaluation engine integrating Google Gemini API and high-concurrency PostgreSQL (NeonDB) architecture.",
    content:
      "Integrated Google Gemini API for real-time technical evaluation and automated dynamic question generation. Architected a microservices backend on NeonDB with optimized queries, delivering a 35% latency improvement.",
    image: "/gridly.png",
    imageAlt: "AI Interview Platform architecture",
    imageTone: "light",
    githubUrl: "https://github.com/ejayanthmadhav/ai-interview-backend",
    tags: ["Node.js", "Google Gemini", "PostgreSQL", "NeonDB", "Microservices", "REST APIs"],
    year: 2024,
    status: "shipped",
    category: "Backend & AI",
    order: 4,
    enabled: true,
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting System",
    tagline: "Predictive retail demand forecasting engine",
    description:
      "ARIMA time-series model and automated data preprocessing pipeline improving retail demand prediction accuracy by 25%.",
    content:
      "Developed an end-to-end time-series forecasting pipeline using ARIMA models and robust automated cleaning to handle outliers and anomalies, published at ICICT '24.",
    image: "/zeno.png",
    imageAlt: "Sales Forecasting system visualizations",
    imageTone: "dark",
    githubUrl: "https://github.com/ejayanthmadhav/sales-forecasting",
    tags: ["Python", "ARIMA", "Time-Series", "Pandas", "NumPy", "Data Science"],
    year: 2024,
    status: "shipped",
    category: "Data Science & ML",
    order: 5,
    enabled: true,
  },
];
