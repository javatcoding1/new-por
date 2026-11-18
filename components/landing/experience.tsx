"use client";

import { experienceConfig, experienceSectionConfig } from "@/config/experience";
import { motion } from "motion/react";
import { Briefcase, ArrowUpRight, Sparkles, Star } from "lucide-react";

const enabledExperience = experienceConfig
  .filter((item) => item.enabled !== false)
  .sort((a, b) => a.order - b.order);

const ROLE_TECH_MAP: Record<string, string[]> = {
  cubic: ["Qwen LLM Gateway", "NVIDIA H200 (140GB)", "Next.js", "Playwright", "FastAPI"],
  helixque: ["WebRTC", "Socket.io", "TypeScript", "Node.js", "TURN/STUN", "★ 140+ Stars"],
  coursevita: ["Next.js", "React", "SSR", "Tailwind CSS"],
  edspread: ["React", "Node.js", "Express", "MongoDB"],
};

export function Experience() {
  if (!enabledExperience.length) {
    return null;
  }

  return (
    <section className="border-t border-dashed pt-8">
      <div className="px-6 mb-4 flex items-center justify-between">
        <div>
          <h2 className="section-heading mb-1">{experienceSectionConfig.title}</h2>
          <p className="text-xs text-muted-foreground">
            Engineering enterprise platforms, generative AI systems & open source
          </p>
        </div>
      </div>

      <div className="px-6 space-y-4">
        {enabledExperience.map((item, idx) => {
          const isCurrent = item.period.toLowerCase().includes("present");
          const isCubic = item.id === "cubic";
          const isHelixque = item.id === "helixque";
          const techTags = ROLE_TECH_MAP[item.id] || [];

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.06 }}
              className="group relative rounded-xl border bg-card/40 p-5 transition-all duration-200 hover:border-foreground/20 hover:bg-card hover:shadow-sm"
            >
              <div className="blueprint-bg pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-30" />

              <div className="relative z-10 flex flex-col gap-2.5">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-muted/30 text-muted-foreground group-hover:text-foreground">
                      <Briefcase className="size-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-foreground flex items-center gap-2">
                        <span>{item.role}</span>
                        {isCubic && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                        {isHelixque && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                            <Star className="size-2.5 fill-current" />
                            ★ 140+ Stars
                          </span>
                        )}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Period badge */}
                  <span className="rounded-md border bg-muted/20 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm leading-relaxed text-muted-foreground pt-1">
                  {item.summary}
                </p>

                {/* Highlights List */}
                {item.highlights?.length ? (
                  <ul className="space-y-1.5 pt-1 pl-2 text-xs leading-relaxed text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/60" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* Tech Badges */}
                {techTags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed">
                    {techTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-muted/40 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground group-hover:text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
