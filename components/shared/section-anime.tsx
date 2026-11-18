"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Flame, Eye, Swords, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export interface SectionAnimeCharacter {
  id: string;
  name: string;
  jpName: string;
  title: string;
  series: string;
  side: "left" | "right";
  color: string;
  image: string;
  width: number;
  height: number;
  projectTitle: string;
  projectTag: string;
  projectExplanation: string;
  quote: string;
  technique: string;
}

export const SECTION_ANIME_CONFIG: Record<string, SectionAnimeCharacter> = {
  hero: {
    id: "naruto",
    name: "Naruto Uzumaki",
    jpName: "うずまきナルト",
    title: "THE LEGEND · 7TH HOKAGE",
    series: "Naruto Shippuden",
    side: "left",
    color: "#f97316",
    image: "/images/anime/naruto-full.png",
    width: 1200,
    height: 1800,
    projectTitle: "Associate Software Engineer @ Cubic",
    projectTag: "Jayanth's #1 Life Legend",
    projectExplanation:
      "Dattebayo! Welcome to Jayanth's realm! Jayanth started from the ground up, scaling Qwen LLM gateways, building high-throughput distributed systems, and never quitting on any engineering challenge. That's our ninja way!",
    quote: "If you don't like your destiny, don't accept it. Have the courage to change it!",
    technique: "Rasengan & Nine-Tails Sage Mode",
  },
  experience: {
    id: "levi",
    name: "Levi Ackerman",
    jpName: "リヴァイ・アッカーマン",
    title: "CAPTAIN · HUMANITY'S STRONGEST",
    series: "Attack on Titan",
    side: "right", // Opposite left SideNote ("Associate SDE @ Cubic")
    color: "#0284c7",
    image: "/images/anime/levi-full.png",
    width: 889,
    height: 1200,
    projectTitle: "Autonomous AI Review Agents @ Cubic",
    projectTag: "NVIDIA H200s (140GB VRAM)",
    projectExplanation:
      "Dedicate your heart. No regrets. At Cubic, Jayanth orchestrates autonomous AI PR review agents on NVIDIA H200 GPU clusters, slashing regression cycles by 60% with cold precision and rigorous Playwright automation.",
    quote: "The only thing we're allowed to do is believe that we won't regret the choice we made.",
    technique: "Survey Corps 3D Maneuver Dual Blade Slice",
  },
  projects: {
    id: "gojo",
    name: "Satoru Gojo",
    jpName: "五条 悟",
    title: "THE HONORED ONE · SPECIAL GRADE",
    series: "Jujutsu Kaisen",
    side: "left", // Opposite right SideNote ("HelixQue ★ 140+")
    color: "#a855f7",
    image: "/images/anime/gojo-full.png",
    width: 638,
    height: 969,
    projectTitle: "HelixQue (HXQLabs) ★ 140+ Stars",
    projectTag: "Ultra-Low Latency Task Queue",
    projectExplanation:
      "Throughout heaven and earth, I alone am the honored one! Check out HelixQue — Jayanth's open-source distributed task and queue orchestration engine. Built for atomic reliability and sub-millisecond dispatch!",
    quote: "Throughout heaven and earth, I alone am the honored one.",
    technique: "Limitless · Hollow Purple & Infinite Void",
  },
  skills: {
    id: "asta",
    name: "Asta",
    jpName: "アスタ",
    title: "BLACK BULLS · ANTI-MAGIC",
    series: "Black Clover",
    side: "left", // Opposite right SideNote ("Next.js, WebRTC, Python")
    color: "#eab308",
    image: "/images/anime/asta-full.png",
    width: 1024,
    height: 1435,
    projectTitle: "Production Tech Stack & Tools",
    projectTag: "Relentless Engineering Grind",
    projectExplanation:
      "My magic is never giving up! Jayanth wields Next.js 15, TypeScript, Node.js, WebRTC video engines, Docker microservices, and Playwright end-to-end testing. When the codebase is complex, push past your limits!",
    quote: "My magic is never giving up! I'll become the Wizard King!",
    technique: "Demon-Slayer Anti-Magic Greatsword",
  },
  bookshelf: {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    jpName: "黒崎 一護",
    title: "SUBSTITUTE SOUL REAPER · BANKAI",
    series: "Bleach",
    side: "right", // Opposite left SideNote ("Naruto, Bleach & manga")
    color: "#f59e0b",
    image: "/images/anime/ichigo-full.png",
    width: 730,
    height: 1095,
    projectTitle: "Manga Shelf & Engineering Books",
    projectTag: "Shonen Jump Foundations",
    projectExplanation:
      "Bankai! The stories that forged Jayanth's unstoppable resilience: Naruto's persistence, Bleach's resolve, One Piece's curiosity, and Berserk's grit. Interact with the 3D bookshelf to inspect the volumes!",
    quote: "If fate is a millstone, we are the grist. Protect what matters most!",
    technique: "Getsuga Tensho · Tensa Zangetsu",
  },
};

export function SectionAnimeCompanion({ sectionId }: { sectionId: string }) {
  const config = SECTION_ANIME_CONFIG[sectionId];
  const [mobileExpanded, setMobileExpanded] = useState(false);

  if (!config) return null;

  const isLeft = config.side === "left";

  return (
    <>
      {/* ========================================================
          DESKTOP VIEWPORT (>= 72rem / 1152px)
          Pushed into the side gutter alongside the section!
          Scrolls naturally with this section — ZERO overlap!
          ======================================================== */}
      <aside
        aria-label={`${config.name} companion for ${sectionId} section`}
        className={`pointer-events-auto hidden min-[72rem]:flex flex-col select-none absolute top-4 z-20 ${
          isLeft
            ? "right-[calc(100%+1.5rem)] xl:right-[calc(100%+2.25rem)] items-end text-right"
            : "left-[calc(100%+1.5rem)] xl:left-[calc(100%+2.25rem)] items-start text-left"
        }`}
        style={{ width: "min(14.5rem, calc((100vw - var(--frame-max-w)) / 2 - 2rem))" }}
      >
        {/* Top Tag Pill */}
        <div
          className="mb-1.5 inline-flex items-center gap-1.5 rounded-full border bg-card/90 px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider shadow-xs backdrop-blur-md"
          style={{ borderColor: `${config.color}50` }}
        >
          <span
            className="size-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: config.color }}
          />
          <span style={{ color: config.color }}>{config.title.split(" · ")[0]}</span>
        </div>

        {/* Character Full-Body Standing Render */}
        <motion.div
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="group relative cursor-pointer"
        >
          {/* Subtle Ambient Aura behind character */}
          <div
            className="pointer-events-none absolute inset-0 rounded-full opacity-20 blur-xl transition-opacity group-hover:opacity-45"
            style={{
              background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
            }}
          />

          <div
            className="relative h-64 xl:h-76 2xl:h-84 w-auto"
            style={{
              filter: `drop-shadow(0 10px 20px ${config.color}40)`,
            }}
          >
            <Image
              src={config.image}
              alt={`${config.name} full standing figure`}
              width={config.width}
              height={config.height}
              className="h-full w-auto object-contain object-bottom pointer-events-none select-none"
            />
          </div>
        </motion.div>

        {/* Project Explanation Speech Card */}
        <div
          className={`mt-1.5 rounded-2xl border bg-card/90 p-2.5 shadow-md backdrop-blur-md transition-all hover:border-foreground/30 hover:shadow-lg ${
            isLeft ? "text-right" : "text-left"
          }`}
          style={{
            borderLeftColor: !isLeft ? config.color : undefined,
            borderLeftWidth: !isLeft ? 3 : undefined,
            borderRightColor: isLeft ? config.color : undefined,
            borderRightWidth: isLeft ? 3 : undefined,
          }}
        >
          {/* Project Title */}
          <div
            className={`flex items-center gap-1.5 text-[10px] font-mono font-bold ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <span className="text-foreground">{config.projectTitle}</span>
          </div>

          {/* Project Explanation in Character's Voice */}
          <p className="mt-1 font-serif text-[11px] italic leading-tight text-foreground/90">
            &ldquo;{config.projectExplanation}&rdquo;
          </p>

          {/* Footer with Character Name & Series */}
          <div
            className={`mt-1.5 flex items-center gap-1 border-t border-dashed pt-1 text-[8.5px] font-mono text-muted-foreground ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <span className="font-semibold" style={{ color: config.color }}>
              {config.name}
            </span>
            <span>·</span>
            <span>{config.series}</span>
          </div>
        </div>
      </aside>

      {/* ========================================================
          MOBILE / PHONE VIEWPORT (< 72rem / 1152px)
          Compact, interactive anime commentary card!
          Visible directly inside each section on mobile devices!
          ======================================================== */}
      <div className="block min-[72rem]:hidden px-4 sm:px-6 my-2 select-none">
        <motion.div
          onClick={() => setMobileExpanded((prev) => !prev)}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer overflow-hidden rounded-2xl border bg-card/70 p-3 shadow-xs backdrop-blur-md transition-colors hover:bg-card hover:border-foreground/30"
          style={{
            borderLeftColor: config.color,
            borderLeftWidth: 3,
          }}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Left: Thumbnail & Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <div
                className="relative size-10 shrink-0 overflow-hidden rounded-xl border bg-muted/40 p-0.5"
                style={{
                  boxShadow: `0 0 10px ${config.color}30`,
                }}
              >
                <Image
                  src={config.image}
                  alt={config.name}
                  width={80}
                  height={80}
                  className="size-full object-contain object-top"
                />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-foreground truncate">
                    {config.name}
                  </span>
                  <span
                    className="rounded px-1 py-0.2 text-[8px] font-mono font-bold uppercase text-white shrink-0"
                    style={{ backgroundColor: config.color }}
                  >
                    {config.id === "naruto" ? "#1 Legend" : "Spotlight"}
                  </span>
                </div>
                <p className="text-[10px] font-mono text-muted-foreground truncate">
                  {config.projectTitle}
                </p>
              </div>
            </div>

            {/* Right: Expand / Collapse indicator */}
            <button
              type="button"
              className="rounded-full p-1 text-muted-foreground hover:text-foreground"
              aria-label={mobileExpanded ? "Collapse" : "Expand"}
            >
              {mobileExpanded ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>
          </div>

          {/* Expandable Project Explanation with Full Character Stance on Mobile */}
          <AnimatePresence>
            {mobileExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-3 border-t border-dashed pt-3"
              >
                <div className="flex items-start gap-3">
                  {/* Full Standing Figure on Mobile */}
                  <div className="relative h-36 w-20 shrink-0 overflow-hidden rounded-xl border bg-muted/20 p-1">
                    <Image
                      src={config.image}
                      alt={config.name}
                      width={config.width}
                      height={config.height}
                      className="size-full object-contain object-bottom"
                    />
                  </div>

                  {/* Explanation text */}
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-serif text-xs italic leading-relaxed text-foreground">
                      &ldquo;{config.projectExplanation}&rdquo;
                    </p>
                    <div className="mt-2 rounded-lg bg-muted/40 p-1.5 text-[9px] font-mono text-muted-foreground">
                      ⚡ <span className="font-semibold text-foreground">Technique:</span> {config.technique}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
