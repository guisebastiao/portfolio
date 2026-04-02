import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import pt from "@/shared/locales/pt.json";
import en from "@/shared/locales/en.json";

export const SUPPORTED_LANGUAGES = ["pt", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "pt";
const STORAGE_KEY = "app_language";

const resources = {
  pt: { translation: pt },
  en: { translation: en },
} as const;

const isValidLanguage = (lng: unknown): lng is Language => {
  return (
    typeof lng === "string" &&
    (SUPPORTED_LANGUAGES as readonly string[]).includes(lng)
  );
};

const normalizeLanguage = (lng: string): Language => {
  const base = lng.split("-")[0];
  return isValidLanguage(base) ? base : DEFAULT_LANGUAGE;
};

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const stored = localStorage.getItem(STORAGE_KEY);

  if (isValidLanguage(stored)) return stored;

  const browserLang = navigator.language;
  const normalized = normalizeLanguage(browserLang);

  localStorage.setItem(STORAGE_KEY, normalized);
  return normalized;
};

const applyHtmlAttributes = (lng: Language) => {
  const html = document.documentElement;
  html.lang = lng === "pt" ? "pt-BR" : "en";
};

const initialLanguage = getInitialLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

if (typeof window !== "undefined") {
  applyHtmlAttributes(initialLanguage);
}

i18n.on("languageChanged", (lng) => {
  const normalized = normalizeLanguage(lng);
  localStorage.setItem(STORAGE_KEY, normalized);
  applyHtmlAttributes(normalized);
});

export default i18n;
