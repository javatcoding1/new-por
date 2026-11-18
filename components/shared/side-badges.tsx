"use client";

import Link from "next/link";
import { SiBuymeacoffee, SiGithub } from "react-icons/si";
import { Star, FileText, ArrowUpRight, Linkedin } from "lucide-react";

export function SideBadges() {
  return (
    <>
      {/* Left side floating status card */}
      <aside
        aria-label="Current status"
        className="pointer-events-auto fixed bottom-6 left-6 z-30 hidden xl:flex flex-col gap-2 rounded-2xl border bg-card/85 p-3.5 shadow-sm backdrop-blur-md transition-all hover:bg-card hover:shadow-md"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-foreground">
            Available for opportunities
          </span>
        </div>

        <div className="text-[11px] leading-snug text-muted-foreground">
          <p className="font-medium text-foreground/90">E Jayanth Madhav</p>
          <p>Associate SDE @ Cubic</p>
          <p className="text-[10px] text-muted-foreground/75">Hyderabad, IN · IST</p>
        </div>

        <div className="mt-1 flex items-center gap-1.5 border-t pt-2">
          <a
            href="https://github.com/javatcoding1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="GitHub @javatcoding1"
          >
            <SiGithub className="size-3" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ejayanthmadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            title="LinkedIn @ejayanthmadhav"
          >
            <Linkedin className="size-3" />
            <span>LinkedIn</span>
          </a>
        </div>
      </aside>

      {/* Right side floating quick actions */}
      <aside
        aria-label="Quick links"
        className="pointer-events-auto fixed top-24 right-6 z-30 hidden xl:flex flex-col gap-2.5"
      >
        {/* HelixQue Star Badge */}
        <a
          href="https://github.com/HXQLabs/HelixQue"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 rounded-full border bg-card/85 px-3.5 py-1.5 shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] hover:border-primary/40 hover:bg-card hover:shadow-md"
        >
          <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
            <Star className="size-3.5 fill-amber-400 text-amber-500 transition-transform group-hover:rotate-12" />
            <span>HelixQue</span>
          </div>
          <span className="flex items-center gap-0.5 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
            ★ 140+
            <ArrowUpRight className="size-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        {/* Buy Me a Coffee Badge */}
        <a
          href="https://buymeacoffee.com/jayanthmadhav"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-3 rounded-full border bg-card/85 px-3.5 py-1.5 shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] hover:border-amber-500/40 hover:bg-card hover:shadow-md"
        >
          <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
            <SiBuymeacoffee className="size-3.5 text-amber-500 transition-transform group-hover:-rotate-6" />
            <span>Buy Me Coffee</span>
          </div>
          <ArrowUpRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </a>

        {/* Research / Papers Badge */}
        <Link
          href="/research"
          className="group flex items-center justify-between gap-3 rounded-full border bg-card/85 px-3.5 py-1.5 shadow-sm backdrop-blur-md transition-all hover:scale-[1.02] hover:border-primary/40 hover:bg-card hover:shadow-md"
        >
          <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
            <FileText className="size-3.5 text-primary" />
            <span>Research</span>
          </div>
          <span className="rounded-full bg-muted px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground group-hover:text-foreground">
            Springer '24
          </span>
        </Link>
      </aside>
    </>
  );
}
