"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface AnimeSidebarCharacter {
  id: string;
  name: string;
  series: string;
  quote: string;
  image: string;
  tag: string;
  color: string;
}

const LEFT_CHARACTERS: AnimeSidebarCharacter[] = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    series: "Naruto",
    quote: "Dattebayo! I never give up!",
    image: "/images/anime/naruto.png",
    tag: "Leaf Village",
    color: "#f97316",
  },
  {
    id: "deku",
    name: "Izuku Midoriya",
    series: "My Hero Academia",
    quote: "Plus Ultra! I want to save people!",
    image: "/images/anime/deku.png",
    tag: "One For All",
    color: "#10b981",
  },
  {
    id: "gojo",
    name: "Satoru Gojo",
    series: "Jujutsu Kaisen",
    quote: "I alone am the honored one.",
    image: "/images/anime/gojo.png",
    tag: "Limitless",
    color: "#a855f7",
  },
  {
    id: "levi",
    name: "Levi Ackerman",
    series: "Attack on Titan",
    quote: "Dedicate your heart. No regrets.",
    image: "/images/anime/levi.png",
    tag: "Survey Corps",
    color: "#0284c7",
  },
];

const RIGHT_CHARACTERS: AnimeSidebarCharacter[] = [
  {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    series: "Bleach",
    quote: "Protect what matters most. Bankai!",
    image: "/images/anime/ichigo.png",
    tag: "Soul Reaper",
    color: "#f59e0b",
  },
  {
    id: "asta",
    name: "Asta",
    series: "Black Clover",
    quote: "My magic is never giving up!",
    image: "/images/anime/asta.png",
    tag: "Black Bulls",
    color: "#eab308",
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    series: "One Piece",
    quote: "I'm gonna be King of the Pirates!",
    image: "/images/anime/luffy.png",
    tag: "Straw Hat",
    color: "#ef4444",
  },
  {
    id: "itachi",
    name: "Itachi Uchiha",
    series: "Naruto",
    quote: "Protecting peace from the shadows.",
    image: "/images/anime/itachi.png",
    tag: "Sharingan",
    color: "#dc2626",
  },
];

function CharacterGutterPill({
  char,
  side,
}: {
  char: AnimeSidebarCharacter;
  side: "left" | "right";
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <motion.button
        type="button"
        whileHover={{ scale: 1.15, y: -4 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`${char.name} from ${char.series}`}
        className="group relative flex size-12 cursor-pointer items-center justify-center rounded-2xl border bg-card/85 p-1 shadow-sm backdrop-blur-md transition-colors hover:border-foreground/30 hover:bg-card hover:shadow-md"
        style={{
          boxShadow: isHovered ? `0 0 16px ${char.color}45` : undefined,
        }}
      >
        {/* Glow backdrop ring */}
        <div
          className="absolute inset-0 rounded-2xl opacity-15 transition-opacity group-hover:opacity-40"
          style={{ backgroundColor: char.color }}
        />

        <div className="relative size-full overflow-hidden rounded-xl bg-background/90">
          <Image
            src={char.image}
            alt={char.name}
            width={48}
            height={48}
            className="size-full object-cover object-top transition-transform duration-200 group-hover:scale-110"
          />
        </div>

        {/* Small series indicator dot */}
        <span
          className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background"
          style={{ backgroundColor: char.color }}
        />
      </motion.button>

      {/* Interactive Speech / Quote Flyout */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              x: side === "left" ? -12 : 12,
              scale: 0.92,
            }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{
              opacity: 0,
              x: side === "left" ? -12 : 12,
              scale: 0.92,
            }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`pointer-events-none absolute z-40 w-48 rounded-xl border bg-popover/95 p-2.5 text-left shadow-lg backdrop-blur-md ${
              side === "left"
                ? "left-full ml-3"
                : "right-full mr-3"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span
                className="size-2 rounded-full shrink-0"
                style={{ backgroundColor: char.color }}
              />
              <span className="text-xs font-semibold text-foreground truncate">
                {char.name}
              </span>
            </div>

            <p className="mt-1 font-serif text-[11px] italic leading-snug text-foreground/90">
              &ldquo;{char.quote}&rdquo;
            </p>

            <div className="mt-1.5 flex items-center justify-between border-t border-dashed pt-1 text-[9px] font-mono text-muted-foreground">
              <span>{char.series}</span>
              <span
                className="font-semibold"
                style={{ color: char.color }}
              >
                {char.tag}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AnimeSidebar() {
  return (
    <>
      {/* Left Sidebar Characters */}
      <aside
        aria-label="Anime companions left sidebar"
        className="pointer-events-auto fixed top-24 left-3 lg:left-5 xl:left-8 z-30 hidden lg:flex flex-col gap-3.5 select-none"
      >
        <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground/50 uppercase pl-1">
          // HEROES
        </span>
        {LEFT_CHARACTERS.map((char) => (
          <CharacterGutterPill key={char.id} char={char} side="left" />
        ))}
      </aside>

      {/* Right Sidebar Characters */}
      <aside
        aria-label="Anime companions right sidebar"
        className="pointer-events-auto fixed top-24 right-3 lg:right-5 xl:right-8 z-30 hidden lg:flex flex-col gap-3.5 select-none"
      >
        <span className="text-[9px] font-mono font-bold tracking-widest text-muted-foreground/50 uppercase pr-1 text-right">
          // LEGENDS
        </span>
        {RIGHT_CHARACTERS.map((char) => (
          <CharacterGutterPill key={char.id} char={char} side="right" />
        ))}
      </aside>
    </>
  );
}
