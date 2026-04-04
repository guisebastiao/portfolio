import type { Variants } from "motion/react";

export const slideX = (x: number): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
    x,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
});
