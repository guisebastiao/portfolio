export const NAV_ITEMS = {
  pt: ["Início", "Sobre", "Projetos", "Experiência", "Contato"],
  en: ["Home", "About", "Projects", "Experience", "Contact"],
} as const;

export type Language = keyof typeof NAV_ITEMS;
