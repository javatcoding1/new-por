"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Flame, Eye, Swords, Heart, Volume2 } from "lucide-react";

export interface AnimeCharacter {
  id: string;
  name: string;
  series: string;
  quote: string;
  image: string;
  fullImage?: string;
  badge: string;
  color: string;
  tagline?: string;
  jayanthWhy?: string;
}

export const ANIME_CHARACTERS: AnimeCharacter[] = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    series: "Naruto Shippuden",
    quote: "Dattebayo! I never give up, and I never go back on my word — that's my ninja way!",
    image: "/images/anime/naruto.png",
    fullImage: "/images/anime/naruto-full.png",
    badge: "Jayanth's #1 Life Legend · 7th Hokage",
    color: "#f97316",
    tagline: "Unbreakable Willpower & Relentless Grind",
    jayanthWhy:
      "Naruto is my true hero. Starting from rock bottom with zero advantages, turning isolation into fuel, and never quitting no matter how impossible the odds. He is my lifelong benchmark for grit.",
  },
  {
    id: "gojo",
    name: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    quote: "Throughout heaven and earth, I alone am the honored one.",
    image: "/images/anime/gojo.png",
    fullImage: "/images/anime/gojo-full.png",
    badge: "The Peak of Cool · Special Grade",
    color: "#a855f7",
    tagline: "Effortless Confidence & Absolute Mastery",
    jayanthWhy:
      "Gojo is the definition of cool confidence backed by god-tier competence. Playful and relaxed because his technical depth and domain mastery are completely unquestioned.",
  },
  {
    id: "levi",
    name: "Levi Ackerman",
    series: "Attack on Titan",
    quote: "Dedicate your heart. Make the choice you won't regret.",
    image: "/images/anime/levi.png",
    fullImage: "/images/anime/levi-full.png",
    badge: "Humanity's Strongest · Captain",
    color: "#0284c7",
    tagline: "Cold Precision & Flawless Execution",
    jayanthWhy:
      "Levi embodies disciplined execution under extreme pressure. No excuses, no hesitation, just ruthless execution and moving forward.",
  },
  {
    id: "deku",
    name: "Izuku Midoriya",
    series: "My Hero Academia",
    quote: "Plus Ultra! Even without a quirk, I will be a hero!",
    image: "/images/anime/deku.png",
    badge: "UA High · One For All",
    color: "#10b981",
    tagline: "Analytical Strategist & Pure Heart",
  },
  {
    id: "asta",
    name: "Asta",
    series: "Black Clover",
    quote: "My magic is never giving up! I'll become the Wizard King!",
    image: "/images/anime/asta.png",
    badge: "Black Bulls · Anti-Magic",
    color: "#eab308",
    tagline: "Physical Mastery & Defying Fate",
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    series: "One Piece",
    quote: "I'm gonna be King of the Pirates!",
    image: "/images/anime/luffy.png",
    badge: "Straw Hat Captain · Gear 5",
    color: "#ef4444",
    tagline: "Pure Freedom & Fearless Loyalty",
  },
  {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    series: "Bleach",
    quote: "If fate is a millstone, we are the grist. Bankai!",
    image: "/images/anime/ichigo.png",
    badge: "Substitute Soul Reaper",
    color: "#f59e0b",
    tagline: "Protector Instinct & Spiritual Power",
  },
  {
    id: "itachi",
    name: "Itachi Uchiha",
    series: "Naruto",
    quote: "Self-sacrifice... a nameless shinobi who protects peace.",
    image: "/images/anime/itachi.png",
    badge: "Mangekyo Sharingan",
    color: "#dc2626",
    tagline: "Silent Protector & Stoic Intellect",
  },
];

export function AnimeShelfDecorations() {
  const [activeCharacter, setActiveCharacter] = useState<AnimeCharacter>(
    ANIME_CHARACTERS[0], // Naruto Uzumaki defaults as active
  );

  return (
    <div className="px-6 mb-5">
      {/* Bar Header */}
      <div className="flex items-center justify-between gap-2 pb-2">
        <span className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Sparkles className="size-3 text-amber-500" />
          <span>Anime Legends & Character Roster</span>
        </span>
        <span className="text-[10px] text-muted-foreground/75 font-mono">
          Tap characters to interact
        </span>
      </div>

      {/* Characters Carousel / Badges */}
      <div className="flex items-end gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ANIME_CHARACTERS.map((char) => {
          const isSelected = activeCharacter.id === char.id;
          const isTrio = char.id === "naruto" || char.id === "gojo" || char.id === "levi";

          return (
            <motion.button
              key={char.id}
              type="button"
              onClick={() => setActiveCharacter(char)}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex flex-col items-center shrink-0 cursor-pointer rounded-2xl border p-2 transition-all duration-200 ${
                isSelected
                  ? "border-primary/60 bg-muted/40 shadow-sm"
                  : "border-border/60 bg-card/40 hover:border-foreground/30 hover:bg-card"
              }`}
            >
              {/* Highlight badge for the 3 main idols */}
              {isTrio && (
                <span
                  className="absolute -top-1.5 rounded-full px-1.5 py-0.2 text-[8px] font-mono font-bold uppercase text-white shadow-xs"
                  style={{ backgroundColor: char.color }}
                >
                  {char.id === "naruto" ? "Legend #1" : "Top Idol"}
                </span>
              )}

              {/* Avatar circle */}
              <div
                className="relative flex size-12 sm:size-14 items-center justify-center overflow-hidden rounded-full border bg-background/80"
                style={{
                  boxShadow: isSelected ? `0 0 12px ${char.color}45` : undefined,
                }}
              >
                <div
                  className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40"
                  style={{ backgroundColor: char.color }}
                />
                <Image
                  src={char.image}
                  alt={char.name}
                  width={56}
                  height={56}
                  className="relative z-10 size-full object-cover object-top transition-transform duration-200 group-hover:scale-110"
                />
              </div>

              {/* Character name */}
              <span className="mt-1 text-[11px] font-medium text-foreground tracking-tight whitespace-nowrap">
                {char.name.split(" ")[0]}
              </span>
              <span className="text-[9px] font-mono text-muted-foreground/70">
                {char.series.split(" ")[0]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Featured Character Spotlight with Full Standing Render */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCharacter.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="mt-3 overflow-hidden rounded-2xl border bg-card/60 p-4 backdrop-blur-md"
          style={{
            boxShadow: `0 8px 30px ${activeCharacter.color}15`,
          }}
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
            {/* Left side details */}
            <div className="flex-1 space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: activeCharacter.color }}
                />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {activeCharacter.series} · {activeCharacter.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {activeCharacter.name}
                </h3>
                {activeCharacter.tagline && (
                  <p className="text-xs font-mono font-medium" style={{ color: activeCharacter.color }}>
                    {activeCharacter.tagline}
                  </p>
                )}
              </div>

              {/* Quote bubble */}
              <div className="rounded-xl border bg-muted/30 p-2.5">
                <p className="text-xs font-serif italic text-foreground leading-snug">
                  &ldquo;{activeCharacter.quote}&rdquo;
                </p>
              </div>

              {/* Jayanth's why note if present */}
              {activeCharacter.jayanthWhy && (
                <div className="flex items-start gap-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  <Heart className="size-3 text-red-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground/85">Jayanth&apos;s take:</strong> {activeCharacter.jayanthWhy}
                  </span>
                </div>
              )}
            </div>

            {/* Right side: Full-body render if available */}
            {activeCharacter.fullImage ? (
              <div className="relative shrink-0 flex items-end justify-center h-44 sm:h-52 w-32 sm:w-36 overflow-hidden rounded-xl border bg-muted/20 p-1">
                {/* Aura Glow */}
                <div
                  className="absolute inset-0 opacity-25 blur-lg"
                  style={{ backgroundColor: activeCharacter.color }}
                />
                <Image
                  src={activeCharacter.fullImage}
                  alt={`${activeCharacter.name} full render`}
                  width={600}
                  height={900}
                  className="relative z-10 max-h-full w-auto object-contain object-bottom drop-shadow-md select-none pointer-events-none"
                />
              </div>
            ) : (
              <div className="relative shrink-0 flex items-center justify-center size-24 overflow-hidden rounded-2xl border bg-muted/20">
                <Image
                  src={activeCharacter.image}
                  alt={activeCharacter.name}
                  width={96}
                  height={96}
                  className="size-full object-cover object-top"
                />
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
