import { Language, NAV_ITEMS } from "@/features/header/constants/nav-items";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export const useLanguage = (): { language: Language } => {
  const { i18n } = useTranslation();

  const language = useMemo(() => {
    const lang = i18n.language.split("-")[0];
    return lang in NAV_ITEMS ? (lang as Language) : "pt";
  }, [i18n.language]);

  return { language };
};
