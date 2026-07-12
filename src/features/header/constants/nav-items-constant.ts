export const navItems = [
  "nav.home",
  "nav.about",
  "nav.project",
  "nav.experience",
  "nav.contact",
] as const;

export type NavItems = (typeof navItems)[number];
