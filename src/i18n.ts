import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

export const SUPPORTED_LANGUAGES = ["pt", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export const DEFAULT_LANGUAGE: Language = "pt";

const STORAGE_KEY = "app_language";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    lng: "pt",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
})

const language = localStorage.getItem(STORAGE_KEY);

if (language === null) {
  localStorage.setItem(STORAGE_KEY, "pt");
} else {
  i18n.changeLanguage(language);
}

export default i18n;
