import type { Variants } from "motion/react";

export const fadeScale = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay,
    },
  },
});
