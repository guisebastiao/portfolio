"use client";

import { ThemeContext } from "@/shared/context/theme-context";
import { useContext } from "react";

export const useTheme = () => {
  return useContext(ThemeContext);
};
