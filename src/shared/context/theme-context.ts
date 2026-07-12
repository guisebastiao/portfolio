"use client";

import { Theme } from "@/shared/lib/theme";
import { createContext } from "react";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeState>({} as ThemeState);
