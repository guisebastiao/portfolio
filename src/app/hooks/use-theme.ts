import { ThemeContext } from "@/app/providers/theme-provider";
import { useContext } from "react";

export const useTheme = () => {
  return useContext(ThemeContext);
};
