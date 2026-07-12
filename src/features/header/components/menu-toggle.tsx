"use client";

import { MENU_TOGGLE_ICON_CLASSES } from "@/features/header/constants/menu-toggle-constant";
import { Button } from "@/shared/components/ui/button";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react";

type MenuToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export const MenuToggle = ({ open, onToggle }: MenuToggleProps) => {
  return (
    <Button
      size="icon-lg"
      variant="outline"
      onClick={onToggle}
      className="z-100 md:hidden transition-none"
    >
      <X
        className={twMerge(
          MENU_TOGGLE_ICON_CLASSES.icon,
          open ? MENU_TOGGLE_ICON_CLASSES.active : MENU_TOGGLE_ICON_CLASSES.inactive,
        )}
      />
      <Menu
        className={twMerge(
          MENU_TOGGLE_ICON_CLASSES.icon,
          open ? MENU_TOGGLE_ICON_CLASSES.inactive : MENU_TOGGLE_ICON_CLASSES.active,
        )}
      />
    </Button>
  );
};
