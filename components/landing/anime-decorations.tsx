"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

export interface AnimeCharacter {
  id: string;
  name: string;
  series: string;
  quote: string;
  image: string;
  badge: string;
  color: string;
}

export const ANIME_CHARACTERS: AnimeCharacter[] = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    series: "Naruto Shippuden",
    quote: "Dattebayo! I never go back on my word!",
    image: "/images/anime/naruto.png",
    badge: "Hokage · Leaf Village",
    color: "#f97316",
  },
  {
    id: "deku",
    name: "Izuku Midoriya",
    series: "My Hero Academia",
    quote: "Plus Ultra! Even without a quirk, I will be a hero!",
    image: "/images/anime/deku.png",
    badge: "UA High · One For All",
    color: "#10b981",
  },
  {
    id: "asta",
    name: "Asta",
    series: "Black Clover",
    quote: "My magic is never giving up! I'll become the Wizard King!",
    image: "/images/anime/asta.png",
    badge: "Black Bulls · Anti-Magic",
    color: "#eab308",
  },
  {
    id: "gojo",
    name: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    quote: "Throughout heaven and earth, I alone am the honored one.",
    image: "/images/anime/gojo.png",
    badge: "Special Grade · Limitless",
    color: "#a855f7",
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    series: "One Piece",
    quote: "I'm gonna be King of the Pirates!",
    image: "/images/anime/luffy.png",
    badge: "Straw Hat Captain · Gear 5",
    color: "#ef4444",
  },
  {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    series: "Bleach",
    quote: "If fate is a millstone, we are the grist. Bankai!",
    image: "/images/anime/ichigo.png",
    badge: "Substitute Soul Reaper",
    color: "#f59e0b",
  },
  {
    id: "levi",
    name: "Levi Ackerman",
    series: "Attack on Titan",
    quote: "Dedicate your heart. No regrets.",
    image: "/images/anime/levi.png",
    badge: "Captain · Humanity's Strongest",
    color: "#0284c7",
  },
  {
    id: "itachi",
    name: "Itachi Uchiha",
    series: "Naruto",
    quote: "Self-sacrifice... a nameless shinobi who protects peace.",
    image: "/images/anime/itachi.png",
    badge: "Mangekyo Sharingan",
    color: "#dc2626",
  },
];

export function AnimeShelfDecorations() {
  const [activeCharacter, setActiveCharacter] = useState<AnimeCharacter | null>(
    ANIME_CHARACTERS[0],
  );

  return (
    <div className="px-6 mb-4">
      {/* Character badges bar */}
      <div className="flex items-center justify-between gap-2 pb-2">
        <span className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          <Sparkles className="size-3 text-amber-500" />
          <span>Anime Character Cast</span>
        </span>
        <span className="text-[10px] text-muted-foreground/75 font-mono">
          Click characters to interact
        </span>
      </div>

      <div className="flex items-end justify-between gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ANIME_CHARACTERS.map((char) => {
          const isSelected = activeCharacter?.id === char.id;

          return (
            <motion.button
              key={char.id}
              type="button"
              onClick={() => setActiveCharacter(isSelected ? null : char)}
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex flex-col items-center shrink-0 cursor-pointer rounded-xl border p-2 transition-all duration-200 ${
                isSelected
                  ? "border-primary/60 bg-muted/40 shadow-sm"
                  : "border-border/60 bg-card/40 hover:border-foreground/30 hover:bg-card"
              }`}
            >
              {/* Circular spotlight behind character */}
              <div
                className="relative flex size-14 sm:size-16 items-center justify-center overflow-hidden rounded-full border bg-background/80"
                style={{
                  boxShadow: isSelected ? `0 0 12px ${char.color}40` : undefined,
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
              <span className="mt-1.5 text-[11px] font-medium text-foreground tracking-tight whitespace-nowrap">
                {char.name.split(" ")[0]}
              </span>
              <span className="text-[9px] font-mono text-muted-foreground/70">
                {char.series.split(" ")[0]}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Quote bubble when selected */}
      <AnimatePresence mode="wait">
        {activeCharacter && (
          <motion.div
            key={activeCharacter.id}
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mt-2.5 flex items-center gap-3 rounded-xl border bg-muted/20 px-3.5 py-2 backdrop-blur-sm"
          >
            <span
              className="size-2 rounded-full shrink-0"
              style={{ backgroundColor: activeCharacter.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-serif italic text-foreground leading-snug">
                &ldquo;{activeCharacter.quote}&rdquo;
              </p>
              <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                <span className="font-semibold text-foreground/80">{activeCharacter.name}</span> · {activeCharacter.badge}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
