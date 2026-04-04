import type { Variants } from "motion/react";

export const fade = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay,
    },
  },
});
