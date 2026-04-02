import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-container]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;

        const index = Array.from(sections).indexOf(visible.target);
        setActive(index);
      },
      { rootMargin: "-50% 0% -50% 0%" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return { active };
};
