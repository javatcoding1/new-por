import { socialsConfig } from "@/config/socials";
import type { AboutGreetings, AboutItem, FooterConfig, PortfolioConfig } from "@/config/types";
import { BookmarkCheckIcon } from "@/components/shared/site-icons";
import BrandNextjs from "@/public/stacks/nextjs";

export const aboutGreetings: AboutGreetings = {
  morning: "Good morning !",
  afternoon: "Good afternoon !",
  evening: "Good evening !",
};

export const aboutItems: AboutItem[] = [
  {
    id: "build",
    lead: "I'm Jayanth Madhav, Associate Software Engineer at Cubic",
    illustration: "browser",
    body: "specializing in full-stack web platforms, enterprise LLM infrastructure, and autonomous AI agents.",
  },
  {
    id: "share",
    lead: "I engineered an LLM gateway for unified Qwen access",
    illustration: "notebook",
    body: "and built autonomous PR review agents deployed on NVIDIA H200 GPUs (140GB VRAM) to streamline code review, security audits, and deployment velocity.",
  },
  {
    id: "learn",
    lead: "My engineering toolkit spans Next.js, Node.js, and Playwright",
    illustration: "plane",
    body: "consolidating multi-program releases into real-time dashboards and accelerating test automation across teams.",
  },
];

export const footerConfig: FooterConfig = {
  quote: "The soul becomes dyed with the color of its thoughts.",
  attribution: "Marcus Aurelius",
  credit: "Crafted by E Jayanth Madhav.",
  artwork: {
    src: "/images/footer-garden-strip.webp",
    width: 1264,
    height: 600,
  },
};

export const siteConfig: PortfolioConfig = {
  meta: {
    url: "https://jayanthmadhav.is-a.dev",
    title: "E Jayanth Madhav — Associate Software Engineer | AI & Full-Stack",
    titleTemplate: "%s | E Jayanth Madhav",
    shortTitle: "E Jayanth Madhav",
    description:
      "Associate Software Engineer at Cubic specializing in Full-Stack Web Development, LLM Gateways, Autonomous AI PR Review Agents, and Distributed Systems.",
    keywords: [
      "E Jayanth Madhav",
      "Jayanth Madhav",
      "Associate Software Engineer",
      "Cubic",
      "LLM Gateway",
      "Qwen",
      "AI PR Review Agent",
      "NVIDIA H200",
      "Next.js",
      "Node.js",
      "Playwright",
      "TypeScript",
      "Python",
      "Hyderabad",
      "Full Stack Developer",
    ],
    authors: [{ name: "E Jayanth Madhav", url: "https://jayanthmadhav.is-a.dev" }],
    creator: "E Jayanth Madhav",
    publisher: "E Jayanth Madhav",
    classification: "Portfolio",
    category: "technology",
    locale: "en_US",
    ogImage: {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "E Jayanth Madhav — Associate Software Engineer at Cubic",
    },
    twitterCreator: "@ejayanthmadhav",
    icon: "/favicon.svg",
    appleIcon: "/apple-touch-icon.png",
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
    manifest: {
      name: "E Jayanth Madhav — Associate Software Engineer",
      short_name: "Jayanth",
      description: "Associate Software Engineer at Cubic specializing in Full-Stack and AI Systems.",
      start_url: "/",
      display: "standalone",
      background_color: "#fafafa",
      theme_color: "#18181b",
      icons: [
        {
          src: "/favicon.ico",
          sizes: "any",
          type: "image/x-icon",
        },
        {
          src: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    robots: {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      sitemap: "https://jayanthmadhav.is-a.dev/sitemap.xml",
    },
    sitemap: [
      { url: "https://jayanthmadhav.is-a.dev", changeFrequency: "monthly", priority: 1 },
    ],
  },
  personal: {
    fullName: "E Jayanth Madhav",
    firstName: "Jayanth",
    avatar: {
      src: "/profile_pic.png",
      alt: "E Jayanth Madhav",
      fallback: "JM",
    },
    location: {
      label: "Hyderabad, India",
      timeZone: "Asia/Kolkata",
    },
    githubUsername: "javatcoding1",
  },
  sectionOrder: [
    "experience",
    "projects",
    "skills",
    "about",
    "certifications",
    "socials",
    "github",
  ],
  sectionFlags: {
    socials: true,
    skills: true,
    components: false,
    about: true,
    testimonials: false,
    projects: true,
    bookmarks: false,
    bookshelf: false,
    certifications: true,
    insights: false,
    sponsors: false,
    experience: true,
    services: false,
    workflow: false,
    github: true,
    contact: false,
  },
  banner: {
    imageSrc: "/images/profile-banner-cutout.webp",
    imageAlt: "Paper cutouts of a keyboard, notebook, paper plane, and coffee cup",
    openSourceUrl: "https://github.com/javatcoding1",
    openSourceTooltip: "View my GitHub profile!",
    themeToggleLabel: "Toggle theme",
    themeShortcut: "D",
    themeTooltip: "Toggle theme",
    switchAudioSrc: "/switch.mp3",
  },
  about: {
    title: "Hello there !",
    body: "I'm E Jayanth Madhav, an Associate Software Engineer at Cubic based in Hyderabad, India. I build modern full-stack web platforms, enterprise LLM gateways, and autonomous AI agents. At Cubic, I engineered an enterprise LLM gateway to provide standardized, secure access to our internal Qwen model, developed an autonomous AI PR review agent deployed on NVIDIA H200 GPUs (140GB VRAM) for automated code and security reviews, and built a unified release management platform using Next.js, Node.js, and Playwright.",
  },
  services: {
    title: "What I build best",
    items: [
      "Enterprise LLM gateways and high-concurrency API integrations for foundation models.",
      "Autonomous AI agents for code review, pull request analysis, and CI/CD pipelines.",
      "Full-stack platforms and release management systems with Next.js, Node.js, and Playwright.",
    ],
  },
  workflow: {
    title: "Engineering approach",
    items: [
      {
        label: "Architecture",
        description:
          "Designing scalable systems with low latency, robust data schemas, and high concurrency.",
        icon: "scope",
      },
      {
        label: "AI & Automation",
        description:
          "Integrating state-of-the-art LLMs, automated agents, and rigorous regression testing suites.",
        icon: "communication",
      },
      {
        label: "Delivery",
        description:
          "Deploying observable, resilient microservices and applications with continuous CI/CD.",
        icon: "handoff",
      },
    ],
  },
  contact: {
    title: "Get in touch",
    description:
      "Open to discussions regarding full-stack engineering, enterprise LLM architectures, and AI agent platforms.",
    pricing: [],
    channels: socialsConfig,
  },
  bookmarks: {
    title: "Bookmarks",
    items: [],
  },
  certifications: {
    title: "Publications & Certifications",
    items: [
      {
        id: "springer-pub",
        url: "https://link.springer.com",
        title: "Springer Nature: Enhanced MRI Tumor Detection using Federated Learning & GANs",
        domain: "springer.com",
        date: "2024",
        icon: BookmarkCheckIcon,
      },
      {
        id: "icict-pub",
        url: "https://icict.net",
        title: "ICICT '24: Retail Time-Series Demand Forecasting with ARIMA",
        domain: "icict.net",
        date: "2024",
        icon: BookmarkCheckIcon,
      },
      {
        id: "smart-interviews-dsa",
        url: "https://smartinterviews.in",
        title: "Smart Interviews: Data Structures, Algorithms & Distributed System Design",
        domain: "smartinterviews.in",
        date: "2024",
        icon: BookmarkCheckIcon,
      },
      {
        id: "hacktoberfest",
        url: "https://hacktoberfest.com",
        title: "Hacktoberfest: Super Contributor (Open Source)",
        domain: "hacktoberfest.com",
        date: "2025",
        icon: BookmarkCheckIcon,
      },
    ],
  },
};
