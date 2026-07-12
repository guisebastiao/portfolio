"use client";

import type { NavItems } from "@/features/header/constants/nav-items-constant";
import { NavItem } from "@/features/header/components/nav-item";

type DesktopNavProps = {
  items: readonly NavItems[];
  active: number;
  onNavigate: (index: number) => void;
};

export const DesktopNav = ({ items, active, onNavigate }: DesktopNavProps) => {
  return (
    <nav className="hidden items-center gap-4 md:flex">
      {items.map((label, index) => (
        <NavItem
          key={label}
          label={label}
          active={active === index}
          onClick={() => onNavigate(index)}
        />
      ))}
    </nav>
  );
};
