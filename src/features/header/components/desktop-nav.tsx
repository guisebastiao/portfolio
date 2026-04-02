import { useActiveSection } from "@/features/header/hooks/use-active-section";
import { useLanguage } from "@/features/header/hooks/use-language";
import { NAV_ITEMS } from "@/features/header/constants/nav-items";
import { NavItem } from "@/features/header/components/nav-item";
import { useCallback } from "react";

interface DesktopNavProps {
  setMenuOpen: (open: boolean) => void;
}

export const DesktopNav = ({ setMenuOpen }: DesktopNavProps) => {
  const { language } = useLanguage();
  const { active } = useActiveSection();

  const navItems = NAV_ITEMS[language];

  const handleNavigate = useCallback((index: number) => {
    setMenuOpen(false);

    const target = document.querySelectorAll("[data-container]")[
      index
    ] as HTMLElement;

    if (!target) return;

    const offset = 64;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return (
    <nav className="hidden items-center gap-4 md:flex">
      {navItems.map((label, index) => (
        <NavItem
          key={label}
          label={label}
          active={active === index}
          onClick={() => handleNavigate(index)}
        />
      ))}
    </nav>
  );
};
