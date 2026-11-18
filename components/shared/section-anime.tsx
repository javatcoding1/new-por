"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Flame, Eye, Swords, ShieldCheck, Trophy, Target, Zap } from "lucide-react";

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
  tag: string;
  quote: string;
  subquote?: string;
  icon: string;
}

export const SECTION_ANIME_CONFIG: Record<string, SectionAnimeCharacter> = {
  hero: {
    id: "naruto",
    name: "Naruto Uzumaki",
    jpName: "うずまきナルト",
    title: "THE LEGEND // 7TH HOKAGE",
    series: "Naruto Shippuden",
    side: "left",
    color: "#f97316",
    image: "/images/anime/naruto-full.png",
    width: 1200,
    height: 1800,
    tag: "Jayanth's #1 Life Legend",
    quote: "Dattebayo! I never give up, and I never go back on my word!",
    subquote: "Rasengan & Nine-Tails Will",
    icon: "🍥",
  },
  experience: {
    id: "levi",
    name: "Levi Ackerman",
    jpName: "リヴァイ・アッカーマン",
    title: "CAPTAIN // HUMANITY'S STRONGEST",
    series: "Attack on Titan",
    side: "right", // Opposite left SideNote ("Associate SDE @ Cubic")
    color: "#0284c7",
    image: "/images/anime/levi-full.png",
    width: 889,
    height: 1200,
    tag: "Cold Precision & Execution",
    quote: "Dedicate your heart. Zero hesitation, zero regrets.",
    subquote: "Survey Corps 3D Maneuver",
    icon: "⚔️",
  },
  projects: {
    id: "gojo",
    name: "Satoru Gojo",
    jpName: "五条 悟",
    title: "THE HONORED ONE // LIMITLESS",
    series: "Jujutsu Kaisen",
    side: "left", // Opposite right SideNote ("HelixQue ★ 140+")
    color: "#a855f7",
    image: "/images/anime/gojo-full.png",
    width: 638,
    height: 969,
    tag: "Absolute Mastery & Cool",
    quote: "Throughout heaven and earth, I alone am the honored one.",
    subquote: "Domain Expansion: Unlimited Void",
    icon: "👁️",
  },
  components: {
    id: "luffy",
    name: "Monkey D. Luffy",
    jpName: "モンキー・D・ルフィ",
    title: "STRAW HAT // KING OF PIRATES",
    series: "One Piece",
    side: "right", // Opposite left SideNote ("Interactive UI kit")
    color: "#ef4444",
    image: "/images/anime/luffy-full.png",
    width: 673,
    height: 1200,
    tag: "Pure Freedom & Fearless Vision",
    quote: "If you don't take risks, you can't create a future!",
    subquote: "Gear 5 · Sun God Nika",
    icon: "🍖",
  },
  skills: {
    id: "asta",
    name: "Asta",
    jpName: "アスタ",
    title: "BLACK BULLS // ANTI-MAGIC",
    series: "Black Clover",
    side: "left", // Opposite right SideNote ("Next.js, WebRTC, Python")
    color: "#eab308",
    image: "/images/anime/asta-full.png",
    width: 1024,
    height: 1435,
    tag: "Limit-Breaking Work Ethic",
    quote: "My magic is never giving up! Surpass your limits right now!",
    subquote: "Demon-Slayer Greatsword",
    icon: "⚡",
  },
  workflow: {
    id: "ego",
    name: "Jinpachi Ego",
    jpName: "絵心 甚八",
    title: "BLUE LOCK // MASTERMIND",
    series: "Blue Lock",
    side: "right", // Opposite left SideNote ("Ship fast with automated CI/CD")
    color: "#06b6d4",
    image: "/images/anime/ego-full.png",
    width: 1780,
    height: 2048,
    tag: "Egoist Philosophy & System Design",
    quote: "Devour or be devoured. Architect the unshakeable formula for victory.",
    subquote: "Unleash Your Raw Ambition",
    icon: "👓",
  },
  bookshelf: {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    jpName: "黒崎 一護",
    title: "SOUL REAPER // BANKAI",
    series: "Bleach",
    side: "right", // Opposite left SideNote ("Naruto, Bleach & manga")
    color: "#f59e0b",
    image: "/images/anime/ichigo-full.png",
    width: 730,
    height: 1095,
    tag: "Protector of What Matters Most",
    quote: "If fate is a millstone, we are the grist. Break every ceiling!",
    subquote: "Getsuga Tensho · Tensa Zangetsu",
    icon: "🗡️",
  },
  certifications: {
    id: "isagi",
    name: "Yoichi Isagi",
    jpName: "潔 世一",
    title: "METAVISION // BLUE LOCK ACE",
    series: "Blue Lock",
    side: "left", // Opposite right SideNote ("Springer Nature & ICICT '24 papers")
    color: "#10b981",
    image: "/images/anime/isagi-full.png",
    width: 1780,
    height: 2048,
    tag: "Spatial Awareness & Direct Shot",
    quote: "I can see the entire field... The puzzle pieces of victory connect perfectly!",
    subquote: "Metavision Spatial Intuition",
    icon: "🧩",
  },
};

export function SectionAnimeCompanion({ sectionId }: { sectionId: string }) {
  const config = SECTION_ANIME_CONFIG[sectionId];
  const [isHovered, setIsHovered] = useState(false);

  if (!config) return null;

  const isLeft = config.side === "left";

  return (
    <>
      {/* ========================================================
          DESKTOP VIEWPORT (>= 72rem / 1152px)
          Pushed into the side gutter alongside the section!
          Scrolls naturally with this section — ZERO overlap!
          Sleek, visual, presentable character presence!
          ======================================================== */}
      <aside
        aria-label={`${config.name} companion for ${sectionId} section`}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        className={`pointer-events-auto hidden min-[72rem]:flex flex-col select-none absolute top-2 z-20 ${
          isLeft
            ? "right-[calc(100%+1.5rem)] xl:right-[calc(100%+2.25rem)] items-end text-right"
            : "left-[calc(100%+1.5rem)] xl:left-[calc(100%+2.25rem)] items-start text-left"
        }`}
        style={{ width: "min(14.5rem, calc((100vw - var(--frame-max-w)) / 2 - 2rem))" }}
      >
        {/* Character Badge Pill */}
        <div
          className="mb-1 inline-flex items-center gap-1.5 rounded-full border bg-card/90 px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider shadow-xs backdrop-blur-md transition-transform hover:scale-105"
          style={{ borderColor: `${config.color}50` }}
        >
          <span>{config.icon}</span>
          <span style={{ color: config.color }}>{config.name.split(" ")[0]}</span>
          <span className="text-[8px] text-muted-foreground/80">•</span>
          <span className="text-[8px] text-muted-foreground">{config.series.split(" ")[0]}</span>
        </div>

        {/* Character Full-Body Standing Render */}
        <motion.div
          whileHover={{ y: -5, scale: 1.04 }}
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
              filter: `drop-shadow(0 10px 22px ${config.color}45)`,
            }}
          >
            <Image
              src={config.image}
              alt={`${config.name} full standing figure`}
              width={config.width}
              height={config.height}
              className="h-full w-auto object-contain object-bottom pointer-events-none select-none transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Sleek, Presentable Speech Quote Card (No heavy text!) */}
        <div
          className={`mt-1.5 max-w-[210px] xl:max-w-[230px] rounded-2xl border bg-card/90 p-2.5 shadow-md backdrop-blur-md transition-all hover:border-foreground/30 hover:shadow-lg ${
            isLeft ? "text-right" : "text-left"
          }`}
          style={{
            borderLeftColor: !isLeft ? config.color : undefined,
            borderLeftWidth: !isLeft ? 3 : undefined,
            borderRightColor: isLeft ? config.color : undefined,
            borderRightWidth: isLeft ? 3 : undefined,
          }}
        >
          {/* Character Title */}
          <div
            className={`flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-wider ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <span style={{ color: config.color }}>{config.title}</span>
          </div>

          {/* Punchy Iconic Quote */}
          <p className="mt-1 font-serif text-[11px] xl:text-xs italic leading-tight text-foreground/90">
            &ldquo;{config.quote}&rdquo;
          </p>

          {/* Subquote / Technique badge */}
          {config.subquote && (
            <div
              className={`mt-1.5 flex items-center gap-1 text-[8px] font-mono text-muted-foreground ${
                isLeft ? "justify-end" : "justify-start"
              }`}
            >
              <span>{config.subquote}</span>
            </div>
          )}
        </div>
      </aside>

      {/* ========================================================
          MOBILE / PHONE VIEWPORT (< 72rem / 1152px)
          Compact, presentable anime character card
          ======================================================== */}
      <div className="block min-[72rem]:hidden px-4 sm:px-6 my-2 select-none">
        <div
          className="flex items-center justify-between gap-3 overflow-hidden rounded-2xl border bg-card/75 p-2.5 shadow-xs backdrop-blur-md"
          style={{
            borderLeftColor: config.color,
            borderLeftWidth: 3,
          }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Character Thumbnail */}
            <div
              className="relative size-11 shrink-0 overflow-hidden rounded-xl border bg-muted/30 p-0.5"
              style={{
                boxShadow: `0 0 12px ${config.color}35`,
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

            <div className="min-w-0 text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-foreground truncate">
                  {config.name}
                </span>
                <span
                  className="rounded px-1.5 py-0.2 text-[8px] font-mono font-bold text-white shrink-0"
                  style={{ backgroundColor: config.color }}
                >
                  {config.series.split(" ")[0]}
                </span>
              </div>
              <p className="mt-0.5 font-serif text-[11px] italic text-muted-foreground truncate leading-tight">
                &ldquo;{config.quote}&rdquo;
              </p>
            </div>
          </div>

          <span className="text-sm shrink-0 pl-1">{config.icon}</span>
        </div>
      </div>
    </>
  );
}
