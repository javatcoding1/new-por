import { siteConfig } from "@/config/site";
import { Footer } from "@/components/landing/footer";
import { ArrowUpRight } from "@/components/shared/site-icons";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Systems",
  description:
    "Peer-reviewed publications, distributed systems architecture, and AI infrastructure by E Jayanth Madhav.",
  alternates: {
    canonical: `${siteConfig.meta.url}/research`,
  },
  openGraph: {
    type: "website",
    title: "Research & Systems — E Jayanth Madhav",
    description:
      "Peer-reviewed publications, distributed systems architecture, and AI infrastructure by E Jayanth Madhav.",
    url: `${siteConfig.meta.url}/research`,
    siteName: siteConfig.meta.shortTitle,
  },
};

const publications = [
  {
    id: "springer",
    title: "Enhanced MRI Tumor Detection using Federated Learning and GAN-based Augmentation",
    publisher: "Springer Nature",
    date: "November 2024",
    link: "https://link.springer.com",
    abstract:
      "Designed a privacy-preserving Federated Learning architecture to analyze sensitive medical imaging data across distributed clinical nodes without centralized raw data transfer. Utilized Wasserstein Conditional Generative Adversarial Networks (WCGANs) for synthetic medical image augmentation, improving tumor classification accuracy by 18% while guaranteeing strict patient data privacy.",
    tags: ["Federated Learning", "WCGANs", "Medical AI", "TensorFlow", "AWS EC2", "Distributed Nodes"],
  },
  {
    id: "icict",
    title: "Retail Demand Forecasting with Optimized ARIMA Time-Series Models",
    publisher: "ICICT '24 International Conference",
    date: "February 2024",
    link: "https://icict.net",
    abstract:
      "Engineered an automated end-to-end data preprocessing and predictive forecasting pipeline to tackle noisy, seasonal retail demand datasets. Optimized AutoRegressive Integrated Moving Average (ARIMA) models, achieving a 25% performance improvement over standard baseline demand prediction methods.",
    tags: ["ARIMA", "Time-Series Forecasting", "Data Preprocessing", "Pandas", "Python", "Predictive Analytics"],
  },
];

const architectures = [
  {
    id: "helixque",
    title: "HelixQue (HXQLabs) — 1:1 Video Networking Platform",
    role: "Maintainer & Core Developer",
    status: "140+ GitHub Stars",
    liveUrl: "https://helixque.vercel.app",
    githubUrl: "https://github.com/HXQLabs/HelixQue",
    description:
      "Architected scalable 1:1 video mentorship platform supporting active developers. Engineered custom TURN/STUN WebRTC configurations and real-time signaling with Socket.io, cutting connection negotiation latency to sub-100ms. Implemented automated CI/CD via GitHub Actions for seamless Vercel production deployments.",
    tags: ["WebRTC", "Socket.io", "TypeScript", "Node.js", "CI/CD", "Vercel"],
  },
  {
    id: "llm-gateway",
    title: "Enterprise LLM Gateway & Autonomous PR Review Agents",
    role: "Associate Software Engineer at Cubic",
    status: "Production Infrastructure",
    description:
      "Engineered a low-latency LLM gateway to provide standardized, authenticated API access to internal Qwen foundation models. Deployed autonomous AI PR review agents on NVIDIA H200 GPUs (140GB VRAM) using Qwen 40B+ LLM to automate AST code reviews, security vulnerability scanning, and diff summarization.",
    tags: ["LLM Gateway", "Qwen LLM", "NVIDIA H200 (140GB VRAM)", "Python", "FastAPI", "AI Agents"],
  },
];

export default function ResearchPage() {
  return (
    <>
      <main className="relative flex min-h-dvh flex-col overflow-x-clip border-x bg-background pt-14 xl:overflow-x-visible">
        {/* Header */}
        <section className="border-b border-dashed px-6 pb-8 pt-6">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Research & Open-Source
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            Publications & Systems Architecture
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            A survey of peer-reviewed papers in Federated Learning and time-series modeling, alongside scalable distributed infrastructure and enterprise AI systems built by E Jayanth Madhav.
          </p>
        </section>

        {/* Featured Open Source Spotlight: Helixque */}
        <section className="border-b border-dashed p-6 bg-muted/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-medium text-primary">
                Featured Open Source
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                ★ 140+ Stars on GitHub
              </span>
            </div>
            <h2 className="text-xl font-semibold text-foreground">
              HelixQue (HXQLabs)
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A high-concurrency 1:1 video networking and mentorship platform built with Node.js, TypeScript, and WebRTC. Features custom TURN/STUN servers, low-latency signaling with Socket.io, and fully automated deployment via GitHub Actions.
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="https://helixque.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/30 transition-colors"
              >
                Live Platform <ArrowUpRight size={14} />
              </Link>
              <Link
                href="https://github.com/HXQLabs/HelixQue"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted/30 transition-colors"
              >
                GitHub Repository <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Peer-Reviewed Publications */}
        <section className="border-b border-dashed p-6">
          <h2 className="section-heading mb-4">Peer-Reviewed Research</h2>
          <div className="space-y-6">
            {publications.map((pub) => (
              <article
                key={pub.id}
                className="border border-dashed p-5 rounded-lg bg-card/50 transition-colors hover:bg-muted/10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {pub.publisher}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {pub.date}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pub.abstract}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Link
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    View Publication Details <ArrowUpRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Distributed & AI Infrastructure */}
        <section className="border-b border-dashed p-6">
          <h2 className="section-heading mb-4">Systems & AI Architecture</h2>
          <div className="space-y-6">
            {architectures.map((arch) => (
              <article
                key={arch.id}
                className="border border-dashed p-5 rounded-lg bg-card/50 transition-colors hover:bg-muted/10"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-primary">
                    {arch.role}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {arch.status}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {arch.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {arch.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {arch.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Support & Connect */}
        <section className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-dashed p-5 bg-muted/20">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Support Open-Source Work
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                If you find HelixQue, our research, or developer tooling useful, consider buying a coffee!
              </p>
            </div>
            <Link
              href="https://buymeacoffee.com/jayanthmadhav"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#FFDD00] text-black px-4 py-2 text-xs font-semibold shadow-sm hover:bg-[#FFDD00]/90 transition-all shrink-0"
            >
              ☕ Buy Me a Coffee
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
