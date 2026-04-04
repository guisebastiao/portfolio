import { Button } from "@/shared/components/ui/button";
import { twMerge } from "tailwind-merge";
import type { Language } from "@/i18n";

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      className="transition-none"
      onClick={onToggle}
    >
      <span
        className={twMerge(
          "absolute text-sm font-bold transition-opacity",
          language === "pt" ? "opacity-100" : "opacity-0",
        )}
      >
        EN
      </span>
      <span
        className={twMerge(
          "absolute text-sm font-bold transition-opacity",
          language === "en" ? "opacity-100" : "opacity-0",
        )}
      >
        BR
      </span>
    </Button>
  );
};
