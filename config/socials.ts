import type { SocialLink } from "@/config/types";

export const socialSectionConfig = {
  title: "Socials",
};

export const socialsConfig: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    handle: "@javatcoding1",
    href: "https://github.com/javatcoding1",
    icon: "github",
    action: "external",
    order: 1,
    enabled: true,
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "jayanth-madhav",
    href: "https://linkedin.com/in/jayanth-madhav",
    icon: "linkedin",
    action: "external",
    order: 2,
    enabled: true,
  },
  {
    id: "email",
    platform: "Email",
    handle: "jayanthmadhav1@gmail.com",
    href: "mailto:jayanthmadhav1@gmail.com",
    icon: "gmail",
    action: "mailto",
    tooltipDefault: "Send email",
    order: 3,
    enabled: true,
  },
  {
    id: "x",
    platform: "X (Twitter)",
    handle: "@ejayanthmadhav",
    href: "https://x.com/ejayanthmadhav",
    icon: "x",
    action: "external",
    tooltipDefault: "Visit X profile",
    order: 4,
    enabled: true,
  },
  {
    id: "buymeacoffee",
    platform: "Buy Me a Coffee",
    handle: "jayanthmadhav",
    href: "https://buymeacoffee.com/jayanthmadhav",
    icon: "coffee",
    action: "external",
    tooltipDefault: "Support on Buy Me a Coffee",
    order: 5,
    enabled: true,
  },
];
