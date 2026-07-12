"use client";

import { useLockBodyScroll } from "@/features/header/hooks/use-lock-body-scroll";
import { useActiveSection } from "@/features/header/hooks/use-active-section";
import { useTrackEvents } from "@/features/header/hooks/use-track-events";
import { navItems } from "@/features/header/constants/nav-items-constant";
import { MobileMenu } from "@/features/header/components/mobile-menu";
import { DesktopNav } from "@/features/header/components/desktop-nav";
import { APP_SECTIONS, AppSection } from "@/shared/lib/analytics";
import { Actions } from "@/features/header/components/actions";
import { BaseImage } from "@/shared/components/base-image";
import profileImg from "@/assets/images/profile.webp";
import { AnimatePresence } from "motion/react";
import { useCallback, useState } from "react";

export const Header = () => {
  const { active } = useActiveSection();

  const [menuOpen, setMenuOpen] = useState(false);

  const { changedSectionVisibility } = useTrackEvents();

  useLockBodyScroll(menuOpen);

  const handleNavigate = useCallback(
    (index: number) => {
      setMenuOpen(false);

      const target = document.querySelectorAll("[data-container]")[index] as HTMLElement;

      const section = Object.keys(APP_SECTIONS)[index] as AppSection;
      changedSectionVisibility(section);

      if (!target) return;

      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    },
    [changedSectionVisibility],
  );

  const handleToInitialPage = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full justify-center border-b bg-background">
      <div className="flex max-w-7xl w-full items-center justify-between px-3.5">
        <div
          className="flex cursor-pointer select-none items-center gap-2"
          onClick={handleToInitialPage}
        >
          <div className="relative size-9 overflow-hidden rounded-full border-2 border-muted-foreground">
            <BaseImage src={profileImg.src} alt="profile" />
          </div>
          <h1 className="text-[15px] font-semibold text-muted-foreground">
            <strong>Gui.</strong> Sebastião
          </h1>
        </div>
        <DesktopNav items={navItems} active={active} onNavigate={handleNavigate} />
        <Actions menuOpen={menuOpen} onToggleMenu={handleToggleMenu} />
        <AnimatePresence>
          {menuOpen && <MobileMenu items={navItems} active={active} onNavigate={handleNavigate} />}
        </AnimatePresence>
      </div>
    </header>
  );
};
