import { DEFAULT_LANGUAGE, resources } from "@/shared/lib/language";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: [
      "header",
      "hero",
      "about",
      "project",
      "experience",
      "contact",
      "footer",
      "hooks",
      "pages",
      "schemas",
    ],
    interpolation: {
      escapeValue: false,
    },
  });
}

export { i18n };
