"use client";

import { THEME_TOGGLE_ICON_CLASSES } from "@/features/header/constants/theme-toggle-constant";
import { useTrackEvents } from "@/features/header/hooks/use-track-events";
import { Button } from "@/shared/components/ui/button";
import { useTheme } from "@/shared/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const { changedTheme } = useTrackEvents();

  const handleToggleTheme = () => {
    changedTheme(theme);
    toggleTheme();
  };

  return (
    <Button
      size="icon-lg"
      variant="outline"
      onClick={handleToggleTheme}
      className="transition-none"
    >
      <Sun
        className={twMerge(
          THEME_TOGGLE_ICON_CLASSES.icon,
          theme === "dark" ? THEME_TOGGLE_ICON_CLASSES.active : THEME_TOGGLE_ICON_CLASSES.inactive,
        )}
      />
      <Moon
        className={twMerge(
          THEME_TOGGLE_ICON_CLASSES.icon,
          theme === "light" ? THEME_TOGGLE_ICON_CLASSES.active : THEME_TOGGLE_ICON_CLASSES.inactive,
        )}
      />
    </Button>
  );
};
