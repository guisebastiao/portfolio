export const LANGUAGES = [
  {
    name: "about:languages.portuguese.name",
    level: "about:languages.portuguese.level",
  },
  {
    name: "about:languages.english.name",
    level: "about:languages.english.level",
  },
] as const;

export type Language = (typeof LANGUAGES)[number];
