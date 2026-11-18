import { GitHubActivity } from "@/components/landing/github-activity";
import { githubSectionConfig } from "@/config/github";
import { siteConfig } from "@/config/site";
import { fetchGithubData } from "@/lib/github/github";
import { buildActivityCalendar } from "@/lib/github/github-activity";
import { revealOnMount } from "@/lib/motion";
import * as motion from "motion/react-client";
import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

export async function GitHubSection() {
  const contributions = await fetchGithubData(
    siteConfig.personal.githubUsername,
  );

  const calendar = buildActivityCalendar(
    contributions,
    githubSectionConfig.minWeeks,
  );
  if (!calendar) {
    return null;
  }

  return (
    <section className="border-t border-dashed pt-8">
      <div className="px-6 mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="section-heading mb-1">
            Open Source & Activity
          </h2>
          <p className="text-xs text-muted-foreground">
            Continuous engineering and contributions across repositories
          </p>
        </div>

        <a
          href={`https://github.com/${siteConfig.personal.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-lg border bg-muted/20 px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:bg-muted/40 hover:text-foreground"
        >
          <SiGithub className="size-3.5" />
          <span>@{siteConfig.personal.githubUsername}</span>
          <ArrowUpRight className="size-3 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="px-6 pb-2">
        <div className="rounded-xl border bg-card/30 p-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            className="no-js-visible min-w-[640px]"
            {...revealOnMount({ y: 0 })}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <GitHubActivity key={calendar.end} calendar={calendar} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
