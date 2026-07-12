"use client";

import { trackEvent, GA_EVENTS, AppSection } from "@/shared/lib/analytics";
import { Language } from "@/shared/lib/language";
import { Theme } from "@/shared/lib/theme";

export const useTrackEvents = () => {
  const changedSectionVisibility = (section: AppSection) => {
    trackEvent(GA_EVENTS.NAVBAR_CLICKED, { section });
  };

  const changedTheme = (theme: Theme) => {
    trackEvent(GA_EVENTS.THEME_CHANGED, {
      theme,
    });
  };

  const changedLanguage = (language: Language) => {
    trackEvent(GA_EVENTS.THEME_CHANGED, {
      language,
    });
  };

  return { changedSectionVisibility, changedTheme, changedLanguage };
};
