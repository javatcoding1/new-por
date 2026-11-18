"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { VerseText } from "@/components/verse-text";
import { heroConfig } from "@/config/hero";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { MOTION_EASE } from "@/lib/motion";
import { RotatingGlobe } from "./rotating-globe";
import { motion, type Variants } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useHaptic } from "react-haptic";
import { ArrowDown, Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(3px)",
    y: 8,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: MOTION_EASE,
      delay,
      opacity: { duration: 0.28, ease: MOTION_EASE, delay },
    },
  }),
};

const locationTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: siteConfig.personal.location.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

const TECH_HIGHLIGHTS = [
  { label: "Qwen LLM Gateway", icon: "⚡" },
  { label: "NVIDIA H200 (140GB)", icon: "🖥️" },
  { label: "Autonomous PR Agents", icon: "🤖" },
  { label: "Next.js & TypeScript", icon: "🌐" },
  { label: "Playwright Automation", icon: "🧪" },
  { label: "HelixQue ★ 140+", icon: "★" },
];

export function Hero() {
  const { vibrate } = useHaptic();
  const vibrateAudio = useRef<HTMLAudioElement>(null);
  const lastWaveTrackRef = useRef<number>(0);
  const [isLocationHovered, setIsLocationHovered] = useState(false);
  const [isLocationTooltipOpen, setIsLocationTooltipOpen] = useState(false);
  const [locationTime, setLocationTime] = useState<string | null>(null);

  const handleWaveAudio = (play: boolean, interactionType: "hover" | "touch" = "hover") => {
    const audio = vibrateAudio.current;
    if (!audio) return;

    if (play) {
      const now = Date.now();
      if (now - lastWaveTrackRef.current > 5000) {
        trackEvent("hero_wave_hovered", { interaction_type: interactionType });
        lastWaveTrackRef.current = now;
      }
      audio.currentTime = 0;
      audio.playbackRate = 1;
      audio.volume = 0.6;
      audio.play().catch(() => {});
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  };

  useEffect(() => {
    if (!isLocationTooltipOpen) return;

    const updateLocationTime = () => {
      setLocationTime(locationTimeFormatter.format(new Date()));
    };

    updateLocationTime();
    const intervalId = window.setInterval(updateLocationTime, 1000);
    return () => window.clearInterval(intervalId);
  }, [isLocationTooltipOpen]);

  useEffect(() => {
    const vibrate = vibrateAudio.current;
    return () => {
      vibrate?.pause();
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <motion.section
      className="relative z-20 space-y-5 px-6 pt-4"
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-start gap-4">
        {/* Status pill & location */}
        <motion.div
          data-reveal=""
          variants={textVariants}
          custom={0.05}
          className="flex flex-wrap items-center gap-2 text-xs"
        >
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/20 px-3 py-1 text-muted-foreground backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-medium text-foreground">Associate Software Engineer @ Cubic</span>
          </div>

          <Tooltip onOpenChange={setIsLocationTooltipOpen}>
            <TooltipTrigger
              className="micro-transition flex min-h-6 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-dashed px-2.5 py-0.5 text-xs text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              onMouseEnter={() => setIsLocationHovered(true)}
              onMouseLeave={() => setIsLocationHovered(false)}
              onFocus={() => setIsLocationHovered(true)}
              onBlur={() => setIsLocationHovered(false)}
            >
              <RotatingGlobe isHovered={isLocationHovered} />
              <span>{siteConfig.personal.location.label}</span>
            </TooltipTrigger>
            <TooltipContent>
              <span className="font-mono text-xs tracking-wider">
                {locationTime ?? "--:--:--"} (IST)
              </span>
            </TooltipContent>
          </Tooltip>
        </motion.div>

        {/* Greeting & Name */}
        <div className="w-full min-w-0 space-y-2">
          <div className="flex items-center gap-3">
            <VerseText
              text={heroConfig.greeting}
              className="font-serif text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
              style={
                {
                  "--vt-ink": "var(--foreground)",
                  "--vt-blend": "var(--verse-text-blend, multiply)",
                  "--vt-leading": "inherit",
                } as CSSProperties
              }
            />
            <motion.span
              data-reveal=""
              variants={textVariants}
              className="no-js-visible flex items-center"
            >
              <span
                className="inline-block text-2xl leading-none cursor-pointer"
                onMouseEnter={() => {
                  vibrate();
                  handleWaveAudio(true, "hover");
                }}
                onMouseLeave={() => handleWaveAudio(false)}
                onFocus={() => handleWaveAudio(true, "hover")}
                onBlur={() => handleWaveAudio(false)}
                onTouchStart={() => handleWaveAudio(true, "touch")}
                onTouchEnd={() => handleWaveAudio(false)}
              >
                {typeof heroConfig.waveEmoji === "string" ? (
                  <span
                    className="inline-block hover:animate-wave"
                    style={{ transformOrigin: "70% 70%" }}
                  >
                    {heroConfig.waveEmoji}
                  </span>
                ) : (
                  <heroConfig.waveEmoji
                    size="1.2em"
                    style={{ display: "block" }}
                    className="transition-transform duration-200 ease-out motion-safe:hover:scale-110 motion-reduce:transition-none"
                    aria-hidden="true"
                    focusable="false"
                  />
                )}
              </span>
            </motion.span>
          </div>

          {/* Headline */}
          <motion.h1
            data-reveal=""
            className="no-js-visible text-lg font-semibold leading-snug tracking-tight text-foreground/90 sm:text-xl md:text-2xl text-balance"
            variants={textVariants}
            custom={0.12}
          >
            Associate Software Engineer at{" "}
            <span className="text-foreground underline decoration-primary/40 underline-offset-4">
              Cubic
            </span>
            , engineering enterprise LLM gateways & full-stack platforms.
          </motion.h1>

          {/* Description */}
          <motion.p
            data-reveal=""
            className="no-js-visible text-sm sm:text-base leading-relaxed text-muted-foreground"
            variants={textVariants}
            custom={0.18}
          >
            I architect unified access gateways for self-hosted{" "}
            <span className="font-medium text-foreground">Qwen</span> models, deploy autonomous AI
            PR review agents on{" "}
            <span className="font-medium text-foreground">NVIDIA H200 GPUs (140GB VRAM)</span>, and
            craft resilient full-stack systems with{" "}
            <span className="font-medium text-foreground">Next.js</span>,{" "}
            <span className="font-medium text-foreground">Node.js</span>, and{" "}
            <span className="font-medium text-foreground">Playwright</span>.
          </motion.p>
        </div>

        {/* Core capability highlight chips */}
        <motion.div
          data-reveal=""
          variants={textVariants}
          custom={0.24}
          className="flex flex-wrap gap-2 pt-1"
        >
          {TECH_HIGHLIGHTS.map((tech) => (
            <span
              key={tech.label}
              className="inline-flex items-center gap-1.5 rounded-lg border bg-muted/15 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-muted/30 hover:text-foreground"
            >
              <span className="text-xs">{tech.icon}</span>
              <span>{tech.label}</span>
            </span>
          ))}
        </motion.div>

        {/* Action Buttons Row */}
        <motion.div
          data-reveal=""
          variants={textVariants}
          custom={0.3}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow"
          >
            <span>Explore Projects</span>
            <ArrowDown className="size-3.5" />
          </button>

          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-xl border bg-background px-4 py-2.5 text-xs font-medium text-foreground transition-all hover:bg-muted/40 hover:border-foreground/30"
          >
            <Mail className="size-3.5 text-muted-foreground" />
            <span>Get in Touch</span>
          </button>

          <a
            href="https://github.com/javatcoding1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-dashed px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            <SiGithub className="size-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="size-3 opacity-60" />
          </a>
        </motion.div>
      </div>

      <audio src="/vibration.mp3" ref={vibrateAudio} loop preload="none" />
    </motion.section>
  );
}
