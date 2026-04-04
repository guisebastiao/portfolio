import type { Variants } from "motion/react";

export const fadeScale = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      delay,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  },
});
