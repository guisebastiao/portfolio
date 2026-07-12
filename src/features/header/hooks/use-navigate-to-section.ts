import { useCallback } from "react";

const HEADER_HEIGHT = 64;

export const useNavigateToSection = () => {
  const navigateTo = useCallback((index: number) => {
    const target = document.querySelectorAll("[data-container]")[index] as HTMLElement;

    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return navigateTo;
};
