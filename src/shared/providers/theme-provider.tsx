"use client";

import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { THEME_COOKIE_KEY, Theme, themes } from "@/shared/lib/theme";
import { ThemeContext } from "@/shared/context/theme-context";
import cookies from "js-cookie";

type ThemeProviderProps = PropsWithChildren<{
  initialTheme: Theme;
  onToggleTheme?: (theme: Theme) => void;
}>;

export const ThemeProvider = ({ initialTheme, children, onToggleTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    const next = theme === themes.light ? themes.dark : themes.light;

    const update = () => {
      document.documentElement.classList.replace(theme, next);

      cookies.set(THEME_COOKIE_KEY, next, {
        path: "/",
        sameSite: "strict",
        expires: 365,
      });

      setTheme(next);
      onToggleTheme?.(next);
    };

    if (document.startViewTransition) {
      document.startViewTransition(update);
    } else {
      update();
    }
  }, [theme, onToggleTheme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
