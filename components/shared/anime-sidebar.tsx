"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Flame, Sparkles, Swords, Eye, X, Volume2, ShieldCheck, Heart, Trophy, Target } from "lucide-react";

export type AnimeId = "naruto" | "gojo" | "levi" | "isagi" | "ego" | "asta" | "ichigo";

export interface FullCharacter {
  id: AnimeId;
  name: string;
  jpName: string;
  title: string;
  roleTag: string;
  series: string;
  color: string;
  gradient: string;
  image: string;
  width: number;
  height: number;
  quotes: string[];
  signatureMove: string;
  vibe: string;
  jayanthNote: string;
}

export const ANIME_LEGENDS: Record<AnimeId, FullCharacter> = {
  naruto: {
    id: "naruto",
    name: "Naruto Uzumaki",
    jpName: "うずまきナルト",
    title: "THE LEGEND · 7TH HOKAGE",
    roleTag: "Jayanth's #1 Life Legend",
    series: "Naruto Shippuden",
    color: "#f97316",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    image: "/images/anime/naruto-full.png",
    width: 1200,
    height: 1800,
    quotes: [
      "Dattebayo! I never give up, and I never go back on my word — that's my ninja way!",
      "Hard work is worthless for those that don't believe in themselves.",
      "If you don't like your destiny, don't accept it. Have the courage to change it!",
      "I'm going to become Hokage, believe it!",
    ],
    signatureMove: "Rasengan & Nine-Tails Sage Mode",
    vibe: "Unbreakable Willpower & Relentless Grind",
    jayanthNote:
      "Naruto is my true legend. Starting from rock bottom with zero advantages, turning isolation into strength, and never giving up no matter how impossible the odds. That's the mindset I bring to engineering.",
  },
  gojo: {
    id: "gojo",
    name: "Satoru Gojo",
    jpName: "五条 悟",
    title: "THE HONORED ONE · SPECIAL GRADE",
    roleTag: "The Peak of Cool & Mastery",
    series: "Jujutsu Kaisen",
    color: "#a855f7",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    image: "/images/anime/gojo-full.png",
    width: 638,
    height: 969,
    quotes: [
      "Throughout heaven and earth, I alone am the honored one.",
      "Don't worry, I'm the strongest.",
      "Domain Expansion: Unlimited Void!",
      "Dying to win and risking death to win are completely different.",
    ],
    signatureMove: "Limitless · Hollow Purple (茈) & Infinite Void",
    vibe: "Effortless Confidence & Absolute Excellence",
    jayanthNote:
      "Gojo represents god-tier technical capability with effortless swagger. Playful, calm under pressure, and always knowing he has the depth to back up every word.",
  },
  levi: {
    id: "levi",
    name: "Levi Ackerman",
    jpName: "リヴァイ・アッカーマン",
    title: "CAPTAIN · HUMANITY'S STRONGEST",
    roleTag: "Cold Precision & Execution",
    series: "Attack on Titan",
    color: "#0284c7",
    gradient: "from-cyan-500 via-sky-500 to-emerald-500",
    image: "/images/anime/levi-full.png",
    width: 889,
    height: 1200,
    quotes: [
      "Dedicate your heart. Make the choice you won't regret.",
      "The only thing we're allowed to do is believe that we won't regret the choice we made.",
      "If you don't want to die, think!",
      "No regrets. Moving forward is the only way.",
    ],
    signatureMove: "Survey Corps 3D Maneuver Dual Blade Spin",
    vibe: "Ruthless Discipline & Flawless Execution",
    jayanthNote:
      "Levi is pure focus and no-excuses execution. When everything is on the line, he cuts through chaos with razor-sharp discipline and zero hesitation.",
  },
  isagi: {
    id: "isagi",
    name: "Yoichi Isagi",
    jpName: "潔 世一",
    title: "METAVISION · BLUE LOCK ACE",
    roleTag: "Spatial Intuition & Direct Shot",
    series: "Blue Lock",
    color: "#10b981",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    image: "/images/anime/isagi-full.png",
    width: 1780,
    height: 2048,
    quotes: [
      "I can see it... The pieces of the puzzle connecting perfectly!",
      "I will devour you all and become the world's number one striker!",
      "Smell the goal. Overwrite your subconscious.",
      "The equation for victory is already complete in my mind.",
    ],
    signatureMove: "Metavision & Direct Shot Volley",
    vibe: "Relentless Analytical Devouring & Adaptation",
    jayanthNote:
      "Isagi represents analytical evolution. When facing impossible problems, he pieces together the puzzle, reads the field with Metavision, and reinvents himself on the fly.",
  },
  ego: {
    id: "ego",
    name: "Jinpachi Ego",
    jpName: "絵心 甚八",
    title: "MASTERMIND · BLUE LOCK ARCHITECT",
    roleTag: "Uncompromising Ambition",
    series: "Blue Lock",
    color: "#06b6d4",
    gradient: "from-cyan-500 via-sky-600 to-blue-700",
    image: "/images/anime/ego-full.png",
    width: 1780,
    height: 2048,
    quotes: [
      "Devour or be devoured. That is the essence of raw ambition.",
      "Lock off! Abandon common sense and create your own formula for victory.",
      "Talent is the ability to prove your own genius.",
      "Unpolished gems... let me forge you into egoists.",
    ],
    signatureMove: "Blue Lock Philosophy & Formula for Genius",
    vibe: "Cold Strategic Intellect & Zero Compromise",
    jayanthNote:
      "Ego rejects mediocrity. He designs closed-loop systems that force exponential growth through ruthless feedback loops and extreme clarity.",
  },
  asta: {
    id: "asta",
    name: "Asta",
    jpName: "アスタ",
    title: "BLACK BULLS · MAGIC KNIGHT",
    roleTag: "Relentless Physical Mastery",
    series: "Black Clover",
    color: "#eab308",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    image: "/images/anime/asta-full.png",
    width: 1024,
    height: 1435,
    quotes: [
      "My magic is never giving up! I'll become the Wizard King!",
      "Even without magical power, I will push past my limits!",
      "Right now, I'm going to surpass my limits!",
    ],
    signatureMove: "Demon-Slayer Sword & Anti-Magic",
    vibe: "Limit-Breaking Work Ethic & Pure Heart",
    jayanthNote:
      "Asta shows that when everyone else relies on inborn privilege, raw unyielding effort and muscle memory will surpass natural talent every single time.",
  },
  ichigo: {
    id: "ichigo",
    name: "Ichigo Kurosaki",
    jpName: "黒崎 一護",
    title: "SUBSTITUTE SOUL REAPER · BANKAI",
    roleTag: "Protector of All",
    series: "Bleach",
    color: "#f59e0b",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    image: "/images/anime/ichigo-full.png",
    width: 730,
    height: 1095,
    quotes: [
      "If fate is a millstone, we are the grist. Protect what matters most!",
      "Bankai! Tensa Zangetsu!",
      "I'm not fighting because I want to win. I'm fighting because I have to win!",
    ],
    signatureMove: "Getsuga Tensho & Final Getsuga",
    vibe: "Spiritual Fortitude & Fierce Loyalty",
    jayanthNote:
      "Ichigo fights not for glory or titles, but purely to protect the people he loves. That protective, foundational loyalty is what anchors my engineering.",
  },
};

/**
 * Mobile Interactive Sheet / Modal to view Full-Body Anime Legends
 */
function MobileCharacterModal({
  isOpen,
  onClose,
  initialId = "naruto",
}: {
  isOpen: boolean;
  onClose: () => void;
  initialId?: AnimeId;
}) {
  const [activeTab, setActiveTab] = useState<AnimeId>(initialId);
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    setActiveTab(initialId);
    setQuoteIdx(0);
  }, [initialId, isOpen]);

  const char = ANIME_LEGENDS[activeTab];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl border bg-card/95 shadow-2xl backdrop-blur-xl"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span
                className="size-2.5 rounded-full"
                style={{ backgroundColor: char.color }}
              />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                Anime Legends & Inspirations
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Character Selector Tabs */}
          <div className="flex border-b bg-muted/30 p-1.5 gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(["naruto", "gojo", "levi", "isagi", "ego", "asta", "ichigo"] as const).map((key) => {
              const c = ANIME_LEGENDS[key];
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveTab(key);
                    setQuoteIdx(0);
                  }}
                  className={`flex-1 flex items-center justify-center gap-1 rounded-xl py-2 px-2 text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-card text-foreground shadow-sm border"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  <span>{c.name.split(" ")[0]}</span>
                  {key === "naruto" && (
                    <span className="rounded bg-amber-500/15 px-1 py-0.2 text-[8px] font-mono text-amber-600 dark:text-amber-400">
                      #1
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-5">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Full Body Standing Render */}
              <div
                className="relative flex h-64 sm:h-72 w-full sm:w-44 items-end justify-center rounded-2xl border bg-muted/20 p-2 overflow-hidden"
                style={{
                  boxShadow: `0 0 24px ${char.color}20`,
                }}
              >
                {/* Aura Glow */}
                <div
                  className="absolute inset-0 opacity-20 blur-xl"
                  style={{ backgroundColor: char.color }}
                />
                <Image
                  src={char.image}
                  alt={char.name}
                  width={char.width}
                  height={char.height}
                  className="relative z-10 max-h-full w-auto object-contain object-bottom drop-shadow-lg"
                />
              </div>

              {/* Character Details & Motivation */}
              <div className="flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="rounded px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase text-white"
                      style={{ backgroundColor: char.color }}
                    >
                      {char.roleTag}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {char.series}
                    </span>
                  </div>

                  <h3 className="mt-1 text-lg font-bold text-foreground">
                    {char.name} <span className="text-xs font-normal text-muted-foreground">{char.jpName}</span>
                  </h3>
                  <p className="text-[10px] font-mono font-semibold" style={{ color: char.color }}>
                    {char.title}
                  </p>
                </div>

                {/* Signature Technique & Vibe */}
                <div className="mt-2.5 rounded-xl border bg-card/60 p-2.5 text-xs">
                  <p className="font-mono text-[10px] text-muted-foreground">
                    ⚡ <span className="font-semibold text-foreground">Technique:</span> {char.signatureMove}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-1">
                    🔥 <span className="font-semibold text-foreground">Aura:</span> {char.vibe}
                  </p>
                </div>

                {/* Quote Box */}
                <div
                  onClick={() => setQuoteIdx((prev) => (prev + 1) % char.quotes.length)}
                  className="mt-2.5 cursor-pointer rounded-xl border bg-muted/30 p-2.5 transition-all hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Volume2 className="size-3" style={{ color: char.color }} />
                      <span>Iconic Voice Line</span>
                    </span>
                    <span className="underline">tap to cycle</span>
                  </div>
                  <p className="mt-1 font-serif text-xs italic text-foreground leading-snug">
                    &ldquo;{char.quotes[quoteIdx]}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Jayanth's Personal Connection */}
            <div className="mt-4 rounded-2xl border border-dashed border-border/80 bg-card/50 p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Heart className="size-3.5 text-red-500 fill-red-500" />
                <span>Why Jayanth Loves {char.name.split(" ")[0]}</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {char.jayanthNote}
              </p>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between border-t bg-muted/20 px-5 py-3 text-xs font-mono text-muted-foreground">
            <span>Anime & Manga Legends</span>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-foreground px-3 py-1 text-xs font-medium text-background hover:opacity-90"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/**
 * Root AnimeSidebar Component
 * On Mobile (< min-[72rem]):
 * Provides the interactive bottom floating dock button to open the full-screen character standees.
 * Desktop side gutters are handled dynamically per section by SectionAnimeCompanion
 * to scroll with each section and guarantee zero collision with section notes!
 */
export function AnimeSidebar() {
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const [mobileInitialId, setMobileInitialId] = useState<AnimeId>("naruto");

  const openMobileView = (id: AnimeId) => {
    setMobileInitialId(id);
    setMobileModalOpen(true);
  };

  return (
    <>
      {/* ========================================================
          PHONE / MOBILE DEVICES (Screen width < 72rem)
          Interactive floating anime companion pill and roster
          ======================================================== */}
      <div className="block min-[72rem]:hidden select-none">
        {/* Mobile Floating Companion Bar: Tap to open Full Standee Roster */}
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40">
          <motion.button
            type="button"
            whileTap={{ scale: 0.94 }}
            onClick={() => openMobileView("naruto")}
            className="flex items-center gap-2 rounded-full border border-foreground/20 bg-card/90 px-3.5 py-1.5 shadow-lg backdrop-blur-md text-[11px] font-mono font-semibold text-foreground hover:bg-card"
          >
            <span className="flex size-2 rounded-full bg-amber-500 animate-pulse" />
            <span>🍥 Naruto • 👁️ Gojo • 🧩 Isagi • 👓 Ego • ⚔️ Levi</span>
            <span className="rounded bg-muted px-1.5 text-[9px] text-muted-foreground">legends</span>
          </motion.button>
        </div>
      </div>

      {/* Interactive Mobile Full-Screen Standee Modal */}
      <MobileCharacterModal
        isOpen={mobileModalOpen}
        onClose={() => setMobileModalOpen(false)}
        initialId={mobileInitialId}
      />
    </>
  );
}
