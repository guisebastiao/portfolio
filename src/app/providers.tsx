"use client";

import { LanguageProvider } from "@/shared/providers/language-provider";
import { LenisProvider } from "@/shared/providers/lenis-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "@/shared/components/ui/sonner";
import { PropsWithChildren, useState } from "react";
import { Language } from "@/shared/lib/language";
import { Theme } from "@/shared/lib/theme";
import { env } from "@/shared/config/env";
import "@/shared/lib/i18n";

type ProvidersProps = PropsWithChildren<{
  initialTheme: Theme;
  initialLanguage: Language;
}>;

export const Providers = ({ initialTheme, initialLanguage, children }: ProvidersProps) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <ThemeProvider initialTheme={initialTheme} onToggleTheme={setTheme}>
      <LanguageProvider initialLanguage={initialLanguage}>
        <LenisProvider>{children}</LenisProvider>
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GA_ID} />
        <Toaster theme={theme} />
      </LanguageProvider>
    </ThemeProvider>
  );
};
