import { useLockBodyScroll } from "@/features/header/hooks/use-lock-body-scroll";
import { useActiveSection } from "@/features/header/hooks/use-active-section";
import { MobileMenu } from "@/features/header/components/mobile-menu";
import { DesktopNav } from "@/features/header/components/desktop-nav";
import { useLanguage } from "@/features/header/hooks/use-language";
import { NAV_ITEMS } from "@/features/header/constants/nav-items";
import { Actions } from "@/features/header/components/actions";
import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";

export const Header = () => {
  const { language } = useLanguage();
  const { active } = useActiveSection();

  const [menuOpen, setMenuOpen] = useState(false);

  useLockBodyScroll(menuOpen);

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
    <header className="fixed top-0 left-0 z-50 h-16 w-full flex justify-center border-b bg-background">
      <div className="max-w-7xl flex-1 flex items-center justify-between px-3.5">
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => handleNavigate(0)}
        >
          <div className="relative size-9 overflow-hidden rounded-full border-2 border-muted-foreground">
            <img
              src="/profile.jpg"
              alt="profile"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <h1 className="text-[15px] font-semibold text-muted-foreground">
            <strong>Gui.</strong> Sebastião
          </h1>
        </div>
        <DesktopNav setMenuOpen={setMenuOpen} />
        <Actions menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              items={navItems}
              active={active}
              onNavigate={handleNavigate}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
