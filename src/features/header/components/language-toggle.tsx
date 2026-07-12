"use client";

import { LANGUAGE_TOGGLE_TEXT_CLASSES } from "@/features/header/constants/language-toggle.constant";
import { useTrackEvents } from "@/features/header/hooks/use-track-events";
import { Button } from "@/shared/components/ui/button";
import { languages } from "@/shared/lib/language";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const { changedLanguage } = useTrackEvents();

  const isPortuguese = i18n.language === languages.ptBR;

  const handleChangeLanguage = () => {
    const language = isPortuguese ? languages.enUS : languages.ptBR;
    i18n.changeLanguage(language);
    changedLanguage(language);
  };

  return (
    <Button
      size="icon-lg"
      variant="outline"
      onClick={handleChangeLanguage}
      className="transition-none"
    >
      <span
        className={twMerge(
          LANGUAGE_TOGGLE_TEXT_CLASSES.text,
          i18n.language === languages.ptBR
            ? LANGUAGE_TOGGLE_TEXT_CLASSES.active
            : LANGUAGE_TOGGLE_TEXT_CLASSES.inactive,
        )}
      >
        EN
      </span>
      <span
        className={twMerge(
          LANGUAGE_TOGGLE_TEXT_CLASSES.text,
          i18n.language === languages.enUS
            ? LANGUAGE_TOGGLE_TEXT_CLASSES.active
            : LANGUAGE_TOGGLE_TEXT_CLASSES.inactive,
        )}
      >
        BR
      </span>
    </Button>
  );
};
