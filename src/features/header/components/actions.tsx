"use client";

import { LanguageToggle } from "@/features/header/components/language-toggle";
import { ThemeToggle } from "@/features/header/components/theme-toggle";
import { MenuToggle } from "@/features/header/components/menu-toggle";

type ActionsProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export const Actions = ({ menuOpen, onToggleMenu }: ActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      <LanguageToggle />
      <ThemeToggle />
      <MenuToggle open={menuOpen} onToggle={onToggleMenu} />
    </div>
  );
};
