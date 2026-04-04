import { Button } from "@/shared/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <Button size="icon-sm" variant="ghost" onClick={onToggle}>
    <Sun
      className={twMerge(
        "absolute size-5 transition-opacity",
        theme === "dark" ? "opacity-100" : "opacity-0",
      )}
    />
    <Moon
      className={twMerge(
        "absolute size-5 transition-opacity",
        theme === "light" ? "opacity-100" : "opacity-0",
      )}
    />
  </Button>
);
