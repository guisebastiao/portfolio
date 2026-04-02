import { LanguageToggle } from "@/features/header/components/language-toggle";
import { ThemeToggle } from "@/features/header/components/theme-toggle";
import { MenuToggle } from "@/features/header/components/menu-toggle";
import { useLanguage } from "@/features/header/hooks/use-language";
import { useTheme } from "@/app/hooks/use-theme";
import { useCallback } from "react";
import i18n from "@/i18n";

interface ActionsProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export const Actions = ({ menuOpen, setMenuOpen }: ActionsProps) => {
  const { theme, toggleTheme } = useTheme();

  const { language } = useLanguage();

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(language === "pt" ? "en" : "pt");
  }, [i18n, language]);

  const toggleMenuOpen = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen, setMenuOpen]);

  return (
    <div className="flex items-center gap-2">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <MenuToggle open={menuOpen} onToggle={toggleMenuOpen} />
    </div>
  );
};
