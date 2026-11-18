import type { SectionId, SectionNoteConfig } from "@/config/types";

export const sectionNotes: Partial<Record<SectionId, SectionNoteConfig>> = {
  experience: {
    text: "Associate SDE @ Cubic\n& Qwen LLM gateway",
    side: "left",
  },
  projects: {
    text: "HelixQue ★ 140+\n& H200 AI systems",
    side: "right",
  },
  components: {
    text: "Interactive UI kit\ncopy & paste ready",
    side: "left",
  },
  skills: {
    text: "Next.js, WebRTC,\nPython & PyTorch",
    side: "right",
  },
  workflow: {
    text: "Ship fast with\nautomated CI/CD",
    side: "left",
  },
  about: {
    text: "Building from\nHyderabad, IN 🇮🇳",
    side: "right",
  },
  bookshelf: {
    text: "Naruto, Bleach &\nmanga collection",
    side: "left",
  },
  certifications: {
    text: "Springer Nature\n& ICICT '24 papers",
    side: "right",
  },
  github: {
    text: "Daily code commits\n& open source",
    side: "left",
  },
  socials: {
    text: "Buy me a coffee\n& let's connect!",
    side: "right",
  },
  contact: {
    text: "Say hello or\nlet's build together",
    side: "left",
  },
  testimonials: {
    text: "Feedback from\nmentors & peers",
    side: "left",
  },
  insights: {
    text: "Visitors and views\nover the last 7 days",
    side: "right",
  },
  services: {
    text: "Full-stack & AI\narchitecture",
    side: "left",
  },
  bookmarks: {
    text: "Hand-picked tools\n& resources",
    side: "left",
  },
  sponsors: {
    text: "Support open source\n& research",
    side: "right",
  },
};
