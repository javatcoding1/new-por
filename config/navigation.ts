import type { SiteNavigationItem } from "@/config/types";

export const navigationConfig = {
  label: "Site navigation",
  menu: "Menu",
  close: "Close navigation",
  search: "Open command palette",
  backToTop: "Back to top",
  githubLabel: "View source on GitHub (opens in a new tab)",
};

export const navigationItems: SiteNavigationItem[] = [
  { id: "home", label: "Home", href: "/", icon: "home", order: 0 },
  { id: "helixque", label: "HelixQue ★ 140+", href: "https://github.com/HXQLabs/HelixQue", icon: "git", order: 1 },
  { id: "components", label: "Components", href: "/components", icon: "stack", order: 2 },
  { id: "research", label: "Research", href: "/research", icon: "terminal", order: 3 },
];
