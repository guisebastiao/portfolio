"use client";

import { LANGUAGE_COOKIE_KEY, type Language } from "@/shared/lib/language";
import { PropsWithChildren, useEffect } from "react";
import { i18n } from "@/shared/lib/i18n";
import cookies from "js-cookie";

type LanguageProviderProps = PropsWithChildren<{
  initialLanguage: Language;
}>;

export const LanguageProvider = ({ initialLanguage, children }: LanguageProviderProps) => {
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;

      cookies.set(LANGUAGE_COOKIE_KEY, lng, {
        path: "/",
        sameSite: "strict",
        expires: 365,
      });
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  useEffect(() => {
    if (i18n.language !== initialLanguage) {
      void i18n.changeLanguage(initialLanguage);
    }
  }, [initialLanguage]);

  return children;
};
